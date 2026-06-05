# Testovací strategie

Strategie testování pro MVP a plán pro budoucí automatizované testy.

---

## Teď (MVP)

### Ruční smoke test v prohlížeči

Hlavní metoda ověření. Po každé etapě projít scénáře níže.

### Lint

```bash
npm run lint
```

Kontrola stylu kódu, importů a běžných chyb.

### Build

```bash
npm run build
```

Ověří TypeScript, kompilaci a produkční build Next.js.

---

## Smoke test scénáře

### Homepage

| # | Akce | Očekávaný výsledek |
|---|------|---------------------|
| 1 | Otevřít `/` | Stránka se načte bez chyby |
| 2 | Zkontrolovat mobil (DevTools) | Tři volby viditelné, tlačítka velká |
| 3 | Kliknout Matematika | Přejde na stránku matematiky |
| 4 | Kliknout Čeština | Přejde na stránku češtiny |
| 5 | Kliknout Moje procvičování | Přejde na stránku opakování |

### Matematika

| # | Akce | Očekávaný výsledek |
|---|------|---------------------|
| 1 | Otevřít matematiku | Zobrazí se příklad (7 × 8 = [input]) |
| 2 | Zadat správnou odpověď | Pozitivní reakce |
| 3 | Zadat špatnou odpověď | Klidný text + správný výsledek + postup |
| 4 | Zkontrolovat vizuální pomůcku | Mřížka teček/čtverečků |
| 5 | Opravit dříve chybnou položku | „Paráda! Opravená chyba.“ |

### Čeština

| # | Akce | Očekávaný výsledek |
|---|------|---------------------|
| 1 | Otevřít češtinu | Věta s mezerou (Ps_ štěkali.) |
| 2 | Kliknout I nebo Y | Zobrazí se správná varianta + vysvětlení |
| 3 | Zodpovědět špatně | Klidný feedback, správná odpověď |
| 4 | Zkontrolovat opakování | Chyba se objeví v Moje procvičování |

### Nastavení

| # | Akce | Očekávaný výsledek |
|---|------|---------------------|
| 1 | Otevřít nastavení | Přepínače zvuků a animací |
| 2 | Vypnout zvuky | Při správné odpovědi ticho |
| 3 | Vypnout animace | Žádné animace |
| 4 | Obnovit stránku | Nastavení zůstane (localStorage) |

### localStorage odolnost

| # | Akce | Očekávaný výsledek |
|---|------|---------------------|
| 1 | Smazat localStorage (DevTools) | Aplikace funguje s výchozími hodnotami |
| 2 | Vložit neplatný JSON do klíče | Aplikace funguje, data resetována |

---

## Později (po MVP)

### Unit testy

**Priorita 1 – čistá logika:**

- `lib/review/algorithm.ts` – všechny stavy a přechody
- `lib/validation/mathAnswer.ts` – validace čísel
- `lib/validation/czechAnswer.ts` – validace I/Y
- `lib/storage/safeParse.ts` – parsování a fallback

**Příklad test case:**

```typescript
describe("updateReviewState", () => {
  it("wrong answer sets status to weak", () => {
    const state = createInitialState("math-mul-7x8");
    const result = updateReviewState(state, false);
    expect(result.state.status).toBe("weak");
    expect(result.state.streak).toBe(0);
  });

  it("correct after weak shows fixed mistake feedback", () => {
    const weakState = { ...initial, status: "weak", wrongCount: 1 };
    const result = updateReviewState(weakState, true);
    expect(result.answerResult.wasPreviouslyWrong).toBe(true);
    expect(result.state.status).toBe("improving");
  });
});
```

### E2E test

Jeden hlavní tok:

```
Homepage → Matematika → správná odpověď → chybná odpověď → vysvětlení
→ Moje procvičování → oprava chyby → „Paráda! Opravená chyba.“
```

Nástroj: Playwright (až po MVP, pokud bude schváleno).

---

## Kdy spouštět testy

| Moment | Co spustit |
|--------|------------|
| Po každé etapě | Ruční smoke test + lint + build |
| Před push do main | lint + build |
| Po deployi | Smoke test na produkční URL |
| Po přidání unit testů | `npm test` (až bude nastaveno) |

---

## Co zatím netestovat automaticky

- Vizuální vzhled (pixel-perfect)
- Zvuky (manuálně)
- Animace (manuálně)
- Všechny kombinace cvičení (statická data)

---

## Psaní testovatelného kódu

- Logika v `lib/` jako čisté funkce
- Žádná logika review v komponentách
- Typy exportované z `types/`
- Storage vrstva s injectovatelným storage (pro testy)

```typescript
// Testovatelné – storage jako parametr
function getSettings(storage: StorageLike): UserSettings { ... }
```
