# Decision log

Záznam důležitých rozhodnutí. Každé nové rozhodnutí přidávat na začátek souboru.

Formát:

```
## YYYY-MM-DD – Název rozhodnutí

Rozhodnutí: ...
Proč: ...
Dopady: ...
Co tím zatím odkládáme: ...
```

---

## 2026-06-04 – Prevence chyb má přednost před rychlou implementací

**Rozhodnutí:** Projekt se staví po malých etapách s dokumentací, plánem a checklisty před každou implementací.

**Proč:** Uživatel není programátor, projekt vede s AI agentem. Velké změny najednou vedou k chybám a chaosu.

**Dopady:** Fáze 1 je čistě dokumentace. Každá další etapa má jasný rozsah a ověřovací kroky.

**Co tím zatím odkládáme:** Rychlé „hotové MVP za den“.

---

## 2026-06-04 – Vývoj po malých etapách

**Rozhodnutí:** Roadmapa má 11 etap. Nikdy neimplementovat více etap najednou.

**Proč:** Malé commity jsou snadno reviewovatelné, opravitelné a srozumitelné.

**Dopady:** Každý prompt v Cursoru cílí na jednu etapu. ROADMAP.md definuje rozsah.

**Co tím zatím odkládáme:** Paralelní vývoj více modulů.

---

## 2026-06-04 – Chyba jako věc k procvičení

**Rozhodnutí:** Chybná odpověď se nikdy netrestá agresivním tónem. Chyba se ukládá k opakování.

**Proč:** Produktový princip – dítě má procvičovat slabá místa, ne se stydět za chyby.

**Dopady:** UI texty, barvy (oranžová místo červené), review algoritmus, zvuky (žádný negativní zvuk).

**Co tím zatím odkládáme:** Gamifikace s tresty nebo body za chyby.

---

## 2026-06-04 – Čeština i/y klikací volbou

**Rozhodnutí:** České cvičení i/y bude rychlé klikací volba mezi I a Y, ne psaní celého slova.

**Proč:** Rychlejší procvičování, méně chyb z překlepů, vhodné pro mobil.

**Dopady:** UI s dvěma velkými tlačítky. Validace porovnává `"I"` nebo `"Y"`.

**Co tím zatím odkládáme:** Psaní celých vět, diktáty.

---

## 2026-06-04 – Matematika ručním zadáním čísla

**Rozhodnutí:** Násobilka není výběrový test. Dítě zadává výsledek do inputu.

**Proč:** Dítě musí výsledek znát/vypočítat, ne uhodnout ze 4 možností.

**Dopady:** Input typu number/text, validace numerická.

**Co tím zatím odkládáme:** Multiple choice otázky v matematice.

---

## 2026-06-04 – Bez maskota

**Rozhodnutí:** Aplikace nebude mít maskota, postavičky ani avatary.

**Proč:** Čistý, moderní design. Maskot by byl infantilní a zbytečně složitý na vývoj.

**Dopady:** UI bez ilustrací postav. Design spoléhá na barvy, typografii a layout.

**Co tím zatím odkládáme:** Animované postavičky, personalizace avatara.

---

## 2026-06-04 – localStorage pro lokální pokrok

**Rozhodnutí:** Pokrok, chyby a nastavení se ukládají do localStorage prohlížeče.

**Proč:** MVP bez backendu, registrace a databáze. Jednoduché pro domácí použití.

**Dopady:** Storage helper vrstva v `lib/storage/`. Data jen na jednom zařízení/prohlížeči.

**Co tím zatím odkládáme:** Synchronizace napříč zařízeními, rodičovský přehled online.

---

## 2026-06-04 – Bez registrace v MVP

**Rozhodnutí:** MVP nemá registraci, přihlášení ani uživatelské účty.

**Proč:** Domácí použití pro jedno dítě. Registrace přidává složitost a právní povinnosti.

**Dopady:** Žádné auth, žádné API pro uživatele. localStorage místo user ID.

**Co tím zatím odkládáme:** Více dětí na jednom účtu, rodičovský dashboard.

---

## 2026-06-04 – Bez databáze v MVP

**Rozhodnutí:** MVP nepotřebuje databázi. Statická data cvičení v `data/`, pokrok v localStorage.

**Proč:** Minimální složitost, nulové náklady na DB, rychlý deploy.

**Dopady:** Cvičení se nemění za běhu. Nová cvičení = nový deploy.

**Co tím zatím odkládáme:** Dynamický obsah, statistiky napříč zařízeními, admin rozhraní.

---

## 2026-06-04 – GitHub jako zdroj deploye

**Rozhodnutí:** Zdrojový kód na GitHubu. Vercel deployuje z GitHub repozitáře.

**Proč:** Standardní workflow, verzování, jednoduchý rollback.

**Dopady:** Hlavní větev `main`. Push do main = production deploy.

**Co tím zatím odkládáme:** Staging prostředí (lze přidat později přes preview deploye).

---

## 2026-06-04 – Vercel Hobby pro domácí MVP

**Rozhodnutí:** Hosting na Vercel Hobby plán (zdarma).

**Proč:** Nativní podpora Next.js, automatický deploy z GitHubu, stačí pro domácí použití.

**Dopady:** Limity Hobby plánu (bandwidth, build time). Žádný vlastní server.

**Co tím zatím odkládáme:** Vlastní infrastruktura, enterprise features.
