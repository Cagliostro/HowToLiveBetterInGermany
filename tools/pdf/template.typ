$--
$-- Typst-Vorlage für pandoc (kennt nur $body$ und ein paar -V-Variablen), pandocs eingebaute
$-- conf()-Vorlage wird nicht verwendet: Sie legt die Seiteneinstellungen in conf() fest, sodass
$-- Kopf- und Fußzeile nicht änderbar sind, deshalb wird hier selbst gesetzt.
$-- Der Abschnitt vom Anfang bis divider enthält Hilfsdefinitionen, die pandoc für den erzeugten
$-- Text braucht, übernommen aus `pandoc -D typst`, nicht löschen.
$--
#set terms(hanging-indent: 1.5em)

#set table(inset: 6pt, stroke: none)
// pandoc steckt Tabellen in align(center), die Zellen werden dadurch mitzentriert; linksbündig liest sich besser
#show table.cell: it => align(left, it)

#let horizontalRule = line(start: (25%, 0%), end: (75%, 0%))
#let divider = if "divider" in std { divider } else { horizontalRule }

#show figure.where(kind: table): set figure.caption(position: top)
#show figure.where(kind: image): set figure.caption(position: bottom)
// Lange Tabellen müssen umbrechen können, sonst bleibt eine ganze Seite leer, wenn der Block nicht passt
#show figure: set block(breakable: true)
#set smartquote(enabled: false)

// ---------- Layout ----------
// Autor = das chinesische Original, Bearbeiter = die deutsche Ausgabe; beide stehen auch auf dem Umschlag.
// Ein einzelner Text statt einer Liste: die Autorenangabe der PDF-Metadaten ist ein Feld, und typst
// kann hier lokal nicht geprüft werden (pandoc/typst fehlen) — die einfache Form ist die sichere.
#set document(title: "$booktitle$", author: "$original$ (Original), $editor$ (deutsche Ausgabe)")
#set text(
  // Libertinus Serif bringt typst mit und deckt den lateinischen Zeichensatz samt Umlauten und ß ab;
  // Noto Serif dient als Rückfall, falls es installiert ist
  font: ("Libertinus Serif", "Noto Serif"),
  size: 10.5pt, lang: "de", region: "DE",
)
#set par(justify: false, leading: 0.78em, spacing: 0.9em)
#set list(indent: 0.6em, spacing: 0.75em)
#show raw: set text(font: ("DejaVu Sans Mono", "Consolas"), size: 9pt)
#show link: set text(fill: rgb("#1a4fb4"))
#show heading: set block(sticky: true, above: 1.5em, below: 0.65em)
#show heading.where(level: 1): set text(19pt)
#show heading.where(level: 2): set text(14pt)
#show heading.where(level: 3): set text(11.5pt)
// Jeder Abschnitt beginnt auf einer neuen Seite; weak verhindert eine leere Seite, wenn die vorige Seite genau voll ist
#show heading.where(level: 1): it => { pagebreak(weak: true); it }

// Kopfzeile: links der Buchtitel, rechts der laufende Abschnittsname; auf der ersten Seite eines Abschnitts keine Kopfzeile
#let running-head = context {
  let next = query(selector(heading.where(level: 1)).after(here())).at(0, default: none)
  if next != none and next.location().page() == here().page() { return }
  let seen = query(selector(heading.where(level: 1)).before(here()))
  if seen.len() == 0 { return }
  set text(8.5pt, fill: luma(120))
  grid(columns: (1fr, auto), align(left)[$booktitle$], align(right)[#seen.last().body])
  v(-7pt)
  line(length: 100%, stroke: 0.4pt + luma(215))
}

// ---------- Umschlag ----------
#set page(paper: "a4", margin: (x: 2.2cm, top: 2.2cm, bottom: 2cm), header: none, footer: none)
#align(center + horizon)[
  #image("/og.png", width: 100%)
  #v(1.2cm)
  #block(width: 80%)[#text(11.5pt, fill: luma(60))[$subtitle$]]
  #v(0.6cm)
  #block(width: 80%)[#text(9.5pt, fill: luma(90))[
    Deutsche Ausgabe: übersetzt und für Deutschland bearbeitet von $editor$ \
    Vorlage: „HowToLiveBetter“ von $original$ ($originalrepo$), CC BY 4.0
  ]]
  #v(2cm)
  #text(10pt, fill: luma(90))[
    Erstellt am $builddate$ (Berliner Zeit) · Textstand Commit $commit$ \
    Der Text ändert sich laufend, maßgeblich ist die Online-Fassung: $site$ \
    Online-Suche sowie die neuesten Fassungen von EPUB und diesem PDF: $repo$
  ]
]

// ---------- Inhaltsverzeichnis ----------
#pagebreak()
#outline(title: [Inhalt], depth: 1, indent: 1em)

// ---------- Buchtext ----------
#pagebreak(weak: true)
#set page(header: running-head, footer: context align(center, text(8.5pt, fill: luma(120))[#counter(page).at(here()).first() / #counter(page).final().first()]))
#counter(page).update(1)

$body$
