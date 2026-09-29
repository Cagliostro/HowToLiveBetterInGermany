# Abschnitt 4: Quellenprüfprotokoll

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
