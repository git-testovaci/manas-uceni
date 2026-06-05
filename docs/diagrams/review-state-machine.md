# Review State Machine

Stavy a přechody položky v systému chytrého opakování.

```mermaid
stateDiagram-v2
    [*] --> new : První setkání s položkou

    new --> learning : Správná odpověď
    new --> weak : Chybná odpověď

    learning --> learning : Správně (streak < 3)
    learning --> mastered : Správně (streak >= 3)
    learning --> weak : Chybná odpověď

    weak --> improving : Správná odpověď\n→ Paráda! Opravená chyba.
    weak --> weak : Chybná odpověď

    improving --> improving : Správně (streak < 3)
    improving --> mastered : Správně (streak >= 3)
    improving --> weak : Chybná odpověď

    mastered --> mastered : Správně
    mastered --> weak : Chybná odpověď\n→ návrat mezi slabá místa

    note right of weak
        Priorita v Moje procvičování
        wrongCount +1, streak = 0
    end note

    note right of improving
        Dříve chybná, nyní na cestě
        Speciální pochvala při opravě
    end note

    note right of mastered
        Streak >= 3
        Dítě to zvládá
    end note
```

## Přechodová pravidla

| Z | Událost | Do | Akce |
|---|---------|-----|------|
| * | První zobrazení | new | – |
| new | correct | learning | correctCount+1, streak+1 |
| new | wrong | weak | wrongCount+1, streak=0 |
| learning | correct (streak<3) | learning | streak+1 |
| learning | correct (streak≥3) | mastered | streak+1, reviewStep+1 |
| learning | wrong | weak | wrongCount+1, streak=0 |
| weak | correct | improving | „Paráda! Opravená chyba." |
| weak | wrong | weak | wrongCount+1 |
| improving | correct (streak≥3) | mastered | reviewStep+1 |
| improving | wrong | weak | streak=0 |
| mastered | wrong | weak | Návrat mezi slabá místa |

## Implementace

Viz [REVIEW_ALGORITHM.md](../REVIEW_ALGORITHM.md) – `lib/review/algorithm.ts`
