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

Das Quellenfeld wird nur auf die ausdrückliche Form «siehe Nr. N» geprüft; die breite «Nr. X»-
Suche lässt es aus, weil dort Normangaben stehen («Verordnung Nr. 8», «§ 437 Nr. 1 BGB»).
Solche Quellen-Verweise stehen in der Tabelle, sind aber von der Ankerpflicht befreit.

Die zweite Absicherung ist der **Anker**: im Umfeld jedes Verweises muss ein Wort stehen, das
auch im Titel des Zieleintrags vorkommt («medizinische Hilfe siehe Nr. 11» — «medizinische
Hilfe» ist der Anker), oder es wird ausdrücklich als «siehe Nr. 16 (Darlehen und Bürgschaft)»
geschrieben. `node tools/check-refs.mjs --check` wertet einen Verweis ohne Anker als Fehler:
rutscht er, ist das im Tabellen-Diff nicht zu sehen, nur der Anker fängt ihn. Ausgenommen sind
Bereichsverweise («siehe Abschnitt 8, Nr. 11 bis 14»), die einen ganzen Block von Einträgen
meinen, und Verweise im Quellenfeld: für beide lässt sich nicht für jede Nummer ein Anker
setzen; hier trägt allein der Diff.

Ob ein Anker zählt, hängt von Länge und Abstand ab: die längste Buchstabenfolge, die sowohl im
weiten Fenster als auch im Titel steht, muss mindestens 8 Zeichen lang sein, oder mindestens 6
Zeichen innerhalb der Teilstrecke, in der der Verweis steht. Kurze Allerweltswörter wie «Zeit»
oder «Geld», die nur außerhalb der Teilstrecke zufällig treffen, gelten nicht als Anker.
Diese zweite Stufe wurde am 2026-09-20 nachgeschärft: beim Einfügen in Abschnitt 31 war der
Verweis «… des Darlehens siehe Nr. 15 dieses Abschnitts» auf den neuen Eintrag «… Steuer
selbst erklären» verrutscht, und ein zwei Teilstrecken entferntes «Sie zahlen selbst» hatte
den Anker gespielt; `--check` meldete damals «bestanden».

Insgesamt 586 Verweise.

## 01-nicht-frueh-sterben

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 4 | Abschnitt 13, Nr. 19 | Der Kohlenmonoxidmelder schlägt an, oder in einem Zimmer bekommen alle gleichzeitig Kopfschmerz und Übelkeit: erst hinausgehen, dann telefonieren | … Eine Kohlenmonoxidvergiftung ist etwas anderes, siehe … |
| Nr. 16 | Abschnitt 1, Nr. 18 | Frauen ab 35 zum Gebärmutterhalskrebs-Screening, vorrangig HPV-Test | … zum Gebärmutterhalskrebs-Screening gehen, die Impfung ersetzt das Screening nicht, siehe … |
| Nr. 25 | Abschnitt 1, Nr. 32 | Wenn ein Suizidgedanke aufkommt, sag es zuerst einer Person in deiner Nähe und gib diese paar Minuten aus der Hand | …Die Daten zu diesem Zeitmaßstab und die langfristigen Folgen nach einem Versuch stehen in … |
| Nr. 25 | Abschnitt 1, Nr. 33 | „Gerettet" ist keine Absicherung: nach einer Vergiftung mit Pflanzenschutzmitteln oder Kohlenmonoxid rettet die Notaufnahme das Leben, nicht Lunge und Gehirn | … Was nach einer Rettung zurückbleibt, steht in … |
| Nr. 26 | Abschnitt 1, Nr. 3 | Rauchmelder einbauen; wer im Winter drinnen Kohle verbrennt oder mit Gas heizt, dazu einen Kohlenmonoxidmelder | … Rauchmelder und Kohlenmonoxidmelder siehe … |
| Nr. 26 | Abschnitt 13, Nr. 12 | Bei einer starken Blutung zuerst mit der Hand kräftig auf die Wunde drücken; lässt sich eine Blutung an Armen oder Beinen so nicht stillen, ein Tourniquet anlegen und gleichzeitig die 112 rufen | … Die Anwendung eines Tourniquets siehe … |
| Nr. 28 | Abschnitt 1, Nr. 7 | Blutdruck messen, bei hohem Wert mit Medikamenten auf den Zielwert senken | … Zu untersuchen ist dasselbe wie in … |
| Nr. 28 | Abschnitt 1, Nr. 8 | Ab 35 mit Übergewicht einmal den Nüchternblutzucker messen lassen, auch bei normalem Wert alle drei Jahre wieder | … Zu untersuchen ist dasselbe wie in … |
| Nr. 28 | Abschnitt 1, Nr. 29 | Abnehmen, Rauchen aufhören, Blutdruck und Blutzucker in den Griff bekommen, dann bessert sich die erektile Funktion | … Wie du es besserst, steht in … |
| Nr. 28 | Abschnitt 1, Nr. 27 | Sichtbares Blut im Urin, auch ohne Schmerzen und auch wenn es am nächsten Tag weg ist, einmal abklären lassen | … Bei … |
| Nr. 29 | Abschnitt 2, Nr. 1 | Raucherentwöhnung, je früher, desto besser | … Rauchen aufhören siehe … |
| Nr. 29 | Abschnitt 2, Nr. 33 | Den BMI zwischen 20 und 25 halten und bei Übergewicht abnehmen | …ören siehe Abschnitt 2, Nr. 1 (Rauchen aufhören, je früher, desto besser), Abnehmen siehe … |
| Nr. 29 | Abschnitt 1, Nr. 7 | Blutdruck messen, bei hohem Wert mit Medikamenten auf den Zielwert senken | …, Abnehmen siehe Abschnitt 2, Nr. 33 (den BMI zwischen 20 und 25 halten), Blutdruck siehe … |
| Nr. 29 | Abschnitt 28, Nr. 4 | Kauf keine Abnehmpräparate, die schnelles Abnehmen versprechen — keine Schlankheitspillen, Diätkaffee, Abnehm-Kapseln, Fatburner und Detox-Tees | …n solche Wirkstoffe oft heimlich bei, in unbekannter Dosis, wie du sie erkennst, steht in … |
| Nr. 30 | Abschnitt 13, Nr. 38 | Vielleicht hast du dich mit HIV angesteckt: hol dir binnen 72 Stunden die Blockermedikamente, je früher, desto besser | … Was nach einer bereits erfolgten Exposition zu tun ist, siehe … |
| Nr. 31 | Abschnitt 27, Nr. 3 | Lass bei der ersten Vorsorgeuntersuchung gleich auf HIV, Syphilis und Hepatitis B testen, die Behandlung ist auch bei einem Befund kostenlos | …ung in der Schwangerschaft und die Unterbrechung der Übertragung von der Mutter stehen in … |
| Nr. 32 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die Telefonseelsorge anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Das Entfernen tödlicher Mittel und die Telefonseelsorge siehe … |
| Nr. 32 | Abschnitt 3, Nr. 19 | Wenn du niedergeschlagen bist, tu zuerst die Dinge mit dem besten Kosten-Nutzen-Verhältnis: in Bewegung kommen, Sonnenlicht tanken, rechtzeitig schlafen, mit jemandem reden, die Telefonseelsorge anrufen | … Die ersten Schritte bei gedrückter Stimmung siehe … |
| Nr. 32 | Abschnitt 1, Nr. 33 | „Gerettet" ist keine Absicherung: nach einer Vergiftung mit Pflanzenschutzmitteln oder Kohlenmonoxid rettet die Notaufnahme das Leben, nicht Lunge und Gehirn | … Die Folgen nach einer Rettung siehe … |
| Nr. 32 | Abschnitt 8, Nr. 15 | Wenn jemand aus deinem Umfeld „niemand soll es gut haben" oder „ich nehme das Kind mit" sagt, halt es nicht für Gerede: nimm die Warnung ernst, hol sofort Hilfe und verheimliche sie nicht | … Was du tun kannst, wenn jemand in deiner Nähe solche Gedanken zeigt, siehe … |
| Nr. 33 | Abschnitt 13, Nr. 19 | Der Kohlenmonoxidmelder schlägt an, oder in einem Zimmer bekommen alle gleichzeitig Kopfschmerz und Übelkeit: erst hinausgehen, dann telefonieren | … Das Vorgehen vor Ort bei Kohlenmonoxid siehe … |
| Nr. 33 | Abschnitt 13, Nr. 20 | Nach versehentlicher Einnahme von Reinigungsmittel, Pestizid oder Medikament nicht zuerst Erbrechen auslösen, sondern mit der Flasche sofort zum Arzt; in Auge oder Haut gelangt, zehn Minuten mit viel klarem Wasser spülen, bei Säure oder Lauge 20 Minuten | … erst nicht zum Erbrechen bringen, mit der Flasche ins Krankenhaus, siehe … |
| Nr. 33 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die Telefonseelsorge anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Pflanzenschutzmittel und Schlafmittel nicht zu Hause horten, siehe … |
| Nr. 34 | Abschnitt 17, Nr. 8 | Ist jemand zu Hause dauerhaft bettlägerig, behandle den Dekubitus als Feind Nummer eins: elektrische Wechseldruckmatratze, regelmäßiges Umlagern, jeden Tag die vorstehenden Knochen ansehen | … Der wichtigste Punkt bei langer Bettlägerigkeit, der Dekubitus, siehe … |
| Nr. 34 | Abschnitt 13, Nr. 11 | Ein Bein schwillt plötzlich an und spannt, es schmerzt auf Druck: bald zum Arzt; kommt plötzliche Atemnot oder Brustschmerz dazu, sofort die 112 rufen | … Tiefe Venenthrombose und Lungenembolie siehe … |
| Nr. 34 | Abschnitt 1, Nr. 32 | Wenn ein Suizidgedanke aufkommt, sag es zuerst einer Person in deiner Nähe und gib diese paar Minuten aus der Hand | … Was tun, wenn der Gedanke aufkommt, siehe … |
| Nr. 34 | Abschnitt 1, Nr. 33 | „Gerettet" ist keine Absicherung: nach einer Vergiftung mit Pflanzenschutzmitteln oder Kohlenmonoxid rettet die Notaufnahme das Leben, nicht Lunge und Gehirn | … Die Folgen einer Vergiftung siehe … |

## 02-nicht-langsam-sterben

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 1 | Abschnitt 2, Nr. 3 | Raucherentwöhnung nicht nur mit Aushalten, sondern zuerst Medikamente holen: die Erfolgsquote mehr als verdoppeln | … … |
| Nr. 1 | Abschnitt 2, Nr. 4 | Einen Tag zum Aufhören festlegen und an dem Tag auf einen Schlag aufhören, nicht erst langsam reduzieren | … Nr. 3 (Raucherentwöhnungsmittel), … |
| Nr. 1 | Abschnitt 2, Nr. 5 | Beim Rauchfrei-Telefon anrufen und nach Kursen in der Nähe fragen | … Nr. 3 (Raucherentwöhnungsmittel), Nr. 4 (einen Tag zum Aufhören festlegen), … |
| Nr. 1 | Abschnitt 2, Nr. 6 | E-Zigarette erst erwägen, wenn du anders nicht loskommst; wer nie geraucht hat, lässt sie bleiben | …r. 4 (einen Tag zum Aufhören festlegen), Nr. 5 (Rauchfrei-Telefon und Kurse in der Nähe), … |
| Nr. 2 | Abschnitt 2, Nr. 1 | Raucherentwöhnung, je früher, desto besser | … Wie du selbst aufhörst, steht in … |
| Nr. 3 | Abschnitt 2, Nr. 4 | Einen Tag zum Aufhören festlegen und an dem Tag auf einen Schlag aufhören, nicht erst langsam reduzieren | … Kombiniere es deshalb mit … |
| Nr. 3 | Abschnitt 2, Nr. 5 | Beim Rauchfrei-Telefon anrufen und nach Kursen in der Nähe fragen | … Kombiniere es deshalb mit Nr. 4 (einen Tag zum Aufhören festlegen) und … |
| Nr. 5 | Abschnitt 2, Nr. 3 | Raucherentwöhnung nicht nur mit Aushalten, sondern zuerst Medikamente holen: die Erfolgsquote mehr als verdoppeln | … Welche Medikamente dazu gehören, steht in … |
| Nr. 6 | Abschnitt 2, Nr. 3 | Raucherentwöhnung nicht nur mit Aushalten, sondern zuerst Medikamente holen: die Erfolgsquote mehr als verdoppeln | … Von der Reihenfolge her probiere zuerst … |
| Nr. 11 | Abschnitt 2, Nr. 14 | Wöchentlich insgesamt 150–300 Minuten mäßig intensive Bewegung, zügiges Gehen genügt | … Dieser Eintrag und … |
| Nr. 13 | Abschnitt 2, Nr. 39 | Nach einer durchwachten Nacht in der nächsten Nacht den Schlaf nachholen, nicht bis zum Wochenende aufschieben | … Wie du nach durchwachten Nächten aufholst, steht in … |
| Nr. 14 | Abschnitt 2, Nr. 11 | Täglich 7000–8000 Schritte gehen | … Von diesem Eintrag und … |
| Nr. 20 | Abschnitt 2, Nr. 22 | Wer weniger trinken will, zählt zuerst, wie viel er in einer Woche trinkt, und spricht dann ein paar Minuten mit dem Arzt | … Wie du weniger trinken kannst, steht in … |
| Nr. 20 | Abschnitt 2, Nr. 21 | Wer täglich trinkt und beim Absetzen zittert und Herzrasen bekommt, setzt nicht selbst ab | … Wer täglich trinkt, darf nicht selbst hart absetzen, siehe … |
| Nr. 21 | Abschnitt 2, Nr. 20 | Wenig oder gar keinen Alkohol trinken | … Wie viel Trinken pro Woche viel ist, steht in … |
| Nr. 21 | Abschnitt 2, Nr. 22 | Wer weniger trinken will, zählt zuerst, wie viel er in einer Woche trinkt, und spricht dann ein paar Minuten mit dem Arzt | … wie du weniger trinken kannst, in … |
| Nr. 22 | Abschnitt 2, Nr. 21 | Wer täglich trinkt und beim Absetzen zittert und Herzrasen bekommt, setzt nicht selbst ab | … Wer schon Entzugserscheinungen hat, siehe … |
| Nr. 26 | Abschnitt 2, Nr. 31 | Heißes erst abkühlen lassen, keine kochend heißen Getränke wie Tee, Suppe und Kaffee trinken | … zur Temperatur heißer Getränke siehe … |
| Nr. 29 | Abschnitt 2, Nr. 7 | Keine zuckergesüßten Getränke; die Umstellung auf zuckerfrei löst das Problem auch nicht | …tens überschneidet sie sich stark mit zuckergesüßten Getränken und verarbeitetem Fleisch (… |
| Nr. 29 | Abschnitt 2, Nr. 19 | Weniger verarbeitetes Fleisch (Schinken, Speck, Wurst, Corned Beef) | …tens überschneidet sie sich stark mit zuckergesüßten Getränken und verarbeitetem Fleisch (… |
| Nr. 29 | Abschnitt 2, Nr. 7 | Keine zuckergesüßten Getränke; die Umstellung auf zuckerfrei löst das Problem auch nicht | … Schaff also zuerst … |
| Nr. 29 | Abschnitt 2, Nr. 19 | Weniger verarbeitetes Fleisch (Schinken, Speck, Wurst, Corned Beef) | … Schaff also zuerst … |
| Nr. 33 | Abschnitt 6, Nr. 26 | Erwarte nicht, dass Frühstück oder 16:8-Kurzzeitfasten dir beim Gewichthalten helfen, wähle Essenszeiten, die du lange durchhältst | …8-Kurzzeitfasten bringen keinen zusätzlichen Vorteil, siehe … |
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
| Nr. 9 | Abschnitt 3, Nr. 3 | Schlaf jede Nacht 7 bis 8 Stunden und halte 6 Stunden nicht für genug | … Was das Aufbleiben selbst kostet, siehe … |
| Nr. 11 | Abschnitt 2, Nr. 38 | Den Mittagsschlaf auf eine halbe Stunde begrenzen, nicht über eine Stunde, und wenn du unbedingt ein bis zwei Stunden brauchst, die Ursache abklären lassen | …n mit höherer Sterblichkeit und höherem Risiko für koronare Herzkrankheit zusammen, siehe … |
| Nr. 19 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die Telefonseelsorge anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … ruf zuerst die Telefonseelsorge an (siehe … |
| Nr. 20 | Abschnitt 24, Nr. 6 | Bei akut schweren Verletzungen oder Erkrankungen direkt zum Ersteinschätzungstisch der Notaufnahme, nicht am Anmeldetisch anstehen | … In der Notaufnahme wird nach Schweregrad eingeteilt, nicht nach Ankunftszeit (… |
| Nr. 20 | Abschnitt 24, Nr. 10 | Dank dem Arzt, der dich gerettet hat, über einen Dankbrief und die Klinikbewertung, nicht über einen Umschlag: Verboten sind die Geschenke, nicht der Dank | … Willst du einem Arzt danken, nimm einen Dankbrief und die Zufriedenheitsbewertung (… |
| Nr. 20 | Abschnitt 8, Nr. 39 | Steck Ermittelnden und Vollstreckenden kein Geld und keine Karten zu: Bestechung wird auch für den Geber bestraft, bei Bestechung von Richtern sogar strenger | …t gegenüber Ermittlern und Vollstreckern Bestechung, ausdrücklich mit erschwerter Strafe (… |
| Nr. 21 | Abschnitt 4, Nr. 15 | Für Kurzvideos und zielloses Scrollen eine harte Obergrenze setzen | … Die Rechnung über die gesamte Bildschirmzeit steht in … |
| Nr. 21 | Abschnitt 4, Nr. 16 | Kein Fernsehen und keine Ticker-News; die nötigen Informationen zu festen Zeiten gesammelt anschauen | … Die Rechnung über die gesamte Bildschirmzeit steht in … |
| Nr. 21 | Abschnitt 6, Nr. 23 | Erwarte nicht, dass Einkaufen die Stimmung oder das Identitätsgefühl bessert | … Wie Einkaufen dir ein Gefühl von Identität zurückgeben soll, siehe … |
| Nr. 21 | Abschnitt 6, Nr. 24 | Gib kein zusätzliches Geld für Wohnung, Auto und Bekanntenkreis aus, um „im Umfeld eine Stufe höher zu steigen" | … Für mehr Ausgaben, um eine Stufe aufzusteigen, siehe … |
| Nr. 21 | Abschnitt 3, Nr. 19 | Wenn du niedergeschlagen bist, tu zuerst die Dinge mit dem besten Kosten-Nutzen-Verhältnis: in Bewegung kommen, Sonnenlicht tanken, rechtzeitig schlafen, mit jemandem reden, die Telefonseelsorge anrufen | … Was du bei gedrückter Stimmung zuerst tust, siehe … |
| Nr. 23 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die Telefonseelsorge anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | …t die Telefonseelsorge an und bring die Mittel, die töten können, außer Reichweite, siehe … |
| Nr. 23 | Abschnitt 8, Nr. 15 | Wenn jemand aus deinem Umfeld „niemand soll es gut haben" oder „ich nehme das Kind mit" sagt, halt es nicht für Gerede: nimm die Warnung ernst, hol sofort Hilfe und verheimliche sie nicht | … Was du tun kannst, wenn jemand in deiner Nähe solche Gedanken zeigt, siehe … |
| Nr. 23 | Abschnitt 30, Nr. 8 | Lass Kinder von 12 bis 18 Jahren einmal auf eine Depression ansprechen und halt ein Screening nicht für eine Diagnose | … Das Depressionsscreening bei Kindern siehe … |
| Nr. 23 | Abschnitt 3, Nr. 15 | Behandle Gedanken wie „es wird sicher schlimmer" als Symptom, nicht als Tatsache | … Er ist wie die pessimistische Erwartung in … |
| Nr. 24 | Abschnitt 22, Nr. 8 | Wenn du dich sofort beruhigen willst, nutz 5 Minuten „zyklisches Seufzen": zwei Züge einatmen, das Ausatmen verlängern | … Was du sofort tun kannst, siehe … |
| Nr. 24 | Abschnitt 22, Nr. 6 | Bei schlechter Stimmung geh spazieren oder laufen. Die Effektstärke gegen Depression ist proportional zur Intensität | … Auf lange Sicht hilft es bei gedrückter Stimmung, siehe … |
| Nr. 24 | Abschnitt 8, Nr. 42 | Wirst du häuslicher Gewalt ausgesetzt: erst die Polizei rufen und ein Einsatzprotokoll hinterlassen, dann beim Gericht eine Gewaltschutzanordnung beantragen, sie setzt keine Scheidung voraus und kostet nichts | … Dann geht es nicht um deine Gefühle, siehe … |
| Nr. 24 | Abschnitt 3, Nr. 18 | Verlass bei Wut zuerst den Ort und behandle den anderen wie das Wetter, nicht wie einen Feind | … Was du sofort tun kannst, siehe  (zyklisches Seufzen), außerdem … |
| Nr. 25 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die Telefonseelsorge anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | …hreiben immer schlechter geht, hör auf und ruf stattdessen die Telefonseelsorge an, siehe … |

## 04-keine-zeit-verschwenden

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 2 | Abschnitt 4, Nr. 3 | Entscheide über das Weiterführen nur nach künftigem Einsatz und künftigem Ertrag, nicht nach dem schon Eingesetzten | … Beim Urteilen zählst du nur den künftigen Einsatz und den künftigen Ertrag, siehe … |
| Nr. 9 | Abschnitt 4, Nr. 1 | Den Vorsatz in „um wie viel Uhr, wo, und wenn etwas passiert, dann mache ich was" umschreiben | … Die konkreten Handlungen stehen in … |
| Nr. 9 | Abschnitt 4, Nr. 7 | Große Aufgaben in Teilschritte zerlegen, dann schätzen, dann anfangen | …rsatz in „um wie viel Uhr, wo, und wenn etwas passiert, dann mache ich was" umschreiben), … |
| Nr. 9 | Abschnitt 4, Nr. 8 | Der Sache ohne externen Termin selbst ein Datum setzen | … dann mache ich was" umschreiben), Nr. 7 (die große Aufgabe in Teilschritte zerlegen) und … |
| Nr. 10 | Abschnitt 3, Nr. 1 | Schalte unnötige Benachrichtigungen aus und leg das Handy bei der Arbeit aus dem Blickfeld | … Das Handy außer Sichtweite zu legen, hat jemand direkt gemessen, siehe … |
| Nr. 11 | Abschnitt 2, Nr. 3 | Raucherentwöhnung nicht nur mit Aushalten, sondern zuerst Medikamente holen: die Erfolgsquote mehr als verdoppeln | … Wie du selbst mit dem Rauchen aufhörst, steht in … |
| Nr. 12 | Abschnitt 4, Nr. 1 | Den Vorsatz in „um wie viel Uhr, wo, und wenn etwas passiert, dann mache ich was" umschreiben | …Wiederholung wirklich stattfindet, binde die Handlung an einen festen Zusammenhang, siehe … |
| Nr. 13 | Abschnitt 3, Nr. 19 | Wenn du niedergeschlagen bist, tu zuerst die Dinge mit dem besten Kosten-Nutzen-Verhältnis: in Bewegung kommen, Sonnenlicht tanken, rechtzeitig schlafen, mit jemandem reden, die Telefonseelsorge anrufen | …s Aufschieben mit deutlicher Niedergeschlagenheit oder Angst einher, halte dich zuerst an … |
| Nr. 13 | Abschnitt 4, Nr. 10 | Was du brauchst, in Reichweite legen, Unerwünschtes wegräumen, nicht auf die Selbstbeherrschung im Moment setzen | … Die Reizkontrolle steht in … |
| Nr. 15 | Abschnitt 3, Nr. 21 | Mach „wie es anderen geht" nicht zur täglichen Pflichtlektüre: begrenze oder schließe Apps, in denen du die Beiträge von Gleichaltrigen durchblätterst | … Studie dazu, wie viel Zeit zurückgewonnen und wie sich die Stimmung verändert hat, siehe … |

## 05-kein-geld-verschwenden

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 8 | Abschnitt 5, Nr. 9 | Laden Kinder per Handy auf und geben Trinkgeld, kannst du größere Ausgaben von Kindern über sieben Jahren ohne Zustimmung der Eltern zurückverlangen | … Wie Kinder, die per Handy aufladen und Trinkgeld geben, Geld zurückbekommen, steht in … |
| Nr. 9 | Abschnitt 5, Nr. 8 | Kein Trinkgeld an Streamer, keine Einzahlungen ins Spiel, kein Kauf aus dem Impuls | … Für Trinkgeld und Einzahlungen aus eigenem Impuls siehe … |
| Nr. 10 | Abschnitt 8, Nr. 3 | Merk dir die harten Regeln gegen Betrug: Anrufen nicht trauen, Daten nicht verraten, Links nicht anklicken, Überweisungen mehrfach prüfen, sieben häufige Maschen haben dieselbe Form | … Zum Schutz vor gefälschten Bekannten mit KI-Stimme siehe … |
| Nr. 10 | Abschnitt 8, Nr. 4 | Ein Gesicht im Video und eine Stimme am Telefon sind kein Nachweis; bei einer Überweisung zuerst auflegen und die alte Nummer aus dem eigenen Adressbuch zurückrufen | … Zum Schutz vor gefälschten Bekannten mit KI-Stimme siehe … |
| Nr. 10 | Abschnitt 5, Nr. 9 | Laden Kinder per Handy auf und geben Trinkgeld, kannst du größere Ausgaben von Kindern über sieben Jahren ohne Zustimmung der Eltern zurückverlangen | … Unterscheide das von … |
| Nr. 12 | Abschnitt 16, Nr. 3 | Geh zu den Kontrollterminen in dem Abstand, den dir der Arzt vorgibt, und notiere jeden Wert im selben Heft | …Beurteile einen Wechsel bei chronischer Krankheit nicht nach Gefühl, sondern behalte nach … |
| Nr. 16 | Abschnitt 5, Nr. 7 | Nutze nicht die Mindestzahlung der Kreditkarte, und schließe für Konsum keine Ratenzahlung oder keinen Konsumentenkredit ab | … ihre Zinssätze siehe … |
| Nr. 18 | Abschnitt 5, Nr. 17 | Nutz breite Indexfonds statt aktiv gemanagter Fonds als langfristigen Grundstock (der Teil des Geldes, der lang liegen bleibt) | … … |
| Nr. 19 | Abschnitt 5, Nr. 17 | Nutz breite Indexfonds statt aktiv gemanagter Fonds als langfristigen Grundstock (der Teil des Geldes, der lang liegen bleibt) | … Einen breiten Indexfonds zu kaufen (siehe … |
| Nr. 20 | Abschnitt 5, Nr. 27 | Spar zuerst einen Notgroschen für 3 bis 6 Monate Lebenskosten an und halte ihn dort, wo du jederzeit herankommst | … Sperr den Notgroschen nicht ein, nur um einen Vorteil mitzunehmen (Notgroschen siehe … |
| Nr. 20 | Abschnitt 5, Nr. 17 | Nutz breite Indexfonds statt aktiv gemanagter Fonds als langfristigen Grundstock (der Teil des Geldes, der lang liegen bleibt) | … die Regeln dazu sind wie … |
| Nr. 20 | Abschnitt 5, Nr. 18 | Bei gleicher Fondsart den mit niedrigeren Kosten wählen | … die Regeln dazu sind wie … |
| Nr. 27 | Abschnitt 5, Nr. 7 | Nutze nicht die Mindestzahlung der Kreditkarte, und schließe für Konsum keine Ratenzahlung oder keinen Konsumentenkredit ab | …fs Jahr gerechneten Zinssätze von Konsumentenkredit und Kreditkarten-Mindestzahlung siehe … |
| Nr. 29 | Abschnitt 5, Nr. 23 | Bei großen, nicht nötigen Käufen eine 24-Stunden-Bedenkzeit einbauen, beim Onlinekauf das 14-tägige Widerrufsrecht nutzen | …eine verbotene Geschäftspraxis, und beim Onlinekauf hast du 14 Tage Widerrufsrecht (siehe … |
| Nr. 29 | Abschnitt 5, Nr. 30 | Bei Problemen mit im Livestream gekauften Dingen such die Daten des Verkäufers; auf dem Marktplatz müssen sie angegeben sein | …eintrag des Verkäufers leicht zugänglich anzeigen (Artikel 30 derselben Verordnung, siehe … |
| Nr. 29 | Abschnitt 5, Nr. 32 | Prüf vor dem Kauf großer Dinge das CE-Zeichen, das EU-Energielabel und die Warnliste der EU für gefährliche Produkte | … Erhältlich sind nur die gesamten Stichprobenergebnisse (siehe … |
| Nr. 29 | Abschnitt 5, Nr. 23 | Bei großen, nicht nötigen Käufen eine 24-Stunden-Bedenkzeit einbauen, beim Onlinekauf das 14-tägige Widerrufsrecht nutzen | … Das 14-tägige Widerrufsrecht beim Onlinekauf siehe … |
| Nr. 30 | Abschnitt 5, Nr. 23 | Bei großen, nicht nötigen Käufen eine 24-Stunden-Bedenkzeit einbauen, beim Onlinekauf das 14-tägige Widerrufsrecht nutzen | … Die Ausnahmen vom Widerrufsrecht sind gesetzlich festgelegt (§ 312g Abs. 2 BGB, siehe … |
| Nr. 31 | Abschnitt 8, Nr. 22 | Bei Betrug beim Online-Kauf oder im Second-Hand-Handel zuerst die Plattform, dann die Polizei, dann rechnen, ob sich eine Klage lohnt | … Ob sich eine Klage bei einem kleinen Streitwert überhaupt lohnt, steht in … |
| Nr. 31 | Abschnitt 12, Nr. 8 | Bei Lebensmitteln zuerst die eigene Stufe bestimmen: Herstellung und Gastronomie brauchen eine Zulassung oder Erlaubnis, der Verkauf wird registriert | … das steht in … |
| Nr. 31 | Abschnitt 12, Nr. 9 | In Tüten verkauft heißt vorverpacktes Lebensmittel: Herstellungsdatum, Haltbarkeitsdatum und Zutatenliste müssen aufs Etikett | … das steht in … |
| Nr. 31 | Abschnitt 12, Nr. 10 | Normale Lebensmittel dürfen nicht heilend wirken: Etikett, Beschreibung, Werbung und Live-Verkauf zählen alle, ebenso Texte im Netz | … das steht in … |
| Nr. 31 | Abschnitt 12, Nr. 11 | Bei Lebensmitteln gibt es eine Strafgrenze: verkauftes krankes Fleisch oder über dem Grenzwert reicht für die Straftat, beigemischte giftige Stoffe kosten fünf Jahre ab dem ersten Fall | … das steht in … |
| Nr. 34 | Abschnitt 5, Nr. 32 | Prüf vor dem Kauf großer Dinge das CE-Zeichen, das EU-Energielabel und die Warnliste der EU für gefährliche Produkte | … Die allgemeine Prüfmethode vor dem Kauf großer Dinge siehe … |
| Nr. 34 | Abschnitt 5, Nr. 29 | Verlass dich beim Onlinekauf auf die Regeln der Plattform und das Gesetz, nicht auf die Streamer und die „guten Bewertungen" | … An wen du dich bei einem Problem im Livestream wendest, siehe … |
| Nr. 34 | Abschnitt 5, Nr. 30 | Bei Problemen mit im Livestream gekauften Dingen such die Daten des Verkäufers; auf dem Marktplatz müssen sie angegeben sein | … An wen du dich bei einem Problem im Livestream wendest, siehe … |
| Nr. 35 | Abschnitt 6, Nr. 23 | Erwarte nicht, dass Einkaufen die Stimmung oder das Identitätsgefühl bessert | … Den Kreislauf „einmal gekauft, schnell verflogen, also weiter kaufen" siehe … |
| Nr. 35 | Abschnitt 5, Nr. 9 | Laden Kinder per Handy auf und geben Trinkgeld, kannst du größere Ausgaben von Kindern über sieben Jahren ohne Zustimmung der Eltern zurückverlangen | … Für den Verkauf an Kinder gilt die allgemeine Regel zu Minderjährigen, siehe … |
| Nr. 35 | Abschnitt 5, Nr. 23 | Bei großen, nicht nötigen Käufen eine 24-Stunden-Bedenkzeit einbauen, beim Onlinekauf das 14-tägige Widerrufsrecht nutzen | … Die 24-Stunden-Bedenkzeit bei großen, nicht nötigen Käufen siehe … |
| Nr. 36 | Abschnitt 12, Nr. 9 | In Tüten verkauft heißt vorverpacktes Lebensmittel: Herstellungsdatum, Haltbarkeitsdatum und Zutatenliste müssen aufs Etikett | …angibst, wenn du selbst einen Laden betreibst und verpackte Lebensmittel verkaufst, siehe … |
| Nr. 37 | Abschnitt 5, Nr. 15 | Handle Aktien nicht häufig | … Dieser Eintrag betrifft „verkaufen oder nicht", … |
| Nr. 37 | Abschnitt 5, Nr. 19 | Setz das Geld nicht auf eine Aktie, eine Plattform, ein Haus | … seine tatsächliche Wirkung ist, dass du mehr Geld auf diese eine Aktie setzt, siehe … |
| Nr. 38 | Abschnitt 5, Nr. 15 | Handle Aktien nicht häufig | … In dieser Marktphase tauschten Haushaltskonten im Jahr fast 18 Mal aus, in … |
| Nr. 39 | Abschnitt 7, Nr. 20 | Vor einer schweren Krankheit zusätzlich zur gesetzlichen Krankenversicherung eine Zusatzversicherung oder Krankentagegeld abschließen — achte auf die Bedingungen | … Zusatzversicherung oder Krankentagegeld siehe … |
| Nr. 39 | Abschnitt 21, Nr. 4 | Kauf eine Versicherung mit Auslandsbehandlung und medizinischem Rücktransport, nicht nur eine Flugverspätungsversicherung | … Wer ins Ausland geht, siehe … |
| Nr. 39 | Abschnitt 5, Nr. 26 | Kauf die Kfz-Haftpflichtversicherung mit hoher Deckungssumme: Die gesetzliche Mindestdeckung von 7,5 Millionen Euro für Personenschäden ist nur die Untergrenze | … Wer ein Auto hat, siehe … |
| Nr. 39 | Abschnitt 5, Nr. 40 | Lebt jemand in der Familie von deinem Einkommen, versichere zuerst den, der das Geld verdient, mit einer Risikolebensversicherung, nicht zuerst das Kind | … Wo jemand in der Familie von deinem Einkommen lebt, siehe … |
| Nr. 39 | Abschnitt 7, Nr. 9 | Gesetzliche Krankenversicherung: die Beiträge nicht abreißen lassen, Familienmitglieder sind beitragsfrei | …sicherung, sie wird nicht nach diesem Verfahren abgewogen, sie wird weiter gezahlt, siehe … |
| Nr. 39 | Abschnitt 5, Nr. 27 | Spar zuerst einen Notgroschen für 3 bis 6 Monate Lebenskosten an und halte ihn dort, wo du jederzeit herankommst | … Womit kleine Verluste aufgefangen werden, siehe … |
| Nr. 40 | Abschnitt 7, Nr. 20 | Vor einer schweren Krankheit zusätzlich zur gesetzlichen Krankenversicherung eine Zusatzversicherung oder Krankentagegeld abschließen — achte auf die Bedingungen | … Zur wahrheitsgemäßen Angabe des Gesundheitszustands und zu den Bedingungen siehe … |
| Nr. 41 | Abschnitt 5, Nr. 25 | Bei Versicherungen zuerst die Risiko-Variante kaufen und „Rückzahlung" und „Dividende" als nicht garantierten Teil betrachten | …tallebensversicherung ist viel Geld eingezahlt, da lohnt sich die Frist am meisten, siehe … |
| Nr. 42 | Abschnitt 5, Nr. 41 | Bereust du eine abgeschlossene Lebensversicherung mit über einem Jahr Laufzeit, trittst du innerhalb der Widerrufsfrist zurück, die Prämie kommt fast vollständig zurück | … Wer schon unterschrieben hat, kann innerhalb der Widerrufsfrist zurücktreten, siehe … |
| Nr. 42 | Abschnitt 5, Nr. 43 | Willst du zurücktreten, mach es selbst bei der Versicherung, nicht über einen „Rücktrittsvermittler"; fühlst du dich getäuscht, beschwere dich erst beim Versicherer und sonst beim Versicherungsombudsmann | … Wie du dich beschwerst, wenn du dich getäuscht fühlst, siehe … |
| Nr. 43 | Abschnitt 5, Nr. 41 | Bereust du eine abgeschlossene Lebensversicherung mit über einem Jahr Laufzeit, trittst du innerhalb der Widerrufsfrist zurück, die Prämie kommt fast vollständig zurück | … Selbst in der Widerrufsfrist zurücktreten, siehe … |
| Nr. 44 | Abschnitt 25, Nr. 9 | Die Konten des Verstorbenen gehen auf die Erben über; die Behandlungsakte dürfen die Angehörigen einsehen | … Nach einem Todesfall die Gelder an den verschiedenen Stellen einzeln abholen, siehe … |
| Nr. 44 | Abschnitt 29, Nr. 13 | Mach den Tod nicht zum Weg, Schulden zu tilgen: Die Lebensversicherung zahlt in den ersten drei Jahren nicht, ein Arbeitsunfall wird nicht anerkannt, und die Schulden gehen trotzdem zuerst vom Nachlass ab | … Dass der Weg „mit dem Tod Schulden tilgen" nicht funktioniert, siehe … |

## 06-die-negativliste

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 10 | Abschnitt 1, Nr. 20 | Menschen mit Herz-Kreislauf-Erkrankung und alte Menschen jedes Jahr gegen Grippe impfen lassen | … Begleite die alten Menschen zur jährlichen Grippeimpfung, siehe … |
| Nr. 10 | Abschnitt 1, Nr. 21 | Ab 60 gegen Gürtelrose impfen lassen | … Die Gürtelroseimpfung ab 50, siehe … |
| Nr. 10 | Abschnitt 1, Nr. 22 | Ab 60 gegen Pneumokokken impfen lassen | … Die Pneumokokkenimpfung ab 65, siehe … |
| Nr. 10 | Abschnitt 1, Nr. 7 | Blutdruck messen, bei hohem Wert mit Medikamenten auf den Zielwert senken | …nach ärztlicher Anweisung regelmäßig nimmt und der Blutdruck den Zielwert erreicht, siehe … |
| Nr. 10 | Abschnitt 1, Nr. 13 | Ab 60 Gleichgewicht und Beinkraft trainieren, Bad und Treppe zu Hause umbauen | … Bau zu Hause Bad und Treppe um und übe mit ihm Gleichgewicht und Beinkraft, siehe … |
| Nr. 10 | Abschnitt 1, Nr. 17 | Frauen ab 50 zum Brustkrebs-Screening, alle zwei Jahre eine Mammografie | … Die Krebsfrüherkennung, die zum Alter passt, begleite ihn einmal dorthin, siehe … |
| Nr. 10 | Abschnitt 1, Nr. 18 | Frauen ab 35 zum Gebärmutterhalskrebs-Screening, vorrangig HPV-Test | … Die Krebsfrüherkennung, die zum Alter passt, begleite ihn einmal dorthin, siehe … |
| Nr. 10 | Abschnitt 1, Nr. 19 | Ab 50 zum Darmkrebs-Screening, immunchemischer Stuhltest auf verborgenes Blut oder Darmspiegelung | … Die Krebsfrüherkennung, die zum Alter passt, begleite ihn einmal dorthin, siehe … |
| Nr. 10 | Abschnitt 17, Nr. 7 | Wenn ein alter Mensch in der Familie dauerhaft bettlägerig oder schwer pflegebedürftig ist, beantrage bei der Pflegekasse die Pflegeversicherung; sie gilt nicht nur für alte Menschen | …der alte Mensch dauerhaft bettlägerig, siehe zu Dekubitus-Vorsorge und Pflegeversicherung … |
| Nr. 10 | Abschnitt 17, Nr. 8 | Ist jemand zu Hause dauerhaft bettlägerig, behandle den Dekubitus als Feind Nummer eins: elektrische Wechseldruckmatratze, regelmäßiges Umlagern, jeden Tag die vorstehenden Knochen ansehen | …der alte Mensch dauerhaft bettlägerig, siehe zu Dekubitus-Vorsorge und Pflegeversicherung … |
| Nr. 10 | Abschnitt 17, Nr. 5 | Finger weg von jeder „Altersvorsorge-Investition", bei der alte Menschen vorher zahlen: Karte kaufen, einen Pflegeheimplatz kaufen, Seniorenwohnung kaufen, Reisen und Wohnen im Alter und Produkte für alte Menschen kaufen und ein Abo für Pflegehilfsmittel abschließen sind derselbe Betrug | …, bei denen du vorher zahlst, die andere sind Mittel, die die Medikamente ersetzen, siehe … |
| Nr. 16 | Abschnitt 19, Nr. 11 | Schäden durch Staub, Lärm und chemische Giftstoffe sind nicht rückgängig zu machen: Schutzausrüstung muss die Firma stellen, Arbeit ohne Schutzmaßnahmen darfst du ablehnen | …gegen schützen eine Schutzbrille und ein Schild, nicht eine Blaulichtfilter-Brille, siehe … |
| Nr. 16 | Abschnitt 13, Nr. 6 | Ein Auge ist gespannt und schmerzt, ist rot, um Lampen ein Regenbogenring, dazu Kopfschmerz, Übelkeit und Erbrechen: noch am selben Tag in die augenärztliche Notaufnahme, in Deutschland heißt das Augenklinik oder augenärztlicher Bereitschaftsdienst über die 116117 | … geh noch am selben Tag in die augenärztliche Notaufnahme, siehe … |
| Nr. 16 | Abschnitt 30, Nr. 4 | Lass dein Kind täglich 2 Stunden draußen sein, das ist derzeit die einzige Maßnahme gegen Kurzsichtigkeit, die durch einen verlosten Versuch gestützt ist | … Wie Kinder und Jugendliche Kurzsichtigkeit vermeiden, siehe … |
| Nr. 16 | Abschnitt 30, Nr. 12 | Wird eine Sehschwäche festgestellt, geh zur Refraktion mit weiten Pupillen zum Augenarzt und danach in den genannten Abständen zur Kontrolle | … Wie Kinder und Jugendliche Kurzsichtigkeit vermeiden, siehe … |
| Nr. 16 | Abschnitt 30, Nr. 9 | Kauf keine Produkte und Leistungen, die versprechen, „Kurzsichtigkeit zu heilen" oder „die Werte zu senken" | … Wie Kinder und Jugendliche Kurzsichtigkeit vermeiden, siehe … |
| Nr. 18 | Abschnitt 1, Nr. 7 | Blutdruck messen, bei hohem Wert mit Medikamenten auf den Zielwert senken | … Blutdruck, Blutzucker und Hepatitis B siehe … |
| Nr. 18 | Abschnitt 1, Nr. 8 | Ab 35 mit Übergewicht einmal den Nüchternblutzucker messen lassen, auch bei normalem Wert alle drei Jahre wieder | … Blutdruck, Blutzucker und Hepatitis B siehe … |
| Nr. 18 | Abschnitt 1, Nr. 14 | Hepatitis-B-Marker bestimmen lassen, ohne Antikörper gegen Hepatitis B impfen | … Blutdruck, Blutzucker und Hepatitis B siehe … |
| Nr. 18 | Abschnitt 1, Nr. 17 | Frauen ab 50 zum Brustkrebs-Screening, alle zwei Jahre eine Mammografie | … Brust, Gebärmutterhals und Darmkrebs siehe … |
| Nr. 18 | Abschnitt 1, Nr. 18 | Frauen ab 35 zum Gebärmutterhalskrebs-Screening, vorrangig HPV-Test | … Brust, Gebärmutterhals und Darmkrebs siehe … |
| Nr. 18 | Abschnitt 1, Nr. 19 | Ab 50 zum Darmkrebs-Screening, immunchemischer Stuhltest auf verborgenes Blut oder Darmspiegelung | … Brust, Gebärmutterhals und Darmkrebs siehe … |
| Nr. 18 | Abschnitt 1, Nr. 23 | Auf Helicobacter pylori testen, bei positivem Befund eradizieren | … Helicobacter pylori und die Niedrigdosis-CT siehe … |
| Nr. 18 | Abschnitt 1, Nr. 24 | Starke Raucher jedes Jahr einmal zur Niedrigdosis-CT des Brustkorbs | … Helicobacter pylori und die Niedrigdosis-CT siehe … |
| Nr. 18 | Abschnitt 1, Nr. 31 | Nach einer Risikosituation einmal auf HIV testen lassen, beim Gesundheitsamt anonym und vertraulich | … Nach riskantem Verhalten geh zum Test, siehe … |
| Nr. 18 | Abschnitt 6, Nr. 7 | Mach ohne Symptome kein Ganzkörper-PET-CT und kein Tumor-Marker-Paket | … ohne Belege in solchen Paketen sind die Tumor-Marker und die Ganzkörperbildgebung, siehe … |
| Nr. 18 | Abschnitt 6, Nr. 19 | Fang nicht mit harnsäuresenkenden Medikamenten an, nur weil der Check-up eine erhöhte Harnsäure zeigt und du nie Schmerzen hattest | …e zeigt, aber nie Schmerzen auftraten, oder Gallenblasensteine, aber nie Schmerzen, siehe … |
| Nr. 18 | Abschnitt 6, Nr. 20 | Lass die Gallenblase nicht vorbeugend entfernen, nur weil der Check-up Gallenblasensteine zeigt und du nie Schmerzen hattest | …ber nie Schmerzen, siehe Nr. 19 in diesem Abschnitt (erhöhte Harnsäure ohne Symptome) und … |
| Nr. 19 | Abschnitt 16, Nr. 9 | Nimm nach der Diagnose Gicht dauerhaft harnsäuresenkende Medikamente und halte die Blut-Harnsäure dauerhaft unter 360 µmol/L | … Genaueres siehe … |
| Nr. 19 | Abschnitt 16, Nr. 9 | Nimm nach der Diagnose Gicht dauerhaft harnsäuresenkende Medikamente und halte die Blut-Harnsäure dauerhaft unter 360 µmol/L | … Bevor du es wirklich anfängst, lass zuerst diesen Genotyp bestimmen, siehe … |
| Nr. 21 | Abschnitt 16, Nr. 8 | Wenn du schon einmal einen Nierenstein hattest, trink täglich 2,5–3 Liter Wasser und halte das Salz unter 6 Gramm | … Der Eintrag zum Wassertrinken siehe … |
| Nr. 22 | Abschnitt 5, Nr. 33 | Bei Schmuck, teuren Uhren und Sammlerspielzeug rechne mit „dem ausgegebenen Geld", nicht mit „dem gesparten Geld" | …Wie du Material und Zertifikat prüfst und warum es sich als Geldanlage nicht lohnt, siehe … |
| Nr. 22 | Abschnitt 5, Nr. 34 | Bei Schmuck und Jade nur einen Prüfbericht einer akkreditierten Stelle akzeptieren und die Stelle im Verzeichnis der Akkreditierungsstelle prüfen | …Wie du Material und Zertifikat prüfst und warum es sich als Geldanlage nicht lohnt, siehe … |
| Nr. 22 | Abschnitt 6, Nr. 15 | Gib kein Geld für Wahrsagerei, Tarot und Sternzeichen, um Entscheidungen zu treffen | … Geld für Wahrsagerei siehe … |
| Nr. 23 | Abschnitt 6, Nr. 24 | Gib kein zusätzliches Geld für Wohnung, Auto und Bekanntenkreis aus, um „im Umfeld eine Stufe höher zu steigen" | … Das Budget, das für „eine Stufe besser als die anderen" draufgeht, siehe … |
| Nr. 24 | Abschnitt 4, Nr. 18 | Bei der Wahl der Wohnung zuerst auf die Pendelzeit achten und den einfachen Weg verkürzen | … Wonach sich die Wahl des Wohnorts richten soll, siehe … |
| Nr. 24 | Abschnitt 3, Nr. 21 | Mach „wie es anderen geht" nicht zur täglichen Pflichtlektüre: begrenze oder schließe Apps, in denen du die Beiträge von Gleichaltrigen durchblätterst | … Im Netz ständig nach oben vergleichen siehe … |
| Nr. 24 | Abschnitt 6, Nr. 23 | Erwarte nicht, dass Einkaufen die Stimmung oder das Identitätsgefühl bessert | … Die Größe des Nutzens ist mit „mittel" angesetzt, das folgt der Bezugsgröße von … |
| Nr. 24 | Abschnitt 6, Nr. 23 | Erwarte nicht, dass Einkaufen die Stimmung oder das Identitätsgefühl bessert | … Einkaufen zur Stimmungsregelung siehe … |
| Nr. 25 | Abschnitt 4, Nr. 10 | Was du brauchst, in Reichweite legen, Unerwünschtes wegräumen, nicht auf die Selbstbeherrschung im Moment setzen | …domisierte Studien gestützt ist, sind Änderungen der Umgebung und der Formulierung, siehe … |
| Nr. 25 | Abschnitt 4, Nr. 1 | Den Vorsatz in „um wie viel Uhr, wo, und wenn etwas passiert, dann mache ich was" umschreiben | …er Umgebung und der Formulierung, siehe Abschnitt 4, Nr. 10 (Unerwünschtes wegräumen) und … |
| Nr. 26 | Abschnitt 1, Nr. 23 | Auf Helicobacter pylori testen, bei positivem Befund eradizieren | …obacter pylori und die langfristige Einnahme von Schmerzmitteln, was zu prüfen ist, siehe … |
| Nr. 26 | Abschnitt 2, Nr. 28 | Täglich fünf Portionen (etwa 400 g) Obst und Gemüse essen | … Wer das Gewicht steuern will, für den ist belegt, was und wie viel man isst, siehe … |
| Nr. 26 | Abschnitt 2, Nr. 29 | Weniger hochverarbeitete Lebensmittel (Chips, Instantnudeln, Gebäck, Fertiggerichte) | …nd wie viel man isst, siehe Abschnitt 2, Nr. 28 (täglich fünf Portionen Obst und Gemüse), … |
| Nr. 26 | Abschnitt 2, Nr. 33 | Den BMI zwischen 20 und 25 halten und bei Übergewicht abnehmen | …rtionen Obst und Gemüse), Abschnitt 2, Nr. 29 (weniger hochverarbeitete Lebensmittel) und … |
| Nr. 26 | Abschnitt 28, Nr. 1 | Steuere dein Gewicht nicht mit extremem Hungern, Fasten oder Erbrechen — willst du abnehmen, dann über mehr Bewegung | … Extremes Fasten und selbst herbeigeführtes Erbrechen sind etwas anderes, siehe … |
| Nr. 26 | Abschnitt 6, Nr. 20 | Lass die Gallenblase nicht vorbeugend entfernen, nur weil der Check-up Gallenblasensteine zeigt und du nie Schmerzen hattest | … tun ist, wenn der Check-up Gallenblasensteine zeigt, aber nie Schmerzen auftraten, siehe … |

## 07-leben-ohne-geld

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 6 | Abschnitt 7, Nr. 7 | Liegt dein Einkommen unter der Bedarfsgrenze, beantrage Bürgergeld | …r eine dauerhafte Notlage kommt die laufende Grundsicherung in Betracht (Bürgergeld siehe … |
| Nr. 7 | Abschnitt 7, Nr. 9 | Gesetzliche Krankenversicherung: die Beiträge nicht abreißen lassen, Familienmitglieder sind beitragsfrei | … der Beitrag zur Krankenversicherung ist abgedeckt (gesetzliche Krankenversicherung siehe … |
| Nr. 7 | Abschnitt 7, Nr. 10 | Bei schwerer Krankheit zuerst Krankenversicherung, Krankengeld und Härtefallhilfe — keine Online-Kredite anfassen | …ng siehe Nr. 9), bei schwerer Krankheit hilft die Härtefallhilfe (schwere Krankheit siehe … |
| Nr. 7 | Abschnitt 7, Nr. 3 | Wenn du dir einen Prozess nicht leisten kannst, beantrage Rechtshilfe — Lohnklagen, Unterhalt und Arbeitsunfälle fallen ohnehin darunter | …hilft die Härtefallhilfe (schwere Krankheit siehe Nr. 10), und es gibt Rechtshilfe (siehe … |
| Nr. 9 | Abschnitt 7, Nr. 1 | Bei Arbeitslosigkeit zuerst online Arbeitslosengeld beantragen | …ld bezieht, ist krankenversichert, ohne selbst Beiträge zu zahlen (Arbeitslosengeld siehe … |
| Nr. 10 | Abschnitt 24, Nr. 9 | Bleiben nach der Behandlung tatsächlich Funktionsstörungen zurück, beantrage beim Versorgungsamt den Schwerbehindertenausweis | … die Notfallbehandlung zuerst steht in … |
| Nr. 20 | Abschnitt 5, Nr. 39 | Versichere nur die Verluste, die du nicht tragen kannst; die Verluste, die du trägst, deckst du mit dem Notgroschen | … Welche Verluste sich mit einer Versicherung abdecken lassen, siehe … |
| Nr. 20 | Abschnitt 7, Nr. 9 | Gesetzliche Krankenversicherung: die Beiträge nicht abreißen lassen, Familienmitglieder sind beitragsfrei | … Zahl zuerst den Beitrag zur Krankenkasse (gesetzliche Krankenversicherung siehe … |
| Nr. 21 | Abschnitt 7, Nr. 4 | Wenn du nicht mehr weiterweißt, geh in die Notunterkunft; dort gibt es Essen, Unterkunft und ein Ticket nach Hause | … Die Notunterkunft aus … |

## 08-lass-dich-nicht-hereinziehen

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 3 | Abschnitt 8, Nr. 2 | Bei einem entdeckten Betrug sofort 110 anrufen, die Bank verständigen und die Zahlung stoppen lassen, nicht selbst nachforschen | … Wie du die Zahlung stoppst, steht in … |
| Nr. 4 | Abschnitt 8, Nr. 2 | Bei einem entdeckten Betrug sofort 110 anrufen, die Bank verständigen und die Zahlung stoppen lassen, nicht selbst nachforschen | … Wie du eine Zahlung stoppst, steht in … |
| Nr. 4 | Abschnitt 8, Nr. 2 | Bei einem entdeckten Betrug sofort 110 anrufen, die Bank verständigen und die Zahlung stoppen lassen, nicht selbst nachforschen | … Hast du schon überwiesen, siehe … |
| Nr. 5 | Abschnitt 8, Nr. 34 | Wurdest du in Haft genommen und dann das Verfahren eingestellt oder freigesprochen, kannst du Entschädigung für die Haft verlangen | … Wirst du zu Unrecht in Haft genommen, kannst du Haftentschädigung verlangen, siehe … |
| Nr. 5 | Abschnitt 8, Nr. 32 | Wirst du mit erfundenen Tatsachen einer Straftat beschuldigt, kannst du verlangen, dass er verfolgt wird: die falsche Verdächtigung steht unter Strafe | … … |
| Nr. 5 | Abschnitt 8, Nr. 33 | Bei unzureichenden Beweisen muss freigesprochen werden, verbotene Vernehmungsmethoden dürfen nicht verwertet werden; nach dem Urteil gibt es den Weg der Wiederaufnahme | … Nr. 32 in diesem Abschnitt (Verfolgung verlangen), … |
| Nr. 5 | Abschnitt 8, Nr. 34 | Wurdest du in Haft genommen und dann das Verfahren eingestellt oder freigesprochen, kannst du Entschädigung für die Haft verlangen | …r. 32 in diesem Abschnitt (Verfolgung verlangen), Nr. 33 (Freispruch und Wiederaufnahme), … |
| Nr. 6 | Abschnitt 8, Nr. 1 | Nach einem Verkehrsunfall zuerst anhalten, retten und die Polizei rufen, nicht wegfahren | … Wie du das machst, steht in … |
| Nr. 6 | Abschnitt 8, Nr. 5 | Bei einer Anschuldigung oder Vorladung zuerst einen Anwalt nehmen, nichts privat regeln und keine Aufzeichnungen löschen | … Ein Anwalt und ein wahrheitsgemäßes Geständnis widersprechen sich nicht, siehe … |
| Nr. 11 | Abschnitt 13, Nr. 37 | Stößt du auf eine Gruppe, die sich prügelt: zurückweichen und weggehen, nicht hingehen und schlichten, nicht zugucken, keine Waffe vom Boden aufheben; willst du Anzeige erstatten, geh auf sichere Distanz und ruf die 110 | …mit leeren Händen in eine Schlägerei unter Fremden einzugreifen hat eigene Risiken, siehe … |
| Nr. 11 | Abschnitt 8, Nr. 10 | Bei einem Streit zuerst die Polizei rufen und nicht zuschlagen, wer zuerst zuschlägt, verliert fast immer | … Die Standardbewegung bleibt, zurückweichen und die Polizei rufen, wie in … |
| Nr. 11 | Abschnitt 8, Nr. 5 | Bei einer Anschuldigung oder Vorladung zuerst einen Anwalt nehmen, nichts privat regeln und keine Aufzeichnungen löschen | … Vor der ersten förmlichen Vernehmung durch die Polizei einen Anwalt nehmen, siehe … |
| Nr. 11 | Abschnitt 8, Nr. 34 | Wurdest du in Haft genommen und dann das Verfahren eingestellt oder freigesprochen, kannst du Entschädigung für die Haft verlangen | …der Freispruch erteilt, kannst du für die Tage in Haft Haftentschädigung verlangen, siehe … |
| Nr. 12 | Abschnitt 7, Nr. 2 | Bei ausstehendem Lohn zuerst mahnen und Verzugszinsen verlangen, dann beim Arbeitsgericht klagen — ein Urteil heißt noch nicht bezahlt | … Wie du ausstehenden Lohn durchsetzt, steht in … |
| Nr. 12 | Abschnitt 9, Nr. 14 | Beim Eintreiben von Schulden: niemanden festhalten, niemanden einsperren und nicht bis in die Wohnung folgen und dort hängen bleiben | … Die rote Linie beim Eintreiben steht in … |
| Nr. 13 | Abschnitt 8, Nr. 14 | Wenn der Gedanke „ich nehme jemanden mit" oder „gemeinsam sterben" auftaucht, behandle es als Notfall: geh vom Ort weg, gib Auto- und Messerschlüssel ab und ruf die Telefonseelsorge an | … Wenn der Gedanke schon so weit ist, siehe … |
| Nr. 14 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die Telefonseelsorge anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Wer sich selbst etwas antun will, siehe … |
| Nr. 14 | Abschnitt 3, Nr. 19 | Wenn du niedergeschlagen bist, tu zuerst die Dinge mit dem besten Kosten-Nutzen-Verhältnis: in Bewegung kommen, Sonnenlicht tanken, rechtzeitig schlafen, mit jemandem reden, die Telefonseelsorge anrufen | … Was bei gedrückter Stimmung zuerst hilft, steht in … |
| Nr. 16 | Abschnitt 8, Nr. 36 | Wirst du online gemobbt: erst Schutz an, erst Beweise sichern, dann unter Plattform, einstweiliger Verfügung und Strafantrag einen der drei Wege wählen | … Wie du dich nach einem Shitstorm gegen dich verhältst, steht in … |
| Nr. 19 | Abschnitt 19, Nr. 1 | Überstunden bezahlt nur der Tarif- oder Arbeitsvertrag; die Arbeitszeit ist gesetzlich begrenzt; zahlt die Firma nicht, beschwer dich bei der Arbeitsschutzbehörde | …erstunden und nicht genommener Urlaub laufen über die Regelungen des Arbeitsrechts, siehe … |
| Nr. 19 | Abschnitt 19, Nr. 2 | Der gesetzliche Mindesturlaub beträgt 24 Werktage und hängt nicht von der Betriebszugehörigkeit ab; nicht genommener Urlaub wird nur bei Beendigung abgegolten | …erstunden und nicht genommener Urlaub laufen über die Regelungen des Arbeitsrechts, siehe … |
| Nr. 19 | Abschnitt 8, Nr. 18 | Beim Verleihen von Geld einen klaren Schuldschein schreiben; bevor du für jemanden bürgst, überleg dir, ob du bereit bist, seine Schulden zu zahlen | … Schuldschein und Bürgschaft stehen in … |
| Nr. 19 | Abschnitt 8, Nr. 20 | Bei einer Klage oder Vollstreckung die Vermögensauskunft wahrheitsgemäß abgeben und zahlen, was du kannst, übertrage Haus und Geld nicht an Angehörige oder Firmen | … Das Vollstreckungsstadium steht in … |
| Nr. 20 | Abschnitt 8, Nr. 21 | Stehst du im Schuldnerverzeichnis, klär zuerst, warum du eingetragen bist, und lass alles, was sich korrigieren lässt, korrigieren | … Was nach einem Eintrag ins Schuldnerverzeichnis zu tun ist, steht in … |
| Nr. 20 | Abschnitt 8, Nr. 5 | Bei einer Anschuldigung oder Vorladung zuerst einen Anwalt nehmen, nichts privat regeln und keine Aufzeichnungen löschen | …leich ist nach der Unterschrift einzuhalten, wie du nach einer Anzeige vorgehst, steht in … |
| Nr. 21 | Abschnitt 8, Nr. 20 | Bei einer Klage oder Vollstreckung die Vermögensauskunft wahrheitsgemäß abgeben und zahlen, was du kannst, übertrage Haus und Geld nicht an Angehörige oder Firmen | … Wie du eine Vollstreckung insgesamt angehst, steht in … |
| Nr. 22 | Abschnitt 8, Nr. 2 | Bei einem entdeckten Betrug sofort 110 anrufen, die Bank verständigen und die Zahlung stoppen lassen, nicht selbst nachforschen | … Wie du eine Zahlung stoppst, steht in … |
| Nr. 30 | Abschnitt 9, Nr. 17 | Ist der andere unter 14 Jahre alt, darf kein Geschlechtsverkehr stattfinden; „sie war einverstanden" ist kein Grund | … Zur Altersfeststellung siehe … |
| Nr. 30 | Abschnitt 9, Nr. 17 | Ist der andere unter 14 Jahre alt, darf kein Geschlechtsverkehr stattfinden; „sie war einverstanden" ist kein Grund | … wie das Alter festgestellt wird, siehe … |
| Nr. 30 | Abschnitt 8, Nr. 31 | Nach Sex oder Nacktchat: Verlangt die andere Seite mit einer Anzeige, Fotos oder einem Hinweis an deinen Arbeitgeber Geld, gib keinen Cent, lösch keine Aufzeichnung und ruf sofort die Polizei | …iss trinkst, bestehen zugleich das Risiko der Anschuldigung und das der Erpressung, siehe … |
| Nr. 31 | Abschnitt 8, Nr. 5 | Bei einer Anschuldigung oder Vorladung zuerst einen Anwalt nehmen, nichts privat regeln und keine Aufzeichnungen löschen | … oder das Konto und blockier nicht einfach, damit löschst du deine eigenen Beweise, siehe … |
| Nr. 31 | Abschnitt 8, Nr. 35 | Bist du selbst Geschädigter und forderst Ersatz, geh über eine Klage oder einen Anwalt; geh nicht allein zum Treffen des anderen und verbinde „Geld" nicht mit „ich veröffentliche nichts" in einem Satz | …er und forderst vom Schädiger Ersatz, ist ein hoher Betrag nicht gleich Erpressung, siehe … |
| Nr. 32 | Abschnitt 8, Nr. 33 | Bei unzureichenden Beweisen muss freigesprochen werden, verbotene Vernehmungsmethoden dürfen nicht verwertet werden; nach dem Urteil gibt es den Weg der Wiederaufnahme | … Beweislast und Rechtsbehelfe, wenn du selbst beschuldigt wirst, stehen in … |
| Nr. 32 | Abschnitt 8, Nr. 34 | Wurdest du in Haft genommen und dann das Verfahren eingestellt oder freigesprochen, kannst du Entschädigung für die Haft verlangen | … Beweislast und Rechtsbehelfe, wenn du selbst beschuldigt wirst, stehen in … |
| Nr. 33 | Abschnitt 8, Nr. 5 | Bei einer Anschuldigung oder Vorladung zuerst einen Anwalt nehmen, nichts privat regeln und keine Aufzeichnungen löschen | … Bei finanzieller Not kannst du Prozesskostenhilfe beantragen, siehe … |
| Nr. 33 | Abschnitt 8, Nr. 5 | Bei einer Anschuldigung oder Vorladung zuerst einen Anwalt nehmen, nichts privat regeln und keine Aufzeichnungen löschen | … nach der ersten Vernehmung einen Anwalt beauftragen, siehe … |
| Nr. 35 | Abschnitt 8, Nr. 5 | Bei einer Anschuldigung oder Vorladung zuerst einen Anwalt nehmen, nichts privat regeln und keine Aufzeichnungen löschen | … Wie du nach einer Verfahrenseröffnung vorgehst, steht in … |
| Nr. 35 | Abschnitt 8, Nr. 33 | Bei unzureichenden Beweisen muss freigesprochen werden, verbotene Vernehmungsmethoden dürfen nicht verwertet werden; nach dem Urteil gibt es den Weg der Wiederaufnahme | … Wie du nach einer Verfahrenseröffnung vorgehst, steht in … |
| Nr. 35 | Abschnitt 8, Nr. 34 | Wurdest du in Haft genommen und dann das Verfahren eingestellt oder freigesprochen, kannst du Entschädigung für die Haft verlangen | … Wie du nach einer Verfahrenseröffnung vorgehst, steht in … |
| Nr. 35 | Abschnitt 8, Nr. 31 | Nach Sex oder Nacktchat: Verlangt die andere Seite mit einer Anzeige, Fotos oder einem Hinweis an deinen Arbeitgeber Geld, gib keinen Cent, lösch keine Aufzeichnung und ruf sofort die Polizei | … Wenn die andere Seite mit einem Druckmittel Geld von dir fordert, siehe … |
| Nr. 36 | Abschnitt 14, Nr. 8 | Du hast das Recht, deine personenbezogenen Daten einzusehen, zu kopieren, zu berichtigen und zu löschen, und kannst bei Ablehnung klagen | … du von der Plattform die Löschung deiner personenbezogenen Daten verlangen willst, siehe … |
| Nr. 36 | Abschnitt 8, Nr. 16 | Beschimpfe und verleumde niemanden im Netz und verbreite nichts Ungeprüftes; bei einem Shitstorm erst Beweise sichern, dann die Polizei rufen | … Erstens nicht zurückschimpfen, das machen aus dir den Bestraften aus … |
| Nr. 37 | Abschnitt 9, Nr. 20 | Erfinde keinen Unfall und übertreibe keinen Schaden für die Schadensregulierung: das ist Versicherungsbetrug, und wer für dich aussagt, repariert oder begutachtet, zählt mit | …adens, ist ebenfalls eine Straftat und zählt Helfer, die falsch aussagen, mit dazu, siehe … |
| Nr. 37 | Abschnitt 8, Nr. 14 | Wenn der Gedanke „ich nehme jemanden mit" oder „gemeinsam sterben" auftaucht, behandle es als Notfall: geh vom Ort weg, gib Auto- und Messerschlüssel ab und ruf die Telefonseelsorge an | … Den Impuls, einem Familienmitglied zu schaden, behandle wie einen Notfall, siehe … |
| Nr. 37 | Abschnitt 8, Nr. 15 | Wenn jemand aus deinem Umfeld „niemand soll es gut haben" oder „ich nehme das Kind mit" sagt, halt es nicht für Gerede: nimm die Warnung ernst, hol sofort Hilfe und verheimliche sie nicht | … Den Impuls, einem Familienmitglied zu schaden, behandle wie einen Notfall, siehe … |
| Nr. 38 | Abschnitt 8, Nr. 2 | Bei einem entdeckten Betrug sofort 110 anrufen, die Bank verständigen und die Zahlung stoppen lassen, nicht selbst nachforschen | … Das Sperrverfahren nach einem Betrug steht in … |
| Nr. 38 | Abschnitt 8, Nr. 36 | Wirst du online gemobbt: erst Schutz an, erst Beweise sichern, dann unter Plattform, einstweiliger Verfügung und Strafantrag einen der drei Wege wählen | … Online-Mobbing steht in … |
| Nr. 39 | Abschnitt 24, Nr. 10 | Dank dem Arzt, der dich gerettet hat, über einen Dankbrief und die Klinikbewertung, nicht über einen Umschlag: Verboten sind die Geschenke, nicht der Dank | … Der Umschlag im Krankenhaus folgt einem anderen Regelwerk, siehe … |
| Nr. 39 | Abschnitt 8, Nr. 38 | Verlang bei der Anzeige den schriftlichen Eingangsnachweis, bei Einstellung einen Bescheid: binnen 2 Wochen Beschwerde, dann Antrag auf gerichtliche Entscheidung | … Verlangt die andere Seite wirklich einen Vorteil, geh über den Weg aus … |
| Nr. 40 | Abschnitt 19, Nr. 8 | Sichere vor dem Ausscheiden Lohnabrechnungen, Anwesenheitsnachweise, Arbeitsvertrag, Sozialversicherungsauszug und Chatverläufe | … Was du vor dem Ausscheiden sichern solltest, steht in … |
| Nr. 40 | Abschnitt 8, Nr. 16 | Beschimpfe und verleumde niemanden im Netz und verbreite nichts Ungeprüftes; bei einem Shitstorm erst Beweise sichern, dann die Polizei rufen | …ffentlichen der Worte eines anderen kann Streit über Privatsphäre und Ruf auslösen, siehe … |
| Nr. 41 | Abschnitt 8, Nr. 1 | Nach einem Verkehrsunfall zuerst anhalten, retten und die Polizei rufen, nicht wegfahren | … Was am Unfallort zu tun ist, steht in … |
| Nr. 42 | Abschnitt 8, Nr. 41 | Passiert vor Ort etwas, fotografier zuerst die Totale, dann die Lagen zueinander, zuletzt Schaden und Verletzung, lösch Originalbild und Originalvideo nicht | … Fotos als Beweis siehe … |
| Nr. 42 | Abschnitt 8, Nr. 10 | Bei einem Streit zuerst die Polizei rufen und nicht zuschlagen, wer zuerst zuschlägt, verliert fast immer | … Greif nicht selbst ein, die Begründung steht in … |

## 09-rechtliche-rote-linien

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 4 | Abschnitt 8, Nr. 8 | Verleih niemandem Bankkarte, Handykarte oder Zahlungskonto, Geld für andere durchlaufen zu lassen ist kein Nebenjob | … dass du deine Bankkarte verleihst oder für andere Geld über eigene Konten leitest, siehe … |
| Nr. 5 | Abschnitt 8, Nr. 9 | Kostenlos den eigenen Kreditbericht prüfen, ob fremde Kredite und Karten darin stehen | … Wie du merkst, dass jemand einen Kredit auf deinen Namen aufgenommen hat, siehe … |
| Nr. 5 | Abschnitt 9, Nr. 4 | Ein „Nebenjob", der dich mit eigener Karte Geld annehmen, abheben oder weiterleiten lässt: mach ihn nicht, egal wie hoch die Belohnung ist | … Zum Abheben und Weiterleiten für andere siehe … |
| Nr. 7 | Abschnitt 11, Nr. 3 | Keine Skripte für Ticketkauf, Blitzverkäufe, Fake-Bestellungen oder das Abgreifen von Rabatten schreiben oder verkaufen, auch nicht als reine Tastendruck-Automatik | … Zum Verkauf von Skripten siehe … |
| Nr. 7 | Abschnitt 8, Nr. 8 | Verleih niemandem Bankkarte, Handykarte oder Zahlungskonto, Geld für andere durchlaufen zu lassen ist kein Nebenjob | … Zum Verkauf von Karten und Konten siehe … |
| Nr. 7 | Abschnitt 9, Nr. 15 | Verleih deinen Ausweis nicht, benutze keinen fremden Ausweis und eröffne mit fremden Papieren keine Konten und kaufe keine Tickets | … Zum Verkauf von Karten und Konten siehe  (Bank- und Handykarten nicht verleihen) und … |
| Nr. 14 | Abschnitt 8, Nr. 18 | Beim Verleihen von Geld einen klaren Schuldschein schreiben; bevor du für jemanden bürgst, überleg dir, ob du bereit bist, seine Schulden zu zahlen | … Wie du einen Schuldschein schreibst, siehe … |
| Nr. 15 | Abschnitt 8, Nr. 27 | Werde kein vorgeschobener Geschäftsführer und verleih deinen Namen nicht für eine Firmengründung | … Die Folgen dieser beiden Fälle siehe … |
| Nr. 15 | Abschnitt 8, Nr. 8 | Verleih niemandem Bankkarte, Handykarte oder Zahlungskonto, Geld für andere durchlaufen zu lassen ist kein Nebenjob | … Die Folgen dieser beiden Fälle siehe … |
| Nr. 18 | Abschnitt 8, Nr. 10 | Bei einem Streit zuerst die Polizei rufen und nicht zuschlagen, wer zuerst zuschlägt, verliert fast immer | …er, der zuerst zuschlägt, fast immer verliert, und wo die Grenze der Notwehr liegt, siehe … |
| Nr. 18 | Abschnitt 8, Nr. 11 | Gegen einen Angriff, dem du nicht ausweichen kannst, darfst du dich wehren, aber nur gegen den Angreifer, und du hörst auf, wenn er aufhört | … Die Rechnung für ein Zuschlagen aus aufgestauter Wut siehe … |
| Nr. 18 | Abschnitt 8, Nr. 12 | Wenn du mit jemandem Streit hast, ob ausstehender Lohn, Kündigung oder ergaunertes Geld, geh den Weg über Mahnung und Klage, statt dich an der Person zu rächen | … Die Rechnung für ein Zuschlagen aus aufgestauter Wut siehe … |
| Nr. 18 | Abschnitt 8, Nr. 13 | Auch wenn du wütend bist, richte nie Unbeteiligte zugrunde: Mit dem Auto in eine Menschenmenge fahren und an öffentlichen Orten angreifen ist eine schwere Straftat, bei einem Toten drohen lebenslange Freiheitsstrafen | … Die Rechnung für ein Zuschlagen aus aufgestauter Wut siehe … |
| Nr. 18 | Abschnitt 8, Nr. 14 | Wenn der Gedanke „ich nehme jemanden mit" oder „gemeinsam sterben" auftaucht, behandle es als Notfall: geh vom Ort weg, gib Auto- und Messerschlüssel ab und ruf die Telefonseelsorge an | … Die Rechnung für ein Zuschlagen aus aufgestauter Wut siehe … |
| Nr. 19 | Abschnitt 27, Nr. 7 | Lern diese Liste „sofort ins Krankenhaus" auswendig, sie gilt in der Schwangerschaft und im ganzen Jahr nach der Geburt | …Liste, wann du in Schwangerschaft und nach der Geburt sofort ins Krankenhaus musst, siehe … |
| Nr. 19 | Abschnitt 27, Nr. 16 | Überspring die Untersuchung in den ersten Wochen nach der Geburt nicht | …olle 42 Tage nach der Geburt ist zugleich ein Screening auf postpartale Depression, siehe … |
| Nr. 19 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die Telefonseelsorge anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Bei Suizidgedanken ruf die Telefonseelsorge unter 0800 111 0 111 oder 116 123, siehe … |
| Nr. 20 | Abschnitt 5, Nr. 26 | Kauf die Kfz-Haftpflichtversicherung mit hoher Deckungssumme: Die gesetzliche Mindestdeckung von 7,5 Millionen Euro für Personenschäden ist nur die Untergrenze | … Wie du eine Kfz-Versicherung richtig abschließt, siehe … |
| Nr. 20 | Abschnitt 8, Nr. 37 | „Erst für jemanden eine Versicherung abschließen, dann handeln" ist rechtlich von vornherein verschlossen: kein Cent ist zu holen, die Strafe läuft als Tötung plus Versicherungsmissbrauch | …ehörigen versichert und dann absichtlich tötet, wird wegen mehrerer Taten bestraft, siehe … |
| Nr. 20 | Abschnitt 5, Nr. 13 | Melde Ehepartner und Kinder bei der Krankenkasse zur Familienversicherung an, dann sind sie beitragsfrei mitversichert | … Die Krankenversicherung folgt eigenen Regeln, siehe die Anmerkung zu … |
| Nr. 21 | Abschnitt 9, Nr. 5 | Wenn dich jemand zum „Aufhübschen von Unterlagen" für einen Kredit oder zu einer Beteiligung am Kreditbetrag holen will: mach in keinem Fall mit | … Die Fallen von Onlinekrediten und Krediten über „Aufhübschen von Unterlagen" siehe … |

## 10-liebe-und-ehe

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 4 | Abschnitt 10, Nr. 15 | Frag beim emotionalen Wert nicht nur, ob er da ist, sondern ob der andere dir seelische Unterstützung gibt. Schau auf die Qualität der Beziehung | … Dieselbe Sache behandelt der Eintrag zur Beziehungsqualität (… |
| Nr. 12 | Abschnitt 8, Nr. 18 | Beim Verleihen von Geld einen klaren Schuldschein schreiben; bevor du für jemanden bürgst, überleg dir, ob du bereit bist, seine Schulden zu zahlen | … Die Regeln zu Schuldschein und Bürgschaft stehen in … |
| Nr. 17 | Abschnitt 10, Nr. 8 | Rechne den Gesundheitsnutzen mit, aber mit Abschlag, weil es Beobachtungsdaten sind | … Er geht aber nicht automatisch in deinen Gesundheitsnutzen (… |
| Nr. 17 | Abschnitt 10, Nr. 15 | Frag beim emotionalen Wert nicht nur, ob er da ist, sondern ob der andere dir seelische Unterstützung gibt. Schau auf die Qualität der Beziehung | …ber nicht automatisch in deinen Gesundheitsnutzen (Nr. 8) oder in die Beziehungsqualität (… |
| Nr. 17 | Abschnitt 10, Nr. 9 | Rechne die Zeitrechnung als „unbezahlte Arbeit". Klärt die Aufteilung, bevor ihr heiratet | … Die Zeitrechnung (… |
| Nr. 17 | Abschnitt 10, Nr. 10 | Schau in der Geldrechnung zuerst auf die gesetzliche Regel und entscheide dann über einen Ehevertrag | … Die Zeitrechnung (Nr. 9), die Geldrechnung (… |
| Nr. 17 | Abschnitt 10, Nr. 11 | Wenn Eltern beim Hauskauf Geld geben, halt gleich bei der Überweisung schriftlich fest, ob es ein Darlehen oder eine Schenkung ist | … Die Zeitrechnung (Nr. 9), die Geldrechnung (… |
| Nr. 17 | Abschnitt 10, Nr. 12 | Große Schulden, die ein Ehepartner allein aufnimmt, werden nicht automatisch deine, wenn du nicht unterschreibst und sie nicht bestätigst | … Die Zeitrechnung (Nr. 9), die Geldrechnung (… |
| Nr. 17 | Abschnitt 10, Nr. 16 | Rechne die Kosten des Ausstiegs: Die Scheidung läuft immer über das Gericht, einvernehmlich geht es schneller | … Die Zeitrechnung (Nr. 9), die Geldrechnung (Nr. 10 bis 12) und die Kosten des Ausstiegs (… |
| Nr. 18 | Abschnitt 8, Nr. 42 | Wirst du häuslicher Gewalt ausgesetzt: erst die Polizei rufen und ein Einsatzprotokoll hinterlassen, dann beim Gericht eine Gewaltschutzanordnung beantragen, sie setzt keine Scheidung voraus und kostet nichts | … siehe … |
| Nr. 18 | Abschnitt 10, Nr. 16 | Rechne die Kosten des Ausstiegs: Die Scheidung läuft immer über das Gericht, einvernehmlich geht es schneller | … Wenn du überlegst, ob du gehst, stehen die Kosten des Ausstiegs in … |

## 11-rote-linien-fuer-techniker

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 2 | Abschnitt 11, Nr. 3 | Keine Skripte für Ticketkauf, Blitzverkäufe, Fake-Bestellungen oder das Abgreifen von Rabatten schreiben oder verkaufen, auch nicht als reine Tastendruck-Automatik | … Skripte, die nur Anfragen senden, sind in … |
| Nr. 7 | Abschnitt 11, Nr. 11 | Code, der in der Arbeitszeit und mit Firmenressourcen entsteht, gehört der Firma. Eigene Open-Source-Projekte mit eigener Zeit und eigener Ausrüstung machen, keinen Firmencode beimischen | … Zum Urheberrecht an selbst geschriebenem Code siehe … |

## 12-gruenden-und-geschaeft

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 2 | Abschnitt 8, Nr. 18 | Beim Verleihen von Geld einen klaren Schuldschein schreiben; bevor du für jemanden bürgst, überleg dir, ob du bereit bist, seine Schulden zu zahlen | … Die allgemeinen Regeln zu Schuldschein und Bürgschaft siehe … |
| Nr. 2 | Abschnitt 12, Nr. 1 | Nur mit Geld gründen, dessen Verlust du verkraftest: nicht ans Familienvermögen gehen, nichts leihen | …enau, was du mit dieser Seite aufgibst, und halte die Bürgschaftssumme unter der Zahl aus … |
| Nr. 4 | Abschnitt 8, Nr. 27 | Werde kein vorgeschobener Geschäftsführer und verleih deinen Namen nicht für eine Firmengründung | … Das Risiko eines vorgeschobenen gesetzlichen Vertreters siehe … |
| Nr. 6 | Abschnitt 12, Nr. 3 | Vor der Eröffnung die richtige Rechtsform wählen: Einzelunternehmer und Personengesellschafter haften unbeschränkt, nur die GmbH ist „beschränkt" | …tal du einträgst, beeinflusst nicht das Ansehen, nur die Obergrenze deiner Haftung, siehe … |
| Nr. 6 | Abschnitt 12, Nr. 7 | Branchen mit Erlaubnispflicht: ohne Erlaubnis nicht eröffnen | …häftsbereiche mit Erlaubnispflicht dürfen ohne die Erlaubnis nicht eröffnet werden, siehe … |
| Nr. 7 | Abschnitt 12, Nr. 8 | Bei Lebensmitteln zuerst die eigene Stufe bestimmen: Herstellung und Gastronomie brauchen eine Zulassung oder Erlaubnis, der Verkauf wird registriert | … Für den Umgang mit Lebensmitteln gilt zusätzlich das Lebensmittelrecht, siehe … |
| Nr. 7 | Abschnitt 12, Nr. 8 | Bei Lebensmitteln zuerst die eigene Stufe bestimmen: Herstellung und Gastronomie brauchen eine Zulassung oder Erlaubnis, der Verkauf wird registriert | … Welche Pflichten beim Umgang mit Lebensmitteln gelten, siehe … |
| Nr. 8 | Abschnitt 5, Nr. 31 | Wirst du durch ein unsicheres Lebensmittel geschädigt, sichere zuerst die Beweise und verlange Ersatz | … Wie viel Entschädigung ein Käufer verlangen kann, siehe … |
| Nr. 8 | Abschnitt 12, Nr. 6 | Vor der Registrierung Name, Geschäftssitz, Geschäftsbereich und Stammkapital festlegen; sind die Unterlagen vollständig, gibt es den Gewerbeschein sofort | … Rechtsform und Gewerbeanmeldung siehe … |
| Nr. 8 | Abschnitt 12, Nr. 7 | Branchen mit Erlaubnispflicht: ohne Erlaubnis nicht eröffnen | … Geschäftsbereich festlegen), ob ein anderer Geschäftszweig eine Erlaubnis braucht, siehe … |
| Nr. 9 | Abschnitt 5, Nr. 31 | Wirst du durch ein unsicheres Lebensmittel geschädigt, sichere zuerst die Beweise und verlange Ersatz | … wie viel Ersatz ein Käufer verlangen kann, steht in … |
| Nr. 10 | Abschnitt 6, Nr. 10 | Gib kein großes Geld für Nahrungsergänzungsmittel, Homöopathie, Schüßler-Salze und Stärkungsmittel aus, um „den Körper in Ordnung zu bringen" | … Wie ein Käufer solche Werbesprüche erkennt, siehe … |
| Nr. 11 | Abschnitt 12, Nr. 8 | Bei Lebensmitteln zuerst die eigene Stufe bestimmen: Herstellung und Gastronomie brauchen eine Zulassung oder Erlaubnis, der Verkauf wird registriert | … Mach es nach der Methode aus … |
| Nr. 11 | Abschnitt 12, Nr. 8 | Bei Lebensmitteln zuerst die eigene Stufe bestimmen: Herstellung und Gastronomie brauchen eine Zulassung oder Erlaubnis, der Verkauf wird registriert | … Die einfachste Verteidigung sind immer noch die Schritte aus … |
| Nr. 12 | Abschnitt 12, Nr. 23 | Bei Verlust geordnet aussteigen: wenn die einfache Löschung geht, löschen; bei Überschuldung in die Insolvenz; nichts liegen lassen | … das Finanzamt die Besteuerungsgrundlagen und setzt einen Verspätungszuschlag fest, siehe … |
| Nr. 14 | Abschnitt 8, Nr. 2 | Bei einem entdeckten Betrug sofort 110 anrufen, die Bank verständigen und die Zahlung stoppen lassen, nicht selbst nachforschen | … Wer schon gezahlt oder überwiesen hat, ruft nach … |
| Nr. 19 | Abschnitt 12, Nr. 20 | Bei jeder Warenlieferung Belege und Daten des Lieferanten aufbewahren; Ware, deren Einkaufspreis deutlich unter Marktpreis liegt, nicht annehmen: kauft ein Angestellter Fälschungen ein, wird der Chef verurteilt | … Die roten Linien bei fremden Marken und Bildern siehe … |
| Nr. 19 | Abschnitt 12, Nr. 21 | Bilder auf Ware, Verpackung, Etikett und Werbebild entweder selbst machen oder lizenzieren; Farbe ändern und Symbol hinzufügen gilt nicht als „geändert" | …en bei fremden Marken und Bildern siehe Nr. 20 (Belege beim Wareneinkauf aufbewahren) und … |
| Nr. 20 | Abschnitt 12, Nr. 21 | Bilder auf Ware, Verpackung, Etikett und Werbebild entweder selbst machen oder lizenzieren; Farbe ändern und Symbol hinzufügen gilt nicht als „geändert" | … Fremde Bilder siehe … |
| Nr. 21 | Abschnitt 12, Nr. 19 | Nach dem Muster zuerst die Serienliste abarbeiten, dann über den Start reden | … Vor der Produktion die Marke prüfen, siehe … |
| Nr. 23 | Abschnitt 12, Nr. 12 | Mit dem Gewerbeschein beginnt die Meldepflicht: auch ohne Einnahmen fristgerecht die Steuererklärung abgeben (eine Nullmeldung, ein Formular voller Nullen) | … Wer den Insolvenzantrag verschleppt, macht sich strafbar, siehe … |

## 13-notfaelle

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Abschnittskopf | Abschnitt 8, Nr. 3 | Merk dir die harten Regeln gegen Betrug: Anrufen nicht trauen, Daten nicht verraten, Links nicht anklicken, Überweisungen mehrfach prüfen, sieben häufige Maschen haben dieselbe Form | … Die harten Regeln gegen Betrug und die sieben häufigen Maschen stehen in … |
| Abschnittskopf | Abschnitt 8, Nr. 32 | Wirst du mit erfundenen Tatsachen einer Straftat beschuldigt, kannst du verlangen, dass er verfolgt wird: die falsche Verdächtigung steht unter Strafe | … Verlangt jemand mit privaten Fotos oder einem Nacktchat-Video Geld von dir, siehe … |
| Abschnittskopf | Abschnitt 8, Nr. 2 | Bei einem entdeckten Betrug sofort 110 anrufen, die Bank verständigen und die Zahlung stoppen lassen, nicht selbst nachforschen | … Geld schon überwiesen, ruf sofort die 110 an und verlange, die Zahlung zu stoppen, siehe … |
| Nr. 2 | Abschnitt 13, Nr. 1 | Wenn jemand hinfällt und nicht atmet: sofort kräftig auf den Brustkorb drücken, andere die 112 anrufen lassen und einen AED suchen | … Atmet sie nicht, drück nach … |
| Nr. 2 | Abschnitt 1, Nr. 13 | Ab 60 Gleichgewicht und Beinkraft trainieren, Bad und Treppe zu Hause umbauen | … Zum Vorbeugen von Stürzen selbst siehe … |
| Nr. 2 | Abschnitt 13, Nr. 10 | Wird ein alter Mensch zwei bis drei Wochen bis mehrere Monate nach einem Kopfstoß unsicher beim Gehen, langsamer, schläfriger oder einseitig kraftlos: ein Kopf-CT machen lassen | … Späte Symptome nach einem Kopfstoß bei alten Menschen siehe … |
| Nr. 2 | Abschnitt 13, Nr. 39 | Hast du dich bei einer Rettung verletzt: die gesetzliche Unfallversicherung greift wie bei einem Arbeitsunfall, den Schaden ersetzt dir der Gerettete | … Das Geld nach einer Rettungsverletzung siehe … |
| Nr. 4 | Abschnitt 13, Nr. 3 | Plötzlich hängender Mundwinkel, ein kraftloser Arm oder undeutliche Sprache: sofort die 112 rufen, nicht warten und nicht selbst fahren | … Zu den drei Handgriffen „hängender Mundwinkel, Arm heben, sprechen" (… |
| Nr. 6 | Abschnitt 6, Nr. 16 | Kauf keine Blaulichtfilter-Brillen zum „Schutz der Augen", glaub aber auch nicht, dass „ein paar Monate am Bildschirm die Augen ruiniert", und schau bei Augenschmerzen und Rötung sofort zum Notfall | … Ob Blaulichtfilter-Brillen nützen, siehe … |
| Nr. 6 | Abschnitt 13, Nr. 5 | Wird ein Auge plötzlich schwarz wie ein heruntergelassener Vorhang: auch wenn es nach Minuten von selbst besser wird, noch am selben Tag als Schlaganfall in die Notaufnahme | … Ein einseitiger Sehverlust ohne Schmerz und ohne Rötung ist etwas anderes, siehe … |
| Nr. 10 | Abschnitt 1, Nr. 13 | Ab 60 Gleichgewicht und Beinkraft trainieren, Bad und Treppe zu Hause umbauen | … Zum Vorbeugen von Stürzen siehe … |
| Nr. 16 | Abschnitt 13, Nr. 2 | Stürzt ein alter Mensch oder liegt jemand am Boden: erst in die Hocke gehen und ihn ansprechen, die 112 rufen, ihn nicht gleich hochziehen; unterlassene Hilfeleistung ist auch bei Fremden strafbar | …en auf dich zurückkommt, kleiner, aber es macht dich auch nicht haftbar (§ 680 BGB, siehe … |
| Nr. 18 | Abschnitt 13, Nr. 1 | Wenn jemand hinfällt und nicht atmet: sofort kräftig auf den Brustkorb drücken, andere die 112 anrufen lassen und einen AED suchen | … Wer nach dem Trennen vom Strom nicht atmet, wird sofort nach … |
| Nr. 18 | Abschnitt 13, Nr. 1 | Wenn jemand hinfällt und nicht atmet: sofort kräftig auf den Brustkorb drücken, andere die 112 anrufen lassen und einen AED suchen | … Wer nach dem Trennen vom Strom nicht atmet, wird nach … |
| Nr. 19 | Abschnitt 1, Nr. 3 | Rauchmelder einbauen; wer im Winter drinnen Kohle verbrennt oder mit Gas heizt, dazu einen Kohlenmonoxidmelder | … Wie der Melder installiert wird, siehe … |
| Nr. 20 | Abschnitt 13, Nr. 21 | Spritzt Chemikalie wie Säure oder Lauge auf den Körper: sofort die verunreinigten Kleider ausziehen und mit viel fließendem Wasser spülen, das Auge mit gespreizten Lidern spülen, die Spülzeit voll einhalten, bevor du gehst | …beim Auge mindestens zehn Minuten lang, bei Säure oder Lauge mindestens 20 Minuten (siehe … |
| Nr. 20 | Abschnitt 13, Nr. 19 | Der Kohlenmonoxidmelder schlägt an, oder in einem Zimmer bekommen alle gleichzeitig Kopfschmerz und Übelkeit: erst hinausgehen, dann telefonieren | … Kohlenmonoxid siehe … |
| Nr. 20 | Abschnitt 13, Nr. 14 | Nach einer Verbrennung oder Verbrühung sofort 20 Minuten mit kühlem fließendem Wasser spülen, keine Zahnpasta und keine Sojasauce auftragen | … Kohlenmonoxid siehe Nr. 19, Verbrennungen und Verbrühungen siehe … |
| Nr. 21 | Abschnitt 19, Nr. 10 | Vor einer Stelle mit Staub, Lärm oder Chemikalien: der Arbeitgeber muss dich über die Gefahr unterrichten; die arbeitsmedizinische Vorsorge ordnet er an und bezahlt sie | … Schutz und Untersuchung vor dem Arbeitsbeginn siehe … |
| Nr. 21 | Abschnitt 19, Nr. 11 | Schäden durch Staub, Lärm und chemische Giftstoffe sind nicht rückgängig zu machen: Schutzausrüstung muss die Firma stellen, Arbeit ohne Schutzmaßnahmen darfst du ablehnen | … Schutz und Untersuchung vor dem Arbeitsbeginn siehe … |
| Nr. 21 | Abschnitt 13, Nr. 20 | Nach versehentlicher Einnahme von Reinigungsmittel, Pestizid oder Medikament nicht zuerst Erbrechen auslösen, sondern mit der Flasche sofort zum Arzt; in Auge oder Haut gelangt, zehn Minuten mit viel klarem Wasser spülen, bei Säure oder Lauge 20 Minuten | … Haushaltsreiniger und versehentliche Einnahme siehe … |
| Nr. 23 | Abschnitt 13, Nr. 22 | Bei Hitze Schwindel, Übelkeit, kein Schwitzen oder Bewusstseinstrübung: sofort in den Schatten bringen, ausziehen und mit Wasser kühlen; wer nicht bei Bewusstsein ist, bekommt kein Wasser, die 112 rufen | … … |
| Nr. 25 | Abschnitt 1, Nr. 12 | Kinder in Wassernähe nicht aus den Augen lassen, beim Bootfahren und beim wilden Baden eine Rettungsweste tragen | … wie man vorbeugt, siehe … |
| Nr. 31 | Abschnitt 13, Nr. 13 | Bei einem Biss oder Kratzer von Hund oder Katze, der die Haut verletzt: zuerst 15 Minuten abwechselnd mit Seifenwasser und fließendem Wasser spülen und noch am selben Tag zur Impfung | … Bei einem Hundebiss siehe … |
| Nr. 36 | Abschnitt 8, Nr. 32 | Wirst du mit erfundenen Tatsachen einer Straftat beschuldigt, kannst du verlangen, dass er verfolgt wird: die falsche Verdächtigung steht unter Strafe | … privaten Fotos oder einem Nacktchat-Video Geld, ist es umgekehrt, gib keinen Cent, siehe … |
| Nr. 37 | Abschnitt 8, Nr. 10 | Bei einem Streit zuerst die Polizei rufen und nicht zuschlagen, wer zuerst zuschlägt, verliert fast immer | … Wirst du selbst in einen Konflikt hineingezogen, siehe … |
| Nr. 37 | Abschnitt 13, Nr. 36 | Verlangt ein Fremder im Gelände Geld von dir: gib ihm das Geld, wehre dich nicht, merke seine Kennzeichen, erstatte nach dem Entkommen Anzeige | … Verlangt ein Fremder Geld, siehe … |
| Nr. 37 | Abschnitt 13, Nr. 39 | Hast du dich bei einer Rettung verletzt: die gesetzliche Unfallversicherung greift wie bei einem Arbeitsunfall, den Schaden ersetzt dir der Gerettete | …mder Geld, siehe Nr. 36 in diesem Abschnitt, das Geld nach einer Rettungsverletzung siehe … |
| Nr. 38 | Abschnitt 1, Nr. 30 | Beim Geschlechtsverkehr immer ein Kondom benutzen, keine Spritzen mit anderen teilen | …e Blockermedikamente sind nur eine Rettung, zur Vorbeugung im Alltag und zum Testen siehe … |
| Nr. 38 | Abschnitt 1, Nr. 31 | Nach einer Risikosituation einmal auf HIV testen lassen, beim Gesundheitsamt anonym und vertraulich | …e Blockermedikamente sind nur eine Rettung, zur Vorbeugung im Alltag und zum Testen siehe … |
| Nr. 39 | Abschnitt 19, Nr. 15 | Nach der Stabilisierung zur Feststellung der Minderung der Erwerbsfähigkeit gehen; die gesetzliche Unfallversicherung zahlt eine Rente, keinen Einmalbetrag | … Die Leistungen der gesetzlichen Unfallversicherung bei Tod und Invalidität siehe … |
| Nr. 39 | Abschnitt 19, Nr. 16 | Bei Tod durch Arbeitsunfall die drei Leistungen auseinanderhalten: Sterbegeld, Hinterbliebenenrente und Überführungskosten | … Die Leistungen der gesetzlichen Unfallversicherung bei Tod und Invalidität siehe … |
| Nr. 39 | Abschnitt 7, Nr. 3 | Wenn du dir einen Prozess nicht leisten kannst, beantrage Rechtshilfe — Lohnklagen, Unterhalt und Arbeitsunfälle fallen ohnehin darunter | … Wie man Rechtshilfe beantragt, siehe … |
| Nr. 39 | Abschnitt 13, Nr. 14 | Nach einer Verbrennung oder Verbrühung sofort 20 Minuten mit kühlem fließendem Wasser spülen, keine Zahnpasta und keine Sojasauce auftragen | … Verbrennungen und Verbrühungen siehe … |
| Nr. 39 | Abschnitt 13, Nr. 13 | Bei einem Biss oder Kratzer von Hund oder Katze, der die Haut verletzt: zuerst 15 Minuten abwechselnd mit Seifenwasser und fließendem Wasser spülen und noch am selben Tag zur Impfung | …erbrennungen und Verbrühungen siehe Nr. 14, ein Hundebiss und die Tollwutversorgung siehe … |
| Nr. 40 | Abschnitt 24, Nr. 8 | Die Feststellung des Behinderungsgrads erst nach Abschluss der Behandlung machen lassen, zu früh wird er zu niedrig bewertet | … der Stufe, die sofort in den Schockraum kommt, geh nicht am Anmeldetisch anstehen (siehe … |
| Nr. 40 | Abschnitt 13, Nr. 12 | Bei einer starken Blutung zuerst mit der Hand kräftig auf die Wunde drücken; lässt sich eine Blutung an Armen oder Beinen so nicht stillen, ein Tourniquet anlegen und gleichzeitig die 112 rufen | … Wie man eine starke Blutung drückt und ein Tourniquet anlegt, siehe … |
| Nr. 41 | Abschnitt 24, Nr. 8 | Die Feststellung des Behinderungsgrads erst nach Abschluss der Behandlung machen lassen, zu früh wird er zu niedrig bewertet | …ine Feststellung des Behinderungsgrads und ein Schwerbehindertenausweis nötig sind, siehe … |
| Nr. 41 | Abschnitt 24, Nr. 9 | Bleiben nach der Behandlung tatsächlich Funktionsstörungen zurück, beantrage beim Versorgungsamt den Schwerbehindertenausweis | …ine Feststellung des Behinderungsgrads und ein Schwerbehindertenausweis nötig sind, siehe … |
| Nr. 41 | Abschnitt 13, Nr. 2 | Stürzt ein alter Mensch oder liegt jemand am Boden: erst in die Hocke gehen und ihn ansprechen, die 112 rufen, ihn nicht gleich hochziehen; unterlassene Hilfeleistung ist auch bei Fremden strafbar | …ewegungsverbote beim Verdacht auf einen Bruch nach einem Sturz eines alten Menschen siehe … |
| Nr. 41 | Abschnitt 13, Nr. 11 | Ein Bein schwillt plötzlich an und spannt, es schmerzt auf Druck: bald zum Arzt; kommt plötzliche Atemnot oder Brustschmerz dazu, sofort die 112 rufen | …hwillt nach einem Gips oder nach Bettlägerigkeit ein Bein an, droht eine Thrombose, siehe … |

## 14-konten-und-informationssicherheit

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 5 | Abschnitt 14, Nr. 1 | Für E-Mail-, Bezahl- und Social-Media-Konten die Zwei-Faktor-Authentifizierung einschalten, am besten per Pop-up-Bestätigung am Handy, erst danach per SMS-Code | …b die Geheimzahl deshalb nicht weiter und teile den Bestätigungscode mit niemandem, siehe … |
| Nr. 5 | Abschnitt 8, Nr. 2 | Bei einem entdeckten Betrug sofort 110 anrufen, die Bank verständigen und die Zahlung stoppen lassen, nicht selbst nachforschen | … Hast du das Geld selbst auf einen Betrug hin überwiesen, gilt ein anderer Weg, siehe … |
| Nr. 9 | Abschnitt 14, Nr. 8 | Du hast das Recht, deine personenbezogenen Daten einzusehen, zu kopieren, zu berichtigen und zu löschen, und kannst bei Ablehnung klagen | … Dein Recht, personenbezogene Daten einzusehen, zu berichtigen und zu löschen, steht in … |

## 15-mieten-und-kaufen

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 6 | Abschnitt 8, Nr. 23 | Große Schenkungen in der Liebe und in der Ehe: vor der Übergabe nachdenken, danach sind sie in der Regel nicht zurückzuholen | … zur Beweissicherung und zum Verwendungszweck siehe entsprechend die beiden Einträge in … |
| Nr. 6 | Abschnitt 8, Nr. 18 | Beim Verleihen von Geld einen klaren Schuldschein schreiben; bevor du für jemanden bürgst, überleg dir, ob du bereit bist, seine Schulden zu zahlen | … zur Beweissicherung und zum Verwendungszweck siehe entsprechend die beiden Einträge in … |
| Nr. 7 | Abschnitt 15, Nr. 6 | Vor der Unterschrift Eigentumsnachweis und Belastungen prüfen. Alle Zahlungen per Überweisung mit Verwendungszweck | … Alle Zahlungen per Überweisung mit Verwendungszweck, siehe … |

## 16-leben-mit-chronischer-krankheit

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 8 | Abschnitt 6, Nr. 21 | Verzichte nicht auf Kalzium, um Nierensteine zu verhindern | … Verzichte nicht auf Kalzium, um Nierensteine zu verhindern, siehe … |
| Nr. 8 | Abschnitt 1, Nr. 27 | Sichtbares Blut im Urin, auch ohne Schmerzen und auch wenn es am nächsten Tag weg ist, einmal abklären lassen | … Blut im Urin ohne Schmerzen hat andere Ursachen, die abgeklärt werden müssen, siehe … |
| Nr. 9 | Abschnitt 6, Nr. 19 | Fang nicht mit harnsäuresenkenden Medikamenten an, nur weil der Check-up eine erhöhte Harnsäure zeigt und du nie Schmerzen hattest | …bei der Untersuchung erhöhter Harnsäurewert ohne je einen Anfall ist etwas anderes, siehe … |
| Nr. 9 | Abschnitt 2, Nr. 7 | Keine zuckergesüßten Getränke; die Umstellung auf zuckerfrei löst das Problem auch nicht | … Zuckergesüßte Getränke und Alkohol siehe … |
| Nr. 9 | Abschnitt 2, Nr. 20 | Wenig oder gar keinen Alkohol trinken | … Zuckergesüßte Getränke und Alkohol siehe … |

## 17-alte-menschen-in-der-familie

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Abschnittskopf | Abschnitt 17, Nr. 8 | Ist jemand zu Hause dauerhaft bettlägerig, behandle den Dekubitus als Feind Nummer eins: elektrische Wechseldruckmatratze, regelmäßiges Umlagern, jeden Tag die vorstehenden Knochen ansehen | … Der Eintrag … |
| Nr. 4 | Abschnitt 17, Nr. 3 | Das Geld der alten Menschen auf ein eigenes Konto legen und für große Ausgaben eine Regel mit doppelter Bestätigung festlegen | … Verwende sie zusammen mit … |
| Nr. 5 | Abschnitt 8, Nr. 2 | Bei einem entdeckten Betrug sofort 110 anrufen, die Bank verständigen und die Zahlung stoppen lassen, nicht selbst nachforschen | … Ist das Geld schon gezahlt, ruf nach … |
| Nr. 5 | Abschnitt 17, Nr. 3 | Das Geld der alten Menschen auf ein eigenes Konto legen und für große Ausgaben eine Regel mit doppelter Bestätigung festlegen | … nutze ihn zusammen mit der Regel zur doppelten Bestätigung aus … |
| Nr. 5 | Abschnitt 17, Nr. 4 | Gib dem alten Menschen einen Satz, den er jederzeit als Ausrede benutzen kann | … dagegen hilft der Ausrede-Satz aus … |
| Nr. 5 | Abschnitt 17, Nr. 6 | Außer der Immobilienrente lass jedes andere „Haus zu Geld" bleiben und verpfände nie die Wohnung für eine Geldanlage | … „Haus zu Geld" ist ein anderer Weg, siehe … |
| Nr. 6 | Abschnitt 8, Nr. 17 | Lies das Papier vor der Unterschrift zu Ende, unterschreibe nicht für andere und nicht auf leeren Blättern | … Die allgemeinen Regeln zum Unterschreiben und zu leeren Verträgen stehen in … |
| Nr. 6 | Abschnitt 8, Nr. 2 | Bei einem entdeckten Betrug sofort 110 anrufen, die Bank verständigen und die Zahlung stoppen lassen, nicht selbst nachforschen | …ehen in Abschnitt 8, Nr. 17, wie du nach einem Betrug die Zahlung stoppen lässt, steht in … |
| Nr. 7 | Abschnitt 7, Nr. 8 | Mit Schwerbehindertenausweis die beiden Zuschüsse für Menschen mit Behinderung beantragen | …t Behinderung sind zwei Verfahren und zwei Zahlungen, sie widersprechen sich nicht, siehe … |
| Nr. 8 | Abschnitt 13, Nr. 11 | Ein Bein schwillt plötzlich an und spannt, es schmerzt auf Druck: bald zum Arzt; kommt plötzliche Atemnot oder Brustschmerz dazu, sofort die 112 rufen | …willt plötzlich ein Bein an, geh nach den Regeln für eine tiefe Venenthrombose vor, siehe … |
| Nr. 8 | Abschnitt 1, Nr. 34 | Nach einem Sturz aus der Höhe nicht auf „ein paar Tage liegen, dann geht es wieder" setzen: die meisten in der Traumaintensivstation überleben, der Preis zählt in Jahren | …r Höhe oder eine schwere Verletzung und die Bettlägerigkeit in den Jahren danach steht in … |
| Nr. 8 | Abschnitt 17, Nr. 7 | Wenn ein alter Mensch in der Familie dauerhaft bettlägerig oder schwer pflegebedürftig ist, beantrage bei der Pflegekasse die Pflegeversicherung; sie gilt nicht nur für alte Menschen | … Welche Pflegeleistungen die Pflegeversicherung übernimmt, steht in … |
| Nr. 9 | Abschnitt 17, Nr. 7 | Wenn ein alter Mensch in der Familie dauerhaft bettlägerig oder schwer pflegebedürftig ist, beantrage bei der Pflegekasse die Pflegeversicherung; sie gilt nicht nur für alte Menschen | … Was die Pflegeversicherung zahlt, steht in … |

## 19-arbeitsverhaeltnis-und-arbeitsunfall

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 1 | Abschnitt 8, Nr. 19 | Ansprüche haben Fristen: Im Zivilrecht 3 Jahre Verjährung, eine Kündigung musst du binnen 3 Wochen angreifen, danach genügt der Gegenseite ein „verjährt" | … Der Lohnanspruch verjährt in drei Jahren (§ 195 BGB), siehe … |
| Nr. 3 | Abschnitt 12, Nr. 16 | Im ersten Monat einen schriftlichen Vertrag schließen und die Sozialversicherung binnen sechs Wochen anmelden | … ersten Arbeitstag und hängt nicht an der Probezeit, die Pflichten des Arbeitgebers siehe … |
| Nr. 3 | Abschnitt 19, Nr. 6 | Bei einer rechtswidrigen Kündigung klagst du innerhalb von drei Wochen beim Arbeitsgericht; das Gericht kann das Arbeitsverhältnis gegen eine Abfindung auflösen | … ob die Kündigung wirksam ist, hängt vom Einzelfall ab, siehe … |
| Nr. 6 | Abschnitt 7, Nr. 3 | Wenn du dir einen Prozess nicht leisten kannst, beantrage Rechtshilfe — Lohnklagen, Unterhalt und Arbeitsunfälle fallen ohnehin darunter | … oder einem Anwalt nach und entscheide dann, ob du verhandelst oder klagst, den Weg siehe … |
| Nr. 8 | Abschnitt 7, Nr. 3 | Wenn du dir einen Prozess nicht leisten kannst, beantrage Rechtshilfe — Lohnklagen, Unterhalt und Arbeitsunfälle fallen ohnehin darunter | … den Weg zur Durchsetzung siehe … |
| Nr. 8 | Abschnitt 11, Nr. 7 | Beim Ausscheiden keinen Quellcode, keine Kundenliste und keine technischen Dokumente mitnehmen, nichts in die private Cloud hochladen, beim nächsten Arbeitgeber nicht wiederverwenden | …ode, Kundenlisten und technische Dokumente der Firma mit, das Risiko beim Mitnehmen siehe … |
| Nr. 9 | Abschnitt 19, Nr. 7 | Unterschreib keine Eigenkündigung „aus persönlichen Gründen"; sie kostet dich die Abfindung und das Arbeitslosengeld | … das ist ein weiterer Grund für … |
| Nr. 9 | Abschnitt 11, Nr. 10 | Bei einem Wettbewerbsverbot nach dem Ausscheiden gilt: höchstens zwei Jahre und nur mit monatlicher Karenzentschädigung. Ohne berechtigtes Interesse ist die Klausel unverbindlich | … Zahlt sie nicht, kannst du dich an einen Anwalt wenden, siehe … |
| Nr. 9 | Abschnitt 7, Nr. 1 | Bei Arbeitslosigkeit zuerst online Arbeitslosengeld beantragen | … Antragsunterlagen und den Online-Zugang siehe … |
| Nr. 9 | Abschnitt 19, Nr. 7 | Unterschreib keine Eigenkündigung „aus persönlichen Gründen"; sie kostet dich die Abfindung und das Arbeitslosengeld | …erschreibt, bekommt nicht nur keine Abfindung, sondern riskiert auch die Sperrzeit, siehe … |
| Nr. 10 | Abschnitt 19, Nr. 12 | Beim Arbeitsunfall und beim Unfall auf dem Weg zur Arbeit ist das Erste die Anerkennung; meldet die Firma nicht, meldest du selbst | …t selbst läuft später als Versicherungsfall in der gesetzlichen Unfallversicherung, siehe … |
| Nr. 11 | Abschnitt 13, Nr. 21 | Spritzt Chemikalie wie Säure oder Lauge auf den Körper: sofort die verunreinigten Kleider ausziehen und mit viel fließendem Wasser spülen, das Auge mit gespreizten Lidern spülen, die Spülzeit voll einhalten, bevor du gehst | … Die Behandlung, wenn Chemikalien auf den Körper spritzen, siehe … |
| Nr. 11 | Abschnitt 19, Nr. 10 | Vor einer Stelle mit Staub, Lärm oder Chemikalien: der Arbeitgeber muss dich über die Gefahr unterrichten; die arbeitsmedizinische Vorsorge ordnet er an und bezahlt sie | … Deshalb ist die arbeitsmedizinische Vorsorge so wichtig, siehe … |
| Nr. 13 | Abschnitt 13, Nr. 4 | Plötzlicher Drehschwindel und unsicheres Stehen, Doppeltsehen, ein schwarz werdendes Auge oder ein Finger, der die eigene Nasenspitze nicht findet: ebenfalls wie einen Schlaganfall behandeln und die 112 rufen | … Bei Herzinfarkt und Schlaganfall zählt jede Minute, siehe … |
| Nr. 15 | Abschnitt 24, Nr. 8 | Die Feststellung des Behinderungsgrads erst nach Abschluss der Behandlung machen lassen, zu früh wird er zu niedrig bewertet | … Den Grad der Behinderung und den Schwerbehindertenausweis regelt … |
| Nr. 15 | Abschnitt 19, Nr. 9 | Nach dem Ausscheiden sofort zwei Dinge erledigen: arbeitsuchend melden und Arbeitslosengeld beantragen, und das Wettbewerbsverbot prüfen | … Den Grad der Behinderung und den Schwerbehindertenausweis regelt  (Behinderungsgrad) und … |
| Nr. 17 | Abschnitt 8, Nr. 41 | Passiert vor Ort etwas, fotografier zuerst die Totale, dann die Lagen zueinander, zuletzt Schaden und Verletzung, lösch Originalbild und Originalvideo nicht | … ab heute aufschreiben, Aufnahmen siehe … |
| Nr. 17 | Abschnitt 7, Nr. 3 | Wenn du dir einen Prozess nicht leisten kannst, beantrage Rechtshilfe — Lohnklagen, Unterhalt und Arbeitsunfälle fallen ohnehin darunter | …, die Anwaltskosten trägst du selbst, bei geringem Einkommen hilft die Rechtshilfe, siehe … |
| Nr. 17 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die Telefonseelsorge anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … 0800 111 0 111 oder 116 123, siehe … |
| Nr. 17 | Abschnitt 19, Nr. 7 | Unterschreib keine Eigenkündigung „aus persönlichen Gründen"; sie kostet dich die Abfindung und das Arbeitslosengeld | …hendem Lohn oder fehlender Sozialversicherungsbeiträge zum Gehen gedrängt wird, geht nach … |
| Nr. 17 | Abschnitt 19, Nr. 8 | Sichere vor dem Ausscheiden Lohnabrechnungen, Anwesenheitsnachweise, Arbeitsvertrag, Sozialversicherungsauszug und Chatverläufe | …iträge zum Gehen gedrängt wird, geht nach Nr. 7 (keine Eigenkündigung unterschreiben) und … |

## 20-neugeborene

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 2 | Abschnitt 27, Nr. 3 | Lass bei der ersten Vorsorgeuntersuchung gleich auf HIV, Syphilis und Hepatitis B testen, die Behandlung ist auch bei einem Befund kostenlos | … Welche Untersuchungen die Mutter selbst machen lassen muss, siehe … |
| Nr. 3 | Abschnitt 20, Nr. 2 | Lass die Hepatitis-B-Impfung geben, bei einer Hepatitis-B-positiven Mutter sofort nach der Geburt, sonst ab dem vollendeten 2. Lebensmonat | … Die erste Hepatitis-B-Impfung steht in … |
| Nr. 4 | Abschnitt 20, Nr. 12 | Hat das Kind ein schweres Ekzem oder eine Ei-Allergie, meide Erdnüsse nicht, sondern gib sie nach ärztlicher Anleitung früh dazu, aber niemals eine ganze Nuss | …Erdnüsse meiden sollst, wenn das Kind ein schweres Ekzem oder eine Ei-Allergie hat, siehe … |
| Nr. 12 | Abschnitt 13, Nr. 26 | Verschluckt sich jemand und kann nicht mehr sprechen: stell dich hinter ihn, fünf Rückenschläge und fünf Bauchstöße, bei Bewusstlosigkeit mit der Wiederbelebung beginnen | … Was zu tun ist, wenn sich jemand verschluckt, siehe … |
| Nr. 12 | Abschnitt 20, Nr. 4 | Füttere in den ersten 6 Monaten nur Muttermilch, nicht einmal Wasser, und gib ab 6 Monaten Beikost, still aber weiter | … Lebensmonat, siehe … |

## 21-ausland-und-reisen

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 4 | Abschnitt 21, Nr. 3 | Wisse, was konsularischer Schutz kann und was nicht: Er kann dich besuchen, dich aber nicht herausholen, und die Kosten trägst du selbst | … Der konsularische Schutz streckt dieses Geld ebenfalls nicht vor (siehe … |
| Nr. 6 | Abschnitt 21, Nr. 2 | Speicher die Nummer der deutschen Auslandsvertretung im Handy, trag dich in die Krisenvorsorgeliste ein, und such beides nicht erst, wenn etwas passiert | … Der Weg zur Botschaft führt über die Nummer der deutschen Auslandsvertretung, die du in … |

## 22-entspannen

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Abschnittskopf | Abschnitt 3, Nr. 19 | Wenn du niedergeschlagen bist, tu zuerst die Dinge mit dem besten Kosten-Nutzen-Verhältnis: in Bewegung kommen, Sonnenlicht tanken, rechtzeitig schlafen, mit jemandem reden, die Telefonseelsorge anrufen | … … |
| Nr. 4 | Abschnitt 8, Nr. 29 | Ein Hund muss an die Leine: Ohne Leine haftest du verschuldensunabhängig (ob du schuld bist oder nicht) und bis zum Ende | … Wie es ist, für andere etwas mitzunehmen, steht in … |
| Nr. 4 | Abschnitt 22, Nr. 3 | Wenn dir im Lokal jemand etwas reicht, geh sofort. Jemanden gewähren lassen oder etwas bereitstellen ist kein Freundschaftsdienst | …emand unbekanntes Pulver, Tabletten oder eine E-Zigaretten-Kartusche herausholt, steht in … |
| Nr. 6 | Abschnitt 3, Nr. 19 | Wenn du niedergeschlagen bist, tu zuerst die Dinge mit dem besten Kosten-Nutzen-Verhältnis: in Bewegung kommen, Sonnenlicht tanken, rechtzeitig schlafen, mit jemandem reden, die Telefonseelsorge anrufen | … Das ist die Ausführung von … |
| Nr. 9 | Abschnitt 3, Nr. 16 | Reduziere Beziehungen, die dir Kraft rauben, und lerne, Bitten abzulehnen, die du nicht annehmen willst | … Das steht nicht im Widerspruch zu … |

## 23-welche-faehigkeiten-sich-lohnen

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Abschnittskopf | Abschnitt 23, Nr. 1 | Unter 15 Jahren gibt es die Option „arbeiten gehen" nicht: Wer dich einstellt, begeht eine Ordnungswidrigkeit und riskiert eine Geldbuße bis 30.000 Euro | … … |
| Abschnittskopf | Abschnitt 23, Nr. 2 | Nimm „bringt Lernen etwas" in die Sterblichkeitsrechnung auf: Jedes zusätzliche Bildungsjahr senkt das Sterberisiko Erwachsener um etwa 1,9 % | … … |
| Abschnittskopf | Abschnitt 23, Nr. 3 | Bevor du urteilst, ob „Abschlüsse an Wert verlieren", sieh dir die Bildungsstruktur des Landes an: Nur 21,7 % der Bevölkerung ab 15 Jahren haben einen Hochschulabschluss | … … |
| Abschnittskopf | Abschnitt 23, Nr. 4 | Wenn du es dir „nicht leisten kannst" — rechne zuerst die Förderung nach: BAföG für Schüler und Studierende, Aufstiegs-BAföG für die Fortbildung zum Meister oder Fachwirt | … … |
| Abschnittskopf | Abschnitt 23, Nr. 5 | Ohne Abitur ist der Weg nicht zu Ende: Über die duale Ausbildung kannst du den Meister oder Fachwirt erreichen | … … |
| Abschnittskopf | Abschnitt 23, Nr. 6 | Mach aus „Lernen oder arbeiten" eine Rechenaufgabe: die drei Jahre Lohn, die du früher verdienst, gegen den Unterschied im Jahreseinkommen über die kommenden Jahrzehnte | … … |
| Abschnittskopf | Abschnitt 23, Nr. 14 | Frag dich nach dem Lernen erst bei geschlossenem Buch selbst ab, statt nach hinten zurückzulesen | … … |
| Abschnittskopf | Abschnitt 23, Nr. 15 | Verteile dieselbe Zeit über mehrere Tage, lern nicht alles auf einmal | … … |
| Abschnittskopf | Abschnitt 23, Nr. 16 | Mach Markieren, wiederholtes Lesen und Zusammenfassen nicht zur Hauptmethode | … … |
| Abschnittskopf | Abschnitt 23, Nr. 17 | Üb mehrere Aufgabentypen gemischt, mach nicht zwanzig Aufgaben desselben Typs hintereinander | … … |
| Abschnittskopf | Abschnitt 23, Nr. 18 | Wähl deine Lernmethode nicht nach „ich bin der visuelle Typ, er der auditive" | … … |
| Abschnittskopf | Abschnitt 23, Nr. 19 | Stell dir beim Auswendiglernen die Fragen so, wie du den Stoff später brauchst, statt ihn einmal wörtlich aufzusagen | … … |
| Abschnittskopf | Abschnitt 23, Nr. 20 | Kläre vor einer Fortbildung, welchen Abschluss du anstrebst und bei welcher Kammer du die Prüfung ablegst | … … |
| Abschnittskopf | Abschnitt 23, Nr. 21 | Manche Fortbildungsabschlüsse erreichst du über eine Prüfung vor der Kammer — meld dich nach Ausbildung und Berufsjahren an | … … |
| Abschnittskopf | Abschnitt 23, Nr. 22 | Kauf keinen Abschluss und fälsch keine Unterlagen: Wird es geprüft, wird der Abschluss aberkannt und du machst dich strafbar | … … |
| Abschnittskopf | Abschnitt 23, Nr. 23 | Ein Abschluss bringt nicht automatisch mehr Lohn: Frag zuerst, ob der Tarifvertrag oder dein Betrieb die Stelle nach der Qualifikation eingruppiert | … … |
| Nr. 1 | Abschnitt 23, Nr. 10 | Bei der Auswahl einer Fähigkeit sieh zuerst auf „braucht es Handarbeit, braucht es ein Urteil vor Ort" — die lässt sich am schwersten automatisieren | …er eine Stelle, die einen Jugendlichen ohne Abschluss nimmt, ist genau die Sorte, von der … |
| Nr. 2 | Abschnitt 23, Nr. 4 | Wenn du es dir „nicht leisten kannst" — rechne zuerst die Förderung nach: BAföG für Schüler und Studierende, Aufstiegs-BAföG für die Fortbildung zum Meister oder Fachwirt | … den Teil zur Förderung siehe … |
| Nr. 3 | Abschnitt 23, Nr. 6 | Mach aus „Lernen oder arbeiten" eine Rechenaufgabe: die drei Jahre Lohn, die du früher verdienst, gegen den Unterschied im Jahreseinkommen über die kommenden Jahrzehnte | … Ob sich Lernen für eine bestimmte Person lohnt, musst du nach der Methode aus … |
| Nr. 5 | Abschnitt 23, Nr. 10 | Bei der Auswahl einer Fähigkeit sieh zuerst auf „braucht es Handarbeit, braucht es ein Urteil vor Ort" — die lässt sich am schwersten automatisieren | … Wenn du einen Ausbildungsberuf wählst, geh ihn mit der Dimension aus … |
| Nr. 5 | Abschnitt 23, Nr. 8 | Bevor du Geld für ein Zertifikat ausgibst, prüf, ob der Abschluss staatlich anerkannt ist und wer ihn vergibt | … Den Anbieter einer Fortbildung prüf noch nach den Schritten aus … |
| Nr. 6 | Abschnitt 23, Nr. 7 | Merke dir zuerst die Bezugslinie: Ein zusätzliches Bildungsjahr bringt weltweit im Schnitt eine private Rendite (der Teil, der in deinem eigenen Einkommen landet) von etwa 9 % pro Jahr | … Den genauen Wert und seine Herkunft siehe … |
| Nr. 6 | Abschnitt 23, Nr. 4 | Wenn du es dir „nicht leisten kannst" — rechne zuerst die Förderung nach: BAföG für Schüler und Studierende, Aufstiegs-BAföG für die Fortbildung zum Meister oder Fachwirt | … Zieh vor dem Rechnen die Förderung aus … |
| Nr. 6 | Abschnitt 23, Nr. 2 | Nimm „bringt Lernen etwas" in die Sterblichkeitsrechnung auf: Jedes zusätzliche Bildungsjahr senkt das Sterberisiko Erwachsener um etwa 1,9 % | …erung aus Abschnitt 23, Nr. 4 (BAföG und Aufstiegs-BAföG) ab, dazu kommt die Rechnung aus … |
| Nr. 6 | Abschnitt 23, Nr. 7 | Merke dir zuerst die Bezugslinie: Ein zusätzliches Bildungsjahr bringt weltweit im Schnitt eine private Rendite (der Teil, der in deinem eigenen Einkommen landet) von etwa 9 % pro Jahr | … Der weltweite Durchschnitt von 9 % aus … |
| Nr. 6 | Abschnitt 23, Nr. 5 | Ohne Abitur ist der Weg nicht zu Ende: Über die duale Ausbildung kannst du den Meister oder Fachwirt erreichen | … die gesetzliche Abschlusshürde, siehe … |
| Nr. 6 | Abschnitt 23, Nr. 10 | Bei der Auswahl einer Fähigkeit sieh zuerst auf „braucht es Handarbeit, braucht es ein Urteil vor Ort" — die lässt sich am schwersten automatisieren | … die Widerstandsfähigkeit gegen Ersetzung, siehe … |
| Nr. 14 | Abschnitt 23, Nr. 15 | Verteile dieselbe Zeit über mehrere Tage, lern nicht alles auf einmal | … Die Selbstabfrage und … |
| Nr. 15 | Abschnitt 23, Nr. 14 | Frag dich nach dem Lernen erst bei geschlossenem Buch selbst ab, statt nach hinten zurückzulesen | … Am besten mit … |
| Nr. 16 | Abschnitt 23, Nr. 14 | Frag dich nach dem Lernen erst bei geschlossenem Buch selbst ab, statt nach hinten zurückzulesen | … Ersatzhandlungen siehe … |
| Nr. 16 | Abschnitt 23, Nr. 15 | Verteile dieselbe Zeit über mehrere Tage, lern nicht alles auf einmal | …zhandlungen siehe Nr. 14 in diesem Abschnitt (bei geschlossenem Buch selbst abfragen) und … |
| Nr. 17 | Abschnitt 23, Nr. 16 | Mach Markieren, wiederholtes Lesen und Zusammenfassen nicht zur Hauptmethode | … Die in … |
| Nr. 18 | Abschnitt 23, Nr. 9 | Weiterbildung läuft zuerst über die staatliche Förderung, meld dich nicht gleich auf eigene Kosten für einen kommerziellen Kurs an | … Die Kriterien für die Kursauswahl stehen in … |
| Nr. 18 | Abschnitt 23, Nr. 13 | Nimm bei gleichem Geld und gleicher Zeit zuerst ein kurzes Projekt, das dich direkt in eine Stelle bringt | … Nr. 9 in diesem Abschnitt (Weiterbildung läuft zuerst über die staatliche Förderung) und … |
| Nr. 19 | Abschnitt 23, Nr. 16 | Mach Markieren, wiederholtes Lesen und Zusammenfassen nicht zur Hauptmethode | … die Bewertung selbst sieh in … |
| Nr. 19 | Abschnitt 23, Nr. 14 | Frag dich nach dem Lernen erst bei geschlossenem Buch selbst ab, statt nach hinten zurückzulesen | … bei geschlossenem Buch aktiv abrufen, im Einzelnen siehe … |
| Nr. 19 | Abschnitt 23, Nr. 15 | Verteile dieselbe Zeit über mehrere Tage, lern nicht alles auf einmal | …Abschnitt (bei geschlossenem Buch selbst abfragen), und über mehrere Tage verteilt, siehe … |

## 24-arztbesuche

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 5 | Abschnitt 24, Nr. 4 | Bewahr nach jedem Arztbesuch Krankenakte, Untersuchungsberichte und Bilddaten selbst in einer Kopie auf | … Kopien holst du im Alltag, siehe … |
| Nr. 7 | Abschnitt 7, Nr. 10 | Bei schwerer Krankheit zuerst Krankenversicherung, Krankengeld und Härtefallhilfe — keine Online-Kredite anfassen | … Ist der Eigenanteil danach zu hoch, siehe … |
| Nr. 8 | Abschnitt 24, Nr. 9 | Bleiben nach der Behandlung tatsächlich Funktionsstörungen zurück, beantrage beim Versorgungsamt den Schwerbehindertenausweis | … Den Schwerbehindertenausweis behandelt … |
| Nr. 8 | Abschnitt 24, Nr. 4 | Bewahr nach jedem Arztbesuch Krankenakte, Untersuchungsberichte und Bilddaten selbst in einer Kopie auf | …Begutachtung Krankenakte, Operationsberichte und Kontrollbilder vollständig bereit, siehe … |
| Nr. 9 | Abschnitt 7, Nr. 8 | Mit Schwerbehindertenausweis die beiden Zuschüsse für Menschen mit Behinderung beantragen | …orteile, Ermäßigungen im Nahverkehr, Hilfsmittel und Unterstützung am Arbeitsplatz, siehe … |
| Nr. 9 | Abschnitt 24, Nr. 8 | Die Feststellung des Behinderungsgrads erst nach Abschluss der Behandlung machen lassen, zu früh wird er zu niedrig bewertet | …inderung der Erwerbsfähigkeit bei einem Arbeitsunfall sind drei verschiedene Dinge, siehe … |
| Nr. 10 | Abschnitt 8, Nr. 39 | Steck Ermittelnden und Vollstreckenden kein Geld und keine Karten zu: Bestechung wird auch für den Geber bestraft, bei Bestechung von Richtern sogar strenger | …trafrecht, ein Umschlag an Ermittler oder Vollstrecker ist Bestechung im Amt und steht in … |
| Nr. 10 | Abschnitt 24, Nr. 5 | Bei Zweifeln an der Behandlung sofort eine vollständige Abschrift der Krankenakte sichern und die Dokumentation prüfen lassen | … Hast du Zweifel an der Behandlung selbst, sichere sofort die Krankenakte, siehe … |
| Nr. 10 | Abschnitt 24, Nr. 4 | Bewahr nach jedem Arztbesuch Krankenakte, Untersuchungsberichte und Bilddaten selbst in einer Kopie auf | …ne vollständige Abschrift der Krankenakte sichern), und bewahre die Unterlagen auf, siehe … |

## 25-nach-dem-tod

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 1 | Abschnitt 25, Nr. 2 | Die Sterbeurkunde ist der Schlüssel zu allem Weiteren: Der Arzt bescheinigt den Tod, das Standesamt stellt die Urkunde aus | … Wie der Sterbefall angezeigt wird, steht in … |
| Nr. 3 | Abschnitt 25, Nr. 5 | Die Kosten der Bestattung sind freie Preise: Das Bestattungsunternehmen muss sie auszeichnen, und wer sie nicht tragen kann, bekommt sie vom Sozialamt erstattet | … Was das Bestattungsunternehmen berechnet, steht in … |

## 27-schwangerschaft-und-geburt

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 2 | Abschnitt 27, Nr. 16 | Überspring die Untersuchung in den ersten Wochen nach der Geburt nicht | … Was die Kontrolle nach der Geburt umfasst, steht in … |
| Nr. 11 | Abschnitt 18, Nr. 2 | Mutterschutz: sechs Wochen vor und acht Wochen nach der Geburt, das Mutterschaftsgeld zahlt die Krankenkasse | … Wie das Mutterschaftsgeld berechnet wird und wie lange die Schutzfristen dauern, siehe … |
| Nr. 16 | Abschnitt 27, Nr. 7 | Lern diese Liste „sofort ins Krankenhaus" auswendig, sie gilt in der Schwangerschaft und im ganzen Jahr nach der Geburt | … In der Liste „sofort ins Krankenhaus" aus … |
| Nr. 16 | Abschnitt 9, Nr. 20 | Erfinde keinen Unfall und übertreibe keinen Schaden für die Schadensregulierung: das ist Versicherungsbetrug, und wer für dich aussagt, repariert oder begutachtet, zählt mit | … Ist das Kind geboren und kannst du es wirklich nicht großziehen, steht der legale Weg in … |

## 28-nicht-fuers-aussehen-ruinieren

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 1 | Abschnitt 2, Nr. 33 | Den BMI zwischen 20 und 25 halten und bei Übergewicht abnehmen | … Den Zusammenhang zwischen BMI und Sterblichkeit siehe … |
| Nr. 3 | Abschnitt 28, Nr. 2 | Prüf vor Spritze, Fadenlifting und Operation zwei Dinge: ob die Einrichtung eine Arztpraxis oder Klinik ist und ob die eingreifende Person Ärztin oder Arzt ist | … Prüf das vorher nach … |
| Nr. 5 | Abschnitt 28, Nr. 4 | Kauf keine Abnehmpräparate, die schnelles Abnehmen versprechen — keine Schlankheitspillen, Diätkaffee, Abnehm-Kapseln, Fatburner und Detox-Tees | … Die Beurteilung läuft wie bei den Abnehmprodukten (… |
| Nr. 6 | Abschnitt 28, Nr. 5 | Nimm keine anabolen Steroide („Muskelspritzen", „Tabletten") für den Muskelaufbau | … Für die Steroide und die Geschlechtshormone aus … |
| Nr. 6 | Abschnitt 28, Nr. 7 | Geschlechtshormone nur auf ärztliches Rezept und mit regelmäßigen Kontrollen — nichts online kaufen, die Dosis nicht selbst erhöhen | … Für die Steroide und die Geschlechtshormone aus … |

## 29-nach-einem-schweren-schlag

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Abschnittskopf | Abschnitt 29, Nr. 9 | Gib nicht gleich Geld für Trauerbegleitung aus: Sieh zuerst, ob deine Trauer wirklich feststeckt (die Symptome aus Nr. 8 in diesem Abschnitt) | … nicht gleich Geld für Trauerbegleitung ausgeben (… |
| Abschnittskopf | Abschnitt 29, Nr. 11 | Zum Reden mit jemandem ruf die Telefonseelsorge an, Kinder und Jugendliche rufen die Nummer gegen Kummer, zum Arzt gehst du in die psychotherapeutische Sprechstunde | …(Nr. 9), die Telefonseelsorge anrufen und in die psychotherapeutische Sprechstunde gehen (… |
| Abschnittskopf | Abschnitt 29, Nr. 12 | Schiebe in den ersten drei Monaten nach einem Schicksalsschlag jede unumkehrbare große Entscheidung auf | …herapeutische Sprechstunde gehen (Nr. 11), unumkehrbare große Entscheidungen aufschieben (… |
| Abschnittskopf | Abschnitt 29, Nr. 13 | Mach den Tod nicht zum Weg, Schulden zu tilgen: Die Lebensversicherung zahlt in den ersten drei Jahren nicht, ein Arbeitsunfall wird nicht anerkannt, und die Schulden gehen trotzdem zuerst vom Nachlass ab | …numkehrbare große Entscheidungen aufschieben (Nr. 12), mit dem Tod keine Schulden tilgen (… |
| Abschnittskopf | Abschnitt 29, Nr. 6 | Hast du keine Angehörigen und keine Freunde, ersetze „den Menschen, der auf dich aufpasst" durch drei Dinge: einen Nachbarn, der in deine Wohnung kommt, einen Pflegestützpunkt und eine Notfallnummer im Handy | … Wenn du keine Angehörigen und keine Freunde hast, steht unter … |
| Abschnittskopf | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die Telefonseelsorge anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Wenn ein Suizidgedanke auftaucht, ruf zuerst die Telefonseelsorge an, siehe … |
| Abschnittskopf | Abschnitt 1, Nr. 32 | Wenn ein Suizidgedanke aufkommt, sag es zuerst einer Person in deiner Nähe und gib diese paar Minuten aus der Hand | … Wie lange ein Suizidgedanke anhält, siehe … |
| Abschnittskopf | Abschnitt 1, Nr. 33 | „Gerettet" ist keine Absicherung: nach einer Vergiftung mit Pflanzenschutzmitteln oder Kohlenmonoxid rettet die Notaufnahme das Leben, nicht Lunge und Gehirn | … Was nach einer Rettung zurückbleibt, siehe … |
| Nr. 1 | Abschnitt 29, Nr. 6 | Hast du keine Angehörigen und keine Freunde, ersetze „den Menschen, der auf dich aufpasst" durch drei Dinge: einen Nachbarn, der in deine Wohnung kommt, einen Pflegestützpunkt und eine Notfallnummer im Handy | …edikamentenbox nicht abgeben kann und in diesen Tagen allein in der Wohnung bleibt, siehe … |
| Nr. 2 | Abschnitt 29, Nr. 6 | Hast du keine Angehörigen und keine Freunde, ersetze „den Menschen, der auf dich aufpasst" durch drei Dinge: einen Nachbarn, der in deine Wohnung kommt, einen Pflegestützpunkt und eine Notfallnummer im Handy | … Wer niemanden zum Mitgehen findet, siehe … |
| Nr. 4 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die Telefonseelsorge anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Was du tust, wenn du selbst Suizidgedanken hast, steht in … |
| Nr. 5 | Abschnitt 29, Nr. 6 | Hast du keine Angehörigen und keine Freunde, ersetze „den Menschen, der auf dich aufpasst" durch drei Dinge: einen Nachbarn, der in deine Wohnung kommt, einen Pflegestützpunkt und eine Notfallnummer im Handy | …en Menschen findet, also allein lebt, kein Kind hat und auch keine Kinder mehr hat, siehe … |
| Nr. 6 | Abschnitt 13, Nr. 1 | Wenn jemand hinfällt und nicht atmet: sofort kräftig auf den Brustkorb drücken, andere die 112 anrufen lassen und einen AED suchen | … Warum „jemand in der Wohnung" wertvoll ist, siehe … |
| Nr. 6 | Abschnitt 22, Nr. 9 | Behandle „sich regelmäßig mit Menschen treffen" als Ausgabe für die Gesundheit. Such Menschen nicht erst, wenn dir schlecht ist | … Das Sterblichkeits-Odds-Ratio beim Alleinleben beträgt 1,32, etwa 30 % höher, siehe … |
| Nr. 6 | Abschnitt 29, Nr. 11 | Zum Reden mit jemandem ruf die Telefonseelsorge an, Kinder und Jugendliche rufen die Nummer gegen Kummer, zum Arzt gehst du in die psychotherapeutische Sprechstunde | … Die Hotline darfst du mehrfach anrufen, nicht nur einmal (siehe … |
| Nr. 9 | Abschnitt 29, Nr. 8 | Steht die Trauer nach einem halben Jahr noch still und läuft das Leben nicht weiter, mach einen Termin in der psychotherapeutischen Sprechstunde, in der psychiatrischen Institutsambulanz oder beim Facharzt für Psychiatrie | … Prüf also zuerst … |
| Nr. 9 | Abschnitt 29, Nr. 4 | Ist ein Angehöriger durch Suizid, Unfall oder Gewalttat gestorben, verlass dich nicht aufs Aushalten, such von dir aus professionelle Hilfe | … Menschen mit hohem Risiko wie in … |
| Nr. 9 | Abschnitt 29, Nr. 8 | Steht die Trauer nach einem halben Jahr noch still und läuft das Leben nicht weiter, mach einen Termin in der psychotherapeutischen Sprechstunde, in der psychiatrischen Institutsambulanz oder beim Facharzt für Psychiatrie | … (durch Suizid oder Gewalttat ein Angehöriger) und Menschen, die schon feststecken wie in … |
| Nr. 10 | Abschnitt 8, Nr. 24 | Voreheliches Vermögen ist kein Problem, aber den Namenszusatz im Grundbuch und Zuschüsse der Eltern vorher schriftlich klären | … Wie du das Vermögen vor der Ehe und Zuschüsse der Eltern regelst, steht in … |
| Nr. 10 | Abschnitt 8, Nr. 23 | Große Schenkungen in der Liebe und in der Ehe: vor der Übergabe nachdenken, danach sind sie in der Regel nicht zurückzuholen | …nd Zuschüsse der Eltern regelst, steht in Abschnitt 8, Nr. 24 (Voreheliches Vermögen) und … |
| Nr. 10 | Abschnitt 10, Nr. 10 | Schau in der Geldrechnung zuerst auf die gesetzliche Regel und entscheide dann über einen Ehevertrag | … Wann ein Ehevertrag sinnvoll ist, steht in … |
| Nr. 10 | Abschnitt 10, Nr. 12 | Große Schulden, die ein Ehepartner allein aufnimmt, werden nicht automatisch deine, wenn du nicht unterschreibst und sie nicht bestätigst | … Schulden, die ein Partner allein aufnimmt, stehen in … |
| Nr. 11 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die Telefonseelsorge anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | …ann die Telefonseelsorge geschaltet wurde und wie lange sie täglich besetzt ist, steht in … |
| Nr. 12 | Abschnitt 29, Nr. 11 | Zum Reden mit jemandem ruf die Telefonseelsorge an, Kinder und Jugendliche rufen die Nummer gegen Kummer, zum Arzt gehst du in die psychotherapeutische Sprechstunde | …nden ohne Interesse an der Sache, ruf die Telefonseelsorge an und erzähl es einmal (siehe … |
| Nr. 13 | Abschnitt 29, Nr. 4 | Ist ein Angehöriger durch Suizid, Unfall oder Gewalttat gestorben, verlass dich nicht aufs Aushalten, such von dir aus professionelle Hilfe | … Sie trägt zusätzlich die gesundheitliche Last aus … |
| Nr. 13 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die Telefonseelsorge anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Was du tust, wenn der Gedanke aufkommt, steht in … |
| Nr. 13 | Abschnitt 1, Nr. 32 | Wenn ein Suizidgedanke aufkommt, sag es zuerst einer Person in deiner Nähe und gib diese paar Minuten aus der Hand | … Was du tust, wenn der Gedanke aufkommt, steht in … |
| Nr. 13 | Abschnitt 1, Nr. 33 | „Gerettet" ist keine Absicherung: nach einer Vergiftung mit Pflanzenschutzmitteln oder Kohlenmonoxid rettet die Notaufnahme das Leben, nicht Lunge und Gehirn | … Was nach einer Rettung zurückbleibt, steht in … |
| Nr. 13 | Abschnitt 19, Nr. 16 | Bei Tod durch Arbeitsunfall die drei Leistungen auseinanderhalten: Sterbegeld, Hinterbliebenenrente und Überführungskosten | … Die Standards für die drei Leistungen bei Tod durch Arbeitsunfall stehen in … |
| Nr. 13 | Abschnitt 25, Nr. 9 | Die Konten des Verstorbenen gehen auf die Erben über; die Behandlungsakte dürfen die Angehörigen einsehen | … Die Formalitäten für Nachlass und Schulden stehen in … |
| Nr. 13 | Abschnitt 29, Nr. 4 | Ist ein Angehöriger durch Suizid, Unfall oder Gewalttat gestorben, verlass dich nicht aufs Aushalten, such von dir aus professionelle Hilfe | … Die gesundheitliche Last der Familie steht in … |

## 30-schulkinder

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Abschnittskopf | Abschnitt 30, Nr. 9 | Kauf keine Produkte und Leistungen, die versprechen, „Kurzsichtigkeit zu heilen" oder „die Werte zu senken" | … … |
| Abschnittskopf | Abschnitt 30, Nr. 10 | Für Hausaufgaben gibt es in jedem Bundesland feste Zeitgrenzen; hält die Schule sie nicht ein, kannst du es ansprechen | … … |
| Abschnittskopf | Abschnitt 30, Nr. 11 | Hält dein Kind es nicht mehr aus, kannst du eine Beurlaubung vom Unterricht beantragen; ein ganzes Schuljahr geht nur bei langer Krankheit oder Rückstellung | … Nr. 10 (Hausaufgaben, Schlaf und Bewegung) und … |
| Nr. 2 | Abschnitt 30, Nr. 7 | Nimm die U-Untersuchungen, die Schuleingangsuntersuchung und die J1 wahr und lass auffällige Befunde im selben Jahr abklären | …er hat und weil sie genau einer der Schwerpunkte der Schuleingangsuntersuchung ist (siehe … |
| Nr. 2 | Abschnitt 30, Nr. 11 | Hält dein Kind es nicht mehr aus, kannst du eine Beurlaubung vom Unterricht beantragen; ein ganzes Schuljahr geht nur bei langer Krankheit oder Rückstellung | … Unterricht leidet, kannst du für die Schulpflichtzeit eine Beurlaubung beantragen, siehe … |
| Nr. 5 | Abschnitt 30, Nr. 4 | Lass dein Kind täglich 2 Stunden draußen sein, das ist derzeit die einzige Maßnahme gegen Kurzsichtigkeit, die durch einen verlosten Versuch gestützt ist | … Wirklich durch einen verlosten Versuch gestützt ist … |
| Nr. 5 | Abschnitt 30, Nr. 12 | Wird eine Sehschwäche festgestellt, geh zur Refraktion mit weiten Pupillen zum Augenarzt und danach in den genannten Abständen zur Kontrolle | … wie die genaue Messung geht, siehe … |
| Nr. 6 | Abschnitt 30, Nr. 4 | Lass dein Kind täglich 2 Stunden draußen sein, das ist derzeit die einzige Maßnahme gegen Kurzsichtigkeit, die durch einen verlosten Versuch gestützt ist | … was zu tun ist, steht in … |
| Nr. 6 | Abschnitt 30, Nr. 5 | Von 0 bis 3 Jahren keine Bildschirme, von 3 bis 6 Jahren höchstens 30 Minuten, ab dem Grundschulalter höchstens 1 Stunde am Tag in der Freizeit | … was zu tun ist, steht in … |
| Nr. 6 | Abschnitt 30, Nr. 12 | Wird eine Sehschwäche festgestellt, geh zur Refraktion mit weiten Pupillen zum Augenarzt und danach in den genannten Abständen zur Kontrolle | … Wie du nach der Diagnose zur Kontrolle gehst, siehe … |
| Nr. 6 | Abschnitt 30, Nr. 9 | Kauf keine Produkte und Leistungen, die versprechen, „Kurzsichtigkeit zu heilen" oder „die Werte zu senken" | … Kauf keine Produkte, die eine Heilung versprechen, siehe … |
| Nr. 7 | Abschnitt 30, Nr. 12 | Wird eine Sehschwäche festgestellt, geh zur Refraktion mit weiten Pupillen zum Augenarzt und danach in den genannten Abständen zur Kontrolle | … Bei schlechtem Sehen gehst du in die Augenheilkunde zur Augentropfen-Refraktion (… |
| Nr. 7 | Abschnitt 30, Nr. 2 | Schieb eine nötige Behandlung nicht auf, um „erst die Prüfung abzuwarten": Manche Fenster richten sich nach dem Knochenalter, nicht nach dem Prüfungskalender | …fälligen Krümmung der Wirbelsäule gehst du zur Orthopädie oder zur Wirbelsäulenchirurgie (… |
| Nr. 8 | Abschnitt 30, Nr. 7 | Nimm die U-Untersuchungen, die Schuleingangsuntersuchung und die J1 wahr und lass auffällige Befunde im selben Jahr abklären | … Die J1 zwischen 12 und 14 Jahren prüft auch die seelische Entwicklung (siehe … |
| Nr. 8 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die Telefonseelsorge anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Wie du bei Suizidgedanken vorgehst, siehe … |
| Nr. 9 | Abschnitt 30, Nr. 4 | Lass dein Kind täglich 2 Stunden draußen sein, das ist derzeit die einzige Maßnahme gegen Kurzsichtigkeit, die durch einen verlosten Versuch gestützt ist | … Die zwei Dinge mit echten Belegen stehen in … |
| Nr. 9 | Abschnitt 30, Nr. 12 | Wird eine Sehschwäche festgestellt, geh zur Refraktion mit weiten Pupillen zum Augenarzt und danach in den genannten Abständen zur Kontrolle | … Die zwei Dinge mit echten Belegen stehen in Nr. 4 (täglich 2 Stunden draußen) und … |
| Nr. 12 | Abschnitt 30, Nr. 7 | Nimm die U-Untersuchungen, die Schuleingangsuntersuchung und die J1 wahr und lass auffällige Befunde im selben Jahr abklären | …rgebnis und gehört für eine vollständige augenärztliche Untersuchung zum Augenarzt, siehe … |
| Nr. 13 | Abschnitt 30, Nr. 7 | Nimm die U-Untersuchungen, die Schuleingangsuntersuchung und die J1 wahr und lass auffällige Befunde im selben Jahr abklären | … Karies ist auch ein Schwerpunkt der Vorsorge bei den U-Untersuchungen, siehe … |

## 31-wege-nach-achtzehn

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 1 | Abschnitt 31, Nr. 2 | Hol einen verpassten Abschluss später nach: Über den zweiten Bildungsweg und die Nichtschülerprüfung | … Wie du einen verpassten Schulabschluss nachholst, steht in … |
| Nr. 2 | Abschnitt 23, Nr. 8 | Bevor du Geld für ein Zertifikat ausgibst, prüf, ob der Abschluss staatlich anerkannt ist und wer ihn vergibt | … Gekaufte „Schnellabschlüsse" und gefälschte Zeugnisse stehen in … |
| Nr. 3 | Abschnitt 7, Nr. 18 | Keine Panik bei einer Beitragslücke in der Sozialversicherung: die Rente zählt kumulativ, die Krankenversicherung wird nach Regeln nachgezahlt | …in der Sozialversicherung nachzahlst und wie die Jahre zusammengerechnet werden, steht in … |
| Nr. 5 | Abschnitt 21, Nr. 5 | Behandle „Auslandsstellen mit hohem Gehalt" immer als Betrug | … Betrug mit Lockangeboten im Ausland steht in … |
| Nr. 6 | Abschnitt 31, Nr. 5 | Prüf vor der Vermittlung ins Ausland zuerst, ob die Firma zugelassen ist: Sie darf keine Vorschüsse auf dein Entgelt verlangen | … siehe … |
| Nr. 7 | Abschnitt 12, Nr. 1 | Nur mit Geld gründen, dessen Verlust du verkraftest: nicht ans Familienvermögen gehen, nichts leihen | … Die Haltung dieses Buchs in … |
| Nr. 7 | Abschnitt 7, Nr. 13 | In der Arbeitslosigkeit über das Jobcenter Weiterbildung und Eingliederungszuschuss bekommen, statt selbst für Kurse zu zahlen | … Zuschüsse für Weiterbildung in der Arbeitslosigkeit stehen in … |

## 33-leben-mit-behinderung

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Abschnittskopf | Abschnitt 24, Nr. 9 | Bleiben nach der Behandlung tatsächlich Funktionsstörungen zurück, beantrage beim Versorgungsamt den Schwerbehindertenausweis | …s bekommst und wie der Grad der Behinderung und die Merkzeichen eingetragen werden, siehe … |
| Abschnittskopf | Abschnitt 24, Nr. 8 | Die Feststellung des Behinderungsgrads erst nach Abschluss der Behandlung machen lassen, zu früh wird er zu niedrig bewertet | … Wann die Feststellung des Behinderungsgrads gemacht wird, siehe … |
| Abschnittskopf | Abschnitt 7, Nr. 8 | Mit Schwerbehindertenausweis die beiden Zuschüsse für Menschen mit Behinderung beantragen | … Wie du die beiden Zuschüsse für Menschen mit Behinderung bekommst, siehe … |
| Abschnittskopf | Abschnitt 19, Nr. 15 | Nach der Stabilisierung zur Feststellung der Minderung der Erwerbsfähigkeit gehen; die gesetzliche Unfallversicherung zahlt eine Rente, keinen Einmalbetrag | …Arbeitsunfall läuft und wie der Grad der Erwerbsminderung in Geld umgerechnet wird, siehe … |
| Abschnittskopf | Abschnitt 17, Nr. 7 | Wenn ein alter Mensch in der Familie dauerhaft bettlägerig oder schwer pflegebedürftig ist, beantrage bei der Pflegekasse die Pflegeversicherung; sie gilt nicht nur für alte Menschen | … Wie du die Pflegeversicherung bei schwerer Pflegebedürftigkeit beantragst, siehe … |
| Nr. 2 | Abschnitt 29, Nr. 11 | Zum Reden mit jemandem ruf die Telefonseelsorge an, Kinder und Jugendliche rufen die Nummer gegen Kummer, zum Arzt gehst du in die psychotherapeutische Sprechstunde | …st du jemanden zum Reden, ruf die Telefonseelsorge an, 0800 111 0 111 oder 116 123, siehe … |
| Nr. 2 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die Telefonseelsorge anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Horte zu Hause keine Schlafmittel und keine Pflanzenschutzmittel, siehe … |
| Nr. 2 | Abschnitt 29, Nr. 8 | Steht die Trauer nach einem halben Jahr noch still und läuft das Leben nicht weiter, mach einen Termin in der psychotherapeutischen Sprechstunde, in der psychiatrischen Institutsambulanz oder beim Facharzt für Psychiatrie | …ach einen Termin in der Psychiatrie oder in der psychotherapeutischen Sprechstunde, siehe … |
| Nr. 4 | Abschnitt 16, Nr. 1 | Nimm die Medikamente nach ärztlicher Anordnung vollständig ein und hör nicht auf, wenn du dich besser fühlst | … Die eigenen chronischen Erkrankungen des pflegenden Angehörigen nicht absetzen, siehe … |
| Nr. 5 | Abschnitt 17, Nr. 8 | Ist jemand zu Hause dauerhaft bettlägerig, behandle den Dekubitus als Feind Nummer eins: elektrische Wechseldruckmatratze, regelmäßiges Umlagern, jeden Tag die vorstehenden Knochen ansehen | …us bei dauerhafter Bettlägerigkeit, Wechseldruckmatratze und regelmäßiges Umlagern, siehe … |
| Nr. 5 | Abschnitt 33, Nr. 7 | Frag beim Behindertenverband und bei der Teilhabeberatung alles auf einmal ab, was an den Schwerbehindertenausweis anknüpft | … Wie du den Zuschuss für grundlegende Hilfsmittel beantragst, siehe … |
| Nr. 6 | Abschnitt 6, Nr. 10 | Gib kein großes Geld für Nahrungsergänzungsmittel, Homöopathie, Schüßler-Salze und Stärkungsmittel aus, um „den Körper in Ordnung zu bringen" | … Diese Werbesprüche sind bei Nahrungsergänzungsmitteln derselbe Weg, siehe … |
| Nr. 6 | Abschnitt 5, Nr. 29 | Verlass dich beim Onlinekauf auf die Regeln der Plattform und das Gesetz, nicht auf die Streamer und die „guten Bewertungen" | … willst dein Geld zurück, geh nach den Regeln für Onlinekauf und Vorauszahlung vor, siehe … |
| Nr. 7 | Abschnitt 7, Nr. 8 | Mit Schwerbehindertenausweis die beiden Zuschüsse für Menschen mit Behinderung beantragen | …en mit Behinderung in Not und das Pflegegeld für Menschen mit schwerer Behinderung, siehe … |
| Nr. 7 | Abschnitt 33, Nr. 8 | Beantrage für ein Kind mit Behinderung oder Autismus bis zur Einschulung Frühförderung und Eingliederungshilfe | … Zweitens die Rehabilitationshilfe für Kinder, siehe … |
| Nr. 7 | Abschnitt 33, Nr. 9 | Beantrage für Rampen, Handläufe und den Badumbau zu Hause einen Zuschuss bei der Pflegekasse | … Viertens der Zuschuss für den barrierefreien Umbau zu Hause, siehe … |
| Nr. 7 | Abschnitt 33, Nr. 10 | Sag bei der Stellensuche von selbst, dass du einen Schwerbehindertenausweis hast; die Einstellung spart der Firma Geld | … Fünftens die Beschäftigung nach Quote und der Kündigungsschutz, siehe … |
| Nr. 7 | Abschnitt 33, Nr. 11 | Lass dir als Mensch mit Behinderung die Einkommensteuer ermäßigen; der Pauschbetrag steht im Einkommensteuergesetz | … Sechstens der Behinderten-Pauschbetrag beim Finanzamt, siehe … |
| Nr. 7 | Abschnitt 24, Nr. 9 | Bleiben nach der Behandlung tatsächlich Funktionsstörungen zurück, beantrage beim Versorgungsamt den Schwerbehindertenausweis | … Das Verfahren für den Ausweis selbst steht in … |
| Nr. 8 | Abschnitt 33, Nr. 6 | Kauf keine Therapien und Geräte, die „Lähmung, Blindheit oder Taubheit heilen" sollen | … Einrichtungen, die „garantieren, dass es gut wird", behandel wie … |
| Nr. 10 | Abschnitt 7, Nr. 12 | Nach der Arbeitslosmeldung über das Jobcenter Eingliederungszuschuss oder eine Arbeitsgelegenheit bekommen | …Eingliederungszuschuss oder eine Arbeitsgelegenheit bekommst du über das Jobcenter, siehe … |
| Nr. 10 | Abschnitt 7, Nr. 13 | In der Arbeitslosigkeit über das Jobcenter Weiterbildung und Eingliederungszuschuss bekommen, statt selbst für Kurse zu zahlen | … Weiterbildung statt selbst gezahlter Kurse steht in … |
| Nr. 13 | Abschnitt 33, Nr. 14 | Wird ein Kind mit Behinderung zur Schule angemeldet, gilt gemeinsamer Unterricht als Regelfall; wer nicht kommen kann, bekommt Unterricht zu Hause | … Die Stelle, dass Kinder mit Behinderung zur Schule gehen dürfen, steht in … |
| Nr. 14 | Abschnitt 30, Nr. 3 | Wird dein Kind gemobbt, melde es noch am selben Tag der Schule und verlange eine schriftliche Antwort, bei Schlägen, Geldraub oder Gerüchten kannst du Anzeige erstatten | …n Kind in der Schule schikaniert wird, und welches Verfahren die Schule gehen muss, siehe … |
| Nr. 14 | Abschnitt 33, Nr. 13 | Beantrage bei Prüfungen angemessene Vorkehrungen; die Hochschule muss die besonderen Belange behinderter Studierender berücksichtigen | … Angemessene Vorkehrungen bei Prüfungen, siehe … |
| Nr. 16 | Abschnitt 24, Nr. 1 | Häufige Erkrankungen zuerst in der Hausarztpraxis und über die Überweisung stufenweise nach oben; Hausarztprogramm und Zuzahlung | … Wie du vom Hausarzt zur Klinik überwiesen wirst, siehe … |
| Nr. 16 | Abschnitt 33, Nr. 7 | Frag beim Behindertenverband und bei der Teilhabeberatung alles auf einmal ab, was an den Schwerbehindertenausweis anknüpft | … Welche Hilfsmittel die Krankenkasse zahlt, siehe … |
| Nr. 17 | Abschnitt 33, Nr. 13 | Beantrage bei Prüfungen angemessene Vorkehrungen; die Hochschule muss die besonderen Belange behinderter Studierender berücksichtigen | …erende mit Hörbehinderung können bei Prüfungen einen Nachteilsausgleich beantragen, siehe … |
| Nr. 18 | Abschnitt 33, Nr. 19 | Bei Erwachsenen bestellt das Betreuungsgericht den Betreuer; eine gesetzliche Reihenfolge gibt es nicht | … Wie der Betreuer bestimmt wird, siehe … |
| Nr. 19 | Abschnitt 17, Nr. 1 | Solange der alte Mensch klar im Kopf ist, bestimme schriftlich den künftigen Betreuer | … wie du es genau aufsetzt, siehe … |
| Nr. 20 | Abschnitt 19, Nr. 8 | Sichere vor dem Ausscheiden Lohnabrechnungen, Anwesenheitsnachweise, Arbeitsvertrag, Sozialversicherungsauszug und Chatverläufe | … du schon angestellt, läuft es über das Arbeitsgericht, Beweise sichern und Fristen siehe … |

## 34-hausapotheke

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Abschnittskopf | Abschnitt 13, Nr. 20 | Nach versehentlicher Einnahme von Reinigungsmittel, Pestizid oder Medikament nicht zuerst Erbrechen auslösen, sondern mit der Flasche sofort zum Arzt; in Auge oder Haut gelangt, zehn Minuten mit viel klarem Wasser spülen, bei Säure oder Lauge 20 Minuten | …i versehentlicher Einnahme eines Medikaments oder Reinigungsmittels zuerst tust, steht in … |
| Abschnittskopf | Abschnitt 16, Nr. 1 | Nimm die Medikamente nach ärztlicher Anordnung vollständig ein und hör nicht auf, wenn du dich besser fühlst | … siehe … |
| Abschnittskopf | Abschnitt 28, Nr. 6 | Hol dir ein Abnehmmedikament nur mit Rezept bei der Ärztin oder beim Arzt — kauf nicht im Onlineshop, der ohne Rezept verschickt | …eibungspflichtige Medikamente im Internet bekommst du nur nach Prüfung des Rezepts, siehe … |
| Nr. 2 | Abschnitt 20, Nr. 8 | Erreicht ein Säugling unter 3 Monaten 38 ℃ Fieber, geh direkt ins Krankenhaus und beobachte nicht zu Hause | … Hat ein Kind unter 3 Monaten Fieber, geh direkt ins Krankenhaus, siehe … |
| Nr. 4 | Abschnitt 20, Nr. 6 | Gib keinem Kind unter 1 Jahr Honig | …dass Honig besser wirkte als Placebo, aber Honig gibst du keinem Kind unter 1 Jahr, siehe … |
| Nr. 4 | Abschnitt 34, Nr. 1 | Sieh auf die Inhaltsstoffliste, bevor du zwei Erkältungs- oder Schmerzmittel zusammen nimmst: Paracetamol darf nur in einem davon stecken | … zusammen mit einem Fiebersenker genommen ist das eine Doppelung, siehe … |
| Nr. 5 | Abschnitt 27, Nr. 5 | Nimm bei hohem Präeklampsie-Risiko ab der 12. Schwangerschaftswoche täglich eine Tablette niedrig dosiertes Aspirin | … Niedrig dosiertes Aspirin gegen Präeklampsie, siehe … |

## docs/anhalten-bei-fremdem-notfall

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Die möglichen Kosten, na | Abschnitt 19, Nr. 6 | Bei einer rechtswidrigen Kündigung klagst du innerhalb von drei Wochen beim Arbeitsgericht; das Gericht kann das Arbeitsverhältnis gegen eine Abfindung auflösen | …gen fehlst oder belästigt wirst, gilt das in der Regel als rechtswidrige Kündigung (siehe … |
| Die möglichen Kosten, na | Abschnitt 8, Nr. 16 | Beschimpfe und verleumde niemanden im Netz und verbreite nichts Ungeprüftes; bei einem Shitstorm erst Beweise sichern, dann die Polizei rufen | … Wie du selbst Beweise sicherst und Anzeige erstattest, siehe … |
| Die möglichen Kosten, na | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die Telefonseelsorge anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Telefonseelsorge, kostenlos und rund um die Uhr, unter 116 123 und 0800 111 0 111, siehe … |
| Zwei Fälle, in denen „We | Abschnitt 8, Nr. 1 | Nach einem Verkehrsunfall zuerst anhalten, retten und die Polizei rufen, nicht wegfahren | … darum, wie ein Verkehrsunfall abzuwickeln ist und was bei Fahrerflucht zu tun ist, siehe … |
| Der einfachste Weg, wenn | Abschnitt 13, Nr. 1 | Wenn jemand hinfällt und nicht atmet: sofort kräftig auf den Brustkorb drücken, andere die 112 anrufen lassen und einen AED suchen | … Atmet er nicht, drück kräftig auf seinen Brustkorb, siehe … |
| Der einfachste Weg, wenn | Abschnitt 13, Nr. 39 | Hast du dich bei einer Rettung verletzt: die gesetzliche Unfallversicherung greift wie bei einem Arbeitsunfall, den Schaden ersetzt dir der Gerettete | … Willst du dieses Geld zurückholen, siehe … |

## docs/innere-uhr-und-nachtschicht

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Wie der Körper die Zeit  | Abschnitt 2, Nr. 40 | Je länger du Nachtschicht arbeitest, desto höher das Herz-Kreislauf-Risiko; wechsle früh, wenn du kannst | …Die Rechnung steht in … |
| 2. Diese Uhr wird durch  | Abschnitt 3, Nr. 2 | Steh zu einer festen Zeit auf, auch am Wochenende | …Das ist auch der Grund, warum … |
| 9. Was an anderer Stelle | Abschnitt 2, Nr. 40 | Je länger du Nachtschicht arbeitest, desto höher das Herz-Kreislauf-Risiko; wechsle früh, wenn du kannst | …schicht das Herz-Kreislauf-Risiko erhöht und wie sich das nach Jahren berechnet, steht in … |
| 9. Was an anderer Stelle | Abschnitt 2, Nr. 39 | Nach einer durchwachten Nacht in der nächsten Nacht den Schlaf nachholen, nicht bis zum Wochenende aufschieben | …Wie du nach einer durchwachten Nacht den Schlaf nachholst, steht in … |
| 9. Was an anderer Stelle | Abschnitt 2, Nr. 13 | Etwa 7 Stunden pro Nacht schlafen, feste Schlafenszeiten | …Wie lange du nachts schläfst und ob der Tagesablauf regelmäßig ist, steht in … |
| 9. Was an anderer Stelle | Abschnitt 3, Nr. 2 | Steh zu einer festen Zeit auf, auch am Wochenende | …Morgenlicht und festes Aufstehen stehen in … |

## docs/notfallausruestung

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Notfallausrüstung für di | Abschnitt 1, Nr. 26 | Feuerlöscher, Löschdecke, Rauchschutzmaske und Verbandkasten bereithalten, einmal im Jahr prüfen | …Entspricht … |
| Notfallausrüstung für di | Abschnitt 1, Nr. 3 | Rauchmelder einbauen; wer im Winter drinnen Kohle verbrennt oder mit Gas heizt, dazu einen Kohlenmonoxidmelder | … Wie du Rauchmelder und Kohlenmonoxidmelder auswählst und anbringst, siehe … |
| Notfallausrüstung für di | Abschnitt 1, Nr. 4 | Gasschlauch bei Rissen oder sprödem Gummi tauschen, die Prüfung der Gasanlage durch den Schornsteinfeger zulassen, Leitungen nicht selbst umbauen, Haustürwerbung des Gasversorgers direkt ablehnen | … Gasschlauch und Herd siehe … |
| 2. Die Brandschutz-Gerät | Abschnitt 13, Nr. 24 | Bei einem Brand flach am Boden kriechen, die Tür fühlen, bevor du sie öffnest, eine heiße Tür nicht öffnen, die Treppe statt des Aufzugs nehmen und draußen nicht zurückgehen | …iechen, die Tür fühlen, bevor du sie öffnest, die Treppe statt des Aufzugs nehmen), siehe … |
| 2. Die Brandschutz-Gerät | Abschnitt 1, Nr. 3 | Rauchmelder einbauen; wer im Winter drinnen Kohle verbrennt oder mit Gas heizt, dazu einen Kohlenmonoxidmelder | … Rauchmelder siehe … |
| 3. Was in den Verbandkas | Abschnitt 13, Nr. 12 | Bei einer starken Blutung zuerst mit der Hand kräftig auf die Wunde drücken; lässt sich eine Blutung an Armen oder Beinen so nicht stillen, ein Tourniquet anlegen und gleichzeitig die 112 rufen | …es nicht anlegen darfst und warum du es „nicht lockern darfst, um Blut abzulassen", siehe … |
| 3. Was in den Verbandkas | Abschnitt 13, Nr. 14 | Nach einer Verbrennung oder Verbrühung sofort 20 Minuten mit kühlem fließendem Wasser spülen, keine Zahnpasta und keine Sojasauce auftragen | …gibt es nur eines zu tun, nämlich 20 Minuten mit kühlem Wasser aus dem Hahn spülen, siehe … |
| 3. Was in den Verbandkas | Abschnitt 13, Nr. 15 | Plötzlich Ausschlag am ganzen Körper, dazu Atemnot oder Schwindel: wie einen anaphylaktischen Schock behandeln, sofort die 112 rufen und es deutlich sagen | …ist ein verschreibungspflichtiges Arzneimittel, das dir ein Arzt verschreiben muss, siehe … |
| 5. Einmal im Jahr prüfen | Abschnitt 1, Nr. 3 | Rauchmelder einbauen; wer im Winter drinnen Kohle verbrennt oder mit Gas heizt, dazu einen Kohlenmonoxidmelder | … Die Batterie jedes Jahr wechseln, siehe … |
| 6. Was du nicht kaufen m | Abschnitt 13, Nr. 1 | Wenn jemand hinfällt und nicht atmet: sofort kräftig auf den Brustkorb drücken, andere die 112 anrufen lassen und einen AED suchen | … lassen und gleichzeitig einen AED aus der nächsten öffentlichen Einrichtung holen, siehe … |
| 6. Was du nicht kaufen m | Abschnitt 5, Nr. 24 | Kauf nichts wegen „durchgestrichener Preise" und im großen Sale auf Vorrat | … Was du weit darüber hinaus hortest, landet am Ende meist abgelaufen im Müll, siehe … |

## docs/welche-lizenzen-fuer-eine-plattform

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| 1. Zuerst bestimmen, wel | Abschnitt 26, Nr. 1 | Die Plattform darf nicht selbst Geld einnehmen und an Verkäufer weiterleiten; das Geld soll über einen zugelassenen Zahlungsdienstleister direkt abgerechnet werden | …Ein einziger Hinweis zu den Zahlungen steht in … |
| 1. Zuerst bestimmen, wel | Abschnitt 26, Nr. 3 | Lässt du Nutzer auf der Plattform verkaufen, musst du den Verkäufer prüfen, die Angaben speichern und Steuerdaten melden | … verkaufst du dabei Waren, kommen die Pflichten aus … |
| 3. Serverwahl: wie du un | Abschnitt 26, Nr. 3 | Lässt du Nutzer auf der Plattform verkaufen, musst du den Verkäufer prüfen, die Angaben speichern und Steuerdaten melden | … Die Plattformpflichten aus … |
| 3. Serverwahl: wie du un | Abschnitt 26, Nr. 4 | Um vom Nutzer veröffentlichte Inhalte musst du dich kümmern: Meldeweg anbieten, gemeldeten Inhalt prüfen und Rechtswidriges sperren | … Die Plattformpflichten aus … |
| 3. Serverwahl: wie du un | Abschnitt 26, Nr. 5 | Nutzer dürfen deine Seite anonym oder unter einem Pseudonym nutzen; verlang keine Klarnamen | … Die Plattformpflichten aus … |
| 3. Serverwahl: wie du un | Abschnitt 26, Nr. 6 | Bei Inhalten für Minderjährige gelten Altersstufen; Käufe von Kindern kann der Vormund rückgängig machen | … Die Plattformpflichten aus … |
| 3. Serverwahl: wie du un | Abschnitt 26, Nr. 7 | Auf eine Verletzungsanzeige musst du zügig reagieren und den Inhalt prüfen; ab Kenntnis haftest du | … Die Plattformpflichten aus … |
| 3. Serverwahl: wie du un | Abschnitt 26, Nr. 8 | Nutzerdaten nicht einfach ins Ausland geben; für die Übermittlung gelten feste Bedingungen | … Die Plattformpflichten aus … |
