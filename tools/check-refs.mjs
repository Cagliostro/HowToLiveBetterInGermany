// Querverweis-Abgleich: jede Stelle „Nr. X" im Text wird auf den Titel aufgelöst, den sie
// tatsächlich trifft, und nach docs/verweis-abgleich.md geschrieben. Die Datei liegt im Repo,
// also zeigt `git diff` die Verschiebung direkt an, sobald das Einfügen oder Löschen von
// Einträgen eine Referenz verrutscht — Nummer unverändert, Titel geändert heißt: verrutscht.
//
//   node tools/check-refs.mjs            # Abgleichstabelle neu erzeugen (sync-stats.mjs ruft es auf)
//   node tools/check-refs.mjs --check    # nur prüfen, nichts schreiben, Exit 1 bei Fehlern (CI)
//   node tools/check-refs.mjs --suspect  # zusätzlich Anker-Verdachtsfälle mit Messwerten
//
// Warum es das braucht: Eintragsnummern hängen an der Position, die Referenz im Text merkt sich
// nur die Position, nicht den Inhalt. Am 2026-09-19 wurden in Abschnitt 7 sechs falsche Verweise
// gefunden („medizinische Hilfe" zeigte auf Grundsicherung, „Notunterkunft" auf den falschen
// Eintrag) — alle innerhalb des gültigen Bereichs. Eine reine Bereichsprüfung findet keinen davon.
//
// Deutsch-spezifisch, und darin liegt eine echte Vereinfachung gegenüber dem chinesischen
// Original: Eintragsverweise heißen «Nr. N», Rechtsnormen heißen «§ N» / «Art. N» / «Artikel N».
// Die beiden Formen unterscheiden sich schon am Wort, deshalb entfällt hier die fehleranfällige
// Heuristik «Gesetzeszitat oder Eintragsverweis?» des Originals — die hat dort einmal zwölf
// Verweise stillschweigend übersprungen, weil «办法» und «违法» das Zeichen «法» enthalten.
// Es bleibt eine schmale Absicherung für Schreibweisen wie «Verordnung Nr. 8» im Quellenfeld,
// siehe CITE unten.
//
// Die deutsche Fassung bringt zwei weitere Normschreibweisen mit, die «Nr.» enthalten und deshalb
// zunächst als Eintragsverweis gelesen wurden (gefunden am 2026-10-01 in Abschnitt 5, beide
// Klassen kommen bisher nur dort vor):
//   ① das Paragrafenzitat mit Nummer: «§ 437 Nr. 1 und 2 BGB», «§ 46 Abs. 2 Nr. 8 EStG»,
//      «§ 10 Abs. 1 Nr. 2 Buchstabe b EStG» — «Nr.» steht hier innerhalb der Paragrafenangabe;
//   ② die Verordnung mit Unionszusatz: «PRIIPs-Verordnung (EU) Nr. 1286/2014»,
//      «Verordnung (EG) Nr. 765/2008», «Verordnung (EU) Nr. 1169/2011» — CITE sah nur das Wort
//      unmittelbar vor «Nr.» und stolperte über die eingeschobene Klammer.
// Beide Erweiterungen greifen nur bei genau dieser Fortsetzung; ein Eintragsverweis hinter einem
// Paragrafenzitat («§ 823 BGB, siehe Nr. 5») wird weiter gefunden.
//
// Zeilen werden einheitlich mit /\r?\n/ getrennt. Unter book/ sind die Zeilenenden gemischt
// (CRLF und LF), und der Punkt in JS-Regexen matcht kein \r, obwohl \r als Zeilenende zählt.
// Bliebe das \r stehen, fände /^### (\d+)\. (.*)$/ in einer CRLF-Datei keine einzige Überschrift.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { resolve, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CHECK_ONLY = process.argv.includes('--check');

// Nackte Verweise innerhalb eines Abschnitts («siehe Nr. 8») werden nur in diesen Feldern
// gesucht. Das Quellenfeld ist ausgenommen, weil dort «Art. N» und «Verordnung Nr. N» stehen —
// reine Literatur- und Normangaben, keine Eintragsverweise.
const FIELDS = /^- (Klartext|Nutzen|Anmerkung|Kosten): /;
// Verweise mit Abschnittsnummer («siehe Abschnitt 11, Nr. 16») sind dagegen eindeutig und
// stehen auch im Quellenfeld. In der chinesischen Fassung steht genau so einer im Quellenfeld
// von Abschnitt 26 und wäre um ein Haar übersehen worden.
const CROSS_FIELDS = /^- (Klartext|Nutzen|Anmerkung|Kosten|Quellen): /;

const files = readdirSync(resolve(ROOT, 'book')).filter(f => /^\d\d-.*\.md$/.test(f)).sort();
// Die Langtexte unter docs/ werden mitgescannt. Sie standen (wie die Einleitungen der Abschnitte)
// lange außerhalb des Suchbereichs: verrutschte Nummern fielen weder bei --check noch im
// Tabellen-Diff auf. Beim Nachzählen am 2026-09-21 fanden sich in drei Langtexten 23 Verweise,
// die nie geprüft worden waren.
// Nur .md direkt unter docs/. Das Unterverzeichnis docs/quellen-pruefung/ bleibt außen vor:
// dort steht der Prüfverlauf, die Nummern darin sind historisch und sollen dem Text nicht folgen.
// Die Abgleichstabelle selbst ist ebenfalls ausgenommen.
const docs = readdirSync(resolve(ROOT, 'docs')).filter(f => f.endsWith('.md') && f !== 'verweis-abgleich.md').sort();

// Erst die Eintragstitel jedes Abschnitts einlesen: sections[Abschnitt] = { file, titles: { Nr: Titel } }
const sections = new Map();
for (const f of files) {
  const num = Number(f.slice(0, 2));
  const titles = new Map();
  for (const line of readFileSync(resolve(ROOT, 'book', f), 'utf8').split(/\r?\n/)) {
    const m = /^### (\d+)\. (.*)$/.exec(line);
    if (m) titles.set(Number(m[1]), m[2].trim());
  }
  sections.set(num, { file: f, titles });
}

// Ein Verweis kann als «Nr. 3, 10 und 11» dastehen; das wird in einzelne Nummern zerlegt.
// Auch die Bereichsschreibweise «Nr. 11 bis 14» wird erkannt.
const RANGE = /^\s*(\d+)\s*(?:bis)\s*(?:Nr\.\s*)?(\d+)\s*$/;
// Rückgabe: [Nummer, ob aus einem Bereich entstanden]. Ein Bereich meint einen ganzen Block von
// Einträgen («die Einträge zum Selbstjustiz-Thema»), und für den lässt sich nicht für jede
// Nummer einzeln ein Anker setzen. Deshalb sind aus Bereichen entstandene Nummern von der
// Ankerpflicht befreit — sie stehen weiterhin in der Tabelle, und ein Verrutschen fällt dort
// an der geänderten Titelspalte auf.
const nums = s => {
  const out = [];
  for (const part of s.split(/,|\s+und\s+/)) {
    const r = RANGE.exec(part);
    if (r) {
      const [a, b] = [Number(r[1]), Number(r[2])];
      if (b >= a && b - a <= 30) for (let i = a; i <= b; i++) out.push([i, true]);
      continue;
    }
    const n = Number(part.trim());
    if (Number.isFinite(n)) out.push([n, false]);
  }
  return out;
};
// Die Schreibweise des Nummernteils: «3», «3, 10», «11 bis 14», «11 und Nr. 14».
// Bewusst \d+ statt einer faulen Zeichenklasse: eine faule Quantifizierung wie [\d,\s]+? bricht
// nach der ersten Ziffer ab, sobald danach ein Leerzeichen steht — aus «Nr. 99» würde «Nr. 9»
// und aus «Nr. 11 bis 14» nur «Nr. 11», der Rest bliebe als Text stehen. Der Fehler steckt auch
// im chinesischen Original; dort fällt er nicht auf, weil Bereiche ohne Leerzeichen geschrieben
// werden («第11到14条»), im Deutschen mit «bis» ist das Leerzeichen aber unvermeidlich.
const SPEC = '\\d+(?:\\s*,\\s*\\d+)*(?:\\s*(?:bis|und)\\s*(?:Nr\\.\\s*)?\\d+)?';

const out = [];
const problems = [];
const suspects = [];
const weak = [];
let total = 0;

// Abkürzungspunkte sind keine Satzenden. Vor dem Zerschneiden werden sie durch einen
// gleich langen Platzhalter ersetzt, damit die Indizes unverändert bleiben. Ohne das würde
// «Nr. 6 (Vor der Unterschrift …)» direkt hinter «Nr.» abgeschnitten und der Anker ginge
// verloren — bei deutschen Texten mit ihren vielen Abkürzungen der häufigste Fehlerfall.
const ABBR = /\b(Nr|Art|Abs|Anh|Bd|Kap|S|Ziff|lit|vgl|bzw|ca|ggf|evtl|usw|insb|sog|resp|inkl|exkl|z\.\s*B|d\.\s*h|u\.\s*a|o\.\s*Ä|i\.\s*d\.\s*R|s\.\s*o|s\.\s*u|m\.\s*E|z\.\s*T|o\.\s*g)\./g;
const dotSafe = s => s.replace(ABBR, m => m.replace(/\./g, '\u0001'));

// Der Satz vor der Referenz sagt oft schon, worauf sie zeigt («medizinische Hilfe (siehe Nr. 11)»).
// Die ganze Teilstrecke wird mitgeführt, damit man beim Durchsehen der Tabelle nicht im Text
// nachschlagen muss. Grenze ist das nächste Satzzeichen, nicht eine feste Zeichenzahl: eine feste
// Grenze ließ früher mehrere korrekte Verweise verdächtig aussehen.
const ctxOf = (line, idx) => {
  const before = dotSafe(line.slice(0, idx));
  let start = -1;
  for (const p of ['.', ';', '!', '?', ':']) start = Math.max(start, before.lastIndexOf(p));
  return line.slice(start + 1, idx).slice(-90).replace(/\|/g, '｜');
};
// Das Fenster zum Ankerprüfen ist enger als das oben: nur die Teilstrecke, in der die Referenz
// steht. Im satzbreiten Fenster treffen kurze Allerweltswörter wie «Zeit», «Geld», «Kann»
// zufällig auf irgendeinen Titel, und der Anker wäre bloß geliehen.
// Ist die Teilstrecke zu kurz («…, siehe Nr. 11» — übrig bleibt fast nichts), wird eine
// Teilstrecke zurückgegangen, sonst gälte ein korrekter Verweis als nackte Nummer.
// Komma-Aufzählungen, Anführungszeichen und Klammern sind keine Grenzen: der Anker von
// «Lebensmittelzusatzstoffe, Verarbeitungsfleisch (Nr. 3)» steht hinter dem Komma, der von
// «Budget für ‚eine Stufe über den anderen' siehe Nr. 24» in den Anführungszeichen.
const CLAUSE = ['.', ';', '!', '?', ':', ','];
const FILLER = /siehe|vgl|gemäß|nach|wie|auch|oder|und|der|die|das|den|dem|des|ein|eine|einen|im|in|zu|zum|zur|von|mit|für|bei|an|auf|aus/g;
const narrowOf = (line, idx) => {
  const before = dotSafe(line.slice(0, idx));
  const cut = s => {
    let start = -1;
    for (const p of CLAUSE) start = Math.max(start, s.lastIndexOf(p));
    return { head: s.slice(0, start + 1), tail: s.slice(start + 1) };
  };
  const last = cut(before);
  if (last.tail.replace(FILLER, '').replace(/[^A-Za-zÄÖÜäöüß0-9]/g, '').length >= 6) return line.slice(idx - last.tail.length, idx).slice(-60);
  const merged = cut(last.head.slice(0, -1)).tail + last.tail;
  return line.slice(idx - merged.length, idx).slice(-60);
};
// Auch der Text hinter der Referenz zählt als Anker: «Nr. 16 (Darlehen und Bürgschaft)» stellt
// das Schlüsselwort hinter die Nummer. Grenze ist das erste Satzzeichen, höchstens 100 Zeichen.
// Eine feste Zeichenzahl ginge nicht: eine lange Nummernreihe wie «Abschnitt 1, Nr. 7, 8, 14,
// 17, 18, 19, 23, 24, 29 (Blutdruck, Blutzucker …)» schöbe die Angabe aus dem Fenster.
const afterOf = (line, idx) => {
  // Erst die Referenz entfernen, dann die Abkürzungspunkte schützen. Umgekehrt würde der
  // Punkt in «Nr.» zu einem Platzhalter, das Entfernungsmuster fände «Nr\\.» nicht mehr, und
  // die Referenz bliebe im Umfeld stehen — dann wäre sie ihr eigener Anker.
  const rest = line.slice(idx).replace(new RegExp(`^(?:Abschnitt\\s*\\d+\\s*,?\\s*)?Nr\\.\\s*(?:${SPEC})`), '');
  const safe = dotSafe(rest);
  const end = safe.search(/[.!?;]/);
  return (end === -1 ? safe : safe.slice(0, end)).slice(0, 100).replace(/\|/g, '｜').replace(/\u0001/g, '.');
};

// Suchbereich: je Abschnitt eine Datei unter book/, je Langtext eine unter docs/.
const targets = [
  ...files.map(f => ({ f, dir: 'book', isDoc: false })),
  ...docs.map(f => ({ f, dir: 'docs', isDoc: true })),
];

for (const { f, dir, isDoc } of targets) {
  const num = isDoc ? 0 : Number(f.slice(0, 2));
  const self = isDoc ? null : sections.get(num);
  const lines = readFileSync(resolve(ROOT, dir, f), 'utf8').split(/\r?\n/);
  const rows = [];
  // cur ist die Nummer des Eintrags, in dem wir gerade sind; 0 heißt: noch vor dem ersten
  // Eintrag (Abschnittseinleitung, oder beliebige Stelle im Langtext).
  // unit ist der Name für die Spalte «Fundstelle»: beim Eintrag «Nr. N», in der Einleitung
  // «Abschnittskopf», im Langtext die letzte Zwischenüberschrift.
  let cur = 0;
  let unit = isDoc ? 'Anfang' : 'Abschnittskopf';

  lines.forEach((line, i) => {
    if (isDoc) {
      const h = /^#{1,6}\s+(.+?)\s*$/.exec(line);
      if (h) { unit = h[1].slice(0, 24); return; }
    } else {
      const t = /^### (\d+)\. (.*)$/.exec(line);
      if (t) { cur = Number(t[1]); unit = `Nr. ${cur}`; return; }
    }
    // Im Eintragstext werden nur die genannten Felder gescannt. Einleitung und Langtext sind
    // gewöhnliche Absätze, sie passen auf kein Feldpräfix und laufen als ganze Zeile durch.
    const inEntry = !isDoc && cur > 0;
    if (inEntry ? !CROSS_FIELDS.test(line) : !line.trim()) return;

    // Relative Verweise («siehe nächste Nr.», «die Strafe steht in der vorigen Nr.») sind
    // grundsätzlich verboten: sie tragen keine Nummer, verschieben sich beim Einfügen mit und
    // sind weder im Tabellen-Diff noch von der Nackte-Nummer-Prüfung zu fassen.
    // Am 2026-09-20 fand eine Suche drei längst falsche Stellen: der Verweis der HPV-Impfung
    // zeigte auf die Brustkrebsvorsorge (richtig wäre Gebärmutterhalskrebs gewesen), der
    // Strafverweis des Drohungs-Eintrags auf den Gedanken-Eintrag, der Verweis des
    // Arbeitslosmeldungs-Eintrags auf den Beweis-Sicherungs-Eintrag.
    // «letzte Nr.» als Zeitangabe («der letzte Eintrag des Abschnitts») ist mitgemeint und
    // soll ebenfalls als Nummer geschrieben werden.
    const RELATIVE = /(?<![\wÄÖÜäöüß])(vorige|voriger|voriges|vorherige|vorheriger|nächste|nächster|nächstes|nachfolgende|nachfolgender|letzte|letzter|letztes|obige|obiger|besagte)\s+(Nr\.|Nummer|Punkt|Eintrag|Absatz)|(?<![\wÄÖÜäöüß])(Nr\.|Nummer)\s+(davor|danach|darüber|darunter)\b/gi;
    for (const m of line.matchAll(RELATIVE)) {
      // «der letzte Absatz dieses Artikels» meint einen Absatz der zitierten Norm, nicht einen
      // Eintrag dieses Abschnitts: er verschiebt sich nicht, wenn Einträge eingefügt werden, und
      // ein Anker wäre dort sinnlos. Gebunden ist nur «Absatz» — «Nr.» und «Eintrag» zeigen immer
      // auf Einträge. Vorbild ist «这一条的末款管的是帮忙的人» in Abschnitt 9, Nr. 21.
      const bound = /^\s+(?:des|der|dieses|dieser|von)\s+(?:Artikels?|Art\.|§|Gesetzes?|Verordnung|Vorschrift)/.test(line.slice(m.index + m[0].length));
      if (bound) continue;
      problems.push(`${f}:${i + 1} ${unit} nutzt einen relativen Verweis «${m[0]}» — als «Nr. N (Ankerwort)» schreiben`);
    }

    // Abschnittsübergreifend: Abschnitt N, Nr. X
    for (const m of line.matchAll(new RegExp(`Abschnitt\\s*(\\d+)\\s*,?\\s*Nr\\.\\s*(${SPEC})`, 'g'))) {
      const target = sections.get(Number(m[1]));
      for (const [x, range] of nums(m[2])) {
        const title = target?.titles.get(x);
        rows.push({ from: unit, range, ref: `Abschnitt ${m[1]}, Nr. ${x}`, title, line: i + 1, ctx: ctxOf(line, m.index), narrow: narrowOf(line, m.index), after: afterOf(line, m.index) });
        if (!title) problems.push(`${f}:${i + 1} ${unit} verweist auf «Abschnitt ${m[1]}, Nr. ${x}» — diesen Eintrag gibt es in dem Abschnitt nicht`);
      }
    }

    // Im Langtext gibt es kein «dieser Abschnitt»; eine nackte «Nr. N» meint dort eine
    // Normstelle und wird nicht gescannt.
    if (isDoc) return;

    // Innerhalb des Abschnitts: jede «Nr. X», unabhängig vom einleitenden Wort. Im Text steht
    // weit mehr als «siehe Nr. X» — auch «nach Nr. 1 vorgehen», «Methode wie Nr. 4» oder
    // «zwischen Nr. 4 und Nr. 7 wählen». Eine frühere Fassung kannte nur drei Einleitungen und
    // übersah den Rest. Das Quellenfeld wird als ganze Zeile ausgelassen (nur Normangaben).
    if (inEntry && !FIELDS.test(line)) return;
    const stripped = line.replace(new RegExp(`Abschnitt\\s*\\d+\\s*,?\\s*Nr\\.\\s*${SPEC}`, 'g'), '');
    for (const m of stripped.matchAll(new RegExp(`Nr\\.\\s*(${SPEC})`, 'g'))) {
      // Unterscheidung Normstelle oder Eintragsverweis. Im deutschen Text ist sie schon durch
      // das Wort getroffen (§ / Art. gegen Nr.), es bleibt die Absicherung für den Fall, dass
      // eine Nummer doch einmal mit einer Verordnungsangabe zusammensteht: «Verordnung Nr. 8»,
      // «Richtlinie Nr. 29». Nur der unmittelbar davorstehende Text zählt, kein Fenster von
      // N Zeichen — Eintragsverweise stehen durchaus am Satzanfang.
      const tail = stripped.slice(0, m.index).replace(/\s+$/, '');
      // «Dokument» steht für die Aktenzeichen der chinesischen Behörden («〔2025〕22 号»), die in
      // den deutschen Text als «Dokument Nr. 22 … von 2025» übersetzt sind — dieselbe Klasse wie
      // «Verordnung Nr. 8». Ohne diesen Eintrag galten sie als Eintragsverweise und die
      // Bereichsprüfung meldete sie als «vielleicht eine Normstelle».
      const CITE = /(Verordnung|Gesetz|Dokument(?:s|es|e|en)?|Richtlinie|Satzung|Übereinkommen|Konvention|Erlass|Anordnung|Verfügung|Runderlass|Norm|DIN|EN|ISO|GB|Az\.|Aktenzeichen|Beschluss|Urteil|Rn\.|Rz\.)(?:\s*\((?:EU|EG|EWG|Euratom)\))?$/i;
      if (CITE.test(tail)) continue;
      // Paragrafenzitat mit Nummer: «§ 437 Nr. 1 und 2 BGB», «§ 46 Abs. 2 Nr. 8 EStG». Der Text
      // vor «Nr.» endet dann auf «§ N», «§ N Abs. M», «§ N Satz M» oder einer Aufzählung davon
      // («§ 434 Abs. 2, § 437»). Nur diese Fortsetzung zählt: Hinter «§ 823 BGB, siehe» steht
      // kein Paragrafenzitat mehr, dort wird der Verweis weiter als Eintragsverweis geführt.
      const PARA = /(?:§+\s*\d+[a-zA-Z]?(?:\s+(?:Abs\.|Satz|Halbs\.|Alt\.|Buchst\.|Var\.)\s*[a-z0-9]+)?(?:\s*,\s*)?)+$/;
      if (PARA.test(tail)) continue;
      // Aktenzeichen der chinesischen Behörden in Umschrift: «Guobanfa Nr. 27 von 2020»,
      // «Renshebufa Nr. 56 von 2021», «Caijin Nr. 75 von 2023». Das Wort vor «Nr.» ist dort ein
      // Pinyin-Name und trifft die Liste oben nicht. Es ist dieselbe Klasse wie «Dokument Nr. 22
      // … von 2025», erkannt wird sie am Jahr hinter der Nummer — die 86 Stellen «… Nr. N von
      // JJJJ» im gescannten Bestand sind sämtlich Dokumentnummern, kein Eintragsverweis. Ohne
      // diese Regel versagen die kleinen Dokumentnummern still: Liegt die Nummer unter der
      // Eintragszahl des Abschnitts, gilt sie als Verweis und wird auf einen Eintrag gebucht,
      // der gar nicht gemeint ist (Abschnitt 31, Nr. 11: «Bekanntmachung Nr. 14 von 2023»).
      if (/^\s*(?:von|aus)\s+\d{4}\b/.test(stripped.slice(m.index + m[0].length))) continue;
      for (const [x, range] of nums(m[1])) {
        const title = self.titles.get(x);
        rows.push({ from: unit, range, ref: `Abschnitt ${num}, Nr. ${x}`, title, line: i + 1, ctx: ctxOf(stripped, m.index), narrow: narrowOf(stripped, m.index), after: afterOf(stripped, m.index) });
        // Ein Verweis über die Eintragszahl des Abschnitts hinaus ist meist eine Normstelle,
        // die als Eintragsverweis gelesen wurde. Zur Sichtung ausgeben.
        if (!title) problems.push(`${f}:${i + 1} ${unit} verweist auf «Nr. ${x}» — der Abschnitt hat nur ${self.titles.size} Einträge (vielleicht eine Normstelle)`);
        if (inEntry && x === cur) problems.push(`${f}:${i + 1} Nr. ${cur} verweist auf sich selbst`);
      }
    }
  });

  // Lässt sich der Verweis automatisch prüfen: steht im Umfeld ein Wort, das auch im Ziel-Titel
  // vorkommt? Ja → der Verweis trägt einen Anker, ein Verrutschen fällt auf. Nein → er ist eine
  // nackte Nummer und bliebe bei einem Fehler unbemerkt, ein Anker muss ergänzt werden.
  // Deutsch: gemessen wird die längste zusammenhängende Buchstabenfolge, die sowohl im Umfeld
  // als auch im Titel steht (case-insensitiv). Damit greifen auch Komposita —
  // «Mietvertrags» im Text trifft «Mietvertrag» im Titel.
  // Allerweltswörter sind der Grund für die Stufung: «Zeit», «Geld», «nicht» treffen zufällig.
  const longest = (text, title) => {
    const t = title.toLowerCase();
    let best = 0;
    for (const run of text.toLowerCase().match(/[a-zäöüß]{2,}/g) ?? []) {
      for (let i = 0; i < run.length; i++) {
        for (let n = 2; i + n <= run.length; n++) {
          if (!t.includes(run.slice(i, i + n))) break;
          best = Math.max(best, n);
        }
      }
    }
    return best;
  };
  // Zahlen und englische Kürzel sind ebenfalls Anker: 12356, AED, CT, BMI, LPR, USCIS — sie
  // sind oft genau das, worauf der Verweis zeigt.
  const token = (text, title) => (text.match(/[0-9A-Za-z]{2,}/g) ?? []).some(t => title.includes(t));
  // Schwellen: ein Treffer ab 8 Buchstaben im weiten Fenster gilt als Anker; im engen
  // Teilstrecken-Fenster genügen 6. Beide Werte sind gegen Abschnitt 15 kalibriert (die
  // Messwerte stehen in der --suspect-Ausgabe, siehe dort).
  const WIDE = 8, NARROW = 6;
  for (const r of rows) {
    if (!r.title || r.range) continue;
    const wide = r.ctx + r.after;
    const w = longest(wide, r.title);
    if (token(wide, r.title) || w >= WIDE) continue;
    const n = longest(r.narrow + r.after, r.title);
    if (n >= NARROW) continue;
    // Nur außerhalb der Teilstrecke getroffen: als schwacher Anker gesondert ausweisen.
    const why = `[weit ${w}, Teilstrecke ${n}]`;
    const list = w >= 2 ? weak : suspects;
    list.push(`${f}:${r.line} ${r.from} → „${r.ref}" ${r.title.slice(0, 34)}… ${why} …${r.ctx}[${r.ref}]${r.after}…`);
  }

  if (!rows.length) continue;
  total += rows.length;
  out.push(`## ${isDoc ? 'docs/' : ''}${basename(f, '.md')}\n`);
  out.push('| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |');
  out.push('| --- | --- | --- | --- |');
  for (const r of rows) {
    const title = r.title ? r.title : '**zeigt auf einen nicht vorhandenen Eintrag**';
    out.push(`| ${r.from} | ${r.ref} | ${title} | …${r.ctx}… |`);
  }
  out.push('');
}

const body = [
  '# Querverweis-Abgleich',
  '',
  'Diese Datei wird von `node tools/check-refs.mjs` erzeugt, nicht von Hand ändern.',
  '',
  'Ein Verweis im Text merkt sich nur die Nummer, nicht den Inhalt. Werden Einträge eingefügt',
  'oder gelöscht, verschieben sich alle folgenden Verweise — und die verschobene Nummer liegt',
  'meist noch im gültigen Bereich, eine reine Bereichsprüfung findet nichts. Deshalb steht hier',
  'zu jedem Verweis der **Titel, den er tatsächlich trifft**, und die Datei liegt im Repo: nach',
  'einer Änderung neu erzeugen, und im `git diff` ist jede Stelle verdächtig, an der die Nummer',
  'gleich geblieben und der Titel gewandert ist.',
  '',
  'Suchbereich: der Eintragstext und der Abschnittskopf jedes Abschnitts unter `book/`, dazu die',
  'Langtexte unter `docs/`. Im Langtext gibt es kein «dieser Abschnitt», eine nackte «Nr. N» gilt',
  'dort als Normstelle und wird übersprungen; Langtext-Verweise müssen also «Abschnitt N, Nr. M»',
  'ausschreiben. In der Spalte «Fundstelle» steht beim Eintrag «Nr. N», im Abschnittskopf',
  '«Abschnittskopf», im Langtext die letzte Zwischenüberschrift.',
  '',
  'Die zweite Absicherung ist der **Anker**: im Umfeld jedes Verweises muss ein Wort stehen, das',
  'auch im Titel des Zieleintrags vorkommt («medizinische Hilfe siehe Nr. 11» — «medizinische',
  'Hilfe» ist der Anker), oder es wird ausdrücklich als «siehe Nr. 16 (Darlehen und Bürgschaft)»',
  'geschrieben. `node tools/check-refs.mjs --check` wertet einen Verweis ohne Anker als Fehler:',
  'rutscht er, ist das im Tabellen-Diff nicht zu sehen, nur der Anker fängt ihn. Bereichsverweise',
  '(«siehe Abschnitt 8, Nr. 11 bis 14») sind die Ausnahme: sie meinen einen ganzen Block von',
  'Einträgen, für den sich nicht für jede Nummer ein Anker setzen lässt; hier trägt allein der',
  'Diff.',
  '',
  'Ob ein Anker zählt, hängt von Länge und Abstand ab: die längste Buchstabenfolge, die sowohl im',
  'weiten Fenster als auch im Titel steht, muss mindestens 8 Zeichen lang sein, oder mindestens 6',
  'Zeichen innerhalb der Teilstrecke, in der der Verweis steht. Kurze Allerweltswörter wie «Zeit»',
  'oder «Geld», die nur außerhalb der Teilstrecke zufällig treffen, gelten nicht als Anker.',
  'Diese zweite Stufe wurde am 2026-09-20 nachgeschärft: beim Einfügen in Abschnitt 31 war der',
  'Verweis «… des Darlehens siehe Nr. 15 dieses Abschnitts» auf den neuen Eintrag «… Steuer',
  'selbst erklären» verrutscht, und ein zwei Teilstrecken entferntes «Sie zahlen selbst» hatte',
  'den Anker gespielt; `--check` meldete damals «bestanden».',
  '',
  `Insgesamt ${total} Verweise.`,
  '',
  ...out,
].join('\n');

if (problems.length) {
  console.log('Manuell zu klären:');
  for (const p of problems) console.log('  ' + p);
  console.log('');
}

// Die Heuristik hatte früher eine sehr hohe Falschmeldungsquote; nachdem alle Verweise der
// deutschen Fassung einzeln einen Anker bekommen haben, sollten beide Listen im Normalfall leer
// sein, und jeder Eintrag darin ist ein echter Fall. Sie sichert außerdem nur zu, dass ein
// Verrutschen **auffällt**, nicht dass es **aufgehalten** wird: verschiebt man versuchsweise
// alle abschnittsinternen Verweise um eins, fängt sie etwa siebzig Prozent; der Rest (benachbarte
// Einträge zum selben Thema, gemeinsame Wörter im Titel) bleibt dem Tabellen-Diff überlassen.
if (process.argv.includes('--suspect') && suspects.length) {
  console.log(`Anker fehlt (${suspects.length} Stellen; Messwerte in Klammern):`);
  for (const s of suspects) console.log('  ' + s);
  console.log('');
}

if (process.argv.includes('--suspect') && weak.length) {
  console.log(`Anker trifft nur außerhalb der Teilstrecke (${weak.length} Stellen, meist zufällig — gilt als kein Anker):`);
  for (const s of weak) console.log('  ' + s);
  console.log('');
}

if (CHECK_ONLY) {
  const fatal = problems.filter(p => p.includes('diesen Eintrag gibt es in dem Abschnitt nicht') || p.includes('verweist auf sich selbst') || p.includes('relativen Verweis'));
  for (const p of fatal) console.log('  ' + p);
  // Eine nackte Nummer (im Umfeld kein Wort, das zum Ziel-Titel passt) ist ebenfalls ein Fehler:
  // rutscht so ein Verweis, sieht es niemand. Die Behebung ist ein Anker — «siehe Nr. 16
  // (Darlehen und Bürgschaft)», das Wort in der Klammer stammt aus dem Ziel-Titel.
  if (suspects.length) {
    console.log(`${suspects.length} Verweise sind nackte Nummern, ein Fehler darin bliebe unsichtbar — bitte Anker ergänzen (--suspect zeigt die Liste):`);
    for (const s of suspects.slice(0, 10)) console.log('  ' + s.split('　')[0]);
    if (suspects.length > 10) console.log(`  …und ${suspects.length - 10} weitere`);
  }
  // Ein schwacher Anker ist ebenfalls ein Fehler: die Überschneidung liegt außerhalb der
  // Teilstrecke, praktisch ist es kein Anker.
  if (weak.length) {
    console.log(`${weak.length} Verweise haben ihren Anker nur außerhalb der Teilstrecke, also faktisch keinen — bitte ausdrücklich ergänzen (--suspect zeigt die Liste):`);
    for (const s of weak.slice(0, 10)) console.log('  ' + s.split('　')[0]);
    if (weak.length > 10) console.log(`  …und ${weak.length - 10} weitere`);
  }
  const bad = fatal.length + suspects.length + weak.length;
  console.log(bad ? `${bad} Stellen zu klären` : `Verweisprüfung bestanden: alle ${total} Verweise zeigen auf den richtigen Eintrag und tragen einen Anker`);
  process.exit(bad ? 1 : 0);
}

writeFileSync(resolve(ROOT, 'docs/verweis-abgleich.md'), body, 'utf8');
console.log(`docs/verweis-abgleich.md geschrieben, ${total} Verweise`);
