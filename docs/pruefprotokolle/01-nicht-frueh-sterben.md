# Quellenprüfprotokoll zu Abschnitt 1

Prüfdatum 2026-09-07. Die meisten Verlagsseiten (NEJM, Elsevier, Wiley, BMJ, AHA) liefern an WebFetch 403 zurück. Diese Literatur wurde über die Europe-PMC-REST-Schnittstelle (`<https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:">…"&resultType=core&format=json`) gelesen: Titel, Autoren, Zeitschrift, Jahr und der vollständige Abstract des Datensatzes zum selben DOI kamen so herein; doi.org selbst lässt sich auflösen (302 zur Verlagsseite). Die folgenden „Original" sind durchweg Sätze, die wörtlich aus Abstract oder Volltext herausgezogen wurden.

## 1. Sicherheitsgurt
- <https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813573> — geöffnet (PDF mit pdftotext in Text umgewandelt). Titel „Occupant Protection in Passenger Vehicles: 2022 Data, DOT HS 813 573, May 2024" stimmt überein.
  - Original: „Fifty percent of passenger vehicle occupants killed in traffic crashes in 2022 were unrestrained (based on known restraint use)."
  - Original: „lap/shoulder seat belts, when used, reduce the risk of: fatal injury to front-seat passenger car occupants by 45 percent; … fatal injury to front-seat light-truck occupants by 60 percent"
  - Original: „60 percent of those in the second row were unrestrained."
- <https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries> — geöffnet. Original: „Wearing a seat-belt can reduce the risk of death among vehicle occupants by up to 50%."
- <https://ghoapi.azureedge.net/api/RS_196?$filter=SpatialDim%20eq%20%27CHN%27> — geöffnet (WHO-GHO-API). China 2021: 248,099 (95% CI 233,685–262,513). RS_198 auf dieselbe Weise geöffnet: 2021 17.4/100 000.
  - Hinweis: Bei der Rückgabe der GHO-Schnittstelle gibt RS_196 die absoluten Zahlen und RS_198 die Rate; das ist umgekehrt zu den Kennzahlen-Nummern, die ich erwartet hatte. Die Zahlen selbst stammen aus dem zurückgegebenen JSON.

## 2. Helm
- <https://doi.org/10.1002/14651858.CD004333.pub3> — doi.org löst zu Wiley auf (403), der Europe-PMC-Datensatz bestätigt: Liu BC, 2008, „Helmets for preventing injury in motorcycle riders".
  - Original: „helmets were estimated to reduce the risk of death by 42% (OR 0.58, 95% CI 0.50 to 0.68)"; „reduce the risk of head injury by 69% (OR 0.31, 95% CI 0.25 to 0.38)"

## 3. Rauchmelder / Kohlenmonoxid
- <https://doi.org/10.1001/jama.279.20.1633> — der Europe-PMC-Datensatz bestätigt: Marshall SW, Runyan CW u. a., JAMA 1998, „Fatal residential fires: who dies and who survives?".
  - Original: „Overall, a functioning smoke detector lowered the risk of death (OR, 0.39; 95% CI, 0.18-0.83)."
- <https://www.usfa.fema.gov/downloads/pdf/statistics/v22i2.pdf> — geöffnet (PDF in Text umgewandelt). Titel „Fatal Fires in Residential Buildings (2018-2020), Topical Fire Report Series June 2022 Vol 22 Issue 2" stimmt überein.
  - Original: „Smoke alarms were not present in 24% of fatal fires in occupied residential buildings."; „The leading human factor contributing to the ignition of fatal fires in residential buildings was being 'asleep' (41%)."
- <https://doi.org/10.46234/ccdcw2020.008> — doi.org löst zu weekly.chinacdc.cn auf (zeigt nur die Metadaten), der Volltext wurde über Europe PMC PMC8392909 fullTextXML gelesen. Autoren You J, Liu J, Zhou M, China CDC Weekly 2020.
  - Original: „In 2018, there were 11,523 deaths caused by carbon monoxide poisoning reported in China"; „highest proportions occurring in December (72.59%), January (67.42%), and February (66.48%)"
- Nicht verwendet: Die NFPA-Seite „Smoke Alarms in US Home Fires" gibt nur den Titel zurück, das Bericht-PDF gibt 500 zurück und ließ sich nicht prüfen, deshalb wurde die NFPA-Zahl „Sterblichkeit um 55% niedriger" nicht zitiert.

## 4. Blutdruck
- <https://doi.org/10.1016/S0140-6736(15)01225-8> — die Elsevier-Seite zeigt nur „Redirecting"; der Europe-PMC-Datensatz bestätigt: Ettehad D, Lancet 2016.
  - Original: „relative risk [RR] 0·80, 95% CI 0·77-0·83" (schwere kardiovaskuläre Ereignisse); „stroke (0·73, 0·68-0·77)"; „heart failure (0·72, 0·67-0·78)"; „a significant 13% reduction in all-cause mortality (0·87, 0·84-0·91)"
  - Original: „We identified 123 studies with 613,815 participants for the tabular meta-analysis."
- <https://doi.org/10.1016/S0140-6736(17)32478-9> — der Europe-PMC-Datensatz bestätigt: Lu J, Lancet 2017, China PEACE Million Persons Project.
  - Original: „44·7% (95% CI 44·6-44·8) of the sample had hypertension, of whom 44·7% (44·6-44·8) were aware of their diagnosis, 30·1% (30·0-30·2) were taking prescribed antihypertensive medications, and 7·2% (7·1-7·2) had achieved control"

## 5. Nicht zu schnell, nicht betrunken fahren
- <https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries> — geöffnet.
  - Original: „Every 1% increase in mean speed produces a 4% increase in the fatal crash risk."; „The risk of a road traffic crash starts at low levels of blood alcohol concentration (BAC)."

## 6. Kindersitz
- NHTSA 813573 (wie Nr. 1). Original: „NHTSA has estimated that car seats reduce the risk of fatal injury by 71 percent for infants (younger than 1 year old) and by 54 percent for toddlers (1 to 4 years old) in passenger cars."
- WHO-Factsheet Straßenverkehr (wie oben). Original: „The use of child restraints can lead to a 71% reduction in deaths among infants."

## 7. Ertrinken
- <https://doi.org/10.1136/ip.2010.028688> — doi.org löst zu injuryprevention.bmj.com auf (403); der Europe-PMC-Datensatz bestätigt: Cummings P, Mueller BA, Quan L. Injury Prevention 2011;17(3):156-159, PMID 20889519.
  - Original: „The adjusted RR was 0.51 (95% CI 0.35 to 0.74)."
  - Hinweis: Die DOI, die ich zuerst notiert hatte (…028381), war falsch, doi.org gab 404 zurück; sie wurde auf die von Europe PMC angegebene …028688 geändert.
- <https://doi.org/10.46234/ccdcw2023.198> — löst zu weekly.chinacdc.cn auf; der Volltext wurde über Europe PMC PMC10689961 gelesen. Li Z, China CDC Weekly 2023.
  - Original: „the national drowning mortality rate from 6.60 per 100,000 in 2013 down to 3.28 per 100,000 in 2021"; „rural areas exhibited roughly double the mortality rate found in urban areas"; „in China, it is deemed the primary cause of death for children between the ages of 1 and 14"; „peaking at 3.95 per 100,000 in the 15–19 year age group"
- <https://doi.org/10.46234/ccdcw2024.057> — löst zu weekly.chinacdc.cn auf; der Abstract wurde über Europe PMC gelesen. Zhou J, China CDC Weekly 2024.
  - Original: „In 2021, drowning and road traffic crashes were the top two causes of child injury deaths, explaining 31.1% and 27.9% of total injury deaths, respectively."
- Nicht verwendet: Die Webseite des chinesischen CDC chinacdc.cn/…/t20210809_233793.html gibt 404 zurück.

## 8. Sturzvorbeugung bei alten Menschen
- <https://doi.org/10.1002/14651858.CD012424.pub2> — Wiley 403; der Europe-PMC-Datensatz bestätigt: Sherrington C, 2019.
  - Original: „Exercise reduces the rate of falls by 23% (rate ratio (RaR) 0.77, 95% confidence interval (CI) 0.71 to 0.83"; „reduces the number of people experiencing one or more falls by 15% (risk ratio (RR) 0.85, 95% CI 0.81 to 0.89"
  - Original: „We included 108 RCTs with 23,407 participants living in the community in 25 countries."
- <https://doi.org/10.1002/14651858.CD007146.pub3> — der Europe-PMC-Datensatz bestätigt: Gillespie LD, 2012.
  - Original: „Home safety assessment and modification interventions were effective in reducing rate of falls (RR 0.81, 95% CI 0.68 to 0.97; six trials; 4208 participants)"; „Tai Chi did significantly reduce risk of falling (RR 0.71, 95% CI 0.57 to 0.87…)"
- <https://doi.org/10.46234/ccdcw2021.013> — löst zu weekly.chinacdc.cn auf; der Volltext wurde über Europe PMC PMC8393086 gelesen. Lu Z, China CDC Weekly 2021.
  - Original: „Falls are the top cause for death from injuries in people aged 65 years and above"; „Home (55.97%), road/street (18.69%), and public residential institution (12.80%) were the sites where falls most often occurred"

## 9. Hepatitis B
- <https://doi.org/10.1371/journal.pmed.1001774> — nach der Weiterleitung von PLOS war der Volltext nicht zu bekommen; der Europe-PMC-Datensatz bestätigt: Qu C, PLoS Medicine 2014.
  - Original: „efficacies of 84% (95% CI 23%-97%)" (PLC-Erkrankung); „catch-up vaccination on HBsAg seroprevalence in early adulthood was 21% (95% CI 10%-30%), substantially weaker than that of the neonatal vaccination (72%, 95% CI 68%-75%)"
- <https://doi.org/10.3201/eid2305.161477> — der Europe-PMC-Datensatz bestätigt: Cui F, Emerging Infectious Diseases 2017.
  - Original: „HBV surface antigen prevalence declined 46% by 2006 and by 52% by 2014"; unter 5 Jahren „the decline was 97%"

## 10. HPV-Impfung
- <https://doi.org/10.1056/NEJMoa1917338> — NEJM 403; der Europe-PMC-Datensatz bestätigt: Lei J, NEJM 2020.
  - Original: „the incidence rate ratio was 0.12 (95% CI, 0.00 to 0.34) among women who had been vaccinated before the age of 17 years and 0.47 (95% CI, 0.27 to 0.75) among women who had been vaccinated at the age of 17 to 30 years"
  - Original: „follow an open population of 1,672,983 girls and women who were 10 to 30 years of age from 2006 through 2017"

## 11. Gebärmutterhalskrebs-Screening
- <https://doi.org/10.1056/NEJMoa0808516> — NEJM 403; der Europe-PMC-Datensatz bestätigt: Sankaranarayanan R, NEJM 2009.
  - Original: „hazard ratio for the detection of advanced cancer in the HPV-testing group, 0.47; 95% confidence interval [CI], 0.32 to 0.69"; „34 deaths from cancer in the HPV-testing group, as compared with 64 in the control group (hazard ratio, 0.52; 95% CI, 0.33 to 0.83)"

## 12. Darmkrebs-Screening
- <https://doi.org/10.1002/14651858.CD001216.pub2> — der Europe-PMC-Datensatz bestätigt: Hewitson P, 2007.
  - Original: „a 16% reduction in the relative risk of colorectal cancer mortality (RR 0.84, CI: 0.78-0.90)"; „25% relative risk reduction (RR 0.75, CI: 0.66 - 0.84) for those attending at least one round of screening"
- <https://doi.org/10.1056/NEJMoa2208375> — der Europe-PMC-Datensatz bestätigt: Bretthauer M, NEJM 2022.
  - Original: „the risk of colorectal cancer at 10 years was 0.98% in the invited group and 1.20% in the usual-care group, a risk reduction of 18% (risk ratio, 0.82; 95% confidence interval [CI], 0.70 to 0.93)"; „The risk of death from colorectal cancer was 0.28% in the invited group and 0.31% in the usual-care group (risk ratio, 0.90; 95% CI, 0.64 to 1.16)"

## 13. Grippeimpfung
- <https://doi.org/10.1161/CIRCULATIONAHA.121.057042> — AHA 403; der Europe-PMC-Datensatz bestätigt: Fröbert O, Circulation 2021 (IAMI).
  - Original: „Rates of all-cause death were 2.9% and 4.9% (hazard ratio, 0.59 [95% CI, 0.39-0.89]; P=0.010)"; „rates of cardiovascular death were 2.7% and 4.5%, (hazard ratio, 0.59 [95% CI, 0.39-0.90]"
  - Original: „2571 participants were randomized at 30 centers across 8 countries"; „Over the 12-month follow-up, the primary outcome occurred in…"
- <https://doi.org/10.1001/jamanetworkopen.2022.8873> — die JAMA-Seite ließ sich direkt öffnen. Behrouzi B, JAMA Network Open 2022.
  - Original: „influenza vaccine was associated with a lower risk of composite cardiovascular events (3.6% vs 5.4%; RR, 0.66; 95% CI, 0.53-0.83"; „1.7% of vaccine recipients died of cardiovascular causes compared with 2.5% of placebo or control recipients (RR, 0.74; 95% CI, 0.42-1.30"
- <https://doi.org/10.1002/14651858.CD004876.pub4> — der Europe-PMC-Datensatz bestätigt: Demicheli V, 2018.
  - Original: „may experience less influenza over a single season compared with placebo, from 6% to 2.4%" (low-certainty); „very low-certainty evidence for the effect on mortality"

## 14. Helicobacter pylori
- <https://doi.org/10.1136/bmj.l5016> — BMJ 403; der Europe-PMC-Datensatz bestätigt: Li WQ, BMJ 2019.
  - Original: „A protective effect of H pylori treatment on gastric cancer incidence persisted 22 years post-intervention (odds ratio 0.48, 95% confidence interval 0.32 to 0.71)"; „fully adjusted hazard ratio for H pylori treatment was 0.62 (95% confidence interval 0.39 to 0.99)"

## 15. Niedrigdosierte CT
- <https://doi.org/10.1056/NEJMoa1102873> — NEJM 403; der Europe-PMC-Datensatz bestätigt (PMID 21714641), und unter <https://pmc.ncbi.nlm.nih.gov/articles/PMC4356534/> wurde die Volltextzusammenfassung geöffnet.
  - Original: „53,454 persons at high risk for lung cancer at 33 U.S. medical centers"; „24.2% with low-dose CT and 6.9% with radiography over all three rounds"; „96.4% of the positive screening results in the low-dose CT group … were false positive results"; „20.0% (95% CI, 6.8 to 26.7; P = 0.004)"; „6.7% (95% CI, 1.2 to 13.6; P = 0.02)"
  - Die Einschlusskriterien (55–74 Jahre, ≥30 Packungsjahre, Rauchstopp ≤15 Jahre) wurden im Europe-PMC-Abstract bestätigt.

## 16. Psychische Krise
- <https://doi.org/10.1016/S2215-0366(16)30030-X> — die Elsevier-Seite zeigt nur „Redirecting"; der Europe-PMC-Datensatz bestätigt: Zalsman G, Lancet Psychiatry 2016.
  - Original: „Evidence for restricting access to lethal means in prevention of suicide has strengthened since 2005"; „overall decrease of 43% since 2005" (Kontrolle von Schmerzmitteln); „hot-spots for suicide by jumping (reduction of 86% since 2005, 79% to 91%)"; „School-based awareness programmes have been shown to reduce suicide attempts (odds ratio [OR] 0·45, 95% CI 0·24-0·85"
- <https://www.bundesnetzagentur.de/DE/Fachthemen/Telekommunikation/Nummerierung/_DL/Nummerierungskonzept2014.pdf?__blob=publicationFile&v=1> — geöffnet (PDF mit pdftotext in Text umgewandelt). Die Nummer erscheint als „(0)116123" mit der Zuordnung „Hotline zur Lebenshilfe"; der Dienst „bietet dem Anrufer einen menschlichen Ansprechpartner, der ihm vorurteilsfrei zuhört" und leistet „seelischen Beistand für Anrufer", erreichbar seit 05. Dezember 2008.
  - Ersetzt in Runde 10 (2026-09-30) die früher zitierte chinesische Bekanntmachung zur Nummer 12356 (国家卫生健康委关于应用„12356"全国统一心理援助热线电话号码的通知). Die Nummer 116 123 und die kostenlose, anonyme Erreichbarkeit der Telefonseelsorge stehen so im Text; die frühere chinesische Fundstelle ist entfallen.
  - Zu prüfen: Eine amtliche deutsche Quelle, die zusätzlich die Nummer 0800 111 0 111 und die Rund-um-die-Uhr-Besetzung der Telefonseelsorge belegt, wurde nicht gefunden; der Nummerierungstext der Bundesnetzagentur führt nur die 116 123.

## Nicht bestätigt / nicht verwendet
- Die NHTSA-Webseiten nhtsa.gov/risky-driving/seat-belts, car-seats-and-booster-seats: 403, nicht bestätigt, stattdessen das offizielle PDF von crashstats verwendet.
- NFPA-Bericht zu Rauchmeldern: nicht bestätigt, nicht zitiert.
- WHO Global status report on road safety 2023, Länderprofil China (PDF): 404, nicht bestätigt; für die Straßenverkehrstoten in China wird stattdessen die GHO-API verwendet.
- WHO-Factsheet zum Ertrinken (geöffnet, Fassung vom 2026-05-01): keine Zahlen zu China, nicht zitiert; „around 300 000 annual drowning deaths worldwide" wurde nicht verwendet.
- Die Studienskalenzahlen in der Nutzen-Spalte (Ettehad 123 Studien/613,815 Personen, Sherrington 108 Studien/23,407 Personen, Lei 1,672,983 Personen, IAMI 2571 Personen) wurden in der zweiten Runde des Europe-PMC-Abrufs Wort für Wort geprüft, siehe die jeweiligen Originalstellen.
- Die Preise in der Kosten-Spalte (Helm, Melder, Impfungen, Untersuchungsgebühren usw.) sind grobe Schätzungen des Autors nach Marktpreis, sie sind keine zitierten Zahlen und wurden nicht geprüft.

## Deutsche Fundstellen (Runde 10, 2026-09-30)

In Runde 10 wurden die china-gebundenen Zuständigkeiten, Verfahren, Gesetzesbezüge und Preise nach REQ-65/REQ-68 umgestellt. Jede deutsche Fundstelle wurde einmal geöffnet; die folgenden Sätze stehen so in der Quelle.

### Nr. 4 — Gasschlauch (NDAV § 13, BGB § 312g)
- <https://www.gesetze-im-internet.de/ndav/__13.html> — geöffnet. § 13 Niederdruckanschlussverordnung: „Der Anschlussnehmer ist verantwortlich für ‚Errichtung, Erweiterung, Änderung und Instandhaltung der Gasanlage hinter der Hauptabsperreinrichtung'"; „Arbeiten an der Anlage dürfen, außer durch den Netzbetreiber, nur durch Installationsunternehmen durchgeführt werden, die in einem Installateurverzeichnis eingetragen sind".
- <https://www.gesetze-im-internet.de/bgb/__312g.html> — geöffnet. § 312g Abs. 1 BGB: „Dem Verbraucher steht bei außerhalb von Geschäftsräumen geschlossenen Verträgen und bei Fernabsatzverträgen ein Widerrufsrecht nach § 355 zu".
- Zu prüfen: Die üblichen Schritte bei Gasgeruch (Fenster öffnen, Ventil schließen, keine elektrischen Geräte schalten, draußen anrufen) ließen sich nicht mit einem amtlichen Text belegen; sie stehen im Text als „zu prüfen".

### Nr. 6 — E-Bike im Hausflur (VVB Bayern § 22)
- <https://www.gesetze-bayern.de/Content/Document/BayVVB-22> — geöffnet. Verordnung über die Verhütung von Bränden, § 22: „Zu- und Ausgänge, Durchfahrten, Durchgänge, Treppenräume und Verkehrswege, die bei einem Brand als erster oder zweiter Rettungsweg vorgesehen sind, sind freizuhalten"; „Elektrische Geräte wie Kopierer oder Verkaufsautomaten dürfen in notwendigen Treppenräumen nicht betrieben werden".
- Ebenfalls geprüft und nicht zitiert: die FAQ „Lagerung und Laden von Akkusystemen in Wohngebäuden" (Stand 01.2025) beschreibt die Brandgefahr von Lithium-Ionen-Batterien, nennt aber keine Verbotsnorm.
- Zu prüfen: Eine amtliche deutsche Statistik zu Bränden und Todesfällen durch E-Bike-Akkus ließ sich nicht belegen.

### Nr. 14 — Hepatitis B (RKI-FAQ, SGB V § 20i)
- <https://www.rki.de/SharedDocs/FAQs/DE/Impfen/HepatitisB/FAQ-Liste_HepB_Impfen.html> — geöffnet. Die STIKO „empfiehlt die Impfung gegen Hepatitis B im Erwachsenenalter besonders gefährdeten Personengruppen"; dazu zählen „Personen mit bestimmten Erkrankungen als auch solche mit erhöhtem beruflichem sowie nichtberuflichem Expositionsrisiko" (genannt: „HIV-Positive, Dialysepatienten, Kontaktpersonen zu an Hepatitis B erkrankten Personen").
  - Hinweis: Diese FAQ nennt keine Kostenerstattung; für die gesetzliche Übernahme steht § 20i SGB V (siehe unten).
- <https://www.gesetze-im-internet.de/sgb_5/__20i.html> — geöffnet. § 20i Abs. 1 SGB V: „Versicherte haben Anspruch auf Leistungen für Schutzimpfungen im Sinne des § 2 Nr. 9 des Infektionsschutzgesetzes"; der Gemeinsame Bundesausschuss bestimmt die Ausgestaltung „auf der Grundlage der Empfehlungen der Ständigen Impfkommission beim Robert Koch-Institut".
- Zu prüfen: Eine amtliche deutsche Quelle, die einheitlich für alle STIKO-Gruppen die vollständige Kostenübernahme ohne Zuzahlung belegt, wurde nicht gefunden; die Impfung ist Kassenleistung nach § 20i SGB V, die konkrete Kostenfreiheit für den Einzelnen folgt aus der Schutzimpfungs-Richtlinie.

### Nr. 16 — HPV (RKI-FAQ)
- <https://www.rki.de/SharedDocs/FAQs/DE/Impfen/HPV/FAQ-Liste_HPV_Impfen.html> — geöffnet. „Die STIKO empfiehlt die HPV-Impfung für alle Kinder ab dem Alter von 9 Jahren bis zum Alter von 14 Jahren."; „Das Nachholen der Impfung empfiehlt die STIKO für ungeimpfte Jugendliche bis zu ihrem 18. Geburtstag."; „Bis zum Alter von 14 Jahren sind für einen vollständigen Impfschutz 2 Impfdosen notwendig", „Ab dem Alter von 15 Jahren sind 3 Impfdosen für einen vollständigen Impfschutz notwendig"; „Generell werden die Kosten für alle von der STIKO empfohlenen Impfungen von der gesetzlichen Krankenkasse übernommen".

### Nr. 21 — Gürtelrose (RKI-FAQ, SGB V § 20i)
- <https://www.rki.de/SharedDocs/FAQs/DE/Herpes_zoster/FAQ_Uebersicht_HZ.htm> — geöffnet. „Die STIKO empfiehlt allen Personen ≥ 60 Jahren als Standardimpfung (S) gegen Herpes zoster und postherpetischer Neuralgie"; zusätzlich „für Personen ab 18 Jahren mit einem erhöhten Risiko an Herpes zoster zu erkranken". „Die Impfserie mit dem Herpes-zoster-Totimpfstoff besteht aus zwei Impfstoffdosen", die „intramuskulär im Abstand von mindestens 2 bis 6 Monaten verabreicht werden".
  - Hinweis: Diese FAQ nennt keine Kostenerstattung; dafür steht § 20i SGB V.
- Nachtrag Durchgang 1 (2026-09-30): Der Titel lautet jetzt „Ab 60 gegen Gürtelrose impfen lassen" und deckt sich mit der STIKO-Empfehlung ab 60 Jahren. Titelanpassung nach REQ-27; `check-refs --check` danach bestanden.

### Nr. 22 — Pneumokokken (RKI-Faktenblatt, SGB V § 20i)
- <https://www.rki.de/DE/Themen/Infektionskrankheiten/Impfen/Informationsmaterialien/Faktenblaetter-zum-Impfen/Pneumokokken.pdf?__blob=publicationFile&v=6> — geöffnet (PDF mit pdftotext in Text umgewandelt). Die Empfehlung führt „Personen ab 60 Jahren" als Impfgruppe (neben Säuglingen und Personen mit chronischen Krankheiten). Das Faktenblatt nennt keine Kostenübernahme; dafür steht § 20i SGB V.
- Nachtrag Durchgang 1 (2026-09-30): Der Titel lautet jetzt „Ab 60 gegen Pneumokokken impfen lassen" und deckt sich mit der STIKO-Empfehlung ab 60 Jahren. Titelanpassung nach REQ-27; `check-refs --check` danach bestanden.

### Nr. 25 — Telefonseelsorge
- Bundesnetzagentur (2014). Nummerierungskonzept 2014, Nummer „(0)116123", Zuordnung „Hotline zur Lebenshilfe" — geöffnet, siehe Abschnitt 16 oben. An die Stelle der chinesischen Nummer 12356 getreten.
- <https://www.berlin.de/ba-lichtenberg/politik-und-verwaltung/beauftragte/katastrophenschutz/nachrichten/artikel.1668102.php> — geöffnet (Bezirksamt Lichtenberg von Berlin, amtliche Seite des Landes Berlin). Original: „Sollten die Sorgen zu groß werden, ist die Telefonseelsorge rund um die Uhr, kostenlos und anonym für Sie da"; genannt werden „0800 111 0 111", „0800 111 0 222" und „116 123". Trägt die Nummer 0800 111 0 111 und die drei Eigenschaftsaussagen, die der Bundesnetzagentur-Text allein nicht deckt.

### Nr. 26 — Notfallausrüstung (BBK)
- <https://www.bbk.bund.de/SharedDocs/Downloads/DE/Mediathek/Publikationen/Buergerinformationen/Ratgeber/Checklisten-zur-Vorsorge-Krisen-und-Katastrophen.pdf?__blob=publicationFile&v=19> — geöffnet (PDF mit pdftotext in Text umgewandelt). Die Checkliste führt unter „Brandschutz" die Punkte „Rauchmelder", „Feuerlöscher/Feuerlöschspray", „Erste-Hilfe-Material" und „Kohlenmonoxid-Melder" sowie eine „Atemschutzmaske, zum Schutz vor Viren, Bakterien und gefährlichen Stoffen in der Luft (FFP2)".

### Nr. 31 — HIV-Test (IfSG § 19)
- <https://www.gesetze-im-internet.de/ifsg/__19.html> — geöffnet. § 19 Abs. 1 IfSG: die Gesundheitsämter bieten „bezüglich sexuell übertragbarer Krankheiten und Tuberkulose Beratung und Untersuchung" an; „Angebote können bezüglich sexuell übertragbarer Krankheiten anonym in Anspruch genommen werden" (eingeschränkt, „soweit hierdurch die Geltendmachung von Kostenerstattungsansprüchen nicht gefährdet wird").
- Zu prüfen: Eine amtliche deutsche Fundstelle für die Zahlen zum diagnostischen Fenster (1 Woche Nukleinsäuretest, 2 Wochen Antigen-Antikörper-Test der vierten Generation, 3 Wochen Antikörpertest der dritten Generation) wurde nicht gefunden; diese Zahlen stammen weiterhin vom Zentrum für Seuchenkontrolle der Provinz Guangdong und stehen im Text mit diesem Hinweis.

### Nr. 33 — Paraquat (DFG MAK)
- <https://series.publisso.de/sites/default/files/documents/series/mak/dam/Vol2025/Iss2/Doc035/mb191042e10_2ad.pdf> — geöffnet (PDF mit pdftotext in Text umgewandelt). Deutsche Forschungsgemeinschaft, MAK Value Documentation, Paraquat dichloride: „used as a herbicide but is no longer approved in the European Union."

### Nr. 36 — Strahlenquelle (StrlSchG § 12, StrlSchV § 168)
- <https://www.gesetze-im-internet.de/strlschg/__12.html> — geöffnet. § 12 StrlSchG regelt die genehmigungsbedürftigen Tätigkeiten im Umgang mit radioaktiven Stoffen (Genehmigungspflicht).
- <https://www.gesetze-im-internet.de/strlschv_2018/__168.html> — geöffnet. § 168 StrlSchV „Fund und Erlangung": Wer einen radioaktiven Stoff findet, hat dies „unverzüglich … sobald er von der Radioaktivität dieses Stoffes Kenntnis erlangt", der zuständigen Behörde (Strahlenschutzaufsicht) oder einer Polizeidienststelle mitzuteilen.
- Nachtrag Durchgang 1 (2026-09-30): Die chinesischen Mengenangaben (etwa 178.000 Strahlenquellen, 355.000 Strahlengeräte), die Klasse-I–V-Einteilung und der Fall Ningxia sind aus dem Text entfernt. An ihre Stelle treten der deutsche Rechtsrahmen (StrlSchG § 12 Genehmigungspflicht, StrlSchV § 168 Fundmeldung) und der internationale Fall Goiânia (IAEA). Eine deutsche gestufte Strahlenunfall-Klassifikation ließ sich nicht belegen — deshalb wurde nicht ersetzt, sondern die Einteilung gestrichen.

### Währungsregel (REQ-68)
- Alle Beträge in 元 sind entfallen (`grep -c 元 book/01-nicht-frueh-sterben.md` = 0). Die Preise in der Kosten-Spalte wurden auf die deutsche Preislage gerundet; sie sind weiterhin grobe Größenordnungen und keine zitierten Zahlen. Chinesische Amtsbeträge wurden entweder durch die deutsche Regel ersetzt (Nr. 6: Bußgeld entfällt) oder ganz entfernt (Nr. 34: die chinesische Krankenhauskosten- und Gesundheitsausgaben-Statistik; Nr. 36: die Geldbuße im Fall Ningxia).

## Nachtrag Durchgang 1 (2026-09-30) — chinesische Angaben im laufenden Text

Auftraggeber-Entscheidung vom 2026-09-30 zu REQ-68: keine chinesischen Angaben im laufenden Text, auch nicht mit „in China" gekennzeichnet. In den Textspalten wurden alle chinesischen Statistiken, Mengenangaben und Einteilungen entfernt; wo eine deutsche Angabe belegbar war, trat sie an die Stelle, sonst wurde die Aussage ohne Länderbezug gefasst.

### Nr. 12 — Ertrinken
- <https://www.who.int/news-room/fact-sheets/detail/drowning> — geöffnet. „Drowning is the fourth leading cause of death for children aged 1–4 years"; „the third leading cause of death for children aged 5–14 years"; „The highest drowning rates per population are among children aged 0–4 years"; „The drowning death rate among males is more than twice as high as females." Die chinesische Statistik (China CDC Weekly) ist entfallen. Eine deutsche Ertrinkungsstatistik ließ sich nicht belegen; deshalb die Angabe der Weltgesundheitsorganisation statt einer deutschen.

### Nr. 13 — Stürze
- <https://www.it.nrw/nrw-anteil-nicht-natuerlicher-todesfaelle-2024-bei-knapp-5-127981> — geöffnet (IT.NRW, Statistisches Landesamt = amtliche Stelle). „Insgesamt 4.782 Personen, darunter 2.456 Frauen und 2.326 Männer, kamen durch einen Sturz zu Tode."; „Mehr als zwei Drittel (67,1 %) der todesursächlichen Unfälle resultierten 2024 aus einem Sturz."; „Davon ereigneten sich knapp zwei Drittel im häuslichen Umfeld mit einem Durchschnittsalter der Betroffenen von 84 Jahren." Ersetzt die chinesische China-CDC-Statistik (Lu Z 2021).

### Nr. 17 — Mammografie
- <https://www.bundesgesundheitsministerium.de/service/begriffe-von-a-z/m/mammographie-screening> — geöffnet. „Mammographie-Screening (für alle Frauen von 50 bis 75 Jahren)"; ursprüngliches Programm „für Frauen zwischen 50 und 69 Jahren"; seit dem 1. Juli 2024 „Frauen im Alter von 70 bis 75 Jahren alle zwei Jahre". Ersetzt die chinesische Altersangabe („in China beginnen mit 45 Jahren").

### Nr. 25 — Telefonseelsorge
- <https://www.berlin.de/ba-lichtenberg/politik-und-verwaltung/beauftragte/katastrophenschutz/nachrichten/artikel.1668102.php> — geöffnet, siehe oben. Trägt die Nummer 0800 111 0 111 und „rund um die Uhr, kostenlos und anonym".

### Nr. 30 — Präexpositionsprophylaxe
- <https://www.gesetze-im-internet.de/ifsg/__19.html> — geöffnet. § 19 IfSG: die Gesundheitsämter bieten Beratung und Untersuchung zu sexuell übertragbaren Krankheiten an (siehe Nr. 31). Ersetzt die chinesische Stelle „Zentrum für Seuchenkontrolle" im Text.

### Entfernt ohne deutsche Entsprechung (Aussage ohne Länderbezug gefasst)
- Nr. 8: chinesische Angabe zum Diabetes-Wissen (Anmerkung).
- Nr. 12: chinesische Ertrinkungs-Statistik (China CDC Weekly).
- Nr. 14: chinesische HBsAg-Bevölkerungsstatistik (Cui F 2017); die Quelle ist aus der Quellen-Spalte entfallen.
- Nr. 34: chinesische Krankenhauskosten- und Gesundheitsausgaben-Statistik; die Quelle (Nationale Gesundheitskommission 2025) ist entfallen. Die persönliche Anekdote des Autors am Ende der Anmerkung ist gestrichen (der Eintrag trägt ohne sie).
- Nr. 36: chinesische Mengenangaben, Klasse-I–V-Einteilung, Fall Ningxia; die vier chinesischen Quellen sind entfallen.

## Nacharbeit Durchgang 2 (2026-09-30)

Zweite Nacharbeit nach den Prüfdurchgängen `review/pruefung/01-A.md` und `01-B.md` und den Auftraggeber-Entscheidungen A1–A4. Jede der folgenden Fundstellen wurde einmal geöffnet; die genannten Sätze stehen so in der Quelle.

### Nr. 7 — Bluthochdruck (DEGS1)
- <https://www.gbe-bund.de/pdf/gbe_kompakt_04_2015_hypertonie.pdf> — geöffnet. Robert Koch-Institut, GBE kompakt 4/2015 „Hoher Blutdruck: Ein Thema für alle", auf Basis von DEGS1 (2008–2011): Der Anteil der Menschen mit Bluthochdruck, deren Werte unter 140/90 mmHg lagen, stieg bei den Frauen von 25 % auf 58 %, bei den Männern von 20 % auf 45 %. Daraus folgt die Textfassung „bei etwa der Hälfte … nicht gut eingestellt".
- Die chinesische Quelle Lu J (2017, China PEACE) ist aus der Quellen-Spalte entfallen; ihre Aussage („bei den meisten nicht gut eingestellt") war die unbelegte Generalisierung aus dem Durchgang-A-Befund. Die Zahlen der Blutdruck-Metaanalyse (Ettehad 2016) bleiben unverändert.

### Nr. 8 — Nüchternblutzucker (G-BA Gesundheitsuntersuchungen)
- <https://www.g-ba.de/themen/methodenbewertung/erwachsene/gesundheitsuntersuchungen/> — geöffnet. G-BA: „Die Krankenkasse übernimmt bei erwachsenen Versicherten ab dem 18. Lebensjahr die Kosten für regelmäßige Gesundheitsuntersuchungen"; „Versicherte ab 35 Jahre: alle drei Jahre"; „Ab dem Alter von 35 Jahren wird außerdem eine Untersuchung des Urins sowie der Blutzucker- und Cholesterinwerte vorgenommen." Der Selbstzahler-Blutzucker (20 bis 30 Euro) ist damit für die angesprochene Gruppe ab 35 eine Kassenleistung; Kostenlabel `Geld=wenig → Geld=0`.

### Nr. 17 — Mammografie (BMG)
- <https://www.bundesgesundheitsministerium.de/service/begriffe-von-a-z/m/mammographie-screening> — geöffnet, siehe Durchgang 1. Titel nach REQ-69 auf „Frauen ab 50" gestellt; der Klartext nennt die deutsche Grenze (ab 50) und die Kostenübernahme durch die Kasse. Die USPSTF-Empfehlung (40 bis 74 Jahre) bleibt mit ihrer Altersangabe im Klartext und in der Nutzen-Spalte stehen. Kostenlabel `Geld=wenig → Geld=0`.
- Zu prüfen: Der Anmerkungssatz „seit 2024 werden auch Frauen bis 75 alle zwei Jahre eingeladen" nennt nur das Jahr; die BMG-Seite nennt als Datum den 1. Juli 2024. Anker in Nr. 16 von „ab 30" auf „ab 35" mitgezogen.

### Nr. 18 — Gebärmutterhalskrebs-Screening (G-BA)
- <https://www.g-ba.de/themen/methodenbewertung/erwachsene/krebsfrueherkennung/gebaermutterhalskrebs-screening/> — geöffnet. G-BA: Frauen „ab einem Alter von 20 Jahren" werden auf die Programmteilnahme hingewiesen; ab 35 Jahren alle drei Jahre kombinierter HPV-Test und Zytologie, „eine Altersobergrenze besteht nicht". Trägt die deutsche Grenze „ab 35" im Titel und die Kassenleistung; Kostenlabel `Geld=wenig → Geld=0`. Die Altersspanne der indischen Studie (30 bis 59 Jahre) bleibt in der Nutzen-Spalte.

### Nr. 19 — Darmkrebs-Screening (G-BA)
- <https://www.g-ba.de/themen/methodenbewertung/erwachsene/krebsfrueherkennung/> — geöffnet. G-BA: „Anspruchsberechtigt sind alle gesetzlich Krankenversicherten ab dem Alter von 50 Jahren"; die Früherkennung wird als organisiertes Screening angeboten. Kostenlabel `Geld=wenig → Geld=0`.
- Hinweis: Eine eigene G-BA-Unterseite „Darmkrebsfrüherkennung" gibt 404; zitiert wird deshalb die übergeordnete Seite „Früherkennung von Krebserkrankungen". Die Anmerkung beginnt weiterhin mit „Streitfall".

### Nr. 20 — Grippeimpfung (RKI, SGB V § 20i)
- <https://www.rki.de/SharedDocs/FAQs/DE/Impfen/Influenza/FAQ-Liste_gesamt.html> — geöffnet. RKI: Die STIKO empfiehlt die Impfung „für alle Personen ab 60 Jahre", für Schwangere ab dem 2. Trimenon und für Personen mit erhöhter gesundheitlicher Gefährdung. Diese FAQ nennt keine Kostenerstattung; dafür steht § 20i SGB V.
- <https://www.gesetze-im-internet.de/sgb_5/__20i.html> — geöffnet. § 20i Abs. 1 SGB V (amtliche Überschrift „Leistungen zur Verhütung übertragbarer Krankheiten"): „Versicherte haben Anspruch auf Leistungen für Schutzimpfungen im Sinne des § 2 Nr. 9 des Infektionsschutzgesetzes". Kostenlabel `Geld=wenig → Geld=0`.

### Nr. 24 — Lungenkrebs-Früherkennung (G-BA, neue Leistung)
- <https://www.g-ba.de/presse/pressemitteilungen-meldungen/1316/> — geöffnet. G-BA-Pressemitteilung vom 13. März 2026, „Lungenkrebs-Früherkennung für Raucherinnen und Raucher kommt ab April in die Versorgung": berechtigt sind „Personen zwischen 50 und 75 Jahren mit starkem Zigarettenkonsum über eine Dauer von mindestens 25 Jahren und von mindestens 15 ‚Packungsjahren'"; untersucht wird „alle 12 Monate mittels Niedrigdosis-Computertomographie (NDCT)". Deutschlands neue gesetzliche Lungenkrebs-Früherkennung belegt damit die Kassenleistung; Kostenlabel `Geld=wenig → Geld=0`. Die deutsche Einschlussgrenze weicht von der NLST-Grenze ab; im Klartext steht nur die Kassenleistung, die NLST-Zahlen (55 bis 74 Jahre, 30 Packungsjahre) bleiben unverändert.
- Hinweis: Der frühere `Zu prüfen`-Vermerk zur Kassenleistung ist damit belegt; offen bleibt allein die exakte deutsche Kostenzuordnung der Kontrolluntersuchung.

### Nr. 31 — HIV-Test (Gemeinsame Diagnostikkommission)
- <https://doi.org/10.1007/s00103-015-2174-x> — geöffnet (DOI löst zu link.springer.com auf; bibliografische Angaben über Springer/MEDLINE bestätigt). Gemeinsame Diagnostikkommission der Deutschen Vereinigung zur Bekämpfung von Viruskrankheiten (DVV) und der Gesellschaft für Virologie (GfV): „Nachweis einer Infektion mit Humanem Immundefizienzvirus (HIV): Serologisches Screening mit nachfolgender Bestätigungsdiagnostik durch Antikörper-basierte Testsysteme und/oder durch HIV-Nukleinsäure-Nachweis", Bundesgesundheitsblatt 2015; 58(8): 877–886, PMID 26115869. Grundlage für das diagnostische Fenster von 6 Wochen in der Labordiagnostik und 12 Wochen beim Schnelltest.
- Die chinesische Provinz-Quelle (Guangdong) ist aus der Quellen-Spalte entfallen; der `Zu prüfen`-Vermerk weiter oben (Nr. 31, Abschnitt „Deutsche Fundstellen") ist damit erledigt.
- Zu prüfen: Die genaue Prozentzahl für den Ausschluss einer Infektion nach drei Monaten ließ sich mit der Quelle nicht belegen; im Text steht dafür „mit sehr hoher Sicherheit".

### Nr. 36 — Strahlenquelle (IAEA RS-G-1.9)
- <https://www.iaea.org/publications/7237/categorization-of-radioactive-sources> — geöffnet. IAEA Safety Standards Series No. RS-G-1.9 „Categorization of Radioactive Sources" (2005): Einteilung radioaktiver Quellen in fünf Kategorien; Kategorie 1 ist die gefährlichste, zu ihr gehören die Bestrahlungsgeräte (Teletherapie). Ersetzt die gestrichene chinesische Klasseneinteilung im Nutzen-Text; der Fall bleibt Goiânia (IAEA 1988). Marker nach REQ-67 auf die neue Herkunft umgestellt.

### Kostenlabel nach REQ-26 — Entscheidungen
- Auf `Geld=0` geändert (Kassenleistung): Nr. 8, 16, 17, 18, 19, 20, 21, 22, 24. `Zeit`, `Willenskraft`, `Nutzen` und `Bezug` blieben unverändert; jede Labeländerung ist im `Angepasst`-Marker der Zeile genannt.
- Keine Änderung: Nr. 14 (Hepatitis B — die Kasse zahlt nur für die STIKO-Gruppen, die angesprochene Lesergruppe ist breiter; `Geld=wenig` bleibt) und Nr. 23 (Helicobacter — für das Screening ohne Beschwerden ist keine unbedingte Kassenleistung belegbar; der Text bleibt in sich stimmig).
- Alle übrigen Einträge mit Kostenangabe (Marktpreis oder Selbstzahler) behalten ihren Wert.

### Nr. 29 — Klartext-Zahl (REQ-33)
- Klartext „2 bis 3 Punkte" auf „um mehr als zwei Punkte" umgestellt; die Nutzen-Spalte trägt 2,66 und 2,40 Punkte. Marker ergänzt (`Angepasst`), Beleg = Gupta BP et al. (2011) aus der Quellen-Spalte. Die Beanstandung `check-plain --numbers` für Kapitel 01 ist damit entfallen.

### Nr. 30 — IfSG § 19 in die Quellen-Spalte nachgezogen (REQ-67)
- <https://www.gesetze-im-internet.de/ifsg/__19.html> — geöffnet. Der Marker nannte `IfSG § 19`, die Quellen-Spalte nur Giannou und Fonner; die Fundstelle steht jetzt zusätzlich in der Quellen-Spalte (deckungsgleich mit dem Marker). In Nr. 31 war der Quellentitel bereits korrekt.

### Nr. 32 — Marker nachgezogen (REQ-67)
- Die ersetzte chinesische Notrufnummer trug keinen Marker. Marker jetzt gesetzt, ohne Ziffern und ohne CJK; Beleg wie bei Nr. 25 (Bundesnetzagentur, Nummerierungskonzept; Bezirksamt Lichtenberg von Berlin). Beide Fundstellen sind zusätzlich in die Quellen-Spalte von Nr. 32 aufgenommen.

### Nr. 15 — Markerform (REQ-67)
- Außer den Beträgen war ein chinesischer Normtitel aus der Anmerkung entfernt worden; die reine Währungsform war deshalb unzulässig. Marker auf `Angepasst` umgestellt (ohne das Zeichen 元); Beleg CDC, Tetanus.

### Nr. 13 — Landesangabe (REQ-68)
- Die Statistik (häufigste Todesursache durch Verletzungen, häusliches Umfeld, Durchschnittsalter 84) stammt von IT.NRW und ist eine Angabe für Nordrhein-Westfalen. Klartext, Nutzen-Spalte und Marker nennen jetzt ausdrücklich „In Nordrhein-Westfalen" bzw. „Landesangabe Nordrhein-Westfalen". Die Cochrane-Zahlen bleiben unverändert.

### Nr. 4 und Nr. 34 — „zu prüfen" und bewusste Entscheidung
- Nr. 4: Ein festes Tauschintervall für den Herd („alle paar Jahre") ließ sich nicht mit einem amtlichen Text belegen; in der Anmerkung als „zu prüfen" vermerkt. Die belegten Aussagen (NDAV § 13, BGB § 312g) bleiben unverändert.
- Nr. 34 (Auftraggeber-Entscheidung A3): Die gestrichene Autoren-Anekdote bleibt gestrichen. Der Eintrag trägt ohne sie; die Nutzen-Zahlen sind unverändert; kein Inhaltsverlust nach REQ-20. In Nr. 34 wurde in Durchgang 2 nichts geändert.

### Titelanpassungen nach REQ-69 und Folgen
- Nr. 16: „(für Frauen ab 30)" → „(für Frauen ab 35)" im Anker, damit der Querverweis zur neuen Nr.-18-Titelzeile passt.
- Nr. 17/18/19: Titel tragen jetzt die deutsche Altersgrenze (ab 50, ab 35, ab 50). `check-refs --check` danach bestanden (Exit 0).

## Nachträgliche Korrekturen (Koordinatoren-Auftrag, 2026-09-30)

### Nr. 18 — Untersuchungsintervall (Sachfehler behoben)
- Aus der Vorlage stand in der Kosten-Zeile „Ist das Ergebnis negativ, genügt eine Untersuchung alle 5 Jahre." Das ist nicht die deutsche Regel und wurde ersetzt durch: „Ab 35 Jahren genügt alle drei Jahre die Kombination aus HPV-Test und Abstrich."
- Belegt mit der G-BA-Seite <https://www.g-ba.de/themen/methodenbewertung/erwachsene/krebsfruehherkennung/gebaermutterhalskrebs-screening/> — selbst geöffnet. Wortlaut der Seite: „Frauen ab dem Alter von 35 Jahren wird alle drei Jahre eine Kombinationsuntersuchung aus HPV-Test und zytologischer Untersuchung" angeboten; von 20 bis 34 Jahren jährlich die zytologische Untersuchung; „eine Altersobergrenze besteht nicht". Die auf derselben Seite genannten „alle fünf Jahre" betreffen nur das Anschreiben der Krankenkassen, nicht das Untersuchungsintervall.
- Die Belegstelle in der Quellen-Zeile nennt jetzt zusätzlich „alle drei Jahre die Kombination aus HPV-Test und Abstrich". Der `Angepasst`-Marker wurde um den Satz ergänzt, dass das Untersuchungsintervall der Vorlage durch die deutsche Drei-Jahres-Regel ersetzt wurde. Die Kosten-Zeile sagt weiterhin, was die Kasse zahlt und was die Leserin zu tun hat.

### Nr. 21 — Markerform (Betrag entfernt)
- Im `Angepasst`-Marker war der chinesische Selbstzahlerpreis mit Klammer genannt („chinesische Selbstzahlerpreise (3000 bis 4000 Yuan)"). Die Marker dieses Kapitels nennen sonst keine Beträge (Nr. 16 „chinesische Impfstoffpreise", Nr. 22 „chinesische Kosten- und Produktangaben"). Die Klammer mit den Zahlen wurde entfernt; der Rest des Markers (STIKO-Empfehlung ab 60 Jahren, Kostenerstattung durch die gesetzliche Krankenkasse, RKI-FAQ Impfen (Herpes zoster), Kostenlabel Geld=viel → Geld=0) bleibt unverändert. Nach REQ-67 verlangt die reine Währungsform ohnehin, dass kein Betrag genannt wird.

## Nach der unabhängigen Nachprüfung (2026-09-30)

Die Nachprüfung des Endstands (`review/pruefung/01-Nachpruefung.md`) endete mit dem Urteil
**freigabereif**: 0 kritisch, 0 wesentlich, 2 gering. Beide geringen Befunde sind behoben.

### Nr. 36 — Gerätebezeichnung im Goiânia-Fall (Sachwiderspruch behoben)
- Die Nutzen-Zeile sagte „ein **Telekobaltgerät** einer stillgelegten Klinik zerlegt, dabei wurde die
  50,8 TBq starke **Cäsium-137**-Strahlenquelle entnommen". Eine Telekobalt-Anlage führt Kobalt-60;
  eine Cäsium-137-Quelle kann darin nicht stecken — der Satz widersprach sich selbst.
- Die Vorlage sagt an dieser Stelle nur „放疗机" (Bestrahlungsgerät) und nennt weder Kobalt noch
  Cäsium; die Gerätebezeichnung stammt aus der Überarbeitung dieser Runde, nicht aus der Übersetzung.
  Sie lautet jetzt „ein **Bestrahlungsgerät** einer stillgelegten Klinik" — dasselbe Wort wie in der
  Klartext-Zeile desselben Eintrags und in der IAEA-Aussage darunter.
- Die IAEA-Publikation *The Radiological Accident in Goiânia* (Pub815, in der Quellen-Spalte genannt)
  führt den Unfall als Cäsium-137-Chlorid-Quelle aus einem stillgelegten Strahlentherapiegerät. Die
  Zahlen (50,8 TBq, 112.000 Untersuchte, 249 Kontaminierte, 129 mittel bis schwer, 4 Tote) und die
  Nutzen-Spalte sind unverändert.

### Nr. 15 — Markerwortlaut geschärft (REQ-67)
- Der Marker sagt „chinesischer Normtitel in der Anmerkung → entfernt". Entfernt wurde der
  **Klammerzusatz** mit dem chinesischen Originaltitel `[非新生儿破伤风诊疗规范]`; die Leitlinie selbst
  bleibt in der Anmerkung als Text erwähnt (im „zu prüfen"-Vermerk) und in der Quellen-Spalte mit ihrer
  Fundstelle genannt. Die Formulierung lautet jetzt „chinesischer Normtitel **in Klammern** in der
  Anmerkung → entfernt" — sonst ließe sie sich so lesen, als sei der Hinweis auf die Leitlinie ganz
  entfallen, und das stimmt nicht.

**Maschinell nach beiden Korrekturen:** `check-plain --stat` 630 Zeilen / 0 Beanstandungen ·
`check-refs --check` bestanden (622 Verweise, Exit 0) · `grep -c 元` = 0 · 0 CJK-Zeichen ·
36 Einträge · 28 `Angepasst`- und 6 `Währung`-Marker.

## Nacharbeit Durchgang 4 — die vier „zu prüfen"-Stellen und die gesperrten Volltexte (2026-09-30)

Anlass: Der Auftraggeber hat verlangt, dass keine Quelle mit gesperrtem Volltext im Eintrag bleibt, und
für die vier offenen „zu prüfen"-Vermerke (Nr. 4, 6, 15, 31) den Weg vorgegeben. Alle vier sind aufgelöst;
im Manuskript von Kapitel 01 steht kein „zu prüfen" und kein TODO mehr (`grep` leer).

### Nr. 4 — Gasgeruch belegt, feste Tauschintervalle durch das deutsche Prüfregime ersetzt
- **Gasgeruch (vorher „zu prüfen"):** belegt durch die Selbstschutzinformation „Brandfall und Gasgeruch"
  des Rheingau-Taunus-Kreises (Brand-, Katastrophenschutz und Rettungsdienst), einer amtlichen Kreisbehörde.
  Wörtlich: „Verhalten bei Gasgeruch: Räume lüften; kein offenes Feuer oder Licht; keine elektrischen
  Schalter betätigen; nicht in der Nähe des Gebäudes telefonieren; Gashaupthahn schließen; Nachbarn
  verständigen; Notruf außerhalb des Gefahrenbereichs absetzen." Die Schritte stehen jetzt kompakt in der
  Nutzen- und Klartext-Zeile, vollständig in der Anmerkung, mit Fundstelle in der Quellen-Spalte.
- **Tauschintervalle — der vermutete China-Deutschland-Unterschied bestätigt sich:** Die Vorlage nennt ein
  festes Intervall für Schlauch und Herd, weil die chinesische Verordnung über die städtische Gasversorgung
  das so vorgibt. In Deutschland schreibt **keine** Vorschrift ein Tauschdatum vor. An seine Stelle tritt
  ein Prüfregime, das im Eintrag jetzt steht und dreifach belegt ist:
  - **KÜO** § 1 Abs. 1 und Anlage 1 Nr. 3.1: Bei gasförmigen Brennstoffen ist die „raumluftabhängige
    Feuerstätte **einmal im Kalenderjahr**" zu überprüfen (Anlage 1 wörtlich geprüft).
  - **SchfHwG** § 14: „Eine Feuerstättenschau darf frühestens drei Jahre und soll spätestens fünf Jahre
    nach der letzten Feuerstättenschau durchgeführt werden."
  - **NDAV** § 13 (Verantwortung des Anschlussnehmers, Instandhaltung, eingetragenes Installations-
    unternehmen) und § 15 (Überprüfungsrecht des Netzbetreibers, Verlangen der Mängelbeseitigung).
- Titel und Kosten-Zeile sind mitgezogen, weil beide die Frist behaupteten („nach Ablauf der Frist
  tauschen", „Den Herd tauschst du alle paar Jahre"). Der Titel trägt jetzt den wirklichen Auslöser
  („bei Rissen oder sprödem Gummi") und die Prüfung durch den Schornsteinfeger. Die Empfehlung selbst ist
  unverändert; `Geld=wenig` bleibt (ein Schlauch kostet 10 bis 25 Euro). Marker nach REQ-67 ergänzt.
- Kein chinesischer Bezug im laufenden Text; das Quantifizierungsverbot bleibt gewahrt (nur „einmal im
  Kalenderjahr" und „drei bis fünf Jahre" als Prüfrhythmus, keine erfundene Zahl).

### Nr. 6 — fehlende Statistik benannt, Treppenhaus-Laden als Länderrecht
- **Statistik:** Es gibt keine amtliche deutsche Statistik zu Bränden und Todesfällen durch E-Bike-Akkus.
  Belegt durch die Kleine Anfrage mit Antwort der niedersächsischen Landesregierung, Drucksache 19/9520:
  „Der Landesregierung liegen hierzu keine belastbaren Daten vor." Der vorher als „zu prüfen" gefasste Satz
  benennt das jetzt positiv; der Marker sagt es ebenso.
- **Laden im Treppenhaus:** Ein bundesweit einheitliches Verbot gibt es nicht, Brandschutz ist Ländersache.
  Der Eintrag nennt als Beispiel Bayern: § 22 der Verordnung über die Verhütung von Bränden hält die
  Rettungswege frei und lässt in notwendigen Treppenräumen keine elektrischen Geräte zu (Fundstelle wie
  bisher in der Quellen-Spalte). Die Formulierung aus der Vorlage, die ein solches Verbot behauptete,
  bleibt damit nicht stehen — sie ist jetzt als das wiedergegeben, was sie in Deutschland ist: ein
  Länderbeispiel, nicht ein bundesweiter Satz.

### Nr. 15 — chinesische Leitlinie durch die STIKO-Tabelle ersetzt, Label auf `Geld=0` gezogen
- **Quelle ersetzt (Auftrag: „Ja, entsprechend ersetzen bitte"):** Die chinesische Behandlungsleitlinie für
  Tetanus bei Nicht-Neugeborenen (Fassung 2024, gov.cn) ist aus der Quellen-Spalte entfernt. An ihre Stelle
  tritt die **STIKO-Tabelle 9 „Tetanus-Immunprophylaxe im Verletzungsfall"** (Epidemiologisches Bulletin
  4/2026, Robert Koch-Institut, offen abrufbar; Tabelle geprüft) samt RKI-FAQ Tetanus und SGB V § 20i.
  Die CDC-Quelle bleibt.
- **Der „zu prüfen"-TODO ist durch die deutsche Entscheidungsregel ersetzt** (Tabelle 9 wörtlich geprüft):
  Bei **sauberen, geringfügigen Wunden** gilt die 10-Jahres-Grenze; bei **allen anderen Wunden** — tief,
  verschmutzt, zertrümmert, mit Fremdkörper, Stich-, Riss-, Quetsch-, Bisswunden — die 5-Jahres-Grenze.
  Wer **weniger als drei Impfungen** bekommen hat oder den Impfstand nicht kennt, wird geimpft, bei den
  anderen Wunden zusätzlich mit Immunglobulin (TIG). Die Wundklassifikation ist damit belegt, statt auf
  einen unlesbaren PDF-Anhang der chinesischen Leitlinie zu verweisen.
- **Labeländerung `Geld=wenig` → `Geld=0` (REQ-26), hier begründet:** Die Kosten-Zeile sagte „Anmeldung
  und Wundversorgung kosten ein paar Dutzend Euro … Impfstoff oder Immunglobulin ein paar Dutzend bis ein
  paar Hundert Euro" und der Klartext „kostet nur ein paar Dutzend Euro". Das beschreibt die chinesische
  Selbstzahler-Situation, nicht die deutsche: Wundversorgung ist Leistung der gesetzlichen Krankenkasse,
  und Schutzimpfungen nach den Empfehlungen der STIKO — dazu gehört die Tetanusprophylaxe im Verletzungs-
  fall — sind nach § 20i SGB V eine Pflichtleistung (Tabelle 9, Fußnote e, verweist für Arbeitsunfälle
  zusätzlich auf die Kostenübernahme durch die DGUV). Ein Label `Geld=wenig` über einem Klartext, der die
  Kasse nennt, wäre der Widerspruch, den REQ-26 verbietet; deshalb steht das Label jetzt auf `Geld=0` —
  dieselbe Behandlung wie Nr. 8, 14, 16, 17, 18, 19, 20, 21, 22, 24. Kosten- und Klartext-Zeile sind
  entsprechend umgeschrieben („Für Kassenpatienten kostet die Behandlung am selben Tag nichts"), die
  Nutzen-Spalte um den Satz zur Krankenversicherungsleistung ergänzt, damit der Klartext eine Zeile hat,
  auf die er sich stützt. `Zeit`, `Willenskraft`, `Nutzen`, `Bezug` und die Evidenzstufe B unverändert;
  die Zahl „1 von 10" und die CDC-Quelle unangetastet. Der Marker nennt die Änderung mit Beleg.

### Nr. 31 — Springer-Volltext durch die offene RKI-Fassung ersetzt, Drei-Monats-Satz korrigiert
- **Sperrung behoben:** Der zitierte Aufsatz der Gemeinsamen Diagnostikkommission DVV/GfV
  (Bundesgesundheitsblatt 58(8), 877–886, 2015) stand in der Quellen-Spalte nur als Springer-DOI
  (10.1007/s00103-015-2174-x) und war hinter dem Login. Der **Volltext ist offen auf edoc.rki.de**
  abrufbar; die Quellen-Spalte nennt jetzt die RKI-Fassung <https://edoc.rki.de/handle/176904/302>
  (die Publikation liegt dort als PDF, 911 KB, abgerufen und gelesen). Der DOI entfällt, der Aufsatz und
  seine Aussage bleiben derselbe. Damit ist auch der letzte „nicht geprüft"-Punkt dieses Kapitels
  geschlossen.
- **Sachliche Korrektur (die frühere Lesart war falsch):** Der Satz „Sind seit der letzten Risikosituation
  drei Monate vergangen, lässt sich eine Infektion mit sehr hoher Sicherheit ausschließen" stand so nicht
  in der Quelle. Die Stellungnahme sagt allgemein (Tabelle D-1, wörtlich): „Das negative Ergebnis im
  HIV-Antigen-/Antikörper-Screeningtest schließt eine HIV-Infektion mit hoher Wahrscheinlichkeit aus, wenn
  die letzte potenzielle HIV-Exposition länger als 6 Wochen zurückliegt"; bei Testsystemen der 3. Generation
  und Schnelltests liegt die Grenze bei 12 Wochen. Die **„drei Monate"** gelten nur in einer eng umrissenen
  Sonderkonstellation: „Bei wiederholt isolierter Reaktivität im HIV-1-Immunoblot jeweils nur gegen gp160,
  gp120, p32 oder p24 ist nach drei Monaten auf Grund des zeitlichen Verlaufs eine HIV-1-Infektion auch mit
  einer seltenen Virusvariante mit hoher Sicherheit ausgeschlossen, wenn zusätzlich die HIV-1-NAT …
  überprüft werden." Die Anmerkung gibt das jetzt so wieder.
- Der Satz „Zu prüfen: Die genaue Prozentzahl für den Ausschluss nach drei Monaten ließ sich mit der
  amtlichen Quelle nicht belegen" ist **gestrichen, nicht ersetzt**: Die 99,99 % waren Inhalt der Vorlage
  (Provinz Guangdong), nicht der amtlichen deutschen Quelle; eine deutsche Zahl gibt es dazu nicht, und
  ohne Beleg wird sie nicht geschrieben (Regel „Zahlen müssen sich im Original finden lassen").

### Nr. 36 — IAEA-Leitfaden offen verlinkt (die 402 war ein Artefakt)
- Die Quellen-Spalte nannte zum Leitfaden „Categorization of Radioactive Sources" (RS-G-1.9) nur die
  IAEA-Landingpage, während der Volltext beim ersten Abruf mit HTTP 402 zurückkam. Der Leitfaden liegt
  offen unter <https://www-pub.iaea.org/MTCD/publications/PDF/Pub1227_web.pdf> (abgerufen, 574 KB,
  fünf Kategorien, Kategorie 1 am gefährlichsten, Bestrahlungsgeräte darin). Der Link ist jetzt der
  Volltext; damit entfällt auch der letzte „nicht geprüft"-Punkt.

### Quellenlage nach Durchgang 4
- Alle Quellen dieses Kapitels sind ohne Anmeldung abrufbar; keine gesperrte Fundstelle bleibt.
  Abgerufen und gelesen wurden in diesem Durchgang: RKI-edoc-PDF des DVV/GfV-Aufsatzes (911 KB),
  Epidemiologisches Bulletin 4/2026 (1,5 MB, Tabelle 9), KÜO Anlage 1 (Wortlaut), SchfHwG § 14,
  NDAV § 13/§ 15, Niedersächsische Landtagsdrucksache 19/9520 (26 KB) und die IAEA-Pub1227 (574 KB).
- **Maschinell nach Durchgang 4:** `check-plain --stat` 630 Zeilen / 0 Beanstandungen · `check-plain
  --numbers` führt Kapitel 01 nicht · `check-refs --check` bestanden (622 Verweise, Exit 0) ·
  `grep -c 元` = 0 · 0 CJK-Zeichen · 36 Einträge · 28 `Angepasst`- und 6 `Währung`-Marker ·
  kein „zu prüfen"/TODO mehr in der Datei.
- Offen bleibt in Kapitel 01 nichts mehr; die drei „Manuell zu klären"-Zeilen der Verweisprüfung liegen
  unverändert in `book/31-wege-nach-achtzehn.md` und gehören nicht zu diesem Kapitel.

## Nacharbeit Durchgang 5 — die fünf Befunde der unabhängigen Nachprüfung (2026-09-30)

Die unabhängige Nachprüfung der Einträge Nr. 4, 6, 15, 31 und 36 (frischer Kontext, Durchgang A
fachlich, Durchgang B Buchvorgaben) ergab fünf Befunde — einen wesentlichen und vier geringe; Durchgang B
fand nichts. Jeder Befund wurde an der Quelle nachgeprüft, bevor etwas geändert wurde. Drei sind
berichtigt, einer ist begründet abgelehnt.

### Nr. 36 — Goiânia-Zahlen an die zitierte Primärquelle angeglichen (wesentlicher Befund)
- **Bisheriger Text (Nutzen):** „…davon waren 249 innerlich oder äußerlich kontaminiert. Von diesen galten
  129 als mittel bis schwer kontaminiert, 50 brauchten engmaschige ärztliche Überwachung."
- **Zitierte IAEA-Quelle, wörtlich** (IAEA (1988). The Radiological Accident in Goiânia, Annex): „In total,
  some 112 000 persons were monitored, of whom 249 were contaminated either internally or externally." ·
  „Of these, 129 people exhibited **both internal and external** contamination." · „Of this last group,
  **49** people were admitted to hospital. Of these 49, **20** casualties needed intensive medical care."
  Vier Patienten starben, einem musste der Unterarm amputiert werden.
- **Herkunft des Fehlers:** Die Zahlen 50,8 TBq · 129 „中度至重度污染" · 50 „密切医学监护" stehen
  unverändert in der chinesischen Vorlage; der deutsche Text hatte sie treu übernommen. Da der Eintrag die
  IAEA-Pub815 selbst zitiert, widersprach er seiner eigenen Fundstelle — Verstoß gegen die Nachweispflicht.
- **Jetzt:** „dabei wurde die **50,9 TBq** starke Cäsium-137-Strahlenquelle entnommen … Bei 129 Menschen
  kam beides zusammen. **49** von ihnen kamen ins Krankenhaus, **20** brauchten Intensivpflege. Am Ende
  starben 4 Menschen." Die Zahl der Todesfälle (4) und die 112.000 / 249 bleiben unverändert.
- **Kennzeichnung:** Der `Angepasst`-Marker ist der Zielrichtung nach Deutschland vorbehalten und bleibt
  unangetastet; die Korrektur ist hier und in `review/pruefung/01-Nachpruefung.md` belegt. Sie ändert eine
  Nutzen-Zahl und weicht damit von der Regel „die Zahlen der Nutzen-Spalte bleiben unberührt" ab — der
  Grund ist die Nachweispflicht, und die Änderung ist auf Wunsch umkehrbar.

### Nr. 36 — zweiter Zahlenwert im selben Satz (geringer Befund)
- „50,8 TBq" → **„50,9 TBq"**. IAEA Pub815 nennt den Wert dreimal einheitlich: „known radioactivity of the
  caesium chloride source before the accident of **50.9 TBq (1375 Ci)**" und in der Gerätetabelle
  „Radioactivity 50.9 TBq (1375 Ci)". Die 50,8 stammt ebenfalls aus der Vorlage.

### Nr. 4 — BGB § 312g wörtlich zitiert (geringer Befund)
- Zitat war „…ein Widerrufsrecht **nach** § 355 zu"; der amtliche Wortlaut lautet „…ein Widerrufsrecht
  **gemäß** § 355 zu" (<https://www.gesetze-im-internet.de/bgb/__312g.html>, abgerufen). In der
  Quellen-Spalte steht der Gesetzeswortlaut wörtlich, deshalb berichtigt. (Die Regel „Schriftsprache durch
  Umgangssprache" gilt für den Fließtext, nicht für Gesetzeszitate in der Quellen-Spalte.)

### Nr. 15 — amtliche Überschrift des § 20i SGB V (geringer Befund)
- Zitiert war „§ 20i **Schutzimpfungen**". Die amtliche Überschrift lautet „**Leistungen zur Verhütung
  übertragbarer Krankheiten, Verordnungsermächtigung**"; Abs. 1 gewährt den Anspruch auf Schutzimpfungen
  (<https://www.gesetze-im-internet.de/sgb_5/__20i.html>, abgerufen). Berichtigt. Die Marker-Zeile nennt
  nur „SGB V § 20i" und ist davon nicht betroffen.

### Nr. 4 — Preisangabe des Gasschlauchs: kein Befund
- Die Nachprüfung fragte nach einem Beleg für „Ein neuer Gasschlauch kostet 10 bis 25 Euro". Die
  Kosten-Spalte ist im ganzen Buch eine Schätzung des Autors, keine zitierte Aussage — Helm (Nr. 2),
  Rauchmelder (Nr. 3), Blutdruckmessgerät (Nr. 8) und alle übrigen Preiszeilen tragen ebenso keine Quelle.
  Quellen belegen Aussagen, nicht Listenpreise. Bewusst unverändert gelassen.

### Maschinell nach Durchgang 5
- `check-plain --stat` 630 Klartext-Zeilen / 0 Beanstandungen (Länge 0, Satzlänge 0, Jargon 0, neuezahl 0,
  Leerformel 0) · `check-plain --numbers` führt Kapitel 01 nicht · `check-refs --check` bestanden
  (622 Verweise, Exit 0) · `grep -c 元` = 0 · 0 CJK-Zeichen · 36 Einträge. Unverändert offen: die
  „Manuell zu klären"-Zeile zu `book/31-wege-nach-achtzehn.md:150` gehört nicht zu diesem Kapitel.
