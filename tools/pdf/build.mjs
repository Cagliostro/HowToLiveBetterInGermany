// Setzt README + book/*.md + docs/*.md als PDF: pandoc wandelt Markdown nach typst um, typst setzt.
// Aufruf: node tools/pdf/build.mjs [Ausgabepfad]   Standard: dist/LebeBesser.pdf
// Nötig sind pandoc (≥ 3.1, mit typst-Ausgabe) und typst (≥ 0.13) im PATH, oder die Umgebungsvariablen
// PANDOC und TYPST zeigen auf die ausführbaren Dateien. Das Layout steht in tools/pdf/template.typ;
// am Text wird nichts geändert, nur dreierlei: „← Zurück zum Inhaltsverzeichnis" entfernen, an die
// Überschrift jeder Seite einen Anker hängen und Links im Repository in Buchsprünge oder GitHub-Adressen umwandeln.
import { writeFileSync, mkdirSync, statSync } from 'node:fs';
import { resolve, dirname, posix, basename } from 'node:path';
import { execFileSync } from 'node:child_process';
import { ROOT, REPO, SITE, TITLE, read, readBook, gitCommit, buildStamp, stripBackLink } from '../lib/book.mjs';

const OUT = resolve(ROOT, process.argv[2] ?? 'dist/LebeBesser.pdf');
const WORK = resolve(ROOT, 'dist/pdf-build.md');
const PANDOC = process.env.PANDOC ?? 'pandoc';
const TYPST = process.env.TYPST ?? 'typst';
const STAMP = buildStamp();          // „(Berliner Zeit)" steht im Template und in den Versionshinweisen; der an pandoc übergebene Wert bleibt reines ASCII
const COMMIT = gitCommit();

const { description, frontMd, contentsMd, bookFiles, docFiles } = readBook();

// ---------- Seiten (jede Seite hat einen H1, ein H1 beginnt in typst eine neue Seite) ----------
const anchorOf = new Map();
bookFiles.forEach(f => anchorOf.set(f, 'sec-' + (basename(f).match(/^\d+/)?.[0] ?? anchorOf.size + 1)));
docFiles.forEach((f, i) => anchorOf.set(f, `doc-${i + 1}`));

const pages = [
  { src: 'README.md', md: `# Vorwort\n\n${description}\n\n${frontMd}`, anchor: 'front' },
  { src: 'README.md', md: contentsMd.replace(/^## Inhalt/, '# Die Abschnitte im Überblick'), anchor: 'contents' },
  ...[...bookFiles, ...docFiles].map(src => ({ src, md: stripBackLink(read(src)), anchor: anchorOf.get(src) })),
  { src: 'README.md', md: aboutMd(), anchor: 'about' },
];

function aboutMd() {
  const commitLine = COMMIT ? `- Entsprechender Commit: ${COMMIT.slice(0, 7)}\n` : '';
  return `# Versionshinweise

Dieses PDF wird automatisch aus dem Markdown-Text im Repository gesetzt; ändert sich der Text, wird das Buch neu gesetzt. Deine Fassung:

- Erstellt am: ${STAMP} (Berliner Zeit)
${commitLine}- Neueste Fassung zum Herunterladen, Online-Suche, Rückmeldungen: ${REPO}
- Online-Suche (nach Stichwort, Abschnitt, Evidenzstufe und Kosten filtern, auch als Einzeldatei offline): ${SITE}

Links im Text, die auf andere Abschnitte im Buch zeigen, sind in Buchsprünge umgewandelt; Links auf Dateien wie die Prüfprotokolle oder die Lizenzen, die nicht mit ins Buch aufgenommen sind, wurden zu GitHub-Adressen.

Der Text steht unter CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). Weitergeben, bearbeiten und kommerziell nutzen ist erlaubt; die Herkunft „${TITLE}" muss mit Link zum Repository genannt und Änderungen müssen gekennzeichnet werden.`;
}

// ---------- Links: buchinterne zu Ankern, buchfremde zu absoluten Adressen ----------
function rewriteLinks(md, src) {
  return md.replace(/\]\(([^)\s]+)(\s+"[^"]*")?\)/g, (all, href, title) => {
    if (/^(https?:|mailto:)/.test(href)) return all;
    // Anker in der README auf sich selbst (#inhalt und dergleichen) gibt es im Buch womöglich nicht, die zeigen zurück auf die README bei GitHub
    if (href.startsWith('#')) return `](${REPO}/blob/main/README.md${href}${title ?? ''})`;
    const [path] = href.split('#');
    const target = posix.normalize(posix.join(posix.dirname(src), path));
    const anchor = anchorOf.get(target);
    if (anchor) return `](#${anchor}${title ?? ''})`;
    const kind = target.endsWith('/') ? 'tree' : 'blob';
    return `](${REPO}/${kind}/main/${target}${title ?? ''})`;
  });
}

const body = pages.map(p => {
  const md = rewriteLinks(p.md, p.src)
    .replace(/<!--[\s\S]*?-->/g, '')                       // HTML-Kommentare wie das Kostenlabel kommen nicht ins PDF
    .replace(/^(# .+?)\s*$/m, `$1 {#${p.anchor}}`);        // an die H1 dieser Seite einen Anker hängen
  if (!md.includes(`{#${p.anchor}}`)) throw new Error(`In ${p.src} wurde keine H1 gefunden, der Anker lässt sich nicht setzen`);
  return md.trim();
}).join('\n\n');

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(WORK, body);

// ---------- pandoc → typst → pdf ----------
const run = (cmd, args) => {
  try {
    return execFileSync(cmd, args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  } catch (err) {
    if (err.code === 'ENOENT') throw new Error(`${cmd} nicht gefunden — installieren oder die Umgebungsvariable ${cmd === PANDOC ? 'PANDOC' : 'TYPST'} auf die ausführbare Datei zeigen lassen`);
    throw new Error(`${cmd} ist fehlgeschlagen:\n${err.stderr || err.stdout || err.message}`);
  }
};

const typFile = resolve(ROOT, 'dist/pdf-build.typ');
run(PANDOC, [
  '--from=gfm+attributes', '--to=typst', '--wrap=none',
  `--template=${resolve(ROOT, 'tools/pdf/template.typ')}`,
  '-V', `booktitle=${TITLE}`, '-V', `subtitle=${description}`,
  '-V', `builddate=${STAMP}`, '-V', `commit=${COMMIT.slice(0, 7) || 'unbekannt'}`,
  '-V', `site=${SITE}`, '-V', `repo=${REPO}`,
  '-o', typFile, WORK,
]);
const log = run(TYPST, ['compile', typFile, OUT, '--root', ROOT]);
if (log.trim()) console.log(log.trim());

const entries = pages.filter(p => bookFiles.includes(p.src))
  .reduce((n, p) => n + p.md.split('\n').filter(l => l.startsWith('### ')).length, 0);
console.log(`Erzeugt: ${OUT} — ${bookFiles.length} Abschnitte, ${entries} Einträge, ${docFiles.length} Anhänge, ${(statSync(OUT).size / 1048576).toFixed(1)} MB`);
