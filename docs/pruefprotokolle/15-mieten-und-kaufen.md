# Abschnitt 15: Quellenprüfprotokoll

## Titel

„15. Mieten und Kaufen" — 8 Einträge. Datei: `book/15-mieten-und-kaufen.md`.

## Sichtungspass (2026-10-01, vor der Überarbeitung)

Grundlage: `review/kapitel/15.md` (Bezugstabelle, Stufen D/E/Ü) und `sichtung-restkapitel.md` (Zeile der Sichtungstabelle: Abschnitt 15 = Issue #18, 8 Einträge, Verdikt **gelb**, 2 Einträge in Gruppe ②, 0 in Gruppe ③). Die beiden ②-Einträge sind dort namentlich benannt: „15 | 4 | Miet-Treuhandkonto / Jahresvorkasse" und „15 | 8 | kleinste vermietbare Einheit (Landesbauordnungen)". Maßstab dieser Runde sind REQ-65 (deutsche Entsprechung statt Mitübersetzung), REQ-68 (keine China-Angaben, kein `元`), REQ-67 (Marker), REQ-70 (nur offen zugängliche Quellen).

**Ergebnis: Gruppe ③ = 0, Klasse X = 1 (Nr. 8).** Sieben Einträge hängen an chinesischem Recht (Nr. 1–5, 7, 8), Nr. 6 trägt kein China-Signal, aber auch keine Quelle.

| Nr. | Titel (Vorlage) | Klasse | Begründung in einer Zeile |
|---|---|---|---|
| 1 | Höhe der Kaution, Zeitpunkt der Rückzahlung und die Abzugsfälle müssen in den Vertrag | ① | Chin. Kautionsregel → § 551 BGB (Grenze, Anlage) und § 548 BGB (Frist). |
| 2 | Wasser und Strom abgestellt, Schloss ausgetauscht, Drohungen an der Tür: erst Polizei rufen … | ① | Chin. Gewaltverbot → verbotene Eigenmacht und Besitzschutz (§§ 535, 858, 862, 823 BGB), Räumung nur über den Gerichtsvollzieher (§ 885 ZPO). |
| 3 | Der Makler darf Miete und Kaution nicht einziehen und weiterleiten … | ① | Kein deutsches Verbot; der übertragbare Kern ist die gesetzliche Schuldnerstellung (§§ 535 Abs. 2, 551, 164, 362 BGB) und die Höchstprovision (WoVermRG). |
| 4 | Bei Langzeit-Apartments zuerst das Treuhandkonto prüfen … | ② | Chin. Mietmittel-Treuhandkonto hat keine Entsprechung; belegbar sind die Kautionsanlage (§ 551 BGB) und die monatliche Fälligkeit (§ 556b Abs. 1 BGB). |
| 5 | Wird die Wohnung während der Mietzeit verkauft, gilt dein Mietvertrag weiter … | ① | „Kauf bricht nicht Miete" ist ein deutscher Rechtssatz; Art. 725 Zivilgesetzbuch → § 566 BGB. |
| 6 | Vor der Unterschrift Eigentumsnachweis und Belastungen prüfen … | ① | Kein China-Signal, keine Quelle (Evidenz C) — nichts china-gebunden, unverändert. |
| 7 | Zieht der Makler beim Gebrauchtkauf den Kaufpreis ein, muss das über sein zweckgebundenes Treuhandkonto laufen | ① | Chin. Makler-Treuhandkonto → notarielle Beurkundung (§ 311b BGB), Verwahrung durch den Notar (§ 57 BeurkG) und Maklerprovision (§§ 656a, 656c BGB). |
| 8 | Miete keine abgeteilten Zimmer. Kleinste Vermietungseinheit ist der ursprünglich geplante Raum … | ② | In Deutschland ist das Einzelzimmer- und WG-Zimmer-Vermieten erlaubt; für den Kern („kleinste Einheit = geplanter Raum", Mindestfläche je Bewohner) gibt es keinen deutschen Beleg. |

**Kapitelverdikt: gelb.** Sechs Einträge werden umgestellt (Nr. 1, 2, 3, 4, 5, 7), einer bleibt ohnehin unverändert (Nr. 6), einer kommt dem Auftraggeber als **X-Vorlage** vor (Nr. 8, siehe Bericht `review/ueberarbeitung/15.md`). Keiner wird gestrichen.

**Kapitelweit.**
- **Währung (REQ-68):** `元` kommt im Kapitel vor der Überarbeitung nicht vor; auch `〔…〕` nicht. `grep -c 元` war also schon vorher 0.
- **CJK:** Vor der Überarbeitung standen CJK-Zeichen in der Quellen-Spalte von Nr. 1–5, 7 und 8 (`[住房租赁条例]`, `[民法典]`, `[房地产经纪管理办法]`, `[商品房屋租赁管理办法]`) und einmal im Fließtext (Nr. 5, Nutzen: `[民法典]`).
- **Quellen-Ersetzung:** Die chinesischen Verordnungen (Staatsratsverordnung Nr. 812, Zivilgesetzbuch, Makler-Verordnung Nr. 8, Miet-Verordnung Nr. 6) trugen die Inhaltsaussage. Nach der Umstellung auf deutsches Recht haben sie keine Trägerfunktion mehr und werden **durch die deutsche Norm ersetzt**, nicht als Literaturangabe behalten.

## Überarbeitungsrunde (2026-10-01)

Reihenfolge: erst die sechs china-gebundenen Einträge mit belegbarer deutscher Entsprechung (Nr. 1–5, 7), dann der ②-Eintrag Nr. 4, dann die Entscheidung über Nr. 8. Jede neu gesetzte Quellenangabe wurde einzeln am offenen Volltext geprüft (REQ-70), die Normen nachgelesen.

### Änderungen je Eintrag

| Nr. | Was ersetzt wurde | Deutscher Beleg (am 2026-10-01 abgerufen) | Marker |
|---|---|---|---|
| 1 | Chin. Kautionsregel (Verordnung Nr. 812, Art. 10: Höhe, Rückzahlungszeitpunkt und Abzugsfälle „im Mietvertrag zu vereinbaren") → gesetzliche Obergrenze, getrennte Anlage und Verjährung; chin. „Wohnungsaufsichtsbehörde" → Amtsgericht; Titel geändert | BGB § 551, § 548 Abs. 1; GVG § 23 Nr. 2a — `gesetze-im-internet.de` | `Angepasst` (Zeile 9) |
| 2 | Chin. Verbot der gewaltsamen Vertreibung (Verordnung Nr. 812, Art. 12) → Überlassungspflicht (§ 535 Abs. 1 BGB), verbotene Eigenmacht (§ 858 BGB), Besitzstörung (§ 862 BGB), Schadenersatz (§ 823 BGB) und Räumung nur durch den Gerichtsvollzieher (§ 885 ZPO); chin. „Wohnungsaufsichtsbehörde" entfernt; Titel geändert | BGB §§ 535 Abs. 1, 858, 862, 823; ZPO § 885 — `gesetze-im-internet.de` | `Angepasst` (Zeile 19) |
| 3 | Chin. Verbot der Einziehung von Miete und Kaution durch den Makler (Verordnung Nr. 812, Art. 25) → Miete und Kaution gehen an den Vermieter (§§ 535 Abs. 2, 551 BGB), Annahme nur mit Vollmacht (§ 164 BGB), Zahlung an einen Nichtbevollmächtigten befreit nicht (§ 362 BGB), Höchstprovision zwei Monatsmieten (§§ 2, 3 WoVermRG); Titel geändert | BGB §§ 535 Abs. 2, 362 Abs. 1, 164; WoVermRG §§ 2, 3 Abs. 2 — `gesetze-im-internet.de` | `Angepasst` (Zeile 29) |
| 4 | Chin. Mietmittel-Treuhandkonto und Untervermietungsfirma (Verordnung Nr. 812, Art. 19) → getrennte Anlage der Kaution (§ 551 BGB) und monatliche Fälligkeit der Miete (§ 556b Abs. 1 BGB); „Mietkredit über Raten-App" entfernt; Titel geändert | BGB § 551, § 556b Abs. 1 — `gesetze-im-internet.de` | `Angepasst` (Zeile 39) |
| 5 | Chin. Zivilgesetzbuch Art. 725 → § 566 BGB (Kauf bricht nicht Miete); CJK `[民法典]` aus der Nutzen-Spalte entfernt; die chin. Wendung „rechtmäßiger Besitz und Gebrauch" in der Anmerkung durch die Voraussetzung „nach der Überlassung" ersetzt | BGB § 566 — `gesetze-im-internet.de` | `Angepasst` (Zeile 49) |
| 7 | Chin. Makler-Verordnung Nr. 8 (Art. 17–19, 24: Treuhandkonto des Maklers für den Kaufpreis, Preisauszeichnung, eine Provision, Kredithilfe als eigener Vertrag) → notarielle Beurkundung (§ 311b Abs. 1 BGB), Verwahrung durch den Notar (§ 57 BeurkG), Textform und Provisionsteilung (§§ 656a, 656c BGB); „WeChat" entfernt; Titel geändert | BGB §§ 311b Abs. 1, 656a, 656c; BeurkG § 57 — `gesetze-im-internet.de` | `Angepasst` (Zeile 68) |

**Marker-Zählung: 6× `Angepasst`, 0× `Währung`, 0× `Länge`.** Nr. 6 und Nr. 8 tragen keinen Marker (keine Anpassung).

**Quellen-Ersetzung:** In Nr. 1–5 und 7 ist die chinesische Quelle **entfallen**; an ihre Stelle traten die deutschen Normen von `gesetze-im-internet.de`. Eine gesperrte Fassung (Bezahlschranke) gab es nicht.

**Titeländerungen (Wortregel, REQ-69):** Nr. 1, 2, 3, 4 und 7 sind geändert, weil der alte Titel jeweils eine Einrichtung nannte, die es in Deutschland nicht gibt (chin. Kautionsregel im Vertrag, chin. Verordnung, Mieteinforderung durch den Makler, Mietmittel-Treuhandkonto, Makler-Treuhandkonto beim Kauf). Nach der Auftragsvorgabe ist `node tools/check-refs.mjs` **nicht** ausgeführt worden (Parallelbetrieb, die Wellenprüfung läuft zentral). Geprüft wurde stattdessen in `docs/verweis-abgleich.md`: Der einzige Verweis, der **in** Abschnitt 15 hineinzeigt, geht auf **Nr. 6** („Vor der Unterschrift Eigentumsnachweis und Belastungen prüfen. Alle Zahlungen per Überweisung mit Verwendungszweck", Zeile 478). Der Titel von Nr. 6 ist **unverändert**, der Anker bleibt gültig. Kein geänderter Titel trägt einen Verweisanker.

### Die geprüften Belege

Alle Seiten von `gesetze-im-internet.de` (GVG, ZPO, BeurkG und BGB) sowie `gesetze-bayern.de`, offen, ohne Anmeldung, am 2026-10-01 abgerufen und im Volltext gelesen.

- **BGB § 551 (Begrenzung und Anlage von Mietsicherheiten)** — <https://www.gesetze-im-internet.de/bgb/__551.html>. Höchstens „das Dreifache der auf einen Monat entfallenden Miete", ohne Betriebskostenpauschalen; Zahlung in drei gleichen monatlichen Teilzahlungen; Anlage „bei einem Kreditinstitut zu dem für Spareinlagen mit dreimonatiger Kündigungsfrist üblichen Zinssatz", getrennt von seinem übrigen Vermögen; die Erträge stehen dem Mieter zu; „Eine zum Nachteil des Mieters abweichende Vereinbarung ist unwirksam."
- **BGB § 548 Abs. 1 (Verjährung der Ersatzansprüche)** — <https://www.gesetze-im-internet.de/bgb/__548.html>. Ersatzansprüche des Vermieters verjähren „in sechs Monaten", gerechnet ab dem Zeitpunkt, in dem er die Mietsache zurückerhält.
- **GVG § 23 Nr. 2a (Amtsgericht)** — <https://www.gesetze-im-internet.de/gvg/__23.html>. „Streitigkeiten über Ansprüche aus einem Mietverhältnis über Wohnraum"; „diese Zuständigkeit ist ausschließlich".
- **BGB § 535 Abs. 1 (Überlassungspflicht)** — <https://www.gesetze-im-internet.de/bgb/__535.html>. Der Vermieter hat die Mietsache „in einem zum vertragsgemäßen Gebrauch geeigneten Zustand zu überlassen und sie während der Mietzeit in diesem Zustand zu erhalten."
- **BGB § 858 Abs. 1 (Verbotene Eigenmacht)** — <https://www.gesetze-im-internet.de/bgb/__858.html>. Handeln gegen den Willen des Besitzers ist, wenn nicht gesetzlich gestattet, „widerrechtlich (verbotene Eigenmacht)".
- **BGB § 862 Abs. 1 (Besitzstörung)** — <https://www.gesetze-im-internet.de/bgb/__862.html>. Der Besitzer kann „von dem Störer die Beseitigung der Störung verlangen".
- **BGB § 823 Abs. 1 (Schadenersatzpflicht)** — <https://www.gesetze-im-internet.de/bgb/__823.html>. Wer vorsätzlich oder fahrlässig ein geschütztes Recht eines anderen verletzt, haftet auf Schadenersatz.
- **ZPO § 885 Abs. 1 (Herausgabe von Grundstücken)** — <https://www.gesetze-im-internet.de/zpo/__885.html>. Die Zwangsvollstreckung wegen Räumung führt der Gerichtsvollzieher durch.
- **BGB § 535 Abs. 2 (Miete an den Vermieter)** — <https://www.gesetze-im-internet.de/bgb/__535.html>. „Der Mieter ist verpflichtet, dem Vermieter die vereinbarte Miete zu entrichten."
- **BGB § 362 Abs. 1 (Erlöschen durch Leistung)** — <https://www.gesetze-im-internet.de/bgb/__362.html>. „Das Schuldverhältnis erlischt, wenn die geschuldete Leistung an den Gläubiger bewirkt wird." Eine Zahlung an einen Nichtbevollmächtigten befreit den Mieter also nicht.
- **BGB § 164 (Wirkung der Erklärung des Vertreters)** — <https://www.gesetze-im-internet.de/bgb/__164.html>. Wer für einen anderen handelt, braucht Vertretungsmacht; die Erklärung wirkt für und gegen den Vertretenen.
- **WoVermRG §§ 2, 3 (Wohnungsvermittlung)** — <https://www.gesetze-im-internet.de/wovermrg/BJNR017470971.html>. § 2: Textform des Vermittlungsvertrags, Bestellerprinzip („Vorschüsse dürfen nicht gefordert, vereinbart oder angenommen werden"); § 3 Abs. 2: die Provision darf „zwei Monatsmieten zuzüglich der gesetzlichen Umsatzsteuer" nicht übersteigen. Amtliches Kurzzeichen **WoVermRG** („Gesetz zur Regelung der Wohnungsvermittlung").
- **BGB § 556b Abs. 1 (Fälligkeit der Miete)** — <https://www.gesetze-im-internet.de/bgb/__556b.html>. Die Miete ist „zu Beginn, spätestens bis zum dritten Werktag der einzelnen Zeitabschnitte zu entrichten". Trägt die Aussage, dass die Jahresvorkasse keine gesetzliche Grundlage hat.
- **BGB § 566 (Kauf bricht nicht Miete)** — <https://www.gesetze-im-internet.de/bgb/__566.html>. „Wird der vermietete Wohnraum nach der Überlassung an den Mieter von dem Vermieter an einen Dritten veräußert, so tritt der Erwerber anstelle des Vermieters in die sich während der Dauer seines Eigentums aus dem Mietverhältnis ergebenden Rechte und Pflichten ein."
- **BGB § 311b Abs. 1 (Beurkundung des Grundstücksvertrags)** — <https://www.gesetze-im-internet.de/bgb/__311b.html>. Ein Vertrag, der zur Übertragung von Grundeigentum verpflichtet, „bedarf der notariellen Beurkundung".
- **BeurkG § 57 (Antrag auf Verwahrung)** — <https://www.gesetze-im-internet.de/beurkg/__57.html>. Der Notar darf Geld zur Verwahrung nur annehmen, wenn ein berechtigtes Sicherungsinteresse besteht und die Verwahrungsanweisung schriftlich vorliegt; das ist die Rechtsgrundlage des Notaranderkontos.
- **BGB §§ 656a, 656c (Maklervertrag beim Wohnungskauf)** — <https://www.gesetze-im-internet.de/bgb/__656a.html>, <https://www.gesetze-im-internet.de/bgb/__656c.html>. § 656a: Textform. § 656c: Eine Provision von beiden Seiten setzt voraus, dass sich die Parteien „in gleicher Höhe verpflichten"; die Klausel zum Nachteil ist unwirksam. Anmerkung: § 656b BGB ist die Anwendungsbereichsnorm („Die §§ 656c und 656d gelten nur, wenn der Käufer ein Verbraucher ist."), nicht die Provisionsregel — die steht in § 656c.

### Für die X-Vorlage Nr. 8 geprüft (nicht in den Text übernommen — Entscheidung: streichen)

- **BayBO Art. 45 (Aufenthaltsräume)** — <https://www.gesetze-bayern.de/Content/Document/BayBO-45>. Aufenthaltsräume brauchen eine lichte Höhe von „mindestens 2,40 m", müssen „ausreichend belüftet und mit Tageslicht belichtet" sein und Fenster von mindestens einem Achtel der Netto-Grundfläche haben.
- **BayBO Art. 2 Abs. 5 (Begriff)** — <https://www.gesetze-bayern.de/Content/Document/BayBO-2>. „Aufenthaltsräume sind Räume, die zum nicht nur vorübergehenden Aufenthalt von Menschen bestimmt oder geeignet sind."
- **BGB § 558 (Mieterhöhung)** — <https://www.gesetze-im-internet.de/bgb/__558.html>. Der Vermieter kann nicht einseitig erhöhen; er kann „die Zustimmung zu einer Erhöhung der Miete bis zur ortsüblichen Vergleichsmiete verlangen", bei einer Kappungsgrenze von 20 Prozent in drei Jahren (in angespannten Gebieten 15 Prozent).
- **BGB § 556d Abs. 1 (Mietpreisbegrenzung)** — <https://www.gesetze-im-internet.de/bgb/__556d.html>. In einem per Rechtsverordnung bestimmten Gebiet mit angespanntem Wohnungsmarkt darf die Miete bei Neuvermietung die ortsübliche Vergleichsmiete „höchstens um 10 Prozent übersteigen".

### Nicht geändert

- **Nr. 6** trägt kein China-Signal und keine Quelle (Evidenzstufe C, „Erfahrung des Autors"). Der Auftrag ändert nur China-gebundenes; hier gab es nichts umzustellen. Einzige Ergänzung: der Besichtigungshinweis aus dem gestrichenen Nr. 8 (nachträglich eingebaute Trennwände, Fenster im Zimmer, Belastbarkeit der Stromleitung) — er gehört zum Prüfen vor der Unterschrift, dem Thema des Eintrags. Titel, Evidenzstufe, Quellenzeile und Kostenlabel bleiben unverändert. Die beiden Schwachstellen des Eintrags sind im Bericht unter „Offene Punkte" benannt (Grundbucheinsicht nach § 12 GBO nur bei berechtigtem Interesse; der Quellenverweis auf „Brautpreis und Schuldschein in Abschnitt 8" ist ein Verweis ohne Nummer, und der Brautpreis-Eintrag steht in der Sichtung als Streichkandidat).
- **Nr. 8 wurde auf Entscheidung des Auftraggebers vom 2026-10-01 gestrichen** (X-Vorlage, siehe Bericht, Abschnitt „X-Vorlagen"). Der Kern („Kleinste Vermietungseinheit ist der ursprünglich geplante Raum") hat in Deutschland kein Gegenstück: Einzelzimmer und WG-Zimmer zu vermieten ist hier erlaubt, und für eine Mindestfläche je Bewohner gibt es keine belegbare deutsche Vorgabe. Die Warnung des Eintrags („du musst womöglich ausziehen, Kaution weg") gilt damit für deutsche Leser nicht. Die drei Besichtigungsfragen der alten Anmerkung (nachträglich gemauerte Wand, Fenster, Stromleitung) wurden nach **Nr. 6** übernommen, damit REQ-20 gewahrt bleibt; die Normen der Alternativfassung (BayBO Art. 45, BGB §§ 558, 556d) wurden geprüft, aber nicht in den Text übernommen. Das ist eine Streichung, keine Anpassung, deshalb trägt **Nr. 6 keinen Marker** — der Vorgang steht hier und im Bericht. Abschnitt 15 hat damit **7 Einträge** (vorher 8); die Nummerierung bleibt lückenlos, weil Nr. 8 die letzte war.
- **Kostenlabel:** keines geändert. Alle acht Einträge bleiben `Geld=0`; die deutsche Rechtsauskunft kostet nichts. `Zeit`, `Willenskraft`, `Nutzen`, `Bezug` unangetastet (REQ-26).
- **Einleitung (Zeile 5):** unverändert, sie trägt keine China-Angabe.

### Außerhalb des Auftrags — festgehalten, nicht angefasst

- **README.md, Zeile 259** (Katalogzeile des Abschnitts) nennt noch „vom Makler vereinnahmte Beträge, Treuhandkonto … Treuhandkonto für den Kaufpreis" — also die Einrichtungen, die ersetzt wurden. **README.md, Zeile 74** beschreibt die drei Szenarien des Abschnitts in der alten Fassung. Beide sind **nicht** geändert; sie laufen beim Wellenabschluss mit.
- **CLAUDE.md, Zeile 117** (Verzeichnisstruktur) führt Abschnitt 15 noch mit „Inkasso durch den Makler, Treuhand des Geldes … das spezielle Verwahrkonto für Geld beim Kauf gebrauchter Wohnungen". **Nicht** geändert.
- **Nr. 1, entfernter Querverweis:** Die alte Anmerkung verwies für das chinesische Bagatellverfahren auf „Abschnitt 8". Das ist ein chinesisches Verfahren ohne deutsche Entsprechung; der deutsche Weg (Amtsgericht, § 23 Nr. 2a GVG) steht jetzt direkt im Eintrag, der Querverweis ist entfallen. Der Eintrag in Abschnitt 8 (Nr. 22, Betrug beim Online-Kauf) ist selbst stark china-gebunden und gehört zu einem anderen Bearbeitungsstrang.

### Maschinelle Gates

- `grep -c 元 book/15-mieten-und-kaufen.md` = **0**.
- CJK-Suche `grep -cP '[\x{4e00}-\x{9fff}]'` = **0** (nach der Streichung von Nr. 8; zuvor eine Zeile, die chinesische Quellenzeile des X-Eintrags).
- Einträge `grep -c '^### '` = **7** (vorher 8, Nr. 8 gestrichen).
- `node tools/check-plain.mjs --stat` = 628 Klartext-Zeilen, **beanstandet 0** (Länge 0, Satzlänge 0, Jargon 0, neuezahl 0, Leerformel 0).
- `node tools/check-refs.mjs` wurde **nicht** ausgeführt (Auftrag: nur mit `--check`, und diese Runde läuft parallel zur Wellenprüfung). Der Verweisabgleich erfolgte an `docs/verweis-abgleich.md`.
- `node tools/sync-stats.mjs` wurde **nicht** ausgeführt — die Statistik wird am Wellenende zentral geschrieben.
