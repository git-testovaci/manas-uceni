# UI/UX guidelines

Pravidla pro vizuální design a uživatelský zážitek. Aplikace je pro dítě na ZŠ, ale ne infantilní.

---

## Základní principy

1. **Jedna hlavní akce na obrazovce** – dítě ví, co má dělat
2. **Velká tlačítka** – snadno klikatelné na mobilu (min. ~44×44px)
3. **Velké písmo** – čitelné bez zoomu
4. **Krátké texty** – dítě není zahlceno
5. **Minimum rušivých prvků** – žádný vizuální chaos
6. **Chyba klidně a pozitivně** – chyba je věc k procvičení

---

## Tón komunikace

| ❌ Nepoužívat | ✅ Používat |
|--------------|------------|
| Špatně! | Ještě ne. Ukážeme si postup. |
| To je blbě | Tohle si ještě procvičíme. |
| FAIL | Ještě ne. |
| Červený křížek jako hlavní prvek | Jemná oranžová + vysvětlení |

---

## Barvy

| Účel | Barva | Poznámka |
|------|-------|----------|
| Matematika | Modrá | Akcenty, hlavička sekce |
| Čeština | Fialová | Akcenty, hlavička sekce |
| Angličtina (budoucí) | Zelená | Zatím placeholder |
| Úspěch | Zelená | Správná odpověď, pochvala |
| Chyba | Jemná oranžová | Ne agresivní červená |
| Pozadí | Světlé | Čisté, moderní |
| Text | Tmavě šedá/černá | Dostatečný kontrast |

---

## Typografie

- Hlavní otázka: velká, tučná
- Vysvětlení: menší, ale stále čitelné
- Feedback: střední velikost, krátký
- Font: systémový nebo jednoduchý sans-serif (Tailwind default)

---

## Layout

- **Centrovaný obsah** – max-width pro desktop
- **Jedna otázka uprostřed obrazovky**
- **Tlačítka pod otázkou** – jasná hierarchie
- **Navigace zpět** – vždy viditelná (šipka nebo odkaz)
- **Responzivní:** mobil first, tablet, desktop

---

## Komponenty

### Tlačítka

- Velká, zaoblená
- Dostatečný padding
- Hover/focus stavy
- Disabled stav vizuálně odlišený

### Input (matematika)

- Velký, centrovaný
- Typ number nebo text s numerickou klávesnicí na mobilu
- Label pro přístupnost

### Volba I/Y (čeština)

- Dvě velká tlačítka vedle sebe
- Jasně odlišená po kliknutí (správně/špatně)

### Feedback panel

- Krátký text
- Barva podle výsledku (zelená/oranžová)
- Vysvětlení pod feedbackem (po chybě)

---

## Animace

- **Decentní a krátké** – max ~300ms
- **Žádné dlouhé animace** – dítě nečeká
- **Respektovat `prefers-reduced-motion`** – vypnout nebo zjednodušit
- **Animace nesmí být nutné pro pochopení** – vždy i textový feedback
- **Lze vypnout** v nastavení

---

## Zvuky

- Jemné cinknutí při správné odpovědi
- Krátký potlesk při opravené chybě
- **Žádný negativní zvuk při chybě**
- **Lze vypnout** v nastavení
- Zvuk není jediná zpětná vazba – vždy i vizuální

---

## Maskot

**Žádný maskot, postavičky ani avatary.** Design stojí na barvách, typografii a layoutu.

---

## Příklady obrazovek

### Homepage

```
┌─────────────────────────┐
│                         │
│  Co dnes procvičíme?    │
│                         │
│  ┌─────────────────┐    │
│  │   Matematika    │    │  modrá
│  └─────────────────┘    │
│  ┌─────────────────┐    │
│  │    Čeština      │    │  fialová
│  └─────────────────┘    │
│  ┌─────────────────┐    │
│  │ Moje procvičov. │    │
│  └─────────────────┘    │
│                         │
└─────────────────────────┘
```

### Matematika

```
┌─────────────────────────┐
│  ← Zpět                 │
│                         │
│      7 × 8 = [___]      │
│                         │
│     [ Odeslat ]         │
│                         │
└─────────────────────────┘
```

---

## Odkazy

- [ACCESSIBILITY.md](./ACCESSIBILITY.md)
- [PRODUCT_REQUIREMENTS.md](./PRODUCT_REQUIREMENTS.md)
