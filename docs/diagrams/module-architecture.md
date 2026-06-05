# Module Architecture Diagram

Struktura modulů a jejich vztahy.

```mermaid
flowchart TB
    subgraph app ["app/ (Next.js pages)"]
        AppLayout[layout.tsx]
        AppHome[page.tsx]
        AppMath[math/page.tsx]
        AppCzech[czech/page.tsx]
        AppPractice[practice/page.tsx]
        AppSettings[settings/page.tsx]
    end

    subgraph components ["components/ (shared UI)"]
        UI[ui/ Button, Input]
        Layout[layout/ PageShell]
    end

    subgraph features ["features/ (domain modules)"]
        FeatMath[math/]
        FeatCzech[czech/]
        FeatReview[review/]
        FeatSettings[settings/]
        FeatI18n[i18n/]
    end

    subgraph lib ["lib/ (business logic)"]
        LibStorage[storage/]
        LibReview[review/]
        LibValidation[validation/]
    end

    subgraph types ["types/"]
        Types[PracticeItem, ReviewState, UserSettings]
    end

    subgraph data ["data/ (static exercises)"]
        DataMath[math/multiplication.ts]
        DataCzech[czech/i-y.ts]
    end

    AppHome --> Layout
    AppMath --> FeatMath
    AppCzech --> FeatCzech
    AppPractice --> FeatReview
    AppSettings --> FeatSettings

    FeatMath --> UI
    FeatMath --> LibValidation
    FeatMath --> LibReview
    FeatMath --> DataMath
    FeatMath --> FeatI18n

    FeatCzech --> UI
    FeatCzech --> LibValidation
    FeatCzech --> LibReview
    FeatCzech --> DataCzech
    FeatCzech --> FeatI18n

    FeatReview --> LibReview
    FeatReview --> LibStorage
    FeatReview --> FeatI18n

    FeatSettings --> LibStorage
    FeatSettings --> FeatI18n

    LibReview --> Types
    LibStorage --> Types
    LibValidation --> Types
    DataMath --> Types
    DataCzech --> Types

    FeatMath --> LibStorage
    FeatCzech --> LibStorage
```

## Pravidla závislostí

| Modul | Smí importovat z | Nesmí importovat z |
|-------|------------------|---------------------|
| `app/` | `components/`, `features/` | `lib/` přímo (přes features) |
| `components/` | `types/` | `features/`, `lib/`, `data/` |
| `features/` | `components/`, `lib/`, `types/`, `data/` | jiné features (minimálně) |
| `lib/` | `types/` | `features/`, `components/`, `app/` |
| `data/` | `types/` | `lib/`, `features/` |
| `types/` | – | vše ostatní |

## Tok dat

```
data/ → features/ → lib/validation → lib/review → lib/storage → localStorage
                  ↓
              components/ (feedback UI)
```

Viz [ARCHITECTURE.md](../ARCHITECTURE.md)
