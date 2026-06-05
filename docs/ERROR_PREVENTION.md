# Prevence chyb

Praktický seznam pravidel, která chrání projekt před nejčastějšími chybami při vývoji s AI agentem.

---

## Zlaté pravidlo

**Prevence chyb má přednost před rychlou implementací.**

Raději o etapu pomaleji, než opravovat chaos z velké změny.

---

## Před implementací

- [ ] Přečíst relevantní docs (PROJECT_BRIEF, ARCHITECTURE, ROADMAP, DECISIONS)
- [ ] Zjistit, která etapa roadmapy se implementuje
- [ ] U větší změny nejdřív **Plan mode**, schválení, teprve Agent
- [ ] **Neimplementovat velké celky najednou** – jedna etapa = jeden commit
- [ ] **Nepřidávat závislosti** bez výslovného důvodu a schválení

---

## Během implementace

- [ ] **Neměnit nesouvisející soubory** – jen to, co etapa vyžaduje
- [ ] **Nedělat refaktor zároveň s novou funkcí** – oddělit do vlastní etapy
- [ ] **UI a logiku držet odděleně** – logika v `lib/`, UI v `components/` a `features/`
- [ ] **localStorage nepoužívat přímo v náhodných komponentách** – vždy přes `lib/storage/`
- [ ] **Browser API jen v client komponentách** – localStorage, Audio, window, document
- [ ] **Udržovat server/client hranici v Next.js** – `"use client"` tam, kde je potřeba
- [ ] **Storage vrstvu dělat tolerantní vůči rozbitým datům** – fallback, ne crash

---

## Po implementaci

- [ ] **Každá změna musí mít ověřovací kroky** – ruční smoke test
- [ ] **Diff před commitem vždy zkontrolovat** – jen očekávané soubory
- [ ] **Před push do main doporučit lint/build:**
  ```bash
  npm run lint
  npm run build
  ```
- [ ] Vypsat změněné soubory, rizika a commit message

---

## Při chybě nebo bugu

1. **Nejdřív analyzovat příčinu, nehádat** – přečíst chybovou hlášku
2. Najít soubor a řádek chyby
3. **Minimální oprava** – ne přepis celého modulu
4. Ověřit lint/build
5. Ruční test v prohlížeči

---

## Co nikdy nedělat

| ❌ Nikdy | ✅ Místo toho |
|----------|---------------|
| Přepsat celý projekt bez schválení | Malé etapy podle ROADMAP |
| Přidat knihovnu „pro jistotu“ | Použít existující stack |
| Vypnout TypeScript/ESLint kvůli obejití | Opravit skutečnou chybu |
| localStorage v 10 komponentách | Jedna storage vrstva |
| Logika review v JSX | `lib/review/algorithm.ts` |
| Server Component s useState | Client Component s `"use client"` |
| Commit bez kontroly diffu | Review diff v Ask/Review mode |
| Push neověřené velké změny do main | lint + build + smoke test |

---

## Next.js specifika

- **App Router** – stránky v `app/`, ne `pages/`
- **Server Components** default – client jen kde nutné
- **Metadata** v layout/page, ne v client komponentách
- **Chránit kompatibilitu s Next.js App Routerem** – ne importovat server-only věci do client

---

## Vercel specifika

- **Chránit kompatibilitu s Vercel Hobby** – žádné vlastní servery, edge funkce jen pokud nutné
- Build musí projít lokálně před push
- Deployment chyby řešit podle DEPLOYMENT.md

---

## Checklist při podezření na problém

```
□ Je chyba v konzoli prohlížeče nebo v build logu?
□ Který soubor a řádek?
□ Je to server/client problém?
□ Je to localStorage volané na serveru?
□ Změnily se soubory mimo rozsah etapy?
□ Přibyla neschválená závislost?
□ Odpovídá změna ROADMAP etapě?
```

---

## Odkazy

- [DEPLOYMENT.md](./DEPLOYMENT.md) – nasazování
- [QUALITY_CHECKLIST.md](./QUALITY_CHECKLIST.md) – checklist etapy
- [CURSOR_WORKFLOW.md](./CURSOR_WORKFLOW.md) – workflow s agentem
- [RISK_REGISTER.md](./RISK_REGISTER.md) – registr rizik
