// README-Struktur und Dateiliste: gemeinsame Basis für EPUB (tools/epub) und PDF (tools/pdf).
// Nur die Struktur der README wird gelesen, keine Dateiliste gepflegt — kommt eine Sektion oder
// ein Langtext dazu, ziehen beide Builds automatisch mit.
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
export const REPO = 'https://github.com/Cagliostro/HowToLiveBetterInGermany';
export const SITE = 'https://cagliostro.github.io/HowToLiveBetterInGermany/';
// Die Eintragszahl steckt im Buchtitel. Sie wird von tools/sync-stats.mjs mitgeschrieben
// (EDITS-Eintrag „Buchtitel"), nicht hier von Hand gepflegt.
export const TITLE = 'Lebe besser: 628 Empfehlungen nach Kosten und Nutzen';
export const RELEASE = `${REPO}/releases/download/epub-latest`;

// Durchgehend LF an alle Builds: unter Windows mit core.autocrlf=true wird CRLF ausgecheckt,
// dann findet das Offline-Skript mit '\n' als Nadel keinen einzigen Anker in index.html und
// der lokale Build meldet „Anfang des Hauptskripts nicht gefunden" (CI läuft auf Linux, dort
// trat das nie auf). Auch die Textanalyse muss sich nicht jeweils mit \r herumschlagen.
export const read = p => readFileSync(resolve(ROOT, p), 'utf8').replace(/\r\n/g, '\n');
export const unique = arr => [...new Set(arr)];

export function gitCommit() {
  try {
    return execSync('git rev-parse HEAD', { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  } catch {
    return process.env.GITHUB_SHA ?? '';
  }
}

// Der Text kann an einem Tag mehrfach geändert werden, ein reines Datum unterscheidet die
// Fassungen nicht. Deshalb auf die Minute genau. CI läuft in UTC; einheitlich in Berliner
// Zeit, damit niemand beim Herunterladen ein anderes Datum sieht als erwartet.
export function buildStamp() {
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Berlin', dateStyle: 'short', timeStyle: 'short' }).format(new Date());
}

export function stripBackLink(md) {
  return md.replace(/^\[← Zurück zum Inhaltsverzeichnis\]\([^)]*\)\s*\n/, '');
}

// Der Abschnitt der README von einer Überschrift bis zur nächsten
export function readBook() {
  const readme = read('README.md');
  const lines = readme.split('\n');
  const between = (from, to) => {
    const a = lines.findIndex(l => l.startsWith(from));
    const b = lines.findIndex((l, i) => i > a && l.startsWith(to));
    if (a < 0 || b < 0) throw new Error(`In der README fehlt der Abschnitt ${from} bis ${to}`);
    return lines.slice(a, b).join('\n');
  };
  // Zwischen den Zeilen mit einem Leerzeichen verbinden: im Chinesischen brauchte es keines, im
  // Deutschen klebten die Sätze sonst aneinander („… geht es.628 Empfehlungen …").
  const description = between('# Lebe besser', '[![')
    .split('\n').slice(1).map(l => l.replace(/<[^>]+>/g, '').trim()).filter(Boolean).join(' ');
  const frontMd = between('## Fragen, die dieses Buch beantwortet', '## Inhalt');
  const contentsMd = between('## Inhalt', '## Buchtext')
    .split('\n\n').filter(p => !p.includes('index.html')).join('\n\n');
  const bookFiles = unique([...contentsMd.matchAll(/\]\((book\/[^)#]+\.md)\)/g)].map(m => m[1]));
  const docFiles = unique([...readme.matchAll(/\]\((docs\/[^)#/]+\.md)\)/g)].map(m => m[1]));
  if (bookFiles.length === 0) throw new Error('Im Inhaltsverzeichnis der README stehen keine book/-Dateien');
  return { readme, description, frontMd, contentsMd, bookFiles, docFiles };
}
