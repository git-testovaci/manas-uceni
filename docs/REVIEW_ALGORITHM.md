# Algoritmus chytrého opakování (MVP)

Jednoduchý algoritmus pro MVP. Později lze nahradit pokročilejším spaced repetition systémem (SM-2, FSRS apod.).

Implementace patří do `lib/review/algorithm.ts` – čistá funkce bez Reactu.

---

## Stavy položky

```
new → learning → weak ⇄ improving → mastered
                      ↑_______________|
                    (znovu chyba u mastered)
```

Detailní diagram: [diagrams/review-state-machine.md](./diagrams/review-state-machine.md)

| Stav | Význam |
|------|--------|
| `new` | Položka ještě nebyla procvičena |
| `learning` | Dítě ji vidělo, ale ještě není stabilní |
| `weak` | Chybná odpověď – prioritní opakování |
| `improving` | Dříve chybná, nyní správně – na cestě k zvládnutí |
| `mastered` | Streak ≥ 3 – dítě to zvládá |

---

## Vstup funkce

```typescript
function updateReviewState(
  current: ReviewState,
  isCorrect: boolean
): { state: ReviewState; answerResult: AnswerResult }
```

---

## Pravidlo: wrong (chybná odpověď)

```
wrongCount += 1
streak = 0
status = "weak"
reviewStep = max(0, reviewStep - 1)
lastAnsweredAt = now()
```

### Speciální případ: mastered → wrong

Pokud položka byla `mastered` a dítě chybuje:

```
status = "weak"
```

(Položka se vrátí mezi slabá místa.)

---

## Pravidlo: correct (správná odpověď)

```
correctCount += 1
streak += 1
lastAnsweredAt = now()
```

### Pokud položka byla `weak` a nyní je správně:

```
status = "improving"
→ zobraz feedback: „Paráda! Opravená chyba.“
→ wasPreviouslyWrong = true
```

### Pokud položka byla `improving` a streak roste:

```
status = "improving"  (zůstává, dokud není mastered)
```

### Pokud streak >= 3:

```
status = "mastered"
reviewStep += 1
```

### Pokud položka byla `new` a poprvé správně:

```
status = "learning"
```

### Pokud položka byla `learning` a správně (streak < 3):

```
status = "learning"
```

---

## Rozlišení feedbacku

| Situace | `wasPreviouslyWrong` | Feedback |
|---------|------------------------|----------|
| Správně, poprvé | false | „Výborně!“ |
| Správně, dříve weak/improving | true | „Paráda! Opravená chyba.“ |
| Chybně | – | „Ještě ne. Ukážeme si postup.“ |
| Chybně, opakované procvičování | – | „Tohle si ještě procvičíme.“ |

---

## Výběr položek k procvičování

Priorita (MVP):

1. Položky se statusem `weak` (nejvyšší priorita)
2. Položky se statusem `learning`
3. Položky se statusem `improving`
4. Nové položky (`new`) z datového souboru

Funkce: `getNextPracticeItem(reviewMap, allItems, subject?)` v `lib/review/selectors.ts`

---

## reviewStep

- Po každé správné odpovědi u `mastered`: `reviewStep += 1`
- Po chybě: `reviewStep = max(0, reviewStep - 1)`
- V MVP slouží jako jednoduchá metrika pokroku
- V budoucnu: `reviewStep` určí interval opakování (spaced repetition)

---

## nextReviewAt (příprava na budoucno)

V MVP volitelně nastavit:

```typescript
// Jednoduchý interval pro weak položky
nextReviewAt = now + 1 den  // pro weak
nextReviewAt = now + 3 dny  // pro improving
nextReviewAt = now + 7 dní  // pro mastered
```

**V MVP není nutné filtrovat podle `nextReviewAt`** – stačí priorita podle statusu. Pole připravit pro budoucí rozšíření.

---

## Příklad průběhu

| Krok | Akce | Stav po |
|------|------|---------|
| 1 | Nová položka, chyba | weak, streak=0, wrongCount=1 |
| 2 | Správně (byla weak) | improving, streak=1 → „Paráda! Opravená chyba.“ |
| 3 | Správně | improving, streak=2 |
| 4 | Správně | mastered, streak=3 |
| 5 | Chyba (byla mastered) | weak, streak=0 |

---

## Co MVP záměrně neřeší

- Pokročilé spaced repetition intervaly
- Náhodný výběr vs. deterministický
- Vážení podle obtížnosti
- Synchronizace napříč zařízeními

Tyto věci přijdou s databází a registrací.

---

## Testovatelnost

Algoritmus musí být čistá funkce – snadno unit testovatelná:

```typescript
// Příklad test case
const state = createInitialState("math-mul-7x8");
const afterWrong = updateReviewState(state, false);
expect(afterWrong.state.status).toBe("weak");

const afterFix = updateReviewState(afterWrong.state, true);
expect(afterFix.answerResult.wasPreviouslyWrong).toBe(true);
```
