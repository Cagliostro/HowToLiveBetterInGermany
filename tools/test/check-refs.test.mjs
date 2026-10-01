// Regressionstest für tools/check-refs.mjs.
//
// Warum es ihn gibt: Das Werkzeug ist die einzige Prüfung für 629 Einträge und mehrere hundert
// Querverweise. Fällt es still aus, meldet --check „bestanden", ohne etwas geprüft zu haben —
// genau das ist im chinesischen Original am 2026-09-21 passiert, als zwölf Verweise als
// „Gesetzeszitat" fehlklassifiziert und nie geprüft wurden. Der Test läuft gegen eine
// Testvorlage mit absichtlichen Fehlern, damit jede Fehlerart nachweislich anschlägt.
//
//   node tools/test/check-refs.test.mjs
//
// Die Vorlage liegt unter tools/test/fixture/. Der Test kopiert sie samt Skript in ein
// temporäres Verzeichnis mit der vom Skript erwarteten Struktur und führt es dort aus. So
// bleibt check-refs.mjs eine unveränderte Portierung ohne Testschalter.
import { cpSync, mkdirSync, mkdtempSync, rmSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');

const tmp = mkdtempSync(join(tmpdir(), 'check-refs-test-'));
mkdirSync(join(tmp, 'tools'));
mkdirSync(join(tmp, 'docs'));
cpSync(join(ROOT, 'tools/check-refs.mjs'), join(tmp, 'tools/check-refs.mjs'));
cpSync(join(HERE, 'fixture/book'), join(tmp, 'book'), { recursive: true });

const run = args => {
  try {
    return { code: 0, out: execFileSync(process.execPath, [join(tmp, 'tools/check-refs.mjs'), ...args], { stdio: 'pipe' }).toString() };
  } catch (e) {
    return { code: e.status, out: (e.stdout ?? '').toString() + (e.stderr ?? '').toString() };
  }
};

const checked = run(['--check', '--suspect']);
run(['--suspect']);   // zweiter Lauf ohne --check, damit die Tabelle geschrieben wird
const table = readFileSync(join(tmp, 'docs/verweis-abgleich.md'), 'utf8');
rmSync(tmp, { recursive: true, force: true });

const results = [];
const check = (name, ok) => results.push({ name, ok });

// --- Die Fehlerarten müssen anschlagen ---
check('Rückgabewert 1 bei Fehlern', checked.code === 1);
check('relative Verweise werden als Fehler gemeldet', /relativen Verweis «nächste Nr\.»/.test(checked.out));
check('Selbstverweis wird gemeldet', /Nr\. 5 verweist auf sich selbst/.test(checked.out));
check('Verweis über die Eintragszahl hinaus wird gemeldet', /Nr\. 99.*der Abschnitt hat nur 9 Einträge/.test(checked.out));
check('fehlender Abschnitt wird gemeldet', /Abschnitt 9, Nr\. 1.*diesen Eintrag gibt es in dem Abschnitt nicht/.test(checked.out));
check('Verweis ohne Anker wird als nackte Nummer gemeldet', /Anker fehlt \(1 Stellen/.test(checked.out) && /Nr\. 3 →/.test(checked.out));

// --- Die Gegenprobe: korrekte Schreibweisen dürfen nicht gemeldet werden ---
check('«Verordnung Nr. 8» gilt nicht als Eintragsverweis', !/Verordnung/.test(table) && !/Nr\. 8 →/.test(checked.out));
check('Bereichsverweis ist von der Ankerpflicht befreit', !/Nr\. 7 →/.test(checked.out));
check('Anker in der Teilstrecke genügt', !/Nr\. 2 →/.test(checked.out));
check('Anker im Klammerzusatz genügt', !/Nr\. 1 →|Nr\. 8 →|02-fixture.*Nr\. 1/.test(checked.out));

// --- Die erzeugte Tabelle ---
check('Bereich wird in beide Nummern zerlegt', /\| Nr\. 7 \| Abschnitt 1, Nr\. 1 \| Kaution und Rückzahlung \|/.test(table)
  && /\| Nr\. 7 \| Abschnitt 1, Nr\. 2 \| Zweiter Eintrag zum Thema Miete \|/.test(table));
check('fehlender Eintrag wird in der Tabelle ausgewiesen', /\| Nr\. 6 \| Abschnitt 1, Nr\. 99 \| \*\*zeigt auf einen nicht vorhandenen Eintrag\*\* \|/.test(table));
check('abschnittsübergreifender Verweis wird aufgelöst', /\| Nr\. 8 \| Abschnitt 2, Nr\. 1 \| Erster Eintrag in Abschnitt zwei \|/.test(table));
check('Verweiszahl beträgt 10', /Insgesamt 10 Verweise\./.test(table));

let failed = 0;
for (const { name, ok } of results) {
  console.log(`${ok ? 'ok  ' : 'FEHL'} ${name}`);
  if (!ok) failed++;
}
if (failed) {
  console.log(`\n${failed} von ${results.length} Prüfungen fehlgeschlagen. Werkzeugausgabe:\n`);
  console.log(checked.out);
  process.exit(1);
}
console.log(`\nAlle ${results.length} Prüfungen bestanden.`);
