# System Context Diagram

Přehled systému a externích entit.

```mermaid
C4Context
    title System Context – Vyukový web

    Person(child, "Dítě", "Procvičuje matematiku a češtinu")
    Person(parent, "Rodič", "Vede projekt, nasazuje, konfiguruje")

    System(app, "Vyukový web", "Next.js webová aplikace pro domácí procvičování")

    System_Ext(localStorage, "localStorage", "Lokální úložiště prohlížeče")
    System_Ext(github, "GitHub", "Verzování zdrojového kódu")
    System_Ext(vercel, "Vercel", "Hosting a deployment")

    Rel(child, app, "Procvičuje", "HTTPS")
    Rel(parent, app, "Kontroluje, nasazuje")
    Rel(app, localStorage, "Ukládá pokrok a nastavení")
    Rel(parent, github, "Commituje kód")
    Rel(github, vercel, "Trigger deploye")
    Rel(vercel, app, "Hostuje produkci")
```

## Popis entit

| Entita | Role |
|--------|------|
| Dítě | Hlavní uživatel – procvičuje, odpovídá, opakuje chyby |
| Rodič | Vede projekt v Cursoru, pushuje na GitHub, sleduje deploy |
| Vyukový web | Next.js aplikace – UI, logika, statická data |
| localStorage | Lokální pokrok, review stavy, nastavení |
| GitHub | Zdrojový kód, verzování |
| Vercel | Production hosting, automatický build |

## Omezení MVP

- Žádná databáze
- Žádná registrace
- Žádné externí API
- Data jen v prohlížeči dítěte
