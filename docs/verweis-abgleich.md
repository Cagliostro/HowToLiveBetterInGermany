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

Insgesamt 619 Verweise.

## 01-nicht-frueh-sterben

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 16 | Abschnitt 1, Nr. 18 | Frauen ab 30 zum Gebärmutterhalskrebs-Screening, vorrangig HPV-Test | … zum Gebärmutterhalskrebs-Screening gehen, die Impfung ersetzt das Screening nicht, siehe … |
| Nr. 25 | Abschnitt 1, Nr. 32 | Wenn ein Suizidgedanke aufkommt, sag es zuerst einer Person in deiner Nähe und gib diese paar Minuten aus der Hand | …Die Daten zu diesem Zeitmaßstab und die langfristigen Folgen nach einem Versuch stehen in … |
| Nr. 25 | Abschnitt 1, Nr. 33 | „Gerettet" ist keine Absicherung: nach einer Vergiftung mit Pflanzenschutzmitteln oder Kohlenmonoxid rettet die Notaufnahme das Leben, nicht Lunge und Gehirn | … Was nach einer Rettung zurückbleibt, steht in … |
| Nr. 26 | Abschnitt 13, Nr. 12 | Bei einer starken Blutung zuerst mit der Hand kräftig auf die Wunde drücken; lässt sich eine Blutung an Armen oder Beinen so nicht stillen, ein Tourniquet anlegen und gleichzeitig die 120 rufen | … Die Anwendung eines Tourniquets siehe … |
| Nr. 26 | Abschnitt 1, Nr. 3 | Rauchmelder einbauen; wer im Winter drinnen Kohle verbrennt oder mit Gas heizt, dazu einen Kohlenmonoxidmelder | … Rauchmelder und Kohlenmonoxidmelder siehe … |
| Nr. 28 | Abschnitt 1, Nr. 7 | Blutdruck messen, bei hohem Wert mit Medikamenten auf den Zielwert senken | … Zu untersuchen ist dasselbe wie in … |
| Nr. 28 | Abschnitt 1, Nr. 8 | Ab 35 mit Übergewicht einmal den Nüchternblutzucker messen lassen, auch bei normalem Wert alle drei Jahre wieder | … Zu untersuchen ist dasselbe wie in … |
| Nr. 28 | Abschnitt 1, Nr. 29 | Abnehmen, Rauchen aufhören, Blutdruck und Blutzucker in den Griff bekommen, dann bessert sich die erektile Funktion | … Wie du es besserst, steht in … |
| Nr. 28 | Abschnitt 1, Nr. 27 | Sichtbares Blut im Urin, auch ohne Schmerzen und auch wenn es am nächsten Tag weg ist, einmal abklären lassen | … Bei … |
| Nr. 29 | Abschnitt 2, Nr. 1 | Raucherentwöhnung, je früher, desto besser | … Rauchen aufhören siehe … |
| Nr. 29 | Abschnitt 2, Nr. 33 | Den BMI zwischen 20 und 25 halten und bei Übergewicht abnehmen | …ören siehe Abschnitt 2, Nr. 1 (Rauchen aufhören, je früher, desto besser), Abnehmen siehe … |
| Nr. 29 | Abschnitt 28, Nr. 4 | Kauf keine Abnehmpräparate, die schnelles Abnehmen versprechen — keine Schlankheitspillen, Diätkaffee, Schlankheitsbonbons und Enzympflaumen | …n solche Wirkstoffe oft heimlich bei, in unbekannter Dosis, wie du sie erkennst, steht in … |
| Nr. 29 | Abschnitt 1, Nr. 7 | Blutdruck messen, bei hohem Wert mit Medikamenten auf den Zielwert senken | …üher, desto besser), Abnehmen siehe  (den BMI zwischen 20 und 25 halten), Blutdruck siehe … |
| Nr. 32 | Abschnitt 3, Nr. 19 | Wenn du niedergeschlagen bist, tu zuerst die Dinge mit dem besten Kosten-Nutzen-Verhältnis: in Bewegung kommen, Sonnenlicht tanken, rechtzeitig schlafen, mit jemandem reden, 12356 anrufen | … Die ersten Schritte bei gedrückter Stimmung siehe … |
| Nr. 32 | Abschnitt 8, Nr. 15 | Wenn jemand aus deinem Umfeld „niemand soll es gut haben" oder „ich nehme das Kind mit" sagt, halt es nicht für Gerede: nahe Angehörige dürfen direkt in die Klinik bringen, und die Polizei muss nach einer Anzeige einschreiten | … Was du tun kannst, wenn jemand in deiner Nähe solche Gedanken zeigt, siehe … |
| Nr. 32 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die 12356 anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Das Entfernen tödlicher Mittel und die 12356 siehe … |
| Nr. 32 | Abschnitt 1, Nr. 33 | „Gerettet" ist keine Absicherung: nach einer Vergiftung mit Pflanzenschutzmitteln oder Kohlenmonoxid rettet die Notaufnahme das Leben, nicht Lunge und Gehirn | … Die Folgen nach einer Rettung siehe … |
| Nr. 33 | Abschnitt 13, Nr. 19 | Der Kohlenmonoxidmelder schlägt an, oder in einem Zimmer bekommen alle gleichzeitig Kopfschmerz und Übelkeit: erst hinausgehen, dann telefonieren | … Das Vorgehen vor Ort bei Kohlenmonoxid siehe … |
| Nr. 33 | Abschnitt 13, Nr. 20 | Nach versehentlicher Einnahme von Reinigungsmittel, Pestizid oder Medikament nicht zuerst Erbrechen auslösen, sondern mit der Flasche sofort zum Arzt; in Auge oder Haut gelangt, 15 Minuten mit viel klarem Wasser spülen | … erst nicht zum Erbrechen bringen, mit der Flasche ins Krankenhaus, siehe … |
| Nr. 33 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die 12356 anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Pflanzenschutzmittel und Schlafmittel nicht zu Hause horten, siehe … |
| Nr. 34 | Abschnitt 17, Nr. 8 | Ist jemand zu Hause dauerhaft bettlägerig, behandle den Dekubitus als Feind Nummer eins: elektrische Wechseldruckmatratze, regelmäßiges Umlagern, jeden Tag die vorstehenden Knochen ansehen | … Der wichtigste Punkt bei langer Bettlägerigkeit, der Dekubitus, siehe … |
| Nr. 34 | Abschnitt 13, Nr. 11 | Ein Bein schwillt plötzlich an und spannt, es schmerzt auf Druck: bald zum Arzt; kommt plötzliche Atemnot oder Brustschmerz dazu, sofort die 120 rufen | … Tiefe Venenthrombose und Lungenembolie siehe … |
| Nr. 34 | Abschnitt 1, Nr. 32 | Wenn ein Suizidgedanke aufkommt, sag es zuerst einer Person in deiner Nähe und gib diese paar Minuten aus der Hand | … Was tun, wenn der Gedanke aufkommt, siehe … |
| Nr. 34 | Abschnitt 1, Nr. 33 | „Gerettet" ist keine Absicherung: nach einer Vergiftung mit Pflanzenschutzmitteln oder Kohlenmonoxid rettet die Notaufnahme das Leben, nicht Lunge und Gehirn | … Die Folgen einer Vergiftung siehe … |
| Nr. 35 | Abschnitt 9, Nr. 22 | Verkauf kein eigenes Organ und hilf niemandem, einen Spender zu finden: Der Spender bekommt gut 20.000 元, dieselbe Niere weiterverkauft bringt 200.000 元, das Geld wird eingezogen, dazu eine Geldstrafe vom 10- bis 20-Fachen des Handelswerts | …nkung auf Angehörige bei einer legalen Spende, die Geldstrafen und die Strafbarkeit siehe … |
| Nr. 35 | Abschnitt 16, Nr. 1 | Nimm die Medikamente nach ärztlicher Anordnung vollständig ein und hör nicht auf, wenn du dich besser fühlst | … Wer schon dialysiert werden muss, für den siehe … |
| Nr. 35 | Abschnitt 16, Nr. 2 | Lass zuerst die ambulante Behandlung chronischer und besonderer Erkrankungen anerkennen und melde dann die Behandlung außerhalb des Wohnorts an, dann werden Bluthochdruck, Diabetes, Bestrahlung und Chemotherapie, Dialyse und Abstoßungsprophylaxe direkt vor Ort abgerechnet | … Wer schon dialysiert werden muss, für den siehe … |

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
| Nr. 6 | Abschnitt 22, Nr. 4 | Nimm von Fremden keine Süßigkeiten oder Snacks an, trink kein Getränk, das aus deinem Blick war, und nimm keine E-Zigaretten-Kartusche an, die dir andere reichen | …uch „Kopf-hoch-E-Zigaretten" mit beigemischtem synthetischem Cannabinoid in Umlauf, siehe … |
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
| Nr. 19 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die 12356 anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … ruf zuerst 12356 an (siehe … |
| Nr. 20 | Abschnitt 8, Nr. 39 | Verlang bei der Anzeige sofort die Eingangsbestätigung, bei Nicht-Eröffnung einen schriftlichen Bescheid: binnen 7 Tagen Widerspruch, weitere 7 Tage Überprüfung, die Staatsanwaltschaft kann die Eröffnung anweisen | … Alle Zahlen in diesem Eintrag stammen aus … |
| Nr. 20 | Abschnitt 24, Nr. 8 | Bei akut schweren Verletzungen oder Erkrankungen direkt zum Ersteinschätzungstisch der Notaufnahme, nicht am Anmeldetisch anstehen | …Beispiel wird in der Notaufnahme nach Schweregrad eingeteilt und nicht nach Ankunftszeit (… |
| Nr. 20 | Abschnitt 24, Nr. 12 | Dank dem Arzt, der dich gerettet hat, über Dankbrief, Wimpel und Zufriedenheitsbewertung, nicht über einen Umschlag: Die Richtlinie verbietet Sachen, nicht den Dank | …illst, der dich gerettet hat, nimm einen Dankbrief und die Zufriedenheitsbewertung, siehe … |
| Nr. 20 | Abschnitt 8, Nr. 40 | Steck Ermittelnden und Vollstreckenden kein Geld und keine Karten zu: Bestechung wird auch für den Geber bestraft, bei Bestechung von Aufsichts-, Vollstreckungs- und Justizpersonal sogar strenger | …ittlern und Vollstreckern Bestechung, und zwar ausdrücklich mit erschwerter Strafe, siehe … |
| Nr. 21 | Abschnitt 4, Nr. 15 | Für Kurzvideos und zielloses Scrollen eine harte Obergrenze setzen | … Die Rechnung über die gesamte Bildschirmzeit steht in … |
| Nr. 21 | Abschnitt 4, Nr. 16 | Kein Fernsehen und keine Ticker-News; die nötigen Informationen zu festen Zeiten gesammelt anschauen | … Die Rechnung über die gesamte Bildschirmzeit steht in … |
| Nr. 21 | Abschnitt 6, Nr. 23 | Erwarte nicht, dass Einkaufen die Stimmung oder das Identitätsgefühl bessert | … Wie Einkaufen dir ein Gefühl von Identität zurückgeben soll, siehe … |
| Nr. 21 | Abschnitt 6, Nr. 24 | Gib kein zusätzliches Geld für Wohnung, Auto und Bekanntenkreis aus, um „im Umfeld eine Stufe höher zu steigen" | … Für mehr Ausgaben, um eine Stufe aufzusteigen, siehe … |
| Nr. 21 | Abschnitt 3, Nr. 19 | Wenn du niedergeschlagen bist, tu zuerst die Dinge mit dem besten Kosten-Nutzen-Verhältnis: in Bewegung kommen, Sonnenlicht tanken, rechtzeitig schlafen, mit jemandem reden, 12356 anrufen | … Was du bei gedrückter Stimmung zuerst tust, siehe … |
| Nr. 23 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die 12356 anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | …anken ruf zuerst 12356 an und bring die Mittel, die töten können, außer Reichweite, siehe … |
| Nr. 23 | Abschnitt 8, Nr. 15 | Wenn jemand aus deinem Umfeld „niemand soll es gut haben" oder „ich nehme das Kind mit" sagt, halt es nicht für Gerede: nahe Angehörige dürfen direkt in die Klinik bringen, und die Polizei muss nach einer Anzeige einschreiten | … Was du tun kannst, wenn jemand in deiner Nähe solche Gedanken zeigt, siehe … |
| Nr. 23 | Abschnitt 30, Nr. 8 | Lass Kinder von 12 bis 18 Jahren einmal ein Depressionsscreening machen und halt den psychologischen Test der Schule nicht für eine Diagnose | … Das Depressionsscreening bei Kindern siehe … |
| Nr. 23 | Abschnitt 3, Nr. 15 | Behandle Gedanken wie „es wird sicher schlimmer" als Symptom, nicht als Tatsache | … Er ist wie die pessimistische Erwartung in … |
| Nr. 24 | Abschnitt 22, Nr. 9 | Wenn du dich sofort beruhigen willst, nutz 5 Minuten „zyklisches Seufzen": zwei Züge einatmen, das Ausatmen verlängern | … Was du sofort tun kannst, siehe … |
| Nr. 24 | Abschnitt 22, Nr. 7 | Bei schlechter Stimmung geh spazieren oder laufen. Die Effektstärke gegen Depression ist proportional zur Intensität | … Auf lange Sicht hilft es bei gedrückter Stimmung, siehe … |
| Nr. 24 | Abschnitt 8, Nr. 43 | Wirst du häuslicher Gewalt ausgesetzt: erst die Polizei rufen und ein Einsatzprotokoll hinterlassen, dann beim Gericht eine Gewaltschutzanordnung beantragen, sie setzt keine Scheidung voraus und kostet nichts | … Dann geht es nicht um deine Gefühle, siehe … |
| Nr. 24 | Abschnitt 3, Nr. 18 | Verlass bei Wut zuerst den Ort und behandle den anderen wie das Wetter, nicht wie einen Feind | … Was du sofort tun kannst, siehe  (zyklisches Seufzen), außerdem … |
| Nr. 25 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die 12356 anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … es dir beim Schreiben immer schlechter geht, hör auf und ruf stattdessen 12356 an, siehe … |

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
| Nr. 13 | Abschnitt 3, Nr. 19 | Wenn du niedergeschlagen bist, tu zuerst die Dinge mit dem besten Kosten-Nutzen-Verhältnis: in Bewegung kommen, Sonnenlicht tanken, rechtzeitig schlafen, mit jemandem reden, 12356 anrufen | …s Aufschieben mit deutlicher Niedergeschlagenheit oder Angst einher, halte dich zuerst an … |
| Nr. 13 | Abschnitt 4, Nr. 10 | Was du brauchst, in Reichweite legen, Unerwünschtes wegräumen, nicht auf die Selbstbeherrschung im Moment setzen | … Die Reizkontrolle steht in … |
| Nr. 15 | Abschnitt 3, Nr. 21 | Mach „wie es anderen geht" nicht zur täglichen Pflichtlektüre: begrenze oder schließe Apps, in denen du die Beiträge von Gleichaltrigen durchblätterst | … Studie dazu, wie viel Zeit zurückgewonnen und wie sich die Stimmung verändert hat, siehe … |

## 05-kein-geld-verschwenden

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 8 | Abschnitt 5, Nr. 9 | Laden Kinder per Handy auf und geben Trinkgeld, kannst du größere Ausgaben von über Achtjährigen ohne Zustimmung der Eltern zurückverlangen | … Der Wortlaut von Art. 19 und Art. 145 des Zivilgesetzbuchs [民法典] ist in … |
| Nr. 10 | Abschnitt 8, Nr. 2 | Bei einem entdeckten Betrug sofort 110 oder 96110 anrufen und die Zahlung stoppen lassen, nicht selbst nachforschen | … da gilt nur die Anzeige und Zahlungssperre nach … |
| Nr. 10 | Abschnitt 8, Nr. 3 | Merk dir die harten Regeln gegen Betrug: Anrufen nicht trauen, Daten nicht verraten, Links nicht anklicken, Überweisungen mehrfach prüfen, sieben häufige Maschen haben dieselbe Form | … Die Erwachsenen-Version des Sich-Ausgebens als Bekannte, dazu KI-Gesichtstausch, siehe … |
| Nr. 10 | Abschnitt 8, Nr. 4 | Ein Gesicht im Video und eine Stimme am Telefon sind kein Nachweis; bei einer Überweisung zuerst auflegen und die alte Nummer aus dem eigenen Adressbuch zurückrufen | … Die Erwachsenen-Version des Sich-Ausgebens als Bekannte, dazu KI-Gesichtstausch, siehe … |
| Nr. 10 | Abschnitt 5, Nr. 9 | Laden Kinder per Handy auf und geben Trinkgeld, kannst du größere Ausgaben von über Achtjährigen ohne Zustimmung der Eltern zurückverlangen | … Unterscheide das von … |
| Nr. 12 | Abschnitt 16, Nr. 3 | Geh zu den Kontrollterminen in dem Abstand, den dir der Arzt vorgibt, und notiere jeden Wert im selben Heft | …kamentenwechsel bei chronischer Krankheit urteile nicht nach Gefühl, sondern behalte nach … |
| Nr. 16 | Abschnitt 5, Nr. 7 | Nutze nicht die Mindestzahlung der Kreditkarte, und schließe für Konsum keine Ratenzahlung oder keinen Konsumentenkredit ab | … ihre Zinssätze siehe … |
| Nr. 19 | Abschnitt 5, Nr. 17 | Nutz breite Indexfonds statt aktiv gemanagter Fonds als langfristigen Grundstock (der Teil des Geldes, der lang liegen bleibt) | … Einen breiten Indexfonds zu kaufen (siehe … |
| Nr. 20 | Abschnitt 5, Nr. 27 | Spar zuerst einen Notgroschen für 3 bis 6 Monate Lebenskosten an und halte ihn dort, wo du jederzeit herankommst | … Sperr nicht den Notgroschen ein, nur um einen Vorteil mitzunehmen (Notgroschen siehe … |
| Nr. 20 | Abschnitt 5, Nr. 17 | Nutz breite Indexfonds statt aktiv gemanagter Fonds als langfristigen Grundstock (der Teil des Geldes, der lang liegen bleibt) | … Die Regeln zur Produktwahl sind wie … |
| Nr. 20 | Abschnitt 5, Nr. 18 | Bei gleicher Fondsart den mit niedrigeren Kosten wählen | … Die Regeln zur Produktwahl sind wie … |
| Nr. 20 | Abschnitt 5, Nr. 2 | Einmal im Jahr, zwischen März und Juni, die Einkommensteuer veranlagen und die Sonderabzüge eintragen, die dir zustehen | …erabzug im laufenden Jahr, einmal bei der Veranlagung im nächsten Jahr (Veranlagung siehe … |
| Nr. 27 | Abschnitt 5, Nr. 7 | Nutze nicht die Mindestzahlung der Kreditkarte, und schließe für Konsum keine Ratenzahlung oder keinen Konsumentenkredit ab | …fs Jahr gerechneten Zinssätze von Konsumentenkredit und Kreditkarten-Mindestzahlung siehe … |
| Nr. 29 | Abschnitt 5, Nr. 32 | Prüf vor dem Kauf großer Dinge die staatlichen Stichprobenberichte, die 3C-Zertifizierung und die Energieeffizienzkennzeichnung | … Erhältlich sind nur die gesamten Stichprobenergebnisse (siehe … |
| Nr. 29 | Abschnitt 5, Nr. 23 | Bei großen, nicht nötigen Käufen eine 24-Stunden-Bedenkzeit einbauen, beim Onlinekauf das 7-tägige Widerrufsrecht nutzen | … Das 7-tägige Widerrufsrecht siehe … |
| Nr. 31 | Abschnitt 8, Nr. 22 | Bei Betrug beim Online-Kauf oder im Second-Hand-Handel zuerst die Plattform, dann die Polizei, dann rechnen, ob sich eine Klage lohnt | … wie das Bagatellverfahren gerechnet wird, siehe … |
| Nr. 31 | Abschnitt 12, Nr. 8 | Bei Lebensmitteln zuerst die eigene Stufe bestimmen: Produktion und Gastronomie brauchen eine Erlaubnis, nur der Verkauf vorverpackter Ware wird zur Meldung, frisches Fleisch und Gemüse brauchen nichts | … Die Einzelheiten siehe … |
| Nr. 31 | Abschnitt 12, Nr. 9 | In Tüten verkauft heißt vorverpacktes Lebensmittel: Herstellungsdatum, Haltbarkeitsdatum und Zutatenliste müssen aufs Etikett | … Die Einzelheiten siehe … |
| Nr. 31 | Abschnitt 12, Nr. 10 | Normale Lebensmittel dürfen nicht heilend wirken: Etikett, Beschreibung, Werbung und Live-Verkauf zählen alle | … Die Einzelheiten siehe … |
| Nr. 31 | Abschnitt 12, Nr. 11 | Bei Lebensmitteln gibt es eine Strafgrenze: verkauftes krankes Fleisch oder über dem Grenzwert reicht für die Straftat, beigemischte giftige Stoffe kosten fünf Jahre ab dem ersten Fall | … Die Einzelheiten siehe … |
| Nr. 31 | Abschnitt 5, Nr. 29 | Verlass dich beim Onlinekauf auf die Regeln der Plattform und das Gesetz, nicht auf die Streamer und die „guten Bewertungen" | … Bei Betrug mit normalen Waren gilt das Dreifache, unter 500 元 500 元, siehe … |
| Nr. 34 | Abschnitt 5, Nr. 32 | Prüf vor dem Kauf großer Dinge die staatlichen Stichprobenberichte, die 3C-Zertifizierung und die Energieeffizienzkennzeichnung | … Die allgemeine Prüfmethode vor dem Kauf großer Dinge siehe … |
| Nr. 34 | Abschnitt 5, Nr. 29 | Verlass dich beim Onlinekauf auf die Regeln der Plattform und das Gesetz, nicht auf die Streamer und die „guten Bewertungen" | … An wen du dich bei einem Problem im Livestream wendest, siehe … |
| Nr. 34 | Abschnitt 5, Nr. 30 | Bei Problemen mit im Livestream gekauften Dingen erst die Verkäufer- und Influencer-Daten von der Plattform verlangen; die Plattform muss sie geben | … An wen du dich bei einem Problem im Livestream wendest, siehe … |
| Nr. 35 | Abschnitt 6, Nr. 23 | Erwarte nicht, dass Einkaufen die Stimmung oder das Identitätsgefühl bessert | … Den Kreislauf „einmal gekauft, schnell verflogen, also weiter kaufen" siehe … |
| Nr. 35 | Abschnitt 5, Nr. 9 | Laden Kinder per Handy auf und geben Trinkgeld, kannst du größere Ausgaben von über Achtjährigen ohne Zustimmung der Eltern zurückverlangen | … Wie Kinder, die per Handy aufladen und Trinkgeld geben, Geld zurückbekommen, siehe … |
| Nr. 35 | Abschnitt 5, Nr. 23 | Bei großen, nicht nötigen Käufen eine 24-Stunden-Bedenkzeit einbauen, beim Onlinekauf das 7-tägige Widerrufsrecht nutzen | … Die 24-Stunden-Bedenkzeit bei großen, nicht nötigen Käufen siehe … |
| Nr. 36 | Abschnitt 12, Nr. 9 | In Tüten verkauft heißt vorverpacktes Lebensmittel: Herstellungsdatum, Haltbarkeitsdatum und Zutatenliste müssen aufs Etikett | …angibst, wenn du selbst einen Laden betreibst und verpackte Lebensmittel verkaufst, siehe … |
| Nr. 37 | Abschnitt 5, Nr. 15 | Handle Aktien nicht häufig | … Dieser Eintrag betrifft „verkaufen oder nicht", … |
| Nr. 37 | Abschnitt 5, Nr. 19 | Setz das Geld nicht auf eine Aktie, eine Plattform, ein Haus | … seine tatsächliche Wirkung ist, dass du mehr Geld auf diese eine Aktie setzt, siehe … |
| Nr. 38 | Abschnitt 5, Nr. 15 | Handle Aktien nicht häufig | … In dieser Marktphase tauschten Haushaltskonten im Jahr fast 18 Mal aus, in … |
| Nr. 39 | Abschnitt 21, Nr. 6 | Heb im Ausland pro Jahr höchstens 100.000 元 ab, gerechnet über alle Karten auf deinen Namen zusammen | … Das Bargeldabheben im Ausland hat ein eigenes Kontingent, siehe … |
| Nr. 39 | Abschnitt 5, Nr. 17 | Nutz breite Indexfonds statt aktiv gemanagter Fonds als langfristigen Grundstock (der Teil des Geldes, der lang liegen bleibt) | … Kauf QDII ebenfalls nach dem Verfahren von … |
| Nr. 39 | Abschnitt 5, Nr. 19 | Setz das Geld nicht auf eine Aktie, eine Plattform, ein Haus | … Kauf QDII ebenfalls nach dem Verfahren von Nr. 17 (breite Indexfonds) und … |
| Nr. 40 | Abschnitt 7, Nr. 20 | Vor einer schweren Krankheit zusätzlich zur Grundkrankenversicherung eine einjährige Krankenversicherung oder eine Versicherung für schwere Krankheiten abschließen — achte auf die Worte „garantierte Verlängerung" | … Einjährige Krankenversicherung siehe … |
| Nr. 40 | Abschnitt 21, Nr. 4 | Kauf eine Versicherung mit Auslandsbehandlung und medizinischem Rücktransport, nicht nur eine Flugverspätungsversicherung | … Wer ins Ausland geht, siehe … |
| Nr. 40 | Abschnitt 5, Nr. 26 | Die Haftpflichtversicherung ausreichend kaufen: Die Grenzen der Pflicht-Kfz-Versicherung sind landesweit einheitlich und niedrig, der darüber hinausgehende Teil kommt aus deinem eigenen Haushalt | … Wer ein Auto hat, siehe … |
| Nr. 40 | Abschnitt 5, Nr. 41 | Lebt jemand in der Familie von deinem Einkommen, versichere zuerst den, der das Geld verdient, mit einer Risikolebensversicherung, nicht zuerst das Kind | … Wo jemand in der Familie von deinem Einkommen lebt, siehe … |
| Nr. 40 | Abschnitt 7, Nr. 9 | Einwohner-Krankenversicherung: die 400 元 im Jahr nicht abreißen lassen, Härtefälle bekommen Erlass | …sicherung, sie wird nicht nach diesem Verfahren abgewogen, sie wird weiter gezahlt, siehe … |
| Nr. 40 | Abschnitt 5, Nr. 27 | Spar zuerst einen Notgroschen für 3 bis 6 Monate Lebenskosten an und halte ihn dort, wo du jederzeit herankommst | … Womit kleine Verluste aufgefangen werden, siehe … |
| Nr. 41 | Abschnitt 7, Nr. 20 | Vor einer schweren Krankheit zusätzlich zur Grundkrankenversicherung eine einjährige Krankenversicherung oder eine Versicherung für schwere Krankheiten abschließen — achte auf die Worte „garantierte Verlängerung" | … Zur wahrheitsgemäßen Angabe und zur garantierten Verlängerung siehe … |
| Nr. 42 | Abschnitt 5, Nr. 25 | Bei Versicherungen zuerst die Risiko-Variante kaufen und „Rückzahlung" und „Dividende" als nicht garantierten Teil betrachten | …rsicherungen ist viel Geld eingezahlt, da lohnt sich die Widerrufsfrist am meisten, siehe … |
| Nr. 43 | Abschnitt 5, Nr. 42 | Bereust du eine abgeschlossene Lebensversicherung mit über einem Jahr Laufzeit, trittst du innerhalb der Widerrufsfrist zurück, die Prämie kommt fast vollständig zurück | … Wer schon unterschrieben hat, tritt innerhalb von 15 Tagen nach … |
| Nr. 43 | Abschnitt 5, Nr. 44 | Willst du zurücktreten, mach es selbst bei der Versicherung, nicht über einen „Rücktrittsvermittler"; fühlst du dich getäuscht, beschwere dich unter 12378 | … Wie du dich beschwerst, wenn du dich getäuscht fühlst, siehe … |
| Nr. 44 | Abschnitt 5, Nr. 42 | Bereust du eine abgeschlossene Lebensversicherung mit über einem Jahr Laufzeit, trittst du innerhalb der Widerrufsfrist zurück, die Prämie kommt fast vollständig zurück | … Selbst in der Widerrufsfrist zurücktreten, siehe … |
| Nr. 45 | Abschnitt 25, Nr. 9 | Das Guthaben an den verschiedenen Stellen einzeln abholen: Wohnungsfonds, Sozialversicherung, Leistungen bei Arbeitsunfall | … Nach einem Todesfall die Gelder an den verschiedenen Stellen einzeln abholen, siehe … |
| Nr. 45 | Abschnitt 29, Nr. 13 | Mach den Tod nicht zum Weg, Schulden zu tilgen: Die Lebensversicherung zahlt in den ersten zwei Jahren nicht, ein Arbeitsunfall wird nicht anerkannt, und die Schulden gehen trotzdem zuerst vom Nachlass ab | … Dass der Weg „mit dem Tod Schulden tilgen" nicht funktioniert, siehe … |

## 06-die-negativliste

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 10 | Abschnitt 1, Nr. 20 | Menschen mit Herz-Kreislauf-Erkrankung und alte Menschen jedes Jahr gegen Grippe impfen lassen | … Begleite die alten Menschen zur jährlichen Grippeimpfung, siehe … |
| Nr. 10 | Abschnitt 1, Nr. 21 | Ab 50 gegen Gürtelrose impfen lassen | … Die Gürtelroseimpfung ab 50, siehe … |
| Nr. 10 | Abschnitt 1, Nr. 22 | Ab 65 gegen Pneumokokken impfen lassen | … Die Pneumokokkenimpfung ab 65, siehe … |
| Nr. 10 | Abschnitt 1, Nr. 7 | Blutdruck messen, bei hohem Wert mit Medikamenten auf den Zielwert senken | …nach ärztlicher Anweisung regelmäßig nimmt und der Blutdruck den Zielwert erreicht, siehe … |
| Nr. 10 | Abschnitt 1, Nr. 13 | Ab 60 Gleichgewicht und Beinkraft trainieren, Bad und Treppe zu Hause umbauen | … Bau zu Hause Bad und Treppe um und übe mit ihm Gleichgewicht und Beinkraft, siehe … |
| Nr. 10 | Abschnitt 1, Nr. 17 | Frauen ab 40 zum Brustkrebs-Screening, alle zwei Jahre eine Mammografie | … Die Krebsfrüherkennung, die zum Alter passt, begleite ihn einmal dorthin, siehe … |
| Nr. 10 | Abschnitt 1, Nr. 18 | Frauen ab 30 zum Gebärmutterhalskrebs-Screening, vorrangig HPV-Test | … Die Krebsfrüherkennung, die zum Alter passt, begleite ihn einmal dorthin, siehe … |
| Nr. 10 | Abschnitt 1, Nr. 19 | Ab 45 bis 50 zum Darmkrebs-Screening, immunchemischer Stuhltest auf verborgenes Blut oder Darmspiegelung | … Die Krebsfrüherkennung, die zum Alter passt, begleite ihn einmal dorthin, siehe … |
| Nr. 10 | Abschnitt 17, Nr. 7 | Wenn ein alter Mensch in der Familie dauerhaft bettlägerig oder schwer pflegebedürftig ist, beantrage bei der Krankenversicherung am Wohnort die Pflegeversicherung; sie gilt nicht nur für alte Menschen | …der alte Mensch dauerhaft bettlägerig, siehe zu Dekubitus-Vorsorge und Pflegeversicherung … |
| Nr. 10 | Abschnitt 17, Nr. 8 | Ist jemand zu Hause dauerhaft bettlägerig, behandle den Dekubitus als Feind Nummer eins: elektrische Wechseldruckmatratze, regelmäßiges Umlagern, jeden Tag die vorstehenden Knochen ansehen | …der alte Mensch dauerhaft bettlägerig, siehe zu Dekubitus-Vorsorge und Pflegeversicherung … |
| Nr. 10 | Abschnitt 17, Nr. 5 | Finger weg von jeder „Altersvorsorge-Investition", bei der alte Menschen vorher zahlen: Karte kaufen, einen Pflegeheimplatz kaufen, Seniorenwohnung kaufen, Reisen und Wohnen im Alter und Produkte für alte Menschen kaufen sind dasselbe illegale Einwerben von Kapital | …, bei denen du vorher zahlst, die andere sind Mittel, die die Medikamente ersetzen, siehe … |
| Nr. 16 | Abschnitt 19, Nr. 11 | Schäden durch Staub, Lärm und chemische Giftstoffe sind nicht rückgängig zu machen: Schutzausrüstung muss die Firma stellen, Arbeit ohne Schutzmaßnahmen darfst du ablehnen | …gegen schützen eine Schutzbrille und ein Schild, nicht eine Blaulichtfilter-Brille, siehe … |
| Nr. 16 | Abschnitt 13, Nr. 6 | Ein Auge ist gespannt und schmerzt, ist rot, um Lampen ein Regenbogenring, dazu Kopfschmerz, Übelkeit und Erbrechen: noch am selben Tag in die augenärztliche Notaufnahme | … geh noch am selben Tag in die augenärztliche Notaufnahme, siehe … |
| Nr. 16 | Abschnitt 30, Nr. 4 | Lass dein Kind täglich 2 Stunden draußen sein, das ist derzeit die einzige Maßnahme gegen Kurzsichtigkeit, die durch einen verlosten Versuch gestützt ist | … Wie Kinder und Jugendliche Kurzsichtigkeit vermeiden, siehe … |
| Nr. 16 | Abschnitt 30, Nr. 12 | Wird eine Sehschwäche festgestellt, geh zur Augentropfen-Refraktion ins Krankenhaus und danach in den vom Arzt genannten Abständen zur Kontrolle | … Wie Kinder und Jugendliche Kurzsichtigkeit vermeiden, siehe … |
| Nr. 16 | Abschnitt 30, Nr. 9 | Kauf keine Produkte und Leistungen, die versprechen, „Kurzsichtigkeit zu heilen" oder „die Werte zu senken" | … Wie Kinder und Jugendliche Kurzsichtigkeit vermeiden, siehe … |
| Nr. 18 | Abschnitt 1, Nr. 7 | Blutdruck messen, bei hohem Wert mit Medikamenten auf den Zielwert senken | … Blutdruck, Blutzucker und Hepatitis B siehe … |
| Nr. 18 | Abschnitt 1, Nr. 8 | Ab 35 mit Übergewicht einmal den Nüchternblutzucker messen lassen, auch bei normalem Wert alle drei Jahre wieder | … Blutdruck, Blutzucker und Hepatitis B siehe … |
| Nr. 18 | Abschnitt 1, Nr. 14 | Hepatitis-B-Marker bestimmen lassen, ohne Antikörper gegen Hepatitis B impfen | … Blutdruck, Blutzucker und Hepatitis B siehe … |
| Nr. 18 | Abschnitt 1, Nr. 17 | Frauen ab 40 zum Brustkrebs-Screening, alle zwei Jahre eine Mammografie | … Brust, Gebärmutterhals und Darmkrebs siehe … |
| Nr. 18 | Abschnitt 1, Nr. 18 | Frauen ab 30 zum Gebärmutterhalskrebs-Screening, vorrangig HPV-Test | … Brust, Gebärmutterhals und Darmkrebs siehe … |
| Nr. 18 | Abschnitt 1, Nr. 19 | Ab 45 bis 50 zum Darmkrebs-Screening, immunchemischer Stuhltest auf verborgenes Blut oder Darmspiegelung | … Brust, Gebärmutterhals und Darmkrebs siehe … |
| Nr. 18 | Abschnitt 1, Nr. 23 | Auf Helicobacter pylori testen, bei positivem Befund eradizieren | … Helicobacter pylori und die Niedrigdosis-CT siehe … |
| Nr. 18 | Abschnitt 1, Nr. 24 | Starke Raucher jedes Jahr einmal zur Niedrigdosis-CT des Brustkorbs | … Helicobacter pylori und die Niedrigdosis-CT siehe … |
| Nr. 18 | Abschnitt 1, Nr. 31 | Nach einer Risikosituation einmal auf HIV testen lassen, beim Zentrum für Seuchenkontrolle kostenlos und vertraulich | … Nach riskantem Verhalten geh zum Test, siehe … |
| Nr. 18 | Abschnitt 6, Nr. 7 | Mach ohne Symptome kein Ganzkörper-PET-CT und kein Tumor-Marker-Paket | … ohne Belege in solchen Paketen sind die Tumor-Marker und die Ganzkörperbildgebung, siehe … |
| Nr. 18 | Abschnitt 6, Nr. 19 | Fang nicht mit harnsäuresenkenden Medikamenten an, nur weil der Check-up eine erhöhte Harnsäure zeigt und du nie Schmerzen hattest | …e zeigt, aber nie Schmerzen auftraten, oder Gallenblasensteine, aber nie Schmerzen, siehe … |
| Nr. 18 | Abschnitt 6, Nr. 20 | Lass die Gallenblase nicht vorbeugend entfernen, nur weil der Check-up Gallenblasensteine zeigt und du nie Schmerzen hattest | …ber nie Schmerzen, siehe Nr. 19 in diesem Abschnitt (erhöhte Harnsäure ohne Symptome) und … |
| Nr. 19 | Abschnitt 16, Nr. 9 | Nimm nach der Diagnose Gicht dauerhaft harnsäuresenkende Medikamente und halte die Blut-Harnsäure dauerhaft unter 360 µmol/L | … Genaueres siehe … |
| Nr. 19 | Abschnitt 16, Nr. 9 | Nimm nach der Diagnose Gicht dauerhaft harnsäuresenkende Medikamente und halte die Blut-Harnsäure dauerhaft unter 360 µmol/L | … Bevor du es wirklich anfängst, lass zuerst diesen Genotyp bestimmen, siehe … |
| Nr. 21 | Abschnitt 16, Nr. 8 | Wenn du schon einmal einen Nierenstein hattest, trink täglich 2,5–3 Liter Wasser und halte das Salz unter 6 Gramm | … Der Eintrag zum Wassertrinken siehe … |
| Nr. 22 | Abschnitt 5, Nr. 33 | Bei Armbandperlen, Jade, Markenuhren und Trendspielzeug rechne mit „dem ausgegebenen Geld", nicht mit „dem gesparten Geld" | …Wie du Material und Zertifikat prüfst und warum es sich als Geldanlage nicht lohnt, siehe … |
| Nr. 22 | Abschnitt 5, Nr. 34 | Bei Schmuck und Jade nur einen Prüfbericht mit CMA-Zeichen akzeptieren und die Institution auf der Website der ausstellenden Behörde prüfen | …Wie du Material und Zertifikat prüfst und warum es sich als Geldanlage nicht lohnt, siehe … |
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
| Nr. 7 | Abschnitt 7, Nr. 9 | Einwohner-Krankenversicherung: die 400 元 im Jahr nicht abreißen lassen, Härtefälle bekommen Erlass | … Zuschuss zur Einwohner-Krankenversicherung (Einwohner-Krankenversicherung siehe … |
| Nr. 7 | Abschnitt 7, Nr. 10 | Bei schwerer Krankheit zuerst Krankenversicherung, Zusatzversicherung für schwere Krankheiten, medizinische Härtefallhilfe und die Registrierung für Behandlung außerhalb des Wohnorts — keine Online-Kredite anfassen | …he Nr. 9), medizinische Härtefallhilfe beim Arztbesuch (medizinische Härtefallhilfe siehe … |
| Nr. 7 | Abschnitt 7, Nr. 3 | Wenn du dir einen Prozess nicht leisten kannst, beantrage Rechtshilfe — Lohnklagen, Unterhalt und Arbeitsunfälle fallen ohnehin darunter | …e siehe Nr. 10), und Rechtshilfe ohne Prüfung der wirtschaftlichen Not (Rechtshilfe siehe … |
| Nr. 10 | Abschnitt 24, Nr. 9 | Ohne Geld, ohne Ausweis, ohne klare Angabe, wer du bist: die Notfallbehandlung muss trotzdem zuerst kommen | …chieben oder verzögern, diese Notfallkosten trägt der Fonds für Krankheitsnothilfe, siehe … |
| Nr. 10 | Abschnitt 7, Nr. 15 | Keine Kaution zahlen, keine Ausweise hinterlegen, keinen „Trainingskredit" unterschreiben, in kein Pyramidensystem einsteigen, keinen Wucherkredit aufnehmen | … schützen nur bis zur Linie des 4-Fachen der LPR für ein Jahr (keine Wucherkredite, siehe … |
| Nr. 18 | Abschnitt 7, Nr. 9 | Einwohner-Krankenversicherung: die 400 元 im Jahr nicht abreißen lassen, Härtefälle bekommen Erlass | …neuten Beitritt wird eine Zeit lang nichts erstattet (Einwohner-Krankenversicherung siehe … |
| Nr. 20 | Abschnitt 5, Nr. 40 | Versichere nur die Verluste, die du nicht tragen kannst; die Verluste, die du trägst, deckst du mit dem Notgroschen | … Welche Verluste sich mit einer Versicherung abdecken lassen, siehe … |
| Nr. 20 | Abschnitt 7, Nr. 9 | Einwohner-Krankenversicherung: die 400 元 im Jahr nicht abreißen lassen, Härtefälle bekommen Erlass | … Zahl zuerst die Einwohner-Krankenversicherung ein (… |
| Nr. 21 | Abschnitt 7, Nr. 4 | Wenn du nicht mehr weiterweißt, geh in die Nothilfeeinrichtung; dort gibt es Essen, Unterkunft und ein Ticket nach Hause | … Die Nothilfeeinrichtung aus … |

## 08-lass-dich-nicht-hereinziehen

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 3 | Abschnitt 8, Nr. 2 | Bei einem entdeckten Betrug sofort 110 oder 96110 anrufen und die Zahlung stoppen lassen, nicht selbst nachforschen | … wie du die Zahlung stoppst, steht in … |
| Nr. 4 | Abschnitt 8, Nr. 2 | Bei einem entdeckten Betrug sofort 110 oder 96110 anrufen und die Zahlung stoppen lassen, nicht selbst nachforschen | … Hast du schon überwiesen, siehe … |
| Nr. 5 | Abschnitt 8, Nr. 33 | Wirst du mit erfundenen Tatsachen angezeigt, kannst du verlangen, dass er verfolgt wird: ab 5 Tagen Haft bei Ordnungswidrigkeit, bis 3 Jahre bei Straftat | … … |
| Nr. 5 | Abschnitt 8, Nr. 34 | Bei unzureichenden Beweisen muss freigesprochen werden, erzwungene Aussagen müssen ausgeschlossen werden; nach dem Urteil gibt es Beschwerde und Wiederaufnahme | … Nr. 33 in diesem Abschnitt (Verfolgung verlangen), … |
| Nr. 5 | Abschnitt 8, Nr. 35 | Wurdest du in Haft genommen und dann das Verfahren eingestellt, die Anklage fallen gelassen oder freigesprochen, beantrag Staatshaftung, sie wird pro Tag berechnet | …r. 33 in diesem Abschnitt (Verfolgung verlangen), Nr. 34 (Freispruch und Wiederaufnahme), … |
| Nr. 6 | Abschnitt 8, Nr. 1 | Nach einem Verkehrsunfall zuerst anhalten, retten und die Polizei rufen, nicht wegfahren | … Wie du das machst, steht in … |
| Nr. 6 | Abschnitt 8, Nr. 5 | Bei einer Anschuldigung oder Vorladung zuerst einen Anwalt nehmen, nichts privat regeln und keine Aufzeichnungen löschen | … Ein Anwalt und ein wahrheitsgemäßes Geständnis widersprechen sich nicht, siehe … |
| Nr. 11 | Abschnitt 13, Nr. 37 | Stößt du auf eine Gruppe, die sich prügelt: zurückweichen und weggehen, nicht hingehen und schlichten, nicht zugucken, keine Waffe vom Boden aufheben; willst du Anzeige erstatten, geh auf sichere Distanz und ruf die 110 | …mit leeren Händen in eine Schlägerei unter Fremden einzugreifen hat eigene Risiken, siehe … |
| Nr. 11 | Abschnitt 8, Nr. 10 | Bei einem Streit zuerst die Polizei rufen und nicht zuschlagen, wer zuerst zuschlägt, verliert fast immer | … Die Standardbewegung bleibt, zurückweichen und die Polizei rufen, wie in … |
| Nr. 11 | Abschnitt 8, Nr. 5 | Bei einer Anschuldigung oder Vorladung zuerst einen Anwalt nehmen, nichts privat regeln und keine Aufzeichnungen löschen | … Vor der ersten förmlichen Vernehmung durch die Polizei einen Anwalt nehmen, siehe … |
| Nr. 11 | Abschnitt 8, Nr. 35 | Wurdest du in Haft genommen und dann das Verfahren eingestellt, die Anklage fallen gelassen oder freigesprochen, beantrag Staatshaftung, sie wird pro Tag berechnet | …reispruch erteilt, kannst du für die Tage in Haft pro Tag Staatshaftung beantragen, siehe … |
| Nr. 12 | Abschnitt 7, Nr. 2 | Bei ausstehendem Lohn zuerst die Arbeitsaufsicht einschalten, dann das arbeitsrechtliche Schlichtungsverfahren — beide Wege kosten nichts, die meisten Fälle sind in ein paar Monaten entschieden | …eitsaufsicht beschwerst und wie du die arbeitsrechtliche Schlichtung beantragst, steht in … |
| Nr. 12 | Abschnitt 7, Nr. 2 | Bei ausstehendem Lohn zuerst die Arbeitsaufsicht einschalten, dann das arbeitsrechtliche Schlichtungsverfahren — beide Wege kosten nichts, die meisten Fälle sind in ein paar Monaten entschieden | … bei ausstehendem Lohn konkret beschwerst und wie du die Schlichtung beantragst, steht in … |
| Nr. 12 | Abschnitt 9, Nr. 15 | Beim Eintreiben von Schulden: niemanden festhalten, niemanden einsperren und nicht bis in die Wohnung folgen und dort hängen bleiben | … Die rote Linie beim Eintreiben steht in … |
| Nr. 13 | Abschnitt 8, Nr. 14 | Wenn der Gedanke „ich nehme jemanden mit" oder „gemeinsam sterben" auftaucht, behandle es als Notfall: geh vom Ort weg, gib Auto- und Messerschlüssel ab und ruf 12356 | … Wenn der Gedanke schon so weit ist, siehe … |
| Nr. 14 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die 12356 anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Wer sich selbst etwas antun will, siehe … |
| Nr. 14 | Abschnitt 3, Nr. 19 | Wenn du niedergeschlagen bist, tu zuerst die Dinge mit dem besten Kosten-Nutzen-Verhältnis: in Bewegung kommen, Sonnenlicht tanken, rechtzeitig schlafen, mit jemandem reden, 12356 anrufen | … Was bei gedrückter Stimmung zuerst hilft, steht in … |
| Nr. 16 | Abschnitt 8, Nr. 37 | Wirst du online gemobbt: erst Schutz an, erst Beweise sichern, dann unter Plattform, Anordnung und Anzeige einen der drei Wege wählen | … Wie du dich nach einem Shitstorm gegen dich verhältst, steht in … |
| Nr. 19 | Abschnitt 19, Nr. 1 | Überstundenvergütung in drei Stufen mit dem 1,5-Fachen, 2-Fachen und 3-Fachen; zahlt die Firma nicht, beschwer dich bei der Arbeitsaufsicht; bei Zahlung nach Fristablauf kommen noch 50 % bis 100 % dazu | …rstunden und nicht genommener Urlaub laufen über die arbeitsrechtliche Schlichtung, siehe … |
| Nr. 19 | Abschnitt 19, Nr. 2 | Der Jahresurlaub richtet sich nach der gesamten Betriebszugehörigkeit und beträgt 5, 10 oder 15 Tage; nicht genommener Urlaub wird mit 300 % des Tageslohns abgegolten | …rstunden und nicht genommener Urlaub laufen über die arbeitsrechtliche Schlichtung, siehe … |
| Nr. 19 | Abschnitt 8, Nr. 18 | Beim Verleihen von Geld einen klaren Schuldschein schreiben; bevor du für jemanden bürgst, überleg dir, ob du bereit bist, seine Schulden zu zahlen | … Schuldschein und Bürgschaft stehen in … |
| Nr. 19 | Abschnitt 8, Nr. 20 | Bei einer Klage oder Vollstreckung die Vermögensauskunft wahrheitsgemäß abgeben und zahlen, was du kannst, übertrage Haus und Geld nicht an Angehörige oder Firmen | … Das Vollstreckungsstadium steht in … |
| Nr. 20 | Abschnitt 7, Nr. 19 | Nach Haft, Insolvenz oder Eintrag in die Liste der Vertrauensunwürdigen gibt es rechtlich Wege zurück — erledige zuerst die Formalitäten | … Wie du nach der Erfüllung wieder auf die Beine kommst, steht in … |
| Nr. 20 | Abschnitt 8, Nr. 21 | Bei Ausgabenbeschränkung oder Eintrag in die Liste der Vertrauensunwürdigen zuerst klären, nach welcher Ziffer du geführt wirst, und was sich korrigieren lässt, korrigieren lassen | …Was nach der Aufnahme in die Liste und nach der Ausgabenbeschränkung zu tun ist, steht in … |
| Nr. 21 | Abschnitt 7, Nr. 19 | Nach Haft, Insolvenz oder Eintrag in die Liste der Vertrauensunwürdigen gibt es rechtlich Wege zurück — erledige zuerst die Formalitäten | …n Fleck im Kreditbericht, das Löschen aus der Liste ändert den Kreditbericht nicht, siehe … |
| Nr. 21 | Abschnitt 8, Nr. 17 | Lies das Papier vor der Unterschrift zu Ende, unterschreibe nicht für andere und nicht auf leeren Blättern | … Diese Bestimmung wurde 2015 durch die Justizauslegung … |
| Nr. 22 | Abschnitt 8, Nr. 7 | Wenn du getrunken hast, fass das Lenkrad nicht an, auch beim E-Bike und beim „kurzen Umrangieren" | … Die Justizauslegung … |
| Nr. 31 | Abschnitt 9, Nr. 18 | Ist der andere unter 14 Jahre alt, darf kein Geschlechtsverkehr stattfinden; „sie war einverstanden" ist kein Grund | … Zur Altersfeststellung siehe … |
| Nr. 31 | Abschnitt 9, Nr. 18 | Ist der andere unter 14 Jahre alt, darf kein Geschlechtsverkehr stattfinden; „sie war einverstanden" ist kein Grund | … wie das Mädchenalter festgestellt wird, siehe … |
| Nr. 31 | Abschnitt 8, Nr. 32 | Nach Sex oder Nacktchat: Verlangt die andere Seite mit einer Anzeige, Fotos oder einem Hinweis an deinen Arbeitgeber Geld, gib keinen Cent, lösch keine Aufzeichnung und ruf sofort die Polizei | …iss trinkst, bestehen zugleich das Risiko der Anschuldigung und das der Erpressung, siehe … |
| Nr. 32 | Abschnitt 8, Nr. 10 | Bei einem Streit zuerst die Polizei rufen und nicht zuschlagen, wer zuerst zuschlägt, verliert fast immer | …igen Fragen der Anwendung des Rechts in Strafverfahren wegen Erpressung" (Justizauslegung … |
| Nr. 32 | Abschnitt 8, Nr. 5 | Bei einer Anschuldigung oder Vorladung zuerst einen Anwalt nehmen, nichts privat regeln und keine Aufzeichnungen löschen | … oder das Konto und blockier nicht einfach, damit löschst du deine eigenen Beweise, siehe … |
| Nr. 32 | Abschnitt 8, Nr. 36 | Bist du selbst Geschädigter und forderst Ersatz, geh über 12315, eine Klage oder einen Anwalt; geh nicht allein zum Treffen des anderen und verbinde „Geld" nicht mit „ich veröffentliche nichts" in einem Satz | …er und forderst vom Schädiger Ersatz, ist ein hoher Betrag nicht gleich Erpressung, siehe … |
| Nr. 33 | Abschnitt 8, Nr. 34 | Bei unzureichenden Beweisen muss freigesprochen werden, erzwungene Aussagen müssen ausgeschlossen werden; nach dem Urteil gibt es Beschwerde und Wiederaufnahme | … Beweislast und Rechtsbehelfe, wenn du selbst beschuldigt wirst, stehen in … |
| Nr. 33 | Abschnitt 8, Nr. 35 | Wurdest du in Haft genommen und dann das Verfahren eingestellt, die Anklage fallen gelassen oder freigesprochen, beantrag Staatshaftung, sie wird pro Tag berechnet | … Beweislast und Rechtsbehelfe, wenn du selbst beschuldigt wirst, stehen in … |
| Nr. 34 | Abschnitt 8, Nr. 5 | Bei einer Anschuldigung oder Vorladung zuerst einen Anwalt nehmen, nichts privat regeln und keine Aufzeichnungen löschen | … Bei finanzieller Not kannst du Prozesskostenhilfe beantragen, siehe … |
| Nr. 34 | Abschnitt 8, Nr. 3 | Merk dir die harten Regeln gegen Betrug: Anrufen nicht trauen, Daten nicht verraten, Links nicht anklicken, Überweisungen mehrfach prüfen, sieben häufige Maschen haben dieselbe Form | … Art. 200 … |
| Nr. 34 | Abschnitt 8, Nr. 5 | Bei einer Anschuldigung oder Vorladung zuerst einen Anwalt nehmen, nichts privat regeln und keine Aufzeichnungen löschen | … nach der ersten Vernehmung einen Anwalt beauftragen, siehe … |
| Nr. 35 | Abschnitt 8, Nr. 36 | Bist du selbst Geschädigter und forderst Ersatz, geh über 12315, eine Klage oder einen Anwalt; geh nicht allein zum Treffen des anderen und verbinde „Geld" nicht mit „ich veröffentliche nichts" in einem Satz | … Wie es praktisch gerechnet wird, kannst du am Entscheid des Falls Guo Li in … |
| Nr. 36 | Abschnitt 8, Nr. 5 | Bei einer Anschuldigung oder Vorladung zuerst einen Anwalt nehmen, nichts privat regeln und keine Aufzeichnungen löschen | … Wie du nach einer Verfahrenseröffnung vorgehst, steht in … |
| Nr. 36 | Abschnitt 8, Nr. 34 | Bei unzureichenden Beweisen muss freigesprochen werden, erzwungene Aussagen müssen ausgeschlossen werden; nach dem Urteil gibt es Beschwerde und Wiederaufnahme | … Wie du nach einer Verfahrenseröffnung vorgehst, steht in … |
| Nr. 36 | Abschnitt 8, Nr. 35 | Wurdest du in Haft genommen und dann das Verfahren eingestellt, die Anklage fallen gelassen oder freigesprochen, beantrag Staatshaftung, sie wird pro Tag berechnet | … Wie du nach einer Verfahrenseröffnung vorgehst, steht in … |
| Nr. 36 | Abschnitt 8, Nr. 32 | Nach Sex oder Nacktchat: Verlangt die andere Seite mit einer Anzeige, Fotos oder einem Hinweis an deinen Arbeitgeber Geld, gib keinen Cent, lösch keine Aufzeichnung und ruf sofort die Polizei | … Wenn die andere Seite mit einem Druckmittel Geld von dir fordert, siehe … |
| Nr. 37 | Abschnitt 8, Nr. 14 | Wenn der Gedanke „ich nehme jemanden mit" oder „gemeinsam sterben" auftaucht, behandle es als Notfall: geh vom Ort weg, gib Auto- und Messerschlüssel ab und ruf 12356 | … Die Leitende Meinung … |
| Nr. 37 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die 12356 anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Wenn du es nicht mehr aushältst, ruf 12356 an, siehe … |
| Nr. 37 | Abschnitt 14, Nr. 8 | Du hast das Recht, deine personenbezogenen Daten einzusehen, zu kopieren, zu berichtigen und zu löschen, und kannst bei Ablehnung klagen | … du von der Plattform die Löschung deiner personenbezogenen Daten verlangen willst, siehe … |
| Nr. 37 | Abschnitt 8, Nr. 14 | Wenn der Gedanke „ich nehme jemanden mit" oder „gemeinsam sterben" auftaucht, behandle es als Notfall: geh vom Ort weg, gib Auto- und Messerschlüssel ab und ruf 12356 | …entlichen Klage wechseln, musst du einen der fünf Fälle aus Art. 12 der Leitenden Meinung … |
| Nr. 37 | Abschnitt 8, Nr. 16 | Beschimpfe und verleumde niemanden im Netz und verbreite nichts Ungeprüftes; bei einem Shitstorm erst Beweise sichern, dann die Polizei rufen | … Erstens nicht zurückschimpfen, das machen aus dir den Bestraften aus … |
| Nr. 38 | Abschnitt 8, Nr. 5 | Bei einer Anschuldigung oder Vorladung zuerst einen Anwalt nehmen, nichts privat regeln und keine Aufzeichnungen löschen | … Art. 198 Abs. 1 … |
| Nr. 38 | Abschnitt 9, Nr. 21 | Erfinde keinen Unfall und übertreibe keinen Schaden für die Schadensregulierung: das ist Versicherungsbetrug, und wer für dich aussagt, repariert oder begutachtet, zählt mit | …ines Schadens ist ebenfalls eine Straftat und zählt Helfer, die aussagen, mit dazu, siehe … |
| Nr. 38 | Abschnitt 8, Nr. 14 | Wenn der Gedanke „ich nehme jemanden mit" oder „gemeinsam sterben" auftaucht, behandle es als Notfall: geh vom Ort weg, gib Auto- und Messerschlüssel ab und ruf 12356 | … Den Impuls, einem Familienmitglied zu schaden, behandle wie einen Notfall, siehe … |
| Nr. 38 | Abschnitt 8, Nr. 15 | Wenn jemand aus deinem Umfeld „niemand soll es gut haben" oder „ich nehme das Kind mit" sagt, halt es nicht für Gerede: nahe Angehörige dürfen direkt in die Klinik bringen, und die Polizei muss nach einer Anzeige einschreiten | … Den Impuls, einem Familienmitglied zu schaden, behandle wie einen Notfall, siehe … |
| Nr. 39 | Abschnitt 8, Nr. 2 | Bei einem entdeckten Betrug sofort 110 oder 96110 anrufen und die Zahlung stoppen lassen, nicht selbst nachforschen | … Das Sperrverfahren nach einem Betrug steht in … |
| Nr. 39 | Abschnitt 8, Nr. 37 | Wirst du online gemobbt: erst Schutz an, erst Beweise sichern, dann unter Plattform, Anordnung und Anzeige einen der drei Wege wählen | … Online-Mobbing steht in … |
| Nr. 40 | Abschnitt 24, Nr. 12 | Dank dem Arzt, der dich gerettet hat, über Dankbrief, Wimpel und Zufriedenheitsbewertung, nicht über einen Umschlag: Die Richtlinie verbietet Sachen, nicht den Dank | … Der Umschlag im Krankenhaus folgt einem anderen Regelwerk, siehe … |
| Nr. 40 | Abschnitt 8, Nr. 39 | Verlang bei der Anzeige sofort die Eingangsbestätigung, bei Nicht-Eröffnung einen schriftlichen Bescheid: binnen 7 Tagen Widerspruch, weitere 7 Tage Überprüfung, die Staatsanwaltschaft kann die Eröffnung anweisen | … Verlangt die andere Seite wirklich einen Vorteil, geh über den Weg aus … |
| Nr. 41 | Abschnitt 19, Nr. 8 | Sichere vor dem Ausscheiden Lohnabrechnungen, Anwesenheitsnachweise, Arbeitsvertrag, Sozialversicherungsauszug und Chatverläufe | … Was du vor dem Ausscheiden sichern solltest, steht in … |
| Nr. 41 | Abschnitt 8, Nr. 16 | Beschimpfe und verleumde niemanden im Netz und verbreite nichts Ungeprüftes; bei einem Shitstorm erst Beweise sichern, dann die Polizei rufen | …ffentlichen der Worte eines anderen kann Streit über Privatsphäre und Ruf auslösen, siehe … |
| Nr. 42 | Abschnitt 8, Nr. 1 | Nach einem Verkehrsunfall zuerst anhalten, retten und die Polizei rufen, nicht wegfahren | … Was am Unfallort zu tun ist, steht in … |
| Nr. 43 | Abschnitt 8, Nr. 41 | Bei Telefonaten und Gesprächen, die kippen können, gleich aufnehmen: Bei einem Gespräch, an dem du teilnimmst, musst du vorher nicht die Zustimmung des anderen einholen | … Aufnahmen siehe … |
| Nr. 43 | Abschnitt 8, Nr. 10 | Bei einem Streit zuerst die Polizei rufen und nicht zuschlagen, wer zuerst zuschlägt, verliert fast immer | … Greif nicht selbst ein, die Begründung steht in … |

## 09-rechtliche-rote-linien

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 3 | Abschnitt 11, Nr. 11 | Keine Werkzeuge zur Zensurumgehung und keine VPN-Konten verkaufen, für niemanden solche Knoten aufbauen | … Wie die Werkzeuge zum Überwinden der Firewall selbst bestraft werden, siehe … |
| Nr. 3 | Abschnitt 9, Nr. 1 | Leite in der Gruppe keine Meldungen über Katastrophen, Seuchen und Polizeivorfälle weiter, deren Echtheit du nicht kennst; bearbeite keine Bilder, lass keine KI Schauplatzbilder erzeugen | … Was du nicht einordnen kannst, leite erst recht nicht weiter, siehe … |
| Nr. 5 | Abschnitt 8, Nr. 8 | Verleih niemandem Bankkarte, Handykarte oder Zahlungskonto, Geld für andere durchlaufen zu lassen ist kein Nebenjob | …andere beim „Paofen" mithilfst, also beim Weiterleiten von Geld über eigene Konten, siehe … |
| Nr. 6 | Abschnitt 8, Nr. 9 | Zweimal im Jahr kostenlos den eigenen Kreditbericht prüfen, ob fremde Kredite und Karten darin stehen | … Wie du merkst, dass jemand einen Kredit auf deinen Namen aufgenommen hat, siehe … |
| Nr. 6 | Abschnitt 9, Nr. 5 | Ein „Nebenjob", der dich mit eigener Karte Geld annehmen, abheben oder weiterleiten lässt: mach ihn nicht, egal wie hoch die Belohnung ist | … Zum Abheben und Weiterleiten für andere siehe … |
| Nr. 8 | Abschnitt 11, Nr. 3 | Keine Skripte für Ticketkauf, Blitzverkäufe, Fake-Bestellungen oder das Abgreifen von Rabatten schreiben oder verkaufen, auch nicht als reine Tastendruck-Automatik | … Zum Selbstschreiben und Verkaufen von Skripten siehe … |
| Nr. 8 | Abschnitt 8, Nr. 8 | Verleih niemandem Bankkarte, Handykarte oder Zahlungskonto, Geld für andere durchlaufen zu lassen ist kein Nebenjob | … Zum Verkauf von Karten und Konten siehe … |
| Nr. 8 | Abschnitt 9, Nr. 16 | Verleih deinen Ausweis nicht, benutze keinen fremden Ausweis und eröffne mit fremden Papieren keine Konten und kaufe keine Tickets | … Zum Verkauf von Karten und Konten siehe  (Bank- und Handykarten nicht verleihen) und … |
| Nr. 15 | Abschnitt 8, Nr. 18 | Beim Verleihen von Geld einen klaren Schuldschein schreiben; bevor du für jemanden bürgst, überleg dir, ob du bereit bist, seine Schulden zu zahlen | … Wie du einen Schuldschein schreibst, siehe … |
| Nr. 16 | Abschnitt 8, Nr. 28 | Werde kein „vorgeschobener gesetzlicher Vertreter" und verleih deinen Ausweis nicht für eine Firmengründung | … Die Folgen dieser beiden Fälle siehe … |
| Nr. 16 | Abschnitt 8, Nr. 8 | Verleih niemandem Bankkarte, Handykarte oder Zahlungskonto, Geld für andere durchlaufen zu lassen ist kein Nebenjob | … Die Folgen dieser beiden Fälle siehe … |
| Nr. 19 | Abschnitt 8, Nr. 10 | Bei einem Streit zuerst die Polizei rufen und nicht zuschlagen, wer zuerst zuschlägt, verliert fast immer | …er, der zuerst zuschlägt, fast immer verliert, und wo die Grenze der Notwehr liegt, siehe … |
| Nr. 19 | Abschnitt 8, Nr. 11 | Gegen einen Angriff, dem du nicht ausweichen kannst, darfst du dich wehren, aber nur gegen den Angreifer, und du hörst auf, wenn er aufhört | … Die Rechnung für ein Zuschlagen aus aufgestauter Wut siehe … |
| Nr. 19 | Abschnitt 8, Nr. 12 | Wenn du mit jemandem Streit hast, ob ausstehender Lohn, Kündigung oder ergaunertes Geld, geh den Weg über Beschwerde, Schlichtung und Klage, statt dich an der Person zu rächen | … Die Rechnung für ein Zuschlagen aus aufgestauter Wut siehe … |
| Nr. 19 | Abschnitt 8, Nr. 13 | Auch wenn du wütend bist, richte nie Unbeteiligte zugrunde: Mit dem Auto in eine Menschenmenge fahren und an öffentlichen Orten angreifen gilt als gemeingefährliche Straftat, Mindeststrafe drei Jahre, bei Toten die Todesstrafe | … Die Rechnung für ein Zuschlagen aus aufgestauter Wut siehe … |
| Nr. 19 | Abschnitt 8, Nr. 14 | Wenn der Gedanke „ich nehme jemanden mit" oder „gemeinsam sterben" auftaucht, behandle es als Notfall: geh vom Ort weg, gib Auto- und Messerschlüssel ab und ruf 12356 | … Die Rechnung für ein Zuschlagen aus aufgestauter Wut siehe … |
| Nr. 20 | Abschnitt 27, Nr. 7 | Lern diese Liste „sofort ins Krankenhaus" auswendig, sie gilt in der Schwangerschaft und im ganzen Jahr nach der Geburt | …Liste, wann du in Schwangerschaft und nach der Geburt sofort ins Krankenhaus musst, siehe … |
| Nr. 20 | Abschnitt 27, Nr. 16 | Überspring die Kontrolle 42 Tage nach der Geburt nicht, sie ist zugleich das Screening auf postpartale Depression | …olle 42 Tage nach der Geburt ist zugleich ein Screening auf postpartale Depression, siehe … |
| Nr. 20 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die 12356 anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Bei Suizidgedanken ruf die 12356, siehe … |
| Nr. 21 | Abschnitt 5, Nr. 26 | Die Haftpflichtversicherung ausreichend kaufen: Die Grenzen der Pflicht-Kfz-Versicherung sind landesweit einheitlich und niedrig, der darüber hinausgehende Teil kommt aus deinem eigenen Haushalt | … Wie du eine Kfz-Versicherung richtig abschließt, siehe … |
| Nr. 21 | Abschnitt 8, Nr. 38 | „Erst für jemanden eine Versicherung abschließen, dann handeln" ist rechtlich von vornherein verschlossen: kein Cent ist zu holen, die Strafe läuft als Tötung plus Versicherungsbetrug in Tateinheit | …et, wird laut Gesetz wegen mehrerer Taten mit zusammengerechneten Strafen bestraft, siehe … |
| Nr. 21 | Abschnitt 5, Nr. 13 | Richte einmal in der Krankenversicherungs-App die Familienmitwirkung ein, dann kann das Geld auf dem persönlichen Konto der Arbeitnehmer-Krankenversicherung für Arztbesuche und Arzneimittel von Ehepartner, Eltern und Kindern verwendet werden | …ngskarte und das Abheben vom persönlichen Konto gelten als Betrug, siehe die Anmerkung zu … |
| Nr. 22 | Abschnitt 1, Nr. 35 | Nicht „eine Niere weniger macht nichts" gegen Geld tauschen: die verbliebene arbeitet für zwei, 86 % der Nierenverkäufer sagen später, ihre Gesundheit sei schlechter | … Was der Körper nach der Nierenentnahme zahlt, siehe … |
| Nr. 22 | Abschnitt 1, Nr. 35 | Nicht „eine Niere weniger macht nichts" gegen Geld tauschen: die verbliebene arbeitet für zwei, 86 % der Nierenverkäufer sagen später, ihre Gesundheit sei schlechter | … Was der Körper nach der Entnahme einer Niere zahlt, siehe … |
| Nr. 22 | Abschnitt 9, Nr. 6 | Wenn dich jemand zum „Aufhübschen von Unterlagen" für einen Kredit oder zu einer Beteiligung am Kreditbetrag holen will: mach in keinem Fall mit | … Die Fallen von Onlinekrediten und Krediten über „Aufhübschen von Unterlagen" siehe … |
| Nr. 23 | Abschnitt 1, Nr. 30 | Beim Geschlechtsverkehr immer ein Kondom benutzen, keine Spritzen mit anderen teilen | … Zum Risiko von Geschlechtskrankheiten und HIV siehe … |
| Nr. 23 | Abschnitt 13, Nr. 38 | Vielleicht hast du dich mit HIV angesteckt: hol dir binnen 72 Stunden die Blockermedikamente, je früher, desto besser | …Geschlechtskrankheiten und HIV siehe Abschnitt 1, Nr. 30 (Geschlechtsverkehr, Kondom) und … |
| Nr. 23 | Abschnitt 9, Nr. 18 | Ist der andere unter 14 Jahre alt, darf kein Geschlechtsverkehr stattfinden; „sie war einverstanden" ist kein Grund | … Heute wird so etwas direkt als Vergewaltigung härter bestraft, siehe … |

## 10-liebe-und-ehe

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 4 | Abschnitt 10, Nr. 15 | Frag beim emotionalen Wert nicht nur, ob er da ist. Schau auf die Qualität der Beziehung | … Dieselbe Sache behandelt der Eintrag zur Beziehungsqualität (… |
| Nr. 12 | Abschnitt 10, Nr. 11 | Wenn Eltern beim Hauskauf Geld geben, halt gleich bei der Überweisung schriftlich fest, ob es ein Darlehen oder eine Schenkung ist | … Deshalb ist der Schritt in … |
| Nr. 12 | Abschnitt 8, Nr. 18 | Beim Verleihen von Geld einen klaren Schuldschein schreiben; bevor du für jemanden bürgst, überleg dir, ob du bereit bist, seine Schulden zu zahlen | … Die allgemeinen Regeln zu Schuldschein und Bürgschaft stehen in … |
| Nr. 13 | Abschnitt 10, Nr. 16 | Rechne die Kosten des Ausstiegs: einvernehmliche Scheidung mit 30 Tagen Bedenkzeit, streitige Scheidung zu gesetzlichen Bedingungen | … Die 30 Tage Bedenkzeit bei der Scheidungsregistrierung steht bei … |
| Nr. 17 | Abschnitt 10, Nr. 8 | Rechne den Gesundheitsnutzen mit, aber mit Abschlag, weil es Beobachtungsdaten sind | … Er geht aber nicht automatisch in deinen Gesundheitsnutzen (… |
| Nr. 17 | Abschnitt 10, Nr. 15 | Frag beim emotionalen Wert nicht nur, ob er da ist. Schau auf die Qualität der Beziehung | …ber nicht automatisch in deinen Gesundheitsnutzen (Nr. 8) oder in die Beziehungsqualität (… |
| Nr. 17 | Abschnitt 10, Nr. 9 | Rechne die Zeitrechnung als „unbezahlte Arbeit". Klärt die Aufteilung, bevor ihr heiratet | … Die Zeitrechnung (… |
| Nr. 17 | Abschnitt 10, Nr. 10 | Schau in der Geldrechnung zuerst auf die gesetzliche Regel und entscheide dann über eine schriftliche Vereinbarung | … Die Zeitrechnung (Nr. 9), die Geldrechnung (… |
| Nr. 17 | Abschnitt 10, Nr. 11 | Wenn Eltern beim Hauskauf Geld geben, halt gleich bei der Überweisung schriftlich fest, ob es ein Darlehen oder eine Schenkung ist | … Die Zeitrechnung (Nr. 9), die Geldrechnung (… |
| Nr. 17 | Abschnitt 10, Nr. 12 | Große Schulden, die ein Ehepartner allein aufnimmt, werden nicht automatisch deine, wenn du nicht unterschreibst und sie nicht bestätigst | … Die Zeitrechnung (Nr. 9), die Geldrechnung (… |
| Nr. 17 | Abschnitt 10, Nr. 16 | Rechne die Kosten des Ausstiegs: einvernehmliche Scheidung mit 30 Tagen Bedenkzeit, streitige Scheidung zu gesetzlichen Bedingungen | … Die Zeitrechnung (Nr. 9), die Geldrechnung (Nr. 10 bis 12) und die Kosten des Ausstiegs (… |
| Nr. 18 | Abschnitt 8, Nr. 43 | Wirst du häuslicher Gewalt ausgesetzt: erst die Polizei rufen und ein Einsatzprotokoll hinterlassen, dann beim Gericht eine Gewaltschutzanordnung beantragen, sie setzt keine Scheidung voraus und kostet nichts | … siehe … |
| Nr. 18 | Abschnitt 10, Nr. 16 | Rechne die Kosten des Ausstiegs: einvernehmliche Scheidung mit 30 Tagen Bedenkzeit, streitige Scheidung zu gesetzlichen Bedingungen | … Wenn du überlegst, ob du gehst, stehen die Kosten des Ausstiegs in … |

## 11-rote-linien-fuer-techniker

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 2 | Abschnitt 11, Nr. 3 | Keine Skripte für Ticketkauf, Blitzverkäufe, Fake-Bestellungen oder das Abgreifen von Rabatten schreiben oder verkaufen, auch nicht als reine Tastendruck-Automatik | … Doch der Fall zum Ticketkauf in … |
| Nr. 4 | Abschnitt 11, Nr. 3 | Keine Skripte für Ticketkauf, Blitzverkäufe, Fake-Bestellungen oder das Abgreifen von Rabatten schreiben oder verkaufen, auch nicht als reine Tastendruck-Automatik | … Wer einen Schutz umgeht und Daten aus dem System holt, bekommt dasselbe Strafmaß wie in … |
| Nr. 7 | Abschnitt 11, Nr. 13 | Code, der in der Arbeitszeit und mit Firmenressourcen entsteht, gehört der Firma. Eigene Open-Source-Projekte mit eigener Zeit und eigener Ausrüstung machen, keinen Firmencode beimischen | … Das steht in … |
| Nr. 9 | Abschnitt 11, Nr. 8 | Keine eigenen Programme auf fremden Rechnern, Servern oder Kameras laufen lassen, Firmenrechner nicht zum Mining nutzen | … Höhe und Fristen sind wie in … |
| Nr. 9 | Abschnitt 11, Nr. 10 | Sicherheitslücken nach Vorschrift melden, vor dem Patch keine Details veröffentlichen, keine Ausnutzungstools verbreiten, nichts ins Ausland geben | … Wie du nach dem Fund einer Sicherheitslücke vorgehst, steht in … |
| Nr. 10 | Abschnitt 11, Nr. 9 | Ohne schriftliche Erlaubnis keine fremden Systeme testen, „gute Absicht" und „nachträgliche Meldung" sind kein Entschuldigungsgrund | … Ob du überhaupt testen darfst, steht in … |
| Nr. 15 | Abschnitt 11, Nr. 4 | Crawler nur auf öffentlichen Seiten ohne Login einsetzen, keine Anticrawl-Sperren umgehen, keine personenbezogenen Daten anfassen, die Daten nicht verkaufen | … Das Verkaufen oder Weitergeben personenbezogener Daten kann eine Straftat sein, siehe … |

## 12-gruenden-und-geschaeft

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 2 | Abschnitt 8, Nr. 18 | Beim Verleihen von Geld einen klaren Schuldschein schreiben; bevor du für jemanden bürgst, überleg dir, ob du bereit bist, seine Schulden zu zahlen | … Die allgemeinen Regeln zu Schuldschein und Bürgschaft siehe … |
| Nr. 2 | Abschnitt 12, Nr. 1 | Nur mit Geld gründen, dessen Verlust du verkraftest: nicht ans Familienvermögen gehen, nichts leihen | …enau, was du mit dieser Seite aufgibst, und halte die Bürgschaftssumme unter der Zahl aus … |
| Nr. 4 | Abschnitt 8, Nr. 28 | Werde kein „vorgeschobener gesetzlicher Vertreter" und verleih deinen Ausweis nicht für eine Firmengründung | … Das Risiko eines vorgeschobenen gesetzlichen Vertreters siehe … |
| Nr. 6 | Abschnitt 12, Nr. 3 | Vor der Eröffnung die richtige Rechtsform wählen: Einzelunternehmer und Personengesellschafter haften unbeschränkt, nur die GmbH ist „beschränkt" | … die Obergrenze deiner Haftung, und es ist innerhalb von 5 Jahren voll einzuzahlen, siehe … |
| Nr. 6 | Abschnitt 12, Nr. 7 | Branchen mit Erlaubnispflicht: ohne Erlaubnis nicht eröffnen | …tsbereiche mit Erlaubnispositionen dürfen ohne die Erlaubnis nicht eröffnet werden, siehe … |
| Nr. 7 | Abschnitt 12, Nr. 8 | Bei Lebensmitteln zuerst die eigene Stufe bestimmen: Produktion und Gastronomie brauchen eine Erlaubnis, nur der Verkauf vorverpackter Ware wird zur Meldung, frisches Fleisch und Gemüse brauchen nichts | …eln gibt und ob der Verkauf von frischem Fleisch und Gemüse eine Erlaubnis braucht, siehe … |
| Nr. 8 | Abschnitt 5, Nr. 31 | Kaufst du unsichere Lebensmittel, kannst du neben dem Geld das Zehnfache des Preises verlangen; ist die zusätzliche Entschädigung unter 1000 元, wird sie mit 1000 元 gerechnet | … Wie viel Entschädigung ein Käufer verlangen kann, siehe … |
| Nr. 8 | Abschnitt 12, Nr. 6 | Vor der Registrierung Name, Geschäftssitz, Geschäftsbereich und gezeichnetes Kapital festlegen; sind die Unterlagen vollständig, gibt es den Gewerbeschein sofort | … Rechtsform und Gewerbeschein siehe … |
| Nr. 8 | Abschnitt 12, Nr. 7 | Branchen mit Erlaubnispflicht: ohne Erlaubnis nicht eröffnen | … Geschäftsbereich festlegen), ob ein anderer Geschäftszweig eine Erlaubnis braucht, siehe … |
| Nr. 9 | Abschnitt 5, Nr. 31 | Kaufst du unsichere Lebensmittel, kannst du neben dem Geld das Zehnfache des Preises verlangen; ist die zusätzliche Entschädigung unter 1000 元, wird sie mit 1000 元 gerechnet | …nfache des Lebensmittelpreises verlangen, bei unter 1000 元 werden 1000 元 gerechnet (siehe … |
| Nr. 10 | Abschnitt 6, Nr. 10 | Gib kein großes Geld für Nahrungsergänzungsmittel, Kräuterpasten und Stärkungsmittel aus, um „den Körper in Ordnung zu bringen" | … Wie ein Käufer solche Werbesprüche erkennt, siehe … |
| Nr. 11 | Abschnitt 12, Nr. 8 | Bei Lebensmitteln zuerst die eigene Stufe bestimmen: Produktion und Gastronomie brauchen eine Erlaubnis, nur der Verkauf vorverpackter Ware wird zur Meldung, frisches Fleisch und Gemüse brauchen nichts | … Mach es nach der Methode aus … |
| Nr. 11 | Abschnitt 12, Nr. 8 | Bei Lebensmitteln zuerst die eigene Stufe bestimmen: Produktion und Gastronomie brauchen eine Erlaubnis, nur der Verkauf vorverpackter Ware wird zur Meldung, frisches Fleisch und Gemüse brauchen nichts | … Die einfachste Verteidigung sind immer noch die Schritte aus … |
| Nr. 12 | Abschnitt 12, Nr. 23 | Bei Verlust geordnet aussteigen: wenn die einfache Löschung geht, löschen; bei Überschuldung in die Insolvenz; nichts liegen lassen | …n gesperrt, und wenn du löschen willst, geht auch das vereinfachte Verfahren nicht, siehe … |
| Nr. 14 | Abschnitt 8, Nr. 2 | Bei einem entdeckten Betrug sofort 110 oder 96110 anrufen und die Zahlung stoppen lassen, nicht selbst nachforschen | … Wer schon gezahlt oder überwiesen hat, ruft nach … |
| Nr. 19 | Abschnitt 12, Nr. 20 | Bei jeder Warenlieferung Belege und Daten des Lieferanten aufbewahren; Ware, deren Einkaufspreis deutlich unter Marktpreis liegt, nicht annehmen: kauft ein Angestellter Fälschungen ein, wird der Chef verurteilt | … Die roten Linien bei fremden Marken und Bildern siehe … |
| Nr. 19 | Abschnitt 12, Nr. 21 | Bilder auf Ware, Verpackung, Etikett und Werbebild entweder selbst machen oder lizenzieren; Farbe ändern und Symbol hinzufügen gilt nicht als „geändert" | …en bei fremden Marken und Bildern siehe Nr. 20 (Belege beim Wareneinkauf aufbewahren) und … |
| Nr. 20 | Abschnitt 12, Nr. 21 | Bilder auf Ware, Verpackung, Etikett und Werbebild entweder selbst machen oder lizenzieren; Farbe ändern und Symbol hinzufügen gilt nicht als „geändert" | … Fremde Bilder siehe … |
| Nr. 21 | Abschnitt 12, Nr. 19 | Nach dem Muster zuerst die Serienliste abarbeiten, dann über den Start reden | … Vor der Produktion die Marke prüfen, siehe … |

## 13-notfaelle

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Abschnittskopf | Abschnitt 8, Nr. 3 | Merk dir die harten Regeln gegen Betrug: Anrufen nicht trauen, Daten nicht verraten, Links nicht anklicken, Überweisungen mehrfach prüfen, sieben häufige Maschen haben dieselbe Form | … Die harten Regeln gegen Betrug und die sieben häufigen Maschen stehen in … |
| Abschnittskopf | Abschnitt 8, Nr. 32 | Nach Sex oder Nacktchat: Verlangt die andere Seite mit einer Anzeige, Fotos oder einem Hinweis an deinen Arbeitgeber Geld, gib keinen Cent, lösch keine Aufzeichnung und ruf sofort die Polizei | … Verlangt jemand mit privaten Fotos oder einem Nacktchat-Video Geld von dir, siehe … |
| Abschnittskopf | Abschnitt 8, Nr. 2 | Bei einem entdeckten Betrug sofort 110 oder 96110 anrufen und die Zahlung stoppen lassen, nicht selbst nachforschen | …chon überwiesen, ruf sofort 110 oder 96110 an und verlange, die Zahlung zu stoppen, siehe … |
| Nr. 2 | Abschnitt 13, Nr. 1 | Wenn jemand hinfällt und nicht atmet: sofort kräftig auf den Brustkorb drücken, andere die 120 anrufen lassen und einen AED suchen | … Atmet sie nicht, drück nach … |
| Nr. 2 | Abschnitt 1, Nr. 13 | Ab 60 Gleichgewicht und Beinkraft trainieren, Bad und Treppe zu Hause umbauen | … Zum Vorbeugen von Stürzen selbst siehe … |
| Nr. 2 | Abschnitt 8, Nr. 16 | Beschimpfe und verleumde niemanden im Netz und verbreite nichts Ungeprüftes; bei einem Shitstorm erst Beweise sichern, dann die Polizei rufen | … Wie du nach einem Shitstorm Beweise sicherst und die Polizei rufst, siehe … |
| Nr. 2 | Abschnitt 13, Nr. 10 | Wird ein alter Mensch zwei bis drei Wochen bis mehrere Monate nach einem Kopfstoß unsicher beim Gehen, langsamer, schläfriger oder einseitig kraftlos: ein Kopf-CT machen lassen | … Späte Symptome nach einem Kopfstoß bei alten Menschen siehe … |
| Nr. 2 | Abschnitt 13, Nr. 39 | Hast du dich bei einer Rettung verletzt und Geld verloren: wende dich zuerst an den Schädiger und die Krankenversicherung, dann an die Anerkennung als zivilcouragierte Hilfe | … Das Geld nach einer Rettungsverletzung siehe … |
| Nr. 4 | Abschnitt 13, Nr. 3 | Plötzlich hängender Mundwinkel, ein kraftloser Arm oder undeutliche Sprache: sofort die 120 rufen, nicht warten und nicht selbst fahren | … Zu den drei Handgriffen „hängender Mundwinkel, Arm heben, sprechen" (… |
| Nr. 6 | Abschnitt 6, Nr. 16 | Kauf keine Blaulichtfilter-Brillen zum „Schutz der Augen", glaub aber auch nicht, dass „ein paar Monate am Bildschirm die Augen ruiniert", und schau bei Augenschmerzen und Rötung sofort zum Notfall | … Ob Blaulichtfilter-Brillen nützen, siehe … |
| Nr. 6 | Abschnitt 13, Nr. 5 | Wird ein Auge plötzlich schwarz wie ein heruntergelassener Vorhang: auch wenn es nach Minuten von selbst besser wird, noch am selben Tag als Schlaganfall in die Notaufnahme | … Ein einseitiger Sehverlust ohne Schmerz und ohne Rötung ist etwas anderes, siehe … |
| Nr. 10 | Abschnitt 1, Nr. 13 | Ab 60 Gleichgewicht und Beinkraft trainieren, Bad und Treppe zu Hause umbauen | … Zum Vorbeugen von Stürzen siehe … |
| Nr. 16 | Abschnitt 13, Nr. 2 | Stürzt ein alter Mensch oder liegt jemand am Boden: erst in die Hocke gehen und ihn ansprechen, die 120 rufen, ihn nicht gleich hochziehen; bei Fremden ist Weggehen ebenfalls rechtmäßig, und wer stehen bleibt, fasst nicht an | …mmt, kleiner, aber es macht dich auch nicht haftbar (Art. 184 des Zivilgesetzbuchs, siehe … |
| Nr. 18 | Abschnitt 13, Nr. 1 | Wenn jemand hinfällt und nicht atmet: sofort kräftig auf den Brustkorb drücken, andere die 120 anrufen lassen und einen AED suchen | … Wer nach dem Trennen vom Strom nicht atmet, wird sofort nach … |
| Nr. 18 | Abschnitt 13, Nr. 1 | Wenn jemand hinfällt und nicht atmet: sofort kräftig auf den Brustkorb drücken, andere die 120 anrufen lassen und einen AED suchen | … Wer nach dem Trennen vom Strom nicht atmet, wird nach … |
| Nr. 19 | Abschnitt 1, Nr. 3 | Rauchmelder einbauen; wer im Winter drinnen Kohle verbrennt oder mit Gas heizt, dazu einen Kohlenmonoxidmelder | … Wie der Melder installiert wird, siehe … |
| Nr. 20 | Abschnitt 13, Nr. 19 | Der Kohlenmonoxidmelder schlägt an, oder in einem Zimmer bekommen alle gleichzeitig Kopfschmerz und Übelkeit: erst hinausgehen, dann telefonieren | … Kohlenmonoxid siehe … |
| Nr. 20 | Abschnitt 13, Nr. 14 | Nach einer Verbrennung oder Verbrühung sofort 20 Minuten mit kühlem fließendem Wasser spülen, keine Zahnpasta und keine Sojasauce auftragen | … Kohlenmonoxid siehe Nr. 19, Verbrennungen und Verbrühungen siehe … |
| Nr. 21 | Abschnitt 19, Nr. 10 | Vor einer Stelle mit Staub, Lärm oder Chemikalien: schau, ob der Vertrag die Gefährdung nennt; die drei arbeitsmedizinischen Vorsorgeuntersuchungen ordnet die Firma an und bezahlt sie | … Schutz und Untersuchung vor dem Arbeitsbeginn siehe … |
| Nr. 21 | Abschnitt 19, Nr. 11 | Schäden durch Staub, Lärm und chemische Giftstoffe sind nicht rückgängig zu machen: Schutzausrüstung muss die Firma stellen, Arbeit ohne Schutzmaßnahmen darfst du ablehnen | … Schutz und Untersuchung vor dem Arbeitsbeginn siehe … |
| Nr. 21 | Abschnitt 13, Nr. 20 | Nach versehentlicher Einnahme von Reinigungsmittel, Pestizid oder Medikament nicht zuerst Erbrechen auslösen, sondern mit der Flasche sofort zum Arzt; in Auge oder Haut gelangt, 15 Minuten mit viel klarem Wasser spülen | … Haushaltsreiniger und versehentliche Einnahme siehe … |
| Nr. 23 | Abschnitt 13, Nr. 22 | Bei Hitze Schwindel, Übelkeit, kein Schwitzen oder Bewusstseinstrübung: sofort in den Schatten bringen, ausziehen und mit Wasser kühlen; wer nicht bei Bewusstsein ist, bekommt kein Wasser, die 120 rufen | … … |
| Nr. 25 | Abschnitt 1, Nr. 12 | Kinder in Wassernähe nicht aus den Augen lassen, beim Bootfahren und beim wilden Baden eine Rettungsweste tragen | … wie man vorbeugt, siehe … |
| Nr. 31 | Abschnitt 13, Nr. 13 | Bei einem Biss oder Kratzer von Hund oder Katze, der die Haut verletzt: zuerst 15 Minuten abwechselnd mit Seifenwasser und fließendem Wasser spülen und noch am selben Tag zur Impfung | … Bei einem Hundebiss siehe … |
| Nr. 36 | Abschnitt 8, Nr. 32 | Nach Sex oder Nacktchat: Verlangt die andere Seite mit einer Anzeige, Fotos oder einem Hinweis an deinen Arbeitgeber Geld, gib keinen Cent, lösch keine Aufzeichnung und ruf sofort die Polizei | … privaten Fotos oder einem Nacktchat-Video Geld, ist es umgekehrt, gib keinen Cent, siehe … |
| Nr. 37 | Abschnitt 13, Nr. 5 | Wird ein Auge plötzlich schwarz wie ein heruntergelassener Vorhang: auch wenn es nach Minuten von selbst besser wird, noch am selben Tag als Schlaganfall in die Notaufnahme | … … |
| Nr. 37 | Abschnitt 13, Nr. 9 | Plötzlich „der schlimmste Kopfschmerz des Lebens", der binnen einer Stunde am stärksten wird: sofort in die Notaufnahme und ein Kopf-CT | … … |
| Nr. 37 | Abschnitt 8, Nr. 10 | Bei einem Streit zuerst die Polizei rufen und nicht zuschlagen, wer zuerst zuschlägt, verliert fast immer | … Wirst du selbst in einen Konflikt hineingezogen, siehe … |
| Nr. 37 | Abschnitt 13, Nr. 36 | Verlangt ein Fremder im Gelände Geld von dir: gib ihm das Geld, wehre dich nicht, merke seine Kennzeichen, erstatte nach dem Entkommen Anzeige | … Verlangt ein Fremder Geld, siehe … |
| Nr. 37 | Abschnitt 13, Nr. 39 | Hast du dich bei einer Rettung verletzt und Geld verloren: wende dich zuerst an den Schädiger und die Krankenversicherung, dann an die Anerkennung als zivilcouragierte Hilfe | …mder Geld, siehe Nr. 36 in diesem Abschnitt, das Geld nach einer Rettungsverletzung siehe … |
| Nr. 38 | Abschnitt 1, Nr. 30 | Beim Geschlechtsverkehr immer ein Kondom benutzen, keine Spritzen mit anderen teilen | …e Blockermedikamente sind nur eine Rettung, zur Vorbeugung im Alltag und zum Testen siehe … |
| Nr. 38 | Abschnitt 1, Nr. 31 | Nach einer Risikosituation einmal auf HIV testen lassen, beim Zentrum für Seuchenkontrolle kostenlos und vertraulich | …e Blockermedikamente sind nur eine Rettung, zur Vorbeugung im Alltag und zum Testen siehe … |
| Nr. 39 | Abschnitt 19, Nr. 15 | Nach der Stabilisierung zur Feststellung der Erwerbsminderung gehen, der Grad der Erwerbsminderung wird direkt in Geld umgerechnet | …indung bei Tod durch Arbeitsunfall und die Umrechnung des Invaliditätsgrads in Geld siehe … |
| Nr. 39 | Abschnitt 19, Nr. 16 | Bei Tod durch Arbeitsunfall die drei Beträge auseinanderhalten: Sterbegeld, Hinterbliebenenrente für unterhaltsberechtigte Angehörige, einmalige Entschädigung bei Tod durch Arbeitsunfall | …indung bei Tod durch Arbeitsunfall und die Umrechnung des Invaliditätsgrads in Geld siehe … |
| Nr. 39 | Abschnitt 7, Nr. 3 | Wenn du dir einen Prozess nicht leisten kannst, beantrage Rechtshilfe — Lohnklagen, Unterhalt und Arbeitsunfälle fallen ohnehin darunter | … Wie man Rechtshilfe beantragt, siehe … |
| Nr. 40 | Abschnitt 24, Nr. 8 | Bei akut schweren Verletzungen oder Erkrankungen direkt zum Ersteinschätzungstisch der Notaufnahme, nicht am Anmeldetisch anstehen | … der Stufe, die sofort in den Schockraum kommt, geh nicht am Anmeldetisch anstehen (siehe … |
| Nr. 40 | Abschnitt 13, Nr. 12 | Bei einer starken Blutung zuerst mit der Hand kräftig auf die Wunde drücken; lässt sich eine Blutung an Armen oder Beinen so nicht stillen, ein Tourniquet anlegen und gleichzeitig die 120 rufen | … Wie man eine starke Blutung drückt und ein Tourniquet anlegt, siehe … |
| Nr. 41 | Abschnitt 24, Nr. 10 | Die Feststellung des Behinderungsgrads erst nach Abschluss der Behandlung machen lassen, zu früh wird der Grad zu niedrig bewertet | …ine Feststellung des Behinderungsgrads und ein Schwerbehindertenausweis nötig sind, siehe … |
| Nr. 41 | Abschnitt 24, Nr. 11 | Bleiben nach der Behandlung tatsächlich Funktionsstörungen zurück, beantrage beim Behindertenverband auf Kreisebene am Ort der Haushaltsregistrierung den Schwerbehindertenausweis | …ine Feststellung des Behinderungsgrads und ein Schwerbehindertenausweis nötig sind, siehe … |
| Nr. 41 | Abschnitt 13, Nr. 2 | Stürzt ein alter Mensch oder liegt jemand am Boden: erst in die Hocke gehen und ihn ansprechen, die 120 rufen, ihn nicht gleich hochziehen; bei Fremden ist Weggehen ebenfalls rechtmäßig, und wer stehen bleibt, fasst nicht an | …ewegungsverbote beim Verdacht auf einen Bruch nach einem Sturz eines alten Menschen siehe … |
| Nr. 41 | Abschnitt 13, Nr. 11 | Ein Bein schwillt plötzlich an und spannt, es schmerzt auf Druck: bald zum Arzt; kommt plötzliche Atemnot oder Brustschmerz dazu, sofort die 120 rufen | …hwillt nach einem Gips oder nach Bettlägerigkeit ein Bein an, droht eine Thrombose, siehe … |

## 14-konten-und-informationssicherheit

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 5 | Abschnitt 8, Nr. 2 | Bei einem entdeckten Betrug sofort 110 oder 96110 anrufen und die Zahlung stoppen lassen, nicht selbst nachforschen | … Siehe … |
| Nr. 5 | Abschnitt 14, Nr. 1 | Für E-Mail-, Bezahl- und Social-Media-Konten die Zwei-Faktor-Authentifizierung einschalten, am besten per Pop-up-Bestätigung am Handy, erst danach per SMS-Code | … Siehe … |
| Nr. 9 | Abschnitt 14, Nr. 8 | Du hast das Recht, deine personenbezogenen Daten einzusehen, zu kopieren, zu berichtigen und zu löschen, und kannst bei Ablehnung klagen | … Recht, eigene personenbezogene Daten einzusehen, zu berichtigen und zu löschen, steht in … |

## 15-mieten-und-kaufen

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
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
| Nr. 5 | Abschnitt 8, Nr. 2 | Bei einem entdeckten Betrug sofort 110 oder 96110 anrufen und die Zahlung stoppen lassen, nicht selbst nachforschen | … Ist das Geld schon gezahlt, ruf sofort nach … |
| Nr. 5 | Abschnitt 17, Nr. 3 | Das Geld der alten Menschen auf ein eigenes Konto legen und für große Ausgaben eine Regel mit doppelter Bestätigung festlegen | … nutze ihn zusammen mit der Regel zur doppelten Bestätigung aus … |
| Nr. 5 | Abschnitt 17, Nr. 6 | Außer der umgekehrten Hypothek der Versicherungen für das Alter lass jedes andere „Haus zu Geld" bleiben und verpfände nie die Wohnung für eine Geldanlage | … „Haus zu Geld" ist ein anderer Weg, siehe … |
| Nr. 6 | Abschnitt 8, Nr. 17 | Lies das Papier vor der Unterschrift zu Ende, unterschreibe nicht für andere und nicht auf leeren Blättern | … Die allgemeinen Regeln zum Unterschreiben und zu leeren Verträgen stehen in … |
| Nr. 6 | Abschnitt 8, Nr. 2 | Bei einem entdeckten Betrug sofort 110 oder 96110 anrufen und die Zahlung stoppen lassen, nicht selbst nachforschen | …ehen in Abschnitt 8, Nr. 17, wie du nach einem Betrug die Zahlung stoppen lässt, steht in … |
| Nr. 7 | Abschnitt 7, Nr. 8 | Mit Schwerbehindertenausweis die beiden Zuschüsse für Menschen mit Behinderung beantragen | …t Behinderung sind zwei Verfahren und zwei Zahlungen, sie widersprechen sich nicht, siehe … |
| Nr. 8 | Abschnitt 13, Nr. 11 | Ein Bein schwillt plötzlich an und spannt, es schmerzt auf Druck: bald zum Arzt; kommt plötzliche Atemnot oder Brustschmerz dazu, sofort die 120 rufen | …willt plötzlich ein Bein an, geh nach den Regeln für eine tiefe Venenthrombose vor, siehe … |
| Nr. 8 | Abschnitt 1, Nr. 34 | Nach einem Sturz aus der Höhe nicht auf „ein paar Tage liegen, dann geht es wieder" setzen: die meisten in der Traumaintensivstation überleben, der Preis zählt in Jahren | …r Höhe oder eine schwere Verletzung und die Bettlägerigkeit in den Jahren danach steht in … |
| Nr. 8 | Abschnitt 17, Nr. 7 | Wenn ein alter Mensch in der Familie dauerhaft bettlägerig oder schwer pflegebedürftig ist, beantrage bei der Krankenversicherung am Wohnort die Pflegeversicherung; sie gilt nicht nur für alte Menschen | … Welche Pflegeleistungen die Pflegeversicherung übernimmt, steht in … |

## 19-arbeitsverhaeltnis-und-arbeitsunfall

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 1 | Abschnitt 8, Nr. 19 | Ansprüche haben Fristen: Im Zivilprozess 3 Jahre Verjährung, in der arbeitsrechtlichen Schlichtung 1 Jahr, danach genügt der Gegenseite ein „verjährt" | … Die Verjährungsfrist im arbeitsrechtlichen Verfahren siehe … |
| Nr. 3 | Abschnitt 12, Nr. 16 | Im ersten Monat einen schriftlichen Vertrag schließen und innerhalb von 30 Tagen die Sozialversicherung anmelden | … die Pflichten der Arbeitgeberseite siehe … |
| Nr. 3 | Abschnitt 19, Nr. 6 | Bei einer rechtswidrigen Kündigung durch die Firma ist die Entschädigung das Doppelte der Ausgleichszahlung | … Bei einer rechtswidrigen Kündigung wird nach … |
| Nr. 9 | Abschnitt 19, Nr. 7 | Unterschreib keine Eigenkündigung „aus persönlichen Gründen", mit dieser Unterschrift ist das N weg | … das ist ein weiterer Grund für … |
| Nr. 9 | Abschnitt 7, Nr. 1 | Bei Arbeitslosigkeit zuerst online Arbeitslosengeld beantragen | … Wie du online beantragst, siehe … |
| Nr. 9 | Abschnitt 11, Nr. 12 | Bei einem Wettbewerbsverbot nach dem Ausscheiden schriftlich mahnen, wenn die Firma nicht monatlich zahlt. Nach 3 Monaten ohne Zahlung kannst du kündigen. Stellen ohne Kontakt zu Geschäftsgeheimnissen können die Unwirksamkeit der Klausel feststellen lassen | …ate hintereinander nicht zahlt, kannst du verlangen, diese Vereinbarung zu beenden, siehe … |
| Nr. 9 | Abschnitt 19, Nr. 7 | Unterschreib keine Eigenkündigung „aus persönlichen Gründen", mit dieser Unterschrift ist das N weg | …chreibt, bekommt nicht nur das N nicht, sondern verliert auch das Arbeitslosengeld, siehe … |
| Nr. 10 | Abschnitt 19, Nr. 12 | Beim Arbeitsunfall und beim Unfall auf dem Weg zur Arbeit ist das Erste die Anerkennung als Arbeitsunfall; meldet die Firma nicht, meldest du selbst | … Die Berufskrankheit selbst läuft als Arbeitsunfall, die Leistungen stehen ab … |
| Nr. 11 | Abschnitt 13, Nr. 21 | Spritzt Chemikalie wie Säure oder Lauge auf den Körper: sofort die verunreinigten Kleider ausziehen und mit viel fließendem Wasser spülen, das Auge mit gespreizten Lidern spülen, die Spülzeit voll einhalten, bevor du gehst | … Die Behandlung vor Ort, wenn Chemikalien auf den Körper spritzen, siehe … |
| Nr. 11 | Abschnitt 19, Nr. 10 | Vor einer Stelle mit Staub, Lärm oder Chemikalien: schau, ob der Vertrag die Gefährdung nennt; die drei arbeitsmedizinischen Vorsorgeuntersuchungen ordnet die Firma an und bezahlt sie | … Deshalb ist die Untersuchung beim Ausscheiden so wichtig (siehe … |
| Nr. 17 | Abschnitt 8, Nr. 41 | Bei Telefonaten und Gesprächen, die kippen können, gleich aufnehmen: Bei einem Gespräch, an dem du teilnimmst, musst du vorher nicht die Zustimmung des anderen einholen | … ab heute aufschreiben, Aufnahmen siehe … |
| Nr. 17 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die 12356 anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Wenn du es nicht mehr aushältst, ruf zuerst die 12356 an, siehe … |
| Nr. 17 | Abschnitt 19, Nr. 7 | Unterschreib keine Eigenkündigung „aus persönlichen Gründen", mit dieser Unterschrift ist das N weg | …hendem Lohn oder fehlender Sozialversicherungsbeiträge zum Gehen gedrängt wird, geht nach … |
| Nr. 17 | Abschnitt 19, Nr. 8 | Sichere vor dem Ausscheiden Lohnabrechnungen, Anwesenheitsnachweise, Arbeitsvertrag, Sozialversicherungsauszug und Chatverläufe | …iträge zum Gehen gedrängt wird, geht nach Nr. 7 (keine Eigenkündigung unterschreiben) und … |
| Nr. 17 | Abschnitt 19, Nr. 4 | Bei einer Kündigung zuerst das N ausrechnen: für jedes volle Jahr ein Monatslohn, bei unter sechs Monaten ein halber | … Wie die Ausgleichszahlung gerechnet wird, siehe … |

## 20-neugeborene

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 3 | Abschnitt 20, Nr. 2 | Lass innerhalb von 24 Stunden nach der Geburt die erste Hepatitis-B-Impfung geben | … Die erste Hepatitis-B-Impfung steht in … |
| Nr. 4 | Abschnitt 20, Nr. 12 | Hat das Kind ein schweres Ekzem oder eine Ei-Allergie, meide Erdnüsse nicht, sondern gib sie nach ärztlicher Anleitung früh dazu, aber niemals eine ganze Nuss | …Erdnüsse meiden sollst, wenn das Kind ein schweres Ekzem oder eine Ei-Allergie hat, siehe … |
| Nr. 12 | Abschnitt 13, Nr. 26 | Verschluckt sich jemand und kann nicht mehr sprechen: stell dich hinter ihn, fünf Rückenschläge und fünf Bauchstöße, bei Bewusstlosigkeit mit der Wiederbelebung beginnen | …" Was zu tun ist, wenn sich jemand verschluckt, siehe … |
| Nr. 12 | Abschnitt 20, Nr. 4 | Füttere in den ersten 6 Monaten nur Muttermilch, nicht einmal Wasser, und gib ab 6 Monaten Beikost, still aber weiter | …LEAP beginnt mit 4 Monaten, in China beginnt die Beikost mit vollendeten 6 Monaten, siehe … |

## 21-ausland-und-reisen

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 4 | Abschnitt 21, Nr. 3 | Wisse, was konsularischer Schutz kann und was nicht: Er kann dich besuchen, dich aber nicht herausholen, und die Kosten trägst du selbst | … Der konsularische Schutz streckt dieses Geld ebenfalls nicht vor (siehe … |
| Nr. 6 | Abschnitt 14, Nr. 5 | Bei Kartenmissbrauch erst sperren und einfrieren, dann Anzeige erstatten, dann Ersatz von der Bank verlangen: Den Beweis, dass du selbst gezahlt hast, schuldet die Bank | …orgehst, wenn die Karte verloren, eingezogen oder missbräuchlich belastet wurde, steht in … |
| Nr. 7 | Abschnitt 21, Nr. 2 | Speicher 12308 und die Konsularschutz-Nummer der Auslandsvertretung vor Ort im Handy, schreib sie zusätzlich auf einen Zettel fürs Portemonnaie, und such sie nicht erst, wenn etwas passiert | … Der Weg zur Botschaft führt über die beiden Konsularschutz-Nummern, die du in … |

## 22-entspannen

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 4 | Abschnitt 8, Nr. 29 | Schlepp bei der Ein- und Ausreise für Fremde nichts mit und nimm keine Pakete unbekannter Herkunft an | … Wie es ist, für andere etwas mitzunehmen, steht in … |
| Nr. 4 | Abschnitt 22, Nr. 3 | Wenn dir im Lokal jemand etwas reicht, geh sofort. Jemanden gewähren lassen oder etwas bereitstellen ist kein Freundschaftsdienst | …emand unbekanntes Pulver, Tabletten oder eine E-Zigaretten-Kartusche herausholt, steht in … |
| Nr. 5 | Abschnitt 9, Nr. 16 | Verleih deinen Ausweis nicht, benutze keinen fremden Ausweis und eröffne mit fremden Papieren keine Konten und kaufe keine Tickets | … Das ist dieselbe Sache wie in … |
| Nr. 7 | Abschnitt 3, Nr. 19 | Wenn du niedergeschlagen bist, tu zuerst die Dinge mit dem besten Kosten-Nutzen-Verhältnis: in Bewegung kommen, Sonnenlicht tanken, rechtzeitig schlafen, mit jemandem reden, 12356 anrufen | … Das ist die Ausführung von … |
| Nr. 10 | Abschnitt 3, Nr. 16 | Reduziere Beziehungen, die dir Kraft rauben, und lerne, Bitten abzulehnen, die du nicht annehmen willst | … Das steht nicht im Widerspruch zu … |

## 23-welche-faehigkeiten-sich-lohnen

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Abschnittskopf | Abschnitt 23, Nr. 1 | Unter 16 Jahren gibt es die Option „arbeiten gehen" nicht: Eine Einheit, die dich einstellt, zahlt 5000 元 Strafe im Monat, und wer dich nimmt, lässt dich schwarz arbeiten | … … |
| Abschnittskopf | Abschnitt 23, Nr. 2 | Nimm „bringt Lernen etwas" in die Sterblichkeitsrechnung auf: Jedes zusätzliche Bildungsjahr senkt das Sterberisiko Erwachsener um etwa 1,9 % | … … |
| Abschnittskopf | Abschnitt 23, Nr. 3 | Bevor du urteilst, ob „Abschlüsse an Wert verlieren", sieh dir die Bildungsstruktur des Landes an: Nur 15467 von 100.000 Menschen haben einen Hochschulabschluss | … … |
| Abschnittskopf | Abschnitt 23, Nr. 4 | Wenn du es dir „nicht leisten kannst" — rechne zuerst nach der Politik: An berufsbildenden Schulen ist das Schulgeld meist erlassen, Beihilfe 2300 元, Studienkredit höchstens 20.000 元 pro Jahr | … … |
| Abschnittskopf | Abschnitt 23, Nr. 5 | Die Aufnahmeprüfung zur allgemeinbildenden Oberschule nicht zu schaffen heißt nicht, dass der Weg endet: An berufsbildenden Schulen gibt es durchgängige Aufnahme und eigene Prüfungen, und bei der Einstellung für Facharbeit darf die Abschlussanforderung gesenkt werden | … … |
| Abschnittskopf | Abschnitt 23, Nr. 6 | Mach aus „Lernen oder arbeiten" eine Rechenaufgabe: die drei Jahre Lohn, die du früher verdienst, gegen den Unterschied im Jahreseinkommen über die kommenden Jahrzehnte | … … |
| Abschnittskopf | Abschnitt 23, Nr. 14 | Frag dich nach dem Lernen erst bei geschlossenem Buch selbst ab, statt nach hinten zurückzulesen | … … |
| Abschnittskopf | Abschnitt 23, Nr. 15 | Verteile dieselbe Zeit über mehrere Tage, lern nicht alles auf einmal | … … |
| Abschnittskopf | Abschnitt 23, Nr. 16 | Mach Markieren, wiederholtes Lesen und Zusammenfassen nicht zur Hauptmethode | … … |
| Abschnittskopf | Abschnitt 23, Nr. 17 | Üb mehrere Aufgabentypen gemischt, mach nicht zwanzig Aufgaben desselben Typs hintereinander | … … |
| Abschnittskopf | Abschnitt 23, Nr. 18 | Wähl deine Lernmethode nicht nach „ich bin der visuelle Typ, er der auditive" | … … |
| Abschnittskopf | Abschnitt 23, Nr. 19 | Stell dir beim Auswendiglernen die Fragen so, wie du den Stoff später brauchst, statt ihn einmal wörtlich aufzusagen | … … |
| Abschnittskopf | Abschnitt 23, Nr. 20 | Kläre vor dem Berufstitel, in welcher Reihe und auf welcher Stufe du stehst, dann such den Antragsweg nach Art deiner Einheit | … … |
| Abschnittskopf | Abschnitt 23, Nr. 21 | Berufstitel wie in der Buchhaltung auf unterer und mittlerer Stufe bekommst du über eine landesweite Prüfung — meld dich nach Abschluss und Berufsjahren an | … … |
| Abschnittskopf | Abschnitt 23, Nr. 22 | Such keinen Vermittler für die Begutachtung, kauf keine Aufsätze bei einem Ghostwriter, fälsch keine Unterlagen: Wird es überprüft, wird der Berufstitel widerrufen, und du wirst 3 Jahre in der Vertrauensakte geführt | … … |
| Abschnittskopf | Abschnitt 23, Nr. 23 | Ein Berufstitel bringt nicht automatisch mehr Lohn: Frag zuerst, ob deine Einheit innerhalb eines Stellenschlüssels bewertet und einstellt oder ob eine Bewertung nicht heißt, dass du eingestellt wirst | … … |
| Nr. 1 | Abschnitt 23, Nr. 10 | Bei der Auswahl einer Fähigkeit sieh zuerst auf „braucht es Handarbeit, braucht es ein Urteil vor Ort" — die lässt sich am schwersten automatisieren | …ber eine Stelle, die einen 16-Jährigen ohne Abschluss nimmt, ist genau die Sorte, von der … |
| Nr. 2 | Abschnitt 23, Nr. 4 | Wenn du es dir „nicht leisten kannst" — rechne zuerst nach der Politik: An berufsbildenden Schulen ist das Schulgeld meist erlassen, Beihilfe 2300 元, Studienkredit höchstens 20.000 元 pro Jahr | … den Teil zum Schulgeld siehe … |
| Nr. 3 | Abschnitt 23, Nr. 6 | Mach aus „Lernen oder arbeiten" eine Rechenaufgabe: die drei Jahre Lohn, die du früher verdienst, gegen den Unterschied im Jahreseinkommen über die kommenden Jahrzehnte | … Ob sich Lernen für eine bestimmte Person lohnt, musst du nach der Methode aus … |
| Nr. 5 | Abschnitt 23, Nr. 10 | Bei der Auswahl einer Fähigkeit sieh zuerst auf „braucht es Handarbeit, braucht es ein Urteil vor Ort" — die lässt sich am schwersten automatisieren | …nn du ein Fach an einer berufsbildenden Mittelschule wählst, geh es mit der Dimension aus … |
| Nr. 5 | Abschnitt 23, Nr. 8 | Bevor du Geld für ein Zertifikat ausgibst, prüf, ob es im Verzeichnis der staatlichen Berufsqualifikationen steht oder die ausstellende Stelle auf der Liste der beim Ministerium für Personal und soziale Sicherheit registrierten Bewertungsstellen | … Das Zertifikat, das sie ausstellt, prüf noch nach den drei Schritten aus … |
| Nr. 6 | Abschnitt 23, Nr. 7 | Merke dir zuerst die Bezugslinie: Ein zusätzliches Bildungsjahr bringt weltweit im Schnitt eine private Rendite (der Teil, der in deinem eigenen Einkommen landet) von etwa 9 % pro Jahr | … Den weltweiten Durchschnitt siehe … |
| Nr. 6 | Abschnitt 23, Nr. 4 | Wenn du es dir „nicht leisten kannst" — rechne zuerst nach der Politik: An berufsbildenden Schulen ist das Schulgeld meist erlassen, Beihilfe 2300 元, Studienkredit höchstens 20.000 元 pro Jahr | … Zieh vor dem Rechnen die Schulgeld-Erlasse und Beihilfen aus … |
| Nr. 6 | Abschnitt 23, Nr. 2 | Nimm „bringt Lernen etwas" in die Sterblichkeitsrechnung auf: Jedes zusätzliche Bildungsjahr senkt das Sterberisiko Erwachsener um etwa 1,9 % | …hnitt (Schulgeld und Beihilfe an berufsbildenden Schulen) ab, dazu kommt die Rechnung aus … |
| Nr. 6 | Abschnitt 23, Nr. 7 | Merke dir zuerst die Bezugslinie: Ein zusätzliches Bildungsjahr bringt weltweit im Schnitt eine private Rendite (der Teil, der in deinem eigenen Einkommen landet) von etwa 9 % pro Jahr | … Der weltweite Durchschnitt von 9 % aus … |
| Nr. 6 | Abschnitt 23, Nr. 5 | Die Aufnahmeprüfung zur allgemeinbildenden Oberschule nicht zu schaffen heißt nicht, dass der Weg endet: An berufsbildenden Schulen gibt es durchgängige Aufnahme und eigene Prüfungen, und bei der Einstellung für Facharbeit darf die Abschlussanforderung gesenkt werden | … die gesetzliche Abschlusshürde, siehe … |
| Nr. 6 | Abschnitt 23, Nr. 10 | Bei der Auswahl einer Fähigkeit sieh zuerst auf „braucht es Handarbeit, braucht es ein Urteil vor Ort" — die lässt sich am schwersten automatisieren | … die Widerstandsfähigkeit gegen Ersetzung, siehe … |
| Nr. 14 | Abschnitt 23, Nr. 15 | Verteile dieselbe Zeit über mehrere Tage, lern nicht alles auf einmal | … Die Selbstabfrage und … |
| Nr. 15 | Abschnitt 23, Nr. 14 | Frag dich nach dem Lernen erst bei geschlossenem Buch selbst ab, statt nach hinten zurückzulesen | … Am besten mit … |
| Nr. 16 | Abschnitt 23, Nr. 14 | Frag dich nach dem Lernen erst bei geschlossenem Buch selbst ab, statt nach hinten zurückzulesen | … Ersatzhandlungen siehe … |
| Nr. 16 | Abschnitt 23, Nr. 15 | Verteile dieselbe Zeit über mehrere Tage, lern nicht alles auf einmal | …zhandlungen siehe Nr. 14 in diesem Abschnitt (bei geschlossenem Buch selbst abfragen) und … |
| Nr. 17 | Abschnitt 23, Nr. 16 | Mach Markieren, wiederholtes Lesen und Zusammenfassen nicht zur Hauptmethode | … Die in … |
| Nr. 18 | Abschnitt 23, Nr. 9 | Weiterbildung läuft zuerst über die staatlichen Zuschüsse, meld dich nicht gleich auf eigene Kosten für einen kommerziellen Kurs an | … Die Kriterien für die Kursauswahl stehen in … |
| Nr. 18 | Abschnitt 23, Nr. 13 | Nimm bei gleichem Geld und gleicher Zeit zuerst ein kurzes Projekt, das dich direkt in eine Stelle bringt | …en in Nr. 9 in diesem Abschnitt (Weiterbildung zuerst über die staatlichen Zuschüsse) und … |
| Nr. 19 | Abschnitt 23, Nr. 16 | Mach Markieren, wiederholtes Lesen und Zusammenfassen nicht zur Hauptmethode | … die Bewertung selbst sieh in … |
| Nr. 19 | Abschnitt 23, Nr. 14 | Frag dich nach dem Lernen erst bei geschlossenem Buch selbst ab, statt nach hinten zurückzulesen | … bei geschlossenem Buch aktiv abrufen, im Einzelnen siehe … |
| Nr. 19 | Abschnitt 23, Nr. 15 | Verteile dieselbe Zeit über mehrere Tage, lern nicht alles auf einmal | …Abschnitt (bei geschlossenem Buch selbst abfragen), und über mehrere Tage verteilt, siehe … |

## 24-arztbesuche

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 7 | Abschnitt 24, Nr. 6 | Bewahr nach jedem Arztbesuch Krankenakte, Untersuchungsberichte und Bilddaten selbst in einer Kopie auf | … Kopieren solltest du im Alltag machen, siehe … |
| Nr. 9 | Abschnitt 7, Nr. 10 | Bei schwerer Krankheit zuerst Krankenversicherung, Zusatzversicherung für schwere Krankheiten, medizinische Härtefallhilfe und die Registrierung für Behandlung außerhalb des Wohnorts — keine Online-Kredite anfassen | … selbst zahlen musst, immer noch zu hoch, geh über die medizinische Härtefallhilfe, siehe … |
| Nr. 10 | Abschnitt 24, Nr. 11 | Bleiben nach der Behandlung tatsächlich Funktionsstörungen zurück, beantrage beim Behindertenverband auf Kreisebene am Ort der Haushaltsregistrierung den Schwerbehindertenausweis | … Behinderung nutzen, musst du zusätzlich einen Schwerbehindertenausweis beantragen (siehe … |
| Nr. 10 | Abschnitt 24, Nr. 6 | Bewahr nach jedem Arztbesuch Krankenakte, Untersuchungsberichte und Bilddaten selbst in einer Kopie auf | …Begutachtung Krankenakte, Operationsberichte und Kontrollbilder vollständig bereit (siehe … |
| Nr. 11 | Abschnitt 7, Nr. 8 | Mit Schwerbehindertenausweis die beiden Zuschüsse für Menschen mit Behinderung beantragen | …ss, wer die Stufen 1 oder 2 hat und dauerhaft Pflege braucht, einen Pflegezuschuss, siehe … |
| Nr. 11 | Abschnitt 24, Nr. 10 | Die Feststellung des Behinderungsgrads erst nach Abschluss der Behandlung machen lassen, zu früh wird der Grad zu niedrig bewertet | …nem Arbeitsunfall sind drei verschiedene Dinge und ersetzen sich nicht gegenseitig (siehe … |
| Nr. 12 | Abschnitt 8, Nr. 40 | Steck Ermittelnden und Vollstreckenden kein Geld und keine Karten zu: Bestechung wird auch für den Geber bestraft, bei Bestechung von Aufsichts-, Vollstreckungs- und Justizpersonal sogar strenger | … beides ist nicht dieselbe Größenordnung, Letzteres steht in … |
| Nr. 12 | Abschnitt 24, Nr. 7 | Bei Zweifeln an der Behandlung noch vor Ort die Versiegelung der Krankenakte verlangen, beide Seiten anwesend, Liste aufstellen, jeder bekommt ein Exemplar | …l an der Behandlung selbst, verlange noch vor Ort die Versiegelung der Krankenakte (siehe … |
| Nr. 12 | Abschnitt 24, Nr. 6 | Bewahr nach jedem Arztbesuch Krankenakte, Untersuchungsberichte und Bilddaten selbst in einer Kopie auf | …m Abschnitt, die Versiegelung der Krankenakte) und bewahre Krankenakte und Bilddaten auf (… |

## 25-nach-dem-tod

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 1 | Abschnitt 25, Nr. 2 | Die Sterbeurkunde ist der Schlüssel zu allem Weiteren: Wer behandelt, stellt sie aus; bei natürlichem Tod zu Hause das Gesundheitszentrum des Wohnviertels; Ausstellung binnen eines Tages | … Wer behandelt, stellt die Sterbeurkunde aus, siehe … |
| Nr. 3 | Abschnitt 25, Nr. 6 | Bestattungsleistungen zerfallen in Grundleistungen und Nicht-Grundleistungen: Für die Grundleistungen gibt es eine Liste, die Gebühren werden gesetzlich festgelegt | … Die Überführung selbst zählt zu den Grundleistungen und hat einen festen Preis, siehe … |
| Nr. 5 | Abschnitt 25, Nr. 9 | Das Guthaben an den verschiedenen Stellen einzeln abholen: Wohnungsfonds, Sozialversicherung, Leistungen bei Arbeitsunfall | … Jenes Geld steht in … |

## 26-website-oder-plattform

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 4 | Abschnitt 26, Nr. 5 | Lässt du Nutzer auf der Plattform verkaufen, musst du prüfen und registrieren, Daten melden und drei Jahre aufbewahren | … keine der Pflichten aus … |
| Nr. 4 | Abschnitt 26, Nr. 6 | Um vom Nutzer veröffentlichte Inhalte musst du dich kümmern: Prüfmechanismus, Meldeweg, bei Fund eines Verstoßes sofort stoppen und melden | … keine der Pflichten aus … |
| Nr. 4 | Abschnitt 26, Nr. 7 | Bietest du Informationsveröffentlichung oder Sofortnachrichten an, musst du die echten Identitätsangaben der Nutzer verlangen | … keine der Pflichten aus … |
| Nr. 4 | Abschnitt 26, Nr. 8 | Unter 16 Jahren keinen Livestreaming-Account; Geschenke werden nach Alter gestaffelt behandelt | … keine der Pflichten aus … |
| Nr. 4 | Abschnitt 26, Nr. 9 | Auf eine Verletzungsanzeige musst du zeitnah reagieren; kommt nach Weiterleitung der Gegendarstellung 15 Tage nichts, wird wiederhergestellt | … keine der Pflichten aus … |
| Nr. 4 | Abschnitt 26, Nr. 10 | Nutzerdaten nicht einfach ins Ausland geben; die Datenausfuhr hat gesetzliche Bedingungen und Personenschwellen | … keine der Pflichten aus … |
| Nr. 11 | Abschnitt 11, Nr. 16 | Vor dem Start von Website oder App die ICP-Registrierung machen, nach der Cybersicherheitseinstufung Logs über mindestens 6 Monate aufbewahren | …, Logs 6 Monate aufzubewahren, und die Pflichten der Cybersicherheitseinstufung stehen in … |

## 27-schwangerschaft-und-geburt

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 3 | Abschnitt 20, Nr. 2 | Lass innerhalb von 24 Stunden nach der Geburt die erste Hepatitis-B-Impfung geben | …rt gleichzeitig die Hepatitis-B-Impfung und das Hepatitis-B-Immunglobulin bekommen (siehe … |
| Nr. 11 | Abschnitt 18, Nr. 2 | Mutterschaftsurlaub 98 Tage, das Mutterschaftsgeld zahlt der Fonds der Mutterschutzversicherung nach dem durchschnittlichen Monatslohn der Beschäftigten des Betriebs im Vorjahr | … Zahl der Tage des Mutterschaftsurlaubs und das Mutterschaftsgeld berechnet werden, siehe … |
| Nr. 16 | Abschnitt 27, Nr. 7 | Lern diese Liste „sofort ins Krankenhaus" auswendig, sie gilt in der Schwangerschaft und im ganzen Jahr nach der Geburt | … In der Liste „sofort ins Krankenhaus" aus … |
| Nr. 16 | Abschnitt 9, Nr. 20 | Kannst du ein geborenes Kind nicht großziehen, gibt es nur einen legalen Weg: die Registrierung beim Amt für Zivilangelegenheiten. Für Geld weggeben kann als Menschenhandel bestraft werden, Liegenlassen als Aussetzung | … Ist das Kind geboren und kannst du es wirklich nicht großziehen, steht der legale Weg in … |

## 28-nicht-fuers-aussehen-ruinieren

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 1 | Abschnitt 2, Nr. 33 | Den BMI zwischen 20 und 25 halten und bei Übergewicht abnehmen | … Den Zusammenhang zwischen BMI und Sterblichkeit siehe … |
| Nr. 3 | Abschnitt 28, Nr. 2 | Prüf vor Spritze, Fadenlifting und Operation zwei Dinge: ob die Zulassung der Einrichtung „Schönheitsmedizin" nennt und ob der Handelnde der behandelnde Arzt ist | … Prüf das vorher nach … |
| Nr. 5 | Abschnitt 28, Nr. 4 | Kauf keine Abnehmpräparate, die schnelles Abnehmen versprechen — keine Schlankheitspillen, Diätkaffee, Schlankheitsbonbons und Enzympflaumen | … Die Beurteilung läuft wie bei den Abnehmprodukten (… |
| Nr. 6 | Abschnitt 28, Nr. 5 | Nimm keine anabolen Steroide („Muskelspritzen", „Tabletten") für den Muskelaufbau | … Für die Steroide und die Geschlechtshormone aus … |
| Nr. 6 | Abschnitt 28, Nr. 7 | Geschlechtshormone nur auf ärztliches Rezept und mit regelmäßigen Kontrollen — nichts online kaufen, die Dosis nicht selbst erhöhen | … Für die Steroide und die Geschlechtshormone aus … |

## 29-nach-einem-schweren-schlag

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Abschnittskopf | Abschnitt 29, Nr. 9 | Gib nicht gleich Geld für Trauerbegleitung aus: Sieh zuerst, ob deine Trauer wirklich feststeckt (die Symptome aus Nr. 8 in diesem Abschnitt) | … nicht gleich Geld für Trauerbegleitung ausgeben (… |
| Abschnittskopf | Abschnitt 29, Nr. 11 | Zum Reden mit jemandem ruf die 12356 an, Minderjährige und Jugendliche rufen die 12355, zum Arzt gehst du in die psychiatrische Ambulanz | …rbegleitung ausgeben (Nr. 9), die 12356 anrufen und in die psychiatrische Ambulanz gehen (… |
| Abschnittskopf | Abschnitt 29, Nr. 12 | Schiebe in den ersten drei Monaten nach einem Schicksalsschlag jede unumkehrbare große Entscheidung auf | …ie psychiatrische Ambulanz gehen (Nr. 11), unumkehrbare große Entscheidungen aufschieben (… |
| Abschnittskopf | Abschnitt 29, Nr. 13 | Mach den Tod nicht zum Weg, Schulden zu tilgen: Die Lebensversicherung zahlt in den ersten zwei Jahren nicht, ein Arbeitsunfall wird nicht anerkannt, und die Schulden gehen trotzdem zuerst vom Nachlass ab | …numkehrbare große Entscheidungen aufschieben (Nr. 12), mit dem Tod keine Schulden tilgen (… |
| Abschnittskopf | Abschnitt 29, Nr. 6 | Hast du keine Angehörigen und keine Freunde, ersetze „den Menschen, der auf dich aufpasst" durch drei Dinge: einen Nachbarn, der in deine Wohnung kommt, die Besuchsliste der Gemeinde und eine Notfallnummer im Handy | … Wenn du keine Angehörigen und keine Freunde hast, steht unter … |
| Abschnittskopf | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die 12356 anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Wenn ein Suizidgedanke auftaucht, ruf zuerst die 12356 an, siehe … |
| Abschnittskopf | Abschnitt 1, Nr. 32 | Wenn ein Suizidgedanke aufkommt, sag es zuerst einer Person in deiner Nähe und gib diese paar Minuten aus der Hand | … Wie lange ein Suizidgedanke anhält, siehe … |
| Abschnittskopf | Abschnitt 1, Nr. 33 | „Gerettet" ist keine Absicherung: nach einer Vergiftung mit Pflanzenschutzmitteln oder Kohlenmonoxid rettet die Notaufnahme das Leben, nicht Lunge und Gehirn | … Was nach einer Rettung zurückbleibt, siehe … |
| Nr. 1 | Abschnitt 29, Nr. 6 | Hast du keine Angehörigen und keine Freunde, ersetze „den Menschen, der auf dich aufpasst" durch drei Dinge: einen Nachbarn, der in deine Wohnung kommt, die Besuchsliste der Gemeinde und eine Notfallnummer im Handy | …edikamentenbox nicht abgeben kann und in diesen Tagen allein in der Wohnung bleibt, siehe … |
| Nr. 2 | Abschnitt 29, Nr. 6 | Hast du keine Angehörigen und keine Freunde, ersetze „den Menschen, der auf dich aufpasst" durch drei Dinge: einen Nachbarn, der in deine Wohnung kommt, die Besuchsliste der Gemeinde und eine Notfallnummer im Handy | … Wer niemanden zum Mitgehen findet, siehe … |
| Nr. 4 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die 12356 anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Was du tust, wenn du selbst Suizidgedanken hast, steht in … |
| Nr. 5 | Abschnitt 29, Nr. 6 | Hast du keine Angehörigen und keine Freunde, ersetze „den Menschen, der auf dich aufpasst" durch drei Dinge: einen Nachbarn, der in deine Wohnung kommt, die Besuchsliste der Gemeinde und eine Notfallnummer im Handy | …en Menschen findet, also allein lebt, kein Kind hat und auch keine Kinder mehr hat, siehe … |
| Nr. 6 | Abschnitt 13, Nr. 1 | Wenn jemand hinfällt und nicht atmet: sofort kräftig auf den Brustkorb drücken, andere die 120 anrufen lassen und einen AED suchen | … Warum „jemand in der Wohnung" wertvoll ist, siehe … |
| Nr. 6 | Abschnitt 22, Nr. 10 | Behandle „sich regelmäßig mit Menschen treffen" als Ausgabe für die Gesundheit. Such Menschen nicht erst, wenn dir schlecht ist | … Das Sterblichkeits-Odds-Ratio beim Alleinleben beträgt 1,32, etwa 30 % höher, siehe … |
| Nr. 6 | Abschnitt 29, Nr. 11 | Zum Reden mit jemandem ruf die 12356 an, Minderjährige und Jugendliche rufen die 12355, zum Arzt gehst du in die psychiatrische Ambulanz | …it, Schulabbruch und andere Risiken einer psychischen Krise rechtzeitig entdecken" (siehe … |
| Nr. 6 | Abschnitt 29, Nr. 11 | Zum Reden mit jemandem ruf die 12356 an, Minderjährige und Jugendliche rufen die 12355, zum Arzt gehst du in die psychiatrische Ambulanz | … Die Hotline darfst du mehrfach anrufen, nicht nur einmal (siehe … |
| Nr. 9 | Abschnitt 29, Nr. 8 | Steht die Trauer nach einem halben Jahr noch still und läuft das Leben nicht weiter, mach einen Termin in der Psychiatrie oder der klinischen Psychologie | … Prüf also zuerst … |
| Nr. 9 | Abschnitt 29, Nr. 4 | Ist ein Angehöriger durch Suizid, Unfall oder Gewalttat gestorben, verlass dich nicht aufs Aushalten, such von dir aus professionelle Hilfe | … Menschen mit hohem Risiko wie in … |
| Nr. 9 | Abschnitt 29, Nr. 8 | Steht die Trauer nach einem halben Jahr noch still und läuft das Leben nicht weiter, mach einen Termin in der Psychiatrie oder der klinischen Psychologie | … (durch Suizid oder Gewalttat ein Angehöriger) und Menschen, die schon feststecken wie in … |
| Nr. 11 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die 12356 anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Wann die 12356 geschaltet wurde und wie lange sie täglich besetzt ist, steht in … |
| Nr. 12 | Abschnitt 29, Nr. 11 | Zum Reden mit jemandem ruf die 12356 an, Minderjährige und Jugendliche rufen die 12355, zum Arzt gehst du in die psychiatrische Ambulanz | …st du niemanden ohne Interesse an der Sache, ruf die 12356 an und erzähl es einmal (siehe … |
| Nr. 13 | Abschnitt 29, Nr. 4 | Ist ein Angehöriger durch Suizid, Unfall oder Gewalttat gestorben, verlass dich nicht aufs Aushalten, such von dir aus professionelle Hilfe | … Sie trägt zusätzlich die gesundheitliche Last, von der … |
| Nr. 13 | Abschnitt 29, Nr. 3 | Nach der Arbeitslosigkeit festige zuerst Tagesablauf, Krankenversicherung und den Rhythmus der Stellensuche; häng nicht den ganzen Tag zu Hause herum | … Art. 16 … |
| Nr. 13 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die 12356 anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Was du tust, wenn der Gedanke aufkommt, steht in … |
| Nr. 13 | Abschnitt 1, Nr. 32 | Wenn ein Suizidgedanke aufkommt, sag es zuerst einer Person in deiner Nähe und gib diese paar Minuten aus der Hand | … Was du tust, wenn der Gedanke aufkommt, steht in … |
| Nr. 13 | Abschnitt 1, Nr. 33 | „Gerettet" ist keine Absicherung: nach einer Vergiftung mit Pflanzenschutzmitteln oder Kohlenmonoxid rettet die Notaufnahme das Leben, nicht Lunge und Gehirn | … Was nach einer Rettung zurückbleibt, steht in … |
| Nr. 13 | Abschnitt 19, Nr. 16 | Bei Tod durch Arbeitsunfall die drei Beträge auseinanderhalten: Sterbegeld, Hinterbliebenenrente für unterhaltsberechtigte Angehörige, einmalige Entschädigung bei Tod durch Arbeitsunfall | … Die Standards für die drei Beträge bei Tod durch Arbeitsunfall stehen in … |
| Nr. 13 | Abschnitt 25, Nr. 9 | Das Guthaben an den verschiedenen Stellen einzeln abholen: Wohnungsfonds, Sozialversicherung, Leistungen bei Arbeitsunfall | … Die Formalitäten für Nachlass und Schulden stehen in … |
| Nr. 13 | Abschnitt 29, Nr. 4 | Ist ein Angehöriger durch Suizid, Unfall oder Gewalttat gestorben, verlass dich nicht aufs Aushalten, such von dir aus professionelle Hilfe | … Die gesundheitliche Last der Familie steht in … |

## 30-schulkinder

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Abschnittskopf | Abschnitt 30, Nr. 9 | Kauf keine Produkte und Leistungen, die versprechen, „Kurzsichtigkeit zu heilen" oder „die Werte zu senken" | … … |
| Abschnittskopf | Abschnitt 30, Nr. 10 | Für Schlaf, Hausaufgaben, Sport und Ranking gibt es klare Vorgaben, hält die Schule sie nicht ein, kannst du es ansprechen | … … |
| Abschnittskopf | Abschnitt 30, Nr. 11 | Hält dein Kind es nicht mehr aus, kann es eine Studienunterbrechung nehmen, und die Schule muss ihm den Studierendenstatus erhalten, höchstens 1 Jahr | … Nr. 10 (Schlaf, Hausaufgaben, Sport und Ranking) und … |
| Nr. 2 | Abschnitt 30, Nr. 7 | Sieh dir jedes Jahr den Bericht der Schüleruntersuchung selbst an und lass auffällige Werte noch im selben Jahr ärztlich abklären | …tfenster hat und weil sie genau einer der Schwerpunkte der Schüleruntersuchung ist (siehe … |
| Nr. 2 | Abschnitt 30, Nr. 11 | Hält dein Kind es nicht mehr aus, kann es eine Studienunterbrechung nehmen, und die Schule muss ihm den Studierendenstatus erhalten, höchstens 1 Jahr | …ienunterbrechung möglich, höchstens 1 Jahr, der Studierendenstatus bleibt erhalten, siehe … |
| Nr. 5 | Abschnitt 30, Nr. 4 | Lass dein Kind täglich 2 Stunden draußen sein, das ist derzeit die einzige Maßnahme gegen Kurzsichtigkeit, die durch einen verlosten Versuch gestützt ist | … Wirklich durch einen verlosten Versuch gestützt ist … |
| Nr. 5 | Abschnitt 30, Nr. 12 | Wird eine Sehschwäche festgestellt, geh zur Augentropfen-Refraktion ins Krankenhaus und danach in den vom Arzt genannten Abständen zur Kontrolle | … wie das geht, siehe … |
| Nr. 6 | Abschnitt 30, Nr. 4 | Lass dein Kind täglich 2 Stunden draußen sein, das ist derzeit die einzige Maßnahme gegen Kurzsichtigkeit, die durch einen verlosten Versuch gestützt ist | … was zu tun ist, steht in … |
| Nr. 6 | Abschnitt 30, Nr. 5 | Von 0 bis 3 Jahren keine Bildschirme, von 3 bis 6 möglichst keine, für Schüler höchstens 1 Stunde am Tag ohne Lernzweck | … was zu tun ist, steht in … |
| Nr. 6 | Abschnitt 30, Nr. 12 | Wird eine Sehschwäche festgestellt, geh zur Augentropfen-Refraktion ins Krankenhaus und danach in den vom Arzt genannten Abständen zur Kontrolle | … Wie du nach der Diagnose zur Kontrolle gehst, siehe … |
| Nr. 6 | Abschnitt 30, Nr. 9 | Kauf keine Produkte und Leistungen, die versprechen, „Kurzsichtigkeit zu heilen" oder „die Werte zu senken" | … Kauf keine Produkte, die eine Heilung versprechen, siehe … |
| Nr. 7 | Abschnitt 30, Nr. 12 | Wird eine Sehschwäche festgestellt, geh zur Augentropfen-Refraktion ins Krankenhaus und danach in den vom Arzt genannten Abständen zur Kontrolle | … Bei schlechtem Sehen gehst du in die Augenheilkunde zur Augentropfen-Refraktion (… |
| Nr. 7 | Abschnitt 30, Nr. 2 | Schieb eine nötige Behandlung nicht auf, um „erst die Prüfung abzuwarten": Manche Fenster richten sich nach dem Knochenalter, nicht nach dem Prüfungskalender | …fälligen Krümmung der Wirbelsäule gehst du zur Orthopädie oder zur Wirbelsäulenchirurgie (… |
| Nr. 8 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die 12356 anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Wie du bei Suizidgedanken vorgehst, siehe … |
| Nr. 9 | Abschnitt 30, Nr. 4 | Lass dein Kind täglich 2 Stunden draußen sein, das ist derzeit die einzige Maßnahme gegen Kurzsichtigkeit, die durch einen verlosten Versuch gestützt ist | … Die zwei Dinge mit echten Belegen stehen in … |
| Nr. 9 | Abschnitt 30, Nr. 12 | Wird eine Sehschwäche festgestellt, geh zur Augentropfen-Refraktion ins Krankenhaus und danach in den vom Arzt genannten Abständen zur Kontrolle | … Die zwei Dinge mit echten Belegen stehen in Nr. 4 (täglich 2 Stunden draußen) und … |
| Nr. 12 | Abschnitt 30, Nr. 7 | Sieh dir jedes Jahr den Bericht der Schüleruntersuchung selbst an und lass auffällige Werte noch im selben Jahr ärztlich abklären | …ebnis und gehört für eine vollständige augenärztliche Untersuchung ins Krankenhaus, siehe … |
| Nr. 13 | Abschnitt 30, Nr. 7 | Sieh dir jedes Jahr den Bericht der Schüleruntersuchung selbst an und lass auffällige Werte noch im selben Jahr ärztlich abklären | … Karies ist auch ein Schwerpunkt der Beratung bei der Schüleruntersuchung, siehe … |

## 31-wege-nach-achtzehn

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Nr. 1 | Abschnitt 31, Nr. 11 | Zahl ohne Arbeitgeber als flexibel Beschäftigter Rente und Krankenversicherung am Arbeitsort selbst ein, die Beschränkung durch den Haushaltsstatus ist gefallen | …bei flexibler Beschäftigung und die Absicherung bei Arbeitsunfällen auf Plattformen siehe … |
| Nr. 1 | Abschnitt 31, Nr. 12 | Verlass dich beim Ausliefern von Essen, Fahren über die App und städtischen Gütertransport auf die Plattform: Sie zahlt pro Auftrag die Absicherung bei Arbeitsunfällen, du selbst zahlst nichts | …bei flexibler Beschäftigung und die Absicherung bei Arbeitsunfällen auf Plattformen siehe … |
| Nr. 1 | Abschnitt 23, Nr. 5 | Die Aufnahmeprüfung zur allgemeinbildenden Oberschule nicht zu schaffen heißt nicht, dass der Weg endet: An berufsbildenden Schulen gibt es durchgängige Aufnahme und eigene Prüfungen, und bei der Einstellung für Facharbeit darf die Abschlussanforderung gesenkt werden | … berufsbildenden Schulen, technischen Schulen und durchgängiger Berufsausbildung steht in … |
| Nr. 1 | Abschnitt 23, Nr. 4 | Wenn du es dir „nicht leisten kannst" — rechne zuerst nach der Politik: An berufsbildenden Schulen ist das Schulgeld meist erlassen, Beihilfe 2300 元, Studienkredit höchstens 20.000 元 pro Jahr | … Förderung bei knappem Geld steht in … |
| Nr. 1 | Abschnitt 31, Nr. 16 | Sieh dir beim Start ohne Arbeitgeber zuerst den Förderkredit für Gründungen an: höchstens 300.000 元 für Einzelne, der Staat trägt die Hälfte der Zinsen | … den Start ein Darlehen bekommst, bei dem der Staat einen Teil der Zinsen trägt, steht in … |
| Nr. 1 | Abschnitt 31, Nr. 13 | Sichere dir am Tag des Studienwunschs zwei Wege mit Planstelle: staatlich finanzierte Lehramtsstudierende und vertraglich gebundene Medizinstudierende, der Preis sind 6 Jahre Bindung | … die Kosten stehen in … |
| Nr. 1 | Abschnitt 31, Nr. 14 | Prüf vor der Arbeit im Ausland zuerst, ob die Firma eine Qualifikation für Auslandsarbeitsvermittlung hat: Sie darf von dir keine Kaution verlangen | … Wie du die Qualifikation erkennst, steht in … |
| Nr. 2 | Abschnitt 31, Nr. 3 | Verweigerst du nach der Einberufung den Wehrdienst, darfst du zwei Jahre nicht ausreisen und nicht zur Schule oder Hochschule zurück, und du kommst nicht in den Staatsdienst oder ein Staatsunternehmen | … siehe … |
| Nr. 3 | Abschnitt 31, Nr. 2 | Lass dich im Jahr, in dem du achtzehn wirst, bis zum 31. Oktober zur Wehrpflichtregistrierung anmelden. Der aktive Wehrdienst eines Wehrdienstleistenden dauert zwei Jahre | … Art. 57 Abs. 1 … |
| Nr. 3 | Abschnitt 31, Nr. 2 | Lass dich im Jahr, in dem du achtzehn wirst, bis zum 31. Oktober zur Wehrpflichtregistrierung anmelden. Der aktive Wehrdienst eines Wehrdienstleistenden dauert zwei Jahre | … „Wer die Handlung nach Abs. 1 … |
| Nr. 3 | Abschnitt 31, Nr. 2 | Lass dich im Jahr, in dem du achtzehn wirst, bis zum 31. Oktober zur Wehrpflichtregistrierung anmelden. Der aktive Wehrdienst eines Wehrdienstleistenden dauert zwei Jahre | … Die Wehrpflichtregistrierung steht in … |
| Nr. 6 | Abschnitt 31, Nr. 14 | Prüf vor der Arbeit im Ausland zuerst, ob die Firma eine Qualifikation für Auslandsarbeitsvermittlung hat: Sie darf von dir keine Kaution verlangen | … Die dritte Rechnung steht in der Bekanntmachung … |
| Nr. 10 | Abschnitt 23, Nr. 8 | Bevor du Geld für ein Zertifikat ausgibst, prüf, ob es im Verzeichnis der staatlichen Berufsqualifikationen steht oder die ausstellende Stelle auf der Liste der beim Ministerium für Personal und soziale Sicherheit registrierten Bewertungsstellen | … Gekaufte „Schnellabschlüsse" und gefälschte Zertifikate stehen in … |
| Nr. 11 | Abschnitt 7, Nr. 18 | Keine Panik bei einer Beitragslücke in der Sozialversicherung: die Rente zählt kumulativ, die Krankenversicherung wird nach Regeln nachgezahlt | …in der Sozialversicherung nachzahlst und wie die Jahre zusammengerechnet werden, steht in … |
| Nr. 11 | Abschnitt 31, Nr. 27 | **zeigt auf einen nicht vorhandenen Eintrag** | … Das steht in Guobanfa … |
| Nr. 12 | Abschnitt 31, Nr. 56 | **zeigt auf einen nicht vorhandenen Eintrag** | … Das Aktenzeichen dieses Dokuments ist Renshebufa … |
| Nr. 12 | Abschnitt 31, Nr. 11 | Zahl ohne Arbeitgeber als flexibel Beschäftigter Rente und Krankenversicherung am Arbeitsort selbst ein, die Beschränkung durch den Haushaltsstatus ist gefallen | … auch der Eintrag zur flexiblen Beschäftigung zitiert es, siehe … |
| Nr. 12 | Abschnitt 31, Nr. 11 | Zahl ohne Arbeitgeber als flexibel Beschäftigter Rente und Krankenversicherung am Arbeitsort selbst ein, die Beschränkung durch den Haushaltsstatus ist gefallen | … zum Beitritt bei flexibler Beschäftigung siehe … |
| Nr. 14 | Abschnitt 21, Nr. 5 | Behandle „Auslandsstellen mit hohem Gehalt" immer als Betrug, und wer zum Telekommunikationsbetrug ins Ausland gelockt wurde, darf nach der Rückkehr auch nicht mehr ausreisen | … Betrug mit Lockangeboten im Ausland und Betrugscampus stehen in … |
| Nr. 15 | Abschnitt 31, Nr. 1 | Geh zuerst die Hürden durch: Die Alters- und Abschlussanforderungen der zwölf Wege stehen alle ausdrücklich im Text | …en zu den Maßnahmen zur Verwaltung des persönlichen Devisenverkehrs [个人外汇管理办法实施细则] (Huifa … |
| Nr. 15 | Abschnitt 31, Nr. 14 | Prüf vor der Arbeit im Ausland zuerst, ob die Firma eine Qualifikation für Auslandsarbeitsvermittlung hat: Sie darf von dir keine Kaution verlangen | … siehe … |
| Nr. 16 | Abschnitt 31, Nr. 75 | **zeigt auf einen nicht vorhandenen Eintrag** | …altung des Sonderfonds für die Entwicklung der inklusiven Finanz [普惠金融发展专项资金管理办法] (Caijin … |
| Nr. 16 | Abschnitt 12, Nr. 1 | Nur mit Geld gründen, dessen Verlust du verkraftest: nicht ans Familienvermögen gehen, nichts leihen | … Die Haltung dieses Buchs in … |
| Nr. 16 | Abschnitt 7, Nr. 13 | In der Arbeitslosigkeit Zuschüsse für Berufstraining, Beschäftigungspraktikum und Sozialversicherung abholen, statt selbst für Kurse zu zahlen | …n der Arbeitslosigkeit, Sozialversicherungszuschüsse und Beschäftigungspraktika stehen in … |

## 33-leben-mit-behinderung

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Abschnittskopf | Abschnitt 24, Nr. 11 | Bleiben nach der Behandlung tatsächlich Funktionsstörungen zurück, beantrage beim Behindertenverband auf Kreisebene am Ort der Haushaltsregistrierung den Schwerbehindertenausweis | …sweis bekommst und wie die sieben Kategorien und die Grade 1 bis 4 bewertet werden, siehe … |
| Abschnittskopf | Abschnitt 24, Nr. 10 | Die Feststellung des Behinderungsgrads erst nach Abschluss der Behandlung machen lassen, zu früh wird der Grad zu niedrig bewertet | … Wann die Feststellung des Behinderungsgrads gemacht wird, siehe … |
| Abschnittskopf | Abschnitt 7, Nr. 8 | Mit Schwerbehindertenausweis die beiden Zuschüsse für Menschen mit Behinderung beantragen | … Wie du die beiden Zuschüsse für Menschen mit Behinderung bekommst, siehe … |
| Abschnittskopf | Abschnitt 19, Nr. 15 | Nach der Stabilisierung zur Feststellung der Erwerbsminderung gehen, der Grad der Erwerbsminderung wird direkt in Geld umgerechnet | …Arbeitsunfall läuft und wie der Grad der Erwerbsminderung in Geld umgerechnet wird, siehe … |
| Abschnittskopf | Abschnitt 17, Nr. 7 | Wenn ein alter Mensch in der Familie dauerhaft bettlägerig oder schwer pflegebedürftig ist, beantrage bei der Krankenversicherung am Wohnort die Pflegeversicherung; sie gilt nicht nur für alte Menschen | … Wie du die Pflegeversicherung bei schwerer Pflegebedürftigkeit beantragst, siehe … |
| Nr. 2 | Abschnitt 29, Nr. 11 | Zum Reden mit jemandem ruf die 12356 an, Minderjährige und Jugendliche rufen die 12355, zum Arzt gehst du in die psychiatrische Ambulanz | … Brauchst du jemanden zum Reden, ruf die 12356 an, siehe … |
| Nr. 2 | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die 12356 anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … Horte zu Hause keine Schlafmittel und keine Pflanzenschutzmittel, siehe … |
| Nr. 2 | Abschnitt 29, Nr. 8 | Steht die Trauer nach einem halben Jahr noch still und läuft das Leben nicht weiter, mach einen Termin in der Psychiatrie oder der klinischen Psychologie | …ach einen Termin in der Psychiatrie oder in der psychotherapeutischen Sprechstunde, siehe … |
| Nr. 4 | Abschnitt 16, Nr. 1 | Nimm die Medikamente nach ärztlicher Anordnung vollständig ein und hör nicht auf, wenn du dich besser fühlst | … Die eigenen chronischen Erkrankungen des pflegenden Angehörigen nicht absetzen, siehe … |
| Nr. 5 | Abschnitt 17, Nr. 8 | Ist jemand zu Hause dauerhaft bettlägerig, behandle den Dekubitus als Feind Nummer eins: elektrische Wechseldruckmatratze, regelmäßiges Umlagern, jeden Tag die vorstehenden Knochen ansehen | …us bei dauerhafter Bettlägerigkeit, Wechseldruckmatratze und regelmäßiges Umlagern, siehe … |
| Nr. 5 | Abschnitt 33, Nr. 7 | Frag beim Behindertenverband auf Kreisebene alles auf einmal ab, was du mit dem Schwerbehindertenausweis beantragen kannst | … Wie du den Zuschuss für grundlegende Hilfsmittel beantragst, siehe … |
| Nr. 6 | Abschnitt 6, Nr. 10 | Gib kein großes Geld für Nahrungsergänzungsmittel, Kräuterpasten und Stärkungsmittel aus, um „den Körper in Ordnung zu bringen" | … Diese Werbesprüche sind bei Nahrungsergänzungsmitteln derselbe Weg, siehe … |
| Nr. 6 | Abschnitt 5, Nr. 29 | Verlass dich beim Onlinekauf auf die Regeln der Plattform und das Gesetz, nicht auf die Streamer und die „guten Bewertungen" | … willst dein Geld zurück, geh nach den Regeln für Onlinekauf und Vorauszahlung vor, siehe … |
| Nr. 7 | Abschnitt 7, Nr. 8 | Mit Schwerbehindertenausweis die beiden Zuschüsse für Menschen mit Behinderung beantragen | …en mit Behinderung in Not und das Pflegegeld für Menschen mit schwerer Behinderung, siehe … |
| Nr. 7 | Abschnitt 33, Nr. 8 | Beantrage für ein Kind unter 7 Jahren mit Behinderung oder Autismus beim Behindertenverband auf Kreisebene die Rehabilitationshilfe | … Zweitens die Rehabilitationshilfe für Kinder mit Behinderung, siehe … |
| Nr. 7 | Abschnitt 33, Nr. 9 | Beantrage für Rampen, Handläufe und den Badumbau zu Hause einen Zuschuss bei der Regierung ab Kreisebene | … Viertens der Zuschuss für den barrierefreien Umbau zu Hause, siehe … |
| Nr. 7 | Abschnitt 33, Nr. 10 | Sag bei der Stellensuche von selbst, dass du einen Schwerbehindertenausweis hast; die Einstellung spart der Firma Geld | … Fünftens die Beschäftigung nach Quote und die Arbeitsvermittlung, siehe … |
| Nr. 7 | Abschnitt 33, Nr. 11 | Lass dir als Mensch mit Behinderung die Einkommensteuer ermäßigen; wie viel, frag beim Steueramt deiner Provinz nach | … Sechstens die Ermäßigung der Einkommensteuer, siehe … |
| Nr. 7 | Abschnitt 24, Nr. 11 | Bleiben nach der Behandlung tatsächlich Funktionsstörungen zurück, beantrage beim Behindertenverband auf Kreisebene am Ort der Haushaltsregistrierung den Schwerbehindertenausweis | … Das Verfahren für den Ausweis selbst steht in … |
| Nr. 8 | Abschnitt 33, Nr. 6 | Kauf keine Therapien und Geräte, die „Lähmung, Blindheit oder Taubheit heilen" sollen | … Einrichtungen, die „garantieren, dass es gut wird", behandel wie … |
| Nr. 10 | Abschnitt 7, Nr. 12 | Nach der Arbeitslosmeldung die Anerkennung als Person mit Schwierigkeiten bei der Arbeitssuche anstreben und Sozialversicherungszuschuss oder eine Gemeinwohlstelle bekommen | …erson mit Schwierigkeiten bei der Arbeitssuche und der Sozialversicherungszuschuss, siehe … |
| Nr. 10 | Abschnitt 7, Nr. 13 | In der Arbeitslosigkeit Zuschüsse für Berufstraining, Beschäftigungspraktikum und Sozialversicherung abholen, statt selbst für Kurse zu zahlen | … Zuschüsse für Berufstraining, siehe … |
| Nr. 13 | Abschnitt 33, Nr. 14 | Wird ein Kind mit Behinderung zur Schule angemeldet, darf die Schule nicht ablehnen; wer nicht kommen kann, bekommt Unterricht ins Haus | … Die Stelle, dass eine Schule einen nicht ablehnen darf, steht in … |
| Nr. 14 | Abschnitt 30, Nr. 3 | Wird dein Kind gemobbt, melde es noch am selben Tag der Schule und verlange eine schriftliche Bearbeitung, bei Schlägen, Geldraub oder Gerüchten ruf direkt die Polizei | …n Kind in der Schule schikaniert wird, und welches Verfahren die Schule gehen muss, siehe … |
| Nr. 14 | Abschnitt 33, Nr. 13 | Beantrage für die Hochschulaufnahmeprüfung angemessene Vorkehrungen; bei einer Brailleschrift-Prüfung kommt die halbe Zeit dazu | … Angemessene Vorkehrungen für die Hochschulaufnahmeprüfung, siehe … |
| Nr. 16 | Abschnitt 24, Nr. 1 | Häufige Erkrankungen zuerst in der Gemeindepraxis, über die Basisversorgung mit Überweisung stufenweise nach oben, die Selbstbehaltschwelle beim stationären Aufenthalt zählt weiter | …Klinik der dritten Stufe überweist und wie die Selbstbehaltschwelle gerechnet wird, siehe … |
| Nr. 16 | Abschnitt 33, Nr. 7 | Frag beim Behindertenverband auf Kreisebene alles auf einmal ab, was du mit dem Schwerbehindertenausweis beantragen kannst | … Gemeinderehabilitation und Ausstattung mit Hilfsmitteln siehe … |
| Nr. 17 | Abschnitt 33, Nr. 13 | Beantrage für die Hochschulaufnahmeprüfung angemessene Vorkehrungen; bei einer Brailleschrift-Prüfung kommt die halbe Zeit dazu | …en bei der Hochschulaufnahmeprüfung die Fremdsprachen-Hörprüfung erlassen bekommen, siehe … |
| Nr. 17 | Abschnitt 33, Nr. 15 | Auch ohne rechtes Bein oder ohne beide Beine kannst du den Führerschein machen; die Führerscheinklasse heißt C5 | … Wer hörbehindert ist und Auto fährt, soll ein Hörgerät tragen, siehe … |
| Nr. 18 | Abschnitt 33, Nr. 19 | Bei Erwachsenen werden die Betreuer nach der gesetzlichen Reihenfolge bestimmt; schadet der Betreute einem anderen, haftet der Betreuer | … Wie der Betreuer bestimmt wird, siehe … |
| Nr. 19 | Abschnitt 17, Nr. 1 | Solange der alte Mensch klar im Kopf ist, bestimme schriftlich den künftigen Betreuer | … wie du es genau aufsetzt, siehe … |
| Nr. 20 | Abschnitt 19, Nr. 8 | Sichere vor dem Ausscheiden Lohnabrechnungen, Anwesenheitsnachweise, Arbeitsvertrag, Sozialversicherungsauszug und Chatverläufe | … du schon angestellt, läuft es über das Arbeitsgericht, Beweise sichern und Fristen siehe … |

## 34-hausapotheke

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Abschnittskopf | Abschnitt 13, Nr. 20 | Nach versehentlicher Einnahme von Reinigungsmittel, Pestizid oder Medikament nicht zuerst Erbrechen auslösen, sondern mit der Flasche sofort zum Arzt; in Auge oder Haut gelangt, 15 Minuten mit viel klarem Wasser spülen | …i versehentlicher Einnahme eines Medikaments oder Reinigungsmittels zuerst tust, steht in … |
| Abschnittskopf | Abschnitt 16, Nr. 1 | Nimm die Medikamente nach ärztlicher Anordnung vollständig ein und hör nicht auf, wenn du dich besser fühlst | … siehe … |
| Abschnittskopf | Abschnitt 28, Nr. 6 | Hol dir ein Abnehmmedikament nur mit Rezept im Krankenhaus — kauf nicht im Onlineshop, der ohne Rezept verschickt | …eibungspflichtige Medikamente im Internet bekommst du nur nach Prüfung des Rezepts, siehe … |
| Nr. 2 | Abschnitt 20, Nr. 8 | Erreicht ein Säugling unter 3 Monaten 38 ℃ Fieber, geh direkt ins Krankenhaus und beobachte nicht zu Hause | … Hat ein Kind unter 3 Monaten Fieber, geh direkt ins Krankenhaus, siehe … |
| Nr. 4 | Abschnitt 20, Nr. 6 | Gib keinem Kind unter 1 Jahr Honig | …dass Honig besser wirkte als Placebo, aber Honig gibst du keinem Kind unter 1 Jahr, siehe … |
| Nr. 4 | Abschnitt 34, Nr. 1 | Sieh auf die Inhaltsstoffliste, bevor du zwei Erkältungs- oder Schmerzmittel zusammen nimmst: Paracetamol darf nur in einem davon stecken | … zusammen mit einem Fiebersenker genommen ist das eine Doppelung, siehe … |
| Nr. 5 | Abschnitt 27, Nr. 5 | Nimm bei hohem Präeklampsie-Risiko ab der 12. Schwangerschaftswoche täglich eine Tablette niedrig dosiertes Aspirin | … Niedrig dosiertes Aspirin gegen Präeklampsie, siehe … |

## docs/anhalten-bei-fremdem-notfall

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Wenn einem Fremden auf d | Abschnitt 13, Nr. 2 | Stürzt ein alter Mensch oder liegt jemand am Boden: erst in die Hocke gehen und ihn ansprechen, die 120 rufen, ihn nicht gleich hochziehen; bei Fremden ist Weggehen ebenfalls rechtmäßig, und wer stehen bleibt, fasst nicht an | …Dies ist die Langfassung von … |
| Die möglichen Kosten, na | Abschnitt 19, Nr. 6 | Bei einer rechtswidrigen Kündigung durch die Firma ist die Entschädigung das Doppelte der Ausgleichszahlung | …rechtswidrige Kündigung des Arbeitsvertrags, und die Entschädigung wird mit 2N gerechnet (… |
| Die möglichen Kosten, na | Abschnitt 8, Nr. 16 | Beschimpfe und verleumde niemanden im Netz und verbreite nichts Ungeprüftes; bei einem Shitstorm erst Beweise sichern, dann die Polizei rufen | … Wie du selbst Beweise sicherst und Anzeige erstattest, siehe … |
| Die möglichen Kosten, na | Abschnitt 1, Nr. 25 | Bei Depression oder Suizidgedanken die 12356 anrufen, zu Hause keine Schlafmittel und keine Pflanzenschutzmittel horten | … die psychologische Beratungshotline 12356, siehe … |
| Zwei Fälle, in denen „We | Abschnitt 8, Nr. 1 | Nach einem Verkehrsunfall zuerst anhalten, retten und die Polizei rufen, nicht wegfahren | … darum, wie ein Verkehrsunfall abzuwickeln ist und was bei Fahrerflucht zu tun ist, siehe … |
| Der einfachste Weg, wenn | Abschnitt 13, Nr. 1 | Wenn jemand hinfällt und nicht atmet: sofort kräftig auf den Brustkorb drücken, andere die 120 anrufen lassen und einen AED suchen | … Atmet er nicht, drück kräftig auf seinen Brustkorb, siehe … |
| Der einfachste Weg, wenn | Abschnitt 13, Nr. 39 | Hast du dich bei einer Rettung verletzt und Geld verloren: wende dich zuerst an den Schädiger und die Krankenversicherung, dann an die Anerkennung als zivilcouragierte Hilfe | … Willst du dieses Geld zurückholen, siehe … |

## docs/innere-uhr-und-nachtschicht

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Wie der Körper die Zeit  | Abschnitt 2, Nr. 40 | Je länger du Nachtschicht arbeitest, desto höher das Herz-Kreislauf-Risiko; wechsle früh, wenn du kannst | …Dies ist die Langfassung von … |
| 2. Diese Uhr wird durch  | Abschnitt 3, Nr. 2 | Steh zu einer festen Zeit auf, auch am Wochenende | …Das ist auch der Grund, warum … |
| 9. Was dieser Text nicht | Abschnitt 2, Nr. 40 | Je länger du Nachtschicht arbeitest, desto höher das Herz-Kreislauf-Risiko; wechsle früh, wenn du kannst | …schicht das Herz-Kreislauf-Risiko erhöht und wie sich das nach Jahren berechnet, steht in … |
| 9. Was dieser Text nicht | Abschnitt 2, Nr. 39 | Nach einer durchwachten Nacht in der nächsten Nacht den Schlaf nachholen, nicht bis zum Wochenende aufschieben | …Wie du nach einer durchwachten Nacht den Schlaf nachholst, steht in … |
| 9. Was dieser Text nicht | Abschnitt 2, Nr. 13 | Etwa 7 Stunden pro Nacht schlafen, feste Schlafenszeiten | …Wie lange du nachts schläfst und ob der Tagesablauf regelmäßig ist, steht in … |
| 9. Was dieser Text nicht | Abschnitt 3, Nr. 2 | Steh zu einer festen Zeit auf, auch am Wochenende | …Morgenlicht und festes Aufstehen stehen in … |

## docs/notfallausruestung

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| Notfallausrüstung für di | Abschnitt 1, Nr. 26 | Feuerlöscher, Löschdecke, Rauchschutzmaske und Verbandkasten bereithalten, einmal im Jahr prüfen | …Entspricht … |
| Notfallausrüstung für di | Abschnitt 1, Nr. 3 | Rauchmelder einbauen; wer im Winter drinnen Kohle verbrennt oder mit Gas heizt, dazu einen Kohlenmonoxidmelder | … Wie du Rauchmelder und Kohlenmonoxidmelder auswählst und anbringst, siehe … |
| Notfallausrüstung für di | Abschnitt 1, Nr. 4 | Gasschlauch und Herd nach Ablauf der Frist tauschen, Leitungen nicht selbst umbauen, Haustürwerbung des Gasversorgers direkt ablehnen | … Gasschlauch und Herd siehe … |
| 2. Die drei Brandschutz- | Abschnitt 13, Nr. 24 | Bei einem Brand flach am Boden kriechen, die Tür fühlen, bevor du sie öffnest, eine heiße Tür nicht öffnen, die Treppe statt des Aufzugs nehmen und draußen nicht zurückgehen | …iechen, die Tür fühlen, bevor du sie öffnest, die Treppe statt des Aufzugs nehmen), siehe … |
| 2. Die drei Brandschutz- | Abschnitt 1, Nr. 3 | Rauchmelder einbauen; wer im Winter drinnen Kohle verbrennt oder mit Gas heizt, dazu einen Kohlenmonoxidmelder | … Rauchmelder siehe … |
| 3. Was in den Verbandkas | Abschnitt 13, Nr. 12 | Bei einer starken Blutung zuerst mit der Hand kräftig auf die Wunde drücken; lässt sich eine Blutung an Armen oder Beinen so nicht stillen, ein Tourniquet anlegen und gleichzeitig die 120 rufen | …es nicht anlegen darfst und warum du es „nicht lockern darfst, um Blut abzulassen", siehe … |
| 3. Was in den Verbandkas | Abschnitt 13, Nr. 14 | Nach einer Verbrennung oder Verbrühung sofort 20 Minuten mit kühlem fließendem Wasser spülen, keine Zahnpasta und keine Sojasauce auftragen | …gibt es nur eines zu tun, nämlich 20 Minuten mit kühlem Wasser aus dem Hahn spülen, siehe … |
| 3. Was in den Verbandkas | Abschnitt 13, Nr. 15 | Plötzlich Ausschlag am ganzen Körper, dazu Atemnot oder Schwindel: wie einen anaphylaktischen Schock behandeln, sofort die 120 rufen und es deutlich sagen | …ist ein verschreibungspflichtiges Arzneimittel, das dir ein Arzt verschreiben muss, siehe … |
| 5. Einmal im Jahr prüfen | Abschnitt 1, Nr. 3 | Rauchmelder einbauen; wer im Winter drinnen Kohle verbrennt oder mit Gas heizt, dazu einen Kohlenmonoxidmelder | … Die Batterie jedes Jahr wechseln, siehe … |
| 6. Was du nicht kaufen m | Abschnitt 13, Nr. 1 | Wenn jemand hinfällt und nicht atmet: sofort kräftig auf den Brustkorb drücken, andere die 120 anrufen lassen und einen AED suchen | … lassen und gleichzeitig einen AED aus der nächsten öffentlichen Einrichtung holen, siehe … |
| 6. Was du nicht kaufen m | Abschnitt 5, Nr. 24 | Kauf nichts wegen „durchgestrichener Preise" und im großen Sale auf Vorrat | … Der Teil, den du darüber hinaus hortest, landet am Ende meist abgelaufen im Müll, siehe … |

## docs/welche-lizenzen-fuer-eine-plattform

| Fundstelle | Verweis | Ziel-Eintrag | Umfeld des Verweises |
| --- | --- | --- | --- |
| 3. Serverwahl: wie du un | Abschnitt 26, Nr. 5 | Lässt du Nutzer auf der Plattform verkaufen, musst du prüfen und registrieren, Daten melden und drei Jahre aufbewahren | … Die Plattformpflichten aus … |
| 3. Serverwahl: wie du un | Abschnitt 26, Nr. 6 | Um vom Nutzer veröffentlichte Inhalte musst du dich kümmern: Prüfmechanismus, Meldeweg, bei Fund eines Verstoßes sofort stoppen und melden | … Die Plattformpflichten aus … |
| 3. Serverwahl: wie du un | Abschnitt 26, Nr. 7 | Bietest du Informationsveröffentlichung oder Sofortnachrichten an, musst du die echten Identitätsangaben der Nutzer verlangen | … Die Plattformpflichten aus … |
| 3. Serverwahl: wie du un | Abschnitt 26, Nr. 8 | Unter 16 Jahren keinen Livestreaming-Account; Geschenke werden nach Alter gestaffelt behandelt | … Die Plattformpflichten aus … |
| 3. Serverwahl: wie du un | Abschnitt 26, Nr. 9 | Auf eine Verletzungsanzeige musst du zeitnah reagieren; kommt nach Weiterleitung der Gegendarstellung 15 Tage nichts, wird wiederhergestellt | … Die Plattformpflichten aus … |
| 3. Serverwahl: wie du un | Abschnitt 26, Nr. 10 | Nutzerdaten nicht einfach ins Ausland geben; die Datenausfuhr hat gesetzliche Bedingungen und Personenschwellen | … Die Plattformpflichten aus … |
