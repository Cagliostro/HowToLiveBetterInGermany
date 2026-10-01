# Quellenprüfprotokoll zu Abschnitt 8 (2026-09-07)

Vorgehen der Prüfung: Jede URL wurde zuerst mit WebFetch geöffnet; WebFetch liefert bei langen Seiten nur eine Zusammenfassung und verwechselt gelegentlich etwas, deshalb wurden alle Seiten mit dem Volltext der Gesetze zusätzlich mit curl als HTML in den Scratchpad heruntergeladen, die Tags entfernt und der Originaltext anhand von „Art. X" Wort für Wort lokalisiert (die unten zitierten Originalabsätze stammen alle aus der lokalen Lokalisierung). Bei den PDFs von iachina wurde der Text nach dem Herunterladen mit WebFetch mit pypdf extrahiert und lokalisiert.

## Bestätigte Quellen

### 1. Straßenverkehrssicherheitsgesetz [道路交通安全法] (Änderung von 2021)
- URL: <https://jtgl.beijing.gov.cn/jgj/jgxx/flfg/fl/205308/index.html> (Wiedergabeseite der Verkehrsverwaltung des Organs für öffentliche Sicherheit Peking, lokale offizielle Website)
- Seitentitel „Straßenverkehrssicherheitsgesetz der Volksrepublik China [Fassung von 2021]", Versionszeile auf der Seite: „Am 29. April 2021 von der 28. Sitzung des Ständigen Ausschusses des 13. Nationalen Volkskongresses geändert". Bestätigt.
- Art. 70 Abs. 1: „Kommt es auf der Straße zu einem Verkehrsunfall, soll der Fahrzeugführer sofort anhalten und den Fundort sichern; verursacht er Personenschaden oder Todesfälle, soll der Fahrzeugführer sofort die verletzten Personen retten und unverzüglich den im Dienst befindlichen Verkehrspolizisten oder die Verkehrsverwaltungsabteilung des Organs für öffentliche Sicherheit verständigen. Muss der Fundort wegen der Rettung verletzter Personen verändert werden, soll die Position gekennzeichnet werden." Abs. 2: „Ist kein Personenschaden entstanden und besteht zwischen den Beteiligten kein Streit über die Tatsachen und deren Ursache, können sie den Fundort sofort verlassen, den Verkehr wiederherstellen und die Schadensersatzfrage selbst aushandeln"; Abs. 3: „Ist nur ein geringer Sachschaden entstanden und ist der Sachverhalt im Wesentlichen klar, sollen die Beteiligten zuerst den Fundort verlassen und dann die Sache aushandeln."
- Der vollständige Text von Art. 91 in fünf Absätzen wurde lokalisiert: „Wer ein Kraftfahrzeug nach Alkoholkonsum führt, wird mit einem sechsmonatigen Entzug der Fahrerlaubnis für Kraftfahrzeuge und zusätzlich mit einem Bußgeld von über 1.000 元 bis 2.000 元 bestraft. Wer wegen des Führens eines Kraftfahrzeugs nach Alkoholkonsum bestraft wurde und erneut ein Kraftfahrzeug nach Alkoholkonsum führt, wird mit Haft von höchstens zehn Tagen und zusätzlich mit einem Bußgeld von über 1.000 元 bis 2.000 元 bestraft, die Fahrerlaubnis für Kraftfahrzeuge wird entzogen." „Wer ein Kraftfahrzeug im Zustand der Trunkenheit führt, … dem wird die Fahrerlaubnis für Kraftfahrzeuge entzogen, die strafrechtliche Verantwortung wird nach dem Gesetz verfolgt; binnen fünf Jahren darf keine neue Fahrerlaubnis für Kraftfahrzeuge erworben werden." „Wer ein Betriebs-Kraftfahrzeug nach Alkoholkonsum führt, wird mit 15 Tagen Haft und einem Bußgeld von 5.000 元 bestraft, die Fahrerlaubnis für Kraftfahrzeuge wird entzogen, binnen fünf Jahren darf keine neue erworben werden" „Wer ein Betriebs-Kraftfahrzeug im Zustand der Trunkenheit führt, … binnen zehn Jahren darf keine neue Fahrerlaubnis für Kraftfahrzeuge erworben werden, und nach dem erneuten Erwerb der Fahrerlaubnis für Kraftfahrzeuge darf er keine Betriebs-Kraftfahrzeuge führen." „Wer nach Alkoholkonsum oder im Zustand der Trunkenheit ein Kraftfahrzeug führt und einen schweren Verkehrsunfall verursacht, der einen Straftatbestand erfüllt, … darf lebenslang keine neue Fahrerlaubnis für Kraftfahrzeuge erwerben."
- Art. 101 Abs. 2: „Wer nach einem Verkehrsunfall flieht, dem wird von der Verkehrsverwaltungsabteilung des Organs für öffentliche Sicherheit die Fahrerlaubnis für Kraftfahrzeuge entzogen, und er darf lebenslang keine neue Fahrerlaubnis für Kraftfahrzeuge erwerben."
- Bei der Suche nach der Volltextseite der Fassung von 2021 auf npc.gov.cn / gov.cn wurde kein aufrufbarer Direktlink gefunden (die Seite mit dem Präsidialerlass Nr. 81 auf gov.cn enthält nur die Änderungsentscheidung), deshalb wird die Wiedergabeseite der Verkehrsverwaltung Peking zitiert und in der Quellenspalte vermerkt.

### 2. Durchführungsbestimmungen zum Straßenverkehrssicherheitsgesetz [道路交通安全法实施条例] (Änderung von 2017)
- URL: <http://xzfg.moj.gov.cn/front/law/detail?LawID=75> (Datenbank der staatlichen Verwaltungsvorschriften des Justizministeriums)
- Versionszeile auf der Seite: „Am 30. April 2004 mit der Verordnung Nr. 405 des Staatsrats der Volksrepublik China bekannt gemacht, geändert aufgrund der ‚Entscheidung des Staatsrats über die Änderung einiger Verwaltungsvorschriften' vom 7. Oktober 2017". Bestätigt.
- Art. 92: „Flieht ein Beteiligter nach einem Verkehrsunfall, trägt der fliehende Beteiligte die volle Verantwortung. Beweisen die Beweise jedoch, dass auch der andere Beteiligte ein Verschulden trifft, kann die Verantwortung gemindert werden. Zerstört oder verfälscht ein Beteiligter absichtlich den Fundort oder vernichtet er Beweise, trägt er die volle Verantwortung."
- Art. 86: „Kommt es zwischen einem Kraftfahrzeug und einem Kraftfahrzeug oder zwischen einem Kraftfahrzeug und einem Nicht-Kraftfahrzeug auf der Straße zu einem Verkehrsunfall ohne Personenschaden und besteht zwischen den Beteiligten kein Streit über die Tatsachen und deren Ursache, so sollen sie, nachdem sie Zeit und Ort des Verkehrsunfalls, Name und Kontaktdaten des anderen Beteiligten, das Kennzeichen des Kraftfahrzeugs, die Nummer der Fahrerlaubnis, die Nummer des Versicherungsnachweises und die Anstoßstelle festgehalten und gemeinsam unterschrieben haben, den Fundort verlassen und die Schadensersatzfrage selbst aushandeln."

### 3. Strafgesetzbuch [刑法] (Fassung der Änderung von 1997)
- URL: <https://www.spp.gov.cn/spp/fl/201802/t20180206_364975.shtml> (Gesetzes- und Vorschriftendatenbank der Obersten Staatsanwaltschaft)
- Seitentitel „Strafgesetzbuch der Volksrepublik China (Änderung von 1997)". Bestätigt. Die in diesem Abschnitt zitierten Art. 20, 133, 234, 243, 258 und 266 wurden seit 1997 durch keines der aufeinanderfolgenden Änderungsgesetze im Wortlaut geändert (Abgleich der Änderungsseiten siehe unten), bei Art. 246 wurde durch das Änderungsgesetz (Neun) ein Abs. 3 angefügt.
- Art. 20: „… gilt als Notwehr, es besteht keine strafrechtliche Verantwortung. Überschreitet die Notwehr offensichtlich die notwendige Grenze und verursacht einen schweren Schaden, soll strafrechtliche Verantwortung bestehen, die Strafe soll jedoch gemildert oder erlassen werden."
- Art. 133: „… wird mit Freiheitsstrafe bis zu drei Jahren oder Haft bestraft; flieht jemand nach der Verursachung eines Verkehrsunfalls oder liegen andere besonders schwerwiegende Umstände vor, wird er mit Freiheitsstrafe von drei bis sieben Jahren bestraft; verursacht die Flucht den Tod eines Menschen, wird er mit Freiheitsstrafe von über sieben Jahren bestraft."
- Art. 234: „Wer absichtlich den Körper eines anderen verletzt, wird mit Freiheitsstrafe bis zu drei Jahren, Haft oder Kontrolle bestraft. Wer die Tat des vorstehenden Absatzes begeht und einen schweren Körperschaden verursacht, wird mit Freiheitsstrafe von drei bis zehn Jahren bestraft"
- Art. 243: „Wer Tatsachen erfindet und einen anderen falsch beschuldigt und in eine Falle lockt, in der Absicht, den anderen strafrechtlich zu belangen, und sind die Umstände schwer, wird er mit Freiheitsstrafe bis zu drei Jahren, Haft oder Kontrolle bestraft; verursacht er einen schweren Schaden, wird er mit Freiheitsstrafe von drei bis zehn Jahren bestraft. … Handelt es sich nicht um eine absichtliche Falschbeschuldigung, sondern um eine falsche Anzeige, oder ist eine Meldung sachlich unrichtig, gelten die vorstehenden zwei Absätze nicht."
- Art. 246: „Wer mit Gewalt oder anderen Mitteln einen anderen öffentlich beleidigt oder Tatsachen erfindet und einen anderen verleumdet, wird, wenn die Umstände schwer sind, mit Freiheitsstrafe bis zu drei Jahren, Haft, Kontrolle oder Aberkennung politischer Rechte bestraft. Die Tat des vorstehenden Absatzes wird nur auf Klage verfolgt, außer wenn sie die öffentliche Ordnung und die Staatsinteressen schwer schädigt."
- Art. 258: „Wer einen Ehepartner hat und Bigamie begeht oder wer wissentlich mit einem anderen, der einen Ehepartner hat, die Ehe schließt, wird mit Freiheitsstrafe bis zu zwei Jahren oder Haft bestraft."
- Art. 266: „Wer öffentliches oder privates Vermögen betrügt und die Summe ist verhältnismäßig groß, wird mit Freiheitsstrafe bis zu drei Jahren, Haft oder Kontrolle und zusätzlich oder allein mit Geldstrafe bestraft; ist die Summe groß oder liegen andere schwere Umstände vor, wird er mit Freiheitsstrafe von drei bis zehn Jahren und mit Geldstrafe bestraft; ist die Summe besonders groß oder liegen andere besonders schwere Umstände vor, wird er mit Freiheitsstrafe von über zehn Jahren oder lebenslanger Freiheitsstrafe und mit Geldstrafe oder Einziehung des Vermögens bestraft."

### 4. Änderungsgesetz (Neun) zum Strafgesetzbuch
- URL: <https://www.spp.gov.cn/spp/fl/201802/t20180205_364562.shtml>
- Seitentitel „Änderungsgesetz (Neun) zum Strafgesetzbuch der Volksrepublik China", angenommen am 29. August 2015. Bestätigt.
- Art. 8: „Art. 133a des Strafgesetzbuchs wird wie folgt geändert: ‚Wer auf der Straße ein Kraftfahrzeug führt und einer der folgenden Umstände liegt vor, wird mit Haft und mit Geldstrafe bestraft: (1) Wettrennen fahren mit schwerwiegenden Umständen; (2) Führen eines Kraftfahrzeugs im Zustand der Trunkenheit; …'"
- Art. 16: „In Art. 246 des Strafgesetzbuchs wird ein Absatz als dritter Absatz angefügt: ‚Begeht jemand über Informationsnetze die im Abs. 1 bestimmte Tat, und erhebt das Opfer beim Volksgericht Klage, hat aber tatsächlich Schwierigkeiten, Beweise beizubringen, kann das Volksgericht das Organ für öffentliche Sicherheit um Unterstützung ersuchen.'"
- Art. 29: „… Art. 287a: Wer wissentlich, dass ein anderer über Informationsnetze eine Straftat begeht, für dessen Straftat technische Unterstützung wie Internetzugang, Server-Hosting, Netzwerkspeicherung und Datenübertragung gewährt oder Hilfe wie Werbung, Verbreitung und Zahlungsabwicklung leistet und die Umstände sind schwer, wird mit Freiheitsstrafe bis zu drei Jahren oder Haft und zusätzlich oder allein mit Geldstrafe bestraft."
- Zusätzlich wurde die Seite des Änderungsgesetzes (Elf) zum Strafgesetzbuch <https://www.spp.gov.cn/spp/fl/202012/t20201227_503700.shtml> geprüft: dessen Art. 2 lautet „Nach Art. 133a des Strafgesetzbuchs wird ein Artikel als Art. 133b angefügt" (Störung des sicheren Fahrens), die in diesem Abschnitt zitierten Artikel wurden nicht geändert.

### 5. Musterbedingungen der chinesischen Versicherungsbranche für die gewerbliche Kfz-Versicherung [中国保险行业协会机动车商业保险示范条款] (Fassung von 2020)
- URL der Mitteilungsseite: <https://www.iachina.cn/art/2020/9/4/art_24_104621.html>, Titel „Mitteilung über die Veröffentlichung der ‚Musterbedingungen der chinesischen Versicherungsbranche für die gewerbliche Kfz-Versicherung (Fassung von 2020)' und vier weiterer Musterbedingungen für die gewerbliche Kfz-Versicherung", 2020-09-04. Bestätigt.
- PDF-Anhang: <http://www.iachina.cn/module/download/downfile.jsp?classid=0&filename=b5177d860ab04959b2f5c8fd60271da8.pdf> (mit WebFetch heruntergeladen, Text mit pypdf extrahiert). Titel der ersten Seite „Musterbedingungen der chinesischen Versicherungsbranche für die gewerbliche Kfz-Versicherung (Fassung von 2020)".
- Kfz-Kaskoversicherung · Haftungsausschluss · Art. 9: „… (1) nach dem Unfall zerstört oder verfälscht der Versicherte oder der Fahrer absichtlich den Fundort und vernichtet Beweise; (2) der Fahrer fällt unter einen der folgenden Umstände: 1. Flucht nach einem Verkehrsunfall; 2. Alkoholkonsum, Konsum oder Injektion von Drogen, Einnahme staatlich kontrollierter psychotroper oder Betäubungsmittel; 3. keine Fahrerlaubnis oder während die Fahrerlaubnis nach dem Gesetz zurückbehalten, vorläufig entzogen, entzogen oder gelöscht ist; 4. Führen eines Kraftfahrzeugs, das nicht der in der Fahrerlaubnis vermerkten Fahrzeugklasse entspricht."
- Kfz-Haftpflichtversicherung für Dritte · Haftungsausschluss · Art. 22: dieselben vier Punkte, zusätzlich „5. ein Fahrer, der nicht vom Versicherten gestattet ist".

### 6. Gesetz zur Bekämpfung von Telekommunikations- und Internetbetrug [反电信网络诈骗法]
- URL: <https://www.spp.gov.cn/spp/fl/202209/t20220902_575631.shtml>
- Auf der Seite: „(angenommen am 2. September 2022 von der 36. Sitzung des Ständigen Ausschusses des 13. Nationalen Volkskongresses)", Inkrafttreten 2022-12-01. Bestätigt.
- Art. 20: „Die Abteilung für öffentliche Sicherheit des Staatsrats errichtet und vervollständigt gemeinsam mit den zuständigen Stellen das System der sofortigen Abfrage, des dringenden Zahlungsstopps, der schnellen Sperrung, der rechtzeitigen Entsperrung und der Rückgabe der Gelder, die in Telekommunikations- und Internetbetrugsfälle verwickelt sind, und legt die betreffenden Voraussetzungen, Verfahren und Rechtsbehelfe fest. Entscheidet das Organ für öffentliche Sicherheit nach dem Gesetz, die genannten Maßnahmen zu ergreifen, sollen Bankfinanzinstitute und Nichtbank-Zahlungsinstitute mitwirken."
- Art. 31 Abs. 1: „Jede Einheit und jede Person darf Telefonkarten, IoT-Karten, Telekommunikationsleitungen, SMS-Ports, Bankkonten, Zahlungskonten, Internetkonten und dergleichen nicht rechtswidrig kaufen, verkaufen, vermieten oder verleihen und darf keine Hilfe bei der Echtheitsprüfung mit Klarnamen leisten"; Abs. 2: „… kann nach den einschlägigen Vorschriften des Staates in der Kreditakte vermerkt werden, Maßnahmen wie die Beschränkung der Funktionen der betreffenden Karten, Konten und Benutzerkonten und die Einstellung des Geschäfts außerhalb des Schalters, die Aussetzung neuer Geschäfte und die Beschränkung des Netzzugangs werden ergriffen."
- Art. 34: „… bei Telekommunikations- und Internetbetrugsfällen soll die Verfolgung des Diebesguts und die Wiederherstellung des Schadens verstärkt, das System zur Behandlung der betroffenen Gelder vervollständigt und das rechtmäßige Vermögen der Opfer rechtzeitig zurückgegeben werden."
- Art. 44: „Wer gegen Art. 31 Abs. 1 dieses Gesetzes verstößt, dessen rechtswidrige Einnahmen werden eingezogen, das Organ für öffentliche Sicherheit verhängt ein Bußgeld vom Einfachen bis zum Zehnfachen der rechtswidrigen Einnahmen; gibt es keine rechtswidrigen Einnahmen oder betragen sie weniger als 20.000 元, wird ein Bußgeld von höchstens 200.000 元 verhängt; sind die Umstände schwer, wird zusätzlich Haft von höchstens fünfzehn Tagen verhängt."

### 7. Öffentliches Sicherheitsamt der Provinz Fujian, „Der Anruf von 96110 muss unbedingt angenommen werden"
- URL: <http://gat.fujian.gov.cn/ztzl/fjjffpzxrx/spjq/202303/t20230306_6126156.htm> (Organ für öffentliche Sicherheit auf Provinzebene, lokale offizielle Website)
- WebFetch bestätigt den Titel, die herausgebende Stelle Öffentliches Sicherheitsamt der Provinz Fujian und den 2023-03-06. Originaltext: „96110 ist die landesweit einheitliche Warn-Hotline gegen Betrug und Betrugsprävention. Ihre Aufgabe ist ausschließlich die Warnung und das Abraten bei Telekommunikations- und Internetbetrug" „Wenn du betrogen wurdest, ruf bitte die Betrugs-Hotline 96110 an".
- Drei einschlägige Seiten der offiziellen Website des Ministeriums für öffentliche Sicherheit (c9081538, c10113457, c9257177) lieferten über WebFetch alle HTTP 521, auch curl blieb leer, sie wurden nicht bestätigt, deshalb wird es im Haupttext in der Anmerkung vermerkt.

### 8. Strafprozessgesetz [刑事诉讼法] (Änderung von 2018)
- URL: <https://www.spp.gov.cn/zdgz/201810/t20181027_396818.shtml>
- Seitentitel „Strafprozessgesetz der Volksrepublik China", Fassung der dritten Änderung vom 26. Oktober 2018. Bestätigt.
- Art. 34: „Ein Tatverdächtiger hat ab dem Tag, an dem er vom Ermittlungsorgan erstmals verhört oder eine Zwangsmaßnahme gegen ihn ergriffen wird, das Recht, einen Verteidiger zu beauftragen; während der Ermittlung darf er nur einen Rechtsanwalt als Verteidiger beauftragen."
- Art. 35: „Hat ein Tatverdächtiger oder Angeklagter wegen wirtschaftlicher Schwierigkeiten oder aus anderen Gründen keinen Verteidiger beauftragt, können er selbst und seine nahen Angehörigen bei der Rechtshilfeeinrichtung einen Antrag stellen."
- Art. 39: „… die Haftanstalt soll das Treffen rechtzeitig arrangieren, spätestens jedoch innerhalb von achtundvierzig Stunden." „Ein Verteidigungsanwalt wird beim Treffen mit dem Tatverdächtigen oder Angeklagten nicht abgehört."
- Art. 52: „… Folter zur Erpressung eines Geständnisses und die Beweiserhebung durch Drohung, Verlockung, Täuschung und andere rechtswidrige Methoden sind streng verboten, niemand darf gezwungen werden, seine eigene Schuld zu beweisen."
- Art. 119: „Die Dauer einer Vorladung oder zwangsweisen Vorführung darf zwölf Stunden nicht überschreiten; ist der Fall besonders schwer und komplex und sind Maßnahmen der Haft oder Verhaftung erforderlich, darf die Dauer einer Vorladung oder zwangsweisen Vorführung vierundzwanzig Stunden nicht überschreiten. Ein Tatverdächtiger darf nicht in Form aufeinanderfolgender Vorladungen oder zwangsweiser Vorführungen verdeckt festgehalten werden."
- Art. 120: „Ein Tatverdächtiger soll auf die Fragen des Ermittlungsbeamten wahrheitsgemäß antworten. Bei Fragen, die mit diesem Fall nichts zu tun haben, hat er jedoch das Recht, die Antwort zu verweigern."

### 9. Staatliches Entschädigungsgesetz [国家赔偿法] (Änderung von 2012)
- URL: <https://www.stats.gov.cn/gk/tjfg/xgfxfg/202503/t20250306_1958899.html> (Wiedergabe des Staatlichen Statistikamts, die Quelle ist mit Nationale Datenbank für Gesetze und Vorschriften angegeben)
- Versionszeile auf der Seite: „Zweite Änderung aufgrund der ‚Entscheidung über die Änderung des staatlichen Entschädigungsgesetzes der Volksrepublik China' der 29. Sitzung des Ständigen Ausschusses des 11. Nationalen Volkskongresses vom 26. Oktober 2012". Bestätigt.
- Art. 17: „(1) Wird gegen einen Bürger unter Verstoß gegen die Vorschriften des Strafprozessgesetzes eine Haftmaßnahme ergriffen … und wird danach entschieden, den Fall zurückzuziehen, keine Anklage zu erheben oder durch Urteil auf Freispruch zu erkennen und die strafrechtliche Verfolgung zu beenden; (2) wird gegen einen Bürger eine Verhaftung ergriffen und danach entschieden, den Fall zurückzuziehen, keine Anklage zu erheben oder durch Urteil auf Freispruch zu erkennen und die strafrechtliche Verfolgung zu beenden"
- Art. 33: „Wird die persönliche Freiheit eines Bürgers verletzt, wird die tägliche Entschädigung nach dem durchschnittlichen Tageslohn der Arbeitnehmer des Staates im Vorjahr berechnet."

### 10. Gesetz über Ordnungswidrigkeiten der öffentlichen Sicherheit [治安管理处罚法] (Änderung von 2025)
- URL: <https://www.spp.gov.cn/spp/fl/202506/t20250627_699863.shtml>; die Seite des Präsidialerlasses Nr. 49 <https://www.gov.cn/yaowen/liebiao/202506/content_7029685.htm> (bestätigt die Annahme der Änderung am 2025-06-27 und das Inkrafttreten am 2026-01-01)
- Versionszeile auf der Seite: „Geändert am 27. Juni 2025 von der 16. Sitzung des Ständigen Ausschusses des 14. Nationalen Volkskongresses". Bestätigt, die Artikelnummern richten sich nach dem neuen Gesetz.
- Art. 29: „Wer eine der folgenden Handlungen begeht, wird mit Haft von fünf bis zehn Tagen bestraft, daneben kann ein Bußgeld von höchstens 1.000 元 verhängt werden; sind die Umstände leichter, wird er mit Haft von höchstens fünf Tagen oder einem Bußgeld von höchstens 1.000 元 bestraft: (1) absichtliches Verbreiten von Gerüchten, wahrheitswidriges Melden von Gefahrenlagen, Seuchenlagen, Katastrophenlagen oder Polizeilagen oder absichtliches Stören der öffentlichen Ordnung mit anderen Methoden"
- Art. 30: „Wer eine der folgenden Handlungen begeht, wird mit Haft von fünf bis zehn Tagen oder einem Bußgeld von höchstens 1.000 元 bestraft; sind die Umstände schwerer, wird er mit Haft von zehn bis fünfzehn Tagen bestraft, daneben kann ein Bußgeld von höchstens 2.000 元 verhängt werden: (1) sich zusammenschließen und Raufereien anzetteln oder andere willkürlich schlagen"
- Art. 50: „Wer eine der folgenden Handlungen begeht, wird mit Haft von höchstens fünf Tagen oder einem Bußgeld von höchstens 1.000 元 bestraft; sind die Umstände schwerer, wird er mit Haft von fünf bis zehn Tagen bestraft, daneben kann ein Bußgeld von höchstens 1.000 元 verhängt werden: … (2) einen anderen öffentlich beleidigen oder Tatsachen erfinden und ihn verleumden; … (5) wiederholt obszöne, beleidigende oder einschüchternde Nachrichten senden oder mit Methoden wie Belästigung, Nachstellen oder Verfolgen das normale Leben eines anderen stören; (6) die Privatsphäre eines anderen ausspähen, heimlich fotografieren, abhören oder verbreiten."
- Art. 51: „Wer einen anderen schlägt oder absichtlich den Körper eines anderen verletzt, wird mit Haft von fünf bis zehn Tagen und zusätzlich mit einem Bußgeld von 500 元 bis 1.000 元 bestraft; sind die Umstände leichter, wird er mit Haft von höchstens fünf Tagen oder einem Bußgeld von höchstens 1.000 元 bestraft. Liegt einer der folgenden Umstände vor, wird er mit Haft von zehn bis fünfzehn Tagen und zusätzlich mit einem Bußgeld von 1.000 元 bis 2.000 元 bestraft: (1) sich zusammenschließen und einen anderen schlagen oder verletzen; (2) einen behinderten Menschen, eine Schwangere, eine Person unter vierzehn Jahren oder eine Person über siebzig Jahren schlagen oder verletzen; (3) wiederholt einen anderen schlagen oder verletzen oder in einem Fall mehrere Menschen schlagen oder verletzen."

### 11. Leitlinien zur Anwendung des Rechtsinstituts der Notwehr nach dem Gesetz [关于依法适用正当防卫制度的指导意见]
- URL: <https://www.court.gov.cn/zixun/xiangqing/251611.html> (offizielle Website des Obersten Volksgerichts, WebFetch bestätigt Titel, Aktenzeichen Justizdokument (法发〔2020〕31 号) und 2020-08-28); zur Lokalisierung der Absätze des Volltexts wurde die Wiedergabeseite der Obersten Staatsanwaltschaft <https://www.spp.gov.cn/spp/xwfbh/wsfbt/202009/t20200903_478676.shtml> verwendet
- Art. 6: „Hat der rechtswidrige Angreifer tatsächlich die Angriffsfähigkeit verloren oder den Angriff tatsächlich aufgegeben, soll angenommen werden, dass der rechtswidrige Angriff beendet ist."
- Art. 9: „Kommt es wegen einer Kleinigkeit zu einem Streit und löst dieser, weil keine Seite sich beherrschen kann, eine Rauferei aus, so soll die Handlung der zurückschlagenden Seite in der Regel als Verteidigungshandlung anerkannt werden, wenn die schuldhafte Seite zuerst zuschlägt und ihre Mittel offensichtlich übermäßig sind oder eine Seite zuerst zuschlägt und den Angriff fortsetzt, obwohl die andere Seite sich bemüht, den Konflikt zu vermeiden."
- Art. 11: „Für die Feststellung einer Notwehrüberschreitung müssen zugleich die beiden Voraussetzungen ‚offensichtliches Überschreiten der notwendigen Grenze' und ‚Verursachung eines schweren Schadens' vorliegen, keine darf fehlen."
- Art. 14: „Bei Notwehrüberschreitung soll strafrechtliche Verantwortung bestehen, die Strafe soll jedoch gemildert oder erlassen werden."
- Der alte Link <https://www.court.gov.cn/zixun-xiangqing-251611.html> ist jetzt 404, der Haupttext zitiert den neuen Pfad.

### 12. Zivilgesetzbuch [民法典]
- URL: <https://www.spp.gov.cn/spp/fl/202006/t20200602_463888.shtml> (Gesetzes- und Vorschriftendatenbank der Obersten Staatsanwaltschaft; bei gov.cn führen der neue und der alte Pfad von content_5516649 beide zu 404, bei der Seite auf npc.gov.cn schlägt der SSL-Handshake fehl)
- Seitentitel „Zivilgesetzbuch der Volksrepublik China", angenommen am 28. Mai 2020. Bestätigt.
- Art. 465: „Ein nach dem Gesetz zustande gekommener Vertrag wird vom Gesetz geschützt. Ein nach dem Gesetz zustande gekommener Vertrag hat rechtliche Bindungswirkung nur für die Parteien, außer wenn das Gesetz etwas anderes bestimmt."
- Art. 509: „Die Parteien sollen ihre Pflichten nach der Vereinbarung vollständig erfüllen."
- Art. 658: „Der Schenker kann die Schenkung widerrufen, bevor das Recht am geschenkten Vermögen übergeht. Für einen notariell beurkundeten Schenkungsvertrag oder einen nach dem Gesetz nicht widerruflichen Schenkungsvertrag mit dem Charakter einer Gemeinwohl- oder sittlichen Verpflichtung wie Katastrophenhilfe, Armutsbekämpfung und Behindertenhilfe gilt die vorstehende Bestimmung nicht."
- Art. 663: „Liegt beim Beschenkten einer der folgenden Umstände vor, kann der Schenker die Schenkung widerrufen: (1) er verletzt die rechtmäßigen Interessen des Schenkers oder der nahen Angehörigen des Schenkers schwer; (2) er hat gegenüber dem Schenker eine Unterhaltspflicht und erfüllt sie nicht; (3) er erfüllt die im Schenkungsvertrag vereinbarte Pflicht nicht."
- Art. 668: „Der Darlehensvertrag soll in schriftlicher Form geschlossen werden, außer wenn natürliche Personen für ein Darlehen etwas anderes vereinbaren. Der Inhalt des Darlehensvertrags umfasst in der Regel Bestimmungen wie Art des Darlehens, Währung, Verwendungszweck, Betrag, Zinssatz, Laufzeit und Rückzahlungsweise."
- Art. 681: Definition des Bürgschaftsvertrags. Art. 686: „Haben die Parteien im Bürgschaftsvertrag die Art der Bürgschaft nicht vereinbart oder ist die Vereinbarung unklar, wird die Bürgschaftsverantwortung als gewöhnliche Bürgschaft getragen." Art. 687: „Der Bürge einer gewöhnlichen Bürgschaft hat das Recht, die Übernahme der Bürgschaftsverantwortung gegenüber dem Gläubiger zu verweigern, bevor der Streit über den Hauptvertrag nicht durch Gerichtsurteil oder Schiedsspruch entschieden und das Vermögen des Schuldners nach dem Gesetz zwangsvollstreckt wurde und die Schuld dennoch nicht erfüllt werden kann"
- Art. 1042: „Arrangierte Ehen, der Handel mit Ehen und andere Handlungen, die die Freiheit der Eheschließung beeinträchtigen, sind verboten. Es ist verboten, anlässlich einer Ehe Vermögen zu fordern. Bigamie ist verboten."
- Art. 1051: „In einem der folgenden Fälle ist die Ehe nichtig: (1) Bigamie; (2) ein Verwandtschaftsverhältnis, das die Eheschließung verbietet; (3) das gesetzliche Eheschließungsalter ist nicht erreicht."
- Art. 1063: „Folgendes Vermögen ist persönliches Vermögen eines Ehegatten: (1) das Vermögen eines Ehegatten vor der Ehe; …"
- Art. 1065: „Mann und Frau können vereinbaren, dass das während der Dauer der Ehe erworbene Vermögen und das Vermögen vor der Ehe jeweils getrennt, gemeinsam oder teils getrennt und teils gemeinsam gehören. Die Vereinbarung soll in schriftlicher Form erfolgen. … Die Vereinbarung der Ehegatten über das während der Dauer der Ehe erworbene Vermögen und das Vermögen vor der Ehe ist für beide Seiten rechtlich bindend. Haben die Ehegatten vereinbart, dass das während der Dauer der Ehe erworbene Vermögen jeweils getrennt gehört, werden Schulden, die der Mann oder die Frau gegenüber Dritten eingeht, aus dem persönlichen Vermögen dieses Ehegatten beglichen, wenn der andere Teil die Vereinbarung kennt."
- Art. 1092: „Verbirgt, überträgt, veräußert oder zerstört ein Ehegatte das gemeinsame Vermögen der Ehegatten oder vergeudet es, oder erfindet er gemeinsame Schulden der Ehegatten, um sich Vermögen des anderen Ehegatten anzueignen, kann ihm bei der Aufteilung des gemeinsamen Vermögens der Ehegatten anlässlich der Scheidung ein geringerer Anteil oder kein Anteil zugeteilt werden."

### 13. Regelung des Obersten Volksgerichts zu Streitigkeiten um den Brautpreis (Justizauslegung 法释〔2024〕1 号)
- URL: <https://www.court.gov.cn/fabu/xiangqing/423442.html>
- Titel, Aktenzeichen Justizauslegung (法释〔2024〕1 号), Annahme am 2023-11-13 und Inkrafttreten am 2024-02-01 wurden bestätigt.
- Art. 2: „Es ist verboten, anlässlich einer Ehe Vermögen zu fordern. Fordert eine Seite unter dem Namen des Brautpreises anlässlich der Ehe Vermögen und verlangt die andere Seite die Rückgabe, soll das Volksgericht dies unterstützen."
- Art. 3: „Vermögen, das in den folgenden Fällen zugewendet wird, gilt nicht als Brautpreis: (1) Geschenke und Geldgeschenke von geringem Wert, die eine Seite zu Zeitpunkten mit besonderer Erinnerungsbedeutung wie Feiertagen und Geburtstagen zuwendet; (2) alltägliche Konsumausgaben einer Seite, um Zuneigung auszudrücken oder zu fördern; (3) anderes Vermögen von geringem Wert."
- Art. 5: „Haben beide Seiten die Eheschließungsregistrierung vorgenommen und leben sie zusammen, unterstützt das Volksgericht bei der Scheidung einen Antrag einer Seite auf Rückgabe des nach dem Brauch zugewendeten Brautpreises in der Regel nicht. Ist die Zeit des Zusammenlebens jedoch kurz und der Betrag des Brautpreises übermäßig hoch, kann das Volksgericht nach der tatsächlichen Verwendung des Brautpreises und der Mitgift unter umfassender Berücksichtigung von Tatsachen wie dem Betrag des Brautpreises, dem Zusammenleben und einer Schwangerschaft sowie dem Verschulden beider Seiten und in Verbindung mit den örtlichen Bräuchen feststellen, ob zurückgegeben wird und zu welchem konkreten Anteil. Bei der Feststellung, ob der Betrag des Brautpreises übermäßig hoch ist, soll das Volksgericht Faktoren wie das durchschnittlich verfügbare Einkommen der Einwohner am Ort des Brautpreisgebers, die wirtschaftlichen Verhältnisse der Familie des Gebers und die örtlichen Bräuche umfassend berücksichtigen."
- Art. 6: „Haben beide Seiten die Eheschließungsregistrierung nicht vorgenommen, leben aber bereits zusammen, soll das Volksgericht bei einem Antrag einer Seite auf Rückgabe des nach dem Brauch zugewendeten Brautpreises nach der tatsächlichen Verwendung des Brautpreises und der Mitgift … feststellen, ob zurückgegeben wird und zu welchem konkreten Anteil."

### 14. Auslegung (Erste) zum Buch Ehe und Familie des Zivilgesetzbuchs [民法典婚姻家庭编解释（一）] (Justizauslegung 法释〔2020〕22 号)
- URL: <https://www.court.gov.cn/fabu/xiangqing/282071.html>
- Titel, Aktenzeichen und Inkrafttreten am 2021-01-01 wurden bestätigt.
- Art. 5: „Verlangt eine Partei die Rückgabe des nach dem Brauch zugewendeten Brautpreises, soll das Volksgericht dies unterstützen, wenn einer der folgenden Umstände festgestellt wird: (1) beide Seiten haben die Eheschließungsregistrierung nicht vorgenommen; (2) beide Seiten haben die Eheschließungsregistrierung vorgenommen, leben aber tatsächlich nicht zusammen; (3) die Zuwendung erfolgte vor der Ehe und führte beim Zuwendenden zu wirtschaftlichen Schwierigkeiten. Die Anwendung der Nr. 2 und Nr. 3 des vorstehenden Absatzes setzt voraus, dass beide Seiten geschieden werden."
- Art. 29: „Leisten die Eltern vor der Eheschließung der Parteien einen Beitrag zum Erwerb eines Hauses für beide Seiten, soll dieser Beitrag als Schenkung an das eigene Kind angesehen werden, außer wenn die Eltern ausdrücklich erklären, beiden Seiten zu schenken. Leisten die Eltern nach der Eheschließung der Parteien einen Beitrag zum Erwerb eines Hauses für beide Seiten, wird nach der Vereinbarung verfahren; gibt es keine Vereinbarung oder ist sie unklar, wird nach dem in Art. 1062 Abs. 1 Nr. 4 des Zivilgesetzbuchs bestimmten Grundsatz verfahren."
- Art. 31: „Vermögen, das Art. 1063 des Zivilgesetzbuchs als persönliches Vermögen eines Ehegatten bestimmt, wandelt sich durch den Fortbestand der Ehe nicht in gemeinsames Vermögen der Ehegatten um. Etwas anderes gilt, wenn die Parteien etwas anderes vereinbart haben."
- Art. 32: „Vereinbaren die Parteien vor der Ehe oder während der Ehe, dass eine Seite ihre Immobilie der anderen Seite schenkt oder dass sie gemeinsam gehört, und widerruft die schenkende Seite die Schenkung vor der Änderung der Registrierung der geschenkten Immobilie, während die andere Seite verlangt, zur weiteren Erfüllung verurteilt zu werden, kann das Volksgericht nach der Bestimmung des Art. 658 des Zivilgesetzbuchs verfahren."

### 15. Gesellschaftsgesetz [公司法] (Änderung von 2023)
- URL: <https://www.gov.cn/yaowen/liebiao/202312/content_6923395.htm>
- Titel „Gesellschaftsgesetz der Volksrepublik China", Annahme der Änderung am 2023-12-29, Inkrafttreten am 2024-07-01. Bestätigt.
- Art. 10: „Der gesetzliche Vertreter der Gesellschaft wird nach den Bestimmungen der Satzung der Gesellschaft von dem Direktor oder dem Geschäftsführer wahrgenommen, der die Gesellschaft bei der Ausführung der Geschäfte der Gesellschaft vertritt. … Tritt der gesetzliche Vertreter zurück, soll die Gesellschaft innerhalb von dreißig Tagen ab dem Tag des Rücktritts des gesetzlichen Vertreters einen neuen gesetzlichen Vertreter bestimmen."
- Art. 11: „Fügt der gesetzliche Vertreter bei der Ausführung seiner Amtspflichten einem anderen einen Schaden zu, trägt die Gesellschaft die zivilrechtliche Verantwortung. Nachdem die Gesellschaft die zivilrechtliche Verantwortung getragen hat, kann sie nach den Bestimmungen des Gesetzes oder der Satzung der Gesellschaft von dem schuldhaften gesetzlichen Vertreter Rückgriff nehmen."
- Art. 180: „Direktoren, Aufsichtsratsmitglieder und leitende Angestellte haben gegenüber der Gesellschaft eine Treuepflicht … sie haben gegenüber der Gesellschaft eine Sorgfaltspflicht und sollen bei der Ausführung ihrer Amtspflichten im größten Interesse der Gesellschaft die Sorgfalt walten lassen, die ein Manager üblicherweise aufbringen soll."
- Art. 191: „Fügen Direktoren oder leitende Angestellte bei der Ausführung ihrer Amtspflichten einem anderen einen Schaden zu, soll die Gesellschaft die Ersatzpflicht tragen; liegen bei den Direktoren oder leitenden Angestellten Vorsatz oder grobe Fahrlässigkeit vor, sollen auch sie die Ersatzpflicht tragen."

### 16. Konsularabteilung des Außenministeriums, „Welche Empfehlungen gibt es für chinesische Staatsbürger, die ins Ausland reisen wollen"
- URL: <https://cs.mfa.gov.cn/gyls/lscs/201106/t20110615_876383.shtml> (chinesischer konsularischer Dienst, Außenministerium)
- WebFetch bestätigt den Titel, die herausgebende Stelle und die Aktualisierung am 2023-10-10. Originaltext: „Bitte vermeide unbedingt, für andere Gepäck oder Gegenstände zu transportieren, insbesondere verbotene Gegenstände oder Gegenstände, die du nicht kennst."
- Die Seite „Grundkenntnisse zur Sicherheit chinesischer Bürger im Ausland" [中国公民海外安全常识] von 2011 auf derselben Website (t841042.shtml) leitet mit 302 auf eine Fehlerseite weiter, nicht bestätigt, nicht zitiert.

## Nicht bestätigte, nicht verwendete Quellen
- Volltextseite des Zivilgesetzbuchs auf gov.cn (die beiden Pfade /xinwen/ und /zhengce/): 404.
- Seiten des Zivilgesetzbuchs und des Gesellschaftsgesetzes auf npc.gov.cn: SSL-Handshake schlägt fehl.
- Seiten auf gongbao.court.gov.cn mit dem Volltext des Strafgesetzbuchs, den Vorschriften über das private Darlehen und der Notwehr-Mitteilung: 502.
- Drei einschlägige Seiten zu 96110 / Staatliches Betrugsbekämpfungszentrum auf der Website des Ministeriums für öffentliche Sicherheit: 521, nicht bestätigt (im Haupttext ist es in der Anmerkung vermerkt).
- Hinweisseiten des Hauptzollamts Hangzhou / Guangzhou des Generalzollamts zum Thema „für andere etwas mitbringen": Zertifikatsfehler, curl liefert 412, nicht bestätigt, nicht zitiert.
- Volltext der geänderten Fassung von 2020 der Vorschriften des Obersten Volksgerichts über das private Darlehen: Es wurde nur die Seite der Fassung von 2015 geöffnet (<https://www.court.gov.cn/zixun/xiangqing/15146.html>, Justizauslegung 法释〔2015〕18 号), sie wurde als nicht geltende Fassung nicht zitiert; der Eintrag zum Schuldschein zitiert stattdessen Art. 668 des Zivilgesetzbuchs.
- Der Originaltext des Obersten Volksgerichts / der Zeitung der Volksgerichte zu „besondere Beträge wie 520 und 1314 gelten als Schenkung": nicht gefunden, der Haupttext nennt nur die Gesetzesartikel und vermerkt es in der Anmerkung.
- Art. 133a, Art. 287a und Art. 246 Abs. 3 des Strafgesetzbuchs: Der geltende Text ist aus dem Originaltext des Änderungsgesetzes (Neun) zum Strafgesetzbuch zitiert, eine aufrufbare offizielle Seite mit dem integrierten Text „Strafgesetzbuch (einschließlich Änderungsgesetz Zwölf)" wurde nicht gefunden.

---

# Anpassung an deutsches Recht (rote Welle, 2026-10-01)

Der Abschnitt wurde vollständig auf die deutsche Rechtslage übertragen (REQ-65). Je Eintrag steht
die deutsche Fundstelle an der Stelle der chinesischen Norm, jede Norm wurde vor der Verwendung über
`gesetze-im-internet.de` (bzw. `eur-lex.europa.eu`, `polizei-beratung.de`, `bsi.bund.de`) geöffnet.
Der obige chinesische Prüfstand bleibt als Beleg der Originaltexte stehen; chinesische **Studien** in
der Quellen-Spalte bleiben als Literaturangabe erhalten.

## Streichung

- **Alte Nr. 24 (Brautpreis, 彩礼)** vollständig entfernt (Titelzeile, Kostenlabel, Marker, alle
  Inhaltszeilen). Begründung des Auftraggebers: Der Brautpreis ist in Deutschland kein Rechtsinstitut.
- **Nummernversatz:** alte Nr. 25 → 24, 26 → 25, … 43 → 42. Die Kapiteldatei hat jetzt 42 Einträge.
- **REQ-20:** Der tragbare Inhalt („in der Liebe und in der Ehe Gegebenes ist in der Regel nicht
  zurückzuholen") steht bereits in **Nr. 23** (Große Schenkungen in der Liebe und in der Ehe). Kein
  Verlust. Verweise innerhalb des Kapitels wurden mit Ankerwort nachgezogen.

## Meta-Erzähler-Einleitungen entfernt (Auftrag §5)

Betroffen: **Nr. 26, 30, 35, 41** (alte Nr. 27, 31, 36, 42). Die Zeile „Stufe B/C ist es, weil …"
bzw. „Stufe C, weil …" am Anfang der `- Anmerkung:` wurde auf den Inhaltssatz reduziert; der Inhalt
selbst blieb.

## Deutsche Fundstelle je Eintrag (neue Nummerierung)

| Nr. | Ersetzt (China) | Deutsche Fundstelle |
|---|---|---|
| 1 | Straßenverkehrsgesetz, StGB Art. 133; Kfz-Musterbedingungen | § 142 StGB (Unerlaubtes Entfernen vom Unfallort), § 323c StGB (Unterlassene Hilfeleistung); § 115 VVG |
| 2 | Warnhotline 96110, Gesetz gegen Telekommunikationsbetrug | Polizeinotruf 110, Rückruf über die Bank, § 263 StGB (`polizei-beratung.de`) |
| 3 | Warn-App/Warnhotline 96110, Seiten der Provinzpolizei Fujian | Polizeinotruf 110, Maschenliste der Polizeilichen Kriminalprävention, § 263 StGB |
| 4 | Ministerium für öffentliche Sicherheit, Fall mit 50.000 Gesichtsvideos | BSI-Hinweise zu Deepfakes, Art. 50 EU-KI-Verordnung (`bsi.bund.de`, `bundesnetzagentur.de`) |
| 5 | Strafprozessordnung, StGB Art. 243, Staatshaftungsgesetz | §§ 135, 136, 137, 140, 148 StPO; Art. 104 GG; § 164 StGB |
| 6 | StGB Art. 67/87/88, Strafzumessungs-Leitlinie mit Prozentstufen | §§ 46, 78, 78b StGB; § 371 AO; § 31 BtMG |
| 7 | Straßenverkehrsgesetz Art. 91, E-Bike-Einordnung | § 24a StVG; §§ 315c, 316, 69, 69a StGB |
| 8 | Gesetz gegen Telekommunikationsbetrug Art. 31/44, StGB Art. 287a | §§ 261, 263a, 27 StGB |
| 9 | Verordnung über das Kreditauskunftswesen (Nr. 631) | Art. 15, Art. 12 Abs. 3 DSGVO; § 34 BDSG (`lda.bayern.de`, `lfd.niedersachsen.de`) |
| 10 | OWiG Art. 30/51, StGB Art. 20/234 | §§ 223, 224, 125 StGB |
| 11 | StGB Art. 20, Notwehr-Leitlinie, Leitfälle Yu Haiming/Chen | §§ 32, 33 StGB |
| 12 | Arbeitsaufsicht, arbeitsrechtliche Schlichtung, StGB Art. 232 | §§ 4 KSchG, 12a ArbGG; § 212 StGB |
| 13 | StGB Art. 114/115, OWiG Art. 29/50 | §§ 306, 315b, 211, 212, 126, 241 StGB; Art. 102 GG |
| 14 | Telefonnummer 12356, Nationale Gesundheitskommission | Telefonseelsorge 0800 111 0 111 / 116 123 (`telefonseelsorge.de`) |
| 15 | Psychiatriegesetz Art. 28–30/35, OWiG Art. 29/50 | Betreuungsrecht und Landesunterbringungsgesetze (in der Anmerkung); Betrag/Hafttage entfernt |
| 16 | OWiG Art. 50, StGB Art. 246 | §§ 185, 186, 187, 194 StGB |
| 17 | Zivilgesetzbuch Art. 465/509 | §§ 145, 305c BGB |
| 18 | Zivilgesetzbuch Art. 668/681/686/687; LPR-Zinsobergrenze | §§ 488, 766, 771, 773 BGB |
| 19 | Zivilgesetzbuch Art. 188–197, Schlichtungsgesetz für Arbeitsstreitigkeiten | §§ 195, 199, 203, 214 BGB; § 4 KSchG |
| 20 | StGB Art. 313, Auslegung von 2024; Betrag/Hafttage | § 288 StGB; §§ 802c, 802g, 882b ZPO; § 4 AnfG |
| 21 | Liste der Vertrauensunwürdigen, Ausgabenbeschränkung | §§ 882b, 882c, 882e ZPO (Ausgabenbeschränkung ohne Gegenstück, entfernt) |
| 22 | StGB Art. 266, Anzeigegrenzen, Bagatellverfahren; Beträge | § 263 StGB; Art. 18 VO (EU) Nr. 1215/2012; § 495a ZPO (`eur-lex.europa.eu`) |
| 23 | Zivilgesetzbuch Art. 658/663, Brautpreis-Bestimmungen | §§ 516, 518, 528, 530 BGB |
| 24 | Zivilgesetzbuch Art. 1063/1065/1092, Auslegung Ehe-/Familienrecht | §§ 1363, 1374, 1375, 1410, 1414, 311b BGB |
| 25 | Zivilgesetzbuch Art. 1051, StGB Art. 258/266 | §§ 1306, 1314 BGB; §§ 172, 263 StGB |
| 26 | Verwaltungsmaßnahmen Hausgerätereparatur, Preisauszeichnung, Hotline 12315; Betrag | §§ 631, 634 BGB; § 1 PAngV; § 263 StGB |
| 27 | Gesellschaftsrecht Art. 10/11/180/191, Vollstreckungs-/Ausgabenbeschränkungen | §§ 6, 43 GmbHG; § 15a InsO; § 823 BGB |
| 28 | Empfehlung des Konsularamts, Anzeigegrenzen | § 96 AufenthG; §§ 29, 30 BtMG; § 373 AO |
| 29 | Zivilgesetzbuch Art. 1245–1249; Betrag | §§ 833, 254, 823 BGB |
| 30 | StGB Art. 236 | §§ 177, 176 StGB |
| 31 | StGB Art. 274 samt Betragsstufen, Zivilgesetzbuch Art. 1032/1033; Beträge | §§ 253, 255, 201a StGB |
| 32 | OWiG der öffentlichen Sicherheit Art. 50, StGB Art. 243; Haft-/Geldbeträge | § 164 StGB |
| 33 | Strafprozessordnung Art. 55/56/200/252/253; Anwaltsbetrag | §§ 261, 136a, 244, 359 StPO |
| 34 | Staatshaftungsgesetz Art. 17/19/33/35, Tagesbetrag | §§ 2, 7 StrEG |
| 35 | Fall Guo Li, Hotline 12315; Beträge/Fallschilderung | §§ 253, 240 StGB |
| 36 | Leitende Meinung Nr. 14/2023, Zivilgesetzbuch Art. 997, Online-Gewalt-Regelung; Hotline 12356 | §§ 185–187 StGB; §§ 1004, 823 BGB; §§ 935, 940 ZPO; Telefonseelsorge |
| 37 | Versicherungsgesetz Art. 27/34/39/43, Zivilgesetzbuch Art. 1125, StGB Art. 198/232, Fall Zhang Mou Song | §§ 150, 162 VVG; § 2339 BGB; §§ 265, 212, 211 StGB |
| 38 | Verfahrensregeln der Polizeiorgane, Strafprozessordnung Art. 112/113; Widerspruchsfristen | §§ 158, 170, 172 StPO |
| 39 | StGB Art. 389/390, 12. Strafrechtsänderung | §§ 334, 335 StGB |
| 40 | Zivilprozessordnung Art. 66, Beweisregeln Art. 14/15/90 | § 201 StGB; § 286, § 371 ZPO (Richtungsumkehr: Mitschneiden → schriftliche Dokumentation) |
| 41 | Zivilprozessordnung Art. 66, Beweisregeln Art. 14/15 | § 371 ZPO |
| 42 | Gesetz gegen häusliche Gewalt Art. 2/13/15/16/19/23/28/29/30/34; Fristen/Beträge | §§ 1, 2, 4 GewSchG; §§ 223, 177 StGB |

## Entfernt ohne deutsche Entsprechung (regelwerk §2, letzte Zeile)

- **Nr. 15:** chinesische Klinikzuführung (Psychiatriegesetz Art. 28–30, 35) und chinesische Gebühr;
  deutsche Entsprechung (Betreuungsrecht, Landesunterbringungsgesetze) in die Anmerkung übernommen.
- **Nr. 21:** chinesische Konsum-/Luxusausgabenbeschränkung.
- Weitere reine China-Beträge und -Fristen wurden durch deutsche Größenordnungen ersetzt oder
  gestrichen (z. B. Nr. 20, 22, 26, 31, 32, 33, 34, 35, 37, 42); der Marker nennt jeweils „Beträge
  gestrichen".

## X-Vorlage

- **Nr. 40** — Richtungsumkehr. § 201 Abs. 1 StGB macht das heimliche Mitschneiden strafbar; die
  Ausgangsempfehlung (Telefonat mitschneiden) ist in Deutschland nicht haltbar. Der Eintrag wurde
  auf „schriftliche Zusammenfassung / bestätigte E-Mail als Beleg" umgestellt und als X-Vorlage in
  den Bericht aufgenommen (`review/ueberarbeitung/08.md`).
