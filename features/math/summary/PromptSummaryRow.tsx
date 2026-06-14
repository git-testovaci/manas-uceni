type PromptSummaryRowProps = {
  questionNumber: number;
  prompt: string;
  userAnswer: string;
  expectedAnswer: string;
  isWrong: boolean;
  accessibleText: string;
};

export function PromptSummaryRow({
  questionNumber,
  prompt,
  userAnswer,
  expectedAnswer,
  isWrong,
  accessibleText,
}: PromptSummaryRowProps) {
  return (
    <li>
      <div aria-hidden="true" className="space-y-1 text-sm tabular-nums">
        <div className="flex flex-wrap items-center gap-x-2">
          <span className="text-foreground/70">{questionNumber}.</span>
          <span>
            Zadání:{" "}
            <span className="font-medium">{prompt}</span>
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-2 pl-6 sm:pl-8">
          <span>
            Tvoje odpověď:{" "}
            <span className="font-medium">{userAnswer}</span>
          </span>
          <span>{isWrong ? "❌" : "✅"}</span>
          {isWrong && (
            <span className="text-foreground/80">
              Správně: {expectedAnswer}
            </span>
          )}
        </div>
      </div>
      <span className="sr-only">{accessibleText}</span>
    </li>
  );
}
