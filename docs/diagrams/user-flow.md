# User Flow Diagram

Hlavní uživatelské cesty dítěte v aplikaci.

```mermaid
flowchart TD
    Start([Otevře aplikaci]) --> Home[Homepage]
    
    Home --> Math[Matematika]
    Home --> Czech[Čeština]
    Home --> Practice[Moje procvičování]
    Home --> Settings[Nastavení]

    Math --> MathQ[Otázka násobilky]
    MathQ --> MathA{Zadá odpověď}
    MathA -->|Správně| MathOK[Pozitivní reakce]
    MathA -->|Chybně| MathFail[Vysvětlení + vizuální pomůcka]
    MathOK --> MathNext{Další otázka?}
    MathFail --> MathNext
    MathNext -->|Ano| MathQ
    MathNext -->|Ne| Home

    Czech --> CzechQ[Otázka i/y]
    CzechQ --> CzechA{Klikne I nebo Y}
    CzechA -->|Správně| CzechOK[Správná varianta + vysvětlení]
    CzechA -->|Chybně| CzechFail[Feedback + uložit k opakování]
    CzechOK --> CzechNext{Další otázka?}
    CzechFail --> CzechNext
    CzechNext -->|Ano| CzechQ
    CzechNext -->|Ne| Home

    Practice --> PracticeList[Seznam slabých položek]
    PracticeList --> PracticeQ[Procvičování]
    PracticeQ --> PracticeA{Odpověď}
    PracticeA -->|Opraveno| FixedMistake[Paráda! Opravená chyba.]
    PracticeA -->|Stále chybně| KeepPracticing[Tohle si ještě procvičíme.]
    FixedMistake --> PracticeNext{Další?}
    KeepPracticing --> PracticeNext
    PracticeNext -->|Ano| PracticeQ
    PracticeNext -->|Ne| Home

    Settings --> ToggleSound[Zapnout/vypnout zvuky]
    Settings --> ToggleAnim[Zapnout/vypnout animace]
    ToggleSound --> Home
    ToggleAnim --> Home
```

## Klíčové větve

| Větev | Popis |
|-------|-------|
| Matematika | Input čísla → feedback → další otázka |
| Čeština | Klik I/Y → feedback → další otázka |
| Moje procvičování | Slabá místa → opakování → speciální pochvala |
| Nastavení | Zvuky a animace on/off |
