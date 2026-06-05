# Cursor workflow

Praktický návod pro práci s Cursorem (AI agentem) na tomto projektu. Uživatel není programátor – workflow musí být bezpečné a předvídatelné.

---

## Režimy Cursoru

### Ask – dotazy a analýza

**Kdy použít:**
- Vysvětlení kódu nebo dokumentace
- Analýza problému
- Review diffu bez úprav
- Dotazy „co by se stalo, kdyby…“

**Pravidlo:** Ask nemění soubory. Bezpečné pro zkoumání.

**Příklad promptu:**
> „Vysvětli mi, jak funguje review algoritmus podle docs/REVIEW_ALGORITHM.md.“

---

### Plan – plánování před implementací

**Kdy použít:**
- Větší změna (nová feature, více souborů)
- Architektonické rozhodnutí
- Refaktor
- **Vždy před implementací větší etapy**

**Pravidlo:** Nejdřív plán, schválení, teprve pak Agent.

**Příklad promptu:**
> „Navrhni plán pro Etapu 4 – matematický trenažér. Přečti docs/ROADMAP.md a docs/ARCHITECTURE.md.“

---

### Agent – implementace

**Kdy použít:**
- Po schváleném plánu
- Malé, jasně vymezené úkoly v rámci jedné etapy

**Pravidlo:**
- Implementovat jen rozsah etapy
- Po dokončení vypsat: změněné soubory, rizika, ověřovací kroky, commit message
- Nikdy celý projekt najednou

**Příklad promptu:**
> „Implementuj Etapu 2 podle docs/ROADMAP.md. Přečti nejdřív docs/PROJECT_BRIEF.md, docs/ARCHITECTURE.md, docs/ERROR_PREVENTION.md a relevantní .cursor/rules.“

---

### Review – kontrola po změnách

**Kdy použít:**
- Po každé implementaci
- Před commitem a pushem

**Co kontrolovat:**
- [ ] Diff – jen očekávané soubory
- [ ] Bezpečnost – žádné secrets, žádná osobní data
- [ ] Duplicity – logika není zkopírovaná na více místech
- [ ] Typování – TypeScript bez chyb
- [ ] Přístupnost – labely, focus, kontrast
- [ ] SEO – title, description
- [ ] lint/build – `npm run lint && npm run build`

**Příklad promptu:**
> „Zkontroluj diff poslední změny podle docs/QUALITY_CHECKLIST.md.“

---

## Povinný start každého většího promptu

Každý implementační prompt musí začít přečtením:

1. `docs/PROJECT_BRIEF.md`
2. `docs/ARCHITECTURE.md`
3. `docs/DECISIONS.md`
4. `docs/ERROR_PREVENTION.md`
5. `docs/DEPLOYMENT.md`
6. `docs/ROADMAP.md`
7. Relevantní `.cursor/rules/`

Plus dokument specifický pro etapu (např. `REVIEW_ALGORITHM.md` pro etapu 7).

---

## Typický cyklus jedné etapy

```
1. Přečíst ROADMAP → zjistit rozsah etapy
2. Plan mode → navrhnout konkrétní kroky
3. Schválit plán
4. Agent mode → implementovat
5. Review → zkontrolovat diff a checklist
6. Ruční smoke test v prohlížeči
7. npm run lint && npm run build
8. Commit
9. (Volitelně) Push → Vercel deploy
10. Teprve pak další etapa
```

---

## Pravidla pro prompty

### DO ✅

- „Implementuj Etapu X podle ROADMAP.md“
- „Přečti docs/ARCHITECTURE.md a navrhni strukturu pro features/math“
- „Oprav lint chybu v souboru X – minimální změna“
- „Vypiš změněné soubory a ověřovací kroky“

### DON'T ❌

- „Udělej celou aplikaci“
- „Přidej databázi a registraci“
- „Refaktoruj celý projekt“
- „Přidej knihovnu X“ (bez výslovného důvodu)
- Prompt bez reference na docs

---

## Co očekávat od agenta po etapě

Agent musí na konci vypsat:

1. **Seznam změněných souborů**
2. **Rizika** – co se mohlo pokazit
3. **Ověřovací kroky** – co ručně zkontrolovat
4. **Doporučený commit message**
5. **Potvrzení** – co se záměrně neimplementovalo

---

## Řešení problémů

| Problém | Postup |
|---------|--------|
| Agent změnil moc souborů | Review diff, vrátit nesouvisející změny |
| Build selhal | Přečíst první chybu v logu, minimální oprava |
| Agent přidal závislost | Odstranit, pokud nebyla schválená |
| Agent implementoval mimo etapu | Vrátit, zúžit prompt na rozsah etapy |
| Něco nefunguje v prohlížeči | Ask mode – analyzovat příčinu |

---

## Užitečné příkazy

```bash
npm run dev          # lokální vývoj
npm run lint         # kontrola kódu
npm run build        # produkční build
git status           # co se změnilo
git diff             # detail změn
```
