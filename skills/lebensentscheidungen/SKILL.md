---
name: lebensentscheidungen
description: Beantwortet konkrete Lebensentscheidungen aus dem Text von „Lebe besser: 630 Empfehlungen nach Kosten und Nutzen" (github.com/Cagliostro/HowToLiveBetterInGermany) — soll ich das tun, lohnt es sich, was wähle ich, was tue ich bei einem Notfall zuerst, welche Leistung steht mir zu, mache ich mich damit strafbar. Erst die passenden Einträge heraussuchen, dann antworten, sortiert nach Kosten (Geld/Zeit/Willenskraft), Höhe des Nutzens und Evidenzstufe A/B/C; bei jedem Eintrag steht, aus welchem Abschnitt und welcher Nummer er stammt. Auslöser: soll ich, lohnt sich, oder lieber nicht, wie wähle ich, entscheide für mich, ist das strafbar, was steht mir zu, was zuerst, Kosten-Nutzen.
---

# Lebensentscheidungen: erst im Buch nachschlagen, dann antworten

## Was dieser Skill tut

Jemand fragt nach einer konkreten Sache im Leben. Zuerst die passenden Einträge aus „Lebe besser" heraussuchen, dann in der Rechenweise des Buchs sortiert antworten.

**Nichts gefunden heißt: nicht antworten.** Jede Zahl, jeder Gesetzesverweis und jede Schlussfolgerung in der Antwort muss auf einen Eintrag im Text zurückführbar sein. Geht das nicht, sag offen, dass das Buch dazu nichts schreibt. Eine Alltagseinschätzung darfst du geben, aber nur mit dem Hinweis, dass sie nicht aus dem Buch stammt. Erfinde keine Zahlen, keine DOI und keine Paragrafennummern aus dem Gedächtnis.

Das Buch teilt das, was zurückkommt, in vier Bezugsgrößen: Lebenszeit, Zeit und Kraft, Geld, persönliche Freiheit. **Die vier werden getrennt gerechnet und nicht ineinander umgerechnet** — „Gesamtsterblichkeit 12 % niedriger" und „500 元 im Jahr gespart" liegen nicht auf demselben Lineal.

## Schritt 0: Prüfen, ob sofort gestoppt werden muss

- **Ein akuter Notfall** (jemand liegt ohne Atmung am Boden, starke Blutung, Feuer, Ertrinken, Stromunfall, Vergiftung, Anzeichen von Schlaganfall oder Herzinfarkt): zuerst die Notrufnummer und die erste Maßnahme vor Ort nennen, siehe Abschnitt 13; nicht mit dem Kosten-Nutzen-Verhältnis anfangen. *(Im chinesischen Original stehen 120 und 119; in Deutschland ist es die 112.)*
- **Suizidgedanken oder „ich kann nicht mehr leben"**: zuerst die Telefonseelsorge nennen (0800 111 0 111 oder 0800 111 0 222, kostenlos, rund um die Uhr), dann nach den Einträgen in Abschnitt 1 und Abschnitt 29 antworten. Keine belehrende Analyse, keine Bewertung der Beweggründe. *(Im Original steht 12356, die nationale psychosoziale Hotline Chinas.)*
- **Ein laufendes Verfahren** (vorgeladen, in Haft, angeklagt): zuerst den passenden Eintrag in Abschnitt 8 nennen und sagen, dass das Buch nur die allgemeine Linie liefert und ein Einzelfall einen Anwalt braucht.
- In allen anderen Fällen die Schritte unten abarbeiten.

## Schritt 1: Den Text beschaffen

**Lokal**: Liegen im aktuellen oder im übergeordneten Verzeichnis `README.md` und `book/01-nicht-frueh-sterben.md`, dann direkt lesen.

**Aus der Ferne**: sonst holen. Das ganze Buch hat 1,3 MB, ein flacher Klon ist am einfachsten, danach funktionieren alle weiteren Befehle unverändert:

```bash
git clone --depth 1 https://github.com/Cagliostro/HowToLiveBetterInGermany.git "${TMPDIR:-/tmp}/hltb"
```

Ohne git die Dateien einzeln holen:

```bash
curl -fsSL --compressed "https://raw.githubusercontent.com/Cagliostro/HowToLiveBetterInGermany/main/book/02-nicht-langsam-sterben.md"
```

Führen beide Wege nicht zum Text, sag ehrlich, dass der Text nicht erreichbar ist. Gib den Inhalt des Buchs nicht aus dem Gedächtnis wieder.

## Schritt 2: Den Abschnitt finden

Wähle zuerst ein bis drei Abschnitte. Dazu die Tabelle „Fragen, die dieses Buch beantwortet" in der `README.md` im Wurzelverzeichnis lesen. Dort steht pro Zeile ein Abschnitt, welche Frage er beantwortet, und der zugehörige Dateiname unter `book/`. Ordne die Frage des Nutzers dort ein. Abschnitte kommen und gehen in dieser Tabelle, eine zweite Liste gibt es hier bewusst nicht.

Die Abschnittsdateien liegen unter `book/`, der Dateiname enthält Abschnittsnummer und Namen; `ls book/` zeigt alle.

Die Langtexte liegen unter `docs/`: lohnt-sich-heiraten, notfallausruestung, welche-lizenzen-fuer-eine-plattform, anhalten-bei-fremdem-notfall.

## Schritt 3: Die Einträge heraussuchen

Die größten Abschnittsdateien haben 110 KB. Lies sie nicht ganz, suche nach Stichwörtern. Gibt es Werkzeuge wie Grep oder Read, nimm sie; nur mit der Shell geht es so:

```bash
grep -rn '^### ' book/ | grep -E 'Stichwort1|Stichwort2'          # erst die Überschriften ansehen
grep -rn -B2 -A8 'Stichwort' book/08-lass-dich-nicht-hereinziehen.md  # im Text mit Kontext suchen
sed -n '/^### 16\. /,/^### 17\. /p' book/08-lass-dich-nicht-hereinziehen.md  # einen ganzen Eintrag über die Nummer holen
```

**Einen herausgesuchten Eintrag immer ganz lesen**, besonders die Zeile „Anmerkung" — Zielgruppe, Streitfälle und Ausnahmen stehen dort. Wer nur die Überschrift liest, verliert die Bedingungen.

Ein Eintrag sieht so aus:

```markdown
### 5. Das Speisesalz zu Hause durch natriumreduziertes Salz ersetzen (Kaliumsalz)
<!-- Kostenlabel: Geld=0 Zeit=wenig Willenskraft=nein Nutzen=mittel Bezug=Sterblichkeit -->
- Kosten: Ein Paket kostet ein paar 元 mehr als normales Salz.
- Klartext: … die Wahrscheinlichkeit zu sterben war um etwa 12 % niedriger …
- Nutzen: Schlaganfall etwa 14 % niedriger, Herz-Kreislauf-Ereignisse etwa 13 % niedriger, Gesamtsterblichkeit etwa 12 % niedriger
- Evidenzstufe: A
- Quellen: Neal B, et al. (2021). NEJM. https://doi.org/10.1056/NEJMoa2105675
- Anmerkung: Streitfall. Wer eine eingeschränkte Nierenfunktion hat oder kaliumsparende Medikamente nimmt, soll das nicht verwenden. …
```

Die HTML-Kommentarzeile ist das Kostenlabel für die Maschine: Geld 0/wenig/viel, Zeit wenig/mittel/viel, Willenskraft nein/etwas/ja, Nutzen hoch/mittel/niedrig, Bezug Sterblichkeit/Geld/Zeit/Freiheit.

## Schritt 4: Sortieren

Sortiere nach der Rechenweise des Buchs, nicht nach Gefühl:

1. Maßgeblich für die Stufenregel ist die `index.html` im Wurzelverzeichnis. Nicht aus dem Gedächtnis schreiben, sondern die beiden Zeilen heraussuchen und danach rechnen:

   ```bash
   grep -n 'COST_W = \|e\.ratio = ' index.html
   ```

   Die erste Zeile enthält die Gewichte der drei Kostenarten; die Kostensumme ist Geld + Zeit + Willenskraft. Die zweite Zeile sagt, wie die Höhe des Nutzens zusammen mit der Kostensumme zu „sehr hoch / hoch / mittel" wird.
2. Wurden die Abschnitte nur einzeln per curl geholt und liegt keine `index.html` vor, nenne keine Kosten-Nutzen-Stufe. Liste stattdessen die Höhe des Nutzens und die drei Kostenlabels unverändert auf, damit der Nutzer selbst abwägen kann.
3. Zuerst nach Kosten-Nutzen-Verhältnis, innerhalb derselben Stufe nach Evidenzstufe A > B > C, danach nach der Passung zur Lage des Nutzers.
4. **Zwischen verschiedenen Bezugsgrößen wird nicht sortiert.** Was Geld zurückbringt, und was Lebenszeit zurückbringt, wird getrennt aufgelistet und je für sich sortiert.
5. „Mittel" heißt nicht, dass man es nicht tun sollte — es heißt nur, dass der Nutzer den Aufwand selbst abwägen muss. Das Kosten-Nutzen-Verhältnis ist die Einschätzung des Autors und zählt nach den Maßstäben des Buchs selbst nur als Stufe C; mit der Evidenzstufe hat es nichts zu tun.

## Schritt 5: Wie die Antwort geschrieben wird

Nach dem Sortieren so aufbauen:

1. **Ein Satz als Fazit**: Lohnt sich die Sache, soll man sie tun, was ist der erste Schritt.
2. **Zuerst diese Einträge** (3 bis 7, in der Reihenfolge von oben). Je ein bis drei Zeilen: die Handlung (mit einem Verb beginnend), was sie kostet, was sie bringt, die Evidenzstufe, und die Herkunft als „Abschnitt 8, Nr. 17 (Vertrag beim Leihen ausfüllen)". Das Wort in der Klammer stammt aus der Überschrift des Eintrags, damit der Nutzer selbst nachschlagen kann.
3. **Was nicht zu tun ist / was man sich sparen kann**: was das Buch ausdrücklich als nicht lohnend oder als widerlegt führt, getrennt aufführen.
4. **Was im Buch nicht steht**: ehrlich sagen. Alltagswissen nicht als Buchinhalt ausgeben.
5. Bei Bedarf einen Prüfpunkt anhängen: wann man die Sache noch einmal ansehen sollte, oder welches Signal einen Sinneswandel auslöst.

Beim Schreiben diese Regeln einhalten:

- **Sag, wem der Nutzen zugutekommt.** Das Buch teilt die Begünstigten in vier Stufen, von hoch nach niedrig nach der Wahrscheinlichkeit, dass der Nutzen zum Absender zurückkommt: ① du selbst; ② Ehepartner und direkte Angehörige; ③ Freunde, Kollegen und übrige Verwandte; ④ Fremde. Bei Stufe ④ (einen Fremden retten, für jemanden bürgen, für jemanden Geld überweisen) gehören Nutzen und Risiko zusammen in die Antwort: hereingelegt werden, in ein Verfahren gezogen werden, Rache. Weder nur die Vorteile schreiben noch „kümmere dich um niemanden".
- **„Das Recht steht auf deiner Seite" muss die Prozesskosten mitsagen.** Nur das Ergebnis zu nennen und den Weg dorthin nicht, macht aus der Erfolgsaussicht einen Nutzen. Dazu gehört: ob geklagt werden muss, wie lange es ungefähr dauert (erstinstanzliches Verfahren ab 6 Monaten, verlängerbar; beschleunigtes Verfahren 3 Monate), und wer die Anwaltskosten trägt — sie gehören nicht zu den Gerichtskosten, die Kostenübernahme der unterliegenden Partei umfasst sie nicht.
- **Zahlen wörtlich aus dem Eintrag übernehmen**, keine abändern. Stehen dort Konfidenzintervall, Personengruppe und Jahr, bleiben sie. HR, RR und OR werden daneben im selben Satz als „etwa 28 % niedriger" ausgegeben, der Originalwert bleibt stehen. Keine Zahlen, Symptome oder Wirkmechanismen ergänzen, die im Eintrag nicht vorkommen.
- **Umgangssprachlich**: schreib so, dass ein Erwachsener ohne Fachausbildung es in einem Durchgang versteht. Fachbegriffe einmal im selben Satz mit Alltagsworten erklären, Paragrafen auf „welche Folge hat das, was tue ich" herunterbrechen. Die Zeile „Quellen" unverändert übernehmen, damit nachprüfbar bleibt.
- **Zurückhaltender Ton**, nicht belehren, keine Ausrufezeichen, Deutsch. Es ist die Sache des Nutzers, einen Rat nicht zu befolgen — nicht hinterherreden.
- **Regeln ändern sich**: Bei den Beträgen, Fristen und Listen in den Abschnitten 7, 19, 21, 24, 31 und 32 steht im Text ein Stichdatum. Nimm das Datum in die Antwort auf und weise darauf hin, dass der Nutzer die offizielle Stelle selbst prüfen soll.
- Einträge mit dem Vermerk „Streitfall": nenne auch die Gegenevidenz. Einträge mit „noch zu prüfen" nicht als Ergebnis verwenden.
- Keine zweiten Quellen wie Foren oder Ratgeberportale zitieren, nur die Links, die in der Zeile „Quellen" des Eintrags stehen.

## Grenzen

Dieses Buch liefert die allgemeine Linie, es ersetzt keinen Arzt, keinen Anwalt und keinen Steuerberater. Bei einer konkreten Erkrankung, einem konkreten Fall oder einer konkreten Steuerfrage nach den Einträgen den Weg und die zuständige Stelle nennen, aber nicht für die Fachleute entscheiden. Keine individuelle Anlageberatung.

Die Auffassungen im Buch sind die des Autors, und die Sortierung nach Kosten und Nutzen ist ebenfalls seine Einschätzung. Widerspricht der Nutzer einem Eintrag, genügt es, die Belege aus dem Buch zu nennen. Nicht diskutieren.
