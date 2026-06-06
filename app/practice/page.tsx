import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Moje procvičování",
  description:
    "Smíšené procvičování napříč předměty – slabá místa nebo vlastní výběr.",
};

export default function PracticePage() {
  return (
    <PageShell showBackLink>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Moje procvičování
      </h1>
      <p className="mt-4 text-lg text-foreground/70">
        Tato sekce se připravuje. Později zde půjde procvičovat napříč
        předměty – matematika, čeština i angličtina.
      </p>
      <p className="mt-3 text-base text-foreground/70">
        Režim bude buď ze slabých míst chytrého opakování, nebo podle
        vlastního nastavení, které si dítě zvolí.
      </p>
    </PageShell>
  );
}
