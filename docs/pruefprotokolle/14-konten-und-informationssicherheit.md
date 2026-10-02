# Überarbeitung 2026-10, Zielrichtung Deutschland — Abschnitt 14 „Konten und Informationssicherheit"

Stand: 2026-10-01. Kapiteldatei: `book/14-konten-und-informationssicherheit.md` (9 Einträge).
Verdikt der Sichtung (`review/kapitel/14.md`): **gelb**. Gruppe ② = **1** (Nr. 9,
Gesichtserkennung), Gruppe ③ = **0**, Klasse X = **0**.

## ① Sichtungspass (Kapitelzuordnung)

| Nr. | Klasse | Ein-Zeilen-Grund |
| --- | --- | --- |
| 1 | ① D | Die Google-Studie (Doerfler 2019) trägt; reine US-Quelle, keine China-Angabe. Unverändert. |
| 2 | ① D | CISA-Empfehlung, reine US-Quelle; „WeChat" nur als Plattformname in lateinischen Buchstaben. Unverändert. |
| 3 | ① D | Erfahrung des Autors, keine Literatur; keine China-Angabe. Unverändert. |
| 4 | ② E | China-gebunden nur in der Anmerkung: Anbieter-Hotlines (China Mobile/Unicom/Telecom) und die Abfrage der Anmeldestadt → deutscher Sperr-Notruf und Mobilfunk-Anbieter. |
| 5 | ② Ü | China-gebunden: Beweislastregel des Obersten Volksgerichts (Art. 4, 5, 7, 14, 15), chinesische Notrufnummer 96110 und der Beweistipp zur Kartenbenutzung → §§ 675u/675v/675w BGB. |
| 6 | ① D | Erfahrung des Autors; Plattformnamen (WeChat, Alipay, Apple, Android) lateinisch. Unverändert. |
| 7 | ② Ü | China-gebunden: PIPL Art. 6/15/16 (Koppelungsverbot, Datenminimum, Widerruf) → DSGVO Art. 5 Abs. 1 Buchst. c und Art. 7. |
| 8 | ② Ü | China-gebunden: PIPL Art. 45–50 (Auskunft, Berichtigung, Löschung, Klage), chinesische Kostenregel („Anwaltskosten trägst du selbst") → DSGVO Art. 15/16/17/20/77/79 und § 91 ZPO. |
| 9 | ② **②** | China-gebunden: chinesische Verwaltungsmaßnahmen zur Gesichtserkennung (Registrierungspflicht, Internetaufsichtsbehörde, Verfahren) → DSGVO Art. 9 und Art. 7, KI-Verordnung (EU) 2024/1689 Art. 5 Abs. 1 Buchst. h. |

Kapitelurteil: **gelb** — genau ein ②-Eintrag (Nr. 9), kein ③.

## ② Angepasste Einträge (5 von 9)

Geändert wurden Nr. 4, 5, 7, 8 und 9. Unverändert blieben Nr. 1, 2, 3 und 6 (Stufe D, kein `元`,
kein CJK, keine china-gebundene Aussage). Marker im Haupttext: **5 × `Angepasst`**, 0 × `Währung`,
0 × `Länge`. Kein Eintrag gestrichen, kein Kostenlabel geändert.

### Nr. 4 — Handy weg: Reihenfolge
- **Ersetzt:** die drei chinesischen Anbieter-Hotlines (China Mobile 10086, China Unicom 10010,
  China Telecom 10000) und die Abfrage der Anmeldestadt → deutscher Sperrweg.
- **Abgerufene Quelle:** Bundespolizei, Seite „Vorsicht Taschendiebstahl — Hinweise zu
  Kartensperrungen" (`bundespolizei.de`), am 2026-10-01 geladen. Dort belegt: „Lassen Sie in Verlust
  geratene Zahlungs- und Mobilfunkkarten unverzüglich sperren: Verwenden Sie in Deutschland den
  Sperr-Notruf 116 116." Der Anmerkungstext nennt jetzt Mobilfunk-Anbieter (SIM-Karte), den
  Sperr-Notruf 116 116 (Zahlungs- und Mobilfunkkarten, rund um die Uhr) und im Ausland +49 116 116.
  Die US-FCC-Quelle und der Klartext/Beweisteil bleiben unverändert.

### Nr. 5 — Kartenmissbrauch: die Bank schuldet den Beweis
- **Ersetzt:** die Beweislastregel des Obersten Volksgerichts (Art. 4, 5, 7, 14 und 15 der
  „Bestimmungen über Zivilstreitigkeiten über Bankkarten"), die chinesische Notrufnummer 96110 und
  der Beweistipp, mit einer kleinen Abfrage/Einzahlung die Karte am Ort zu beweisen.
- **Abgerufene Quellen (gesetze-im-internet.de, am 2026-10-01 im Volltext gelesen):**
  - **§ 675u BGB:** der Zahlungsdienstleister hat gegen den Zahler „keinen Anspruch auf Erstattung
    seiner Aufwendungen" und muss den Betrag unverzüglich erstatten.
  - **§ 675w BGB:** „Ist die Autorisierung eines ausgeführten Zahlungsvorgangs streitig, hat der
    Zahlungsdienstleister nachzuweisen, dass eine Authentifizierung erfolgt ist …". Die bloße
    Aufzeichnung der Nutzung des Zahlungsinstruments reicht „allein nicht notwendigerweise aus"; der
    Zahlungsdienstleister „muss unterstützende Beweismittel vorlegen".
  - **§ 675v BGB:** Abs. 1 begrenzt den Anspruch des Zahlungsdienstleisters auf „bis zu einem Betrag
    von 50 Euro"; Abs. 2 Nr. 1: keine Haftung, wenn der Verlust vor dem Vorgang nicht zu bemerken war;
    Abs. 3: Ersatz des gesamten Schadens nur bei Betrugsabsicht oder Vorsatz/grober Fahrlässigkeit.
- **Gesetzt:** Der Nutzen führt jetzt § 675w (Beweislast beim Zahlungsdienstleister), § 675u
  (Erstattung) und § 675v (50-Euro-Grenze, Vorsatz/grobe Fahrlässigkeit). Der Anmerkungstext führt
  die drei Haftungsstufen und verweist auf „Abschnitt 14, Nr. 1 (Zwei-Faktor-Authentifizierung)" und
  „Abschnitt 8, Nr. 2 (bei Betrug sofort 110 anrufen …)". Der chin. Beweistipp zur Kartenbenutzung ist
  entfallen, weil der Beweis nach § 675w ohnehin den Zahlungsdienstleister trifft. Die Quellenzeile
  nennt jetzt §§ 675u/675v/675w BGB und die Bundespolizei-Seite. Klartext und Evidenzstufe A bleiben.

### Nr. 7 — Nicht auf „Alle zustimmen" klicken
- **Ersetzt:** PIPL Art. 6 (Mindestumfang), Art. 16 (Leistungsverweigerung bei Ablehnung) und Art. 15
  (Widerruf) → DSGVO.
- **Abgerufene Quelle:** Konferenz der unabhängigen Datenschutzbehörden des Bundes und der Länder
  (Datenschutzkonferenz), **Kurzpapier Nr. 20 „Einwilligung nach der DS-GVO"** (Stand 23.09.2026),
  `datenschutzkonferenz-online.de`, am 2026-10-01 im Volltext gelesen. Dort belegt: „… wenn sie eine
  echte und freie Wahl hat, also in der Lage ist, die Einwilligung zu verweigern oder zurückzuziehen,
  ohne Nachteile zu erleiden"; „… die Erfüllung eines Vertrages von einer Einwilligung … abhängig
  gemacht wird, die für die Erfüllung des Vertrages nicht erforderlich ist (Art. 7 Abs. 4 i.V.m.
  ErwGr. 43, sogenanntes Koppelungsverbot)"; ausnahmsweise zulässig, wenn ein vergleichbarer Dienst
  „auch ohne Tracking angeboten wird, dieser muss aber tatsächlich gleichwertig sein"; Widerruf „so
  einfach wie die Erteilung". Art. 5 Abs. 1 Buchst. c (Datenminimierung) trägt der Nutzen-Satz zu den
  „für den Zweck notwendigen Daten".
- **Gesetzt:** Nutzen auf DSGVO Art. 7 (Freiwilligkeit, Kopplungsverbot) und Art. 5 Abs. 1 Buchst. c
  (Datenminimierung) umgestellt; Quellenzeile ersetzt. Klartext und Evidenzstufe A bleiben.

### Nr. 8 — Auskunft, Berichtigung, Löschung, Klage
- **Ersetzt:** PIPL Art. 45 (Einsicht/Kopien), Art. 46 (Berichtigung), Art. 47 (Löschung von Amts
  wegen), Art. 50 (Bearbeitungsmechanismus, Klagerecht) sowie die chinesische Kostenregel „die
  Anwaltskosten trägst du selbst".
- **Abgerufene Quellen (am 2026-10-01 geladen):**
  - **LfD Niedersachsen, „Betroffenenrechte"** (`lfd.niedersachsen.de`): Betroffenenrechte nach
    Art. 15 (Auskunft), 16 (Berichtigung), 17 (Löschung), 20 (Datenübertragbarkeit), 77 (Beschwerde).
  - **§ 91 ZPO** (gesetze-im-internet.de): „Die unterliegende Partei hat die Kosten des Rechtsstreits
    zu tragen …" (Abs. 1); die gesetzlichen Gebühren des Anwalts der obsiegenden Partei sind zu
    erstatten (Abs. 2).
- **Gesetzt:** Nutzen auf DSGVO Art. 15/16/17/20 und Beschwerde/Klage (Art. 77/79) umgestellt. Die
  Kostenzeile sagt jetzt: Beschwerde bei der Aufsichtsbehörde kostenlos; ein Gerichtsverfahren dauert
  Monate, und „verlierst du, trägst du die Kosten beider Seiten (§ 91 ZPO)". Damit trägt das
  Kostenlabel `Geld=0` weiter (der empfohlene Weg — die kostenlose Beschwerde — bleibt kostenfrei).
  Klartext und Evidenzstufe A bleiben.

### Nr. 9 — Gesichtserkennung (②-Eintrag, Beleg gelungen)
- **Ersetzt:** die chinesischen „Verwaltungsmaßnahmen für die sichere Anwendung von
  Gesichtserkennungstechnik" (Staatliches Büro für Internetinformationen / Ministerium für öffentliche
  Sicherheit 2025, in Kraft seit 1. Juni 2025) samt Nebenfestlegungen — Registrierungspflicht ab
  100.000 Betroffenen binnen 30 Werktagen bei der Internetaufsichtsbehörde ab Provinzebene, Vorlesen
  des Wortlauts, „staatliche Sonderregelungen", Einwilligung der Eltern unter 14 Jahren.
- **Abgerufene Quellen (am 2026-10-01 im Volltext gelesen):**
  - **DSGVO Art. 9** — belegt über die DSK, **„Positionspapier zur biometrischen Analyse"**
    (Version 1.0, Stand 3. April 2019, `tlfdi.de`): „Nach Art. 9 Abs. 1 DS-GVO ist die Verarbeitung
    biometrischer Daten zur eindeutigen Identifizierung einer natürlichen Person grundsätzlich
    untersagt"; „An das Erfordernis einer freiwilligen Einwilligung in die Verarbeitung biometrischer
    Daten sind besonders hohe Anforderungen zu stellen". Ergänzend DSK **Kurzpapier Nr. 17**
    (`datenschutzkonferenz-online.de`) und **Kurzpapier Nr. 20**: „Gemäß Art. 9 Abs. 2 lit. a DS-GVO
    ist für die Verarbeitung besonderer Kategorien von Daten (Gesundheitsdaten, genetische und
    biometrische Daten usw.) eine ausdrückliche Einwilligung erforderlich; konkludente Handlungen sind
    also ausgeschlossen"; Widerruf „so einfach wie die Erteilung" (Art. 7 Abs. 3).
  - **KI-Verordnung (VO (EU) 2024/1689) Art. 5 Abs. 1 Buchst. h** — belegt über die
    **Bundesnetzagentur**, Seite „Verbotene Praktiken" (`bundesnetzagentur.de`): verboten ist die
    „Biometrische Echtzeit-Fernidentifizierung in öffentlich zugänglichen Räumen zu
    Strafverfolgungszwecken"; „Diese Verbote gelten seit dem 2. Februar 2025". (Ausnahmen für
    Vermissten-/Opfersuche und die Abwehr konkreter Gefahren bzw. Terroranschläge bleiben der Norm
    vorbehalten und werden im Eintrag nicht behauptet.)
- **Gesetzt:** Klartext, Nutzen und Quellenzeile auf DSGVO Art. 9/Art. 7 und KI-VO Art. 5 Abs. 1
  Buchst. h umgestellt. Der Eintrag sagt jetzt die belegte deutsche Rechtslage: Gesicht ist ein
  besonders geschütztes Datum, Verarbeitung nur mit ausdrücklicher, freiwilliger, widerruflicher
  Einwilligung; die biometrische Echtzeit-Fernerkennung zu Strafverfolgungszwecken ist in der EU
  verboten. Die Anmerkung nennt als Anlaufstelle die Datenschutz-Aufsichtsbehörde des Bundeslandes
  (statt der chinesischen Internetaufsichtsbehörde) und verweist auf „Abschnitt 14, Nr. 8". Die
  AI-Schlussformel des Vorlagentextes ist entfallen. Evidenzstufe A bleibt.

## Prüfläufe

- `grep -c 元` in der Kapiteldatei = **0**.
- CJK-Suche (`grep -cP '[\x{4e00}-\x{9fff}…]'`) = **0** (auch die chinesischen Klammernamen in
  Nr. 5, 7, 8 und 9 sind entfernt).
- `node tools/check-plain.mjs --stat` = **beanstandet 0** (Länge 0, Satzlänge 0, Jargon 0, neuezahl 0,
  Leerformel 0).
- `node tools/check-refs.mjs` wurde **nicht** ausgeführt (Wellenlauf durch die Orchestrierung, laut
  Auftrag §8). Die Ziele der in dieses Kapitel hineinreichenden Verweise sind unverändert:
  `book/08` → „Abschnitt 14, Nr. 8" (Titel Nr. 8 unverändert), `book/21` → „Abschnitt 14, Nr. 5 (bei
  Kartenmissbrauch erst sperren, dann Anzeige erstatten)" (Titel Nr. 5 unverändert).
- Keine nackten „Nr. N"-Verweise mehr im Kapitel; die zwei vorhandenen sind jetzt „Abschnitt 14,
  Nr. 1" und „Abschnitt 8, Nr. 2".

## Offene Punkte

- **Nr. 2 und Nr. 6** nennen chinesische Plattformen in lateinischen Buchstaben (WeChat, Alipay;
  Nr. 6 zusätzlich Apple, Android). Das ist kein `元`, keine chinesische Zahl und kein CJK; die
  Einträge sind Stufe D und bleiben laut Auftrag §2 unangetastet. Hier nur gemeldet.
- **Nr. 5, Nutzen-Zeile** führt den deutschen Nachweis der Nichtautorisierung auf § 675w BGB; das ist
  die belegte allgemeine Beweislastregel und deckt sich mit dem Titel („Den Beweis … schuldet die
  Bank"). Eine Sonderregel für nicht bankmäßige Zahlungsdienste wird nicht behauptet.

## Zweite Prüfung (2026-10-02)

Anlass: GitHub-Issue #65 (zweite Prüfung; Belegstellen am Text verifiziert). Beide Befunde wurden am
Text geprüft, beide treffen zu. Geändert wurde nur `book/14-konten-und-informationssicherheit.md`.

### Befund 1 — chinesische Plattformbeispiele

- **Verifiziert (Nr. 6, Zeile 61):** wörtlich „Diesen Zugang gibt es in WeChat, Alipay, in der E-Mail
  sowie in Apple- und Android-Konten." WeChat und Alipay sind chinesische Dienste und für
  deutschsprachige Leser unübliche Beispiele.
- **Gesetzt:** „Diesen Zugang gibt es in der E-Mail sowie in Google-, Apple- und Microsoft-Konten."
  Beleg, dass die Empfehlung (angemeldete Geräte/Sitzungen prüfen, unbekannte abmelden) deutsche
  Konten betrifft: Bundesamt für Sicherheit in der Informationstechnik (BSI) und ProPK, Checkliste
  „Gehacktes E-Mail-Konto" (`bsi.bund.de/dok/1185096`, Pressemitteilung vom 28.10.2025, am 2026-10-02
  geladen): „alle aktiven Sitzungen beenden"; Warnzeichen sind „Anmeldungen über neue Geräte".
- **Zusätzlich gefunden, gleiche Fehlerklasse (Nr. 2, Zeile 23):** „WeChat-Favoriten" → „Chatverlauf".
  Beleg: die im Eintrag bereits zitierte CISA-Empfehlung „Use Strong Passwords".
- Nr. 2 und Nr. 6 tragen jetzt je einen `Angepasst`-Marker unter der Kostenlabel-Zeile.

### Befund 2 — Aussage zur Gesichtserkennung

- **Verifiziert (Nr. 9, Zeile 91):** wörtlich „Am häufigsten verlangen Wohnanlagen, Mietplattformen,
  Fitnessstudios und Hotels ein Gesichtsbild von dir." Diese Häufigkeitsliste setzt chinesische
  Verhältnisse voraus und ist für Deutschland nicht belegbar.
- **Geprüft:** Das im Eintrag zitierte DSK-„Positionspapier zur biometrischen Analyse" (tlfdi.de,
  Version 1.0, Stand 3. April 2019, am 2026-10-02 im Volltext gelesen) nennt als typischen
  Anwendungsfall die Zutrittskontrolle (Abschnitt 5.3.3: „Kontrolle eines physischen Zutritts zu
  Räumen oder Gebäuden", typisches Merkmal Gesichtsform). Für die konkrete Liste als „am häufigsten"
  gibt es keine deutsche Primärquelle.
- **Gesetzt (auf den belegbaren Kern gekürzt):** „Ein typischer Fall ist die Zutrittskontrolle, also
  der Zugang zu Räumen und Gebäuden." Die Häufigkeitsaussage entfällt; es wird nichts erfunden. Kein
  „zu prüfen" nötig, weil der Kern belegt ist. Der Marker zu Nr. 9 benennt den gekürzten Beispielsatz.

### Prüfläufe

- `grep -c 元` in der Kapiteldatei = **0**; CJK-Suche = **0**.
- `node tools/check-plain.mjs --stat` = **beanstandet 0**.
- `node tools/check-refs.mjs --check` = **bestanden** (588 Verweise). Keine Titeländerung, kein
  Verweis betroffen.
- Marker im Haupttext jetzt **7 × `Angepasst`** (vorher 5; Nr. 2 und Nr. 6 neu, Nr. 9 ergänzt).

### Offene Punkte

- Der frühere offene Punkt „Nr. 2 und Nr. 6 nennen chinesische Plattformen …" ist mit dieser Runde
  erledigt.
- Eine deutsche Rangfolge, wo Gesichtserkennung am häufigsten verlangt wird, ist nicht belegt und
  wurde deshalb nicht durch eine erfundene Liste ersetzt.
