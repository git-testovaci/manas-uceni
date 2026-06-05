# Strategie vícejazyčnosti (i18n)

Plán pro jazykovou podporu. MVP je v češtině, struktura připravena pro en/sk.

---

## Jazyky

| Kód | Jazyk | MVP | Budoucí |
|-----|-------|-----|---------|
| `cs` | Čeština | ✅ Primární | ✅ |
| `en` | Angličtina | Stub (prázdný) | ✅ Přepínač + obsah |
| `sk` | Slovenština | Stub (prázdný) | ✅ Přepínač + obsah |

---

## MVP přístup

**Jednoduchá struktura bez externí knihovny** (pokud není nutná).

### Struktura souborů

```
features/i18n/
├── index.ts          # export t(), getLocale()
├── types.ts          # TranslationKey, Locale
├── locales/
│   ├── cs.ts         # kompletní české texty
│   ├── en.ts         # stub – prázdný nebo kopie cs
│   └── sk.ts         # stub
```

### Slovník (příklad)

```typescript
// locales/cs.ts
export const cs = {
  home: {
    title: "Co dnes procvičíme?",
    math: "Matematika",
    czech: "Čeština",
    practice: "Moje procvičování",
  },
  feedback: {
    correct: "Výborně!",
    wrong: "Ještě ne. Ukážeme si postup.",
    fixedMistake: "Paráda! Opravená chyba.",
    keepPracticing: "Tohle si ještě procvičíme.",
  },
  math: {
    submit: "Odeslat",
    explanation: "Postup",
  },
  // ...
} as const;
```

### Helper funkce

```typescript
function t(key: string, locale: Locale = "cs"): string {
  // jednoduchý přístup ke klíči, fallback na cs
}
```

---

## Pravidla pro texty

1. **Texty ne rozhazovat natvrdo po komponentách** – vždy přes `t("key")`
2. **Klíče strukturované** – `home.title`, `feedback.correct`, `math.submit`
3. **Krátké texty** – vhodné pro děti
4. **Nové texty** – přidat do `cs.ts`, ne do JSX
5. **Typová bezpečnost** – `TranslationKey` typ z cs.ts

---

## Co překládat

| Ano | Ne (zatím) |
|-----|------------|
| UI texty (tlačítka, nadpisy) | Statická cvičení (data/) – zůstávají v cs |
| Feedback zprávy | Matematické příklady (čísla univerzální) |
| Nastavení labely | |
| Navigace | |
| Chybové hlášky | |

Cvičení v `data/` zůstávají v češtině v MVP. Při přidání en/sk se vytvoří `data/czech/i-y.en.ts` apod.

---

## Budoucí rozšíření

### URL prefixy

```
/cs/math
/en/math
/sk/math
```

Next.js App Router: `app/[locale]/math/page.tsx`

### Ruční přepínač jazyka

- V nastavení: dropdown cs / en / sk
- Uložit do `UserSettings.language`
- Přepnout bez reloadu

### Automatická detekce

- `navigator.language` → výchozí locale
- Fallback na `cs`
- Uživatel může přepsat v nastavení

---

## Co zatím nedělat

- ❌ Externí knihovna (next-intl, react-i18next) – zatím zbytečná
- ❌ URL prefixy v MVP
- ❌ Překlady cvičení
- ❌ Pluralizace a interpolace (až bude potřeba)

---

## Migrace z MVP na plnou i18n

1. Etapa 9: struktura + cs slovník
2. Později: en/sk slovníky
3. Později: `[locale]` routing
4. Později: přepínač + detekce

Každý krok je samostatná etapa – ne vše najednou.

---

## Odkazy

- [ARCHITECTURE.md](./ARCHITECTURE.md)
- [DATA_MODEL.md](./DATA_MODEL.md) – `UserSettings.language`
- [ROADMAP.md](./ROADMAP.md) – Etapa 9
