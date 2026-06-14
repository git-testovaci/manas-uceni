import { getCountDotsExplanation } from "@/lib/math/generateMathExercises";
import type { MathExercise } from "@/types";

import type { MathExplanationNumbers } from "./types";

export function getMathExplanationText(
  exercise: MathExercise,
  numbers: MathExplanationNumbers,
): string {
  const { a, b, result, quotient, remainder } = numbers;

  switch (exercise.operation) {
    case "add":
      return `${a} a ${b} dá dohromady ${result}.`;
    case "subtract":
      return `Od ${a} odečteme ${b} a zůstane ${result}.`;
    case "multiply":
      return `${a} krát ${b} je ${result}.`;
    case "divide":
      return `${a} rozdělíme do skupin po ${b} a dostaneme ${result} skupin.`;
    case "divide-with-remainder":
      return `${a} rozdělíme po ${b}: ${quotient} celých skupin a ${remainder} zůstane navíc.`;
    case "missing-addend-to-10": {
      const target = exercise.targetSum ?? 10;
      const known = exercise.operandA;
      const missing = Number(exercise.correctAnswer);
      if (exercise.missingPosition === "right") {
        return `Hledáme číslo, které doplní příklad do ${target}. Když máme ${known}, dopočítáme až do ${target}. Chybí ${missing}.`;
      }
      return `Hledáme číslo, které s ${known} dá dohromady ${target}. Chybí ${missing}.`;
    }
    case "count-dots": {
      const count = exercise.dotCount ?? result;
      return exercise.explanation ?? getCountDotsExplanation(count);
    }
    case "compare-numbers":
      return exercise.explanation ?? `Porovnáme čísla ${a} a ${b}.`;
    case "number-sequence":
      return exercise.explanation ?? `Chybí ${result}.`;
  }
}
