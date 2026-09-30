# Architektur — howtolivebetter-de

Deutsche Ausgabe von *HowToLiveBetter* im Fork `Cagliostro/HowToLiveBetterInGermany`.
Chinesisch wird ersetzt; die Struktur des Projekts bleibt erhalten.

---

## 1. Architektur-Überblick

Das Projekt ist **kein** Softwareprodukt mit Datenmodell, sondern ein Textkorpus mit
Werkzeugkette. Die Architektur besteht deshalb aus drei Schichten:

```
┌─ Inhalt ────────────────────────────────────────────────────────┐
│  book/01…34.md      630 Einträge, je 7 Felder                   │
│  README.md          Titelseite, Fragenkatalog, TOC, Glossar     │
│  docs/*.md          5 Langtexte                                 │
│  docs/核实记录/      97 Prüfprotokolle (→ pruefprotokolle/)       │
│  skills/            KI-Skill                                    │
│  CLAUDE.md/AGENTS.md Projektregeln                              │
└─────────────────────────────────────────────────────────────────┘
                    ▼  wird gelesen von
┌─ Werkzeugkette ─────────────────────────────────────────────────┐
│  tools/lib/book.mjs     Struktur aus README ableiten            │
│  tools/sync-stats.mjs   Zahlen zählen und zurückschreiben        │
│  tools/check-refs.mjs   Querverweise + Anker prüfen → Tabelle    │
│  tools/check-plain.mjs  Klartext-Regeln prüfen                   │
│  tools/epub|pdf|offline Bauen drei Ausgabeformate                │
└─────────────────────────────────────────────────────────────────┘
                    ▼  wird ausgeliefert als
┌─ Ausgabe ───────────────────────────────────────────────────────┐
│  index.html     Suchseite (GitHub Pages)                        │
│  EPUB / PDF / Offline-HTML                                      │
│  og.png         Vorschaubild                                    │
│  CI book.yml    prüft und veröffentlicht                        │
└─────────────────────────────────────────────────────────────────┘
```

**Kernthese der Architektur:** Die Werkzeugkette hängt an einem **Textformat-Vertrag**.
Ist der Vertrag einmal deutsch definiert und die Werkzeuge darauf portiert, wird die
Werkzeugkette zum **Übersetzungs-Gate**: Jede übersetzte Sektion läuft sofort durch
`check-plain` (Sprachqualität) und `check-refs` (Verweise), bevor sie abgenommen wird.
Das ersetzt manuelle Vollprüfung von 630 Einträgen.

### ADRs

| # | Entscheidung | Begründung |
|---|---|---|
| ADR-1 | **Format-Vertrag zuerst, Inhalt danach.** Reihenfolge: Spezifikation → Werkzeug-Portierung → Übersetzung. | Die Prüfwerkzeuge sind nur dann nutzbar, wenn sie den Zieltext lesen können. Umgekehrt übersetzte Sektionen ohne Prüfung wären 630-mal blind. |
| ADR-2 | **Deutsche Schlüssel in den Maschinenmarkern**, keine chinesischen Reste. | Anforderung des Users; macht `grep -P '[\p{Han}]'` zum Reststring-Test (REQ-49). |
| ADR-3 | **Feldnamen mit ASCII-Doppelpunkt + Leerzeichen** (`- Kosten: …`) statt Vollbreite (`：`). | Deutsche Typografie; die Regexe werden ohnehin angefasst. |
| ADR-4 | **Dateinamen ASCII-transliteriert** (ä→ae, ö→oe, ü→ue, ß→ss). | Das Projekt hatte bereits Probleme mit prozentkodierten URLs in `index.html`. Umlaute in Dateinamen erzeugen genau das wieder. |
| ADR-5 | **`Quellen` bleibt unübersetzt** (REQ-21). | Nachprüfbarkeit. DOI, Titel, Normnummern sind Rechercheschlüssel, keine Prosa. |
| ADR-6 | **Kein Parallelbaum.** Chinesisch wird im Fork ersetzt. | User-Entscheidung. Herkunft wird über einen README-Abschnitt „Herkunft" statt über einen zweiten Baum gesichert (REQ-13). |
| ADR-7 | **Buchtitel enthält die Eintragszahl** („Lebe besser: 630 Empfehlungen…"). | User-Entscheidung. Folge: die Zahl im Titel wird in die `EDITS`-Tabelle von `sync-stats.mjs` aufgenommen, sonst driftet der Titel bei jeder Änderung. |
| ADR-8 | **Übersetzung in Runden mit zwei Subagenten je Block** (Übersetzen → Fidelity-Prüfen). | 2,84 Mio. Zeichen passen in keine einzelne Sitzung. Runden sind in `status.md` persistiert und wiederaufsetzbar. |
| ADR-9 | **Chinesische Gesetzesnamen mit Original in Klammern** beim ersten Vorkommen. | Lesbar für Deutsche, nachprüfbar für Chinesischkundige; entspricht REQ-23. |

---

## 2. Repo-Layout

| heute | deutsch |
|---|---|
| `book/01-不要早死.md` | `book/01-nicht-frueh-sterben.md` |
| `README.md` | `README.md` (deutsch) |
| `index.html` | `index.html` (deutsch) |
| `docs/核实记录/` | `docs/pruefprotokolle/` |
| `docs/引用对照.md` | `docs/verweis-abgleich.md` |
| `docs/*.md` (5 Langtexte) | `docs/*.md` (deutsch, ASCII-Namen) |
| `skills/life-decision-guide/` | `skills/lebensentscheidungen/` |
| `CLAUDE.md`, `AGENTS.md` | `CLAUDE.md`, `AGENTS.md` (deutsch) |
| `tools/` | `tools/` (portiert, Namen unverändert) |
| `ads/` | entfällt |
| `.github/FUNDING.yml` | entfällt |

### Dateinamen der 34 Sektionen

| Nr | heute | deutsch |
|---|---|---|
| 01 | 不要早死 | `01-nicht-frueh-sterben` |
| 02 | 不要慢慢死 | `02-nicht-langsam-sterben` |
| 03 | 不要浪费精力 | `03-keine-energie-verschwenden` |
| 04 | 不要浪费时间 | `04-keine-zeit-verschwenden` |
| 05 | 不要浪费钱 | `05-kein-geld-verschwenden` |
| 06 | 反面清单 | `06-die-negativliste` |
| 07 | 没钱的时候怎么活 | `07-leben-ohne-geld` |
| 08 | 别把自己搭进去 | `08-lass-dich-nicht-hereinziehen` |
| 09 | 普通人容易踩的法律红线 | `09-rechtliche-rote-linien` |
| 10 | 恋爱和结婚划不划算 | `10-liebe-und-ehe` |
| 11 | 程序员和技术人容易踩的红线 | `11-rote-linien-fuer-techniker` |
| 12 | 创业与做生意 | `12-gruenden-und-geschaeft` |
| 13 | 紧急情况 | `13-notfaelle` |
| 14 | 账号与信息安全 | `14-konten-und-informationssicherheit` |
| 15 | 租房与买房 | `15-mieten-und-kaufen` |
| 16 | 得了慢性病之后怎么活 | `16-leben-mit-chronischer-krankheit` |
| 17 | 家里有老人 | `17-alte-menschen-in-der-familie` |
| 18 | 养孩子划不划算 | `18-kinder-grossziehen` |
| 19 | 在职离职和工伤 | `19-arbeitsverhaeltnis-und-arbeitsunfall` |
| 20 | 刚出生的孩子怎么带 | `20-neugeborene` |
| 21 | 出国旅行与境外安全 | `21-ausland-und-reisen` |
| 22 | 怎么放松 | `22-entspannen` |
| 23 | 学什么技能划算 | `23-welche-faehigkeiten-sich-lohnen` |
| 24 | 看病 | `24-arztbesuche` |
| 25 | 人走了以后要办什么 | `25-nach-dem-tod` |
| 26 | 做一个网站或平台 | `26-website-oder-plattform` |
| 27 | 怀孕和生产 | `27-schwangerschaft-und-geburt` |
| 28 | 别为了外形把身体搞坏 | `28-nicht-fuers-aussehen-ruinieren` |
| 29 | 遭遇重大打击之后 | `29-nach-einem-schweren-schlag` |
| 30 | 上学以后的孩子 | `30-schulkinder` |
| 31 | 十八岁之后有哪几条路 | `31-wege-nach-achtzehn` |
| 32 | 出国留学 | `32-studium-im-ausland` |
| 33 | 残疾之后怎么活 | `33-leben-mit-behinderung` |
| 34 | 家里的常备药别吃出事 | `34-hausapotheke` |

---

## 3. Format-Vertrag (Kern der Architektur)

### 3.1 Eintragsstruktur

```markdown
### 1. Kaution, Rückzahlung und Abzüge gehören in den Vertrag
<!-- Kostenlabel: Geld=0 Zeit=wenig Willenskraft=etwas Nutzen=mittel Bezug=Geld -->
- Kosten: kostet nichts. …
- Klartext: …
- Nutzen: …
- Evidenzstufe: A
- Quellen: …
- Anmerkung: …
```

### 3.2 Sektionskopf

```markdown
[← Zurück zum Inhaltsverzeichnis](../README.md)

# 15. Mieten und Kaufen

Bezugsgröße: Geld. …
```

### 3.3 Regex-Mapping (alt → neu)

Dies ist die verbindliche Tabelle für die Werkzeug-Portierung.

| Zweck | heute | deutsch |
|---|---|---|
| Kostenlabel | `/^<!--\s*成本标签:\s*(.*?)\s*-->/` | `/^<!--\s*Kostenlabel:\s*(.*?)\s*-->/` |
| Label-Schlüssel | `钱` `时间` `毅力` `收益` `口径` | `Geld` `Zeit` `Willenskraft` `Nutzen` `Bezug` |
| Kostenzeile | `/^- 成本：(.*)$/` | `/^- Kosten: (.*)$/` |
| Klartextzeile | `/^- 说人话：(.*)$/` | `/^- Klartext: (.*)$/` |
| Nutzenzeile | `/^- 收益：(.*)$/` | `/^- Nutzen: (.*)$/` |
| Evidenz | `/^- 证据等级：\s*([ABC])/` | `/^- Evidenzstufe: ([ABC])/` |
| Quellen | `/^- 来源：(.*)$/` | `/^- Quellen: (.*)$/` |
| Anmerkung | `/^- 备注：(.*)$/` | `/^- Anmerkung: (.*)$/` |
| Bezugszeile | `口径：` | `Bezugsgröße: ` |
| Streitfall | `/^争议/` | `/^Streitfall/` |
| TODO | `/待核实\|TODO/` | `/noch zu prüfen\|TODO/` |
| Sektionsüberschrift | `/^# (\d+)\. /` | unverändert |
| Eintragsüberschrift | `/^### (\d+)\. /` | unverändert |
| Rücklink | `/^\[← 回总目录\]/` | `/^\[← Zurück zum Inhaltsverzeichnis\]/` |
| Quellen-Trenner | `；` | `;` (Semikolon, halbbreit) |
| Zählmarker | `- 来源：`, `- 备注：` | `- Quellen:`, `- Anmerkung:` |

### 3.4 Wertebereiche der Label-Schlüssel (semantisch unverändert)

| Schlüssel | Werte heute | Werte deutsch | Bedeutung |
|---|---|---|---|
| `Geld` | `0` `少` `多` | `0` `wenig` `viel` | 0 = kostenlos/spart, wenig = zweistellig–niedrige Hunderter, viel = Tausender/laufend |
| `Zeit` | `少` `中` `多` | `wenig` `mittel` `viel` | wenig = Minuten, mittel = Stunden, viel = täglich |
| `Willenskraft` | `否` `些` `是` | `nein` `etwas` `ja` | nein = einmalig, etwas = Gewohnheit ändern, ja = dauerhaft gegen Gewohnheit |
| `Nutzen` | `大` `中` `小` | `hoch` `mittel` `niedrig` | **Magnitude**, nicht der Nutzentext |
| `Bezug` | `死亡率` `金钱` `时间` `自由` | `Sterblichkeit` `Geld` `Zeit` `Freiheit` | Bezugsgröße; nicht über Bezugsgrößen hinweg vergleichen |

### 3.5 Verweisschema (ADR → REQ-35)

| heute | deutsch |
|---|---|
| `第 8 节第 11 条` | `Abschnitt 8, Nr. 11` |
| `第 8 节` | `Abschnitt 8` |
| `本节第 3 条` | `Nr. 3 in diesem Abschnitt` |
| `第 3 条` (im selben Abschnitt) | `Nr. 3` |
| `第 5 到第 10 节` | `Abschnitte 5 bis 10` |
| `第 12、13 条` | `Nr. 12 und 13` |
| `第 8 到 10 条` | `Nr. 8 bis 10` |

**Ankerregel (portiert):** Ein Verweis gilt als belegt, wenn im selben Satz **oder** im selben
Teilsatz (Komma-Abgrenzung) **mindestens ein Wort mit ≥ 4 Buchstaben** aus dem Ziel-Eintragstitel
steht (Kasus-/Numerusform tolerant: gemeinsamer Wortstamm ≥ 4 Zeichen). Ein nackter Verweis ohne
Anker ist ein Fehler — `check-refs.mjs --check` schlägt fehl.

> Begründung der Wortlänge: Chinesisch prüft auf zwei aufeinanderfolgende Schriftzeichen.
> Im Deutschen sind zwei Buchstaben bedeutungslos („im", „so", „er"). Vier Buchstaben
> entsprechen der Selektivität von zwei chinesischen Zeichen.

---

## 4. Glossar (Kern; wächst während der Umsetzung als Prozess-Artefakt)

Das Glossar ist **verbindlich** für alle Übersetzungs-Subagenten. Jeder Subagent erhält es
als Kontext. Es wird während Runde 0 angelegt und bei Bedarf erweitert.

**Ort:** `~/WebstormProjects/devprozess/howtolivebetter-de/glossar.md` — **nicht** im Repo.
Ein zusätzliches Glossar im Buch wäre eine Inhaltsergänzung und verstieße gegen REQ-20.
Die Terminologie-Sektion im README (原「读懂数字（术语表）」) ist dagegen Buchinhalt und
wird als solche übersetzt.

### Struktur und Felder

| zh | de |
|---|---|
| 节 | Abschnitt |
| 条 / 建议 | Nr. / Empfehlung |
| 成本 | Kosten |
| 说人话 | Klartext |
| 收益 | Nutzen |
| 证据等级 | Evidenzstufe |
| 来源 | Quellen |
| 备注 | Anmerkung |
| 口径 | Bezugsgröße |
| 性价比 | Kosten-Nutzen-Verhältnis |
| 争议 | Streitfall (bleibt am **Anfang** der Anmerkung) |
| 待核实 | noch zu prüfen |

### Statistik und Evidenz

| zh | de |
|---|---|
| 总死亡率 / 全因死亡 | Gesamtsterblichkeit |
| 特定死因 | bestimmte Todesursache |
| 荟萃分析 | Metaanalyse |
| 队列研究 | Kohortenstudie |
| 随机对照试验 (RCT) | randomisierte kontrollierte Studie (RCT) |
| 观察性研究 | Beobachtungsstudie |
| 置信区间 (CI) | Konfidenzintervall (KI) |
| 风险比 (HR) | Hazard Ratio (HR) |
| 相对危险度 (RR) | relatives Risiko (RR) |
| 比值比 (OR) | Odds Ratio (OR) |
| 剂量反应 | Dosis-Wirkungs-Beziehung |
| 孟德尔随机化 | Mendelsche Randomisierung |

### Gesundheit

| zh | de |
|---|---|
| 心脏骤停 | Herzstillstand |
| 卒中 (含后循环卒中) | Schlaganfall (auch Hirnstamm-/posteriorer Schlaganfall) |
| 心梗 | Herzinfarkt |
| 主动脉夹层 | Aortendissektion |
| 过敏性休克 | anaphylaktischer Schock |
| 慢性病 | chronische Erkrankung |
| 门诊慢特病 | ambulante Behandlung chronischer und besonderer Erkrankungen |
| 长期处方 | Dauerverordnung |
| 职业病 | Berufskrankheit |
| 职业健康检查 | arbeitsmedizinische Vorsorgeuntersuchung |
| 残疾人证 | Schwerbehindertenausweis |
| 劳动能力鉴定 | Feststellung der Erwerbsminderung |

### Geld, Arbeit, Soziales, Recht

| zh | de |
|---|---|
| 低保 | Mindestsicherung (最低生活保障) |
| 临时救助 | Übergangshilfe |
| 救助站 | Nothilfeeinrichtung |
| 医保 (职工/居民) | Krankenversicherung (Arbeitnehmer-/Einwohner-) |
| 社保 | Sozialversicherung |
| 失业保险 | Arbeitslosenversicherung |
| 公积金 | Wohnungsfonds |
| 个人养老金 | private Altersvorsorge |
| 劳动仲裁 | arbeitsrechtliches Schlichtungsverfahren |
| 工伤 | Arbeitsunfall |
| 工亡 | Tod durch Arbeitsunfall |
| 加班费 | Überstundenvergütung |
| 带薪年休假 | bezahlter Jahresurlaub |
| 正当防卫 | Notwehr |
| 诉讼时效 | Verjährung |
| 失信被执行人 | Schuldner auf der Liste der Vertrauensunwürdigen |
| 限制消费 | Ausgabenbeschränkung |
| 人身安全保护令 | Gewaltschutzanordnung |
| 财产申报 | Vermögensauskunft |
| 拒执罪 | Straftat der Urteilsverweigerung |
| 两卡 | „zwei Karten" (Bank-/Telefonkarten für Betrugsdelikte) |
| 自首 | Selbstanzeige |
| 坦白 | Geständnis |
| 羁押 | Untersuchungshaft |
| 国家赔偿 | Staatshaftung |
| 相对不起诉 | Einstellung des Verfahrens (relative) |
| 行政复议 | Verwaltungsbeschwerde |

### Familie, Kinder, Alter

| zh | de |
|---|---|
| 产假 | Mutterschaftsurlaub |
| 生育津贴 | Mutterschaftsgeld |
| 育儿补贴 | Kinderbetreuungszuschuss |
| 出生医学证明 | Geburtsbescheinigung |
| 母子健康手册 | Mutter-Kind-Gesundheitsheft |
| 新生儿疾病筛查 | Neugeborenen-Screening |
| 国家免疫规划 | staatlicher Impfplan |
| 孤独症 | Autismus |
| 意定监护 | Vorsorgevollmacht |
| 遗嘱 | Testament |
| 长期护理保险 | Pflegeversicherung |
| 压疮 | Dekubitus |
| 哀伤 | Trauer |
| 丧亲 | Verlust eines Angehörigen |

### Bildung, Beruf, Ausland

| zh | de |
|---|---|
| 义务教育 | Schulpflicht |
| 中职 | berufsbildende Schule |
| 职业教育法 | Berufsbildungsgesetz |
| 成人高考 | Erwachsenen-Hochschulaufnahmeprüfung |
| 自考 | Selbststudium-Prüfung |
| 开放大学 | Offene Universität |
| 三支一扶 | Programm „Drei Unterstützungen, eine Hilfe" (三支一扶) |
| 特岗教师 | Sonderstellen-Lehrkraft |
| 公费师范生 | staatlich finanzierte Lehramtsstudierende |
| 兵役登记 | Wehrpflichtregistrierung |
| 退役士兵 | ausgeschiedene Soldaten |
| 灵活就业 | flexible Beschäftigung |
| 职称 | Berufstitel |
| 留学服务中心 (留服中心) | Zentrum für Auslandsstudium (留服中心) |
| 领事保护 | konsularischer Schutz |
| 高薪招聘诈骗 | Betrug mit Lockangeboten im Ausland |
| 电诈园区 | Betrugscampus |

---

## 5. Werkzeug-Portierung im Einzelnen

### 5.1 `tools/lib/book.mjs`
- `TITLE`, `REPO`, `SITE` auf den Fork bzw. deutschen Titel setzen.
- `between('# 高性价比人生指南', '[![')` → deutsche Überschrift.
- `between('## 这本书想回答的问题', '## 目录')` → `'## Fragen, die dieses Buch beantwortet'`, `'## Inhaltsverzeichnis'`.
- `between('## 目录', '## 正文')` → `'## Inhaltsverzeichnis'`, `'## Der Text'`.
- `stripBackLink` Regex auf deutschen Rücklink.
- Regex `\]\((book\/[^)#]+\.md)\)` und `\]\((docs\/[^)#/]+\.md)\)` bleiben (Formate unverändert).

### 5.2 `tools/sync-stats.mjs`
- Zähl-Regexe auf `- Quellen:`, `- Anmerkung:`.
- `EDITS`-Tabelle: alle Zielstellen in README (9), `index.html` (4 Kategorien), `tools/og.html` (3).
- **Neu aufzunehmen:** Eintragszahl im Buchtitel (ADR-7).
- Streitfall-Zählung: `/^Streitfall/`.
- Ruft `check-refs.mjs` auf und schreibt `docs/verweis-abgleich.md`.
- og.png-Erzeugung: Chrome-Pfad bleibt; Überschrift in `tools/og.html` deutsch.

### 5.3 `tools/check-refs.mjs`
- Scannt Sektionsanfang (`Bezugsgröße:`), Eintragstext, `docs/*.md`.
- Verweiserkennung: `Abschnitt (\d+), Nr\. (\d+)`, `Nr\. (\d+) in diesem Abschnitt`,
  `Nr\. (\d+)`, `Abschnitt (\d+)`, `Abschnitte ([\d und bis]+)`, `Nr\. ([\d und bis]+)`.
- **Abgrenzung Buchverweis ↔ Gesetzesnorm:** heute am `《…》`/`〔…〕`/„该解释" erkannt.
  Deutsch: Ein `Nr. N` gilt als Gesetzesnorm, wenn im selben Satz ein Gesetzesname steht
  (`Gesetz`, `Verordnung`, `§`, `Artikel`, `GB`, `ZPO`-artige Kürzel) oder wenn `Nr.` direkt
  auf einen in Klammern gesetzten Normtitel folgt. Diese Regel ist der empfindlichste Teil
  der Portierung und braucht eigene Tests (siehe Risiko R2).
- Ankerregel: Wortstamm ≥ 4 Zeichen (Abschnitt 3.5).
- Ausgabe nach `docs/verweis-abgleich.md`, Format wie bisher (Spalte „出处" → „Fundstelle").

### 5.4 `tools/check-plain.mjs`
- Längenregel: statt 120 字 → **≤ 80 Wörter** in der Klartext-Zeile. *(Kalibriert am
  2026-09-30: 80 ist die **Grenze**, der Zielwert liegt bei 50–70 Wörtern — REQ-38. Der
  Bestand erreicht genau 80 und ist damit konform.)*
- Marker `<!-- Länge: begründet — <Grund> -->`: Verstöße gegen die Längenregel sind dann
  geduldet, werden aber getrennt aufgelistet (REQ-39). Ohne Marker bleiben sie ein harter Fehler.
- Jargonliste: `HR`, `RR`, `OR`, `KI`, `CI`, `Metaanalyse`, `Kohorte`, `randomisiert`,
  `Signifikanz`, `adjustiert`, `Inzidenz`, `Prävalenz`, `Relativrisiko` …
- Zahlenregel: jeder arabische Zahlwert im Klartext muss im Titel, in `Kosten` oder in
  `Nutzen` desselben Eintrags vorkommen.
- Leerformelliste (REQ-32): `bemerkenswert`, `im Kern`, `letztlich`, `gewissermaßen`,
  `sozusagen`, `nicht nur … sondern auch` (als Leerformel), `das heißt` gehäuft.

### 5.5 `index.html`
- Zeile 547/548: Label-Regex und Schlüsselnamen.
- Zeilen 552–557: Feldzeilen-Regexe.
- Zeile 564/565: `Streitfall` / `noch zu prüfen`.
- Zeilen 566/567 + 918: `COST_W` mit deutschen Werten, `e.level === 'hoch'`,
  Verhältniswerte `sehr hoch | hoch | mittel`.
- Zeile 743: `XREF_RE` auf deutsche Verweisformen (deckungsgleich mit 5.3).
- Zeile 1005–1007: Badge-Texte und Tooltips.
- Sichtbare Texte: Überschrift, Untertitel, Fragenkatalog, Filterlabels
  (`Geld`, `Zeit`, `Willenskraft`, `Nutzen`, `Bezugsgröße`, `Evidenzstufe`, `Abschnitt`),
  Hinweistexte, Fußzeile, Langtext-Navigation, Fehlermeldungen, `<html lang="de">`.
- Meta/OpenGraph/JSON-LD: deutscher Titel, `inLanguage: "de"`, `numberOfPages: 630`,
  Beschreibung, `about`-Liste.
- Langtext-Popup: die 5 deutschen `docs/*.md`-Namen, URL-kodiert.

### 5.6 Builds
- `tools/epub/build.mjs`: `lang`-Metadatum `de`, deutsche Kapitelnamen, Inhaltsverzeichnis,
  Entfernen der CJK-Schrift-Einbettung falls vorhanden.
- `tools/pdf/build.mjs` + `template.typ`: `#set text(lang: "de")`, Schrift mit vollständigem
  Latin-Zeichensatz (Umlaute, ß), deutsche Anführungszeichen `„…"`, Silbentrennung deutsch.
  Die Noto-CJK-Abhängigkeit in CI entfällt.
- `tools/offline/build.mjs`: `window.__CORPUS__` mit deutschen `parts` und `docs`; die
  Inlining-Logik selbst ist sprachunabhängig.
- `tools/og.html`: deutscher Titel und deutsche Kennzahlen; `og.png` neu erzeugen
  (benötigt Chrome, lokal vorhanden oder per `CHROME`-Variable).

### 5.7 CI `.github/workflows/book.yml`
- Job-Namen deutsch: `verweise`, `klartext`, `statistik`, `build`.
- Entfernen: `fonts-noto-cjk`-Installation und der zugehörige Prüfschritt.
- Release-Notizen deutsch.

---

## 6. Ausführungsstrategie

### Rundenübersicht

| Runde | Inhalt | Ergebnis |
|---|---|---|
| **0** | Format-Vertrag + Glossar (`docs/glossar.md`) + Werkzeug-Portierung + **eine vollständig übersetzte Referenzsektion** (15, kleinste mit 8 Einträgen) | Werkzeugkette liest deutschen Text; Referenzsektion als Muster |
| **1** | `book/01–04` (36+42+25+18 = 121 Einträge) | |
| **2** | `book/05–09` (45+26+21+43+23 = 158 Einträge) | |
| **3** | `book/10–18` (18+17+23+41+9+8+9+8+6 = 139 Einträge) | |
| **4** | `book/19–26` (17+12+11+11+23+12+10+11 = 107 Einträge) | |
| **5** | `book/27–34` (16+8+13+13+16+10+20+9 = 105 Einträge) | 630 vollständig |
| **6** | `README.md`, `index.html`, 5 Langtexte, `skills/`, `CLAUDE.md`, `AGENTS.md` | Außentexte |
| **7** | 97 Prüfprotokolle, `sitemap.xml`, Metadaten | Audit-Trail |
| **8** | QA: Prüfläufe, Builds, Browser-Test, Fidelity-Stichproben | Abnahme |

### Blockgröße und Subagenten

Ein Block = **8–12 Einträge** eines Abschnitts (Größenschätzung: ~2.400 zh-Zeichen je Eintrag
→ ~4.000 de-Zeichen Ausgabe je Eintrag, also ~40 KB je Block). Größere Abschnitte
(08 mit 43, 05 mit 45, 02 mit 42, 13 mit 41) werden in 4–5 Blöcke geteilt.

Je Block zwei Subagenten mit **frischem Kontext** (DevProzess-Vorgabe):

1. **Übersetzer** — bekommt: Format-Vertrag (Abschnitt 3), Glossar, die Referenzsektion als
   Muster, den Originaltext des Blocks. Auftrag: ausschließlich übersetzen, nichts ändern.
2. **Fidelity-Prüfer** — bekommt: Original, Übersetzung, Anforderungs-Abschnitt B.
   Auftrag: Satz für Satz prüfen auf Auslassung, Zusatz, Abschwächung, verschobene Zahl,
   geänderten Titel. Liefert Findings, **ändert nichts**.

Danach: portierte Prüfskripte laufen lassen. Erst dann gilt der Block als abgenommen.

### Fortschritt

Jede Runde wird in `status.md` vermerkt. Innerhalb einer Runde wird der Blockfortschritt in
`umsetzungsbericht.md` geführt (Tabelle: Abschnitt → Blöcke → Status). Unterbrochene
Sitzungen setzen dort wieder auf.

---

## 7. Risiken und Gegenmaßnahmen

| # | Risiko | Wirkung | Gegenmaßnahme |
|---|---|---|---|
| **R1** | **Umfang** — 2,84 Mio. Zeichen, ~100 Subagentenläufe über mehrere Sitzungen | Abbruch, Halbzustand | Runden in `status.md`, Blockfortschritt in `umsetzungsbericht.md`; jede Runde für sich abschließbar |
| **R2** | **Verweis-Erkennung** — die Abgrenzung „Buchverweis vs. Gesetzesnorm" ist der empfindlichste Teil | Verweise werden stillschweigend nicht geprüft (genau der Fehler, den das Original 2026-09-21 hatte) | Eigene Testfälle: bekannte Gesetzesnormen („§ 16 GB", „Art. 1125 ZGB") müssen als Norm erkannt, bekannte Buchverweise als Verweis. **Zählkontrolle:** Anzahl erkannter Verweise muss nach der Portierung derselben Größenordnung entsprechen (Original-Baseline: 533) |
| **R3** | **Konsistenz über 630 Einträge** — derselbe Begriff mal so, mal so | Lesbarkeit, Glossarverstoß | Verbindliches Glossar je Subagent; `check-glossar`-Lauf am Rundenende (Wortliste gegen Glossar) |
| **R4** | **Deutsche Satzlänge** — deutsche Sätze sind strukturell länger als chinesische | REQ-33 reißt massenhaft | Zielgröße 15–20 Wörter, Obergrenze 30 **als Wortzahl** (nicht Zeichen); Kalibrierung in Runde 0 an Sektion 15. **Eingetreten und am 2026-09-30 aufgelöst:** Die Wortkalibrierung war richtig und wird eingehalten (Median 15, Maximum genau 30), aber die **Zeichenregeln der `CLAUDE.md`** — 120 Zeichen Klartext, 30/50 Zeichen Satz, 700 Zeichen Anmerkung — waren Originalregeln in chinesischer Einheit und wurden nie umgerechnet. Folge: 630 von 630 Klartexten formal „gerissen", ohne Textmangel. Behoben durch **REQ-38**, **REQ-39** und die Umstellung der `CLAUDE.md` auf Wortzahlen (Anmerkungs-Schwelle 700 → 900, ohne harte Obergrenze) |
| **R5** | **Umlaute in Dateinamen und URLs** | prozentkodierte Links, kaputte Anker | ADR-4: ASCII-transliterierte Dateinamen |
| **R6** | **Titelzahl driftet** (ADR-7) | README-Titel und Badge widersprechen dem Korpus | Titelzahl in die `EDITS`-Tabelle von `sync-stats.mjs` |
| **R7** | **Chinesische Reststrings** in Ausgabeartefakten | REQ-49 verletzt, peinlich | Prüfskript: `grep -P '[\p{Han}]'` über alle Ausgaben außer `Quellen`-Zeilen |
| **R8** | **Fidelity schleicht** — Subagenten „verbessern" stillschweigend | Auftragsverstoß (keine Inhaltsänderung) | Zwei-Agenten-Pipeline; Fidelity-Stichprobe je Sektion in der QA (REQ-64) |
| **R9** | **`og.png`** braucht Chrome | Bild fehlt | `CHROME`-Umgebungsvariable; lokal prüfen, sonst als Blockade dokumentieren |
| **R10** | **epubcheck/typst** lokal nicht installiert | Builds nicht prüfbar | In Runde 8 Installationsstand prüfen; fehlt etwas, als Blockade melden statt überspringen |

---

## 8. Nicht Teil dieser Architektur

- Anpassung an deutsche Rechts- und Sozialordnung (REQ-28).
- Aktualisierung inhaltlich veralteter Angaben.
- Ein zweiter, paralleler chinesischer Baum (ADR-6).
- PR an `eternity4719/HowToLiveBetter`.
