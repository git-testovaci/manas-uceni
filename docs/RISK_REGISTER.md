# Registr rizik

Přehled rizik projektu s plánem prevence. Pravidelně kontrolovat a aktualizovat.

---

## R1 – Příliš velký rozsah

| | |
|---|---|
| **Riziko** | Snaha implementovat vše najednou (math + czech + review + sounds + i18n) |
| **Pravděpodobnost** | Vysoká |
| **Dopad** | Vysoký – nefunkční kód, chaos, demotivace |
| **Prevence** | Roadmapa 11 etap. Jeden prompt = jedna etapa. CURSOR_WORKFLOW.md |
| **Co sledovat** | Počet změněných souborů v jednom commitu (>15 = varování) |

---

## R2 – Cursor udělá moc velkou změnu

| | |
|---|---|
| **Riziko** | AI agent implementuje mimo rozsah etapy nebo změní nesouvisející soubory |
| **Pravděpodobnost** | Střední |
| **Dopad** | Střední – těžká review, možné regrese |
| **Prevence** | Plan mode před implementací. Review diff po každé změně. Explicitní rozsah v promptu. |
| **Co sledovat** | git diff – jsou tam neočekávané soubory? |

---

## R3 – Deployment chyba

| | |
|---|---|
| **Riziko** | Push do main selže na Vercel build |
| **Pravděpodobnost** | Střední |
| **Dopad** | Střední – aplikace offline, ale rollback možný |
| **Prevence** | `npm run lint && npm run build` lokálně před push. DEPLOYMENT.md |
| **Co sledovat** | Vercel deployment status po každém push |

---

## R4 – Server/client chyba v Next.js

| | |
|---|---|
| **Riziko** | localStorage, useState nebo event handlery v Server Component |
| **Pravděpodobnost** | Střední |
| **Dopad** | Střední – build error nebo runtime crash |
| **Prevence** | `"use client"` tam, kde je potřeba. Browser API jen v client komponentách. |
| **Co sledovat** | Build log – `localStorage is not defined`, `useState only works in Client Components` |

---

## R5 – localStorage chyba nebo poškozená data

| | |
|---|---|
| **Riziko** | Neplatný JSON, plný storage, smazaná data uživatelem |
| **Pravděpodobnost** | Nízká |
| **Dopad** | Střední – ztráta pokroku nebo crash |
| **Prevence** | Storage helper s try/catch a fallback. LOCAL_STORAGE_STRATEGY.md |
| **Co sledovat** | Ruční test: smazat localStorage → app funguje. Vložit garbage → app funguje. |

---

## R6 – UI bude pro dítě složité

| | |
|---|---|
| **Riziko** | Příliš mnoho prvků, malá tlačítka, matoucí navigace |
| **Pravděpodobnost** | Střední |
| **Dopad** | Vysoký – dítě aplikaci nebude chtít používat |
| **Prevence** | UI_UX_GUIDELINES.md. Jedna akce na obrazovce. Testovat na mobilu. |
| **Co sledovat** | Feedback dcery – „nevím, co mám dělat" = problém |

---

## R7 – Vysvětlení bude moc dlouhé

| | |
|---|---|
| **Riziko** | Text vysvětlení násobení nebo i/y zahltí dítě |
| **Pravděpodobnost** | Střední |
| **Dopad** | Střední – dítě přestane číst |
| **Prevence** | Max 3–4 řádky textu. Vizuální pomůcka místo dlouhého textu. |
| **Co sledovat** | Délka feedback panelu na mobilu |

---

## R8 – Zvuky budou rušit

| | |
|---|---|
| **Riziko** | Zvuky příliš hlasité nebo časté, dítě/rodina je vypne a zapomene |
| **Pravděpodobnost** | Střední |
| **Dopad** | Nízký – zvuky jsou volitelné |
| **Prevence** | Jemné zvuky. Vypínatelné. Žádný negativní zvuk. Nízká hlasitost. |
| **Co sledovat** | Feedback – ruší zvuky? |

---

## R9 – Budoucí práce s daty dětí

| | |
|---|---|
| **Riziko** | Při rozšíření na veřejnost – GDPR, souhlas rodičů, bezpečnost dat dětí |
| **Pravděpodobnost** | Nízká (teď) |
| **Dopad** | Velmi vysoký (později) |
| **Prevence** | MVP neukládá osobní data. SECURITY.md. DECISIONS.md. Právní konzultace před veřejným spuštěním. |
| **Co sledovat** | Jaká data se začnou ukládat při přidání registrace |

---

## R10 – Zbytečné závislosti

| | |
|---|---|
| **Riziko** | Agent přidá knihovny (state management, i18n framework, UI kit), které MVP nepotřebuje |
| **Pravděpodobnost** | Střední |
| **Dopad** | Střední – větší bundle, složitější maintenance |
| **Prevence** | Pravidlo: žádné závislosti bez schválení. ERROR_PREVENTION.md. Review package.json po každé etapě. |
| **Co sledovat** | git diff package.json – přibyla závislost? |

---

## Matice rizik

```
Dopad ↑
Vysoký │ R1        R6        R9
       │ R2  R3 R4 R5  R7 R8  R10
Nízký  │
       └────────────────────→ Pravděpodobnost
         Nízká    Střední    Vysoká
```

---

## Revize

- Kontrolovat po každých 3 etapách
- Přidat nové riziko, pokud se objeví
- Označit uzavřená rizika
