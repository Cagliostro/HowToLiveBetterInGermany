# Go-Live: howtolivebetter-de

- **datum:** 2026-09-29
- **basis:** `architektur.md`, `umsetzungsbericht.md`, `qa-code-bericht.md`, `qa-ui-bericht.md`
- **Ziel-Repo:** `Cagliostro/HowToLiveBetterInGermany`, Branch `main`, Remote `origin`
- **Arbeitsstand:** `HEAD = b875bfe`, darauf **142 offene Änderungen** (2 neu, 2 gelöscht, 41 geändert, 97 umbenannt+geändert)

---

## Überblick

Es gibt **keine Anwendung und keinen Server**. Ausgeliefert werden zwei Dinge, beide aus demselben
Repository:

| Was | Wohin | Wie |
|---|---|---|
| Die Suchseite und das Buch als Website | `https://cagliostro.github.io/HowToLiveBetterInGermany/` | **GitHub Pages**, Zweig `main`, Ordner `/` (Wurzel); `index.html` liegt dort, `.nojekyll` ist vorhanden |
| EPUB, PDF und Offline-Einzeldatei | festes Release **`epub-latest`** | `.github/workflows/book.yml`, läuft bei jedem Push auf `main` |

Der Workflow erzeugt die drei Fassungen neu, prüft das EPUB mit `epubcheck` und hängt sie mit
`--clobber` an das Release. Weil das Tag `epub-latest` fest ist, **bleiben die Download-Links in der
README unverändert gültig** — es muss keine URL angepasst werden.

Nebenher prüft derselbe Workflow in drei eigenen Jobs die Verweise, den Klartext und die
Statistikzahlen. Diese Jobs sind bewusst **nicht** vom Build-Job abhängig: Ein nicht ergänzter
Anker soll die Veröffentlichung nicht aufhalten.

**Kein Dev-/Prod-Trennschritt für die Website.** Das Repo hat nur einen Zweig (`main`), und Pages
liefert genau dessen Stand aus. Ein Push auf `main` ist damit der Produktiv-Deploy. Genau deshalb
gilt: **kein Push ohne ausdrückliche Freigabe.**

---

## Manuelle Schritte (User, einmalig)

1. **Secrets: nichts anzulegen.** Der Workflow benutzt ausschließlich das automatische
   `GITHUB_TOKEN` (`permissions: contents: write`), das GitHub jedem Lauf selbst mitgibt. Es gibt
   **keine** einzutragenden Schlüssel, Passwörter oder Tokens — es sind also auch keine Platzhalter
   zu ersetzen.
2. **Pages-Einstellung kontrollieren** (einmalig, weil es dafür keinen Workflow gibt):
   Repo → *Settings* → *Pages* → **Source** = „Deploy from a branch", **Branch** = `main`,
   **Folder** = `/ (root)`. Im Repo liegt keine Pages-Workflow-Datei, die Einstellung wird also in
   der Oberfläche gehalten. Steht sie schon so, ist nichts zu tun.
3. **Schreibrechte der Actions kontrollieren:** Repo → *Settings* → *Actions* → *General* →
   *Workflow permissions*. Steht dort „Read repository contents", schlägt der Veröffentlichungsschritt
   fehl, obwohl alle Prüfungen grün sind. Nötig ist „Read and write permissions" — oder die
   Workflow-Deklaration `permissions: contents: write` genügt, wenn die Organisationseinstellung
   sie zulässt.
4. **Release `epub-latest` muss nicht angelegt werden.** Die README verlinkt es bereits, es besteht
   also; der Workflow aktualisiert es. Beim allerersten Lauf würde er es sonst selbst anlegen.
5. **Nichts am Fork-Verhältnis tun.** Der Fork besteht, `origin` zeigt darauf. Ein Pull Request an
   das Original-Repository ist laut Projektregel ausgeschlossen (REQ-08) und nicht Teil des Go-Live.

---

## Deployment DEV

**Für dieses Projekt gibt es keine Dev-Umgebung** — es gibt keinen zweiten Zweig und keine zweite
Pages-Instanz. Die Rolle, die sonst „dev" spielt, übernehmen zwei Dinge, die beide schon erprobt
sind:

1. **Örtliche Vorschau** (haben wir in der QA benutzt):

   ```bash
   cd ~/WorkProjects/HowToLiveBetterInGermany && python3 -m http.server 8765
   ```

   Danach `http://localhost:8765/index.html` öffnen. Auch als Eintrag `buch` in
   `.claude/launch.json` hinterlegt.

2. **Der Pull-Request-Lauf — die eigentliche Dev-Stufe.** Ein PR löst denselben Workflow aus, aber
   der Veröffentlichungsschritt trägt `if: github.event_name != 'pull_request'` und **fällt weg**.
   Der PR prüft also vollständig (Verweise, Klartext, Statistik, EPUB-Bau, PDF-Bau, epubcheck) und
   lädt die drei Dateien als Actions-Artefakt hoch, ohne etwas zu veröffentlichen.

   Das ist wichtig, weil EPUB-Bau, PDF-Bau und `epubcheck` **lokal nie gelaufen sind** — sie sind
   bewusst der CI überlassen (Entscheidung ÜB-de-6, offen getrackt als ÜB-de-9). Der PR ist die
   einzige Stelle, an der sie vor der Veröffentlichung geprüft werden.

**Schritte** (ausdrückliche Freigabe nötig, weil sie einen Push enthalten):

```bash
cd ~/WorkProjects/HowToLiveBetterInGermany && git checkout -b uebersetzung-de
```

```bash
cd ~/WorkProjects/HowToLiveBetterInGermany && git add -A && git status --short | head -20
```

```bash
cd ~/WorkProjects/HowToLiveBetterInGermany && git commit
```

```bash
cd ~/WorkProjects/HowToLiveBetterInGermany && git push -u origin uebersetzung-de
```

```bash
cd ~/WorkProjects/HowToLiveBetterInGermany && gh pr create --base main --fill
```

Dann den Lauf beobachten: `gh pr checks --watch`. **Erwartung:** fünf grüne Häkchen — Verweise,
Klartext, Statistik, Fassungen erzeugen (inklusive epubcheck). Zusätzlich im Artefakt
`LebeBesser` die drei erzeugten Dateien herunterladen und EPUB und PDF einmal öffnen: Umlaute und ß,
deutsche Anführungszeichen, Inhaltsverzeichnis, Seitenzahlen.

Vor dem Commit prüfen, dass nichts Unerwünschtes mitkommt: `git status --short` muss frei von
`dist/`, `.claude/`, `node_modules/` und sonstigen Erzeugungsresten sein (die `.gitignore` deckt
sie ab, ein Blick kostet trotzdem nichts).

---

## Deployment PROD — NUR NACH EXPLIZITER FREIGABE DURCH DEN USER

> **Diesen Abschnitt nicht ohne ausdrückliche Freigabe ausführen.** Hier wird veröffentlicht:
> Die Website wechselt auf den deutschen Stand, und die Download-Dateien im Release werden ersetzt.
> Der auslösende Schritt ist ein Push auf `main`.

Voraussetzungen: DEV-Lauf grün (alle fünf Jobs), Artefakte gesichtet, Freigabe liegt vor.

**Schritt 1 — PR zusammenführen** (oder, wenn bewusst ohne PR gearbeitet wird, direkt auf `main`
pushen):

```bash
cd ~/WorkProjects/HowToLiveBetterInGermany && gh pr merge uebersetzung-de --merge --delete-branch
```

**Schritt 2 — den Lauf auf `main` beobachten:**

```bash
cd ~/WorkProjects/HowToLiveBetterInGermany && gh run watch
```

**Schritt 3 — veröffentlichen lassen.** Der Workflow macht den Rest von selbst: Tag
`epub-latest` fortschreiben, Release-Notiz auf „Textstand Commit `<sha>`, erstellt am … (Berliner
Zeit)" setzen, die drei Dateien mit `--clobber` ersetzen. **Nichts händisch hochladen.**

**Schritt 4 — nachprüfen** (in dieser Reihenfolge):

1. `gh run list --workflow book.yml --limit 1` → grün.
2. `gh release view epub-latest` → drei Assets mit **aktuellem** Zeitstempel.
3. `https://cagliostro.github.io/HowToLiveBetterInGermany/` neu laden (Seiten-Cache leeren,
   `Cmd+Shift+R`): deutscher Titel, „630 Empfehlungen", die 34 Abschnitte.
4. Einen der drei Download-Links aus der README anklicken und die Datei öffnen.
5. Gegenprobe im Browser: Es darf **keine** Anfrage an `google-analytics.com` mehr gehen (ÜB-de-7).

---

## Rollback

**Die Website.** Pages liefert den Stand von `main`. Zurück also über einen neuen Commit, nicht über
Historie-Umschreiben:

```bash
cd ~/WorkProjects/HowToLiveBetterInGermany && git revert --no-edit <commit-sha>
```

Danach auf `main` pushen — der Workflow baut und veröffentlicht automatisch neu. Das ist der
bevorzugte Weg, weil die Historie erhalten bleibt. Ein `git push --force` auf `main` wäre möglich,
ist aber destruktiv und nur mit ausdrücklicher Freigabe zu erwägen.

**Die elektronischen Fassungen.** Hier ist der Rollback **nicht** durch einfaches Zurückgehen
möglich: Der Workflow schreibt das Tag `epub-latest` mit `git tag -f` fort und ersetzt die Anhänge
mit `--clobber`. Die vorherigen Dateien sind nach einem Lauf **weg**. Zurück kommt man nur, indem man
den Text reverttet und neu bauen lässt. Wer die vorherige Fassung behalten will, muss sie vorher
sichern; die Artefakte der vergangenen Läufe liegen aber auf der Actions-Seite unter dem Artefakt
`LebeBesser` und werden dort 90 Tage aufbewahrt.

**Das chinesische Original** ist nicht verloren: Es steht in der Git-Historie
(`git show b875bfe^:<pfad>` liefert jede Originaldatei). Ein Rollback ist also nie endgültig.

---

## Betrieb

- **Logs:** GitHub → *Actions* → Workflow „Elektronische Fassungen". Jeder Lauf zeigt die drei
  Prüfjobs und den Build-Job einzeln. `gh run list --workflow book.yml` für die Übersicht,
  `gh run view --log-failed` für einen fehlgeschlagenen Lauf.
- **Monitoring:** Es gibt keine Laufzeit, die überwacht werden müsste; die Website ist statisch.
  Beobachten lässt sich nur die Veröffentlichung. Fällt einer der Prüfjobs um, bleibt die zuletzt
  veröffentlichte Fassung online — die Jobs sind bewusst vom Build entkoppelt, ein roter Anker
  nimmt die Seite also nicht vom Netz. Rot heißt: nachsehen, nicht in Panik veröffentlichen.
- **Was gelegentlich nachgesehen gehört:** der Textstand-Hinweis im Release
  („Textstand Commit … erstellt am …") und die README-Zeile zu den drei Downloads. Beide werden
  automatisch gepflegt; sie sind der schnellste Beleg, dass der letzte Lauf durchgelaufen ist.
- **Kosten:** **0 € pro Monat.** Öffentliches Repository, GitHub Pages und GitHub Actions im
  Freikontingent. `architektur.md` führt deshalb keine eigene Kostenschätzung — es gibt keine
  bezahlte Infrastruktur, gegen die man abrechnen könnte. Die einzige „Kosten"-Prüfung, die sinnvoll
  bleibt: im Actions-Bereich gelegentlich kontrollieren, dass das Minutenkontingent nicht durch
  häufige Läufe aufgezehrt wird. Bei diesem Projekt (Textänderungen, keine Automatik) ist das
  unkritisch.

---

## Checkliste vor Go-Live

- [x] **QA-Berichte PASS** — `qa-code-bericht.md` und `qa-ui-bericht.md`, keine Beanstandung
- [x] **Secrets vorhanden** — entfällt, es sind keine nötig (nur `GITHUB_TOKEN`)
- [ ] **Dev-Lauf verifiziert** — PR offen, fünf Jobs grün, EPUB und PDF gesichtet (ÜB-de-9)
- [ ] **Freigabe des Users für Prod liegt vor**
- [ ] Pages-Einstellung und Actions-Schreibrechte kontrolliert (manuelle Schritte 2 und 3)

---

## Offene Punkte

- **ÜB-de-9** — EPUB-Bau, PDF-Bau und der CI-Lauf selbst sind lokal nie gelaufen (Entscheidung
  ÜB-de-6). Sie werden mit dem PR-Lauf das erste Mal geprüft. Schlägt etwas fehl, ist das ein
  Befund für Phase 5 und zieht eine erneute QA-Runde nach sich — deshalb steht der PR **vor** dem
  Push auf `main`, nicht danach.
- **Screenshots der QA** liegen in `qa/`; sie entstanden im Dunkelmodus, weil der Prüfrechner das
  vorgibt. Die Seite folgt damit korrekt `prefers-color-scheme`.
- Kein Commit und kein Push sind bisher erfolgt. Der gesamte deutsche Stand liegt als Arbeitsbaum
  über `HEAD = b875bfe`.
