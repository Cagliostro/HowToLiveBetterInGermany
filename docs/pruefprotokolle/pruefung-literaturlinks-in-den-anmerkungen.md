# Prüfung: Literaturlinks in den Anmerkungen · Protokoll (2026-09-21)

Herkunft der Aufgabe: Der Nutzer las in der Online-Suche die Anmerkung zu Abschnitt 2, Nr. 1 (Raucherentwöhnung), in der eine ganze Kette englischer Titelaufnahmen eingebettet war, und sagte: „Warum steht das hier noch, die Leser sind doch alle Chinesen, und du legst so eine lange Kette von denen da hin."

Am selben Tag waren bereits zwei Stellen behandelt worden (Abschnitt 2, Nr. 41 Nachtschicht und Abschnitt 6, Nr. 26 Frühstück), damals wurden nur die beiden Einträge mit den meisten Links korrigiert, eine Prüfung des ganzen Buchs fand nicht statt. Diese Runde holt das nach.

## Maßstab

- **Literaturlinks kommen durchweg in die Spalte „Quellen", nicht in die Anmerkung.** In der Anmerkung bleibt höchstens ein Link, und nur ein relativer Link auf einen Langtext unter docs/.
- Grundlage: Die Verständlichkeitsregel in CLAUDE.md schreibt ausdrücklich „**außer der Quellen-Spalte**, Literaturangaben und Paragrafennummern bleiben so stehen, wie sie sind, nur so lassen sie sich abgleichen" – das heißt, der Ort, an dem englische Titelaufnahmen hingehören, ist die Quellen-Spalte. Die Anmerkung ist der chinesische Haupttext, den chinesische Leser lesen; eine Kette englischer Titel und DOIs hineinzustopfen ist weder verständlich noch gehört es dorthin.
- Suchbefehl: `grep -c http` über alle `- Anmerkung:`-Zeilen des ganzen Buchs.

## Vorher und nachher

| | Vorher | Nachher |
|---|---|---|
| Einträge mit Links in der Anmerkung | 19 (davon 11 mit einer ganzen Kette englischer Titelaufnahmen, die in den chinesischen Text eingebettet war) | **0** |
| Höchste Linkzahl in einer einzelnen Anmerkung | 3 | 0 |
| Literaturlinks im ganzen Buch | 1234 | **1234 (unverändert)** |

Dass die Gesamtzahl der Links unverändert bleibt, ist die zentrale Invariante dieser Runde: **Die Titelaufnahmen wurden aus der Anmerkung in die Quellen-Spalte verschoben, nicht gelöscht**. Beim Verschieben in die Quellen-Spalte bekam jede einen kleinen chinesischen Anhang, der sagt, welche Aussage sie stützt („(Gegenseite)", „(der hochreine verschreibungspflichtige Fischöl-Test aus der Anmerkung)" und dergleichen), damit die Quellen-Spalte nicht zu einer Kette von Titelaufnahmen wird, deren Zweck man nicht erkennt.

## Liste Eintrag für Eintrag

Abschnitt 1: Nr. 20 (Grippeimpfstoff Cochrane), Nr. 28 (PrEP, Fonner 2016), Nr. 29 (diagnostisches Fenster, Seite des Seuchenkontrollzentrums Guangdong).
Abschnitt 2: Nr. 1 (Passivrauchen Oberg 2011), Nr. 9 (Gegenseite beim natriumarmen Salz PURE), Nr. 19 (Gegenseite bei verarbeitetem Fleisch NutriRECS-Leitlinie), Nr. 20 (Gegenseite beim Alkohol Di Castelnuovo 2006), Nr. 34 (Gegenseite beim BMI Flegal 2013), Nr. 41 (zwei Arbeiten zu Krebs bei Nachtschicht + Czeisler zum Licht, in der vorigen Runde bereits behandelt).
Abschnitt 3: Nr. 9 (zwei Gegenseiten Grubbs 2018, Prause & Pfaus 2015).
Abschnitt 5: Nr. 17 (Gegenseite bei Indexfonds Harvey & Liu 2022).
Abschnitt 6: Nr. 1 (Multivitamine Gaziano 2012), Nr. 2 (Fischöl Bhatt 2019 REDUCE-IT), Nr. 26 (drei Arbeiten zum Frühstück, in der vorigen Runde bereits behandelt).
Abschnitt 10: Nr. 3 (Perilloux & Kurzban 2015), Nr. 6 (Dargie 2015).
Abschnitt 20: Nr. 12 (allgemeine Säuglingsstudie EAT, Perkin 2016).
Abschnitt 29: Nr. 4 (Kristensen 2012), Nr. 9 (Stroebe 2007).

## Ergänzte Titel

Bei 5 Stellen stand in der Anmerkung zuvor eine Kurzform (nur Autor, Jahr, Zeitschrift); beim Verschieben in die Quellen-Spalte musste der Titel ergänzt werden. **Es wurde nichts aus dem Gedächtnis geschrieben**, jede Stelle wurde über Crossref per DOI abgerufen:

| DOI | Abgerufener Titel |
|---|---|
| 10.1097/QAD.0000000000001145 | Effectiveness and safety of oral HIV preexposure prophylaxis for all populations (AIDS, 2016) |
| 10.1001/jama.2012.14641 | Multivitamins in the Prevention of Cancer in Men (JAMA, 2012) |
| 10.1056/NEJMoa1812792 | Cardiovascular Risk Reduction with Icosapent Ethyl for Hypertriglyceridemia (NEJM, 2019) |
| 10.1007/s10508-018-1248-x | Pornography Problems Due to Moral Incongruence: An Integrative Model with a Systematic Review and Meta-Analysis (Arch Sex Behav, **Crossref gibt das Jahr 2018 an, nicht 2019 wie im Originaltext; es wurde nach 2018 geschrieben**) |
| 10.1002/sm2.58 | Viewing Sexual Stimuli Associated with Greater Sexual Responsiveness, Not Erectile Dysfunction (Sexual Medicine, 2015) |

## Prüfung

- Anzahl der `- Anmerkung:`-Zeilen des ganzen Buchs mit http: **0**.
- Nach dem Löschen der Zitate wurde die Zeichensetzung durchgesehen, es blieben keine doppelten Punkte, leeren Klammern oder einzelnen „。" übrig.
- `node tools/check-refs.mjs --check`: Alle 454 Verweise zeigen korrekt und tragen einen Anker, die Zahl ist unverändert.
- `sync-stats.ps1`: Einträge 600, A 404, Links 1234, keine der acht Statistikstellen wurde verschoben.
