# Prüfprotokoll zu den Quellen von Abschnitt 6

Erläuterung der Prüfmethode: doi.org liefert durchweg eine 302-Weiterleitung; die Verlagsseiten von JAMA/NEJM/Elsevier/Wiley/ACP/RSNA/Nature liefern für WebFetch 403, und die PubMed-Seiten liefern nur einen Cookie-Hinweis. Deshalb wurde der Volltext der Abstracts einheitlich über die offizielle REST-Schnittstelle von Europe PMC geprüft (`<https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:<doi>&resultType=core&format=json`>, die die zu PubMed gleichwertige Titelaufnahme und den abstractText zurückgibt); in einzelnen Fällen wurde NCBI E-utilities efetch verwendet. Die folgenden „tatsächlich geöffneten URLs" sind die Adressen, die WebFetch bei der Prüfung erfolgreich mit Inhalt zurückgegeben hat. Alle DOIs stimmen in der von Europe PMC zurückgegebenen Titelaufnahme eins zu eins mit Titel/Autor/Jahr überein.

## Eintrag 1 Multivitamine

- Quelle A: Sesso HD et al. 2012 JAMA, DOI 10.1001/jama.2012.14805
  - Tatsächlich geöffnet: Europe PMC REST (DOI-Abfrage). Titel stimmt überein mit „Multivitamins in the prevention of cardiovascular disease in men: the Physicians' Health Study II randomized controlled trial", 2012, JAMA. Bestätigt.
  - Herkunft der zitierten Zahlen (Abstract): „14,641 male US physicians", „median follow-up 11.2 years", „major cardiovascular events … HR, 1.01; 95% CI, 0.91-1.10; P = .91", „total mortality … HR, 0.94; 95% CI, 0.88-1.02; P = .13"
- Quelle B: USPSTF 2022 JAMA, DOI 10.1001/jama.2022.8970
  - Tatsächlich geöffnet: <https://jamanetwork.com/journals/jama/fullarticle/2793446> (Ziel der Weiterleitung von doi.org, direktes Abrufen gelungen). Titel stimmt überein mit „Vitamin, Mineral, and Multivitamin Supplementation to Prevent Cardiovascular Disease and Cancer: US Preventive Services Task Force Recommendation Statement", 2022, JAMA 327(23). Bestätigt.
  - Herkunft der zitierten Zahlen: „Multivitamin trials reviewed: 9 RCTs involving 51,550 participants showed no association between multivitamin supplementation and all-cause mortality"; Bewertung des Multivitaminpräparats I; Bewertung von β-Karotin/Vitamin E D („recommends against the use of beta carotene or vitamin E supplements for the prevention of cardiovascular disease or cancer"); β-Karotin „Increased lung cancer risk (RR 1.18) in smokers/asbestos-exposed workers" (die Zahl 1.18 wird in diesem Abschnitt nicht direkt zitiert).
- Gegenseite in der Anmerkung: Gaziano JM et al. 2012 JAMA, DOI 10.1001/jama.2012.14641
  - Tatsächlich geöffnet: <https://pubmed.ncbi.nlm.nih.gov/?term=10.1001%2Fjama.2012.14641> (dieser PubMed-Abruf gab erfolgreich das Abstract zurück). Titel stimmt überein mit „Multivitamins in the prevention of cancer in men: the Physicians' Health Study II randomized controlled trial". Bestätigt.
  - Herkunft der zitierten Zahlen: „hazard ratio [HR], 0.92; 95% CI, 0.86-0.998; P=.04", „HR, 0.88; 95% CI, 0.77-1.01; P=.07"

## Eintrag 2 Fischöl

- Manson JE et al. 2019 NEJM, DOI 10.1056/NEJMoa1811403
  - Tatsächlich geöffnet: Europe PMC REST (DOI-Abfrage). Titel stimmt überein mit „Marine n-3 Fatty Acids and Prevention of Cardiovascular Disease and Cancer", 2019, NEJM. Bestätigt.
  - Herkunft der zitierten Zahlen: „25,871 participants", „1 g/day", „median follow-up of 5.3 years", „major cardiovascular events … hazard ratio, 0.92; 95% CI, 0.80 to 1.06; P=0.24", „Death from any cause … hazard ratio was 1.02 (95% CI, 0.90 to 1.15)"
- ASCEND Study Collaborative Group 2018 NEJM, DOI 10.1056/NEJMoa1804989
  - Tatsächlich geöffnet: Europe PMC REST. Titel stimmt überein mit „Effects of n-3 Fatty Acid Supplements in Diabetes Mellitus", 2018, NEJM. Bestätigt.
  - Herkunft der zitierten Zahlen: „15,480 patients with diabetes without atherosclerotic cardiovascular disease", „1-gram capsules daily", „Mean 7.4 years", „rate ratio, 0.97; 95% CI, 0.87 to 1.08; P=0.55", „All-cause mortality: rate ratio, 0.95; 95% CI, 0.86 to 1.05"
- Gegenseite: Bhatt DL et al. 2019 NEJM, DOI 10.1056/NEJMoa1812792
  - Tatsächlich geöffnet: <https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=30415628&rettype=abstract&retmode=text> (der Europe-PMC-Eintrag hat keinen abstractText, deshalb NCBI efetch verwendet). Titel stimmt überein mit „Cardiovascular Risk Reduction with Icosapent Ethyl for Hypertriglyceridemia", REDUCE-IT Investigators, NEJM 2019 (PMID 30415628). Bestätigt.
  - Herkunft der zitierten Zahlen: „hazard ratio was 0.75 (95% CI, 0.68–0.83; P<0.001)", „17.2% of the icosapent ethyl group versus 22.0% of the placebo group", „2 g of icosapent ethyl twice daily (total daily dose, 4 g)", „established cardiovascular disease or diabetes … statin therapy, fasting triglycerides of 135–499 mg/dL", „8,179 patients"

## Eintrag 3 Vitamin D

- Manson JE et al. 2019 NEJM, DOI 10.1056/NEJMoa1809944
  - Tatsächlich geöffnet: Europe PMC REST. Titel stimmt überein mit „Vitamin D Supplements and Prevention of Cancer and Cardiovascular Disease", 2019, NEJM. Bestätigt.
  - Herkunft der zitierten Zahlen: „2000 IU daily", „25,871", „Median 5.3 years", „Invasive cancer: hazard ratio, 0.96; 95% CI, 0.88 to 1.06; P=0.47", „Major cardiovascular events: hazard ratio, 0.97; 95% CI, 0.85 to 1.12; P=0.69", „Death from any cause: hazard ratio was 0.99 (95% CI, 0.87 to 1.12)"
- Neale RE et al. 2022 Lancet Diabetes Endocrinol, DOI 10.1016/S2213-8587(21)00345-4
  - Tatsächlich geöffnet: Europe PMC REST (die Abfrage nach DOI gab nichts zurück, deshalb nach TITLE:"D-Health Trial" AND AUTH:Neale abgefragt; das DOI-Feld der zurückgegebenen Titelaufnahme ist 10.1016/S2213-8587(21)00345-4 und stimmt mit dem angegebenen DOI überein). Titel stimmt überein mit „The D-Health Trial: a randomised controlled trial of the effect of vitamin D on mortality", 2022. Bestätigt.
  - Herkunft der zitierten Zahlen: „21 315 participants, including 10 662 to the vitamin D group and 10 653 to the placebo group", „60 000 IU per month for 5 years", „1100 deaths were recorded (placebo 538 [5·1%]; vitamin D 562 [5·3%])", „HR … 1.04 [95% CI 0·93 to 1·18]; p=0·47", „median follow-up 5·7 years", „Australians 60 years or older who were recruited across the country via the Commonwealth electoral roll" (beim zweiten Abruf Wort für Wort bestätigt; der Haupttext schreibt dementsprechend „über 60 Jahre" und nennt keine konkrete Obergrenze).

## Eintrag 4 Antioxidantien-Präparate

- Bjelakovic G et al. 2012 Cochrane, DOI 10.1002/14651858.CD007176.pub2
  - Tatsächlich geöffnet: Europe PMC REST. Titel stimmt überein mit „Antioxidant supplements for prevention of mortality in healthy participants and patients with various diseases", 2012, Cochrane Database Syst Rev. Bestätigt.
  - Herkunft der zitierten Zahlen: „78 trials, 296,707 participants", „RR 1.02, 95% CI 0.98 to 1.05 (random-effects)", „Low risk of bias trials (56 trials, 244,056 participants): RR 1.04, 95% CI 1.01 to 1.07", „Beta-carotene: RR 1.05, 95% CI 1.01 to 1.09", „Vitamin E: RR 1.03, 95% CI 1.00 to 1.05"
- ATBC Study Group 1994 NEJM, DOI 10.1056/NEJM199404143301501
  - Tatsächlich geöffnet: Europe PMC REST. Titel stimmt überein mit „The effect of vitamin E and beta carotene on the incidence of lung cancer and other cancers in male smokers", 1994, NEJM. Bestätigt.
  - Herkunft der zitierten Zahlen: „29,133 male smokers", „20 mg per day", „change in incidence, 18 percent; 95 percent confidence interval, 3 to 36 percent", „8 percent higher (95 percent confidence interval, 1 to 16 percent)"
- Omenn GS et al. 1996 NEJM, DOI 10.1056/NEJM199605023341802
  - Tatsächlich geöffnet: Europe PMC REST. Titel stimmt überein mit „Effects of a combination of beta carotene and vitamin A on lung cancer and cardiovascular disease", 1996, NEJM. Bestätigt.
  - Herkunft der zitierten Zahlen: „18,314 smokers, former smokers, and asbestos-exposed workers", „relative risk of lung cancer of 1.28 (95 percent confidence interval, 1.04 to 1.57; P=0.02)", „relative risk of death from any cause was 1.17 (95 percent confidence interval, 1.03 to 1.33)"
- Die Stufe D des USPSTF in der Anmerkung: dieselbe wie Eintrag 1 Quelle B, bestätigt.

## Eintrag 5 Glucosamin/Chondroitin

- Clegg DO et al. 2006 NEJM, DOI 10.1056/NEJMoa052771
  - Tatsächlich geöffnet: Europe PMC REST. Titel stimmt überein mit „Glucosamine, chondroitin sulfate, and the two in combination for painful knee osteoarthritis", 2006, NEJM. Bestätigt.
  - Herkunft der zitierten Zahlen: „1,583 patients", „placebo (60.1%)", „Glucosamine: 3.9 percentage points higher (P=0.30)", „Chondroitin sulfate: 5.3 percentage points higher (P=0.17)", „Combined treatment: 6.5 percentage points higher (P=0.09)", „Celecoxib: 10.0 percentage points higher (P=0.008)", „moderate-to-severe pain at baseline … 79.2 percent vs. 54.3 percent, P=0.002"; beim zweiten Abruf Wort für Wort bestätigt: „… or placebo for 24 weeks" und „Exploratory analyses suggest that the combination of glucosamine and chondroitin sulfate may be effective in the subgroup of patients with moderate-to-severe knee pain".

## Eintrag 6 Vitamin C

- Hemilä H, Chalker E 2013 Cochrane, DOI 10.1002/14651858.CD000980.pub4
  - Tatsächlich geöffnet: Europe PMC REST. Titel stimmt überein mit „Vitamin C for preventing and treating the common cold", 2013. Bestätigt.
  - Herkunft der zitierten Zahlen: „pooled RR was 0.97 (95% confidence interval (CI) 0.94 to 1.00)", „29 trial comparisons with 11,306 participants", „In adults, colds shortened by 8% (3% to 12%); in children by 14% (7% to 21%)", „No consistent effect of vitamin C was seen on the duration or severity of colds in the therapeutic trials". Die Zahlen zur Gruppe mit extremer körperlicher Belastung in der Anmerkung stammen aus dem beim zweiten Abruf Wort für Wort bestätigten Satz: „Five trials involving a total of 598 marathon runners, skiers and soldiers on subarctic exercises yielded a pooled RR of 0.48 (95% CI 0.35 to 0.64)".

## Eintrag 7 Ganzkörper-PET-CT / Tumormarker

- USPSTF 2018 JAMA, DOI 10.1001/jama.2017.21926
  - Tatsächlich geöffnet: <https://pubmed.ncbi.nlm.nih.gov/29450531/> (dieser Abruf gab erfolgreich etwas zurück). Titel stimmt überein mit „Screening for Ovarian Cancer: US Preventive Services Task Force Recommendation Statement", 2018, JAMA, DOI 10.1001/jama.2017.21926. Bestätigt. (Der DOI 10.1001/jama.2018.0938, den ich zunächst notiert hatte, ist falsch; der richtige DOI wurde mit WebSearch gefunden und geprüft.)
  - Tatsächlich geöffnet: <https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/ovarian-cancer-screening>. Bestätigt.
  - Herkunft der zitierten Zahlen (amtliche Seite, Wort für Wort): „No difference was found in ovarian cancer mortality … with 0.34% in the screening group and 0.29% in the usual care group (relative risk, 1.18 [95% CI, 0.82 to 1.71])", „Surgery to investigate positive screening test results among women who ultimately did not have ovarian cancer occurred in 0.2% of participants in the UK Pilot CA-125 group, 0.97% … 3.25% of participants in the UKCTOCS ultrasound group, and 3.17% of participants in the PLCO CA-125 plus ultrasound group", „Up to 15% of these women had major surgical complications"
- Furtado CD et al. 2005 Radiology, DOI 10.1148/radiol.2372041741
  - Tatsächlich geöffnet: Europe PMC REST. Titel stimmt überein mit „Whole-body CT screening: spectrum of findings and recommendations in 1192 patients", 2005, Radiology. Bestätigt.
  - Herkunft der zitierten Zahlen: „1030 (86%) of 1192 subjects had at least one abnormal finding", „Four hundred forty-five (37%) patients received at least one recommendation for additional evaluation", „most findings were benign by description and required no further evaluation"

## Eintrag 8 Fitnessarmband

- Jakicic JM et al. 2016 JAMA, DOI 10.1001/jama.2016.12858
  - Tatsächlich geöffnet: Europe PMC REST. Titel stimmt überein mit „Effect of Wearable Technology Combined With a Lifestyle Intervention on Long-term Weight Loss: The IDEA Randomized Clinical Trial", 2016, JAMA. Bestätigt.
  - Herkunft der zitierten Zahlen: „estimated mean weight loss, 3.5 kg [95% CI, 2.6-4.5] in the enhanced intervention group and 5.9 kg [95% CI, 5.0-6.8] in the standard intervention group; difference, 2.4 kg [95% CI, 1.0-3.7]; P = .002", „471 randomized participants"

## Eintrag 9 Biologische Lebensmittel

- Smith-Spangler C et al. 2012 Ann Intern Med, DOI 10.7326/0003-4819-157-5-201209040-00007
  - Tatsächlich geöffnet: Europe PMC REST. Titel stimmt überein mit „Are organic foods safer or healthier than conventional alternatives?: a systematic review", 2012, Annals of Internal Medicine. Bestätigt.
  - Herkunft der zitierten Zahlen: „17 studies in humans and 223 studies of nutrient and contaminant levels in foods met inclusion criteria", „The published literature lacks strong evidence that organic foods are significantly more nutritious than conventional foods", „risk difference, 30%" (Pestizidrückstände), „Only 3 human studies examined clinical outcomes, finding no significant differences … for allergic outcomes or symptomatic infection". Das Abstract enthält außerdem „antibiotic-resistant … risk difference, 33%", was dieser Abschnitt nicht zitiert. „Ein Nachweis ist nicht gleich einer Überschreitung" ist meine Formulierung; der Originaltext des Abstracts nennt die Risikodifferenz beim Nachweis von Rückständen und erwähnt keine Überschreitungsquote.

## Eintrag 10 Nahrungsergänzungsmittel

- Seite der Pressekonferenz der Staatlichen Verwaltung für Marktregulierung
  - Tatsächlich geöffnet: <https://www.samr.gov.cn/tssps/sjdt/tpxw/art/2023/art_4b658b824b1b4b0ba57c09a56cc93aad.html>. Seitentitel „Die Staatliche Verwaltung für Marktregulierung hält eine Sonderpressekonferenz zur Lage der Leitlinie für Warnhinweise auf Nahrungsergänzungsmitteln [保健食品标注警示用语指南] und der Verwaltungsvorschrift über den Katalog der Rohstoffe und den Katalog der Gesundheitsfunktionen von Nahrungsergänzungsmitteln [保健食品原料目录与保健功能目录管理办法]", Pressekonferenz vom 20. August 2019, offizielle Website samr.gov.cn. Bestätigt.
  - Herkunft der zitierten Textstellen: „Nahrungsergänzungsmittel sind keine Arzneimittel und können Arzneimittel bei der Behandlung von Krankheiten nicht ersetzen", „Die Fläche des Warnbereichs beträgt mindestens 20 % der Fläche, auf der er sich befindet", „Ergänzung von Nährstoffen der Ernährung, Erhaltung oder Verbesserung des Gesundheitszustands des Körpers oder Verringerung von Risikofaktoren für Krankheiten"
  - Nicht bestätigt: Die Originalseite der Bekanntmachung <https://gkml.samr.gov.cn/nsjg/tssps/201908/t20190820_306116.html> gab bei 4 WebFetch-Versuchen hintereinander „Socket is closed", die Wiedergabeseite auf gov.cn ist 404, deshalb nennt die Quellenangabe nur die erfolgreich geöffnete Pressekonferenzseite auf samr.gov.cn.

## Eintrag 11 Probiotika

- Khalesi S et al. 2019 Eur J Clin Nutr, DOI 10.1038/s41430-018-0135-9
  - Tatsächlich geöffnet: Europe PMC REST. Titel stimmt überein mit „A review of probiotic supplementation in healthy adults: helpful or hype?", 2019, European Journal of Clinical Nutrition. Bestätigt.
  - Herkunft der zitierten Textstellen: „45" Studien; „this review failed to support the ability of probiotics to cause persistent changes in gut microbiota, or improve lipid profile in healthy adults"; Veränderung der Darmflora „transient"; Werte mit leichter Verbesserung „stool consistency, bowel movement, and vaginal lactobacilli concentration"

## Eintrag 12 Kaltduschen

- Buijze GA et al. 2016 PLOS ONE, DOI 10.1371/journal.pone.0161749
  - Tatsächlich geöffnet: <https://journals.plos.org/plosone/doi?id=10.1371/journal.pone.0161749>. Titel stimmt überein mit „The Effect of Cold Showering on Health and Work: A Randomized Controlled Trial", 2016. Bestätigt.
  - Herkunft der zitierten Zahlen: „3,018 individuals", „30, 60, or 90 seconds", „29% reduction … (IRR: 0.71, P = 0.003)", „For illness days there was no significant group effect", „no clinically relevant differences in quality of life, work productivity, anxiety"
- Cain T et al. 2025 PLOS ONE, DOI 10.1371/journal.pone.0317615
  - Tatsächlich geöffnet: <https://journals.plos.org/plosone/doi?id=10.1371/journal.pone.0317615>. Titel stimmt überein mit „Effects of cold-water immersion on health and wellbeing: A systematic review and meta-analysis", 2025. Bestätigt.
  - Herkunft der zitierten Textstellen: „Eleven randomized controlled trials encompassing 3,177 total participants", „significant increases in inflammation immediately…and 1 hour post CWI", „no meaningful immediate or delayed immune changes", „a significant reduction in stress…12 hours post-CWI", „current evidence base is constrained by few RCTs, small sample sizes"

## Eintrag 13 Entschlackung/Basisch

- Klein AV, Kiat H 2015 J Hum Nutr Diet, DOI 10.1111/jhn.12286
  - Tatsächlich geöffnet: Europe PMC REST. Titel stimmt überein mit „Detox diets for toxin elimination and weight management: a critical review of the evidence", 2015. Bestätigt.
  - Herkunft der zitierten Textstellen: „Although the detox industry is booming, there is very little clinical evidence to support the use of these diets", „no randomised controlled trials have been conducted to assess the effectiveness of commercial detox diets in humans"
- Fenton TR, Huang T 2016 BMJ Open, DOI 10.1136/bmjopen-2015-010438
  - Tatsächlich geöffnet: Europe PMC REST (DOI-Abfrage). Titel stimmt überein mit „Systematic review of the association between dietary acid load, alkaline water and cancer", 2016, BMJ Open. Bestätigt. (Der DOI 10.1136/bmjopen-2016-010438, den ich zunächst notiert hatte, ist falsch, doi.org gibt 404 zurück; WebSearch und Europe PMC geben beide 2015-010438 an, entsprechend korrigiert.)
  - Herkunft der zitierten Textstellen: „8278 citations were identified, and 252 abstracts were reviewed; 1 study met the inclusion criteria", „no association between the diet acid load with bladder cancer (OR=1.15: 95% CI 0.86 to 1.55, p=0.36)", „Promotion of alkaline diet and alkaline water to the public for cancer prevention or treatment is not justified"

## Eintrag 14 8 Gläser Wasser am Tag

- Valtin H 2002 Am J Physiol Regul Integr Comp Physiol, DOI 10.1152/ajpregu.00365.2002
  - Tatsächlich geöffnet: Europe PMC REST (journals.physiology.org gibt 403 zurück). Titel stimmt überein mit „"Drink at least eight glasses of water a day." Really? Is there scientific evidence for "8 x 8"?", Heinz Valtin, 2002. Bestätigt.
  - Herkunft der zitierten Textstellen: „No scientific studies were found in support of 8 x 8. Rather, surveys of food and fluid intake on thousands of adults…strongly suggest that such large amounts are not needed"

## Kandidaten, die nicht aufgenommen wurden, aber erwogen wurden

- Kollagen zum Einnehmen: Die vorhandenen Metaanalysen sind meist klein und von Herstellern finanziert, die Richtung geht eher ins Positive, das passt nicht zur Ausrichtung dieses Abschnitts „die Evidenz zeigt, dass es nicht wirkt", deshalb nicht aufgenommen.
- Luftreiniger/Wasserfilter: nicht geprüft und keine Evidenz für harte Endpunkte gefunden, deshalb nicht aufgenommen.
- Frühaufstehen an sich: lässt sich von der Regelmäßigkeit des Schlafs schwer trennen, keine direkte Vergleichsevidenz gefunden, deshalb nicht aufgenommen.
- Multitasking/Pomodoro: keine direkte Evidenz, auf Anweisung nicht aufgenommen.
