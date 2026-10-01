# Abschnitt 4: Quellenprüfprotokoll

## Sichtungspass (2026-10-01, vor der Überarbeitung)

Grundlage: `review/kapitel/04.md` (Stufentabelle D/E/Ü/X mit Bezug zum Text) und `book/04-keine-zeit-verschwenden.md` (18 Einträge, gelesen am 2026-10-01). Maßstab sind die am 2026-09-30 beschlossenen Regeln REQ-70 (nur offen zugängliche Quellen), REQ-71 (Statistik je Kapitel) und REQ-72 (Sichtungspass vor dem Schreiben).

**Ergebnis: Stufe X = 0.** Es gibt in diesem Kapitel keinen Eintrag, dessen Kern china-exklusiv wäre. Die Empfehlungen sind Verhaltensregeln (Vorsätze, versunkene Kosten, Aufschieben, Besprechungen, Gewohnheiten), ihre tragende Literatur ist international (Gollwitzer/Sheeran, Buehler, Steel, Lally, Rozental, Halpern). China-gebunden sind nur die **Zahlenfundamente** von fünf Einträgen (Nr. 13, 14, 15, 16, 18) — chinesische Zeitverwendungserhebung, CNNIC, eine `元`-Preisangabe und die Hotline 12356.

| Gruppe | Einträge | Anzahl |
|---|---|---|
| ① übertragbar, unverändert | Nr. 1–12, 17 | 13 |
| ② Übertragung offen — deutsches Gegenstück wird belegt | Nr. 13, 14, 15, 16, 18 | 5 |
| ③ Kern china-exklusiv → Entscheidung des Auftraggebers | — | **0** |

Keine Folgeänderungen: keiner der fünf Fälle steht in einem Titel, und kein Nachbartext verweist auf einen der fünf Einträge über ein Wort, das sich mitändert.

**Gruppe ② im Einzelnen.**
- **Nr. 13** (`元`-Preis, „auf Chinesisch gibt es dieselbe Zusammenstellung nicht fertig", Hotline 12356): Der Kern (schwedische randomisierte Studie Rozental 2015) ist universell. Zu ersetzen: die Preisangabe nach deutscher Preislage, die China-Begründung der Nutzenstufe (für einen deutschen Leser sinnlos) und die Hotline (Telefonseelsorge, wie Kapitel 03 Nr. 19).
- **Nr. 14** („Chinesen verbringen täglich 1 h 17 min mit Hausarbeit", 国家统计局 2024): Rechenregel und der zweite Beleg (Whillans 2017) bleiben; die chinesische Zeitverwendungszahl wird durch die deutsche Zeitverwendungserhebung ersetzt.
- **Nr. 15** (Onlinezeit 5 h 37 min und 2 h 42 min 2018, 国家统计局 + CNNIC 30,6 h/Woche, 1,068 Mrd. Kurzvideo-Nutzer): Die **CNNIC-Zahlen sind laut diesem Protokoll „nicht bestätigt"** (PDF ohne Textlayer), stehen aber wieder im Text und werden entfernt; die chinesische Onlinezeit wird durch eine deutsche Angabe ersetzt.
- **Nr. 16** (chin. Fernsehzeit 1 h 40 min, 75- bis 84-Jährige 3 h 16 min, 国家统计局 2018): Der US-Wert (BLS) bleibt; die chinesischen Zahlen werden durch deutsche Fernsehnutzungsdaten ersetzt.
- **Nr. 18** („Chinesische Einwohner verbringen täglich 50 Minuten mit Verkehr", 国家统计局 2024): Die Empfehlung hat bereits deutsche Daten im Eintrag (Stutzer & Frey 2008, SOEP); die chinesische Verkehrsstatistik wird entfernt oder durch Destatis-Zahlen ersetzt.

**Kapitelweit.**
- **Währung (REQ-68):** `元` steht in genau **einer** Zeile (Nr. 13, Kosten). Marker nach REQ-68/REQ-67, der Betrag nach deutscher Preislage.
- **Nationalstatistik gegen Studienkohorte:** Ersetzt werden die **Nationalstatistiken** über die chinesische Bevölkerung (国家统计局, CNNIC) — für einen deutschen Leser keine Aussage über ihn selbst. Stehen bleiben **Studien mit chinesischer Stichprobe** als Beleg (Regel der Runde, wie Kapitel 02 Nr. 9/26/35). Im Kapitel 04 gibt es keine solche Kohorte, alle fünf Fälle sind Nationalstatistik oder Amtsangabe.
- **Projektregeln (K10) aus dem Prüfbericht:** der Meta-Satz der Abschnittseinleitung (Zeile 5, „Dieser Abschnitt rechnet nur die Zeit. Er zeigt …"), die Autorenstimme in Nr. 3, 7, 8 („konnten wir nur die Richtung prüfen"), die Marke **Word** in Nr. 17 (markenneutral fassen), der offene Punkt „noch zu prüfen" in Nr. 3 (Theater-Experiment Arkes & Blumer) und die zwei Meta-Sätze der Nr. 15 („Das ist der größte Posten in diesem Abschnitt", zweimal). Diese Punkte werden in der Überarbeitung abgearbeitet, soweit sie den Text betreffen.
- **Nummerierung:** Dieses Protokoll wurde am 2026-09-07 unter der **damaligen** Eintragsnummerierung geschrieben (die Überschriften nennen „Eintrag 9", „Eintrag 10" usw.). Die Zuordnung zu den heutigen Nummern steht in der „Überarbeitungsrunde" am Ende dieses Dokuments.

**Grenzfälle zur Streichung.** Keiner. Alle 18 Einträge tragen in Deutschland; der Prüfbericht kommt auf dieselbe Einschätzung (13× D, 1× E, 4× Ü, 0× X). Die fünf Ü-Fälle werden umgestellt, nicht gestrichen.

Prüfmethode: wie unten im Abschnitt „Prüfweg" beschrieben. Die deutschen Zeitverwendungs- und Nutzungszahlen werden über die offenen Seiten von Destatis, der ARD/ZDF-Onlinestudie und der AGF Videoforschung mit wörtlichem Belegzitat geprüft.

## Prüfweg

Prüfdatum: 2026-09-07. Verlagsseiten (Elsevier/Wiley/APA/Springer/T&F) liefern gegenüber Scraping-Werkzeugen allgemein 403 oder Captchas; die Metadaten wurden daher über die Crossref API, OpenAlex API, Semantic Scholar API und PubMed E-utilities geprüft; für die Zusammenfassungen gilt der von diesen APIs zurückgegebene Originaltext. Im Folgenden ist zu jedem Eintrag die tatsächlich geöffnete URL, ob die Titelübereinstimmung bestätigt wurde und der Originaltext der zitierten Zahl aufgeführt.

## 1, 2. Gollwitzer & Sheeran (2006)
- Geöffnet: <https://doi.org/10.1016/S0065-2601(06)38002-1> (302 → linkinghub.elsevier.com, die Textseite liefert nur Redirecting zurück); <https://api.semanticscholar.org/graph/v1/paper/DOI:10.1016/S0065-2601(06)38002-1>; <https://api.crossref.org/works/10.1016/S0065-2601(06)38002-1>
- Titelübereinstimmung: ja. Crossref: Implementation Intentions and Goal Achievement: A Meta-analysis of Effects and Processes, Advances in Experimental Social Psychology vol. 38, pp. 69–119, 2006
- Herkunft der Zahl (Originaltext der Semantic-Scholar-Zusammenfassung): "Findings from 94 independent tests showed that implementation intentions had a positive effect of medium-to-large magnitude (d = .65) on goal attainment. Implementation intentions were effective in promoting the initiation of goal striving, the shielding of ongoing goal pursuit from unwanted influences, disengagement from failing courses of action, and conservation of capability for future goal striving."

## 3. Arkes & Blumer (1985)
- Geöffnet: <https://doi.org/10.1016/0749-5978(85)90049-4> (→ linkinghub liefert nur Redirecting zurück); <https://api.openalex.org/works/doi:10.1016/0749-5978(85)90049-4> (Titel, Autoren, Zeitschrift, Jahr bestätigt, Zusammenfassung leer); <https://www.sciencedirect.com> (403/Captcha); <https://r.jina.ai/https://www.semanticscholar.org/paper/e4564b88ca2349962a707b76be4c75076ad6bd43> (Zusammenfassung); <https://pmc.ncbi.nlm.nih.gov/articles/PMC2796842/> (Zitatseiten 35, 124–140)
- Titelübereinstimmung: ja. The psychology of sunk cost, Organizational Behavior and Human Decision Processes, 1985
- Herkunft der Zahl: Originaltext der Zusammenfassung "In a field study, customers who had initially paid more for a season subscription to a theater series attended more plays during the next 6 months, presumably because of their higher sunk cost in the season tickets". Die konkreten Vorstellungszahlen der einzelnen Gruppen (etwa 4,11) **nicht bestätigt**, im Eintrag als noch zu prüfen markiert, keine Zahl geschrieben.

## 3. Roth, Robbert & Straus (2015)
- Geöffnet: <https://api.semanticscholar.org/graph/v1/paper/DOI:10.1007/s40685-014-0014-8>; <https://api.crossref.org/works/10.1007/s40685-014-0014-8>
- Titelübereinstimmung: ja. Business Research 8(1), 99–138
- Herkunft der Zahl (Originaltext der Zusammenfassung): "a meta-analytic review of 98 effect sizes of the sunk-cost effect … the sunk-cost effect is attenuated by time in utilization decisions … older adults are less likely to fall prey to the sunk-cost effect than younger adults."

## 4, 8. Buehler, Griffin & Ross (1994)
- Geöffnet: <https://doi.org/10.1037/0022-3514.67.3.366> (→ psycnet, 403); <https://api.openalex.org/works/doi:10.1037/0022-3514.67.3.366> (Titel und Zeitschrift bestätigt, mit Zusammenfassung); Volltext-PDF <https://web.mit.edu/curhan/www/docs/Articles/biases/67_J_Personality_and_Social_Psychology_366,_1994.pdf> (lokal mit pdftotext extrahiert)
- Titelübereinstimmung: ja. Erste Seite des PDF: Journal of Personality and Social Psychology 1994, Vol. 67, No. 3, 366-381
- Herkunft der Zahl (Text, Studie 1): "respondents predicted, on average, that they would finish in 33.9 days, but they actually took 55.5 days … Fewer than one third of the respondents (29.7%) finished in the time they reported as their most accurate prediction."
- Herkunft der Zahl (Text, Studie 4): "…in the recall-relevant condition (60.0%) than in the recall and control conditions (38.1% and 29.3%, respectively)"; "Note, n = 41, 42, and 40 in the control, recall, and recall-relevant conditions"; Zusammenfassung: "In Study 4, the bias was eliminated for participants instructed to connect past experiences with their predictions."
- Herkunft der Zahl (Text, Studie 2, Eintrag 8): "A subset of the subjects (n = 62) reported having external deadlines … a majority of these subjects (80.6%) finished the projects in time to meet their deadlines … only 38.7% of these subjects finished in the predicted time … their reported completion times were strongly associated with the deadlines (r = .82, p < .001)"; predictions und deadline nur r = .23.

## 4. Flyvbjerg (2006)
- Geöffnet: <https://api.semanticscholar.org/graph/v1/paper/DOI:10.1177/875697280603700302>; <https://api.crossref.org/works/10.1177/875697280603700302>
- Titelübereinstimmung: ja. Project Management Journal 37(3), 5–15
- Zitierter Inhalt (Originaltext der Zusammenfassung): "reference class forecasting, which achieves accuracy by basing forecasts on actual performance in a reference class of comparable projects". Der Eintrag zitiert seine Zahlen nicht.

## 4. Halkjelsvik & Jørgensen (2012)
- Geöffnet: <https://api.openalex.org/works/doi:10.1037/a0025996> (Zusammenfassung); <https://api.crossref.org/works/10.1037/a0025996> (Psychological Bulletin 138(2), 238–271, 2012)
- Titelübereinstimmung: ja
- Zitierter Inhalt: OpenAlex-Zusammenfassung "underestimation occurred more frequently than overestimation, though this pattern varied by study type" (vom Werkzeug wiedergegeben, nicht wörtlich). Der Eintrag verwendet nur die qualitative Schlussfolgerung.

## 5. Leach, Rogelberg, Warr & Burnfield (2009)
- Geöffnet: <https://doi.org/10.1007/s10869-009-9092-6> (→ Springer idp weitergeleitet, nicht lesbar); <https://api.crossref.org/works/10.1007/s10869-009-9092-6> (J Bus Psychol 24(1), 65–76); <https://r.jina.ai/https://link.springer.com/article/10.1007/s10869-009-9092-6> (Zusammenfassung)
- Titelübereinstimmung: ja
- Herkunft der Zahl (Zusammenfassung): "The aim of this investigation was to test hypotheses about meeting design characteristics (punctuality, chairperson, etc.) in relation to attendees' perceptions of meeting effectiveness"; zwei Studien mit Stichproben von 958 und 292; "agenda use and quality of facilities" waren signifikante Prädiktoren.

## 5. Bluedorn, Turban & Love (1999)
- Geöffnet: <https://api.openalex.org/works/doi:10.1037/0021-9010.84.2.277>
- Titelübereinstimmung: ja. Journal of Applied Psychology, 1999
- Herkunft der Zahl (Originaltext der Zusammenfassung): "56 five-member groups that conducted meetings in a standing format with 55 five-member groups that conducted meetings in a seated format. Sit-down meetings were 34% longer than stand-up meetings, but they produced no better decisions"

## 6. Rogelberg, Leach, Warr & Burnfield (2006)
- Geöffnet: <https://pubmed.ncbi.nlm.nih.gov/16435940/> (Cookie-Seite, kein Inhalt); <https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=16435940,28739889,17201571&rettype=abstract&retmode=text>
- Titelübereinstimmung: ja. "Not another meeting!" Are meeting time demands related to employee well-being? J Appl Psychol 2006; DOI 10.1037/0021-9010.91.1.83
- Herkunft der Zahl (Zusammenfassung): Studie 1 n = 676 (Besprechungen einer typischen Woche), Studie 2 n = 304 (Besprechungen des Tages), Beschäftigte arbeiten über 35 Stunden pro Woche; "the relationship between meeting time demands and JAWB was moderated by task interdependence, meeting experience quality, and accomplishment striving"

## 6. Luong & Rogelberg (2005)
- Geöffnet: <https://api.openalex.org/works/doi:10.1037/1089-2699.9.1.58>
- Titelübereinstimmung: ja. Group Dynamics: Theory, Research, and Practice, 2005
- Zitierter Inhalt (Zusammenfassung): eine einwöchige Tagebuchstudie, HLM-Analyse, "statistically significant positive correlation between the quantity of meetings attended and daily fatigue, along with perceptions of subjective workload" (vom Werkzeug wiedergegeben). Der Eintrag zitiert keine konkreten Koeffizienten.

## 7. Kruger & Evans (2004)
- Geöffnet: <https://api.crossref.org/works/10.1016/j.jesp.2003.11.001> (J Exp Soc Psychol 40(5), 586–598, 2004; keine Zusammenfassung); <https://api.openalex.org/works/doi:10.1016/j.jesp.2003.11.001> (keine Zusammenfassung); <https://r.jina.ai/https://www.sciencedirect.com/>... (Captcha); <https://r.jina.ai/https://www.semanticscholar.org/paper/67aa82059dafc832f93ad73057fc061ba1487823> (Ausschnitt der Zusammenfassung)
- Titelübereinstimmung: ja
- Zitierter Inhalt (Originaltext der Zusammenfassung): "People tend to underestimate how long it will take to complete tasks. We suggest that one reason people commit this planning fallacy is that they do not naturally 'unpack' multifaceted tasks (e.g., writing a manuscript) into subcomponents … when making predictions." Die konkreten Prozentwerte des Experiments **nicht bestätigt**, der Eintrag schreibt keine Zahl.

## 7. Steel (2007)
- Geöffnet: die oben genannte efetch-URL; <https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=17201571&rettype=abstract&retmode=text>
- Titelübereinstimmung: ja. The nature of procrastination: a meta-analytic and theoretical review of quintessential self-regulatory failure. Psychological Bulletin 2007; DOI 10.1037/0033-2909.133.1.65
- Herkunft der Zahl (Zusammenfassung): "691 correlations"; "Strong and consistent predictors of procrastination were task aversiveness, task delay, self-efficacy, and impulsiveness, as well as conscientiousness and its facets". Die oft zitierte Behauptung „80 %–95 % der Studierenden schieben auf" steht nicht in der Zusammenfassung, der Eintrag verwendet sie nicht.

## 9. Whillans et al. (2017)
- Geöffnet: <https://doi.org/10.1073/pnas.1706541114> (→ pnas.org, 403); die oben genannte efetch-URL (PMID 28739889)
- Titelübereinstimmung: ja. Buying time promotes happiness. PNAS 2017
- Herkunft der Zahl (Zusammenfassung): "diverse samples (n=6,271) from four countries … individuals who spend money on time-saving services report greater life satisfaction … working adults report greater happiness after spending money on a time-saving purchase than on a material purchase"

## 9, 10, 13. Staatliches Statistikamt [国家统计局], dritter nationaler Bericht zur Zeitverwendungserhebung (2024-10-31)
- Geöffnet: <https://www.stats.gov.cn/sj/zxfb/202410/t20241031_1957216.html> (zweiter Bericht); <https://www.stats.gov.cn/sj/zxfb/202410/t20241031_1957215.html> (dritter Bericht); <https://www.stats.gov.cn/sj/zxfb/202410/t20241031_1957217.html> (erster Bericht)
- Titelübereinstimmung: ja
- Herkunft der Zahl (Originaltext des zweiten Berichts): „Die Einwohner verwendeten täglich durchschnittlich 5 Stunden 37 Minuten auf die Internetnutzung, die Teilnehmer 6 Stunden 3 Minuten, die Beteiligungsquote betrug 92,9 %." „Im Bereich der Verkehrsaktivitäten verwendeten die Einwohner täglich durchschnittlich 50 Minuten, das sind 3,5 % des ganzen Tages; die Teilnehmer 1 Stunde 2 Minuten, die Beteiligungsquote 80,5 %." „Für Hausarbeit verwendeten die Einwohner täglich durchschnittlich 1 Stunde 17 Minuten, die Teilnehmer 1 Stunde 59 Minuten, die Beteiligungsquote 64,9 %."
- Stichprobe (Originaltext des ersten Berichts): „Landesweit wurden insgesamt 38.500 Haushalte und 107.000 Personen befragt"
- Die Seite des zweiten Berichts enthält das Wort „2018" nicht; den Vergleich mit 2018 habe ich selbst durch Gegenüberstellung des Berichts von 2018 gezogen.

## 10, 11. Staatliches Statistikamt [国家统计局], nationaler Bericht zur Zeitverwendungserhebung 2018 (2019-01-25)
- Geöffnet: <https://www.stats.gov.cn/sj/zxfb/202302/t20230203_1900224.html>
- Titelübereinstimmung: ja
- Herkunft der Zahl (Originaltext): „Die Einwohner sahen durchschnittlich 1 Stunde 40 Minuten fern"; „die Einwohner nutzten das Internet durchschnittlich 2 Stunden 42 Minuten"; Stichprobe „insgesamt wurden 20.226 Haushalte mit 48.580 Personen befragt"; „nach Altersgruppen in Schritten von 10 Jahren gegliedert, sahen die Einwohner im Alter von 75–84 Jahren mit 3 Stunden 16 Minuten am längsten fern; am kürzesten war es bei den 15–24-Jährigen mit 42 Minuten." (beim zweiten Abruf wörtlich bestätigt)

## 11. BLS American Time Use Survey — 2025 Results
- Geöffnet: <https://www.bls.gov/news.release/atus.nr0.htm> (zweimal)
- Titelübereinstimmung: ja. "American Time Use Survey Summary", "For release 10:00 a.m. (ET) Thursday, June 25, 2026"
- Herkunft der Zahl (Originaltext): "Watching TV was the leisure and sports activity that occupied the most time (2.6 hours per day), accounting for half of all leisure time, on average (5.2 hours)."

## 12. Lane, Napier, Peres & Sándor (2005)
- Geöffnet: <https://doi.org/10.1207/s15327590ijhc1802_1> (→ tandfonline, 403); <https://api.semanticscholar.org/graph/v1/paper/DOI:10.1207/s15327590ijhc1802_1>; <https://api.openalex.org/works/doi:10.1207/s15327590ijhc1802_1>; <https://r.jina.ai/https://www.tandfonline.com/doi/abs/10.1207/s15327590ijhc1802_1> (vollständige Zusammenfassung)
- Titelübereinstimmung: ja. International Journal of Human–Computer Interaction, 2005
- Herkunft der Zahl (Originaltext der Zusammenfassung): "251 experienced users of Microsoft Word were given a questionnaire … most experienced users rarely used the efficient keyboard shortcuts, favoring the use of icon toolbars instead … Six participants performed common commands using menu selection, icon toolbars, and keyboard shortcuts. The keyboard shortcuts were, as expected, the most efficient."

## 13. Stutzer & Frey (2008)
- Geöffnet: <https://doi.org/10.1111/j.1467-9442.2008.00542.x> (→ Wiley, 403/Captcha); <https://api.semanticscholar.org/graph/v1/paper/DOI:10.1111/j.1467-9442.2008.00542.x> (Zusammenfassung); <https://api.openalex.org/works/doi:10.1111/j.1467-9442.2008.00542.x> (Scandinavian Journal of Economics 110(2): 339–366)
- Titelübereinstimmung: ja. Stress that Doesn't Pay: The Commuting Paradox
- Zitierter Inhalt (Originaltext der Zusammenfassung): "we find that people with longer commuting time report systematically lower subjective well-being. Additional empirical analyses do not find institutional explanations of the empirical results that commuters systematically incur losses." Die oft weitergegebene Aussage „für eine Stunde einfachen Weg braucht es 40 % mehr Lohn als Ausgleich" steht nicht in der Zusammenfassung, der Eintrag verwendet sie nicht.

## 13. Chatterjee et al. (2020)
- Geöffnet: <https://api.semanticscholar.org/graph/v1/paper/DOI:10.1080/01441647.2019.1649317> (vollständige Zusammenfassung); <https://api.crossref.org/works/10.1080/01441647.2019.1649317> (Transport Reviews 40(1), 5–34, online 2019, gedruckt 2020)
- Titelübereinstimmung: ja
- Zitierter Inhalt (Originaltext der Zusammenfassung): "Satisfaction decreases with duration of commute, regardless of mode used … However, a consistent link between commuting and life satisfaction overall has not been established. The evidence suggests that commuters are generally successful in trading off the drawbacks of longer and more arduous commute journeys against the benefits they bring"

## Nicht bestätigt: CNNIC, 55. / 56. „Statistischer Bericht über die Entwicklung des chinesischen Internets"
- Geöffnet: <https://www.cnnic.net.cn/NMediaFile/2025/0220/MAIN1740036167004CKE0DITFO1.pdf> und <https://www.cnnic.net.cn/NMediaFile/2025/0730/MAIN1753846666507QEK67ZS9DH.pdf> (PDF erfolgreich heruntergeladen, aber die Schrift hat keine ToUnicode-Zuordnung, pdftotext extrahiert kein Chinesisch, und auf dem Rechner gibt es kein OCR-Werkzeug); <https://www.cnnic.net.cn/n4/2025/0117/c88-11229.html> und <https://www.cnnic.net.cn/n4/2025/0721/c88-11328.html> (die Veröffentlichungsseiten nennen nur die Internetnutzerzahl 1,108 Milliarden/1,123 Milliarden, die Verbreitungsrate 78,6 %/79,7 % und 662 Millionen Kurzdrama-Nutzer, aber keine wöchentliche Online-Zeit und keine Zahl der Kurzvideo-Nutzer); <https://www.cnnic.net.cn/6/132/> (nur ein Verzeichnis)
- Ergebnis: **nicht bestätigt**. Die in Suchergebnissen auftauchenden Angaben „durchschnittlich 28,7 Stunden pro Woche online (2024-12)" und „1,068 Milliarden Kurzvideo-Nutzer, 95,1 % der Internetnutzer (2025-06)" stammen alle aus Zweitverwertungen; die Quellenangabe in Eintrag 10 ist mit TODO markiert, diese Zahlen wurden nicht geschrieben.

## Andere geöffnete, aber nicht verwendete Seiten
- <https://api.unpaywall.org/v2/>... (422, keine OA-Kopie erhalten)
- Kahneman & Tversky (1979) Intuitive prediction: Biases and corrective procedures, TIMS Studies in Management Science 12, 313–327: Die Suche fand keine DOI und keinen offiziellen Volltext; Eintrag 4 verwendet stattdessen Buehler 1994 und Flyvbjerg 2006 als Originalbelege der Referenzklassen-Prognose, ohne sie direkt zu zitieren.

## Überarbeitungsrunde (2026-10-01)

Grundlage: der Sichtungspass oben (Stufe X = 0, fünf Fälle der Gruppe ②) und `review/kapitel/04.md`. Reihenfolge: erst die china-gebundenen Zahlen, dann die Kapitelweiten Punkte, dann die Gates. Jede neue oder geänderte Quellenangabe wurde einzeln auf offenen Volltext geprüft (REQ-70).

### Änderungen je Eintrag

| Nr. | Was ersetzt wurde | Deutscher Beleg | Marker |
|---|---|---|---|
| Einleitung (Zeile 5) | Meta-Erzählung „Dieser Abschnitt rechnet nur die Zeit. Er zeigt, …" | — | — |
| 3 | Autorenstimme, „(noch zu prüfen)" | — | — |
| 7 | Autorenstimme („konnten wir nur die Richtung prüfen") | — | — |
| 8 | Autorenstimme („Zu sagen ist: Geprüft ist, dass …") | — | — |
| 13 | `元`-Preisangabe → Euro; China-Begründung der Nutzenstufe; Hotline 12356 | Telefonseelsorge 0800 111 0 111 / 116 123 — Bundesnetzagentur, Nummerierungskonzept 2014; Bezirksamt Lichtenberg von Berlin | `Angepasst` (Zeile 117) |
| 14 | chinesische Hausarbeitszeit (1 h 17 min / 1 h 59 min, 国家统计局 2024) | Statistisches Bundesamt, Zeitverwendungserhebung 2022 | `Angepasst` (Zeile 127) |
| 15 | chinesische Onlinezeit (5 h 37 min / 6 h 3 min / 2 h 42 min 2018, 92,9 %) und die drei CNNIC-Angaben | Statistisches Bundesamt, Zeitverwendungserhebung 2022 (Mediennutzung) | `Angepasst` (Zeile 137) |
| 16 | chinesische Fernsehzeit (1 h 40 min; 75–84 J. 3 h 16 min, 国家统计局 2018) | AGF Videoforschung, Jahresbilanz 2024 | `Angepasst` (Zeile 147) |
| 17 | Marke „Word" → „ein Textprogramm" | Lane et al. (2005), Originalzitat „251 experienced users of Microsoft Word" | — |
| 18 | chinesische Verkehrszeit (50 min / 1 h 2 min, 国家统计局 2024) | Statistisches Bundesamt, Pressemitteilung Nr. N027 vom 26. Mai 2025 | `Angepasst` (Zeile 166) |

Die vier chinesischen Quellenangaben (国家统计局 2024 und 2018, CNNIC 2025) sind **entfallen**; an ihre Stelle traten die oben genannten deutschen. Das folgt der Regel „bei einer Ersetzung nach der Zielrichtung tritt die deutsche Primärquelle an die Stelle der chinesischen Norm" und dem Muster von Kapitel 03 Nr. 19.

### Die geprüften offenen Belege

- **Statistisches Bundesamt, Zeitverwendungserhebung (ZVE) 2022, Aktivitäten nach Geschlecht** — <https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Einkommen-Konsum-Lebensbedingungen/Zeitverwendung/Tabellen/aktivitaeten-geschlecht-zve.html>. Offen, Personen ab 10 Jahren, Einheit „Je Tag in hh:mm", Datenstand „Stand 6. Juni 2025" (revidiert wegen der Hochrechnung auf Basis des Zensus 2022). Wörtlich gelesen: Zeile „Haushaltsführung und Betreuung der Familie" Insgesamt **03:08**, Männer **02:31**, Frauen **03:45**; Zeile „Mediennutzung" Insgesamt **02:55**, Männer **03:01**, Frauen **02:48**. Beide Zeilen tragen den Eintrag Nr. 14 beziehungsweise Nr. 15.
- **Statistisches Bundesamt, ZVE 2022, Ergebnisse** — <https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Einkommen-Konsum-Lebensbedingungen/Zeitverwendung/Ergebnisse/_inhalt.html>. Wörtlich: „Fast die Hälfte der unbezahlten Arbeit setzt sich bei Frauen aus Tätigkeiten der klassischen Hausarbeit wie Kochen, Putzen und Wäsche waschen zusammen." Frauen „Knapp 13 Stunden pro Woche oder fast 2 Stunden pro Tag", Männer „nur halb so viel Zeit damit". Diese Angabe stützt die Aufteilung im Klartext der Nr. 14.
- **AGF Videoforschung, Jahresbilanz 2024** — <https://screenforce.de/whats/bilanz-das-war-das-fernsehjahr-2024> (veröffentlicht von Screenforce). Offen. Wörtlich: tägliche TV-Nutzung „durchschnittlich 171 Minuten" im Bewegtbildstandard, „176 Minuten" im Marktstandard TV, Bezugsgruppe „Gesamtpublikum"; 14- bis 49-Jährige „79 Minuten". Verwendet in Nr. 16.
- **Statistisches Bundesamt, Pressemitteilung Nr. N027 vom 26. Mai 2025 (Berufspendler 2024, Mikrozensus)** — <https://www.destatis.de/DE/Presse/Pressemitteilungen/2025/05/PD25_N027_13.html>. Offen. Wörtlich: „ein Großteil (70 %) […] benötigte […] weniger als 30 Minuten"; „Lediglich 6 % pendelten täglich eine Stunde oder länger pro Strecke." Einen Durchschnittswert nennt die Mitteilung nicht. Verwendet in Nr. 18.

### Übertragung, die an der offenen Quellenlage gescheitert ist

- **Nr. 15, Onlinezeit:** Für die **tägliche Internetnutzungsdauer** gibt es keine offen zugängliche, isolierte deutsche Kennzahl für 2024/2025. Die ARD/ZDF-Onlinestudie führt unter <https://www.ard-zdf-onlinestudie.de/> nur noch auf ein Archiv <https://archiv.ard-zdf-medienstudie.de/archiv-ardzdf-onlinestudie/>, das ein Inhaltsverzeichnis ohne Minutenwerte zeigt; die ARD/ZDF-Medienstudie 2024 weist die **Gesamtmediennutzung** aus, nicht die Internetdauer. Deshalb steht dort die amtliche **Mediennutzung** der ZVE 2022 (02:55). Das ist eine Ersetzung durch eine engere, dafür belegte Kennzahl; die Anmerkung sagt das offen („Gerechnet ist die ganze Mediennutzung, nicht nur die Zeit in Kurzvideos").
- **Nr. 16, Altersgruppen:** Die Alterswerte der AGF (50–69 Jahre, ab 70 Jahren) liegen in der Zeitschrift Media Perspektiven als PDF; sie wurden **nicht** übernommen, sondern durch den offen belegten Kontrast zu den 14- bis 49-Jährigen (79 Minuten) ersetzt.

### Kapitelweit durchgezogen

- **Einleitung (Zeile 5):** die Meta-Erzählung („Dieser Abschnitt rechnet nur die Zeit. Er zeigt, …") ist ersetzt; die Bezugsgröße steht jetzt als Aussage über die Sache.
- **Autorenstimme:** in Nr. 3, 7 und 8 sind die Selbstbezüge („konnten wir nur die Richtung prüfen", „Zu sagen ist: Geprüft ist, dass …") und der offene Vermerk „(noch zu prüfen)" entfernt; die Einschränkung selbst bleibt stehen.
- **Nr. 17:** „Word" durch „ein Textprogramm" ersetzt (markenneutral, am Originalzitat der Studie geprüft).
- **Nr. 15:** der zweimal stehende Meta-Satz „Das ist der größte Posten in diesem Abschnitt" ist gestrichen.
- **Nr. 13:** Preisangabe, Nutzenbegründung und Hotline nach dem Muster von Kapitel 03 Nr. 19.

### Buchweite Regeldrift (nicht in diesem Kapitel zu beheben)

Die Einleitungsformel „Bezugsgröße: X. **Dieser Abschnitt** …" steht auch in den Abschnitten 1, 2 und 3 (jeweils Zeile 5) und ist damit **buchweit**, nicht eine Eigenheit des Abschnitts 4. `CLAUDE.md` führt „Dieser Eintrag rechnet … und nicht in Geld" ausdrücklich als verbotene Meta-Erzählung. Vorschlag: die drei verbleibenden Einleitungen bei ihren Kapiteln mitziehen; solange das nicht geschehen ist, steht die Abweichung hier festgehalten, damit sie nicht als erledigt gilt.

### Maschinelle Gates

- `node tools/check-plain.mjs --stat`: 630 Klartext-Zeilen, **beanstandet 0**.
- `node tools/check-refs.mjs --check`: **bestanden**, alle **621** Verweise zeigen auf den richtigen Eintrag und tragen einen Anker (die drei offenen Hinweise betreffen Abschnitt 31 und sind älter).
- `grep -c 元` = **0**, `grep -cP '[\x{4e00}-\x{9fff}]'` = **0**, `grep -c '^### '` = **18**.
- `node tools/sync-stats.mjs` an der Kapitelgrenze gelaufen: Einträge 630, Abschnitte 34, A 420 / B 159 / C 51, Streitfälle 58, TODO 30, Links 1378. Die vier chinesischen Quellenangaben, die entfallen sind, und die vier deutschen, die hinzugekommen sind, verändern die Linkzahl; nachgezogen wurden das README-Quellenabzeichen und `tools/og.html` (1380 → **1378**) sowie der Evidenzabsatz der README (31 → **30** TODO-Stellen). `index.html` blieb unverändert, `og.png` ist neu erzeugt (156 291 Bytes, Selbstprüfung bestanden).

### Nacharbeit (2026-10-01, Folgecommit)

Zwei Punkte, die beim Abschluss des Kapitels aufgefallen und offen geblieben waren.

**① Doppelung zwischen Klartext und Nutzen (Nr. 14 und Nr. 15).** Beim Umstellen der beiden
Einträge auf die deutsche Zeitverwendungserhebung sind die Zahlen der Nutzen-Spalte in den
Klartext übernommen worden, ohne ihn umzuformulieren: in **Nr. 14** standen die ersten zwei Sätze
wörtlich in beiden Spalten, in **Nr. 15** war der Klartext bis auf den Herkunftssatz die Nutzen-Zeile
selbst. Kein Regelverstoß (`check-plain.mjs` war grün), aber eine Doppelung. Der Klartext ist
jetzt der kürzere, eigenständig formulierte Auszug, die Nutzen-Spalte trägt weiter die genauen
Werte und die Quelle:

| Eintrag | vorher (Klartext) | nachher (Klartext) |
|---|---|---|
| Nr. 14 | „Menschen ab zehn Jahren in Deutschland wenden täglich im Schnitt 3 Stunden 8 Minuten … auf. Frauen kommen auf 3 Stunden 45 Minuten, Männer auf 2 Stunden 31 Minuten. …" — wörtlich wie die Nutzen-Zeile | „Für Haushaltsführung und die Betreuung der Familie wendet man in Deutschland ab zehn Jahren täglich im Schnitt knapp drei Stunden auf, Frauen deutlich mehr als Männer. …" (53 Wörter, 3 Sätze) |
| Nr. 15 | „Menschen ab zehn Jahren in Deutschland verbringen täglich im Schnitt 2 Stunden 55 Minuten mit Medien. Bei Männern sind es 3 Stunden 1 Minute, bei Frauen 2 Stunden 48 Minuten. …" — wörtlich wie die Nutzen-Zeile | „Medien füllen in Deutschland bei Menschen ab zehn Jahren täglich im Schnitt knapp drei Stunden. Bei Männern sind es etwas mehr als drei Stunden, bei Frauen etwas weniger. …" (50 Wörter, 4 Sätze) |

Beide Klartexte liegen damit im Zielwert 50 bis 70 Wörter; die genauen Minutenwerte stehen
unverändert in der Nutzen-Spalte, es ist nichts entfallen (REQ-20). Die Nutzen-Spalten selbst
wurden **nicht** angetastet.

**② Aktenzeichen wurden als Eintragsverweise gelesen.** `check-refs.mjs --check` gab für
Abschnitt 31 drei Hinweise aus („der Abschnitt hat nur 16 Einträge — vielleicht eine Normstelle"):
`Guobanfa Nr. 27 von 2020`, `Renshebufa Nr. 56 von 2021`, `Caijin Nr. 75 von 2023`. Alle drei sind
Aktenzeichen der chinesischen Behörden, der Text war richtig — die Heuristik war zu kurz. Sie prüfte
nur das Wort **vor** „Nr." gegen eine Liste (Verordnung, Gesetz, Dokument, Richtlinie …); ein
Pinyin-Name wie „Guobanfa" trifft die Liste nicht.

Die Heuristik prüft jetzt zusätzlich das Jahr **hinter** der Nummer (`Nr. N von JJJJ`). Grundlage:
eine Vollerhebung aller Stellen „… Nr. N von JJJJ" im gescannten Bestand (book/ und die Langtexte
unter docs/) ergab **86 Stellen, durchweg Dokumentnummern**, kein einziger Eintragsverweis. Der
Filter ist damit nicht geraten, sondern aus dem Bestand belegt.

Die Wirkung reicht über die drei Hinweise hinaus: Liegt eine Dokumentnummer **unter** der
Eintragszahl des Abschnitts, wurde sie bisher als gültiger Verweis gezählt und auf einen Eintrag
gebucht, den sie nicht meint — ein stilles Versagen, das die Bereichsprüfung nicht sehen kann. Der
Diff von `docs/verweis-abgleich.md` zeigt genau diese neun Zeilen, alle als Dokumentnummer erkennbar:

| Abschnitt der Buchung | falsch gebuchte Nummer | tatsächlich gemeint |
|---|---|---|
| 8 | Nr. 7 | Justizauslegung Nr. 7 von 2011 |
| 8 | Nr. 10 | Justizauslegung Nr. 10 von 2013 |
| 8 | Nr. 14 | Leitende Meinung Nr. 14 von 2023 (zweimal) |
| 31 | Nr. 14 | Bekanntmachung Nr. 14 von 2023 |
| 31 | Nr. 27 | Guobanfa Nr. 27 von 2020 |
| 31 | Nr. 56 | Renshebufa Nr. 56 von 2021 |
| 31 | Nr. 75 | Caijin Nr. 75 von 2023 |
| 31 | Nr. 1 | Huifa Nr. 1 von 2007 |

**Die Gesamtzahl der Verweise sinkt damit von 621 auf 612** — nicht, weil ein Verweis entfallen ist,
sondern weil neun falsche Buchungen verschwinden. Die Kapitelprüfung oben nennt für Abschnitt 4 noch
621; das war der Stand vor dieser Korrektur. Der Maßstab aus `CLAUDE.md` („N kommen hinzu, die
Gesamtzahl steigt um N") gilt unverändert, nur mit der kleineren Basislinie.

**Maschinelle Gates nach der Nacharbeit:** `check-plain.mjs --stat` 630 Zeilen, beanstandet 0;
`check-refs.mjs --check` bestanden, **612** Verweise, **keine offenen Hinweise mehr**;
`sync-stats.mjs --no-screenshot` unverändert (Einträge 630, Abschnitte 34, A 420 / B 159 / C 51,
Streitfälle 58, TODO 30, Links 1378), nur `docs/verweis-abgleich.md` neu geschrieben.
