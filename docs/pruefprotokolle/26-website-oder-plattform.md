# Abschnitt 26: Quellenprüfprotokoll (rote Welle)

## Titel

„26. Website oder Plattform" — vor der Überarbeitung 11 Einträge, danach **9 Einträge**. Datei: `book/26-website-oder-plattform.md`.

## Sichtungspass (vor der Überarbeitung)

Grundlage: `review/kapitel/26.md` (Stufen D/E/Ü/X der ersten Runde) und `auftrag-rote-welle.md` §3 (Abschnitt 26 = Issue #29, 11 Einträge, **2 Streichungen, 2 Umbauten**). Die Entscheidungen des Auftraggebers vom 2026-10-01 wurden **ausgeführt, nicht neu bewertet**:

- **Nr. 2 umstellen:** ICP-/EDI-Lizenz → Gewerbeanmeldung (§ 14 GewO) samt der Erlaubnispflichten.
- **Nr. 7 umstellen:** Klarnamenpflicht → Anonymitätsrecht (dieselbe Frage, deutsche Antwort).
- **Nr. 3 streichen:** Kultur-/Filmangebote sind Staatsbesitz — keine Entsprechung.
- **Nr. 4 streichen:** Deutschland registriert keine Websites.

| Nr. | Titel (Vorlage) | Klasse | Begründung in einer Zeile |
|---|---|---|---|
| 1 | Die Plattform darf nicht selbst Geld einnehmen und an Verkäufer weiterleiten … | ① | Chin. Nichtbank-Zahlungslizenz (Volksbank, 100 Mio. Kapital) → Zahlungsdiensteaufsicht (ZAG). |
| 2 | Eine Website, die Geld einnimmt, braucht eine Lizenz … | ③ | **Umbau:** chin. Lizenzsystem → Gewerbeanmeldung § 14 GewO + Impressum § 5 DDG. |
| 3 | Für Livestreaming die Lizenz für Online-Kulturangebote … | ③ | **Streichung:** Netz-Kultur- und audiovisuelle Lizenz sind in China Staatsbesitz. |
| 4 | Steht der Server im Inland, brauchst du die Registrierung … | ③ | **Streichung:** Deutschland registriert keine Websites; die Impressumspflicht steht in Nr. 2. |
| 5 | Lässt du Nutzer auf der Plattform verkaufen, musst du prüfen … drei Jahre aufbewahren | ① | Chin. E-Commerce-Gesetz → DSA Art. 30 und Plattformen-Steuermeldegesetz. |
| 6 | Um vom Nutzer veröffentlichte Inhalte musst du dich kümmern … | ① | Chin. „Hauptverantwortung" → DSA Art. 16 und Art. 8, § 7 DDG. |
| 7 | Bietest du Informationsveröffentlichung … echte Identitätsangaben | ③ | **Umbau:** chin. Klarnamenpflicht → Anonymitätsrecht § 19 Abs. 2 TDDDG. |
| 8 | Unter 16 Jahren keinen Livestreaming-Account … | ① | Chin. Minderjährigenschutz → §§ 4, 5, 5a JMStV und §§ 104–110 BGB. |
| 9 | Auf eine Verletzungsanzeige musst du zeitnah reagieren; 15 Tage … | ① | Chin. Notice-and-Takedown → DSA Art. 6, 16, 17 und § 8 DDG. |
| 10 | Nutzerdaten nicht einfach ins Ausland geben; Personenschwellen | ① | Chin. Datenausfuhr mit Schwellen → DSGVO Art. 44–46 (keine Schwellen). |
| 11 | Bei der Serverwahl erst fragen, ob ein Ausfall zu ertragen ist … | ① | Chin. Preise und Lizenzprüfung → Euro/Erfahrung, Impressumprüfung § 5 DDG. |

**Kapitelverdikt: rot.** Alle neun verbleibenden Einträge werden umgestellt; zwei werden gestrichen. **Kein Eintrag der Klasse ②** („Übertragung offen") im Kapitel.

**Kapitelweit.**
- **Währung (REQ-68):** `元` kam **37×** vor (Kosten, Klartext, Nutzen). Nach der Überarbeitung: **0**.
- **CJK:** Vor der Überarbeitung **337** CJK-Zeichen, u. a. in den chinesischen Verordnungstiteln der Quellen-Spalte (`[非银行支付机构监督管理条例]`, `[电子商务法]`, `[未成年人保护法]` …) und im Fließtext (Nr. 1, 2, 4, 7, 11). Nach der Überarbeitung: **0**.
- **Quellen-Ersetzung:** Die chinesischen Normen trugen die Inhaltsaussage. Nach der Umstellung auf deutsches Recht haben sie keine Trägerfunktion mehr und werden **durch die deutsche Fundstelle ersetzt**, nicht als Literaturangabe behalten (Auftrag §4.2; Muster Abschnitt 15).

## Überarbeitungsrunde

Reihenfolge: zuerst die beiden Umbauten (Nr. 2, 7) und die Streichungen (Nr. 3, 4), dann die übrigen Einträge. Jede neu gesetzte Quellenangabe wurde einzeln am offenen Volltext geprüft (REQ-70), die Normen nachgelesen.

### Änderungen je Eintrag

| Neu | Alt | Was ersetzt wurde | Deutscher Beleg | Marker |
|---|---|---|---|---|
| 1 | 1 | Chin. Nichtbank-Zahlungslizenz (Volksbank, 100 Mio. Kapital) und die Bußgeldstaffeln → Erlaubnispflicht der BaFin, 20.000 Euro Anfangskapital, Strafvorschrift; Titel „Zahlungsinstitution" → „Zahlungsdienstleister" | ZAG §§ 1 Abs. 1 Nr. 6, 10 Abs. 1, 12 Abs. 1 Nr. 1, 63 Abs. 1 Nr. 4 — `gesetze-im-internet.de` | `Angepasst` |
| 2 | 2 | **Umbau:** Lizenz für Telekommunikationsmehrwertdienste und Website-Registrierung → Gewerbeanmeldung (§ 14 GewO), Erlaubnispflicht einzelner Gewerbe (§ 34a GewO), Impressumspflicht (§ 5 DDG); Kostenlabel `Geld` von `viel` auf `wenig` | GewO §§ 14 Abs. 1, 34a Abs. 1; DDG § 5 Abs. 1 — `gesetze-im-internet.de` | `Angepasst` |
| 3 | 5 | Chin. E-Commerce-Gesetz (Registrierungsakte, Quartalsmeldung an die Steuerbehörde, drei Jahre Aufbewahrung) → DSA Art. 30 (Einholen und Prüfen der Verkäuferangaben, sechs Monate Speicherung) und PStTG § 13 Abs. 1 (Jahresmeldung bis 31. Januar) | VO (EU) 2022/2065 Art. 30 — `ma-hsh.de`; PStTG § 13 Abs. 1 — `gesetze-im-internet.de` | `Angepasst` |
| 4 | 6 | Chin. „Hauptverantwortung des Netzbetreibers" und Meldung an die Behörde → DSA Art. 16 (Melde- und Abhilfeverfahren), Art. 8 und § 7 Abs. 1 DDG (keine allgemeine Überwachungspflicht) | VO (EU) 2022/2065 Art. 16, 8 — `ma-hsh.de`; DDG § 7 Abs. 1 — `gesetze-im-internet.de` | `Angepasst` |
| 5 | 7 | **Umbau:** Chin. Klarnamenpflicht (Cybersicherheitsgesetz) → Recht auf anonyme Nutzung und Bezahlung; Kostenlabel `Geld` von `wenig` auf `0` | TDDDG § 19 Abs. 2 — `gesetze-im-internet.de` | `Angepasst` |
| 6 | 8 | Chin. Altersstufen für Livestreaming-Geschenke (unter 8 / 8–16 / ab 16) → Altersstufen des Jugendschutzes (ohne / ab 6 / ab 12 / ab 16 / ab 18), Altersverifikation bei Video-Sharing-Diensten und Geschäftsfähigkeit Minderjähriger | JMStV §§ 4, 5 Abs. 1, 5a Abs. 2 — `nlm.de`; BGB §§ 106–108, 110 — `gesetze-im-internet.de` | `Angepasst` |
| 7 | 9 | Chin. Notice-and-Takedown mit 15-Tage-Frist (E-Commerce-Gesetz) → DSA Art. 16 (Kenntnis ab Meldung), Art. 6 (Haftung ab Kenntnis), Art. 17 (Begründung) und § 8 Abs. 1 DDG (Sperrungsanspruch) | VO (EU) 2022/2065 Art. 6, 16, 17 — `ma-hsh.de`; DDG § 8 Abs. 1 — `gesetze-im-internet.de` | `Angepasst` |
| 8 | 10 | Chin. Datenausfuhr mit Personenschwellen (100.000 / 1 Mio., Sicherheitsbewertung, Zertifizierung) → DSGVO-Kapitel V ohne Schwellen (Angemessenheitsbeschluss, geeignete Garantien) | VO (EU) 2016/679 Art. 44, 45, 46 — `datenschutz-hamburg.de` | `Angepasst` |
| 9 | 11 | Chin. Preise in Yuan → Größenordnungen in Euro; Prüfung im Lizenzsystem des chinesischen Industrie- und Informationsministeriums → Prüfung des Impressums (§ 5 DDG); die wörtliche Doppelung zwischen Klartext und Nutzen aufgelöst | DDG § 5 Abs. 1 — `gesetze-im-internet.de` | `Angepasst` |

**Marker-Zählung: 9× `Angepasst`, 0× `Währung`, 0× `Länge`.** Jeder Eintrag trägt genau einen Marker direkt unter der Kostenlabel-Zeile.

**Kostenlabel (REQ-26):** geändert nur bei Nr. 2 (`Geld viel → wenig`, weil statt Lizenzkapital von mehreren Millionen nun eine kleine Anmeldegebühr anfällt) und Nr. 5 (`Geld wenig → 0`, weil die Klarnamenprüfung entfällt). `Zeit`, `Willenskraft`, `Nutzen` und `Bezug` sind durchweg unangetastet. Beide Änderungen sind im Marker benannt.

**Quellen-Ersetzung:** In allen neun Einträgen ist die chinesische Quelle **entfallen**; an ihre Stelle traten deutsche Normen. Eine gesperrte Fassung (Bezahlschranke) gab es nicht.

**Titeländerungen:** Nr. 2 („Lizenz … Registrierung" gibt es nicht), Nr. 5 (Klarname → Verbot des Klarnamenzwangs), Nr. 7 (die 15-Tage-Frist gibt es nicht) und Nr. 8 („Personenschwellen" gibt es nicht) sind geändert. Die bestehenden Verweise aus anderen Abschnitten zeigen auf Nr. 5–10 der alten Zählung (Bereichsverweise, von der Ankerprüfung befreit); die geänderten Titel von Nr. 1–2 und 7–8 tragen keinen Verweisanker. `node tools/check-refs.mjs` wurde **nicht** ausgeführt (Auftrag §8).

### Gestrichene Einträge (Auftrag §3)

| Alt | Kern | Begründung | Nummerierung |
|---|---|---|---|
| 3 | Lizenz für Online-Kulturangebote (Netz-Kulturlizenz) und Lizenz für audiovisuelle Angebote; Antragsteller muss in Staatsbesitz oder staatlich kontrolliert sein | In Deutschland gibt es für Livestreaming keine Kultur- oder Film-Sonderlizenz; die audiovisuelle Lizenz steht ausschließlich Staatsunternehmen offen und hat kein Gegenstück | Nr. 5–11 rücken auf 3–9 |
| 4 | ICP-Registrierung einer Website beim Industrieministerium; der Anbieter muss selbst eine Lizenz halten | Deutschland registriert keine Websites; die deutsche Anmeldepflicht (Gewerbe, Impressum) steht jetzt im umgebauten Nr. 2, eine Doppelung wurde vermieden | Nr. 5–11 rücken auf 3–9 |

**REQ-20-Behandlung:** Keine Aussage der beiden gestrichenen Einträge geht verloren. Die tragende Pflicht für eine geschäftliche Website (Anmeldung + Impressum) steht im umgebauten Nr. 2. Die in Nr. 4 nur mitgeführte Serverfrage ist bereits der eigene Eintrag Nr. 11 (neu 9). Der Vorgang steht hier und im Bericht, **nicht** im Buch (kein Marker, kein Kommentar im Text).

**Bereinigt:** Die Einleitung (Zeile 5) nannte die gestrichenen Themen („die Lizenz für Telekommunikationsmehrwertdienste und EDI, die Lizenz für Online-Kulturangebote und die audiovisuelle Lizenz, die ICP-Registrierung und die Qualifikation des Anbieters") und wurde auf die neue Gliederung gezogen. Der innere Verweis in der alten Nr. 11 (Quellen) auf „Nr. 4 in diesem Abschnitt" und „Abschnitt 11, Nr. 16" ist mit der Neufassung entfallen (Nr. 4 gibt es nicht mehr, Abschnitt 11 Nr. 16 streicht dieselbe Welle).

### Die geprüften Belege

Alle Seiten sind offen zugänglich, ohne Anmeldung, am 2026-10-01 abgerufen und im Volltext gelesen.

- **ZAG § 1 Abs. 1 Nr. 6 (Finanztransfergeschäft)** — <https://www.gesetze-im-internet.de/zag_2018/__1.html>. Zahlungsdienste sind u. a. „das Weiterleiten von Geldbeträgen … ohne Einrichtung eines Zahlungskontos".
- **ZAG § 10 Abs. 1 (Erlaubnispflicht)** — <https://www.gesetze-im-internet.de/zag_2018/__10.html>. Wer Zahlungsdienste im Inland gewerblich erbringt, „bedarf der schriftlichen oder elektronischen Erlaubnis der Bundesanstalt" (BaFin).
- **ZAG § 12 Abs. 1 Nr. 1 (Anfangskapital)** — <https://www.gesetze-im-internet.de/zag_2018/__12.html>. „ein Betrag im Gegenwert von mindestens 20 000 Euro", wenn nur das Finanztransfergeschäft erbracht wird (Zahlungsauslösedienste 50.000, übrige Zahlungsdienste 125.000, E-Geld 350.000).
- **ZAG § 63 Abs. 1 Nr. 4 (Strafvorschrift)** — <https://www.gesetze-im-internet.de/zag_2018/__63.html>. „Freiheitsstrafe bis zu fünf Jahren oder … Geldstrafe" für das Erbringen von Zahlungsdiensten ohne Erlaubnis.
- **GewO § 14 Abs. 1 (Anzeige des Gewerbebeginns)** — <https://www.gesetze-im-internet.de/gewo/__14.html>. Wer ein stehendes Gewerbe selbständig beginnt, muss dies „der zuständigen Behörde gleichzeitig anzeigen".
- **GewO § 34a Abs. 1 (Bewachungsgewerbe)** — <https://www.gesetze-im-internet.de/gewo/__34a.html>. Wer gewerbsmäßig fremdes Leben oder Eigentum bewacht, „bedarf der Erlaubnis der zuständigen Behörde" (Beispiel für ein erlaubnispflichtiges Gewerbe).
- **DDG § 5 Abs. 1 (Impressumspflicht)** — <https://www.gesetze-im-internet.de/ddg/__5.html>. Geschäftsmäßige digitale Dienste müssen Name, Anschrift und Kontakt „leicht erkennbar und unmittelbar erreichbar … ständig verfügbar" halten.
- **DDG § 7 Abs. 1 (beschränkte Verantwortlichkeit)** — <https://www.gesetze-im-internet.de/ddg/__7.html>. Die Artikel 4 bis 8 der VO (EU) 2022/2065 gelten für alle Diensteanbieter (also auch Art. 8 „keine allgemeine Überwachungspflicht").
- **DDG § 8 Abs. 1 (Anspruch auf Sperrung)** — <https://www.gesetze-im-internet.de/ddg/__8.html>. Der Rechtsinhaber kann die Sperrung verlangen, „um die Wiederholung der Rechtsverletzung zu verhindern", wenn keine andere Abhilfemöglichkeit besteht.
- **VO (EU) 2022/2065 (Gesetz über digitale Dienste), Art. 6, 8, 16, 17, 30** — <https://www.ma-hsh.de/service/rechtsgrundlagen.html?file=files/service/rechtsgrundlagen/europarecht/Gesetz%20%C3%BCber%20digitale%20Dienste.pdf&cid=16>. Art. 6 (Haftung für Hosting), Art. 8 („Keine allgemeine Verpflichtung zur Überwachung oder aktiven Nachforschung"), Art. 16 (Melde- und Abhilfeverfahren; Abs. 3: die Meldung bewirkt Kenntnis), Art. 17 (Begründung von Beschränkungen), Art. 30 (Nachverfolgbarkeit von Unternehmern: Abs. 1 Angaben, Abs. 2 Prüfung, Abs. 5 Speicherung sechs Monate). Offizielle deutsche PDF-Fassung einer Landesmedienanstalt; `eur-lex.europa.eu` war über das Abrufwerkzeug nicht lesbar (siehe Offene Punkte).
- **PStTG § 13 Abs. 1 (Meldepflicht)** — <https://www.gesetze-im-internet.de/psttg/__13.html>. Die Meldung ist „spätestens zum 31. Januar des Jahres, das auf das Kalenderjahr folgt" abzugeben.
- **TDDDG § 19 Abs. 2 (anonyme Nutzung)** — <https://www.gesetze-im-internet.de/ttdsg/__19.html>. „Anbieter von digitalen Diensten haben die Nutzung von digitalen Diensten und ihre Bezahlung anonym oder unter Pseudonym zu ermöglichen, soweit dies technisch möglich und zumutbar ist. Der Nutzer von digitalen Diensten ist über diese Möglichkeit zu informieren."
- **JMStV §§ 4, 5, 5a** — <https://www.nlm.de/fileadmin/dateien/pdf/JMStV.pdf>. § 4 (Unzulässige Angebote), § 5 Abs. 1 (Entwicklungsbeeinträchtigende Angebote; Altersstufen „ohne Altersbeschränkung, ab 6 Jahren, ab 12 Jahren, ab 16 Jahren, ab 18 Jahren"; Faktoren u. a. Kauffunktionen, glücksspielähnliche Mechanismen, Kaufappelle), § 5a Abs. 2 (Video-Sharing-Dienste: „Systeme zur Altersverifikation"). Offizielle PDF-Fassung der Niedersächsischen Landesmedienanstalt, in Kraft seit 1. Dezember 2025.
- **BGB §§ 106, 107, 108 und § 110** — <https://www.gesetze-im-internet.de/bgb/__110.html>. § 106 (beschränkte Geschäftsfähigkeit Minderjähriger ab sieben Jahren), §§ 107/108 (Einwilligung, schwebende Unwirksamkeit), § 110 (Taschengeldparagraph: wirksam, wenn die Leistung aus überlassenen Mitteln bewirkt wird).
- **VO (EU) 2016/679 (DSGVO), Art. 44, 45, 46** — <https://www.datenschutz-hamburg.de/fileadmin/user_upload/HmbBfDI/Datenschutz/Gesetzte_Datenschutz/DSGVO_konsolidierte_Fassung.pdf>. Art. 44 (Allgemeine Grundsätze für Übermittlungen), Art. 45 (Angemessenheitsbeschluss), Art. 46 (geeignete Garantien). Offizielle konsolidierte deutsche Fassung des Hamburgischen Beauftragten für Datenschutz (HmbBfDI).

### Nicht geändert

- Kein Eintrag bleibt textlich unberührt — alle neun verbleibenden Einträge waren china-gebunden und wurden umgestellt.
- **Querverweise innerhalb des Kapitels:** Es gibt keine (auch vorher keine). Die Einleitung verweist auf Abschnitt 11 und Abschnitt 12 (fremde Abschnitte, unberührt) und auf den Langtext `docs/welche-lizenzen-fuer-eine-plattform.md`.
- **Kapitel-Lizenzblock (Zeile 106 ff.):** unverändert.

### Außerhalb des Auftrags — festgehalten, nicht angefasst

- **`docs/welche-lizenzen-fuer-eine-plattform.md`** (Langtext) enthält weiterhin die chinesischen Verfahren (ICP-Registrierung, „Abschnitt 26, Nr. 5 bis 10", DI- und Mengenschwellen der Datenausfuhr). **Nicht** geändert; läuft beim Wellenabschluss mit.
- **README.md** (Katalogzeile Abschnitt 26) und **CLAUDE.md** (Verzeichnisbeschreibung) führen die gestrichenen Themen noch. **Nicht** geändert.
- **Verweise aus anderen Abschnitten** auf „Abschnitt 26, Nr. 5 bis 10" (in `docs/verweis-abgleich.md`, Abschnitt 4 und Langtext) sind Bereichsverweise; die Zielnummern haben sich auf 3–8 verschoben. Das zieht der Wellen-Orchestrator am Wellenende nach.

### Maschinelle Gates

- `grep -c 元 book/26-website-oder-plattform.md` = **0** (vorher 37).
- CJK-Suche (`grep -cP '[\x{3400}-\x{9FFF}\x{3000}-\x{303F}\x{FF00}-\x{FFEF}]'`) = **0** (vorher 337 Zeichen).
- Einträge `grep -c '^### '` = **9** (vorher 11, Nr. 3 und 4 gestrichen), lückenlos nummeriert 1–9.
- `grep -c '^<!-- Kostenlabel'` = **9 · `grep -c 'Angepasst:'` = 9**.
- `node tools/check-plain.mjs --stat` = beanstandet **0** in Abschnitt 26 (die einzige Buchbeanstandung ist Abschnitt 23, Nr. 1, 95 Wörter, außerhalb dieses Auftrags).
- `node tools/check-refs.mjs` wurde **nicht** ausgeführt (Auftrag §8; Parallelbetrieb).
- `node tools/sync-stats.mjs` wurde **nicht** ausgeführt — die Statistik wird am Wellenende zentral geschrieben.

## Offene Punkte

- **Normberichtigung Nr. 7:** Der Auftrag nennt „§ 2 Abs. 2 DDG". Das ist keine Anonymitätsnorm; § 2 DDG regelt „Europäisches Sitzland". Die richtige Trägernorm ist **§ 19 Abs. 2 TDDDG** (früher TTDSG), dort steht der Anonymitätsgrundsatz wörtlich. Der Eintrag belegt die korrekte Norm; die Abweichung ist hiermit vermerkt.
- **Abrufwerkzeug:** `eur-lex.europa.eu` liefert über den Abrufweg nur eine leere Seite. Für DSA und DSGVO wurden deshalb **amtliche deutsche PDF-Fassungen** offener Stellen verwendet (Medienanstalt Hamburg/Schleswig-Holstein für die DSA, Hamburgischer Datenschutzbeauftragter für die DSGVO). Beide sind offen zugänglich und tragen den behaupteten Text. Wenn der Wellen-Orchestrator `eur-lex.europa.eu` als kanonische Fundstelle verlangt, sind die Links austauschbar.
- **Nr. 9 (Serverwahl):** Evidenzstufe C, Erfahrungseinschätzung. Die Euro-Preise bleiben Größenordnungen ohne amtliche Quelle; der Marker nennt das. Ein Nachweis über Anbietertarife als offene Primärquelle wurde nicht gefunden und wird nicht aus dem Gedächtnis erfunden.
