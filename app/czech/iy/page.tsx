import type { Metadata } from "next";
import { IyDictationClient } from "@/features/czech/IyDictationClient";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Procvičování i/y",
  description:
    "Doplň správně i, í, y nebo ý ve větách – předpřipravené diktáty i vlastní text.",
};

export default function CzechIyPage() {
  return (
    <PageShell showBackLink>
      <IyDictationClient />
    </PageShell>
  );
}
