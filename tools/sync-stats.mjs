// Statistik-Abgleich: nach jeder Änderung an Einträgen einmal laufen lassen. Vier Schritte:
// ① alle Kennzahlen des Buchs neu rechnen und in README.md, index.html und tools/og.html zurückschreiben;
// ② tools/check-refs.mjs aufrufen, damit docs/verweis-abgleich.md neu entsteht;
// ③ tools/check-plain.mjs aufrufen, um die Klartext-Zeilen zu prüfen; ein Fund bricht nicht ab;
// ④ tools/og.html mit einem kopflosen Chrome neu zu og.png rendern.
//
//   node tools/sync-stats.mjs                   # alles
//   node tools/sync-stats.mjs --no-screenshot   # ohne Screenshot
//   node tools/sync-stats.mjs --check           # nur ① vergleichen, nichts schreiben, Exit 1 bei veralteten Zahlen (CI)
//
// Chrome wird an den üblichen Installationsorten gesucht; liegt es woanders, die Umgebungsvariable
// CHROME auf die ausführbare Datei setzen.
// og.html hatte ursprünglich „Microsoft YaHei" gesetzt; auf Linux fehlt die Schrift und der
// Screenshot weicht von Windows ab. Seit der Portierung steht dort eine Schriftkette ohne
// CJK-Abhängigkeit, deshalb kann ④ jetzt überall laufen. CI fährt trotzdem nur --check.
//
// 2026-09-29 aus sync-stats.ps1 portiert, ps1 ist gelöscht: es lief nur unter Windows, und
// PRs, die direkt auf der Weboberfläche gemergt wurden, kamen gar nicht daran vorbei — veraltete
// Zahlen fielen nirgends auf.
// ① ersetzt ausschließlich die Ziffern selbst, keinen anderen Text.
// Zählweise: Einträge = Zahl der ###-Überschriften in book/*.md; Abschnitte = Zahl der
// book/*.md-Dateien; A/B/C = erster Buchstabe der Evidenzstufe (der Zusatz „Streitfall" ändert
// nichts); Streitfälle = Anmerkungen, die mit „Streitfall" beginnen; TODO = Zeilen mit
// „noch zu prüfen" oder „TODO"; Links = Zahl aller http(s) in den „- Quellen:"- und
// „- Anmerkung:"-Zeilen; die Regeln der drei Kosten-Nutzen-Stufen sind aus index.html abgeschrieben.
// Zeilen werden mit /\r?\n/ getrennt, Begründung im Kopf von check-refs.mjs.
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdtempSync, rmSync, statSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');
const read = f => readFileSync(join(ROOT, f), 'utf8');

// Die Stufenregeln stehen in index.html in den Zeilen COST_W und e.ratio. Ändert sich dort etwas,
// muss es hier mitgeändert werden — deshalb wird zuerst verglichen und bei Abweichung abgebrochen.
const indexText = read('index.html');
const COST_W_LINE = "const COST_W = { money:{'0':0,'wenig':1,'viel':2}, time:{'wenig':0,'mittel':1,'viel':2}, will:{'nein':0,'etwas':1,'ja':2} };";
const RATIO_LINE = "e.ratio = e.level === 'hoch' ? (e.cs === 0 ? 'sehr hoch' : (e.cs <= 2 ? 'hoch' : 'mittel'))";
if (!indexText.includes(COST_W_LINE)) throw new Error('Die COST_W-Zeile in index.html hat sich geändert — die Kosten-Gewichte in diesem Skript nachziehen');
if (!indexText.includes(RATIO_LINE)) throw new Error('Die e.ratio-Zeile in index.html hat sich geändert — die Stufenregel in diesem Skript nachziehen');

const W = {
  money: { '0': 0, 'wenig': 1, 'viel': 2 },
  time: { 'wenig': 0, 'mittel': 1, 'viel': 2 },
  will: { 'nein': 0, 'etwas': 1, 'ja': 2 },
};

function ratioOf(cost, level) {
  if (level === 'hoch') return cost === 0 ? 'sehr hoch' : cost <= 2 ? 'hoch' : 'mittel';
  return level === 'mittel' && cost === 0 ? 'hoch' : 'mittel';
}

const bookFiles = readdirSync(join(ROOT, 'book')).filter(f => f.endsWith('.md')).sort();
const sections = bookFiles.length;
let entries = 0, dispute = 0, todo = 0, links = 0;
const grade = { A: 0, B: 0, C: 0 };
const ratio = { 'sehr hoch': 0, 'hoch': 0, 'mittel': 0 };

for (const f of bookFiles) {
  for (const line of read(join('book', f)).split(/\r?\n/)) {
    if (line.startsWith('### ')) entries++;
    const g = line.match(/^- Evidenzstufe: ([ABC])/);
    if (g) grade[g[1]]++;
    if (line.startsWith('- Anmerkung: Streitfall')) dispute++;
    if (/noch zu prüfen|TODO/.test(line)) todo++;
    if (/^- (Quellen|Anmerkung): /.test(line)) links += (line.match(/https?:\/\//g) ?? []).length;
    const t = line.match(/<!--\s*Kostenlabel:\s*Geld=(\S+)\s+Zeit=(\S+)\s+Willenskraft=(\S+)\s+Nutzen=(\S+)\s+Bezug=/);
    if (t) ratio[ratioOf(W.money[t[1]] + W.time[t[2]] + W.will[t[3]], t[4])]++;
  }
}

const tagged = ratio['sehr hoch'] + ratio['hoch'] + ratio['mittel'];
if (tagged !== entries) console.warn(`Warnung: ${entries - tagged} Einträge ohne Kostenlabel — die drei Stufen ergeben nicht die Eintragszahl`);
if (grade.A + grade.B + grade.C !== entries) console.warn('Warnung: Evidenzstufen und Eintragszahl passen nicht zusammen — prüfen, ob ein Eintrag keine Evidenzstufe hat');

// Die drei Prozentsätze werden nach dem größten Rest verteilt: erst abrunden, dann die übrigen
// Prozentpunkte nach der Größe des Restes auffüllen. Einzelnes Runden ergibt 99 oder 101
// (am 2026-09-21 beim Anlegen von Abschnitt 33 passiert), hier summieren sie sich immer auf 100.
const ORDER = ['sehr hoch', 'hoch', 'mittel'];
const pct = {}, rem = {};
for (const k of ORDER) {
  const exact = ratio[k] * 100 / entries;
  pct[k] = Math.floor(exact);
  rem[k] = exact - pct[k];
}
const short = 100 - ORDER.reduce((s, k) => s + pct[k], 0);
for (const k of [...ORDER].sort((a, b) => rem[b] - rem[a]).slice(0, Math.max(short, 0))) pct[k]++;

console.log(`Einträge ${entries} ｜ Abschnitte ${sections} ｜ A ${grade.A} B ${grade.B} C ${grade.C} ｜ Streitfälle ${dispute} ｜ TODO ${todo} ｜ Links ${links}`);
console.log(`Kosten-Nutzen: sehr hoch ${ratio['sehr hoch']} (${pct['sehr hoch']} %), hoch ${ratio['hoch']} (${pct['hoch']} %), mittel ${ratio['mittel']} (${pct['mittel']} %)`);
console.log('');

const EDITS = [
  ['README.md', 'Empfehlungen im Text', /(\d+) Empfehlungen/g, `${entries} Empfehlungen`],
  ['README.md', 'Empfehlungen-Badge', /Empfehlungen-\d+/g, `Empfehlungen-${entries}`],
  ['README.md', 'Evidenz-Badge', /Evidenzstufen-A%20\d+%20%C2%B7%20B%20\d+%20%C2%B7%20C%20\d+/g,
    `Evidenzstufen-A%20${grade.A}%20%C2%B7%20B%20${grade.B}%20%C2%B7%20C%20${grade.C}`],
  ['README.md', 'Quellen-Badge', /Quellen-\d+%20Links/g, `Quellen-${links}%20Links`],
  ['README.md', 'A-Stufe im Leseteil', /(\d+) Einträge mit konkreten Zahlen/g, `${grade.A} Einträge mit konkreten Zahlen`],
  ['README.md', 'Stufe sehr hoch im Leseteil', /(\d+) Einträge, die kein Geld kosten/g, `${ratio['sehr hoch']} Einträge, die kein Geld kosten`],
  ['README.md', 'Evidenzabsatz', /haben \d+ die Stufe A, \d+ die Stufe B und \d+ die Stufe C\. Weitere \d+ sind als Streitfall markiert\./g,
    `haben ${grade.A} die Stufe A, ${grade.B} die Stufe B und ${grade.C} die Stufe C. Weitere ${dispute} sind als Streitfall markiert.`],
  ['README.md', 'Kosten-Nutzen-Absatz', /haben \d+ ein sehr hohes Kosten-Nutzen-Verhältnis \(\d+ %\), \d+ ein hohes \(\d+ %\) und \d+ ein mittleres \(\d+ %\)/g,
    `haben ${ratio['sehr hoch']} ein sehr hohes Kosten-Nutzen-Verhältnis (${pct['sehr hoch']} %), ${ratio['hoch']} ein hohes (${pct['hoch']} %) und ${ratio['mittel']} ein mittleres (${pct['mittel']} %)`],
  ['README.md', 'Dateizahl', /in \d+ Dateien aufgeteilt/g, `in ${sections} Dateien aufgeteilt`],
  ['tools/lib/book.mjs', 'Zahl im Buchtitel', /Lebe besser: \d+ Empfehlungen/g, `Lebe besser: ${entries} Empfehlungen`],
  ['skills/lebensentscheidungen/SKILL.md', 'Zahl in der Beschreibung', /Lebe besser: \d+ Empfehlungen/g, `Lebe besser: ${entries} Empfehlungen`],
  ['index.html', 'Kopfzeile', /(\d+) Abschnitte mit (\d+) Empfehlungen/g, `${sections} Abschnitte mit ${entries} Empfehlungen`],
  ['index.html', 'Beschreibungen', /(\d+) Empfehlungen/g, `${entries} Empfehlungen`],
  ['index.html', 'numberOfPages', /numberOfPages":\d+/g, `numberOfPages":${entries}`],
  ['index.html', 'Dateizahl im Fuß', /aus den \d+ Dateien/g, `aus den ${sections} Dateien`],
  ['tools/og.html', 'og Empfehlungen', /<b>\d+<\/b> Empfehlungen/g, `<b>${entries}</b> Empfehlungen`],
  ['tools/og.html', 'og A-Stufe', /A-Evidenz <b>\d+<\/b>/g, `A-Evidenz <b>${grade.A}</b>`],
  ['tools/og.html', 'og Quellenlinks', /<b>\d+<\/b> Quellenlinks/g, `<b>${links}</b> Quellenlinks`],
];

const texts = new Map();
const stale = [];
for (const [file, label, pattern, repl] of EDITS) {
  const text = texts.get(file) ?? read(file);
  const found = [...text.matchAll(pattern)];
  if (found.length === 0) throw new Error(`In ${file} wurde „${label}" nicht gefunden, Muster: ${pattern}`);
  const old = found[0][1] ?? found[0][0];
  // Das Ersetzungsziel als Funktion, damit ein $ in der Zeichenkette nicht als Gruppenreferenz gilt
  const updated = text.replace(pattern, () => repl);
  texts.set(file, updated);
  if (updated === text) {
    console.log(`  ${file} ${label}: ${old} (unverändert)`);
    continue;
  }
  stale.push(`${file} ${label}`);
  console.log(`  ${file} ${label}: ${old} -> ${CHECK ? 'veraltet' : `aktualisiert (${found.length} Stellen)`}`);
}

if (CHECK) {
  if (stale.length === 0) {
    console.log('\nPrüfung der Statistikzahlen bestanden');
    process.exit(0);
  }
  console.log(`\n${stale.length} Stellen mit veralteten Zahlen. Lokal node tools/sync-stats.mjs laufen lassen (erzeugt auch og.png neu) und dann committen.`);
  process.exit(1);
}

for (const [file, text] of texts) if (text !== read(file)) writeFileSync(join(ROOT, file), text);

// ② Verweistabelle neu rechnen: Ein eingefügter oder gelöschter Eintrag verschiebt alle folgenden
// „Nr. X" — und die verschobenen Nummern liegen meist noch im gültigen Bereich (2026-09-19 waren es
// sechs Stellen in Abschnitt 7). Nur wenn „Verweis → Zielüberschrift" in einer Datei steht, ist die
// Verschiebung im Diff zu sehen. Läuft vor dem Screenshot, damit --no-screenshot es auch erreicht.
const runTool = name => spawnSync(process.execPath, [join(ROOT, 'tools', name)], { stdio: 'inherit' }).status;
console.log('');
if (runTool('check-refs.mjs') !== 0) throw new Error('check-refs.mjs ist fehlgeschlagen');
console.log('Vor dem Commit einen Blick auf den Diff von docs/verweis-abgleich.md werfen: Steht die Nummer unverändert da, aber die „Ziel"-Spalte hat sich geändert, ist der Verweis verschoben worden.');

// ③ Die Klartext-Prüfung meldet nur, sie bricht nicht ab: Die Zahlen sind schon abgeglichen, ein
// Abbruch hier ließe vermuten, die Statistik sei nicht aktualisiert. In der CI wird sie rot.
console.log('');
if (runTool('check-plain.mjs') !== 0) console.log('Die oben aufgeführten Klartext-Zeilen vor dem Commit ändern (Regeln im Kopf von tools/check-plain.mjs).');

if (process.argv.includes('--no-screenshot')) process.exit(0);

// ④ og.png rendern
const CHROME_PATHS = [
  process.env.CHROME,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
];
const chrome = CHROME_PATHS.find(p => p && existsSync(p));
if (!chrome) throw new Error('Chrome nicht gefunden — die Umgebungsvariable CHROME auf die ausführbare Datei setzen oder mit --no-screenshot den Screenshot überspringen');

// Jedes Mal ein frisches user-data-dir: sonst rendert Chrome das alte og.html aus dem Cache und der
// Screenshot zeigt weiter die alten Zahlen. --screenshot braucht einen absoluten Pfad: mit einem
// relativen Pfad schreibt Chrome nichts und meldet trotzdem 0.
const profile = mkdtempSync(join(tmpdir(), 'og-shot-'));
const target = join(ROOT, 'og.png');
const startedAt = Date.now();
// Chrome schreibt og.png in unter einer Sekunde, beendet sich auf macOS aber nicht mehr. Ohne
// Zeitlimit wartet spawnSync endlos und der ganze Lauf bleibt stehen; die Selbstprüfung unten
// deckt einen echten Fehlschlag weiterhin ab.
spawnSync(chrome, [
  '--headless', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
  '--window-size=1200,630', `--user-data-dir=${profile}`, `--screenshot=${target}`,
  pathToFileURL(join(ROOT, 'tools', 'og.html')).href,
], { stdio: 'ignore', timeout: 60_000, killSignal: 'SIGKILL' });
rmSync(profile, { recursive: true, force: true });

// Selbstprüfung: Die Datei stammt aus diesem Lauf und ihre Größe liegt im normalen Bereich. Sind
// beide Bedingungen erfüllt, muss das Bild nicht mehr geöffnet werden — das spart einen Bildaufruf.
const png = statSync(target);
if (png.mtimeMs < startedAt - 1000) throw new Error('og.png wurde in diesem Lauf nicht geschrieben, der Screenshot ist fehlgeschlagen');
if (png.size < 120 * 1024 || png.size > 400 * 1024) throw new Error(`og.png hat eine ungewöhnliche Größe (${png.size} Bytes), normal sind 120 KB bis 400 KB — öffnen und prüfen, ob das Rendering kaputt ist`);
console.log(`\nog.png neu erzeugt: ${png.size} Bytes, Selbstprüfung bestanden. Nur nach einer Änderung am Layout von tools/og.html lohnt ein Blick auf das Bild.`);
