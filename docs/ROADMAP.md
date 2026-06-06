# Roadmap – etapy vývoje

Projekt se staví po malých etapách. Každá etapa má jasný cíl, rozsah a ověřovací kroky. **Nikdy neimplementovat více etap najednou.**

---

## Etapa 1 – Projektová dokumentace, pravidla, diagramy a prevence chyb

**Cíl:** Vytvořit profesionální projektový základ před první implementací.

**Rozsah:**
- Všechny soubory v `docs/`
- Diagramy v `docs/diagrams/`
- Pravidla v `.cursor/rules/`

**Co se nesmí dělat:**
- Implementace UI nebo funkcí
- Změna `app/page.tsx`, `package.json`
- Přidávání závislostí

**Dotčené oblasti:** `docs/`, `.cursor/rules/`

**Ověřovací kroky:**
- [ ] Všechny požadované soubory existují
- [ ] `npm run lint` projde
- [ ] `npm run build` projde
- [ ] Aplikační kód nezměněn

**Rizika:** Příliš obecná dokumentace → psát konkrétně a akčně.

**Commit message:** `docs: add project foundation and safety rules`

---

## Etapa 2 – Základní layout a homepage

**Cíl:** Responzivní layout a homepage s rozcestníkem.

**Rozsah:**
- `app/layout.tsx` – metadata, základní layout
- `app/page.tsx` – homepage s třemi volbami
- `components/layout/` – PageShell, Header
- `components/ui/` – Button
- `app/globals.css` – barvy, typografie

**Co se nesmí dělat:**
- Matematika, čeština, localStorage
- Review algoritmus
- Zvuky

**Dotčené oblasti:** `app/`, `components/`, `app/globals.css`

**Ověřovací kroky:**
- [ ] Homepage se načte na mobilu, tabletu, desktopu
- [ ] Tři volby viditelné a klikatelné (odkazy zatím mohou vést na placeholder)
- [ ] Velká tlačítka, čistý design
- [ ] `npm run lint && npm run build`

**Rizika:** Příliš složitý layout → držet jednoduchost.

**Commit message:** `feat: add basic layout and homepage`

---

## Etapa 2.1 – Sladění navigace se škálovatelnou strukturou předmětů

**Cíl:** Homepage zobrazuje předměty, ne konkrétní témata. Placeholder stránky a docs popisují budoucí model.

**Rozsah:**
- `app/page.tsx` – obecné popisky karet
- `app/math/page.tsx`, `app/czech/page.tsx`, `app/practice/page.tsx` – upřesněné placeholdery
- `docs/PROJECT_BRIEF.md`, `PRODUCT_REQUIREMENTS.md`, `ARCHITECTURE.md`, `DECISIONS.md`, `ROADMAP.md`

**Co se nesmí dělat:**
- Implementace témat, filtrů, cvičení
- localStorage, review, nové závislosti
- Změny v `components/` (pokud není nutné)

**Ověřovací kroky:**
- [ ] Homepage neukazuje „Násobilka“ ani „i/y“ jako popisky karet
- [ ] Placeholder stránky popisují budoucí strukturu
- [ ] `npm run lint && npm run build`

**Commit message:** `chore: align navigation with scalable subject structure`

---

## Etapa 3 – Datové typy a čistá logika procvičování

**Cíl:** TypeScript typy a testovatelné funkce bez UI.

**Rozsah:**
- `types/` – všechny typy z DATA_MODEL.md
- `lib/validation/` – validace odpovědí
- `lib/review/algorithm.ts` – review algoritmus
- `data/math/multiplication.ts` – statická data násobilky
- `data/czech/i-y.ts` – statická data i/y

**Co se nesmí dělat:**
- UI komponenty
- localStorage
- Změna homepage

**Dotčené oblasti:** `types/`, `lib/`, `data/`

**Ověřovací kroky:**
- [ ] TypeScript kompiluje bez chyb
- [ ] Review algoritmus funguje podle REVIEW_ALGORITHM.md (ruční kontrola)
- [ ] Statická data obsahují ukázkové položky
- [ ] `npm run lint && npm run build`

**Rizika:** Logika v komponentách místo lib → držet oddělení.

**Commit message:** `feat: add types, practice data and review logic`

---

## Etapa 4 – Matematický trenažér násobilky

**Cíl:** Funkční procvičování násobilky s inputem a feedbackem.

**Rozsah:**
- `app/math/page.tsx`
- `features/math/` – komponenty a hook
- Základní feedback (správně / chybně)

**Co se nesmí dělat:**
- Vizuální pomůcky (etapa 5)
- localStorage (etapa 7)
- Čeština

**Dotčené oblasti:** `app/math/`, `features/math/`

**Ověřovací kroky:**
- [ ] Dítě zadá číslo a odešle odpověď
- [ ] Správná odpověď → pozitivní reakce
- [ ] Chybná odpověď → klidný text + správný výsledek
- [ ] Responzivní na mobilu
- [ ] `npm run lint && npm run build`

**Rizika:** Výběrový test místo inputu → vždy ruční zadání čísla.

**Commit message:** `feat: add multiplication practice trainer`

---

## Etapa 5 – Vysvětlení a vizuální pomůcky

**Cíl:** Postup sčítání a mřížka teček/čtverečků po chybě.

**Rozsah:**
- `features/math/MultiplicationVisual.tsx`
- `features/math/MultiplicationExplanation.tsx`
- Logika generování postupu v `lib/`

**Co se nesmí dělat:**
- localStorage
- Změna review algoritmu

**Dotčené oblasty:** `features/math/`, `lib/`

**Ověřovací kroky:**
- [ ] Po chybě se zobrazí postup (8+8+8+...)
- [ ] Vizuální mřížka odpovídá násobení (7×8 = 7 řádků po 8)
- [ ] Text není příliš dlouhý
- [ ] `npm run lint && npm run build`

**Rizika:** Příliš dlouhé vysvětlení → max 3–4 řádky textu.

**Commit message:** `feat: add multiplication explanation and visual aid`

---

## Etapa 6 – České i/y cvičení

**Cíl:** Klikací cvičení i/y s feedbackem.

**Rozsah:**
- `app/czech/page.tsx`
- `features/czech/` – komponenty a hook

**Co se nesmí dělat:**
- localStorage (etapa 7)
- Angličtina

**Dotčené oblasty:** `app/czech/`, `features/czech/`

**Ověřovací kroky:**
- [ ] Zobrazí se věta s mezerou
- [ ] Tlačítka I/Y fungují
- [ ] Po odpovědi správná varianta + vysvětlení
- [ ] `npm run lint && npm run build`

**Rizika:** Příliš mnoho textu najednou → krátká vysvětlení.

**Commit message:** `feat: add czech i-y practice exercise`

---

## Etapa 7 – LocalStorage a chytré opakování

**Cíl:** Ukládání pokroku a sekce „Moje procvičování“.

**Rozsah:**
- `lib/storage/` – celá storage vrstva
- `features/review/` – UI pro opakování
- `app/practice/page.tsx`
- Napojení math + czech na review

**Co se nesmí dělat:**
- Databáze
- Zvuky (etapa 8)

**Dotčené oblasti:** `lib/storage/`, `features/review/`, `app/practice/`, `features/math/`, `features/czech/`

**Ověřovací kroky:**
- [ ] Chyba se uloží do localStorage
- [ ] „Moje procvičování“ zobrazí weak položky
- [ ] Opravená chyba → „Paráda! Opravená chyba.“
- [ ] Smazání localStorage → aplikace funguje
- [ ] Neplatný JSON → aplikace funguje
- [ ] `npm run lint && npm run build`

**Rizika:** localStorage přímo v komponentách → vždy přes helper.

**Commit message:** `feat: add localStorage and smart review system`

---

## Etapa 8 – Nastavení zvuků a animací

**Cíl:** Vypínatelné zvuky a animace.

**Rozsah:**
- `features/settings/`
- `app/settings/page.tsx`
- Jemné zvuky (cinknutí, potlesk)
- Respekt `prefers-reduced-motion`

**Co se nesmí dělat:**
- Negativní zvuky při chybě
- Rušivé animace

**Dotčené oblasty:** `features/settings/`, `app/settings/`, `features/math/`, `features/czech/`

**Ověřovací kroky:**
- [ ] Zvuky lze vypnout
- [ ] Animace lze vypnout
- [ ] Při vypnutých zvucích se nehrají
- [ ] Reduced motion funguje
- [ ] `npm run lint && npm run build`

**Rizika:** Hlasité zvuky → jemné, krátké.

**Commit message:** `feat: add sound and animation settings`

---

## Etapa 9 – Základní vícejazyčnost

**Cíl:** Struktura překladů, všechny texty centralizované.

**Rozsah:**
- `features/i18n/` nebo `lib/i18n/`
- Slovníky `cs.ts`, `en.ts` (prázdný/stub), `sk.ts` (stub)
- Nahradit natvrdo psané texty klíči

**Co se nesmí dělat:**
- Externí i18n knihovna (pokud není nutná)
- URL prefixy `/cs`, `/en`

**Dotčené oblasti:** `features/i18n/`, všechny komponenty s texty

**Ověřovací kroky:**
- [ ] Všechny UI texty jdou ze slovníku
- [ ] Aplikace funguje v češtině
- [ ] Struktura pro en/sk existuje
- [ ] `npm run lint && npm run build`

**Rizika:** Předčasná složitost → jednoduchý `t(key)` helper.

**Commit message:** `feat: add i18n structure with czech translations`

---

## Etapa 10 – Review, lint/build a deploy

**Cíl:** Finální kontrola MVP a nasazení na Vercel.

**Rozsah:**
- Ruční smoke testy všech scénářů
- Oprava nalezených chyb
- SEO metadata
- Přístupnost
- Deploy na Vercel

**Co se nesmí dělat:**
- Nové funkce mimo MVP
- Velké refaktory

**Dotčené oblasti:** celý projekt

**Ověřovací kroky:**
- [ ] Všechny smoke testy z TESTING_STRATEGY.md
- [ ] QUALITY_CHECKLIST.md splněn
- [ ] `npm run lint && npm run build`
- [ ] Deploy na Vercel úspěšný
- [ ] Aplikace funguje online

**Rizika:** Deployment chyba → viz DEPLOYMENT.md.

**Commit message:** `chore: finalize MVP for production deploy`

---

## Etapa 11 – Příprava na angličtinu

**Cíl:** Připravit strukturu pro budoucí anglický modul (bez plné implementace).

**Rozsah:**
- Typ `english` v Subject
- Placeholder v homepage (šedé / „brzy“)
- Složka `features/english/` (prázdná nebo stub)
- Barva zelená v design systému

**Co se nesmí dělat:**
- Plná implementace anglických cvičení
- Nové závislosti

**Dotčené oblasti:** `types/`, `features/english/`, homepage, `globals.css`

**Ověřovací kroky:**
- [ ] Typ english existuje
- [ ] Homepage má placeholder pro angličtinu
- [ ] Build projde
- [ ] Nic se nerozbilo

**Rizika:** Předčasná implementace → jen struktura.

**Commit message:** `chore: prepare english module structure`

---

## Pravidlo pro každou etapu

1. Přečíst relevantní docs a rules
2. Plan mode pro větší změny
3. Implementovat jen rozsah etapy
4. Ověřit podle checklistu
5. Commit s doporučenou zprávou
6. Teprve pak další etapa
