# Projekt-Dokumentation
Mohammad Shahir Bashiri

| Datum       | Version | Zusammenfassung                                                                 |
| ----------- | ------- | ------------------------------------------------------------------------------ |
| 15.11.2024  | 0.0.1   | Erstellung der grundlegenden HTML-Struktur und des CSS-Designs.                 |
| 22.11.2024  | 0.0.2   | Implementierung der Quizlogik (Fragenanzeige, Punkteberechnung).                |
| 29.11.2024  | 0.0.3   | Hinzufügen von Responsive Design und Optimierung für Mobilgeräte.               |
| 06.12.2024  | 0.0.4   | Durchführung erster Tests und Feedback-Implementierung.                        |
| 13.12.2024  | 0.0.5   | Fehlerbehebung und Optimierung der Benutzerfreundlichkeit (UI/UX).              |
| 20.12.2024  | 1.0.0   | Abschluss der Dokumentation, Erstellung des Mahara-Portfolios und Reflexion.    |

---

## 1 Informieren

### 1.1 Ihr Projekt

Die Entwicklung einer interaktiven Quiz-Website, die Benutzer dazu motiviert, ihr Allgemeinwissen in Kategorien wie Geschichte, Geografie, Wissenschaft und Kultur zu testen.  

Das Ziel ist es, eine benutzerfreundliche, responsive Website zu erstellen, die sowohl auf Desktop- als auch auf Mobilgeräten funktioniert. Das Projekt bietet eine praktische Möglichkeit, Webentwicklungsfähigkeiten zu vertiefen und UI/UX-Prinzipien anzuwenden.

---

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ         | Beschreibung                                                                 |
| ---- | --------------- | ----------- | ---------------------------------------------------------------------------- |
| 1    | Muss            | Funktional  | Als Benutzer möchte ich eine Kategorie auswählen, um Quizfragen zu starten.  |
| 2    | Muss            | Funktional  | Als Benutzer möchte ich Punkte für jede richtige Antwort sammeln.            |
| 3    | Muss            | Qualität    | Als Benutzer möchte ich, dass die Website auf Mobilgeräten gut funktioniert. |
| 4    | Kann            | Funktional  | Als Benutzer möchte ich meinen Punktestand während des Quiz sehen.           |
| 5    | Kann            | Qualität    | Als Benutzer möchte ich visuelles Feedback (z. B. Farben) für richtige oder falsche Antworten. |
| 6    | Kann            | Qualität    | Als Benutzer möchte ich, dass die Website auch bei langsamer Internetverbindung funktioniert. |

---

### 1.3 Testfälle

| TC-№ | Ausgangslage                                  | Eingabe                            | Erwartete Ausgabe                                              |
| ---- | -------------------------------------------- | ---------------------------------- | ------------------------------------------------------------- |
| 1.1  | Die Website ist geladen.                     | Benutzer klickt auf eine Kategorie. | Die Quizfragen der Kategorie werden angezeigt.                |
| 1.2  | Eine Quizfrage ist angezeigt.                | Benutzer wählt eine Antwort.       | Die Antwort wird als korrekt oder falsch markiert.            |
| 2.1  | Eine Antwort wurde ausgewählt.               | Benutzer geht zur nächsten Frage.  | Der Punktestand wird aktualisiert und die nächste Frage angezeigt. |
| 3.1  | Die Website wird auf einem Smartphone geöffnet. | Keine                              | Die Website passt sich dem Bildschirm an.                     |
| 4.1  | Der Benutzer beendet das Quiz.               | Keine                              | Die Gesamtpunktzahl wird angezeigt.                           |
| 5.1  | Die Website wird ohne schnelle Verbindung geladen. | Keine                              | Die grundlegende Funktionalität der Website bleibt erhalten.  |

---

## 2 Planen

### Arbeitspakete

| AP-№ | Frist       | Zuständig | Beschreibung                                  | geplante Zeit |
| ---- | ----------- | --------- | -------------------------------------------- | ------------- |
| 1.A  | 15.11.2024  | Bashiri   | Erstellung der HTML-Struktur und des CSS-Designs. | 4 Stunden      |
| 1.B  | 22.11.2024  | Bashiri   | Implementierung der JavaScript-Logik.        | 5 Stunden      |
| 2.A  | 29.11.2024  | Bashiri   | Testing der Funktionalität und Fehlerbehebung. | 4 Stunden      |
| 2.B  | 06.12.2024  | Bashiri   | UI/UX-Optimierungen basierend auf Feedback.  | 3 Stunden      |
| 3.A  | 13.12.2024  | Bashiri   | Dokumentationserstellung nach IPERKA.        | 5 Stunden      |
| 3.B  | 20.12.2024  | Bashiri   | Abschluss, Mahara-Portfolio und Reflexion.   | 5 Stunden      |

**Total geplante Zeit:** 26 Stunden  

---

## 3 Entscheiden

### Entscheidungen und Annahmen
- **Technologien:** HTML, CSS, JavaScript für einfache und flexible Entwicklung.
- **Design:** Ein minimalistisches und benutzerfreundliches Layout für einfache Navigation.
- **Testing:** Regelmäßige Tests mit Fokus auf Funktionalität und Benutzerfreundlichkeit.

---

## 4 Realisieren

| AP-№ | Datum       | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----------- | --------- | ------------- | ----------------- |
| 1.A  | 15.11.2024  | Bashiri   | 4 Stunden     | 4 Stunden         |
| 1.B  | 22.11.2024  | Bashiri   | 5 Stunden     | 6 Stunden         |
| 2.A  | 29.11.2024  | Bashiri   | 4 Stunden     | 5 Stunden         |
| 2.B  | 06.12.2024  | Bashiri   | 3 Stunden     | 3 Stunden         |
| 3.A  | 13.12.2024  | Bashiri   | 5 Stunden     | 5 Stunden         |
| 3.B  | 20.12.2024  | Bashiri   | 5 Stunden     | 5 Stunden         |

---

## 5 Kontrollieren

### Testprotokoll

| TC-№ | Datum       | Resultat         | Tester      |
| ---- | ----------- | ---------------- | ----------- |
| 1.1  | 29.11.2024  | Erfolgreich      | Bashiri     |
| 1.2  | 29.11.2024  | Erfolgreich      | Bashiri     |
| 2.1  | 06.12.2024  | Erfolgreich      | Bashiri     |
| 3.1  | 06.12.2024  | Erfolgreich      | Bashiri     |
| 4.1  | 13.12.2024  | Erfolgreich      | Bashiri     |
| 5.1  | 13.12.2024  | Erfolgreich      | Bashiri     |

**Fazit:** Alle Testfälle wurden erfolgreich durchge
