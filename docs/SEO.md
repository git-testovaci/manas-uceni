# SEO

Pravidla pro vyhledávače. MVP je primárně pro domácí použití, ale připravujeme základ pro budoucí veřejný provoz.

---

## MVP – povinné

### Title

Každá stránka musí mít smysluplný `<title>`:

| Stránka | Title (příklad) |
|---------|-----------------|
| Homepage | Domácí procvičování |
| Matematika | Násobilka – procvičování |
| Čeština | Pravopis i/y – procvičování |
| Moje procvičování | Moje procvičování |
| Nastavení | Nastavení |

Implementace: Next.js `metadata` export v `layout.tsx` nebo `page.tsx`.

### Description

Krátký popis stránky v metadata:

```typescript
export const metadata = {
  title: "Domácí procvičování",
  description: "Procvičování násobilky a pravopisu pro děti na základní škole.",
};
```

### Nadpisy

- Jeden `<h1>` na stránce
- Logická hierarchie: h1 → h2 → h3
- Nadpisy obsahují klíčová slova (násobilka, pravopis)

### Struktura stránek

- Čisté URL: `/`, `/math`, `/czech`, `/practice`, `/settings`
- Každá stránka má smysluplný obsah (ne prázdná)
- Vnitřní odkazy mezi stránkami (homepage → sekce)

---

## MVP – doporučené

- `lang="cs"` na `<html>` elementu
- Sémantické HTML (main, nav, h1)
- Rychlé načítání – žádná těžká média

---

## Později (veřejný provoz)

| Položka | Kdy |
|---------|-----|
| Open Graph tagy (og:title, og:description, og:image) | Před veřejným spuštěním |
| Sitemap (`/sitemap.xml`) | Před veřejným spuštěním |
| robots.txt | Před veřejným spuštěním |
| Structured data (JSON-LD) | Volitelně |
| Canonical URL | Při více jazykových verzích |

---

## Rychlé načítání

- Žádné těžké obrázky v MVP
- Žádné velké font soubory (systémový font nebo next/font)
- Minimalizovat JavaScript bundle
- Tailwind – jen použité třídy (automatic purge)

---

## Co nedělat

- ❌ Keyword stuffing v textech pro děti
- ❌ Skrytý text pro vyhledávače
- ❌ Prázdné stránky s jen title
- ❌ Duplicitní title na všech stránkách

---

## Implementace v Next.js

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: "Domácí procvičování",
    template: "%s | Domácí procvičování",
  },
  description: "Procvičování násobilky a pravopisu pro děti.",
};

// app/math/page.tsx
export const metadata: Metadata = {
  title: "Násobilka",
  description: "Procvičuj násobilku – zadej výsledek a nauč se postup.",
};
```

---

## Odkazy

- [UI_UX_GUIDELINES.md](./UI_UX_GUIDELINES.md)
- [QUALITY_CHECKLIST.md](./QUALITY_CHECKLIST.md)
