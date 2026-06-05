# Datový model

Návrh TypeScript typů pro MVP. Typy patří do `types/` a importují se odtud.

---

## Základní typy

```typescript
type Subject = "math" | "czech" | "english";

type ReviewStatus =
  | "new"
  | "learning"
  | "weak"
  | "improving"
  | "mastered";

type Difficulty = "easy" | "medium" | "hard";
```

---

## PracticeItem – obecná cvičební položka

```typescript
type PracticeItem = {
  id: string;
  subject: Subject;
  topic: string;
  prompt: string;
  correctAnswer: string;
  explanation?: string;
  difficulty?: Difficulty;
};
```

**Příklad (matematika):**

```typescript
{
  id: "math-mul-7x8",
  subject: "math",
  topic: "multiplication",
  prompt: "7 × 8 = ?",
  correctAnswer: "56",
  explanation: "7 × 8 znamená 7 skupin po 8. 8 + 8 + 8 + 8 + 8 + 8 + 8 = 56",
  difficulty: "medium",
}
```

---

## ReviewState – stav opakování položky

```typescript
type ReviewState = {
  itemId: string;
  subject: Subject;
  topic: string;
  correctCount: number;
  wrongCount: number;
  streak: number;
  status: ReviewStatus;
  reviewStep: number;
  lastAnsweredAt?: string;   // ISO 8601
  nextReviewAt?: string;     // ISO 8601 – pro budoucí spaced repetition
};
```

**Výchozí stav nové položky:**

```typescript
{
  itemId: "math-mul-7x8",
  subject: "math",
  topic: "multiplication",
  correctCount: 0,
  wrongCount: 0,
  streak: 0,
  status: "new",
  reviewStep: 0,
}
```

---

## MathExercise – rozšíření pro matematiku

```typescript
type MathExercise = PracticeItem & {
  subject: "math";
  topic: "multiplication" | string;
  operandA: number;
  operandB: number;
  operation: "multiply";
  visualHint?: {
    rows: number;
    cols: number;
  };
};
```

**Příklad:**

```typescript
{
  id: "math-mul-7x8",
  subject: "math",
  topic: "multiplication",
  prompt: "7 × 8 = ?",
  correctAnswer: "56",
  operandA: 7,
  operandB: 8,
  operation: "multiply",
  explanation: "7 × 8 znamená 7 skupin po 8.",
  visualHint: { rows: 7, cols: 8 },
  difficulty: "medium",
}
```

---

## CzechExercise – rozšíření pro češtinu

```typescript
type CzechExercise = PracticeItem & {
  subject: "czech";
  topic: "i-y" | string;
  sentenceWithGap: string;    // "Ps_ štěkali."
  gapIndex: number;           // pozice mezery větě
  options: ["I", "Y"];
  correctOption: "I" | "Y";
  fullSentence: string;       // "Psi štěkali."
};
```

**Příklad:**

```typescript
{
  id: "czech-iy-001",
  subject: "czech",
  topic: "i-y",
  prompt: "Ps_ štěkali.",
  sentenceWithGap: "Ps_ štěkali.",
  gapIndex: 2,
  options: ["I", "Y"],
  correctOption: "I",
  correctAnswer: "I",
  fullSentence: "Psi štěkali.",
  explanation: "Množné číslo – písmeno i.",
  difficulty: "easy",
}
```

---

## UserSettings

```typescript
type UserSettings = {
  soundsEnabled: boolean;
  animationsEnabled: boolean;
  language: "cs" | "en" | "sk";
};
```

**Výchozí hodnoty:**

```typescript
{
  soundsEnabled: true,
  animationsEnabled: true,
  language: "cs",
}
```

---

## PracticeSessionSummary – souhrn relace

```typescript
type PracticeSessionSummary = {
  sessionId: string;
  subject: Subject;
  topic: string;
  startedAt: string;          // ISO 8601
  endedAt?: string;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  fixedMistakesCount: number; // opravené dříve chybné položky
  itemIds: string[];          // procvičené položky v této relaci
};
```

---

## Další užitečné typy

### AnswerResult – výsledek vyhodnocení odpovědi

```typescript
type AnswerResult = {
  isCorrect: boolean;
  wasPreviouslyWrong: boolean;  // pro „Paráda! Opravená chyba.“
  previousStatus?: ReviewStatus;
  newStatus: ReviewStatus;
  feedbackKey: string;          // klíč pro překlad feedbacku
};
```

### StorageEnvelope – obal pro verzovaná data v localStorage

```typescript
type StorageEnvelope<T> = {
  version: 1;
  updatedAt: string;
  data: T;
};
```

### ReviewStateMap – mapa všech review stavů

```typescript
type ReviewStateMap = Record<string, ReviewState>;
```

### PracticeHistory – historie relací

```typescript
type PracticeHistory = {
  sessions: PracticeSessionSummary[];
  maxSessions: number;        // limit pro MVP (např. 50)
};
```

---

## Vztahy mezi typy

```
PracticeItem (1) ←→ (0..1) ReviewState     [podle itemId]
PracticeSessionSummary (N) → (N) PracticeItem [podle itemIds]
UserSettings (1) – globální nastavení
```

---

## Pravidla pro typy

- Všechny typy exportovat z `types/index.ts`
- ID položek: stabilní string (`math-mul-7x8`, `czech-iy-001`)
- Datum vždy ISO 8601 string (ne `Date` objekt v localStorage)
- Nové typy přidávat sem a v [DECISIONS.md](./DECISIONS.md) zaznamenat, pokud mění model
