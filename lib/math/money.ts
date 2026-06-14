type CurrencyFormat = {
  symbol: string;
  position: "before" | "after";
  space?: boolean;
};

const CURRENCY_FORMATS: Record<string, CurrencyFormat> = {
  CZK: { symbol: "Kč", position: "after", space: true },
  EUR: { symbol: "€", position: "before", space: false },
  USD: { symbol: "$", position: "before", space: false },
};

function getCurrencyFormat(currencyCode: string): CurrencyFormat {
  return (
    CURRENCY_FORMATS[currencyCode] ?? {
      symbol: currencyCode,
      position: "after",
      space: true,
    }
  );
}

export function formatMoneyAmount(
  amount: number,
  currencyCode: string,
): string {
  const format = getCurrencyFormat(currencyCode);
  const amountText = String(amount);

  if (format.position === "before") {
    return `${format.symbol}${amountText}`;
  }

  return format.space
    ? `${amountText} ${format.symbol}`
    : `${amountText}${format.symbol}`;
}
