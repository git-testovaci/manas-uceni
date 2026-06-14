import { formatMoneyAmount } from "@/lib/math/money";

export type CoinVisualSize = "sm" | "md" | "lg";

type CoinProps = {
  value: number;
  currencyCode: string;
  size?: CoinVisualSize;
};

const COIN_SIZE_CLASSES: Record<CoinVisualSize, string> = {
  sm: "h-10 w-10 text-sm",
  md: "h-12 w-12 text-base",
  lg: "h-14 w-14 text-lg",
};

function Coin({ value, currencyCode, size = "md" }: CoinProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border-2 border-amber-500/70 bg-amber-100 font-bold text-amber-950 shadow-sm ${COIN_SIZE_CLASSES[size]}`}
      aria-label={formatMoneyAmount(value, currencyCode)}
    >
      {value}
    </span>
  );
}

type CoinStripProps = {
  coins: number[];
  currencyCode: string;
  size?: CoinVisualSize;
};

export function CoinStrip({ coins, currencyCode, size = "md" }: CoinStripProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      {coins.map((value, index) => (
        <Coin
          key={`${value}-${index}`}
          value={value}
          currencyCode={currencyCode}
          size={size}
        />
      ))}
    </div>
  );
}
