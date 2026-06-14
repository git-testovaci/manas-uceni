const REMAINDER_PATTERNS: RegExp[] = [
  /^(\d+)\s*r\s*(\d+)$/i,
  /^(\d+)\s*z\s*(\d+)$/i,
  /^(\d+)\s*,?\s*zbytek\s*(\d+)$/i,
  /^(\d+)\s*;\s*(\d+)$/,
  /^(\d+)\s*\/\s*(\d+)$/,
];

export function normalizeNumericAnswer(input: string): string {
  return input.trim().replace(",", ".");
}

export function parseNumericAnswer(input: string): number | null {
  const normalized = normalizeNumericAnswer(input);
  if (normalized.length === 0) {
    return null;
  }

  if (!/^-?\d+(?:\.\d+)?$/.test(normalized)) {
    return null;
  }

  const value = Number(normalized);
  if (!Number.isFinite(value)) {
    return null;
  }

  return value;
}

export function formatRemainderAnswer(
  quotient: number,
  remainder: number,
): string {
  return `${quotient} r ${remainder}`;
}

export function parseRemainderAnswer(
  input: string,
): { quotient: number; remainder: number } | null {
  const normalized = input.trim().replace(/\s+/g, " ");

  if (normalized.length === 0) {
    return null;
  }

  for (const pattern of REMAINDER_PATTERNS) {
    const match = normalized.match(pattern);
    if (!match) {
      continue;
    }

    const quotient = Number(match[1]);
    const remainder = Number(match[2]);

    if (
      !Number.isInteger(quotient) ||
      !Number.isInteger(remainder) ||
      quotient < 0 ||
      remainder < 0
    ) {
      return null;
    }

    return { quotient, remainder };
  }

  return null;
}

export function isNumericAnswerCorrect(
  input: string,
  correctAnswer: string,
): boolean {
  const parsedInput = parseNumericAnswer(input);
  const parsedCorrect = parseNumericAnswer(correctAnswer);

  if (parsedInput === null || parsedCorrect === null) {
    return false;
  }

  return parsedInput === parsedCorrect;
}

export function isRemainderAnswerCorrect(
  input: string,
  quotient: number,
  remainder: number,
): boolean {
  const parsed = parseRemainderAnswer(input);
  if (!parsed) {
    return false;
  }

  return parsed.quotient === quotient && parsed.remainder === remainder;
}

export function validateComparisonAnswer(
  input: string,
  correctAnswer: string,
): {
  isCorrect: boolean;
  normalizedInput: string;
  expectedAnswer: string;
} {
  const normalizedInput = input.trim();
  const expectedAnswer = correctAnswer.trim();

  return {
    isCorrect:
      normalizedInput === expectedAnswer &&
      (expectedAnswer === "<" || expectedAnswer === ">" || expectedAnswer === "="),
    normalizedInput,
    expectedAnswer,
  };
}

export function validateMathAnswer(
  input: string,
  correctAnswer: string,
  expectedRemainder?: number,
): {
  isCorrect: boolean;
  normalizedInput: string;
  expectedAnswer: string;
} {
  const normalizedInput = input.trim().replace(/\s+/g, " ");

  if (expectedRemainder === undefined) {
    const parsedCorrect = parseNumericAnswer(correctAnswer);
    const expectedAnswer =
      parsedCorrect !== null ? String(parsedCorrect) : correctAnswer.trim();

    return {
      isCorrect: isNumericAnswerCorrect(input, correctAnswer),
      normalizedInput: normalizeNumericAnswer(input),
      expectedAnswer,
    };
  }

  const parsedQuotient = parseNumericAnswer(correctAnswer);
  if (parsedQuotient === null || !Number.isInteger(parsedQuotient)) {
    return {
      isCorrect: false,
      normalizedInput,
      expectedAnswer: formatRemainderAnswer(Number(correctAnswer), expectedRemainder),
    };
  }

  const expectedAnswer = formatRemainderAnswer(
    parsedQuotient,
    expectedRemainder,
  );

  return {
    isCorrect: isRemainderAnswerCorrect(
      input,
      parsedQuotient,
      expectedRemainder,
    ),
    normalizedInput,
    expectedAnswer,
  };
}
