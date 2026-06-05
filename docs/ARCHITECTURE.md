# Architektura projektu

Cílová struktura kódu pro bezpečný a postupný vývoj. Logika procvičování **nesmí být zamíchaná přímo v UI komponentách**.

---

## Doporučená struktura složek

```
vyukovy-web/
├── app/                    # Next.js App Router – stránky a layouty
│   ├── layout.tsx
│   ├── page.tsx            # Homepage
│   ├── math/
│   ├── czech/
│   ├── practice/           # Moje procvičování
│   └── settings/
├── components/             # Sdílené UI komponenty (bez business logiky)
│   ├── ui/                 # Button, Input, Card, ...
│   └── layout/             # Header, PageShell, ...
├── features/               # Funkční moduly podle domény
│   ├── math/               # Matematika – UI + hooky specifické pro math
│   ├── czech/              # Čeština – UI + hooky specifické pro czech
│   ├── review/             # Chytré opakování – UI pro procvičování
│   ├── settings/           # Nastavení zvuků a animací
│   └── i18n/               # Překlady a helpery
├── lib/                    # Čistá business logika (testovatelná)
│   ├── storage/            # localStorage vrstva
│   ├── review/             # Review algoritmus
│   └── validation/         # Validace odpovědí
├── types/                  # TypeScript typy a rozhraní
├── data/                   # Statická data cvičení (JSON/TS)
├── docs/                   # Projektová dokumentace
└── .cursor/rules/          # Pravidla pro AI agenta
```

---

## Vrstvy a odpovědnosti

### 1. `app/` – routing a stránky

- Tenké stránky – pouze skládání komponent a načtení dat
- Server Components tam, kde není potřeba interaktivita
- `"use client"` jen tam, kde je nutné (state, events, localStorage, zvuk)

### 2. `components/` – sdílené UI

- Prezentční komponenty bez business logiky
- Příklady: `Button`, `AnswerInput`, `FeedbackPanel`, `DotGrid`
- Props in, JSX out – žádné volání localStorage

### 3. `features/` – doménové moduly

- Každý předmět má vlastní složku
- Obsahuje: komponenty specifické pro feature, hooky, lokální helpery
- Volá `lib/` pro logiku, nikdy neopakuje review algoritmus

```
features/math/
├── MathPractice.tsx        # Hlavní obrazovka procvičování
├── MultiplicationInput.tsx # Input pro zadání výsledku
├── MultiplicationVisual.tsx# Vizuální pomůcka (tečky)
└── useMathPractice.ts      # Hook – orchestrace otázky a odpovědi
```

### 4. `lib/` – čistá business logika

- **Testovatelné funkce bez Reactu**
- Žádné JSX, žádné hooky, žádný přímý přístup k DOM

```
lib/
├── storage/
│   ├── keys.ts             # Konstanty klíčů localStorage
│   ├── settings.ts         # get/set settings
│   ├── reviewState.ts      # get/set review states
│   └── practiceHistory.ts  # get/set historie
├── review/
│   ├── algorithm.ts        # updateReviewState(correct/wrong)
│   └── selectors.ts        # getItemsForReview, getWeakItems
└── validation/
    ├── mathAnswer.ts       # isMathAnswerCorrect
    └── czechAnswer.ts      # isCzechAnswerCorrect
```

### 5. `types/` – datové typy

- Všechny sdílené TypeScript typy na jednom místě
- Viz [DATA_MODEL.md](./DATA_MODEL.md)

### 6. `data/` – statická cvičení

- Seznam otázek pro násobilku a i/y
- Verzované statické soubory, snadno rozšiřitelné

```
data/
├── math/
│   └── multiplication.ts   # PracticeItem[] pro násobilku
└── czech/
    └── i-y.ts              # CzechExercise[] pro i/y
```

---

## Klíčová pravidla oddělení

| Vrstva | Smí | Nesmí |
|--------|-----|-------|
| UI komponenty | Renderovat, emitovat eventy | Review algoritmus, localStorage |
| `lib/` | Čisté funkce, validace, algoritmy | React hooky, JSX |
| `lib/storage/` | Čtení/zápis localStorage | Business logika review |
| `features/` | Orchestrace UI + volání lib | Duplikovat logiku z lib |
| `app/` | Routing, metadata, layout | Složitá business logika |

### Tok dat při odpovědi

```
UI (features/math)
  → lib/validation (zkontroluj odpověď)
  → lib/review (aktualizuj ReviewState)
  → lib/storage (ulož do localStorage)
  → UI (zobraz feedback)
```

---

## Server vs. Client (Next.js)

| Kde | Typ komponenty |
|-----|----------------|
| Layout, metadata, statický obsah | Server Component |
| Input, tlačítka, localStorage, zvuk, animace | Client Component (`"use client"`) |
| `lib/` funkce | Univerzální (bez browser API) |
| `lib/storage/` | Voláno jen z Client Components nebo hooků |

---

## Nastavení

- `UserSettings` v localStorage (viz [LOCAL_STORAGE_STRATEGY.md](./LOCAL_STORAGE_STRATEGY.md))
- Hook `useSettings()` ve `features/settings/`
- Globální provider pouze pokud bude nutný – jinak jednoduchý hook

---

## Překlady (i18n)

- Struktura ve `features/i18n/` nebo `lib/i18n/`
- Slovníky: `cs.ts`, `en.ts`, `sk.ts`
- Helper `t(key)` – bez externí knihovny v MVP
- Viz [I18N_STRATEGY.md](./I18N_STRATEGY.md)

---

## Diagram

Viz [diagrams/module-architecture.md](./diagrams/module-architecture.md).

---

## Co zatím nevytvářet

- Složitý state management (Redux, Zustand) – zatím React state + localStorage
- Server API routes – zatím není potřeba
- Databázová vrstva – až po MVP
- Monolitické soubory s více než ~200 řádky logiky
