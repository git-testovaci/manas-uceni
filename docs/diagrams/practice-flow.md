# Practice Flow Diagram

Detailní tok jednoho procvičovacího kola (matematika i čeština).

```mermaid
flowchart TD
    Start([Začátek kola]) --> LoadItem[Načti další položku]
    LoadItem --> CheckReview{Existuje ReviewState?}
    
    CheckReview -->|Ne| NewItem[Status: new]
    CheckReview -->|Ano| ExistingItem[Použij existující stav]
    
    NewItem --> ShowQuestion[Zobraz otázku]
    ExistingItem --> ShowQuestion

    ShowQuestion --> WaitAnswer[Čekej na odpověď dítěte]
    WaitAnswer --> Validate[Validuj odpověď]

    Validate --> Evaluate{Správně?}

    Evaluate -->|Ano| UpdateCorrect[updateReviewState correct]
    Evaluate -->|Ne| UpdateWrong[updateReviewState wrong]

    UpdateCorrect --> CheckFixed{Byla dříve weak?}
    CheckFixed -->|Ano| FeedbackFixed[Paráda! Opravená chyba.]
    CheckFixed -->|Ne| FeedbackOK[Výborně!]
    
    UpdateWrong --> FeedbackWrong[Ještě ne. Ukážeme si postup.]
    FeedbackWrong --> ShowExplanation[Zobraz vysvětlení + pomůcku]

    FeedbackFixed --> SaveState[Ulož ReviewState do localStorage]
    FeedbackOK --> SaveState
    ShowExplanation --> SaveState

    SaveState --> PlaySound{Zvuky zapnuty?}
    PlaySound -->|Ano, správně| SoundOK[Cinknutí / potlesk]
    PlaySound -->|Ano, chybně| SoundNone[Žádný zvuk]
    PlaySound -->|Ne| NoSound[Přeskoč]

    SoundOK --> NextQuestion{Další otázka?}
    SoundNone --> NextQuestion
    NoSound --> NextQuestion

    NextQuestion -->|Ano| LoadItem
    NextQuestion -->|Ne| End([Konec relace])
```

## Kroky v kódu

| Krok | Vrstva |
|------|--------|
| Načti položku | `lib/review/selectors.ts` |
| Zobraz otázku | `features/math/` nebo `features/czech/` |
| Validuj odpověď | `lib/validation/` |
| Aktualizuj stav | `lib/review/algorithm.ts` |
| Ulož stav | `lib/storage/reviewState.ts` |
| Zobraz feedback | UI komponenta |
| Přehraj zvuk | `features/settings/` (client only) |

## Pravidlo

Logika (validace, review, storage) **nikdy** přímo v UI komponentě.
