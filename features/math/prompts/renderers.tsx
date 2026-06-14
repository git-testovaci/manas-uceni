import type { ReactElement } from "react";

import { CountDotsVisual } from "@/features/math/visuals";
import type { MathExercise, MathOperation } from "@/types";

function CountDotsQuestionPrompt({ exercise }: { exercise: MathExercise }) {
  const dotCount = exercise.dotCount ?? exercise.operandA;

  return (
    <div className="space-y-4">
      <p className="text-lg font-semibold sm:text-xl">Spočítej tečky</p>
      <CountDotsVisual count={dotCount} size="lg" ariaHidden />
      <span className="sr-only">{exercise.prompt}</span>
    </div>
  );
}

function NumberSequenceQuestionPrompt({ exercise }: { exercise: MathExercise }) {
  const sequence = exercise.sequenceNumbers ?? [];
  const missingIndex = exercise.sequenceMissingIndex ?? -1;

  return (
    <div
      className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-3xl font-bold tracking-tight sm:text-4xl"
      aria-label={exercise.prompt}
    >
      {sequence.map((value, index) => (
        <span key={`${exercise.id}-${index}`} className="inline-flex items-baseline">
          {index > 0 && (
            <span aria-hidden="true" className="mr-2 text-foreground/45">
              ,
            </span>
          )}
          <span
            className={
              index === missingIndex
                ? "text-math underline decoration-math/40 decoration-2 underline-offset-4"
                : "tabular-nums"
            }
          >
            {index === missingIndex ? "?" : value}
          </span>
        </span>
      ))}
    </div>
  );
}

function DefaultTextQuestionPrompt({ exercise }: { exercise: MathExercise }) {
  return (
    <p className="text-3xl font-bold tracking-tight sm:text-4xl">
      {exercise.prompt}
    </p>
  );
}

const QUESTION_PROMPT_RENDERERS: Record<
  MathOperation,
  (exercise: MathExercise) => ReactElement
> = {
  "count-dots": (exercise) => <CountDotsQuestionPrompt exercise={exercise} />,
  "number-sequence": (exercise) => (
    <NumberSequenceQuestionPrompt exercise={exercise} />
  ),
  add: (exercise) => <DefaultTextQuestionPrompt exercise={exercise} />,
  subtract: (exercise) => <DefaultTextQuestionPrompt exercise={exercise} />,
  multiply: (exercise) => <DefaultTextQuestionPrompt exercise={exercise} />,
  divide: (exercise) => <DefaultTextQuestionPrompt exercise={exercise} />,
  "divide-with-remainder": (exercise) => (
    <DefaultTextQuestionPrompt exercise={exercise} />
  ),
  "missing-addend-to-10": (exercise) => (
    <DefaultTextQuestionPrompt exercise={exercise} />
  ),
  "compare-numbers": (exercise) => (
    <DefaultTextQuestionPrompt exercise={exercise} />
  ),
};

export function renderMathQuestionPrompt(exercise: MathExercise): ReactElement {
  return QUESTION_PROMPT_RENDERERS[exercise.operation](exercise);
}
