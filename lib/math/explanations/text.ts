import { getCountDotsExplanation } from "@/lib/math/generateMathExercises";
import { formatMoneyAmount } from "@/lib/math/money";
import { formatClockTime } from "@/lib/math/time";
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
    case "money-count": {
      if (exercise.explanation) {
        return exercise.explanation;
      }

      const coins = exercise.coinValues ?? [];
      const currencyCode = exercise.currencyCode ?? "CZK";
      const total = exercise.expectedAmount ?? result;
      const addition = coins.join(" + ");

      return `Sečteme mince: ${addition} = ${total}. Dohromady je ${formatMoneyAmount(total, currencyCode)}.`;
    }
    case "clock-read": {
      if (exercise.explanation) {
        return exercise.explanation;
      }

      const hour = exercise.clockHour ?? a;
      const minute = exercise.clockMinute ?? b;

      if (minute === 0) {
        return `Krátká ručička ukazuje na ${hour}. Dlouhá ručička ukazuje na 12, takže je přesně ${formatClockTime(hour, minute)}.`;
      }

      const nextHour = hour === 12 ? 1 : hour + 1;
      return `Krátká ručička je mezi ${hour} a ${nextHour}. Dlouhá ručička ukazuje na 6, takže je ${hour} a půl (${formatClockTime(hour, minute)}).`;
    }
  }
}
