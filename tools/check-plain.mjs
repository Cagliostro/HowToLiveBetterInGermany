// „Klartext"-Prüfung: diese Zeile ist der auffälligste Absatz der Suchkarte, und die meisten
// Leser sehen nur sie. Im chinesischen Original hat sie am 2026-09-28 (issue #42) für Kritik
// gesorgt: in einer Zeile standen Klinikzahl, Fallzahl und Gruppenzahl, dazu Formulierungen, die
// der Leser erst übersetzen muss. Alles davon war in den Projektregeln längst verboten, nur
// maschinell geprüft wurde es nicht. Diese Datei prüft es.
//
//   node tools/check-plain.mjs            # alle beanstandeten Klartext-Zeilen auflisten, Exit 1 bei Fund (CI)
//   node tools/check-plain.mjs --stat     # nur je Regel zählen
//   node tools/check-plain.mjs --numbers  # zusätzlich Regel ③, für die Handprüfung
//
// Geprüft werden standardmäßig ①②④, Regel ③ nur mit --numbers. Sie meldet zu viel: Notrufnummern
// (112, 116117) und Beispielbeträge in Rechts- und Geldabschnitten („1.000 元 geliehen") gelten
// als neue Zahl, obwohl sie korrekt sind. Deshalb nicht in der CI.
// Die vier Regeln:
// ① Länge: höchstens 80 Wörter. Die chinesische Fassung misst in Zeichen (120); im Deutschen
//    wird in Wörtern gemessen, weil Zeichen hier nichts über die Lesbarkeit sagen.
// ② Satzlänge: kein Satz über 30 Wörter (Projektregel REQ-33, „ein Gedanke pro Satz").
//    Ausgenommen sind wörtliche Normzitate — sie stehen aber nicht im Klartext.
// ③ Neue Zahlen: jede Ziffer im Klartext muss im Titel, in „Kosten" oder in „Nutzen" desselben
//    Eintrags vorkommen. Der Klartext übersetzt nur die Nutzen-Zeile und darf keine Zahlen
//    hinzuerfinden. Deutsche Schreibweise wird berücksichtigt („1.000" = 1000, „1,5" = 1,5).
// ④ Leerformeln: Redewendungen, die der Leser erst übersetzen muss. Die Liste ist bewusst kurz
//    und enthält nur Formulierungen, die im deutschen Text tatsächlich vorkamen — ein Fehlalarm
//    zu viel, und niemand sieht sich die Ausgabe noch an.
// Zeilen werden mit /\r?\n/ getrennt, Begründung im Kopf von check-refs.mjs.
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const STAT = process.argv.includes('--stat');
const NUMBERS = process.argv.includes('--numbers');
const MAX_WORDS = 80;
const MAX_SENT = 30;

const JARGON = [
  [/\b(HR|RR|OR|RCT|Hazard Ratio|Odds Ratio|Risikoverhältnis|Konfidenzintervall)\b|%?-KI\b/, 'statistische Abkürzung'],
  [/Kohorte|Metaanalyse|Meta-Analyse|randomisiert|Kontrollgruppe|Placebogruppe|doppelblind|Verblindung|Stichprobe|Proband|Beobachtungsstudie|Querschnittsstudie|Fall-Kontroll/, 'Studiendesign'],
  [/\d[\d.,]*\s*(Fälle|Teilnehmer|Teilnehmerinnen|Patienten|Patientinnen|Studien|Kliniken|Personen)/, 'Fallzahl'],
  [/die eine Gruppe|beide Gruppen|die Gruppen|Vergleichsgruppe|Verumgruppe|Kontrollarm/, 'Gruppierung'],
];
const VAGUE = ['im Kern', 'sozusagen', 'gewissermaßen', 'mit anderen Worten', 'anders gesagt', 'dieser Eintrag', 'diese Empfehlung', 'bemerkenswert ist', 'im Wesentlichen'];

// Abkürzungspunkte sind keine Satzenden (siehe check-refs.mjs). Vor dem Zerschneiden in Sätze
// werden sie durch einen gleich langen Platzhalter ersetzt.
const ABBR = /\b(Nr|Art|Abs|Bd|Kap|S|Ziff|vgl|bzw|ca|ggf|evtl|usw|insb|sog|z\.\s*B|d\.\s*h|u\.\s*a|o\.\s*Ä|z\.\s*T|i\.\s*d\.\s*R)\./g;
const dotSafe = s => s.replace(ABBR, m => m.replace(/\./g, '\u0001'));

const words = s => (s.trim().match(/[^\s]+/g) ?? []).length;

// Zahlen nach Wert vergleichen, nicht nach Schreibweise: «1.000», «1000» und «1 000» sind
// dieselbe Zahl, «1,5» und «1.5» ebenfalls.
function numbers(s) {
  return [...s.replace(/(\d)\.(\d{3})\b/g, '$1$2').replace(/(\d),(\d)/g, '$1.$2')
    .matchAll(/(\d*\.?\d+)\s*(Mio|Mrd)?/g)]
    .map(m => Number(m[1]) * (m[2] === 'Mrd' ? 1e9 : m[2] === 'Mio' ? 1e6 : 1));
}
// Zählt eine Zahl im Klartext als aus der Nutzen-Zeile übersetzt: gerundet (45,6 → 46), oder als
// Risikoverhältnis in einen Abfall umgerechnet (0,72 → 28 % niedriger). 5 % Abweichung genügen.
function derived(n, p) {
  const near = (a, b) => a === b || Math.abs(a - b) <= 0.05 * Math.max(Math.abs(a), Math.abs(b));
  return near(n, p) || near(n / 100, p) || (p < 1 && near(n / 100, 1 - p)) || (p > 1 && p < 100 && near(n, 100 - p));
}

const bad = [];
const count = { Länge: 0, Satzlänge: 0, Jargon: 0, neuezahl: 0, Leerformel: 0 };
let total = 0;

const files = readdirSync(resolve(ROOT, 'book')).filter(f => /^\d\d-.*\.md$/.test(f)).sort();
for (const f of files) {
  const sec = Number(f.slice(0, 2));
  const lines = readFileSync(resolve(ROOT, 'book', f), 'utf8').split(/\r?\n/);
  let no = 0, title = '', fields = {};
  const flush = () => {
    const plain = fields['Klartext'];
    if (!no || plain == null) return;
    total++;
    const where = `Abschnitt ${sec}, Nr. ${no}`;
    const problems = [];
    const w = words(plain);
    if (w > MAX_WORDS) { problems.push(`${w} Wörter, über ${MAX_WORDS}`); count.Länge++; }
    const sentences = dotSafe(plain).split(/(?<=[.!?])\s+/).map(s => s.replace(/\u0001/g, '.'));
    const long = sentences.map(s => words(s)).filter(n => n > MAX_SENT);
    if (long.length) { problems.push(`längster Satz ${Math.max(...long)} Wörter, über ${MAX_SENT}`); count.Satzlänge++; }
    const jar = JARGON.filter(([re]) => re.test(plain)).map(([re, name]) => `${name} «${plain.match(re)[0]}»`);
    if (jar.length) { problems.push(...jar); count.Jargon++; }
    if (NUMBERS) {
      const pool = numbers([title, fields['Kosten'] ?? '', fields['Nutzen'] ?? ''].join(' '));
      const fresh = [...new Set(numbers(plain))].filter(n => !pool.some(p => derived(n, p)));
      if (fresh.length) { problems.push(`Zahlen, die in der Nutzen-Zeile fehlen: ${fresh.join(', ')}`); count.neuezahl++; }
    }
    const vague = VAGUE.filter(v => plain.includes(v));
    if (vague.length) { problems.push(`Leerformel «${vague.join('», «')}»`); count.Leerformel++; }
    if (problems.length) bad.push(`${f}  ${where}: ${problems.join('; ')}`);
  };
  for (const line of lines) {
    const h = line.match(/^### (\d+)\. (.*)$/);
    if (h) { flush(); no = Number(h[1]); title = h[2]; fields = {}; continue; }
    const m = line.match(/^- (Klartext|Kosten|Nutzen): (.*)$/);
    if (m && no) fields[m[1]] = m[2];
  }
  flush();
}

if (!STAT) for (const b of bad) console.log(b);
console.log(`\nKlartext insgesamt ${total} Zeilen, beanstandet ${bad.length}: ` +
  Object.entries(count).map(([k, v]) => `${k} ${v}`).join(', '));
if (bad.length && !STAT) process.exit(1);
