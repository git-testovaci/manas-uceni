# Quality checklist

Projít před dokončením **každé etapy** a před pushem do `main`.

---

## Kód

- [ ] **TypeScript bez chyb** – build projde
- [ ] **Žádné zbytečné závislosti** – package.json nezměněn bez důvodu
- [ ] **Malé komponenty** – jedna odpovědnost na komponentu
- [ ] **Čisté názvy** – srozumitelné pro čtení za 6 měsíců
- [ ] **Oddělená logika od UI** – business logika v `lib/`, ne v JSX
- [ ] **localStorage jen přes helper** – `lib/storage/`, ne v komponentách
- [ ] **Browser API jen v client komponentách** – `"use client"` kde potřeba

---

## UI/UX

- [ ] **Responzivní UI** – mobil, tablet, desktop
- [ ] **Velká tlačítka** – min. ~44px výška
- [ ] **Jedna hlavní akce na obrazovce**
- [ ] **Chyba klidně a pozitivně** – oranžová, ne agresivní červená
- [ ] **Krátké texty** – dítě není zahlceno

---

## Přístupnost

- [ ] **Dostatečný kontrast** textu a pozadí
- [ ] **Labely u inputů**
- [ ] **Focus states** viditelné
- [ ] **Semantické HTML** – button, nav, main, h1
- [ ] **Ovládání klávesnicí** funguje
- [ ] **Barva není jediný signál** – ikona/text u správně/chybně

Viz [ACCESSIBILITY.md](./ACCESSIBILITY.md)

---

## SEO

- [ ] **Title** na stránce
- [ ] **Description** v metadata
- [ ] **Správné nadpisy** – jeden h1, logická hierarchie

Viz [SEO.md](./SEO.md)

---

## Bezpečnost

- [ ] **Žádné secrets** v kódu
- [ ] **Žádná osobní data dítěte** v localStorage
- [ ] **Validace vstupů** – odpovědi dítěte

Viz [SECURITY.md](./SECURITY.md)

---

## Build a deploy

- [ ] **`npm run lint`** projde
- [ ] **`npm run build`** projde
- [ ] **Lint/build doporučen před push**

---

## Proces

- [ ] **Změny odpovídají roadmapě** – jen rozsah aktuální etapy
- [ ] **Žádné nesouvisející refaktory**
- [ ] **Změněné soubory jsou vypsané**
- [ ] **Rizika jsou vypsaná**
- [ ] **Commit message je navržená**
- [ ] **Ruční smoke test** hlavního toku

---

## Výstup agenta po etapě

Agent musí dodat:

```
Změněné soubory:
- ...

Rizika:
- ...

Ověřovací kroky:
1. ...
2. ...

Commit message:
feat: ...
```

---

## Rychlý smoke test (MVP)

- [ ] Homepage se načte
- [ ] Matematika se otevře
- [ ] Lze zadat číslo
- [ ] Správná odpověď → pozitivní reakce
- [ ] Chyba → vysvětlení
- [ ] Čeština → I/Y otázka
- [ ] Chyba se uloží k opakování
- [ ] Zvuky lze vypnout

(Viz [TESTING_STRATEGY.md](./TESTING_STRATEGY.md) pro detail)
