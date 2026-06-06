import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Matematika",
  description:
    "Procvičování matematiky – výběr témat, filtry a vlastní nastavení příkladů.",
};

export default function MathPage() {
  return (
    <PageShell showBackLink>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Matematika
      </h1>
      <p className="mt-4 text-lg text-foreground/70">
        Tato sekce se připravuje. Později zde bude výběr témat a vlastní
        filtry před startem procvičování.
      </p>
      <p className="mt-3 text-base text-foreground/70">
        Témata: sčítání, odčítání, násobení, dělení, dělení se zbytkem,
        kombinace.
      </p>
      <p className="mt-3 text-base text-foreground/70">
        Filtry: rozsahy čísel, konkrétní hodnoty, vybrané násobky/dělitele,
        počet příkladů. Např. dělení se zbytkem: 14 ÷ 4 = 3 zbytek 2.
      </p>
    </PageShell>
  );
}
