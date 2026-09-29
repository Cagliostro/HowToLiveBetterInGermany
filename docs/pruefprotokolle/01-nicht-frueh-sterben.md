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
- <https://www.gov.cn/zhengce/zhengceku/202412/content_6994470.htm> — geöffnet. Titel „Bekanntmachung der Nationalen Gesundheitskommission über die Verwendung der landesweit einheitlichen Telefonnummer ‚12356' für psychosoziale Beratungshilfe [国家卫生健康委关于应用"12356"全国统一心理援助热线电话号码的通知]", 国卫医政函〔2024〕259 号, 2024-12-06.
  - Original: „Als landesweit einheitliche Telefonnummer für die psychosoziale Beratungshilfe wird ‚12356' eingerichtet"; „täglich werden mindestens 18 Stunden psychosoziale Beratung angeboten"; „sicherstellen, dass bis zum 1. Mai 2025, 0 Uhr, die Nummer ‚12356' einen Anschluss an die psychosoziale Beratungshotline herstellt"
  - Der Originallink auf nhc.gov.cn gibt 412 zurück; stattdessen wird dieselbe Datei aus der Politikdatenbank des Staatsrats zitiert.

## Nicht bestätigt / nicht verwendet
- Die NHTSA-Webseiten nhtsa.gov/risky-driving/seat-belts, car-seats-and-booster-seats: 403, nicht bestätigt, stattdessen das offizielle PDF von crashstats verwendet.
- NFPA-Bericht zu Rauchmeldern: nicht bestätigt, nicht zitiert.
- WHO Global status report on road safety 2023, Länderprofil China (PDF): 404, nicht bestätigt; für die Straßenverkehrstoten in China wird stattdessen die GHO-API verwendet.
- WHO-Factsheet zum Ertrinken (geöffnet, Fassung vom 2026-05-01): keine Zahlen zu China, nicht zitiert; „around 300 000 annual drowning deaths worldwide" wurde nicht verwendet.
- Die Studienskalenzahlen in der Nutzen-Spalte (Ettehad 123 Studien/613,815 Personen, Sherrington 108 Studien/23,407 Personen, Lei 1,672,983 Personen, IAMI 2571 Personen) wurden in der zweiten Runde des Europe-PMC-Abrufs Wort für Wort geprüft, siehe die jeweiligen Originalstellen.
- Die Preise in der Kosten-Spalte (Helm, Melder, Impfungen, Untersuchungsgebühren usw.) sind grobe Schätzungen des Autors nach Marktpreis, sie sind keine zitierten Zahlen und wurden nicht geprüft.
