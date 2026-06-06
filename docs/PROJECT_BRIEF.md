# Projektový brief – Vyukový web

## Co stavíme

Domácí výuková webová aplikace pro procvičování na základní škole. Dítě procvičuje matematiku (násobilka) a češtinu (i/y) v klidném, pozitivním prostředí. Pokrok a chyby se ukládají lokálně v prohlížeči.

**Aplikace je primárně pro domácí procvičování dcery.**

## Pro koho

- **Primární uživatel:** dítě na ZŠ (cca 2.–5. ročník)
- **Sekundární:** rodič, který projekt vede a nasazuje
- **Budoucí:** další děti a veřejnost po rozšíření projektu

## Proč projekt existuje

Dcera potřebuje doma pravidelně procvičovat násobilku a pravopis (i/y). Existující aplikace jsou často rušivé, infantilní nebo trestají chyby negativně. Tento projekt má být jednoduchý, klidný a zaměřený na opakování slabých míst.

## Hlavní princip aplikace

**Chyba není selhání, ale věc k procvičení.**

- Chyba se ukládá k chytrému opakování, ne jako trest.
- Aplikace vysvětluje postup, ne kritizuje dítě.
- Po opravené chybě zazní speciální pochvala: „Paráda! Opravená chyba.“
- Nikdy agresivní tón typu „Špatně!“ jako hlavní zpětná vazba.

## MVP rozsah

**MVP je bez registrace a databáze.**

| Oblast | MVP |
|--------|-----|
| Homepage | Rozcestník předmětů: Matematika, Čeština, Moje procvičování (bez konkrétních témat) |
| Matematika | Předmětová stránka → první téma násobilka – ruční zadání, vysvětlení, vizuální pomůcka |
| Čeština | Předmětová stránka → první téma i/y – klikací volba I/Y |
| Opakování | Společný systém pro oba předměty, localStorage |
| Nastavení | Zvuky a animace (vypnutelné) |
| Jazyk | Primárně čeština, struktura pro en/sk |
| Hosting | Vercel Hobby, GitHub, Next.js + TypeScript + Tailwind |

## Co není součástí MVP

- Databáze, registrace, platby
- AI generování úloh
- Učitelský / rodičovský dashboard
- Složité grafy a statistiky
- Maskot a postavičky
- Angličtina (pouze příprava struktury)
- Serverové API (pokud není nutné)
- Ukládání osobních údají dítěte

## Budoucí směr

**Projekt má být později rozšiřitelný pro veřejnost.**

Plánovaná rozšíření (po MVP):

- Angličtina a slovíčka
- Lekce a další témata
- Registrace a synchronizace napříč zařízeními
- Rodičovský přehled
- Právní a bezpečnostní kontrola při práci s daty dětí
- Veřejný provoz

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Vercel Hobby
- GitHub
- Cursor (vývoj s AI agentem)

## Klíčové produktové věty

| Situace | Text |
|---------|------|
| Běžná chyba | „Ještě ne. Ukážeme si postup.“ |
| Opakování slabého místa | „Tohle si ještě procvičíme.“ |
| Opravená stará chyba | „Paráda! Opravená chyba.“ |
| Běžná správná odpověď | Krátká pozitivní reakce (např. „Výborně!“) |

## Navigace a struktura produktu

- **Homepage** – pouze předměty na vysoké úrovni a vstup do globálního procvičování. Ne konkrétní témata (násobilka, i/y).
- **Stránka předmětu** – výběr tématu, filtry a nastavení pro daný předmět, potom start procvičování.
- **Moje procvičování** – smíšený režim napříč matematikou, češtinou a později angličtinou (slabá místa nebo vlastní konfigurace).

## Design v kostce

- Čistý, světlý, moderní – dětsky přívětivý, ne infantilní
- Velká tlačítka, velké písmo, jedna hlavní otázka na obrazovce
- Matematika modrá, čeština fialová, angličtina zelená (budoucí)
- Úspěch zelená, chyba jemná oranžová (ne agresivní červená)
- Bez maskota

## Odkazy na další dokumenty

| Dokument | Účel |
|----------|------|
| [PRODUCT_REQUIREMENTS.md](./PRODUCT_REQUIREMENTS.md) | Detailní požadavky |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Struktura kódu |
| [ROADMAP.md](./ROADMAP.md) | Etapy vývoje |
| [DECISIONS.md](./DECISIONS.md) | Záznam rozhodnutí |
| [CURSOR_WORKFLOW.md](./CURSOR_WORKFLOW.md) | Jak pracovat s Cursorem |
