# Anforderungen — howtolivebetter-de

**Ziel:** Deutsche Ausgabe von *HowToLiveBetter* für **deutschsprachige Leser in Deutschland** im
Fork `Cagliostro/HowToLiveBetterInGermany`. Die chinesische Fassung wird im Fork **ersetzt**, das
Original bleibt über einen Herkunftshinweis referenziert.

**Zielrichtung (Entscheidung des Auftraggebers, 2026-09-30):** Deutschsprachige Leser in Deutschland.
China-Exklusives ist damit **Schwachstelle, nicht Inhalt**: chinesische Zuständigkeiten, Verfahren,
Leistungen, Hotlines und Behördenwege werden auf die deutsche Entsprechung umgestellt (REQ-65). Das
ist eine **Bearbeitung**, nicht mehr nur eine Übersetzung; REQ-28 („China-Spezifika werden nicht
angepasst") ist damit **abgelöst**.

**Leitsatz:** Übersetzung **mit Anpassung der China-Spezifika**. Geändert wird nur, was die
Zielrichtung verlangt, und nur gegen Beleg (REQ-65). Kein Satz wird gestrichen, gekürzt oder
umgestellt, weil er dem Bearbeiter nicht gefällt; die Empfehlung selbst bleibt bestehen.

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
| REQ-20 | **Keine inhaltlichen Änderungen** — **Ausnahme: die Deutschland-Anpassung nach REQ-65** *(2026-09-30)*. Keine Empfehlung wird hinzugefügt, entfernt, umsortiert, abgeschwächt oder verschärft. Keine neuen Fakten, Symptome, Mechanismen oder Beispiele. Eine Empfehlung bleibt in ihrer Aussage bestehen, auch wenn ihre Behörde, ihr Verfahren oder ihre Leistung auf die deutsche Entsprechung umgestellt wird. | Muss |
| REQ-21 | Die **`来源`-Zeile (→ „Quellen") bleibt unübersetzt**: DOI, englische Titel, Zeitschriftnamen, Normnummern, URLs und Zugriffsdaten werden 1:1 übernommen. Nur die einleitenden chin. Zusätze (z. B. „国务院 (2025).") werden transliteriert/übersetzt, die Fundstelle bleibt nachprüfbar. | Muss |
| REQ-22 | Alle **Zahlen unverändert**: HR, RR, OR, 95 %-CI, Prozentwerte, Fallzahlen, Jahre, Grenzwerte, Fristen, Beträge. Deutsche Zahlenschreibweise (Dezimalkomma) nur dort, wo kein Widerspruch zur Nachprüfbarkeit entsteht — im Zweifel Originalformat beibehalten. | Muss |
| REQ-23 | **Chinesische Rechtsnormen**: Gesetzesnamen werden sinngemäß übersetzt und beim ersten Vorkommen mit dem chinesischen Original in Klammern versehen. Artikelnummern unverändert. Die vollständige Fundstelle steht in „Quellen". | Muss |
| REQ-24 | **Nummerierung unverändert**: 34 Sektionen, 630 Einträge, fortlaufende Nummern je Sektion. Ein Eintrag behält seine Nummer. | Muss |
| REQ-25 | **Evidenzstufen A/B/C unverändert** und an derselben Stelle. Die Kennzeichnung „争议" (Streitfall) bleibt inhaltlich erhalten und steht weiterhin **am Anfang** der Anmerkung (maschinell gezählt). | Muss |
| REQ-26 | **Kostenlabel folgt der deutschen Kostensituation** *(Nachtrag 2026-09-30, Auftraggeber-Entscheidung — löst „Kostenlabel semantisch identisch, kein Eintrag wechselt seine Einstufung" ab)*: Die Schlüssel sind die deutschen. Wo die Umstellung auf Deutschland (REQ-65) die Kostenlage für die angesprochene Lesergruppe verändert, wird der Wert angepasst — wird aus einer Selbstzahler-Leistung eine Kassenleistung, steht `Geld=0`; wird umgekehrt aus einer Kassenleistung eine Selbstzahler-Leistung, steht der entsprechende höhere Wert. Die Änderung wird im Marker nach REQ-67 benannt (mit Beleg) und im Prüfprotokoll begründet. **`Zeit`, `Willenskraft`, `Nutzen` und `Bezug` bleiben unverändert**; eine Einstufungsänderung, die nicht aus der Deutschland-Umstellung folgt, ist unzulässig. | Muss |
| REQ-27 | **Struktur je Eintrag unverändert**: Titel → Kostenlabel-Kommentar → Kosten → Klartext → Nutzen → Evidenzstufe → Quellen → Anmerkung. Keine Zeile entfällt. | Muss |
| REQ-28 | ~~Die China-Spezifika des Inhalts (低保, 医保, 劳动仲裁, 12378, Behördenwege) werden **nicht** auf deutsche Verhältnisse angepasst. Sie werden übersetzt, wie sie dastehen.~~ **Am 2026-09-30 abgelöst durch REQ-65.** Die Zielrichtung „deutschsprachige Leser in Deutschland" verlangt das Gegenteil: China-Spezifisches wird angepasst, nicht mitübersetzt. Die Regel bleibt als Zeitdokument stehen und gilt nicht mehr. | ~~Muss~~ abgelöst *(2026-09-30)* |

## B2. Zielrichtung Deutschland (Nachtrag 2026-09-30)

| ID | Anforderung | Prio |
|---|---|---|
| REQ-65 | **Zielrichtung: deutschsprachige Leser in Deutschland.** Chinesische Zuständigkeiten, Verfahren, Leistungen, Hotlines und Behördenwege (低保, 医保, 劳动仲裁, 12356, 12378, 工伤保险, 元-Beträge mit Behördenbezug und dergleichen) werden durch die **deutsche Entsprechung ersetzt**, nicht mitübersetzt. **Jede Ersetzung braucht einen Beleg** nach den Quellenregeln dieses Projekts — Primärliteratur oder amtliche Stelle (Bundesministerium, Bundesagentur für Arbeit, GKV-Spitzenverband, gesetze-im-internet.de). Lässt sich keine Entsprechung belegen, bleibt der Originalbezug mit Hinweis stehen; eine deutsche Entsprechung wird **nicht** aus dem Gedächtnis erfunden. Angepasst werden Zuständigkeit, Verfahren, Betrag und Weg, **nicht** die Empfehlung selbst. | Muss |
| REQ-66 | **Der Herkunftshinweis wird auf die Anpassung umgestellt.** Die Ausgabe ist ab REQ-65 nicht mehr „werkgetreu"; REQ-13 („inoffizielle deutsche Übersetzung", „maßgeblich ist das chinesische Original") ist entsprechend zu fassen und muss Übersetzung **und** Anpassung nennen. Umsetzung in R1 (README). | Soll |
| REQ-67 | **Angepasste Einträge werden gekennzeichnet.** Wird ein Eintrag nach REQ-65 umgestellt — chinesische Zuständigkeit, Verfahren, Leistung, Hotline, Behördenweg oder Betrag ersetzt —, steht direkt unter der `<!-- Kostenlabel: … -->`-Zeile ein HTML-Kommentar `<!-- Angepasst: <was ersetzt wurde> — <Beleg> -->`, im GitHub-Rendering unsichtbar. Beispiel: `<!-- Angepasst: Notruf 120/119 → 112 — Bundesministerium des Innern, Notruf 112 -->`. Einträge ohne Anpassung tragen ihn **nicht**. REQ-27 („keine Zeile entfällt") wird um diese **optionale** Zeile erweitert — sie ist Zusatz, nicht Ersatz. Ohne Kennzeichnung ist dem Text nicht anzusehen, was von der Vorlage abweicht; der Marker macht die Abweichung nachprüfbar und zählbar. **Zwei Formen, je nach Umfang:** Wird nur die Währung umgestellt (REQ-68), sonst nichts, lautet der Marker `<!-- Währung: Yuan in Euro übernommen -->`, **ohne Betragsangabe** — das Zeichen `元` darf nach REQ-68 auch im Kommentar nicht stehen, sonst schlägt der Prüfmaßstab `grep -c 元` fehl. Wird mehr ersetzt (Zuständigkeit, Verfahren, Leistung, Hotline, Behördenweg oder Betrag), gilt die Form `<!-- Angepasst: … -->`. Die beiden Formen sind getrennt zählbar: `Angepasst` zählt die inhaltlichen Umstellungen, `Währung` die reinen Betragsänderungen. *(Nachtrag 2026-09-30, Auftraggeber-Entscheidung; um die Währungsform ergänzt)* | Muss |
| REQ-69 | **Titel mit Altersangabe nennen die deutsche Regel** *(Nachtrag 2026-09-30, Auftraggeber-Entscheidung: „Basierend auf den vorliegenden Infos … würde ich hier der STIKO Empfehlung folgen")*: Sagt ein Eintragstitel, ab welchem Alter eine Untersuchung, Impfung oder Früherkennung ansteht, steht dort die **deutsche** Altersgrenze — die amtliche Empfehlung (STIKO) oder die Grenze des gesetzlichen Früherkennungsprogramms —, nicht das Alter der Vorlage. Die Empfehlung, auf der die Nutzen-Zahlen beruhen (etwa USPSTF oder die Altersspanne der ausgewerteten Studien), bleibt **mit ihrer eigenen Altersangabe im Klartext und in der Nutzen-Spalte** stehen, samt Quelle; weicht sie von der deutschen Grenze ab, wird das im Klartext gesagt („die Kasse zahlt ab …", „Selbstzahlen entfällt ab …"). Das ist die **Ausnahme von der Wortregel in `CLAUDE.md`** („ein Eintragstitel darf nur Wörter hinzunehmen, nicht ersetzen"): die Alterszahl darf ersetzt werden. Der Anker der Querverweise bleibt über die übrigen Wörter erhalten — nach jeder Titeländerung `node tools/check-refs.mjs --check` laufen lassen. Gilt für **alle** Kapitel, nicht nur Kapitel 01. | Muss |
| REQ-68 | **Keine chinesische Währung im Buch.** Beträge stehen in Euro. Die chinesische Währung kommt **nirgends** mehr vor — nicht in der Kosten-Zeile, nicht in Klartext, Nutzen, Quellen oder Anmerkung. Preise, Gebühren und Bußgelder werden in Euro angegeben, gerundet und als Größenordnung, nicht scheingenau. **Chinesische Angaben stehen nicht im Text** — auch nicht in Euro umgerechnet und auch nicht als „in China" gekennzeichnet. An ihre Stelle tritt die **deutsche Angabe mit Beleg**; lässt sie sich nicht belegen, gilt die Aussage als „zu prüfen", oder der Eintrag wird dem Auftraggeber zur Entscheidung vorgelegt (Muster Stufe X). Das ist **kein Inhaltsverlust** (REQ-20), solange die Aussage erhalten bleibt: die chinesische Zahl wird durch die deutsche ersetzt, nicht gestrichen. Die Spalte **Quellen** bleibt unberührt — eine chinesische Fundstelle ist eine Literaturangabe, keine Inhaltsaussage. Auch die Schwellen des Kostenlabels in `CLAUDE.md` und die Kostentabelle im Glossar (R1) sind in Euro angegeben. **Prüfmaßstab: `grep -c 元 book/*.md` ergibt für jede Datei 0**; bleibt irgendwo die chinesische Währung stehen, ist die Überarbeitung nicht korrekt erfolgt *(Nachtrag 2026-09-30, Auftraggeber-Entscheidung: „Preise sollten nur noch in EUR vorkommen. Da sich jeglicher Content auf Deutschland beziehen soll, macht ein Vorkommen von chinesischer Währung auch keinen Sinn mehr.")* **Gilt für alle chinesischen Angaben, nicht nur für Beträge** *(Nachtrag 2026-09-30, Auftraggeber-Entscheidung zu Kapitel 01, Nr. 36: „Ich will keine (!) China Angaben in den Texten, sondern hier muss eine Transferleistung auf Deutschland geschehen. Inkl. Prüfung, ob das sinnhaftig ist, oder nicht, dieses Kapitel in der Deutschland-Variante zu halten.")* | Muss |

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
Die Regel „Übersetzung, keine Bearbeitung" (REQ-20) bleibt im Zielkonflikt gegen jede Längengrenze
**vorrangig**; die am selben Tag beschlossene Ausnahme für die Deutschland-Anpassung (REQ-65) berührt
das nicht. Die historischen Angaben in `docs/pruefprotokolle/` werden **nicht** angepasst: sie
beschreiben, was am Original geschehen ist, und sind als Zeitdokument korrekt.

## Nachtrag 2026-09-30 — Zielrichtung Deutschland: REQ-28 abgelöst

**Anlass.** Issue #3 des Reviews: kein Steuerungsdokument nannte Deutschland als Ziel, während
REQ-28 eine inhaltliche Anpassung ausdrücklich ausschloss. Der Prüfmaßstab aller 41 Berichte stand
damit infrage.

**Entscheidung des Auftraggebers (2026-09-30).** Zielrichtung sind **deutschsprachige Leser in
Deutschland**; China-Exklusives ist **Schwachstelle, nicht Inhalt**. REQ-28 ist damit **abgelöst**;
REQ-20 gilt nur noch mit der Ausnahme der Deutschland-Anpassung.

**Änderungen:**

1. **REQ-65 (neu)** — Zielrichtung Deutschland: China-Spezifisches wird durch die deutsche
   Entsprechung ersetzt, jede Ersetzung gegen Beleg; ohne Beleg bleibt der Originalbezug stehen.
   Angepasst werden Zuständigkeit, Verfahren, Betrag und Weg — nicht die Empfehlung.
2. **REQ-66 (neu)** — der Herkunftshinweis (REQ-13) wird auf „Übersetzung mit Anpassung" umgestellt;
   Umsetzung in R1.
3. **REQ-28** — als abgelöst gekennzeichnet, bleibt als Zeitdokument stehen.
4. **REQ-20** — um die Ausnahme nach REQ-65 ergänzt, im Übrigen unverändert.
5. **Leitsatz** — von „Übersetzung, keine Bearbeitung" auf „Übersetzung mit Anpassung der
   China-Spezifika" umgestellt.
6. **`CLAUDE.md`, `AGENTS.md`** — neue Regel „Zielrichtung dieser Ausgabe"; die Upstream-Regel
   „Übersetzungen kommen nicht in dieses Repository" ist für diesen Fork ausdrücklich als **nicht
   anwendbar** gekennzeichnet. Sie gilt weiter für Beiträge am Original und für fremde Übersetzungen.
7. **REQ-67 (neu, noch am 2026-09-30 entschieden)** — angepasste Einträge werden gekennzeichnet:
   `<!-- Angepasst: <was ersetzt wurde> — <Beleg> -->` direkt unter der Kostenlabel-Zeile. Damit ist
   die zuvor offen gelassene Kennzeichnungsfrage entschieden.
8. **REQ-68 (neu, am 2026-09-30 entschieden)** — **keine chinesische Währung im Buch.** Die 753
   `元`-Vorkommen im Bestand (118 davon in Kosten-Zeilen) werden auf Euro umgestellt; chinesische
   Bußgelder, Gebühren und Amtsbeträge werden durch die deutsche Regel ersetzt. REQ-65 nannte bisher
   nur „`元`-Beträge **mit Behördenbezug**"; REQ-68 schließt die Lücke für alle übrigen Beträge,
   insbesondere die Marktpreise der Kosten-Spalte. Prüfmaßstab ist `grep -c 元 book/*.md` = 0.
9. **REQ-68 nachgeschärft (am 2026-09-30 zum Fall Kapitel 01, Nr. 36 entschieden)** — die Regel gilt
   **für alle chinesischen Angaben, nicht nur für Beträge.** Chinesische Statistiken, Mengenangaben
   und Einteilungen kommen im deutschen Text ebenso wenig vor wie Beträge; sie werden **nicht** in
   Euro umgerechnet und **nicht** mit „in China" gekennzeichnet, sondern auf die **deutsche Angabe
   mit Beleg** übertragen. Ist keine belegbar, gilt die Aussage als „zu prüfen", oder der Eintrag
   wird dem Auftraggeber zur Entscheidung vorgelegt; die Wahl ist dann **umstellen oder streichen**.
   Die Spalte **Quellen** bleibt ausgenommen (chinesische Fundstelle = Literaturangabe). Anlass war
   die erste Fassung von Nr. 36 (Zahl der Strahlenquellen, Klasse-I–V-Einteilung), die die
   chinesischen Größen ungekennzeichnet im Text trug. Die Regel steht außerdem in `CLAUDE.md`
   (Zielrichtung, Bullet „Keine China-Angaben im laufenden Text") und in beiden Auftragsdokumenten.
10. **REQ-26 neu gefasst (am 2026-09-30 zu den Fällen Kapitel 01, Nr. 16/21/22 entschieden)** — das
    Kostenlabel war bisher „semantisch identisch" zum Original. Das trägt nicht mehr: die
    Deutschland-Umstellung ändert die Kostenlage, und ein Label, das `Geld=viel` sagt, während der
    eigene Klartext die Kasse nennt, ist ein Widerspruch im Eintrag. Deshalb **folgt der `Geld`-Wert
    der deutschen Kostensituation** für die angesprochene Lesergruppe; `Zeit`, `Willenskraft`,
    `Nutzen` und `Bezug` bleiben unverändert. Jede Labeländerung wird im Marker (REQ-67) benannt und
    im Prüfprotokoll begründet. Zeit, Währung und Label hängen zusammen: die **Schwellen** des Labels
    stehen in Euro (`CLAUDE.md`), die **Zuordnung** folgt der Kassenlage. Folge für die Abnahme:
    README und Website-Kennzahlen (`sync-stats.mjs`) verschieben sich und werden am Ende der Runde
    neu erzeugt. Der Label-Abgleich gegen das Original (früher: jede Abweichung = Verlust) erlaubt
    jetzt **belegte, im Marker benannte** Abweichungen; sie werden im Prüfprotokoll einzeln geführt.
11. **REQ-69 neu (am 2026-09-30 zu den Fällen Kapitel 01, Nr. 17/18/19 entschieden)** — **Titel mit
    Altersangabe nennen die deutsche Regel.** Anlass: Die Titel trugen die Altersgrenze der Vorlage
    („Frauen ab 40", „Frauen ab 30", „Ab 45 bis 50"), während der Eintrag die deutsche Grenze nennt —
    dieselbe Art Widerspruch wie in Nr. 21/22, nur in der Titelzeile. Die Empfehlung, auf der die
    Nutzen-Zahlen beruhen (USPSTF, Altersspanne der Studien), bleibt mit ihrer Altersangabe im
    Klartext und in der Nutzen-Spalte stehen, samt Quelle. Ausnahme von der Wortregel in `CLAUDE.md`
    (Titel dürfen nur Wörter hinzunehmen): die Alterszahl darf ersetzt werden. Danach
    `node tools/check-refs.mjs --check` laufen lassen.

**Was das nicht ist.** Kein Freibrief. Wo keine China-Bindung besteht, bleibt der Text, wie er ist:
die Empfehlung, die Zahlen der Nutzen-Spalte, die Evidenzstufen, die Quellen und die Belegpflicht.
Ersetzt wird der China-Bezug, nicht das Urteil.

**Offene Punkte (in der Überarbeitungsrunde zu entscheiden):**

- ~~Ob angepasste Einträge **maschinell gekennzeichnet** werden~~ — **entschieden am 2026-09-30:
  ja, nach REQ-67.** Der Marker lautet `<!-- Angepasst: <was ersetzt wurde> — <Beleg> -->` und steht
  direkt unter der Kostenlabel-Zeile.
- Die Folgen für **REQ-22** (Zahlen unverändert), **REQ-23** (chinesische Normen mit Artikelnummer),
  **REQ-37** (deutsche Terminologie für chinesische Verfahren) und
  **REQ-49** (keine chinesischen Reststrings) sind **je Eintrag** zu prüfen. Sie sind hier nicht
  pauschal aufgehoben. **REQ-68** entscheidet den Währungsteil vorab: die Kosten-Schwellen des
  Kostenlabels sind ab 2026-09-30 in Euro angegeben, `元` kommt im Buch nicht mehr vor.
  **REQ-26** ist am 2026-09-30 neu gefasst (Punkt 10): der `Geld`-Wert folgt der deutschen
  Kostensituation, nicht mehr der Vorlage.
- Die Liste **„Ausdrücklich außerhalb des Umfangs"** ist mit REQ-65 teilweise im Widerspruch
  („Aktualisierung veralteter Angaben … werden mitübersetzt, nicht korrigiert") und neu zu lesen.
- Der **Bestand wird in der Überarbeitungsrunde angepasst** (Issues #4–#37, Bestandteile #38–#44).
  Sie ist am 2026-09-30 als **Runde 10** gestartet; der Fortschritt steht in `status.md`. Reihenfolge:
  Kapitel 01–34 der Reihe nach, danach die Bestandteile. Jedes Kapitel wird erst fachlich und gegen
  die Buchvorgaben geprüft und dann dem Auftraggeber zur Freigabe vorgelegt.
