# Skill für Lebensentscheidungen (lebensentscheidungen)

Lässt einen KI-Assistenten konkrete Fragen aus „Lebe besser" beantworten: soll ich das tun, lohnt es sich, was wähle ich, was tue ich bei einem Notfall zuerst, welche Leistung steht mir zu, mache ich mich damit strafbar.

Er tut genau eine Sache: **zuerst die passenden Einträge aus dem Text heraussuchen, dann in der Rechenweise des Buchs sortiert antworten**, bei jedem Eintrag mit der Angabe, aus welchem Abschnitt und welcher Nummer er stammt. Findet er nichts, sagt er das, statt Zahlen aus dem Gedächtnis zu erfinden.

Die Regeln stehen vollständig in [SKILL.md](SKILL.md). Beide Werkzeuge nutzen dieselbe Datei, es gibt keine zweite Fassung zum Pflegen.

## In Claude Code installieren

In diesem Repository Claude Code öffnen: keine Installation nötig, `.claude/skills/lebensentscheidungen/` zeigt bereits auf diese Regeln.

Für alle Verzeichnisse in das persönliche Skill-Verzeichnis kopieren:

```bash
mkdir -p ~/.claude/skills/lebensentscheidungen && curl -fsSL -o ~/.claude/skills/lebensentscheidungen/SKILL.md "https://raw.githubusercontent.com/Cagliostro/HowToLiveBetterInGermany/main/skills/lebensentscheidungen/SKILL.md"
```

Danach genügt eine direkte Frage wie „Lohnen sich zwei Stunden Pendeln am Tag?" oder „Ein Freund will, dass ich für ihn bürge — unterschreiben?". Der Skill springt dann an. Man kann ihn auch ausdrücklich verlangen: „Antworte mit lebensentscheidungen".

## In Codex installieren

In diesem Repository Codex öffnen: keine Installation nötig, die `AGENTS.md` im Wurzelverzeichnis verweist schon darauf.

Für alle Verzeichnisse die Datei in das Verzeichnis für eigene Prompts von Codex legen und danach mit `/lebensentscheidungen` aufrufen:

```bash
mkdir -p ~/.codex/prompts && curl -fsSL -o ~/.codex/prompts/lebensentscheidungen.md "https://raw.githubusercontent.com/Cagliostro/HowToLiveBetterInGermany/main/skills/lebensentscheidungen/SKILL.md"
```

Damit es in jeder Sitzung gilt, ohne jedes Mal den Slash-Befehl zu tippen, diese Zeile in `~/.codex/AGENTS.md` aufnehmen:

```markdown
Bei Fragen zu Lebensentscheidungen (soll ich, lohnt sich, was wähle ich, welche Leistung, ist das strafbar) nach ~/.codex/prompts/lebensentscheidungen.md verfahren.
```

## Woher der Text kommt

Liegt das Repository lokal vor, wird das lokale `book/` gelesen; sonst wird es geholt:

```bash
git clone --depth 1 https://github.com/Cagliostro/HowToLiveBetterInGermany.git "${TMPDIR:-/tmp}/hltb"
```

Das ganze Buch hat 1,3 MB, ein flacher Klon dauert ein paar Sekunden. Ist kein Netz da, wird das ehrlich gesagt — der Text wird nicht ersetzt.

## Hinweis für Änderungen

In der SKILL.md steht keine Liste und keine Zahl, die mit dem Text mitwandern müsste: Die Abschnittsliste wird aus der Tabelle „Fragen, die dieses Buch beantwortet" in der README gelesen, die Stufenregel aus den beiden Zeilen `COST_W` und `e.ratio` in der `index.html`. Abschnitte hinzuzufügen oder zu streichen und die Stufenregel zu ändern, berührt dieses Verzeichnis deshalb nicht.
