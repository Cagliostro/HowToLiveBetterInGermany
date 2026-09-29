# Querverweis-Abgleich

Diese Datei wird von `node tools/check-refs.mjs` erzeugt, nicht von Hand ändern.

Ein Verweis im Text merkt sich nur die Nummer, nicht den Inhalt. Werden Einträge eingefügt
oder gelöscht, verschieben sich alle folgenden Verweise — und die verschobene Nummer liegt
meist noch im gültigen Bereich, eine reine Bereichsprüfung findet nichts. Deshalb steht hier
zu jedem Verweis der **Titel, den er tatsächlich trifft**, und die Datei liegt im Repo: nach
einer Änderung neu erzeugen, und im `git diff` ist jede Stelle verdächtig, an der die Nummer
gleich geblieben und der Titel gewandert ist.

Suchbereich: der Eintragstext und der Abschnittskopf jedes Abschnitts unter `book/`, dazu die
Langtexte unter `docs/`. Im Langtext gibt es kein «dieser Abschnitt», eine nackte «Nr. N» gilt
dort als Normstelle und wird übersprungen; Langtext-Verweise müssen also «Abschnitt N, Nr. M»
ausschreiben. In der Spalte «Fundstelle» steht beim Eintrag «Nr. N», im Abschnittskopf
«Abschnittskopf», im Langtext die letzte Zwischenüberschrift.

Die zweite Absicherung ist der **Anker**: im Umfeld jedes Verweises muss ein Wort stehen, das
auch im Titel des Zieleintrags vorkommt («medizinische Hilfe siehe Nr. 11» — «medizinische
Hilfe» ist der Anker), oder es wird ausdrücklich als «siehe Nr. 16 (Darlehen und Bürgschaft)»
geschrieben. `node tools/check-refs.mjs --check` wertet einen Verweis ohne Anker als Fehler:
rutscht er, ist das im Tabellen-Diff nicht zu sehen, nur der Anker fängt ihn. Bereichsverweise
(«siehe Abschnitt 8, Nr. 11 bis 14») sind die Ausnahme: sie meinen einen ganzen Block von
Einträgen, für den sich nicht für jede Nummer ein Anker setzen lässt; hier trägt allein der
Diff.

Ob ein Anker zählt, hängt von Länge und Abstand ab: die längste Buchstabenfolge, die sowohl im
weiten Fenster als auch im Titel steht, muss mindestens 8 Zeichen lang sein, oder mindestens 6
Zeichen innerhalb der Teilstrecke, in der der Verweis steht. Kurze Allerweltswörter wie «Zeit»
oder «Geld», die nur außerhalb der Teilstrecke zufällig treffen, gelten nicht als Anker.
Diese zweite Stufe wurde am 2026-09-20 nachgeschärft: beim Einfügen in Abschnitt 31 war der
Verweis «… des Darlehens siehe Nr. 15 dieses Abschnitts» auf den neuen Eintrag «… Steuer
selbst erklären» verrutscht, und ein zwei Teilstrecken entferntes «Sie zahlen selbst» hatte
den Anker gespielt; `--check` meldete damals «bestanden».

Insgesamt 96 Verweise.

## 01-nicht-frueh-sterben

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 16 | Abschnitt 1, Nr. 18 | Frauen ab 30 zum Gebärmutterhalskrebs-Screening, vorrangig HPV-Test | … zum Gebärmutterhalskrebs-Screening gehen, die Impfung ersetzt das Screening nicht, siehe … |
| Nr. 25 | Abschnitt 1, Nr. 32 | Wenn ein Suizidgedanke aufkommt, sag es zuerst einer Person in deiner Nähe und gib diese paar Minuten aus der Hand | …Die Daten zu diesem Zeitmaßstab und die langfristigen Folgen nach einem Versuch stehen in … |
| Nr. 25 | Abschnitt 1, Nr. 33 | „Gerettet" ist keine Absicherung: nach einer Vergiftung mit Pflanzenschutzmitteln oder Kohlenmonoxid rettet die Notaufnahme das Leben, nicht Lunge und Gehirn | … Was nach einer Rettung zurückbleibt, steht in … |
| Nr. 26 | Abschnitt 13, Nr. 12 | 大出血先用手死死压住伤口，四肢压不住就上止血带，同时打 120 | … Die Anwendung eines Tourniquets siehe … |
| Nr. 26 | Abschnitt 1, Nr. 3 | Rauchmelder einbauen; wer im Winter drinnen Kohle verbrennt oder mit Gas heizt, dazu einen Kohlenmonoxidmelder | … Rauchmelder und Kohlenmonoxidmelder siehe … |
| Nr. 28 | Abschnitt 1, Nr. 7 | Blutdruck messen, bei hohem Wert mit Medikamenten auf den Zielwert senken | … Zu untersuchen ist dasselbe wie in … |
| Nr. 28 | Abschnitt 1, Nr. 8 | Ab 35 mit Übergewicht einmal den Nüchternblutzucker messen lassen, auch bei normalem Wert alle drei Jahre wieder | … Zu untersuchen ist dasselbe wie in … |
| Nr. 28 | Abschnitt 1, Nr. 29 | Abnehmen, Rauchen aufhören, Blutdruck und Blutzucker in den Griff bekommen, dann bessert sich die erektile Funktion | … Wie du es besserst, steht in … |
| Nr. 28 | Abschnitt 1, Nr. 27 | Sichtbares Blut im Urin, auch ohne Schmerzen und auch wenn es am nächsten Tag weg ist, einmal abklären lassen | … Bei … |
| Nr. 29 | Abschnitt 2, Nr. 1 | Raucherentwöhnung, je früher, desto besser | … Rauchen aufhören siehe … |
| Nr. 29 | Abschnitt 2, Nr. 33 | Den BMI zwischen 20 und 25 halten und bei Übergewicht abnehmen | …ören siehe Abschnitt 2, Nr. 1 (Rauchen aufhören, je früher, desto besser), Abnehmen siehe … |
| Nr. 29 | Abschnitt 28, Nr. 4 | 不要买承诺「快速瘦」的减肥药、减肥咖啡、瘦身糖果和酵素梅 | …n solche Wirkstoffe oft heimlich bei, in unbekannter Dosis, wie du sie erkennst, steht in … |
| Nr. 29 | Abschnitt 1, Nr. 7 | Blutdruck messen, bei hohem Wert mit Medikamenten auf den Zielwert senken | …üher, desto besser), Abnehmen siehe  (den BMI zwischen 20 und 25 halten), Blutdruck siehe … |
| Nr. 32 | Abschnitt 3, Nr. 19 | Wenn du niedergeschlagen bist, tu zuerst die Dinge mit dem besten Kosten-Nutzen-Verhältnis: in Bewegung kommen, Sonnenlicht tanken, rechtzeitig schlafen, mit jemandem reden, 12356 anrufen | … Die ersten Schritte bei gedrückter Stimmung siehe … |
| Nr. 32 | Abschnitt 8, Nr. 15 | 身边人说出「谁也别想好过」「带着孩子一起走」，别当气话：近亲属可以直接送诊，公安接到报警也必须管 | … Was du tun kannst, wenn jemand in deiner Nähe solche Gedanken zeigt, siehe … |
| Nr. 32 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die 12356 anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Das Entfernen tödlicher Mittel und die 12356 siehe … |
| Nr. 32 | Abschnitt 1, Nr. 33 | „Gerettet" ist keine Absicherung: nach einer Vergiftung mit Pflanzenschutzmitteln oder Kohlenmonoxid rettet die Notaufnahme das Leben, nicht Lunge und Gehirn | … Die Folgen nach einer Rettung siehe … |
| Nr. 33 | Abschnitt 13, Nr. 19 | 一氧化碳报警器响了，或者一屋子人同时头痛恶心，先出门再打电话 | … Das Vorgehen vor Ort bei Kohlenmonoxid siehe … |
| Nr. 33 | Abschnitt 13, Nr. 20 | 误服清洁剂、农药、药物先别催吐，带上瓶子立刻就医；溅到眼睛或皮肤用大量清水冲 15 分钟 | … erst nicht zum Erbrechen bringen, mit der Flasche ins Krankenhaus, siehe … |
| Nr. 33 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die 12356 anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Pflanzenschutzmittel und Schlafmittel nicht zu Hause horten, siehe … |
| Nr. 34 | Abschnitt 17, Nr. 8 | 家里有人长期卧床，把压疮当头号敌人：上电动气垫床、定时翻身、每天看一遍骨头突出的地方 | … Der wichtigste Punkt bei langer Bettlägerigkeit, der Dekubitus, siehe … |
| Nr. 34 | Abschnitt 13, Nr. 11 | 一条腿突然肿起来、发紧、按着疼，尽快就医；再加上突然喘不上气或者胸痛，立刻打 120 | … Tiefe Venenthrombose und Lungenembolie siehe … |
| Nr. 34 | Abschnitt 1, Nr. 32 | Wenn ein Suizidgedanke aufkommt, sag es zuerst einer Person in deiner Nähe und gib diese paar Minuten aus der Hand | … Was tun, wenn der Gedanke aufkommt, siehe … |
| Nr. 34 | Abschnitt 1, Nr. 33 | „Gerettet" ist keine Absicherung: nach einer Vergiftung mit Pflanzenschutzmitteln oder Kohlenmonoxid rettet die Notaufnahme das Leben, nicht Lunge und Gehirn | … Die Folgen einer Vergiftung siehe … |
| Nr. 35 | Abschnitt 9, Nr. 22 | 不卖自己的器官，也别帮人找供体：肾到手 2 万多，同一枚转手卖 20 万，钱要被没收还要按交易额罚 10 到 20 倍 | …nkung auf Angehörige bei einer legalen Spende, die Geldstrafen und die Strafbarkeit siehe … |
| Nr. 35 | Abschnitt 16, Nr. 1 | 药按医嘱吃满，别感觉好了就停 | … Wer schon dialysiert werden muss, für den siehe … |
| Nr. 35 | Abschnitt 16, Nr. 2 | 先办门诊慢特病认定再办异地备案，高血压、糖尿病、放化疗、透析、抗排异就能异地直接结算 | … Wer schon dialysiert werden muss, für den siehe … |

## 02-nicht-langsam-sterben

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 1 | Abschnitt 2, Nr. 3 | Raucherentwöhnung nicht nur mit Aushalten, sondern zuerst Medikamente holen: die Erfolgsquote mehr als verdoppeln | … … |
| Nr. 1 | Abschnitt 2, Nr. 4 | Einen Tag zum Aufhören festlegen und an dem Tag auf einen Schlag aufhören, nicht erst langsam reduzieren | … Nr. 3 (Raucherentwöhnungsmittel), … |
| Nr. 1 | Abschnitt 2, Nr. 5 | Zur Raucherentwöhnungsambulanz gehen oder 12320 anrufen und fragen, ob es vor Ort Angebote gibt | … Nr. 3 (Raucherentwöhnungsmittel), Nr. 4 (einen Tag zum Aufhören festlegen), … |
| Nr. 1 | Abschnitt 2, Nr. 6 | E-Zigarette erst erwägen, wenn du anders nicht loskommst; wer nie geraucht hat, lässt sie bleiben | …ngsmittel), Nr. 4 (einen Tag zum Aufhören festlegen), Nr. 5 (Raucherentwöhnungsambulanz), … |
| Nr. 2 | Abschnitt 2, Nr. 1 | Raucherentwöhnung, je früher, desto besser | … Wie du selbst aufhörst, steht in … |
| Nr. 3 | Abschnitt 2, Nr. 4 | Einen Tag zum Aufhören festlegen und an dem Tag auf einen Schlag aufhören, nicht erst langsam reduzieren | … Kombiniere es deshalb mit … |
| Nr. 3 | Abschnitt 2, Nr. 5 | Zur Raucherentwöhnungsambulanz gehen oder 12320 anrufen und fragen, ob es vor Ort Angebote gibt | … Kombiniere es deshalb mit Nr. 4 (einen Tag zum Aufhören festlegen) und … |
| Nr. 5 | Abschnitt 2, Nr. 3 | Raucherentwöhnung nicht nur mit Aushalten, sondern zuerst Medikamente holen: die Erfolgsquote mehr als verdoppeln | … Welche Medikamente dazu gehören, steht in … |
| Nr. 6 | Abschnitt 22, Nr. 4 | 不吃陌生人给的糖和零食，不喝离开过视线的饮料，不接别人递的烟弹 | …uch „Kopf-hoch-E-Zigaretten" mit beigemischtem synthetischem Cannabinoid in Umlauf, siehe … |
| Nr. 6 | Abschnitt 2, Nr. 3 | Raucherentwöhnung nicht nur mit Aushalten, sondern zuerst Medikamente holen: die Erfolgsquote mehr als verdoppeln | … Von der Reihenfolge her probiere zuerst … |
| Nr. 11 | Abschnitt 2, Nr. 14 | Wöchentlich insgesamt 150–300 Minuten mäßig intensive Bewegung, zügiges Gehen genügt | … Dieser Eintrag und … |
| Nr. 13 | Abschnitt 2, Nr. 39 | Nach einer durchwachten Nacht in der nächsten Nacht den Schlaf nachholen, nicht bis zum Wochenende aufschieben | … Wie du nach durchwachten Nächten aufholst, steht in … |
| Nr. 14 | Abschnitt 2, Nr. 11 | Täglich 7000–8000 Schritte gehen | … Von diesem Eintrag und … |
| Nr. 20 | Abschnitt 2, Nr. 22 | Wer weniger trinken will, zählt zuerst, wie viel er in einer Woche trinkt, und spricht dann ein paar Minuten mit dem Arzt | … Wie du weniger trinken kannst, steht in … |
| Nr. 20 | Abschnitt 2, Nr. 21 | Wer täglich trinkt und beim Absetzen zittert und Herzrasen bekommt, setzt nicht selbst ab | … Wer täglich trinkt, darf nicht selbst hart absetzen, siehe … |
| Nr. 21 | Abschnitt 2, Nr. 20 | Wenig oder gar keinen Alkohol trinken | … Wie viel Trinken pro Woche viel ist, steht in … |
| Nr. 21 | Abschnitt 2, Nr. 22 | Wer weniger trinken will, zählt zuerst, wie viel er in einer Woche trinkt, und spricht dann ein paar Minuten mit dem Arzt | … wie du weniger trinken kannst, in … |
| Nr. 22 | Abschnitt 2, Nr. 21 | Wer täglich trinkt und beim Absetzen zittert und Herzrasen bekommt, setzt nicht selbst ab | … Wer schon Entzugserscheinungen hat, siehe … |
| Nr. 29 | Abschnitt 2, Nr. 7 | Keine zuckergesüßten Getränke; die Umstellung auf zuckerfrei löst das Problem auch nicht | …tens überschneidet sie sich stark mit zuckergesüßten Getränken und verarbeitetem Fleisch (… |
| Nr. 29 | Abschnitt 2, Nr. 19 | Weniger verarbeitetes Fleisch (Schinken, Speck, Wurst, Corned Beef) | …tens überschneidet sie sich stark mit zuckergesüßten Getränken und verarbeitetem Fleisch (… |
| Nr. 29 | Abschnitt 2, Nr. 7 | Keine zuckergesüßten Getränke; die Umstellung auf zuckerfrei löst das Problem auch nicht | … Schaff also zuerst … |
| Nr. 29 | Abschnitt 2, Nr. 19 | Weniger verarbeitetes Fleisch (Schinken, Speck, Wurst, Corned Beef) | … Schaff also zuerst … |
| Nr. 33 | Abschnitt 6, Nr. 26 | 不要指望吃早餐或 16:8 轻断食帮你控制体重，吃饭时间挑你能长期坚持的 | …8-Kurzzeitfasten bringen keinen zusätzlichen Vorteil, siehe … |
| Nr. 38 | Abschnitt 3, Nr. 11 | Schlaf am Nachmittag bei Müdigkeit 10 Minuten, nicht eine halbe Stunde | … Wie kurzer Mittagsschlaf erfrischt, steht in … |
| Nr. 38 | Abschnitt 2, Nr. 13 | Etwa 7 Stunden pro Nacht schlafen, feste Schlafenszeiten | … Wie lange du nachts schläfst, in … |
| Nr. 39 | Abschnitt 3, Nr. 2 | Steh zu einer festen Zeit auf, auch am Wochenende | … Den Eintrag zum auch am Wochenende festen Aufstehen findest du in … |
| Nr. 39 | Abschnitt 2, Nr. 13 | Etwa 7 Stunden pro Nacht schlafen, feste Schlafenszeiten | … er hängt selbst mit Herz-Kreislauf-Erkrankungen zusammen, siehe … |
| Nr. 40 | Abschnitt 2, Nr. 1 | Raucherentwöhnung, je früher, desto besser | … Raucherentwöhnung siehe … |
| Nr. 40 | Abschnitt 2, Nr. 12 | Bei Bluthochdruck und hohen Blutfetten die Medikamente nach ärztlicher Anweisung regelmäßig nehmen, nicht selbst absetzen | …sem Abschnitt (Raucherentwöhnung, je früher, desto besser), Blutdruck und Blutfette siehe … |
| Nr. 40 | Abschnitt 2, Nr. 39 | Nach einer durchwachten Nacht in der nächsten Nacht den Schlaf nachholen, nicht bis zum Wochenende aufschieben | … Medikamente regelmäßig nehmen), wie du den Schlaf nach der Nachtschicht nachholst, siehe … |

## 03-keine-energie-verschwenden

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Abschnittskopf | Abschnitt 3, Nr. 20 | Behandle Polizisten, Ärzte und Schalterangestellte als Menschen, die nach Regeln arbeiten, nicht als Rollen: Was Dinge voranbringt, sind Papiere und Fristen, nicht Gefühle | … … |
| Abschnittskopf | Abschnitt 3, Nr. 15 | Behandle Gedanken wie „es wird sicher schlimmer" als Symptom, nicht als Tatsache | … … |
| Abschnittskopf | Abschnitt 3, Nr. 23 | Behandle den Gedanken „andere verlangen von mir Perfektion" als Symptom, nicht als Tatsache | … Nr. 15 (Gedanken wie „es wird sicher schlimmer" als Symptom sehen) und … |
| Nr. 2 | Abschnitt 2, Nr. 39 | Nach einer durchwachten Nacht in der nächsten Nacht den Schlaf nachholen, nicht bis zum Wochenende aufschieben | … Wie du nach gelegentlichem Wachbleiben aufholst, siehe … |
| Nr. 4 | Abschnitt 3, Nr. 3 | Schlaf jede Nacht 7 bis 8 Stunden und halte 6 Stunden nicht für genug | … Was du durch weniger Koffein zurückbekommst, ist Schlafdauer, und das addiert sich zu … |
| Nr. 6 | Abschnitt 3, Nr. 1 | Schalte unnötige Benachrichtigungen aus und leg das Handy bei der Arbeit aus dem Blickfeld | … Bei der zweiten hilft nur, sie zusammen mit … |
| Nr. 6 | Abschnitt 3, Nr. 5 | Bearbeite E-Mails und Nachrichten nur ein paar feste Male am Tag im Stapel | …r zweiten hilft nur, sie zusammen mit Nr. 1 (unnötige Benachrichtigungen ausschalten) und … |
| Nr. 9 | Abschnitt 3, Nr. 3 | Schlaf jede Nacht 7 bis 8 Stunden und halte 6 Stunden nicht für genug | … Was zu wenig Schlaf selbst kostet, siehe … |
| Nr. 11 | Abschnitt 2, Nr. 38 | Den Mittagsschlaf auf eine halbe Stunde begrenzen, nicht über eine Stunde, und wenn du unbedingt ein bis zwei Stunden brauchst, die Ursache abklären lassen | …n mit höherer Sterblichkeit und höherem Risiko für koronare Herzkrankheit zusammen, siehe … |
| Nr. 19 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die 12356 anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … ruf zuerst 12356 an (siehe … |
| Nr. 20 | Abschnitt 8, Nr. 39 | 报警当场要受案回执，不立案要书面通知：7 日内可申请复议，再 7 日可申请复核，检察院能通知公安立案 | … Alle Zahlen in diesem Eintrag stammen aus … |
| Nr. 20 | Abschnitt 24, Nr. 8 | 急重的伤病直奔急诊预检分诊台，别去挂号窗口排队 | …Beispiel wird in der Notaufnahme nach Schweregrad eingeteilt und nicht nach Ankunftszeit (… |
| Nr. 20 | Abschnitt 24, Nr. 12 | 谢救过你的医生，走感谢信、锦旗和满意度评价，别走红包：准则禁的是财物，不是谢意 | …illst, der dich gerettet hat, nimm einen Dankbrief und die Zufriedenheitsbewertung, siehe … |
| Nr. 20 | Abschnitt 8, Nr. 40 | 别给办案、执法的人送钱送卡：行贿自己也判，对监察、执法、司法人员行贿还要从重 | …ittlern und Vollstreckern Bestechung, und zwar ausdrücklich mit erschwerter Strafe, siehe … |
| Nr. 21 | Abschnitt 4, Nr. 15 | Für Kurzvideos und zielloses Scrollen eine harte Obergrenze setzen | … Die Rechnung über die gesamte Bildschirmzeit steht in … |
| Nr. 21 | Abschnitt 4, Nr. 16 | Kein Fernsehen und keine Ticker-News; die nötigen Informationen zu festen Zeiten gesammelt anschauen | … Die Rechnung über die gesamte Bildschirmzeit steht in … |
| Nr. 21 | Abschnitt 6, Nr. 23 | 不要指望买东西改善心情或身份感 | … Wie Einkaufen dir ein Gefühl von Identität zurückgeben soll, siehe … |
| Nr. 21 | Abschnitt 6, Nr. 24 | 不要为了「在周围人里往上挪一档」多花钱换房、换车、换圈子 | … Für mehr Ausgaben, um eine Stufe aufzusteigen, siehe … |
| Nr. 21 | Abschnitt 3, Nr. 19 | Wenn du niedergeschlagen bist, tu zuerst die Dinge mit dem besten Kosten-Nutzen-Verhältnis: in Bewegung kommen, Sonnenlicht tanken, rechtzeitig schlafen, mit jemandem reden, 12356 anrufen | … Was du bei gedrückter Stimmung zuerst tust, siehe … |
| Nr. 23 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die 12356 anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | …anken ruf zuerst 12356 an und bring die Mittel, die töten können, außer Reichweite, siehe … |
| Nr. 23 | Abschnitt 8, Nr. 15 | 身边人说出「谁也别想好过」「带着孩子一起走」，别当气话：近亲属可以直接送诊，公安接到报警也必须管 | … Was du tun kannst, wenn jemand in deiner Nähe solche Gedanken zeigt, siehe … |
| Nr. 23 | Abschnitt 30, Nr. 8 | 12 到 18 岁的孩子做一次抑郁筛查，别拿学校的心理测评当诊断 | … Das Depressionsscreening bei Kindern siehe … |
| Nr. 23 | Abschnitt 3, Nr. 15 | Behandle Gedanken wie „es wird sicher schlimmer" als Symptom, nicht als Tatsache | … Er ist wie die pessimistische Erwartung in … |
| Nr. 24 | Abschnitt 22, Nr. 9 | 当场想缓过来，用 5 分钟「循环叹息」：吸气两段，呼气拉长 | … Was du sofort tun kannst, siehe … |
| Nr. 24 | Abschnitt 22, Nr. 7 | 心情差就去走或者跑，抗抑郁的效应量（效果大小）跟强度成正比 | … Auf lange Sicht hilft es bei gedrückter Stimmung, siehe … |
| Nr. 24 | Abschnitt 8, Nr. 43 | 被家暴了：先报警留下出警记录，再去法院申请人身安全保护令，不用先离婚，也不收费 | … Dann geht es nicht um deine Gefühle, siehe … |
| Nr. 24 | Abschnitt 3, Nr. 18 | Verlass bei Wut zuerst den Ort und behandle den anderen wie das Wetter, nicht wie einen Feind | … Was du sofort tun kannst, siehe  (zyklisches Seufzen), außerdem … |
| Nr. 25 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die 12356 anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … es dir beim Schreiben immer schlechter geht, hör auf und ruf stattdessen 12356 an, siehe … |

## 04-keine-zeit-verschwenden

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 2 | Abschnitt 4, Nr. 3 | Entscheide über das Weiterführen nur nach künftigem Einsatz und künftigem Ertrag, nicht nach dem schon Eingesetzten | … Beim Urteilen zählst du nur den künftigen Einsatz und den künftigen Ertrag, siehe … |
| Nr. 9 | Abschnitt 4, Nr. 1 | Den Vorsatz in „um wie viel Uhr, wo, und wenn etwas passiert, dann mache ich was" umschreiben | … Die konkreten Handlungen stehen in … |
| Nr. 9 | Abschnitt 4, Nr. 7 | Große Aufgaben in Teilschritte zerlegen, dann schätzen, dann anfangen | …Die konkreten Handlungen stehen in Nr. 1 (den Vorsatz als „wenn …, dann …" aufschreiben), … |
| Nr. 9 | Abschnitt 4, Nr. 8 | Der Sache ohne externen Termin selbst ein Datum setzen | …ls „wenn …, dann …" aufschreiben), Nr. 7 (die große Aufgabe in Teilschritte zerlegen) und … |
| Nr. 10 | Abschnitt 3, Nr. 1 | Schalte unnötige Benachrichtigungen aus und leg das Handy bei der Arbeit aus dem Blickfeld | … Das Handy außer Sichtweite zu legen, hat jemand direkt gemessen, siehe … |
| Nr. 11 | Abschnitt 2, Nr. 3 | Raucherentwöhnung nicht nur mit Aushalten, sondern zuerst Medikamente holen: die Erfolgsquote mehr als verdoppeln | … Wie du selbst mit dem Rauchen aufhörst, steht in … |
| Nr. 12 | Abschnitt 4, Nr. 1 | Den Vorsatz in „um wie viel Uhr, wo, und wenn etwas passiert, dann mache ich was" umschreiben | …Wiederholung wirklich stattfindet, binde die Handlung an einen festen Zusammenhang, siehe … |
| Nr. 13 | Abschnitt 3, Nr. 19 | Wenn du niedergeschlagen bist, tu zuerst die Dinge mit dem besten Kosten-Nutzen-Verhältnis: in Bewegung kommen, Sonnenlicht tanken, rechtzeitig schlafen, mit jemandem reden, 12356 anrufen | …s Aufschieben mit deutlicher Niedergeschlagenheit oder Angst einher, halte dich zuerst an … |
| Nr. 13 | Abschnitt 4, Nr. 10 | Was du brauchst, in Reichweite legen, Unerwünschtes wegräumen, nicht auf die Selbstbeherrschung im Moment setzen | … Die Reizkontrolle steht in … |
| Nr. 15 | Abschnitt 3, Nr. 21 | Mach „wie es anderen geht" nicht zur täglichen Pflichtlektüre: begrenze oder schließe Apps, in denen du die Beiträge von Gleichaltrigen durchblätterst | … Studie dazu, wie viel Zeit zurückgewonnen und wie sich die Stimmung verändert hat, siehe … |

## 15-mieten-und-kaufen

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 7 | Abschnitt 15, Nr. 6 | Vor der Unterschrift Eigentumsnachweis und Belastungen prüfen. Alle Zahlungen per Überweisung mit Verwendungszweck | … Alle Zahlungen per Überweisung mit Verwendungszweck, siehe … |
