// Packt README + book/*.md + docs/*.md in ein EPUB 3.
// Aufruf: node tools/epub/build.mjs [Ausgabepfad]   Standard: dist/LebeBesser.epub
// Hängt nur von marked ab; das ZIP wird selbst geschrieben (EPUB verlangt, dass mimetype zuerst
// und unkomprimiert im Archiv steht, das garantieren allgemeine ZIP-Bibliotheken nicht).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname, posix } from 'node:path';
import { deflateRawSync } from 'node:zlib';
import { Marked, Tokenizer } from 'marked';
import { ROOT, REPO, SITE, TITLE, read, readBook, gitCommit, buildStamp, stripBackLink } from '../lib/book.mjs';

const OUT = resolve(ROOT, process.argv[2] ?? 'dist/LebeBesser.epub');
const RELEASE = `${REPO}/releases/download/epub-latest/LebeBesser.epub`;
const BOOK_ID = 'urn:uuid:5c0c1c0e-6a5c-4d2b-9b1e-7d1f0a4e8c31';
const NOW = new Date();
const COMMIT = gitCommit();

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const plain = html => html.replace(/<[^>]+>/g, '');

// ---------- Inhalt und Dateiliste aus der README ----------
const book = readBook();
const { description, frontMd, bookFiles, docFiles } = book;
const contentsMd = book.contentsMd.replace(/^## Inhalt/, '# Die Abschnitte im Überblick');

// ---------- Seitenliste ----------
// Jede Seite: xhtml-Dateiname, Repo-Pfad der Quell-Markdown (zum Auflösen relativer Links), Markdown-Text
const pages = [
  { file: 'front.xhtml', src: 'README.md', title: 'Vorwort', md: `# ${TITLE}\n\n${description}\n\n${frontMd}` },
  { file: 'contents.xhtml', src: 'README.md', title: 'Die Abschnitte im Überblick', md: contentsMd },
  ...bookFiles.map((src, i) => ({ file: `ch${String(i + 1).padStart(2, '0')}.xhtml`, src, md: stripBackLink(read(src)) })),
  ...docFiles.map((src, i) => ({ file: `doc${i + 1}.xhtml`, src, md: stripBackLink(read(src)) })),
  { file: 'about.xhtml', src: 'README.md', title: 'Versionshinweise', md: aboutMd() },
];
const pageByPath = new Map(pages.map(p => [p.src, p.file]));
pageByPath.set('README.md', 'front.xhtml');

function aboutMd() {
  const commitLine = COMMIT ? `- Entsprechender Commit: [${COMMIT.slice(0, 7)}](${REPO}/commit/${COMMIT})` : '';
  return `# Versionshinweise

Dieses E-Book wird automatisch aus dem Markdown-Text im Repository erzeugt; ändert sich der Text, wird das Buch neu gebaut. Deine Fassung:

- Erstellt am: ${buildStamp()} (Berliner Zeit)
${commitLine}
- Neueste Fassung zum Herunterladen: ${RELEASE}
- Online-Suche (nach Stichwort, Abschnitt, Evidenzstufe und Kosten filtern): ${SITE}
- Repository, Rückmeldungen, Prüfprotokolle zu jeder Quelle: ${REPO}

Links im Text, die auf andere Dateien im Repository zeigen, sind in Sprünge innerhalb des Buchs umgewandelt; Links auf Dateien wie die Prüfprotokolle oder die Lizenzen, die nicht mit ins Buch aufgenommen sind, wurden zu GitHub-Adressen.

Der Text steht unter CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). Weitergeben, bearbeiten und kommerziell nutzen ist erlaubt; die Herkunft „Lebe besser: 630 Empfehlungen nach Kosten und Nutzen" muss mit Link zum Repository genannt und Änderungen müssen gekennzeichnet werden.`;
}

// ---------- Markdown → XHTML ----------
let current = null; // die Seite, die gerade umgewandelt wird
let headingSeq = 0;
const marked = new Marked({ gfm: true });
marked.use({
  // GFM verlinkt nackte URLs automatisch, bricht aber nur an Leerzeichen ab. Steht direkt hinter
  // einer URL noch Text ohne Leerzeichen, rutscht dieser mit in den Link und epubcheck hält die
  // URL für ungültig (RSC-020). In einer nackten URL darf ohnehin kein Nicht-ASCII-Zeichen stehen,
  // deshalb wird dort abgeschnitten und der ASCII-Teil davor wie gewohnt verlinkt.
  tokenizer: {
    url(src) {
      const tok = Tokenizer.prototype.url.call(this, src);
      if (!tok || /^[\x21-\x7e]*$/.test(tok.raw)) return tok;
      return Tokenizer.prototype.url.call(this, tok.raw.match(/^[\x21-\x7e]*/)[0]);
    },
  },
  renderer: {
    heading({ tokens, depth }) {
      const html = this.parser.parseInline(tokens);
      const id = `h${++headingSeq}`;
      current.headings.push({ id, depth, text: plain(html) });
      return `<h${depth} id="${id}">${html}</h${depth}>\n`;
    },
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens);
      const t = title ? ` title="${esc(title)}"` : '';
      return `<a href="${esc(rewriteHref(href))}"${t}>${text}</a>`;
    },
    image: () => '',
    html: () => '',
  },
});

function rewriteHref(href) {
  if (/^(https?:|mailto:|#)/.test(href)) return href;
  const [pathPart, hash] = href.split('#');
  const target = posix.normalize(posix.join(posix.dirname(current.src), pathPart));
  const page = pageByPath.get(target);
  if (page) return hash ? `${page}#${hash}` : page;
  const kind = target.endsWith('/') ? 'tree' : 'blob';
  return `${REPO}/${kind}/main/${target}`;
}

function toXhtml(body) {
  return body
    .replace(/<(br|hr)>/g, '<$1/>')
    .replace(/<(img|input)\b([^>]*?)\s*\/?>/g, '<$1$2/>')
    .replace(/&(?!(amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/g, '&amp;');
}

function wrap(title, body) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="de" lang="de">
<head>
<meta charset="utf-8"/>
<title>${esc(title)}</title>
<link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
${body}</body>
</html>
`;
}

for (const p of pages) {
  current = p;
  p.headings = [];
  const body = toXhtml(marked.parse(p.md));
  p.title ??= p.headings[0]?.text ?? p.file;
  p.xhtml = wrap(p.title, `<section epub:type="chapter">\n${body}</section>\n`);
}

// ---------- Navigation ----------
const navItems = pages.map(p => {
  const [first, ...rest] = p.headings;
  const top = first?.depth === 1 ? { href: `${p.file}#${first.id}`, text: p.title } : { href: p.file, text: p.title };
  const subs = (first?.depth === 1 ? rest : p.headings).filter(h => h.depth <= 3).map(h => ({ href: `${p.file}#${h.id}`, text: h.text }));
  return { ...top, subs };
});

const navXhtml = wrap('Inhalt', `<nav epub:type="toc" id="toc">
<h1>Inhalt</h1>
<ol>
${navItems.map(n => `<li><a href="${n.href}">${n.text}</a>${n.subs.length ? `\n<ol>\n${n.subs.map(s => `<li><a href="${s.href}">${s.text}</a></li>`).join('\n')}\n</ol>\n` : ''}</li>`).join('\n')}
</ol>
</nav>
<nav epub:type="landmarks" hidden="hidden">
<ol>
<li><a epub:type="cover" href="cover.xhtml">Umschlag</a></li>
<li><a epub:type="bodymatter" href="${pages[2].file}">Buchtext</a></li>
</ol>
</nav>
`);

let play = 0;
const navPoint = n => `<navPoint id="np${++play}" playOrder="${play}"><navLabel><text>${n.text}</text></navLabel><content src="${n.href}"/>${n.subs?.map(navPoint).join('') ?? ''}</navPoint>`;
const ncx = `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1" xml:lang="de">
<head>
<meta name="dtb:uid" content="${BOOK_ID}"/>
<meta name="dtb:depth" content="2"/>
<meta name="dtb:totalPageCount" content="0"/>
<meta name="dtb:maxPageNumber" content="0"/>
</head>
<docTitle><text>${TITLE}</text></docTitle>
<navMap>
${navItems.map(navPoint).join('\n')}
</navMap>
</ncx>
`;

// ---------- Umschlag, OPF, Container ----------
const coverXhtml = wrap(TITLE, `<div class="cover"><img src="cover.png" alt="${esc(TITLE)}"/></div>\n`);
const modified = NOW.toISOString().replace(/\.\d{3}Z$/, 'Z');
const manifestPages = pages.map(p => `<item id="${p.file.replace('.xhtml', '')}" href="${p.file}" media-type="application/xhtml+xml"/>`);
const opf = `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="pub-id" xml:lang="de">
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
<dc:identifier id="pub-id">${BOOK_ID}</dc:identifier>
<dc:title>${TITLE}</dc:title>
<dc:language>de</dc:language>
<dc:creator>eternity4719</dc:creator>
<dc:description>${esc(description)}</dc:description>
<dc:source>${REPO}</dc:source>
<dc:rights>CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)</dc:rights>
<dc:date>${NOW.toISOString().slice(0, 10)}</dc:date>
<meta property="dcterms:modified">${modified}</meta>
<meta name="cover" content="cover-img"/>
</metadata>
<manifest>
<item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
<item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
<item id="css" href="style.css" media-type="text/css"/>
<item id="cover-img" href="cover.png" media-type="image/png" properties="cover-image"/>
<item id="cover" href="cover.xhtml" media-type="application/xhtml+xml"/>
${manifestPages.join('\n')}
</manifest>
<spine toc="ncx">
<itemref idref="cover"/>
${pages.map(p => `<itemref idref="${p.file.replace('.xhtml', '')}"/>`).join('\n')}
</spine>
</package>
`;
const container = `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
<rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles>
</container>
`;

// ---------- ZIP schreiben ----------
const entries = [
  { name: 'mimetype', data: Buffer.from('application/epub+zip'), store: true },
  { name: 'META-INF/container.xml', data: Buffer.from(container) },
  { name: 'OEBPS/content.opf', data: Buffer.from(opf) },
  { name: 'OEBPS/nav.xhtml', data: Buffer.from(navXhtml) },
  { name: 'OEBPS/toc.ncx', data: Buffer.from(ncx) },
  { name: 'OEBPS/style.css', data: readFileSync(resolve(ROOT, 'tools/epub/style.css')) },
  { name: 'OEBPS/cover.png', data: readFileSync(resolve(ROOT, 'og.png')) },
  { name: 'OEBPS/cover.xhtml', data: Buffer.from(coverXhtml) },
  ...pages.map(p => ({ name: `OEBPS/${p.file}`, data: Buffer.from(p.xhtml) })),
];
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, zip(entries));
const entryCount = pages.filter(p => p.file.startsWith('ch')).reduce((n, p) => n + p.headings.filter(h => h.depth === 3).length, 0);
console.log(`Erzeugt: ${OUT} — ${bookFiles.length} Abschnitte, ${entryCount} Einträge, ${docFiles.length} Anhänge, ${(entries.reduce((n, e) => n + e.data.length, 0) / 1024 | 0)} KB unkomprimiert`);

function zip(files) {
  const crcTable = new Int32Array(256).map((_, n) => {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    return c;
  });
  const crc32 = buf => {
    let c = -1;
    for (const b of buf) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8);
    return (c ^ -1) >>> 0;
  };
  const dosTime = (NOW.getHours() << 11) | (NOW.getMinutes() << 5) | (NOW.getSeconds() >> 1);
  const dosDate = ((NOW.getFullYear() - 1980) << 9) | ((NOW.getMonth() + 1) << 5) | NOW.getDate();
  const locals = [];
  const centrals = [];
  let offset = 0;
  for (const f of files) {
    const name = Buffer.from(f.name);
    const data = f.store ? f.data : deflateRawSync(f.data, { level: 9 });
    const method = f.store ? 0 : 8;
    const crc = crc32(f.data);
    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(0x0800, 6);
    local.writeUInt16LE(method, 8);
    local.writeUInt16LE(dosTime, 10);
    local.writeUInt16LE(dosDate, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(data.length, 18);
    local.writeUInt32LE(f.data.length, 22);
    local.writeUInt16LE(name.length, 26);
    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(20, 4);
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(0x0800, 8);
    central.writeUInt16LE(method, 10);
    central.writeUInt16LE(dosTime, 12);
    central.writeUInt16LE(dosDate, 14);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(data.length, 20);
    central.writeUInt32LE(f.data.length, 24);
    central.writeUInt16LE(name.length, 28);
    central.writeUInt32LE(offset, 42);
    locals.push(local, name, data);
    centrals.push(central, name);
    offset += local.length + name.length + data.length;
  }
  const cd = Buffer.concat(centrals);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(files.length, 8);
  end.writeUInt16LE(files.length, 10);
  end.writeUInt32LE(cd.length, 12);
  end.writeUInt32LE(offset, 16);
  return Buffer.concat([...locals, cd, end]);
}
