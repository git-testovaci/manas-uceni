# Strategie localStorage

MVP ukládá pokrok lokálně v prohlížeči. **localStorage nikdy nepoužívat náhodně přímo v komponentách – vždy přes storage helper vrstvu v `lib/storage/`.**

---

## Co se ukládá

| Data | Klíč | Obsah |
|------|------|-------|
| Nastavení | `vyukovyWeb.settings.v1` | `UserSettings` |
| Review stavy | `vyukovyWeb.reviewState.v1` | `ReviewStateMap` |
| Historie relací | `vyukovyWeb.practiceHistory.v1` | `PracticeHistory` |

---

## Co se NEukládá

- Osobní údaje dítěte (jméno, věk, e-mail)
- Hesla, tokeny, API klíče
- Celé texty odpovědí mimo review metadata
- Citlivá data jakéhokoli druhu
- Dočasný UI stav (aktuální otázka, focus)

---

## Struktura klíčů

Prefix: `vyukovyWeb.`
Verze: `.v1` (při breaking change → `.v2`)

```
vyukovyWeb.settings.v1
vyukovyWeb.reviewState.v1
vyukovyWeb.practiceHistory.v1
```

Konstanty definovat v `lib/storage/keys.ts`:

```typescript
export const STORAGE_KEYS = {
  settings: "vyukovyWeb.settings.v1",
  reviewState: "vyukovyWeb.reviewState.v1",
  practiceHistory: "vyukovyWeb.practiceHistory.v1",
} as const;
```

---

## Formát uložených dat

Každý klíč ukládá JSON obal s verzí:

```typescript
{
  "version": 1,
  "updatedAt": "2026-06-04T10:00:00.000Z",
  "data": { /* skutečná data */ }
}
```

Typ: `StorageEnvelope<T>` – viz [DATA_MODEL.md](./DATA_MODEL.md).

---

## Storage helper vrstva

```
lib/storage/
├── keys.ts           # Konstanty klíčů
├── envelope.ts       # wrap/unwrap, validace verze
├── settings.ts       # getSettings(), saveSettings()
├── reviewState.ts    # getReviewStates(), saveReviewState()
├── practiceHistory.ts
└── safeParse.ts      # Bezpečný JSON.parse s fallbackem
```

### Pravidla helper vrstvy

1. Vždy `try/catch` kolem `JSON.parse`
2. Při neplatných datech vrátit výchozí hodnoty (ne crash)
3. Logovat varování do konzole (dev), ne zobrazovat dítěti chybu
4. Nikdy nevolat `localStorage` mimo `lib/storage/`

---

## Verzování

| Situace | Akce |
|---------|------|
| Nové pole v existujícím typu | Zpětně kompatibilní – doplnit výchozí hodnotu |
| Změna struktury (breaking) | Nový klíč `.v2`, migrace z `.v1` |
| Odstranění pole | Migrace – ignorovat staré pole |

### Migrace (příklad pro budoucí v2)

```typescript
function migrateReviewStateV1toV2(old: unknown): ReviewStateMap {
  // přečíst stará data, transformovat, uložit pod v2
}
```

Migrace spouštět při prvním načtení aplikace v `lib/storage/migrate.ts`.

---

## Chování při poškozených datech

1. `JSON.parse` selže → vrátit výchozí prázdná data
2. Chybí `version` → považovat za neplatná, resetovat
3. Neznámá verze → resetovat nebo migrovat, pokud existuje migrace
4. Jednotlivá položka neplatná → přeskočit, zachovat ostatní
5. **Nikdy neshodit celou aplikaci kvůli localStorage**

### Výchozí hodnoty

```typescript
const DEFAULT_SETTINGS: UserSettings = {
  soundsEnabled: true,
  animationsEnabled: true,
  language: "cs",
};

const DEFAULT_REVIEW_STATE: ReviewStateMap = {};
const DEFAULT_PRACTICE_HISTORY: PracticeHistory = {
  sessions: [],
  maxSessions: 50,
};
```

---

## Dostupnost localStorage

- Kontrolovat `typeof window !== "undefined"` před přístupem
- V SSR vrátit výchozí hodnoty (localStorage neexistuje na serveru)
- Hook `useLocalStorage` nebo volání až v `useEffect` / event handlerech

---

## Příprava na budoucí migraci do databáze

| localStorage | Budoucí DB tabulka |
|--------------|-------------------|
| `reviewState` | `user_review_states` |
| `settings` | `user_settings` |
| `practiceHistory` | `practice_sessions` |

### Principy pro snadnou migraci

- ID položek (`itemId`) musí být stabilní a unikátní
- Data ukládat jako plain JSON objekty (ne třídy)
- `StorageEnvelope` usnadní export/import
- Export funkce `exportAllData(): string` – připravit později pro přechod na účet

---

## Limity localStorage

- Typický limit: ~5 MB na doménu
- MVP data jsou malá (desítky KB) – stačí
- Historie relací omezit `maxSessions: 50`
- Sledovat velikost při budoucím rozšíření

---

## Testování storage vrstvy

- Unit testy pro `safeParse`, migrace, výchozí hodnoty
- Ruční test: smazat localStorage v DevTools → aplikace musí fungovat
- Ruční test: vložit neplatný JSON → aplikace musí fungovat
