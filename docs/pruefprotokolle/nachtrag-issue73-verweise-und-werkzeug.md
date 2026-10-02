# Nachtrag: Querverweise und Werkzeug (Issue #73)

Datum: 2026-10-02. Grundlage: `tools/check-refs.mjs`, `docs/verweis-abgleich.md`.

## Auftrag (Issue #73)

① Drei Verweise zeigten auf die falsche Nummer (Nummern waren bei einer früheren
Eintragsänderung weitergerutscht). ② `check-refs.mjs` soll zusätzlich prüfen, ob
die Wörter in der Klammer eines Verweises („Nr. 10 (Bestechung)") zum Zieltitel
passen.

## Teil ① — gemeldete Verweise

| Stelle | vorher | nachher | Beleg |
|---|---|---|---|
| `book/08:375` | `Abschnitt 9, Nr. 21 (Unfälle fälschen…)` | `Abschnitt 9, Nr. 20 (Unfall erfinden…)` | §9 Nr. 20 = „Erfinde keinen Unfall und übertreibe keinen Schaden…" |
| `book/09:155` | `Abschnitt 8, Nr. 28 und 8 (vorgeschobener gesetzlicher Vertreter…)` | `Abschnitt 8, Nr. 27 und 8 (vorgeschobener Geschäftsführer…)` | §8 Nr. 27 = „Werde kein vorgeschobener Geschäftsführer…" |
| `book/09:205` | `Abschnitt 8, Nr. 38 (Angehörige versichern)` | `Abschnitt 8, Nr. 37 (Versicherung abschließen, dann handeln)` | §8 Nr. 37 = „Erst für jemanden eine Versicherung abschließen, dann handeln…" |

## Teil ② — Werkzeugerweiterung

`tools/check-refs.mjs` prüft jetzt die Klammer-Anker an zwei Stufen:

- **Harter Fehler**, wenn die Klammerwörter sprachlich zum **Nachbareintrag**
  (Nr. x−1 oder x+1) passen, aber nicht zum Zieleintrag — das Signal für einen um
  eins verrutschten Verweis.
- **Hinweis** (`--suspect`), wenn die Klammer den Zieltitel nur frei umschreibt.
  Bewusst kein Fehler: eine freie Umschreibung ist zulässig und hat in einer ersten
  Fassung 58 Fehlalarme erzeugt.

`--check` ist zusätzlich um den Klammer-Drift-Fall erweitert.

## Zusätzlich gefundene Verrutschungen (am Text geprüft und behoben)

Der neue Detektor und die `--suspect`-Liste brachten sechs weitere Stellen zutage.
Jede wurde am Zieltitel und am Verweisumfeld selbst geprüft.

| Stelle | vorher | nachher | Prüfung |
|---|---|---|---|
| `book/08:125` | `Abschnitt 9, Nr. 15 (beim Eintreiben niemanden festhalten)` | `Nr. 14` | §9 Nr. 14 = „Beim Eintreiben von Schulden: niemanden festhalten…"; Nr. 15 = Ausweis. |
| `book/19:155` | `Abschnitt 24, Nr. 10 (Behinderungsgrad)` | `Nr. 8 … und Nr. 9 (Schwerbehindertenausweis)` | §24 Nr. 8 = Feststellung des Behinderungsgrads, Nr. 9 = Schwerbehindertenausweis; Nr. 10 = Dank an den Arzt. |
| `book/24:105` | `Abschnitt 8, Nr. 40 (Bestechung)` | `Nr. 39` | §8 Nr. 39 = „Steck Ermittelnden… Bestechung"; Nr. 40 = heimliches Mitschneiden. |
| `book/29:103` | `Abschnitt 8, Nr. 25 (Voreheliches Vermögen)` | `Nr. 24` | §8 Nr. 24 = „Voreheliches Vermögen…"; Nr. 25 = Familienstand prüfen. |
| `book/19:92` | `Abschnitt 11, Nr. 12 (Wettbewerbsverbot ohne Zahlung)` | `Nr. 10` | §11 Nr. 10 = Wettbewerbsverbot/Karenzentschädigung; Nr. 12 = GPL-Lizenz. Kein Nachbartreffer, nur über `--suspect` gefunden. |
| `book/01:324`, `book/03:217` | Klammer «Angehörige können direkt zur Untersuchung bringen…» bzw. «Einweisung» | «die Warnung ernst nehmen und sofort Hilfe holen» | Zieltitel §8 Nr. 15 ist richtig; die alte Klammer war frei und widersprach der Zielanmerkung (dort: nicht die Familie entscheidet über eine Einweisung). |

Geprüft und unbeanstandet (Nummer richtig, Klammer nur freie Umschreibung):
`book/05:443` (§25 Nr. 9), `book/06:162` (§13 Nr. 6 Glaukomanfall), `book/09:185` (§8 Nr. 10).

## Zahlen

- Verweise vor der Runde: **585**. Nach #75 (+2) und den Korrekturen: **588**.
  Die Zahl steigt um die netto hinzugefügten Verweise; sie ist der Prüfmaßstab aus
  CLAUDE.md (kein stilles Verschlucken durch `nums()`).
- Werkzeugfehler behoben: `nums()` verwarf eine zweite Nummer in der Schreibweise
  `Nr. 23 und Nr. 18`, weil `Number("Nr. 18")` zu `NaN` wird. Die SPEC lässt diese
  Schreibweise ausdrücklich zu (Zeile 106); der Fehler ist damit beseitigt.

## Gates (2026-10-02)

- `node tools/check-refs.mjs --check` → bestanden, 588 Verweise, 0 Verdachtsfälle.
- `node tools/check-plain.mjs --stat` → 606 Zeilen, 0 beanstandet.
- `node tools/sync-stats.mjs --check --no-screenshot` → bestanden (Zahlen unverändert).
- `grep -c 元 book/*.md` → in allen Dateien 0.
