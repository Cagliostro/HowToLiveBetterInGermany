# Abschnitt 32 Studium im Ausland: Status, Arbeit, Versicherung und Anerkennung nach der Rückkehr · Prüfprotokoll (2026-09-18)

Aufgabenherkunft: Repository-Issue #8, ein Leser fragt „gibt es Empfehlungen für Studierende in den üblichen Studienländern, zum Beispiel USA, Kanada, Großbritannien, Australien, welche Rechte hat man als Studierender und wie wahrt man sie".

Bisherige Abdeckung: Abschnitt 21 behandelt das Ausland und die Sicherheit im Ausland (Sicherheitshinweise des Außenministeriums, 12308, die Grenzen des konsularischen Schutzes, die Auslandsversicherung für medizinische Behandlung und Rücktransport, die Fallen bei der Anwerbung mit hohem Gehalt im Ausland) und deckt den Status und das Studium von Auslandsstudierenden nicht ab. Abschnitt 23 behandelt die Rendite von Bildungsabschlüssen und deckt die Anerkennung eines ausländischen Abschlusses nicht ab. Deshalb wurde ein neuer Abschnitt eröffnet, der sich mit den beiden Abschnitten nicht wiederholt; im Haupttext wird jeweils auf den anderen verwiesen.

Einordnung: Neu angelegt wurde `book/32-studium-im-ausland.md` mit 10 Nummern. Die abgedeckten Länder sind nach der Leserfrage auf USA, Kanada, Großbritannien und Australien begrenzt, für jedes Land werden Zahlen genannt. **Alle Zahlen zur ausländischen Politik in diesem Abschnitt sind mit Stand September 2026 angegeben; der Haupttext und der Kopf des Abschnitts halten ausdrücklich fest, dass die Leser die Quellenlinks selbst nachprüfen sollen, der Abschnitt wird nicht dauerhaft gepflegt.**

Werkzeuge zur Quellenbeschaffung: curl auf diesem Rechner stürzte mit einem Speicherzugriffsfehler ab, `Invoke-WebRequest` lief bei canada.ca und cscse.edu.cn in einen Timeout oder brach die Verbindung ab, deshalb wurde auf headless Chrome mit `--dump-dom` umgestellt, um das gerenderte DOM zu holen (jsj.moe.gov.cn und immi.homeaffairs.gov.au werden im Frontend gerendert, hier muss dieser Weg gegangen werden). Alle 17 externen Links dieses Abschnitts wurden am 2026-09-18 einzeln auf Erreichbarkeit geprüft, außer canada.ca gaben alle 200 zurück; canada.ca ließ sich mit PowerShell auf diesem Rechner nicht abrufen, mit headless Chrome aber vollständig, der Inhalt wurde Wort für Wort abgeglichen.

## Nr. 1 (Liste der anerkannten Hochschulen)

| URL | Prüfung | Grundlage |
|---|---|---|
| <http://yxcx.cscse.edu.cn/> (Eingang „Abfrage anerkannter Hochschulen" des Studienberatungszentrums, über einen Anker auf der Startseite von cscse.edu.cn erreicht) | ja | Die Seite ist eine Abfrageeingabe, die nach Land und Hochschulnamen sucht |
| <https://jsj.moe.gov.cn/> (Startseite des Informationsnetzes des Bildungsministeriums für die Aufsicht über Bildung mit Auslandsbezug) | ja | Die Rubriken enthalten Dokumente und Politik, Warninformationen, gemeinsame Bildungsprogramme |
| <http://rzzccx.crs.jsj.edu.cn/> (Abfrage der Registrierungsdaten zur Anerkennung von Zeugnissen gemeinsamer chinesisch-ausländischer Bildungsprogramme) | ja | „Studierende, die ab 2008 eingeschrieben sind, können mit ihrem Namen und ihrer Personalausweisnummer die Registrierungsnummer der Anerkennung des ausländischen Abschlusszeugnisses abfragen" |

Einstufung A: Abfrageeingang und institutionelle Regelung lassen sich auf den amtlichen Seiten Wort für Wort abgleichen. Nutzenhöhe „groß" — Bezugsgröße Geld, in der Stufe Zehntausend 元 eingestuft, Studiengebühren und ein bis zwei Jahre Zeit liegen in der Größenordnung weit über Zehntausend. „Die Liste ändert sich, jedes Jahr nachprüfen" in der Anmerkung ist ein Handlungshinweis und nicht der Originalwortlaut eines Dokuments.

## Nr. 2 (Feste Einreisefrist der USA und das 30-Tage-Ausreisefenster)

| URL | Prüfung | Kernpunkte des Originaltexts |
|---|---|---|
| <https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-214/section-214.2> (geltender Text der eCFR, 8 CFR 214.2(f)) | ja | Für F-1 nach Abschluss des Studiums und genehmigtem Praktikum gilt ab dem Projektende, der Höchsteinreisefrist von vier Jahren oder dem Ende der OPT/STEM-OPT-Genehmigung „an additional 30-day period" zur Vorbereitung der Ausreise oder zum Erwerb eines anderen legalen Status; wer Studium oder Ausbildung vorzeitig beendet, muss binnen 30 Tagen ab dem Enddatum ausreisen oder einen anderen legalen Status erwerben |
| <https://www.federalregister.gov/documents/2026/07/17/2026-14439/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant> (endgültige Regel im Bundesregister) | ja | publication_date 2026-07-17, effective_on 2026-09-15 (über die Feldabfrage der federalregister.gov API geprüft) |

**Korrektur vom 2026-09-25 (Issue #32)**: Diese Regel ist **nicht** am 2026-09-15 in Kraft getreten. Am 2026-09-14 hat der Bundesrichter Saylor am Bundesbezirksgericht für Massachusetts im Verfahren Presidents' Alliance on Higher Education and Immigration v. DHS (No. 1:26-cv-13799-FDS) nach 5 U.S.C. § 705 den Beginn der gesamten Regel aufgeschoben, mit Wirkung für das ganze Land; die Anträge auf Aufhebung (vacatur) und auf ein summarisches Urteil wurden zurückgewiesen, eine erneute Antragstellung ist erlaubt. Der Eintrag wurde daraufhin umgeschrieben zu „die neue Regel ist ausgesetzt, derzeit gilt weiter D/S mit einer Kulanzfrist von 60 Tagen".

| URL | Prüfung | Kernpunkte des Originaltexts |
|---|---|---|
| <https://oiss.yale.edu/news/important-update-court-action-on-the-ds-rule> (Yale-Büro für internationale Studierende und Wissenschaftler, 2026-09-14) | ja | „issued an order preliminarily enjoining DHS from implementing this rule", „the current D/S framework remains in place for now", „You do not currently need to apply for an Extension of Stay", „The administration may appeal" |
| <https://www.aila.org/blog/think-immigration-one-day-before-taking-effect-federal-court-postpones-the-f-j-and-i-fixed-admission-period-rule> (Amerikanischer Anwaltsverband für Einwanderungsrecht) | ja | „The relief is nationwide, and it reaches the whole rule", „The rule is postponed, not vacated", „the 60-day grace period stands, and there is no new I-539 requirement", „denying the vacatur and summary judgment requests without prejudice to renewal", „the government may seek review in the First Circuit" |
| <https://www.courtlistener.com/docket/74661796/presidents-alliance-on-higher-education-and-immigration-v-united-states/> (Gerichtsakte) | ja | Nr. 50 (2026-09-14) MEMORANDUM AND ORDER: „GRANTED to the extent that it seeks to postpone the effective date of the Final Rule pursuant to … 5 U.S.C. § 705. To the extent that plaintiffs seek vacatur of the Final Rule, summary judgment, or other relief, the motion is DENIED without prejudice to its renewal"; Nr. 51 (2026-09-14) „PRELIMINARY INJUNCTION ORDER POSTPONING EFFECTIVE DATE OF FINAL RULE"; am selben Tag die Mitteilung „Status Conference set for 10/2/2026 12:00 PM". Direktverbindung 403, über einen lokalen Proxy abrufbar |

Die ursprüngliche Einstufungserklärung (unten) bleibt als historische Aufzeichnung stehen; der Satz darin „seit dem 2026-09-15 durch die Regel fester Fristen ersetzt" gilt nicht mehr.

Einstufung A: Die Vorschrift und das Inkrafttretensdatum lassen sich Wort für Wort abgleichen. **Dies ist die wichtigste Aktualisierung dieses Abschnitts**: Der geltende Text der eCFR nennt 30 Tage; die im Netz verbreitete „Kulanzfrist von 60 Tagen" und „duration of status bis zum Abschluss des Studiums" sind altes Recht und seit dem 2026-09-15 durch die Regel fester Fristen ersetzt worden, nur drei Tage vor dieser Niederschrift. Nutzenhöhe „groß" — Bezugsgröße Freiheit, die Folge ist illegaler Aufenthalt und Abschiebung, analog zur Stufe „Strafrechtliche Verantwortung vermeiden groß" eingestuft. Das Verlängerungsverfahren steht in (f)(7); der Haupttext verweist nur darauf und führt es nicht aus.

## Nr. 3 (Arbeitsstunden in vier Ländern)

| URL | Prüfung | Kernpunkte des Originaltexts |
|---|---|---|
| <https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-214/section-214.2> (8 CFR 214.2(f)(9)) | ja | Beschäftigung auf dem Campus „must not exceed 20 hours a week while school is in session"; genehmigte Beschäftigung außerhalb des Campus „limited to no more than 20 hours a week when school is in session", in den Ferien Vollzeit möglich |
| <https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student> (Anhang Student der Einwanderungsregeln, Tabelle ST26.1) | ja | Ab Studienabschluss und höher, wenn der Sponsor konform ist: 20 Stunden pro Woche im Semester; unterhalb eines Abschlusses: 10 Stunden; im Übrigen, einschließlich aller Teilzeitstudiengänge: keine Beschäftigung erlaubt. ST26.5 verbietet außerdem Selbstständigkeit, Berufssportler und Trainer sowie Auftritte |
| <https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html> (IRCC) | ja | „You can work up to 24 hours per week"; wer eine alte Genehmigung mit 20 Stunden hat, darf unter den Voraussetzungen trotzdem 24 Stunden arbeiten; Grundlage ist IRPR Art. 186(v) |
| <https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500> (Innenministerium, Student visa 500) | ja | „work up to 48 hours a fortnight when your course of study or training is in session", für forschungsorientierte Masterstudierende und Promovierende sowie ihre Angehörigen gibt es keine Obergrenze der Arbeitsstunden |

Einstufung A: Alle vier Länder stützen sich auf aktuelle Seiten der Einwanderungsbehörden oder auf geschriebene Regeln, die Zahlen sind Wort für Wort prüfbar. Nutzenhöhe „groß" — Bezugsgröße Freiheit, eine Überschreitung der Stunden ist ein Verstoß gegen die Visabedingungen und kann zum Widerruf des Visums und zur Abschiebung führen.

## Nr. 4 (Die Vollzeit-Einschreibung ist die Grundlage der Arbeitsberechtigung)

| URL | Prüfung | Kernpunkte des Originaltexts |
|---|---|---|
| <https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html> | ja | Während eines genehmigten Studienurlaubs oder bei einem Hochschulwechsel ohne Studium darf man nicht außerhalb des Campus arbeiten; erst nach Wiederaufnahme des Studiums darf die Arbeit wieder aufgenommen werden |
| <https://studyinthestates.dhs.gov/students/work/working-in-the-united-states> (DHS Study in the States) | ja | Beschäftigung auf dem Campus ist auf F-1-Studierende mit dem Status Active in SEVIS beschränkt; Beschäftigung außerhalb des Campus muss zuerst genehmigt werden, während der Bearbeitung des I-765 darf die Arbeit nicht begonnen werden |
| <https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student> (ST26.1) | ja | Die Arbeitserlaubnis wird nach Kursart erteilt, bei Teilzeitstudiengängen ist keine Beschäftigung erlaubt |

Einstufung A. Die kanadische Seite formuliert es am klarsten, für die USA und Großbritannien stützen die jeweiligen Regeln dies. Nutzenhöhe „groß", Begründung wie bei Nr. 3.

## Nr. 5 (Adressänderung in den USA binnen 10 Tagen melden)

| URL | Prüfung | Kernpunkte des Originaltexts |
|---|---|---|
| <https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-265/section-265.1> | ja | Wer der Meldepflicht unterliegt, muss „within 10 days of such change" nach den Vorgaben von USCIS die Adressänderung und die neue Adresse melden |
| <https://www.uscis.gov/ar-11> | ja | Seite des Formulars AR-11; sie erklärt, dass eine Adressänderung möglichst schnell mitgeteilt werden muss, damit Schriftstücke nicht an die falsche Adresse gehen |

Einstufung A: Die Frist von 10 Tagen steht ausdrücklich in der Vorschrift. Nutzenhöhe „mittel" — Bezugsgröße Freiheit, nach „Verwaltungsstrafe vermeiden" eingestuft, und die tatsächliche Folge eines falsch zugestellten Schriftstücks ist meist ein prozessualer Nachteil, noch keine strafrechtliche Verantwortung.

## Nr. 6 (Studienwarnungen des Bildungsministeriums)

| URL | Prüfung | Kernpunkte des Originaltexts |
|---|---|---|
| <https://jsj.moe.gov.cn/n2/2/2/2001.shtml> | ja | Nr. 1 von 2025 (2025-04-09), die Hochschulgesetze betreffender US-Bundesstaaten enthalten negative Klauseln mit Bezug auf China |
| <https://jsj.moe.gov.cn/n2/2/2/2030.shtml> | ja | Nr. 2 (2025-07-18), unsichere Lage auf den Philippinen, häufige Straftaten gegen chinesische Staatsbürger |
| <https://jsj.moe.gov.cn/n2/2/2/2035.shtml> | ja | Nr. 3 (2025-08-30), erneuter Hinweis auf die Philippinen |
| <https://jsj.moe.gov.cn/n2/2/2/2060.shtml> | ja | Nr. 4 (2025-11-16), die Sicherheitslage und die Studienbedingungen in Japan sind ungünstig, eine sorgfältige Planung eines Studiums in Japan wird empfohlen |

Einstufung A: Nummer, Datum und Zielland der vier Warnungen wurden einzeln geprüft. Die Quellenzeile des Haupttexts nennt nur Nr. 4 und Nr. 1 plus die Startseite der Rubrik, damit die Quellenzeile nicht zu lang wird. Nutzenhöhe „mittel" — eine Warnung ist ein Risikohinweis und kein Verbot, sie entspricht nicht unmittelbar einer messbaren Folge. **Die Warnliste ändert sich mit der Lage; dieser Abschnitt wird nach der gleichen Übung wie Abschnitt 21 der CLAUDE.md nicht dauerhaft gepflegt.**

## Nr. 7 (OSHC in Australien)

| URL | Prüfung | Kernpunkte des Originaltexts |
|---|---|---|
| <https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500> | ja | Man muss eine OSHC besitzen und durchgehend aufrechterhalten, außer in Ausnahmefällen; zwischen dieser Versicherung und der des vorherigen Visums darf keine Lücke entstehen; wer bei der Einreise nicht nachweisen kann, versichert zu sein, kann die Einreise verweigert bekommen; wer vor Kursbeginn einreist, hat als Versicherungsbeginn den Tag der Ankunft in Australien |

Einstufung A. Nutzenhöhe „mittel" — Bezugsgröße Geld, die Prämie liegt in der Größenordnung von einigen Tausend bis Zehntausend 元, an der Grenze zwischen „einige Hundert bis einige Tausend" und der Stufe Zehntausend, daher mittel. Kostenlabel Geld=viel (eine einmalige Ausgabe über die gesamte Visumsdauer).

## Nr. 8 (Visagebühr und Gesundheitszuschlag in Großbritannien)

| URL | Prüfung | Kernpunkte des Originaltexts |
|---|---|---|
| <https://www.gov.uk/student-visa> | ja | Antrag aus dem Ausland und Verlängerung oder Wechsel im Inland kosten beide £558; ab 18 Jahren und bei einem Studium ab Abschluss ist der Aufenthalt meist höchstens 5 Jahre, unterhalb eines Abschlusses 2 Jahre |
| <https://www.gov.uk/healthcare-immigration-application> | ja | Studierende und ihre Angehörigen zahlen £776 pro Jahr (bei einem Visum für 2 Jahre also £1,552), andere Antragsteller £1,035 pro Jahr; bei mehr als 6 Monaten und weniger als 1 Jahr wird ein volles Jahr berechnet |

Einstufung A: Die Beträge stammen Wort für Wort von der aktuellen Seite auf gov.uk. Nutzenhöhe „mittel" — Bezugsgröße Geld, beide Posten zusammen liegen in der Größenordnung einiger Tausend Renminbi. Der Haupttext rechnet keinen konkreten Renminbi-Betrag um, er nennt nur die Größenordnung „nach aktuellem Wechselkurs etwas über zehntausend 元", damit die Zahl bei Wechselkursschwankungen nicht ungültig wird.

## Nr. 9 (Bearbeitungszeit der Anerkennung durch das Studienberatungszentrum)

| URL | Prüfung | Kernpunkte des Originaltexts |
|---|---|---|
| <http://zwfw.cscse.edu.cn/> (Online-Servicehalle des Studienberatungszentrums) | ja | Der Ablauf der Anerkennung von Abschluss und Grad ist: Registrierung mit Klarnamen-Verifizierung, Einreichen des Antrags und der Unterlagen, Online-Zahlung, Bewertung und Prüfung; „Bearbeitungszeit der Anerkennung 10-20 Arbeitstage"; zu den Antragsunterlagen gehören das Abschlusszeugnis, der Pass oder Reiseausweis, die Aufenthaltskarte oder das Visum bzw. der Visumvermerk, ein Passfoto und die Einwilligungserklärung; die Ein- und Ausreiseprotokolle ruft das System selbst ab |

Einstufung A: Bearbeitungszeit und Materialliste stehen ausdrücklich auf der Seite. Nutzenhöhe „mittel", Bezugsgröße Zeit — eingespart wird das Risiko, einen Stichtag zu verpassen, nicht Zeit pro Tag; nach „einmalig" müsste man klein einstufen, aber die Folge eines verpassten Herbst-Rekrutierungsverfahrens oder einer Anmeldung zur Beamtenprüfung wird nach dem Zeitfenster gerechnet, daher mittel; dies ist eine Beurteilung und kein mechanisch angelegter Schwellenwert, wird nach Vorgabe der CLAUDE.md hier festgehalten.

## Nr. 10 (Liste der Hochschulen mit verstärkter Prüfung der Anerkennung)

| URL | Prüfung | Kernpunkte des Originaltexts |
|---|---|---|
| <https://www.cscse.edu.cn/cscse/sy/tzgg/2025102809225023345/index.html> | ja | „Bekanntmachung über die verstärkte Prüfung der Anerkennung von Abschluss und Grad einiger ausländischer Hochschulen (Neun) [关于对部分国外院校学历学位认证加强认证审查的公告（九）]", veröffentlicht am 2025-10-28 |
| <https://www.cscse.edu.cn/> | ja | In der Rubrik für Bekanntmachungen stehen zugleich „Wichtiger Hinweis, sich vor Betrug unter dem Vorwand der Anerkennung ausländischer Abschlüsse und Grade zu hüten", „Bekanntmachung über die Behandlung ungültiger Anerkennungsurkunden für ausländische Abschlüsse und Grade" und „Bekanntmachung über die Aussetzung der Bearbeitung von Anträgen auf Anerkennung des Abschlusses und Grades der Universität Phitsanulok in Thailand" |

Einstufung A: Titel, Nummer und Datum der Bekanntmachung lassen sich Wort für Wort abgleichen. Nutzenhöhe „mittel" — Bezugsgröße Geld, die Folge ist eine Behinderung oder Verzögerung der Anerkennung, nicht unbedingt ein vollständiger Verlust der Studiengebühren, deshalb nicht groß. Der Haupttext nennt keine konkrete Hochschule namentlich (außer der einen, die im zitierten Titel der Bekanntmachung ohnehin öffentlich ist), damit er nach einer Änderung der Liste nicht ungenau wird.

## Was dieser Abschnitt nicht behandelt

- Die Steuererklärungspflichten der einzelnen Länder (zum Beispiel müssen F-1 in den USA auch ohne Einkommen ein Formular einreichen) — in dieser Runde wurde keine amtliche Seite gefunden, die sich Wort für Wort abgleichen lässt, deshalb nicht aufgenommen.
- Die Meldefristen für eine Adressänderung sind in Kanada, Großbritannien und Australien unterschiedlich; es wurde nicht für jedes Land der Originaltext beschafft. Nr. 5 behandelt nur die USA und weist in der Anmerkung darauf hin, dass für die übrigen drei Länder die jeweiligen nationalen Vorschriften gelten.
- Die Verfahren zur Abhilfe nach der Ablehnung eines Studierendenvisums oder dem Verlust des Status (etwa die reinstatement in den USA) wurden nicht behandelt; das sind besondere Verfahren und gehen über die Ausrichtung dieses Abschnitts „wer es nicht weiß, verliert" hinaus.
- Andere Studienzielländer wie Japan, Neuseeland und Singapur liegen nicht im Rahmen der Leserfrage und wurden nicht aufgenommen.
