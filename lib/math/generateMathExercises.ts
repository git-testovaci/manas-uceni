import type {
  MathExercise,
  MathOperation,
  MathPracticeConfig,
  MathTopic,
  MathVisualHint,
  ReviewState,
  ReviewStateMap,
} from "@/types";

const DEFAULT_MIN_VALUE = 1;
const DEFAULT_MAX_VALUE = 12;

const TOPIC_TO_OPERATION: Record<
  Exclude<MathTopic, "mixed">,
  MathOperation
> = {
  addition: "add",
  subtraction: "subtract",
  multiplication: "multiply",
  division: "divide",
  "division-remainder": "divide-with-remainder",
};

const OPERATION_TO_TOPIC: Record<MathOperation, Exclude<MathTopic, "mixed">> = {
  add: "addition",
  subtract: "subtraction",
  multiply: "multiplication",
  divide: "division",
  "divide-with-remainder": "division-remainder",
};

const REVIEW_PRIORITY: Record<ReviewState["status"], number> = {
  weak: 0,
  learning: 1,
  improving: 2,
  new: 3,
  mastered: 4,
};

export function createMathExerciseId(
  operation: MathOperation,
  operandA: number,
  operandB: number,
): string {
  switch (operation) {
    case "add":
      return `math-add-${operandA}-${operandB}`;
    case "subtract":
      return `math-subtract-${operandA}-${operandB}`;
    case "multiply":
      return `math-multiply-${operandA}x${operandB}`;
    case "divide":
      return `math-divide-${operandA}-by-${operandB}`;
    case "divide-with-remainder":
      return `math-divide-rem-${operandA}-by-${operandB}`;
  }
}

export function createMathExercise(
  operation: MathOperation,
  operandA: number,
  operandB: number,
): MathExercise {
  const topic = OPERATION_TO_TOPIC[operation];

  switch (operation) {
    case "add": {
      const id = createMathExerciseId(operation, operandA, operandB);
      const result = operandA + operandB;
      return {
        id,
        subject: "math",
        topic,
        operation,
        operandA,
        operandB,
        prompt: `${operandA} + ${operandB} = ?`,
        correctAnswer: String(result),
        explanation: `${operandA} + ${operandB} = ${result}`,
        createdBy: "system",
      };
    }
    case "subtract": {
      const larger = Math.max(operandA, operandB);
      const smaller = Math.min(operandA, operandB);
      const id = createMathExerciseId(operation, larger, smaller);
      const result = larger - smaller;
      return {
        id,
        subject: "math",
        topic,
        operation,
        operandA: larger,
        operandB: smaller,
        prompt: `${larger} − ${smaller} = ?`,
        correctAnswer: String(result),
        explanation: `${larger} - ${smaller} = ${result}`,
        createdBy: "system",
      };
    }
    case "multiply": {
      const id = createMathExerciseId(operation, operandA, operandB);
      const result = operandA * operandB;
      const visualHint: MathVisualHint = {
        type: "groups",
        rows: operandA,
        cols: operandB,
      };
      return {
        id,
        subject: "math",
        topic,
        operation,
        operandA,
        operandB,
        prompt: `${operandA} × ${operandB} = ?`,
        correctAnswer: String(result),
        explanation: `${operandA} × ${operandB} znamená ${operandA} skupin po ${operandB}.`,
        visualHint,
        createdBy: "system",
      };
    }
    case "divide": {
      const id = createMathExerciseId(operation, operandA, operandB);
      const quotient = operandA / operandB;
      return {
        id,
        subject: "math",
        topic,
        operation,
        operandA,
        operandB,
        prompt: `${operandA} ÷ ${operandB} = ?`,
        correctAnswer: String(quotient),
        explanation: `${operandA} ÷ ${operandB} znamená rozdělit ${operandA} na skupiny po ${operandB}.`,
        createdBy: "system",
      };
    }
    case "divide-with-remainder": {
      const id = createMathExerciseId(operation, operandA, operandB);
      const quotient = Math.floor(operandA / operandB);
      const remainder = operandA % operandB;
      const visualHint: MathVisualHint = { type: "remainder" };
      return {
        id,
        subject: "math",
        topic,
        operation,
        operandA,
        operandB,
        expectedRemainder: remainder,
        prompt: `${operandA} ÷ ${operandB} = ?`,
        correctAnswer: `${quotient} r ${remainder}`,
        explanation: `${operandA} ÷ ${operandB} = ${quotient} zbytek ${remainder}.`,
        visualHint,
        createdBy: "system",
      };
    }
  }
}

export function generateMathExercises(
  config: MathPracticeConfig,
): MathExercise[] {
  const operations = resolveOperations(config);
  if (operations.length === 0) {
    return [];
  }

  const pool = buildOperandPool(config);
  const byId = new Map<string, MathExercise>();

  for (const operation of operations) {
    for (const exercise of generateForOperation(operation, config, pool)) {
      byId.set(exercise.id, exercise);
    }
  }

  return [...byId.values()].sort((a, b) => a.id.localeCompare(b.id));
}

export function selectMathExercises(
  config: MathPracticeConfig,
  reviewMap?: ReviewStateMap,
): MathExercise[] {
  const candidates = generateMathExercises(config);
  const sorted = candidates.sort((a, b) => {
    const priorityDiff =
      getReviewPriority(reviewMap?.[a.id]) -
      getReviewPriority(reviewMap?.[b.id]);
    if (priorityDiff !== 0) {
      return priorityDiff;
    }
    return a.id.localeCompare(b.id);
  });

  const limit = config.questionCount ?? sorted.length;
  return sorted.slice(0, limit);
}

function getReviewPriority(state?: ReviewState): number {
  if (!state) {
    return REVIEW_PRIORITY.new;
  }
  return REVIEW_PRIORITY[state.status];
}

function resolveOperations(config: MathPracticeConfig): MathOperation[] {
  const operations = new Set<MathOperation>();

  for (const topic of config.enabledTopics) {
    if (topic === "mixed") {
      operations.add("add");
      operations.add("subtract");
      operations.add("multiply");
      operations.add("divide");
      if (config.allowRemainders) {
        operations.add("divide-with-remainder");
      }
      continue;
    }
    operations.add(TOPIC_TO_OPERATION[topic]);
  }

  return [...operations];
}

function buildOperandPool(config: MathPracticeConfig): number[] {
  const min = config.minValue ?? DEFAULT_MIN_VALUE;
  const max = config.maxValue ?? DEFAULT_MAX_VALUE;
  const values = new Set<number>();

  for (let value = min; value <= max; value += 1) {
    values.add(value);
  }

  if (config.selectedValues?.values) {
    for (const value of config.selectedValues.values) {
      values.add(value);
    }
  }

  if (config.selectedValues?.ranges) {
    for (const range of config.selectedValues.ranges) {
      const rangeMin = range.min ?? min;
      const rangeMax = range.max ?? max;
      for (let value = rangeMin; value <= rangeMax; value += 1) {
        values.add(value);
      }
    }
  }

  return [...values].sort((a, b) => a - b);
}

function generateForOperation(
  operation: MathOperation,
  config: MathPracticeConfig,
  pool: number[],
): MathExercise[] {
  switch (operation) {
    case "add":
      return generateAdditionExercises(config, pool);
    case "subtract":
      return generateSubtractionExercises(config, pool);
    case "multiply":
      return generateMultiplicationExercises(config, pool);
    case "divide":
      return generateDivisionExercises(config, pool);
    case "divide-with-remainder":
      return generateDivisionRemainderExercises(config, pool);
  }
}

function generateAdditionExercises(
  config: MathPracticeConfig,
  pool: number[],
): MathExercise[] {
  const exercises: MathExercise[] = [];

  for (const operandA of pool) {
    for (const operandB of pool) {
      const result = operandA + operandB;
      if (!passesMaxResult(config, result)) {
        continue;
      }
      exercises.push(createMathExercise("add", operandA, operandB));
    }
  }

  return exercises;
}

function generateSubtractionExercises(
  config: MathPracticeConfig,
  pool: number[],
): MathExercise[] {
  const exercises: MathExercise[] = [];

  for (const operandA of pool) {
    for (const operandB of pool) {
      if (operandA < operandB) {
        continue;
      }
      const result = operandA - operandB;
      if (!passesMaxResult(config, result)) {
        continue;
      }
      exercises.push(createMathExercise("subtract", operandA, operandB));
    }
  }

  return exercises;
}

function generateMultiplicationExercises(
  config: MathPracticeConfig,
  pool: number[],
): MathExercise[] {
  const exercises: MathExercise[] = [];
  const multipliers =
    config.selectedMultipliers && config.selectedMultipliers.length > 0
      ? config.selectedMultipliers
      : pool;

  for (const multiplier of multipliers) {
    for (const operand of pool) {
      const product = multiplier * operand;
      if (!passesMaxResult(config, product)) {
        continue;
      }
      exercises.push(createMathExercise("multiply", multiplier, operand));
    }
  }

  return exercises;
}

function generateDivisionExercises(
  config: MathPracticeConfig,
  pool: number[],
): MathExercise[] {
  const exercises: MathExercise[] = [];
  const divisors = getDivisors(config, pool);

  for (const divisor of divisors) {
    for (const quotient of pool) {
      const dividend = divisor * quotient;
      if (!passesMaxResult(config, dividend)) {
        continue;
      }
      exercises.push(createMathExercise("divide", dividend, divisor));
    }
  }

  return exercises;
}

function generateDivisionRemainderExercises(
  config: MathPracticeConfig,
  pool: number[],
): MathExercise[] {
  const exercises: MathExercise[] = [];
  const divisors = getDivisors(config, pool);

  for (const divisor of divisors) {
    for (const dividend of pool) {
      const remainder = dividend % divisor;
      if (remainder === 0) {
        continue;
      }
      if (!passesMaxResult(config, dividend)) {
        continue;
      }
      exercises.push(
        createMathExercise("divide-with-remainder", dividend, divisor),
      );
    }
  }

  return exercises;
}

function getDivisors(config: MathPracticeConfig, pool: number[]): number[] {
  const divisors =
    config.selectedDivisors && config.selectedDivisors.length > 0
      ? config.selectedDivisors
      : pool;

  return divisors.filter((divisor) => divisor !== 0);
}

function passesMaxResult(config: MathPracticeConfig, value: number): boolean {
  if (config.maxResult === undefined) {
    return true;
  }
  return value <= config.maxResult;
}
