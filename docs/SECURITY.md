# Bezpečnost

Bezpečnostní pravidla pro MVP a příprava na budoucí rozšíření.

---

## MVP – základní pravidla

### Žádná citlivá data

- **Neukládat citlivá data** – hesla, tokeny, API klíče
- **Neukládat osobní údaje dítěte** – jméno, věk, e-mail, fotografie
- **localStorage jen pro neosobní lokální pokrok** – review stavy, nastavení

### Žádné secrets v kódu

- API klíče, tokeny, hesla **nikdy** v repozitáři
- `.env.local` v `.gitignore`
- Pokud budou env variables: nastavit v Vercel dashboard

### Validace vstupů

- Matematika: validovat, že odpověď je číslo
- Čeština: validovat, že odpověď je „I" nebo „Y"
- Neočekávaný vstup ignorovat, ne crash
- XSS: React automaticky escapuje JSX – ne používat `dangerouslySetInnerHTML`

### Bezpečné chybové hlášky

- Uživateli (dítěti) nezobrazovat technické chyby
- V konzoli (dev) logovat detaily
- V produkci: „Něco se pokazilo. Zkus to znovu."

---

## localStorage bezpečnost

| Ukládáme | Neukládáme |
|----------|------------|
| Review stavy (itemId, counts) | Jméno dítěte |
| Nastavení (zvuky, animace) | E-mail |
| Historie relací (počty, ID) | Lokace |
| | Jakékoli PII |

Data jsou lokální v prohlížeči – neopouští zařízení.

---

## Next.js specifika

- Server Components nemají přístup k browser API – OK
- Client Components s localStorage – data zůstávají v prohlížeči
- Žádné API routes v MVP – žádná attack surface
- CSP headers – zvážit při veřejném provozu

---

## Budoucí registrace

**Opatrnost při budoucí registraci:**

- HTTPS only (Vercel default)
- Hashování hesel (bcrypt/argon2) – nikdy plain text
- Rate limiting na auth endpointy
- Session management
- GDPR compliance pro data dětí
- Minimální sběr dat – jen co je nutné
- Právo na smazání dat

**V MVP se neimplementuje** – ale architektura to nekomplikuje.

---

## Veřejný provoz pro děti

**Při veřejném provozu pro děti bude potřeba právní a bezpečnostní kontrola:**

- GDPR / GDPR-K (ochrana dat dětí)
- Souhlas rodičů (COPPA-like požadavky)
- Privacy policy a terms of service
- Cookie consent (pokud budou cookies)
- Bezpečnostní audit
- Reporting mechanismus

**V MVP není relevantní** – aplikace je pro domácí použití.

---

## Checklist před commitem

- [ ] Žádné API klíče nebo secrets v kódu
- [ ] Žádné `.env` soubory v commitu
- [ ] localStorage neukládá osobní data
- [ ] Vstupy validované
- [ ] Chybové hlášky bezpečné pro uživatele

---

## Odkazy

- [LOCAL_STORAGE_STRATEGY.md](./LOCAL_STORAGE_STRATEGY.md)
- [RISK_REGISTER.md](./RISK_REGISTER.md)
- [DECISIONS.md](./DECISIONS.md)
