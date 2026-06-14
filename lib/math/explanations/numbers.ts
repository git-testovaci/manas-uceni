import type { MathExercise } from "@/types";

import type { MathExplanationNumbers } from "./types";

export function getMathExplanationNumbers(
  exercise: MathExercise,
): MathExplanationNumbers {
  const { operation, operandA, operandB } = exercise;

  switch (operation) {
    case "add":
      return { a: operandA, b: operandB, result: operandA + operandB };
    case "subtract":
      return { a: operandA, b: operandB, result: operandA - operandB };
    case "multiply":
      return { a: operandA, b: operandB, result: operandA * operandB };
    case "divide":
      return {
        a: operandA,
        b: operandB,
        result: operandA / operandB,
        quotient: operandA / operandB,
      };
    case "divide-with-remainder": {
      const quotient = Math.floor(operandA / operandB);
      const remainder = operandA % operandB;
      return {
        a: operandA,
        b: operandB,
        result: quotient,
        quotient,
        remainder,
      };
    }
    case "missing-addend-to-10": {
      const known = operandA;
      const missing = Number(exercise.correctAnswer);
      const target = exercise.targetSum ?? 10;
      return { a: known, b: missing, result: target };
    }
    case "count-dots": {
      const count = exercise.dotCount ?? operandA;
      return { a: count, b: 0, result: count };
    }
    case "compare-numbers":
      return { a: operandA, b: operandB, result: 0 };
    case "number-sequence":
      return { a: operandA, b: operandB, result: operandB };
    case "money-count": {
      const amount = exercise.expectedAmount ?? operandA;
      return { a: exercise.coinValues?.length ?? operandB, b: amount, result: amount };
    }
    case "clock-read": {
      const hour = exercise.clockHour ?? operandA;
      const minute = exercise.clockMinute ?? operandB;
      return { a: hour, b: minute, result: hour };
    }
  }
}
