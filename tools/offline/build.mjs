// Packt index.html + README + book/*.md zu einer in sich geschlossenen HTML-Datei: Doppelklick genügt, kein Server, kein Netz.
// Aufruf: node tools/offline/build.mjs [Ausgabepfad]   Standard: dist/LebeBesser.html
// Der Text wird in window.__CORPUS__ eingebettet, die init()-Funktion von index.html erkennt die
// Variable und schickt keine Anfragen mehr; relative Links im Repository werden zu Online-Adressen,
// alles Übrige bleibt unverändert.
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { ROOT, REPO, SITE, read, gitCommit, buildStamp } from '../lib/book.mjs';

const OUT = resolve(ROOT, process.argv[2] ?? 'dist/LebeBesser.html');
const STAMP = buildStamp();
const COMMIT = gitCommit();

// ---------- Text ----------
const readme = read('README.md');
const files = [...new Set([...readme.matchAll(/\]\((book\/[^)]+\.md)\)/g)].map(m => m[1]))].sort();
if (!files.length) throw new Error('Im Inhaltsverzeichnis der README stehen keine book/-Dateien, die Offline-Fassung wäre leer');
// Die Langtexte (docs/*.md) gehören mit hinein: Das Popup der Suchseite rendert sie an Ort und
// Stelle, ohne sie bliebe im Offline-Exemplar nur ein toter GitHub-Link. Die Liste wird wie bei
// EPUB und PDF aus der README gezogen, alle drei Builds nutzen dieselbe Stelle.
const docs = [...new Set([...readme.matchAll(/\]\((docs\/[^)#/]+\.md)\)/g)].map(m => m[1]))].sort();
const corpus = {
  readme,
  parts: Object.fromEntries(files.map(f => [f, read(f)])),
  docs: Object.fromEntries(docs.map(f => [f, read(f)])),
};
// </script beendet sonst vorzeitig das Skript-Tag; \/ ist im JS-String dasselbe wie /, der Inhalt bleibt gleich
const corpusJson = JSON.stringify(corpus).replace(/<\/script/gi, '<\\/script');

// ---------- Seite ----------
let html = read('index.html');
const must = (needle, label) => {
  if (!html.includes(needle)) throw new Error(`In index.html fehlt ${label}, das Offline-Skript muss nachgezogen werden: ${needle}`);
};

// Das Statistik-Skript darf nicht mit in die Offline-Fassung: Ein weitergegebenes Exemplar soll
// keine Anfragen nach außen schicken, und offline würde es in einen Timeout laufen.
const GA_START = '<!-- ga:start', GA_END = '<!-- ga:end -->';
must(GA_START, 'die Startmarke des GA-Abschnitts');
must(GA_END, 'die Endmarke des GA-Abschnitts');
html = html.slice(0, html.indexOf(GA_START)) + html.slice(html.indexOf(GA_END) + GA_END.length);
// Nur nach externen Domains suchen: track() im Hauptskript hat einen typeof-Wächter, läuft auch ohne gtag, ist also kein Rest
if (/googletagmanager|google-analytics/.test(html)) throw new Error('Nach dem Entfernen des markierten Abschnitts ist noch eine Statistik-Domain übrig, die Offline-Fassung würde nach außen funken');

// Relative Links sind beim lokalen Öffnen tot, deshalb auf Online-Adressen umschreiben
must('href="README.md"', ' den README.md-Link');
must('href="book/"', ' den book/-Link');
html = html
  .replaceAll('href="README.md"', `href="${REPO}/blob/main/README.md"`)
  .replaceAll('href="book/"', `href="${REPO}/tree/main/book"`)
  .replaceAll('<a class="title" href="./"', `<a class="title" href="${SITE}"`);

// Fußzeile vermerkt, um welche Fassung des Offline-Exemplars es sich handelt
const foot = '<div class="foot">';
must(foot, 'die Fußzeile');
const commitNote = COMMIT ? `, Textstand Commit ${COMMIT.slice(0, 7)}` : '';
html = html.replace(foot, `${foot}Offline-Exemplar, erstellt am ${STAMP} (Berliner Zeit)${commitNote}; der Text wird weiter gepflegt, maßgeblich ist die <a href="${SITE}">Online-Fassung</a>.<br>`);

// Der Text muss vor dem Hauptskript bereitstehen. Der Anker setzt auf dem Kommentarkopf an,
// mit dem das Hauptskript in index.html beginnt; ändert sich dort diese Zeile, hier mitziehen.
const mainScript = '\n<script>\n/* ---------- ';
must(mainScript, 'den Anfang des Hauptskripts');
html = html.replace(mainScript, `\n<script>window.__CORPUS__=${corpusJson}</script>${mainScript}`);

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, html);
const kb = n => (n / 1024 | 0) + ' KB';
console.log(`Erzeugt: ${OUT} — ${files.length} Textdateien, ${docs.length} Langtexte, ${kb(Buffer.byteLength(html))} (davon Text ${kb(Buffer.byteLength(corpusJson))})`);
