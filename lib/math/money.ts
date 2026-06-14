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

const GENERIC_MONEY_SUFFIX_PATTERN = /\s*(kč|kc|czk|eur|usd|€|\$)\s*$/i;

const MALFORMED_EXERCISE_CURRENCY_FALLBACK = "CZK";

function getCurrencyFormat(currencyCode: string): CurrencyFormat {
  return (
    CURRENCY_FORMATS[currencyCode] ?? {
      symbol: currencyCode,
      position: "after",
      space: true,
    }
  );
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Resolves currency code from exercise metadata.
 * Generator-backed money-count items should always set `currencyCode`.
 * The documented fallback exists only for malformed or legacy review items.
 */
export function resolveExerciseCurrencyCode(
  currencyCode: string | undefined,
): string {
  const trimmed = currencyCode?.trim();
  if (trimmed) {
    return trimmed.toUpperCase();
  }

  return MALFORMED_EXERCISE_CURRENCY_FALLBACK;
}

export function stripMoneyAnswerSuffix(
  input: string,
  currencyCode?: string,
): string {
  let trimmed = input.trim().replace(",", ".");
  trimmed = trimmed.replace(GENERIC_MONEY_SUFFIX_PATTERN, "").trim();

  if (!currencyCode) {
    return trimmed;
  }

  const format = getCurrencyFormat(currencyCode.toUpperCase());

  if (format.position === "before") {
    const symbolPattern = escapeRegex(format.symbol);
    return trimmed
      .replace(new RegExp(`^${symbolPattern}\\s*`, "i"), "")
      .trim();
  }

  const symbolPattern = escapeRegex(format.symbol);
  const spacePattern = format.space ? "\\s*" : "";
  return trimmed
    .replace(new RegExp(`${spacePattern}${symbolPattern}\\s*$`, "i"), "")
    .trim();
}

export function parseMoneyAnswer(
  input: string,
  currencyCode?: string,
): number | null {
  const stripped = stripMoneyAnswerSuffix(input, currencyCode);

  if (stripped.length === 0 || !/^-?\d+(?:\.\d+)?$/.test(stripped)) {
    return null;
  }

  const value = Number(stripped);
  return Number.isFinite(value) ? value : null;
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

