# Produktové požadavky (MVP)

Praktický seznam toho, co aplikace musí umět. Každá sekce obsahuje chování, příklady a akceptační kritéria.

---

## 1. Homepage

### Požadavky

- Hlavní rozcestník se třemi volbami: **Matematika**, **Čeština**, **Moje procvičování**
- Jasný, jednoduchý text – dítě hned ví, kam jít
- Responzivní: mobil, tablet, desktop
- Jedna hlavní akce na obrazovce (žádný vizuální chaos)

### Příklad textu

> „Co dnes procvičíme?“

### Akceptační kritéria

- [ ] Stránka se načte bez chyby
- [ ] Tři tlačítka/odkazy vedou na správné sekce
- [ ] Na mobilu jsou tlačítka dostatečně velká (min. ~44px výška)
- [ ] Přístupné z klávesnice

---

## 2. Matematika – násobilka

### Požadavky

- První téma: **násobilka**
- **Není to výběrový test** – dítě zadává výsledek číslem do inputu
- Formát: `7 × 8 = [input]`
- Po správné odpovědi: krátká pozitivní reakce
- Po chybě:
  - Klidná zpětná vazba (ne „Špatně!“)
  - Správný výsledek
  - Postup (sčítání skupin)
  - Vizuální pomůcka (řádky teček/čtverečků)

### Příklad otázky

```
7 × 8 = [____]
```

### Příklad reakcí

| Situace | Reakce |
|---------|--------|
| Správně (poprvé) | „Výborně!“ + jemné cinknutí |
| Správně (dříve chybné) | „Paráda! Opravená chyba.“ + potlesk |
| Chybně | „Ještě ne. Ukážeme si postup.“ |

### Příklad vysvětlení

```
7 × 8 znamená 7 skupin po 8.

8 + 8 + 8 + 8 + 8 + 8 + 8 = 56
```

### Vizuální pomůcka

7 řádků po 8 tečkách nebo čtverečcích.

### Akceptační kritéria

- [ ] Dítě může zadat číslo a odeslat odpověď
- [ ] Správná odpověď zobrazí pozitivní reakci
- [ ] Chybná odpověď zobrazí vysvětlení a vizuální pomůcku
- [ ] Chybná položka se uloží do opakování
- [ ] Opravená stará chyba zobrazí speciální pochvalu

---

## 3. Čeština – i/y

### Požadavky

- První téma: **i/y**
- Rychlé klikací cvičení – volba mezi **I** a **Y**
- Po odpovědi: správná varianta + krátké vysvětlení
- Při chybě: uložit položku k opakování

### Příklad otázky

```
Ps_ štěkali.

[I]  [Y]
```

### Příklady cvičení

| Věta s mezerou | Správně | Vysvětlení (stručně) |
|----------------|---------|----------------------|
| Ps_ štěkali. | Psi | Množné číslo – písmeno i |
| Viděl jsem ps_. | psy | Množné číslo – písmeno y |
| Děti běhal_ po hřišti. | běhaly | Sloveso v množném čísle – y |

### Příklad reakcí

| Situace | Reakce |
|---------|--------|
| Správně | „Správně! Psi štěkali.“ + krátké vysvětlení |
| Chybně | „Ještě ne. Správně je: Psi.“ + vysvětlení |
| Opravená chyba | „Paráda! Opravená chyba.“ |

### Akceptační kritéria

- [ ] Zobrazí se věta s mezerou místo i/y
- [ ] Dítě klikne I nebo Y
- [ ] Po odpovědi se zobrazí správná varianta a vysvětlení
- [ ] Chyba se uloží do opakování

---

## 4. Chytré opakování

### Požadavky

- Společný systém pro matematiku, češtinu a později angličtinu
- Chybné položky v localStorage
- Rozlišit běžnou správnou odpověď a opravenou starou chybu
- Stavy položek: `new` → `learning` → `weak` → `improving` → `mastered`
- Chyba → zařazení do procvičování
- Opakovaný úspěch → prodloužení intervalu
- Nová chyba u dříve zvládnuté položky → návrat mezi slabá místa

### Sekce „Moje procvičování“

- Zobrazí položky ve stavu `weak`, `learning`, `improving`
- Dítě může procvičovat uložené chyby
- Klidný text: „Tohle si ještě procvičíme.“

### Akceptační kritéria

- [ ] Chybná odpověď vytvoří/aktualizuje ReviewState
- [ ] Opravená chyba zobrazí speciální pochvalu
- [ ] „Moje procvičování“ zobrazí položky k opakování
- [ ] Stavy se správně mění podle algoritmu (viz [REVIEW_ALGORITHM.md](./REVIEW_ALGORITHM.md))

---

## 5. Zvuky a animace

### Požadavky

| Nastavení | Výchozí | Chování |
|-----------|---------|---------|
| `soundsEnabled` | true | Jemné cinknutí při správné odpovědi |
| `animationsEnabled` | true | Decentní animace (ne rušivé) |

### Zvuky

- Běžná správná odpověď: jemné cinknutí
- Opravená stará chyba: krátký potlesk
- **Žádný negativní zvuk při chybě**
- Zvuky musí jít vypnout v nastavení

### Animace

- Decentní, krátké
- Respektovat `prefers-reduced-motion`
- Nesmí být nutné pro pochopení obsahu

### Akceptační kritéria

- [ ] Zvuky lze vypnout – po vypnutí se nehrají
- [ ] Animace lze vypnout
- [ ] Při chybě nehraje negativní zvuk
- [ ] Reduced motion je respektováno

---

## 6. Vícejazyčnost

### MVP

- Primárně **čeština (cs)**
- Připravit strukturu pro **en** a **sk**
- Texty ne rozhazovat natvrdo po komponentách – centralizovat tam, kde to dává smysl

### Budoucí (po MVP)

- Ruční přepínač jazyka
- Automatická detekce podle prohlížeče
- URL prefixy `/cs`, `/en`, `/sk`

### Akceptační kritéria (MVP)

- [ ] Všechny uživatelské texty jsou v češtině
- [ ] Struktura překladů existuje (viz [I18N_STRATEGY.md](./I18N_STRATEGY.md))
- [ ] Nové texty se přidávají do překladových souborů, ne natvrdo do JSX

---

## 7. Budoucí angličtina (mimo MVP)

Připravit architekturu tak, aby šlo přidat:

- Předmět `english` se zelenou barvou
- Slovíčka a jednoduchá cvičení
- Stejný review systém jako u matematiky a češtiny

**V MVP se neimplementuje** – pouze typ `Subject` a struktura features.

---

## Co záměrně není v MVP

Viz [PROJECT_BRIEF.md](./PROJECT_BRIEF.md) – databáze, registrace, platby, AI, dashboard, maskot, složité grafy.
