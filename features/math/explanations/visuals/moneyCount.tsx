import { CompactFormula, CoinStrip } from "@/features/math/visuals";
import { formatMoneyAmount } from "@/lib/math/money";
import type { MathExplanationContext } from "@/lib/math/explanations";

export function MoneyCountExplanationVisual({
  context,
}: {
  context: MathExplanationContext;
}) {
  const { exercise } = context;
  const coins = exercise.coinValues ?? [];
  const currencyCode = exercise.currencyCode ?? "CZK";
  const total = exercise.expectedAmount ?? context.numbers.result;
  const addition = coins.join(" + ");

  return (
    <figure className="space-y-3">
      <CoinStrip coins={coins} currencyCode={currencyCode} size="md" />
      <CompactFormula>{`${addition} = ${total}`}</CompactFormula>
      <p className="text-sm font-medium text-foreground/80">
        {formatMoneyAmount(total, currencyCode)}
      </p>
    </figure>
  );
}
