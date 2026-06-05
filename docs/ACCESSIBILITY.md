# Přístupnost (Accessibility)

Pravidla pro přístupný web, aby aplikaci mohlo používat co nejvíce dětí.

---

## Základní požadavky

### Kontrast

- Text musí mít dostatečný kontrast vůči pozadí (WCAG AA: min. 4.5:1 pro běžný text)
- Oranžová pro chybu musí být čitelná na světlém pozadí
- Zelená pro úspěch musí být čitelná
- Netestovat jen „vypadá hezky" – ověřit kontrast

### Ovládání klávesnicí

- Všechna tlačítka a odkazy musí být dosažitelná Tabem
- Input musí být focusovatelný
- Enter odesílá odpověď v matematice
- I/Y volba musí být ovladatelná klávesnicí (tlačítka, ne div)

### Focus states

- Viditelný focus ring na interaktivních prvcích
- Nikdy `outline: none` bez náhrady
- Tailwind: `focus-visible:ring-2` nebo podobné

---

## Sémantické HTML

| Prvek | Použití |
|-------|---------|
| `<main>` | Hlavní obsah stránky |
| `<nav>` | Navigace |
| `<h1>` | Jeden hlavní nadpis na stránce |
| `<button>` | Klikací akce (I/Y volba, Odeslat) |
| `<a>` | Navigace mezi stránkami |
| `<label>` | Popisek inputu |
| `<input>` | Zadání čísla v matematice |

**Nepoužívat `<div onClick>` místo `<button>`.**

---

## Labely a ARIA

- Input pro matematiku: `<label>` nebo `aria-label="Výsledek"`
- Tlačítka I/Y: srozumitelný text („I" / „Y"), ne jen barva
- Feedback panel: `role="status"` nebo `aria-live="polite"` pro oznámení výsledku
- Navigace zpět: srozumitelný text („Zpět na hlavní stránku")

---

## Barva není jediný signál

- Správná odpověď: zelená **+ text** („Výborně!")
- Chybná odpověď: oranžová **+ text** („Ještě ne.")
- I/Y volba: text na tlaítku, ne jen barevné pozadí
- Ikony vždy s textovým popisem nebo labelem

---

## Zvuky a animace

- **Zvuky nejsou jediná zpětná vazba** – vždy i vizuální text
- **Animace nesmí být nutná pro pochopení** – informace i bez animace
- Respektovat `prefers-reduced-motion`:
  ```css
  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; transition: none !important; }
  }
  ```
- Zvuky a animace musí jít vypnout v nastavení

---

## Mobilní přístupnost

- Velká dotyková plocha (min. 44×44px)
- Input typ number → numerická klávesnice na mobilu
- Žádné hover-only interakce (mobil nemá hover)

---

## Testování přístupnosti

### Ruční checklist

- [ ] Tab projde všemi interaktivními prvky
- [ ] Focus je viditelný
- [ ] Stránku lze ovládat bez myši
- [ ] Screen reader (VoiceOver/TalkBack) přečte otázku a feedback
- [ ] Barvy fungují i bez barevného vidění (text je dostatečný)

### Nástroje (volitelně)

- Chrome DevTools → Lighthouse → Accessibility
- axe DevTools extension

---

## Odkazy

- [UI_UX_GUIDELINES.md](./UI_UX_GUIDELINES.md)
- [QUALITY_CHECKLIST.md](./QUALITY_CHECKLIST.md)
