# Anforderungen — howtolivebetter-de

**Ziel:** Werkgetreue deutsche Ausgabe von *HowToLiveBetter* im Fork `Cagliostro/HowToLiveBetterInGermany`.
Die chinesische Fassung wird im Fork **ersetzt**, das Original bleibt über einen Herkunftshinweis referenziert.

**Leitsatz:** Übersetzung, keine Bearbeitung. Kein Satz wird umgestellt, gekürzt, ergänzt oder
in seiner Aussage verändert, weil er dem Übersetzer nicht gefällt.

## Entscheidungen aus dem Anforderungs-Interview

| Thema | Entscheidung |
|---|---|
| Umfang | **Alles** — Buch, README, Suchseite, Langtexte, Prüfprotokoll, Projekt-Doku, Tooling, CI, Bilder |
| Repo-Layout | **Chinesisch wird ersetzt** (im Fork), nicht parallel geführt |
| Maschinen-Marker | **Alles deutsch**, Tooling wird mitportiert |
| Ziel | Fork `Cagliostro/HowToLiveBetterInGermany` (besteht bereits) |
| Anrede | **Du** |
| Verweisschema | **„Abschnitt 8, Nr. 11"** |
| Buchtitel | **„Lebe besser: 630 Empfehlungen nach Kosten und Nutzen"** |
| WeChat-Spenden-QR | **entfernen** |
| Werbebanner (mcyyy) | **entfernen** (Assets, HTML-Wrapper, Hintergrundbild) |
| Star-History-Badge | entfernen; **Hinweis auf das Original-Repo bleibt an anderer Stelle erhalten** |

---

## A. Umfang

| ID | Anforderung | Prio |
|---|---|---|
| REQ-01 | `book/01…34` vollständig übersetzen: 34 Sektionen, **630 Einträge**, 1.480.064 Zeichen. Dateinamen deutsch, Sektions- und Eintragsnummerierung unverändert. | Muss |
| REQ-02 | `README.md` übersetzen: Titelseite, „Fragen, die dieses Buch beantwortet", Inhaltsverzeichnis, Glossar, Lizenz-Abschnitt. | Muss |
| REQ-03 | `index.html` (95 KB, Single-File-Suchseite) übersetzen: alle sichtbaren Texte, Filterlabels, Badges, Meta-Tags, OpenGraph, JSON-LD, Toast-/Fehlermeldungen. | Muss |
| REQ-04 | 4 Langtexte in `docs/` übersetzen: 家庭应急装备清单, 生物钟和夜班, 结婚划不划算, 遇到陌生人出事该不该停, 做平台要办哪些证 (5 Dateien). | Muss |
| REQ-05 | `docs/核实记录/` vollständig übersetzen: **97 Dateien, 1,2 MB** Quellen-Verifikationsprotokoll. | Muss |
| REQ-06 | `docs/引用对照.md` neu erzeugen (generiertes Artefakt aus REQ-42, nicht händisch übersetzen). | Muss |
| REQ-07 | `skills/life-decision-guide/` übersetzen: `SKILL.md`, `README.md`, `.claude/skills/…`. Trigger-Wörter und Beschreibung auf deutsche Frageformen. | Muss |
| REQ-08 | `CLAUDE.md` (57 KB Projektregeln) und `AGENTS.md` übersetzen. **Die Regel „Übersetzungen werden nicht upstream gemergt" muss erhalten bleiben** — sie gilt für künftige Beiträge. | Muss |
| REQ-09 | `tools/` portieren: alle Skripte, Meldungen, Kommentare, Regexe. Siehe Abschnitt D. | Muss |
| REQ-10 | `.github/workflows/book.yml` portieren: Job-Namen, Pfadmuster, Schritt-Namen, Release-Notizen. | Muss |
| REQ-11 | `og.png` neu erzeugen aus `tools/og.html` (deutscher Titel, deutsche Kennzahlen). | Muss |
| REQ-12 | Werbe-Assets entfernen: `ads/wechat-reward.png`, `ads/mcyyy.webp`, `ads/mcyyy-side.webp`, `tools/ad-mcyyy.html`, `tools/ad-mcyyy-side.html`, `tools/ad-mcyyy-bg.webp`, README-Spendenabschnitt, `.github/FUNDING.yml`. | Muss |
| REQ-13 | Herkunftshinweis auf das Original beibehalten: in README ein Abschnitt „Herkunft" mit Link auf `eternity4719/HowToLiveBetter`, Hinweis „inoffizielle deutsche Übersetzung" und „maßgeblich ist das chinesische Original". | Muss |
| REQ-14 | `.gitignore`, `LICENSE`, `LICENSE-CODE`, `robots.txt`, `sitemap.xml`, `.nojekyll` prüfen und auf die deutsche Ausgabe anpassen (sitemap-URLs, ggf. Sprachhinweis). | Soll |

## B. Inhaltliche Invarianten (Fidelity)

| ID | Anforderung | Prio |
|---|---|---|
| REQ-20 | **Keine inhaltlichen Änderungen.** Keine Empfehlung wird hinzugefügt, entfernt, umsortiert, abgeschwächt oder verschärft. Keine neuen Fakten, Symptome, Mechanismen oder Beispiele. | Muss |
| REQ-21 | Die **`来源`-Zeile (→ „Quellen") bleibt unübersetzt**: DOI, englische Titel, Zeitschriftnamen, Normnummern, URLs und Zugriffsdaten werden 1:1 übernommen. Nur die einleitenden chin. Zusätze (z. B. „国务院 (2025).") werden transliteriert/übersetzt, die Fundstelle bleibt nachprüfbar. | Muss |
| REQ-22 | Alle **Zahlen unverändert**: HR, RR, OR, 95 %-CI, Prozentwerte, Fallzahlen, Jahre, Grenzwerte, Fristen, Beträge. Deutsche Zahlenschreibweise (Dezimalkomma) nur dort, wo kein Widerspruch zur Nachprüfbarkeit entsteht — im Zweifel Originalformat beibehalten. | Muss |
| REQ-23 | **Chinesische Rechtsnormen**: Gesetzesnamen werden sinngemäß übersetzt und beim ersten Vorkommen mit dem chinesischen Original in Klammern versehen. Artikelnummern unverändert. Die vollständige Fundstelle steht in „Quellen". | Muss |
| REQ-24 | **Nummerierung unverändert**: 34 Sektionen, 630 Einträge, fortlaufende Nummern je Sektion. Ein Eintrag behält seine Nummer. | Muss |
| REQ-25 | **Evidenzstufen A/B/C unverändert** und an derselben Stelle. Die Kennzeichnung „争议" (Streitfall) bleibt inhaltlich erhalten und steht weiterhin **am Anfang** der Anmerkung (maschinell gezählt). | Muss |
| REQ-26 | **Kostenlabel semantisch identisch**: dieselben Werte wie im Original, nur deutsche Schlüssel. Kein Eintrag wechselt seine Einstufung. | Muss |
| REQ-27 | **Struktur je Eintrag unverändert**: Titel → Kostenlabel-Kommentar → Kosten → Klartext → Nutzen → Evidenzstufe → Quellen → Anmerkung. Keine Zeile entfällt. | Muss |
| REQ-28 | Die China-Spezifika des Inhalts (低保, 医保, 劳动仲裁, 12378, Behördenwege) werden **nicht** auf deutsche Verhältnisse angepasst. Sie werden übersetzt, wie sie dastehen. | Muss |

## C. Sprachqualität

| ID | Anforderung | Prio |
|---|---|---|
| REQ-30 | **Anrede: „Du"**, durchgehend klein geschrieben („du", „dein"). Keine Höflichkeitsform, kein unpersönlicher Infinitiv. Ausnahme: wörtliche Rechts- und Behördentexte. | Muss |
| REQ-31 | Die Zeile `说人话` wird zu **„Klartext"**. Sie ist die prominenteste Zeile der Suchkarte und muss die Kernaussage in Alltagssprache tragen: keine Statistikabkürzungen (HR, RR, OR, KI), keine Studien- oder Studiendesign-Begriffe (Kohorte, randomisiert, Metaanalyse), keine neuen Zahlen, keine Fachwörter ohne sofortige Erklärung. | Muss |
| REQ-32 | **Keine Übersetzungsklischees.** Verboten sind die im Original geächteten Muster, in deutscher Entsprechung: Meta-Sätze über den Eintrag selbst, Schlusssätze mit moralischer Zuspitzung, gehäuftes „das heißt"/„also", Metaphern, die der Leser erst übersetzen muss („die andere Seite", „das Produkt"), Telegrammstil (Stakkato aus Kurzsätzen), Leerformeln („bemerkenswert ist", „im Kern"). | Muss |
| REQ-33 | **Ein Gedanke pro Satz.** Zielgröße 15–20 Wörter, harte Obergrenze 30 Wörter. Semikolonketten und Gedankenstriche werden zu eigenständigen Sätzen. Ausnahme: wörtliche Normzitate und englische Literaturtitel. | Muss |
| REQ-34 | **Einheitliches Glossar** über alle 630 Einträge (siehe `architektur.md`, Abschnitt Glossar). Fachbegriff wird beim ersten Vorkommen im Eintrag erklärt, danach ohne Erklärung verwendet. | Muss |
| REQ-35 | **Verweise als „Abschnitt N, Nr. M"**. Jeder Verweis trägt einen Anker: mindestens ein Wort aus dem Ziel-Eintragstitel steht im selben Satz oder Teilsatz. Nackte Nummern sind unzulässig. | Muss |
| REQ-36 | Feldbezeichnungen: `Kosten`, `Klartext`, `Nutzen`, `Evidenzstufe`, `Quellen`, `Anmerkung`. Bezugszeile am Sektionsanfang: `Bezugsgröße: …` | Muss |
| REQ-37 | Fachlich korrekte deutsche Rechtsterminologie für die chinesischen Verfahren (z. B. 劳动仲裁 → Arbeitsgerichtliche Schlichtung, 行政复议 → Verwaltungsbeschwerde). Einmalige Festlegung im Glossar. | Soll |
| REQ-38 | **Klartext-Länge.** Zielwert 2–4 Sätze und 50–70 Wörter (rund 330–470 Zeichen), **harte Grenze 80 Wörter** (rund 540 Zeichen). Maß ist die **Wortzahl**, nicht die Satzzahl: die Satzzahl ist Richtung, weil mehrere kurze Sätze besser lesen als wenige lange. Damit ist die Zeichenregel des Originals (120 Zeichen) abgelöst — sie war auf chinesische Zeichendichte kalibriert und traf in der deutschen Fassung 630 von 630 Einträgen. *(Nachtrag 2026-09-30)* | Muss |
| REQ-39 | **Der Sinn steht über der Länge.** Alle Längengrenzen (REQ-33, REQ-38, die 900-Zeichen-Schwelle der Anmerkung) sind **Arbeitsmaßstäbe, kein Selbstzweck.** Lässt sich eine Aussage innerhalb der Grenze nicht vollständig und richtig wiedergeben, ist die Überschreitung zulässig; sie ist dann so gering wie möglich zu halten und der Eintrag mit `<!-- Länge: begründet — <Grund> -->` zu markieren. Die Ausnahme wird von `check-plain.mjs` getrennt aufgelistet, nicht als Fehler gewertet. Nicht gedeckt sind Überschreitungen durch Zusätze, die der Eintrag nicht braucht. Bei zu langen Zeilen ist die erste Antwort **Verschieben** (in die Nutzen-Spalte oder in einen Langtext unter `docs/`), nicht Streichen — im Zielkonflikt mit REQ-20 (kein Inhaltsverlust) **gewinnt REQ-20**. *(Nachtrag 2026-09-30)* | Muss |

## D. Technische Funktionsfähigkeit

| ID | Anforderung | Prio |
|---|---|---|
| REQ-40 | **`index.html` funktioniert** mit den deutschen Daten: Einlesen der `book/*.md`, Parsen des Kostenlabels und aller Feldzeilen, Kostenfilter (Geld/Zeit/Willenskraft), Nutzen-Magnitude, Bezugsgrößen-Filter, Evidenzstufen-Filter, Sektionsfilter, Volltextsuche, „Streitfall"/„TODO"-Schalter, Verhältnis-Badge. | Muss |
| REQ-41 | `tools/sync-stats.mjs` läuft durch, rechnet Eintrags-/Sektions-/A-B-C-/Streitfall-/TODO-/Link-Zahlen und schreibt sie an **alle** Stellen in README, `index.html` und `tools/og.html` zurück. | Muss |
| REQ-42 | `tools/check-refs.mjs` prüft die deutschen Verweise („Abschnitt N, Nr. M") inkl. Anker-Regel und erzeugt `docs/引用对照.md` neu (→ `docs/verweis-abgleich.md`). Anker-Matching auf deutsche Wortgrenzen statt chinesischer Zeichenketten. | Muss |
| REQ-43 | `tools/check-plain.mjs` auf die deutschen Klartext-Regeln portiert: Länge, Statistikjargon-Verbotsliste, Leerformel-Verbotsliste. Länge wird in **Wörtern** gemessen, nicht in Zeichen. Grenzen: 80 Wörter je Klartext, 30 Wörter je Satz (REQ-38). Einträge mit dem Marker `<!-- Länge: begründet — <Grund> -->` sind von der Längenprüfung ausgenommen und werden getrennt aufgelistet (REQ-39); die übrigen Regeln gelten für sie unverändert. *(Marker 2026-09-30)* | Muss |
| REQ-44 | `tools/lib/book.mjs` parst die deutsche README-Struktur (Überschriftennamen, `docs/*.md`-Liste, Titel, Repo-/Seiten-URLs). | Muss |
| REQ-45 | **EPUB-Build** (`tools/epub/build.mjs`) läuft, `epubcheck` ist grün. Sprach-Metadatum `de`, deutsche Kapitelstruktur, Inhaltsverzeichnis. | Muss |
| REQ-46 | **PDF-Build** (`tools/pdf/build.mjs` + `template.typ`) läuft mit deutscher Typografie: passende Schrift mit Umlauten/ß, deutsche Anführungszeichen, korrekte Trennung, `#set text(lang: "de")`. | Muss |
| REQ-47 | **Offline-Single-File-Build** (`tools/offline/build.mjs`) läuft; `window.__CORPUS__` enthält deutsche `parts` und `docs`; die Seite funktioniert per Doppelklick ohne Netz. | Muss |
| REQ-48 | **CI** (`.github/workflows/book.yml`) läuft grün: die Jobs Verweise, Klartext, Statistik, Build, epubcheck. | Muss |
| REQ-49 | **Keine chinesischen Reststrings** in ausgelieferten Artefakten außer in `Quellen`-Zeilen (Literaturangaben) und wörtlichen Normtiteln. Prüfbar per Skript. | Muss |
| REQ-50 | Interne Verlinkung intakt: README ↔ `book/*`, README ↔ `docs/*.md`, Langtext-Navigation, Suchseiten-Langtext-Popup. Seiten-, Release- und Star-Links zeigen auf den Fork bzw. entfallen. | Muss |

## E. Nachweis / Abnahme

| ID | Anforderung | Prio |
|---|---|---|
| REQ-60 | 630 Einträge vollständig vorhanden und deutsch (Zählabgleich gegen 630). | Muss |
| REQ-61 | Alle Prüfskripte laufen ohne Beanstandung durch. | Muss |
| REQ-62 | Alle drei E-Book-Builds erzeugen Artefakte, epubcheck grün. | Muss |
| REQ-63 | Suchseite im Browser geprüft: Filter, Suche, Kostenlabel-Auswertung, Langtext-Popup. | Muss |
| REQ-64 | Stichprobenprüfung Fidelity: mindestens ein Eintrag je Sektion Satz für Satz gegen das Original geprüft, keine Abweichung außer Sprache. | Muss |

## Ausdrücklich außerhalb des Umfangs

- Inhaltliche Anpassung auf deutsche Verhältnisse (Rechtslage, Behörden, Sozialversicherung).
- Hinzufügen oder Entfernen von Empfehlungen.
- Aktualisierung veralteter Angaben (auch wenn im Original offensichtlich überholt — die
  Stand-Angaben des Originals werden mitübersetzt, nicht korrigiert).
- PR an `eternity4719/HowToLiveBetter`. Die Projektregel verbietet das Mergen von Übersetzungen
  ausdrücklich; der Fork bleibt eigenständig. Ein Hinweis darauf darf upstream angeboten werden,
  aber nur nach gesonderter Freigabe.

## Nachtrag 2026-09-30 — Längengrenzen auf Deutsch kalibriert

**Anlass:** Der inhaltliche Review (Runde 9) stellte fest, dass die Längenregeln der `CLAUDE.md`
buchweit „gerissen" werden — 630 von 630 Klartexten über 120 Zeichen, 89,6 % der Sätze über
50 Zeichen. Die Ursache war keine Textschwäche: **die Zeichenzahlen stammten aus dem chinesischen
Original und waren nie auf Deutsch umgerechnet worden.** Chinesische Zeichen tragen auf rund einem
Drittel der Zeichen dieselbe Aussage; die Anmerkungen des Originals haben einen Median von etwa
130 Zeichen, die der deutschen Fassung einen von 566 (Faktor 4,3).

**Befund:** Die Anpassung an Deutsch war an anderer Stelle längst vollzogen — REQ-33 (Sätze in
Wörtern: Ziel 15–20, hart 30), REQ-43 („Länge wird in Wörtern gemessen, nicht in Zeichen") und
`tools/check-plain.mjs` —, nur die `CLAUDE.md` war nie nachgezogen worden. Der Text hält die
angepasste Regel exakt ein: Satz-Median 15 Wörter, Satz-Maximum genau 30; Klartext-Maximum genau
80 Wörter; `check-plain.mjs` meldet 0 Beanstandungen. Es bestand also **kein Textproblem, sondern
ein Dokumentationsproblem.**

**Änderungen:**

1. **REQ-38 (neu)** — Klartext-Länge: Zielwert 2–4 Sätze und 50–70 Wörter, Grenze 80 Wörter.
   Die Zeichenregel des Originals (120 Zeichen) ist damit abgelöst.
2. **REQ-39 (neu)** — „Der Sinn steht über der Länge": Überschreitung ist bei Sinnerhalt zulässig,
   muss minimal sein und wird mit `<!-- Länge: begründet — <Grund> -->` markiert.
3. **REQ-43 (ergänzt)** — `check-plain.mjs` wertet markierte Einträge nicht als Fehler und listet
   sie getrennt auf.
4. **`CLAUDE.md`** — die betroffenen Stellen sind auf Wortzahlen umgestellt, die historischen
   Zahlen sind als Beschreibung des **Originals** gekennzeichnet, und die Regel „Der Sinn steht
   über der Länge" ist als eigener Punkt aufgenommen. Die Anmerkungs-Schwelle ist von 700 auf
   **900 Zeichen** neu verankert (700 traf 35 % des Buchs und war damit kein Signal mehr); für die
   Anmerkung gibt es **keine harte Obergrenze**, weil ihre Länge Bedeutung trägt.

**Nicht geändert:** REQ-33 bleibt wie es ist — es war bereits richtig kalibriert und wird eingehalten.
Die Regel „Übersetzung, keine Bearbeitung" (REQ-20) bleibt unangetastet und **gewinnt** im
Zielkonflikt gegen jede Längengrenze. Die historischen Angaben in `docs/pruefprotokolle/` werden
**nicht** angepasst: sie beschreiben, was am Original geschehen ist, und sind als Zeitdokument
korrekt.
