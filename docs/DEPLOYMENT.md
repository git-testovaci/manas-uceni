# Deployment

Bezpečné nasazování aplikace na Vercel přes GitHub.

---

## Architektura deploye

```
Cursor (vývoj)
  → Git commit
  → GitHub (main větev)
  → Vercel (automatický build)
  → Online web
```

Diagram: [diagrams/deployment-flow.md](./diagrams/deployment-flow.md)

---

## Základní informace

| Položka | Hodnota |
|---------|---------|
| Hosting | Vercel Hobby |
| Zdroj kódu | GitHub |
| Hlavní větev | `main` |
| Trigger deploye | Push do `main` |
| Framework | Next.js (autodetekce) |

---

## Workflow před pushem do main

```bash
# 1. Zkontrolovat změny
git status
git diff

# 2. Ověřit kód
npm run lint
npm run build

# 3. Commit
git add .
git commit -m "feat: popis změny"

# 4. Push
git push origin main
```

**Push do main spustí production deployment na Vercel.**

---

## Před každým pushem doporučit

```bash
npm run lint
npm run build
```

Pokud build selže lokálně, selže i na Vercel.

---

## Preview deploye

- Push do jiné větve (ne `main`) vytvoří preview URL na Vercel
- Vhodné pro testování větší změny před mergem do main
- Pro domácí MVP stačí push do main po ověření

---

## Při deployment chybě

1. **Otevřít Vercel deployment logs** (Vercel dashboard → Deployments → failed deploy → Logs)
2. **Najít první skutečnou chybu** – scrolluj od začátku logu, ignoruj varování
3. **Neopravovat náhodně** – pochopit příčinu
4. **Zjistit soubor a příčinu chyby** – TypeScript error, import, missing file
5. **Udělat minimální opravu** – ne refaktor
6. **Znovu ověřit build lokálně:**
   ```bash
   npm run lint
   npm run build
   ```
7. Commit, push, sledovat nový deploy

---

## Typické deployment chyby

| Chyba | Příčina | Oprava |
|-------|---------|--------|
| `Module not found` | Špatný import nebo chybějící soubor | Opravit cestu importu |
| `Type error` | TypeScript chyba | Opravit typ |
| `use client` missing | Browser API v Server Component | Přidat `"use client"` |
| `localStorage is not defined` | Storage volané na serveru | Přesunout do client/hook |
| Build timeout | Příliš velký projekt | Zkontrolovat závislosti |

---

## Co nikdy nedělat při deployi

- ❌ Nepřidávat náhodné závislosti
- ❌ Nemazat soubory naslepo
- ❌ Nevypínat TypeScript/ESLint kvůli obejití chyby (`ignoreBuildErrors`)
- ❌ Nerefaktorovat architekturu bez plánu
- ❌ Neposílat do main neověřené velké změny
- ❌ Necommitovat `.env` se secrets

---

## Environment variables

- MVP nepotřebuje environment variables
- Pokud budou potřeba později: nastavit v Vercel dashboard, ne v kódu
- `.env.local` je v `.gitignore` – nikdy necommitovat

---

## Rollback

- Vercel dashboard → Deployments → předchozí úspěšný deploy → Promote to Production
- Nebo: `git revert` + push do main

---

## Monitoring po deployi

- [ ] Otevřít produkční URL v prohlížeči
- [ ] Homepage se načte
- [ ] Hlavní funkce fungují (smoke test)
- [ ] Konzole prohlížeče bez chyb

---

## Odkazy

- [ERROR_PREVENTION.md](./ERROR_PREVENTION.md)
- [QUALITY_CHECKLIST.md](./QUALITY_CHECKLIST.md)
- [TESTING_STRATEGY.md](./TESTING_STRATEGY.md)
