import type { PromptSummaryAccessibleVariant } from "./promptSummaryOperations";

export type { PromptSummaryAccessibleVariant } from "./promptSummaryOperations";

export type PromptSummaryAccessibleTextInput = {
  questionNumber: number;
  prompt: string;
  userAnswer: string;
  expectedAnswer: string;
  isWrong: boolean;
  variant: PromptSummaryAccessibleVariant;
};

export function buildPromptSummaryAccessibleText(
  input: PromptSummaryAccessibleTextInput,
): string {
  const {
    questionNumber,
    prompt,
    userAnswer,
    expectedAnswer,
    isWrong,
    variant,
  } = input;

  if (variant === "comparison") {
    if (isWrong) {
      return `Otázka ${questionNumber}, porovnání ${prompt}, tvoje znaménko ${userAnswer}, špatně, správné znaménko ${expectedAnswer}`;
    }

    return `Otázka ${questionNumber}, porovnání ${prompt}, tvoje znaménko ${userAnswer}, správně`;
  }

  if (isWrong) {
    return `Otázka ${questionNumber}, zadání ${prompt}, tvoje odpověď ${userAnswer}, špatně, správně ${expectedAnswer}`;
  }

  return `Otázka ${questionNumber}, zadání ${prompt}, tvoje odpověď ${userAnswer}, správně`;
}
