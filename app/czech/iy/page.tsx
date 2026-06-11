import type { Metadata } from "next";
import { IyDictationClient } from "@/features/czech/IyDictationClient";
import { PageShell } from "@/components/layout/PageShell";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Procvičování i/y",
  description:
    "Doplň správně i, í, y nebo ý ve větách – předpřipravené diktáty i vlastní text.",
};

function IyDictationFallback() {
  return (
    <p className="text-base text-foreground/70">Načítám procvičování…</p>
  );
}

export default function CzechIyPage() {
  return (
    <PageShell showBackLink>
      <Suspense fallback={<IyDictationFallback />}>
        <IyDictationClient />
      </Suspense>
    </PageShell>
  );
}
