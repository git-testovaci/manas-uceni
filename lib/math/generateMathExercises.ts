import type {
  AdditionConfig,
  DivisionConfig,
  DivisionRemainderConfig,
  MathExercise,
  MathOperation,
  MathPracticeConfig,
  MathRangeConfig,
  MathTopic,
  MathTopicConfigs,
  MathVisualHint,
  MissingAddendConfig,
  MissingAddendPosition,
  CountDotsConfig,
  ComparisonSign,
  CompareNumbersConfig,
  MultiplicationConfig,
  NumberSequenceConfig,
  ReviewState,
  ReviewStateMap,
  SequenceDirection,
  SubtractionConfig,
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

const OPERATION_TO_TOPIC: Record<MathOperation, MathTopic> = {
  add: "addition",
  subtract: "subtraction",
  multiply: "multiplication",
  divide: "division",
  "divide-with-remainder": "division-remainder",
  "missing-addend-to-10": "addition",
  "count-dots": "mixed",
  "compare-numbers": "mixed",
  "number-sequence": "mixed",
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
    case "missing-addend-to-10":
      throw new Error("Use createMissingAddendTo10ExerciseId instead.");
    case "count-dots":
      throw new Error("Use createCountDotsExerciseId instead.");
    case "compare-numbers":
      throw new Error("Use createCompareNumbersExerciseId instead.");
    case "number-sequence":
      throw new Error("Use createNumberSequenceExerciseId instead.");
  }
}

export function createMissingAddendTo10ExerciseId(
  targetSum: number,
  missingPosition: MissingAddendPosition,
  knownAddend: number,
): string {
  return `math-missing-addend-${targetSum}-${missingPosition}-${knownAddend}`;
}

export function createMissingAddendTo10Exercise(
  knownAddend: number,
  missingPosition: MissingAddendPosition,
  targetSum: number,
): MathExercise {
  const missingAnswer = targetSum - knownAddend;
  const id = createMissingAddendTo10ExerciseId(
    targetSum,
    missingPosition,
    knownAddend,
  );
  const prompt =
    missingPosition === "right"
      ? `${knownAddend} + ? = ${targetSum}`
      : `? + ${knownAddend} = ${targetSum}`;

  return {
    id,
    subject: "math",
    topic: "addition",
    operation: "missing-addend-to-10",
    operandA: knownAddend,
    operandB: missingAnswer,
    missingPosition,
    targetSum,
    prompt,
    correctAnswer: String(missingAnswer),
    explanation: `Doplň číslo ${missingAnswer}, aby vzniklo ${targetSum}.`,
    createdBy: "system",
  };
}

export function createCountDotsExerciseId(count: number): string {
  return `math-count-dots-${count}`;
}

function getDotCountLabel(count: number): string {
  if (count === 1) {
    return "tečku";
  }

  if (count >= 2 && count <= 4) {
    return "tečky";
  }

  return "teček";
}

function buildCountDotsExplanation(count: number): string {
  return `Spočítáme tečky. Vidíme ${count} ${getDotCountLabel(count)}, takže správná odpověď je ${count}.`;
}

export function getCountDotsExplanation(count: number): string {
  return buildCountDotsExplanation(count);
}

export function createCountDotsExercise(count: number): MathExercise {
  return {
    id: createCountDotsExerciseId(count),
    subject: "math",
    topic: "mixed",
    operation: "count-dots",
    operandA: count,
    operandB: 0,
    dotCount: count,
    countObjectType: "dot",
    prompt: "Kolik je teček?",
    correctAnswer: String(count),
    explanation: buildCountDotsExplanation(count),
    createdBy: "system",
  };
}

function getComparisonSign(left: number, right: number): ComparisonSign {
  if (left < right) {
    return "<";
  }

  if (left > right) {
    return ">";
  }

  return "=";
}

export function createCompareNumbersExerciseId(
  left: number,
  right: number,
): string {
  return `math-compare-${left}-${right}`;
}

function buildCompareNumbersExplanation(
  left: number,
  right: number,
  sign: ComparisonSign,
): string {
  if (sign === "<") {
    return `Porovnáme čísla. ${left} je menší než ${right}, proto doplníme <.`;
  }

  if (sign === ">") {
    return `Porovnáme čísla. ${left} je větší než ${right}, proto doplníme >.`;
  }

  return `Porovnáme čísla. ${left} je stejné jako ${right}, proto doplníme =.`;
}

export function createCompareNumbersExercise(
  left: number,
  right: number,
): MathExercise {
  const sign = getComparisonSign(left, right);

  return {
    id: createCompareNumbersExerciseId(left, right),
    subject: "math",
    topic: "mixed",
    operation: "compare-numbers",
    operandA: left,
    operandB: right,
    comparisonSign: sign,
    prompt: `${left} ? ${right}`,
    correctAnswer: sign,
    explanation: buildCompareNumbersExplanation(left, right, sign),
    createdBy: "system",
  };
}

const NUMBER_SEQUENCE_LENGTH = 4;

function buildForwardSequence(start: number): number[] {
  return Array.from(
    { length: NUMBER_SEQUENCE_LENGTH },
    (_, index) => start + index,
  );
}

function buildBackwardSequence(start: number): number[] {
  return Array.from(
    { length: NUMBER_SEQUENCE_LENGTH },
    (_, index) => start - index,
  );
}

function formatNumberSequencePrompt(
  sequence: number[],
  missingIndex: number,
): string {
  return sequence
    .map((value, index) => (index === missingIndex ? "?" : String(value)))
    .join(", ");
}

export function createNumberSequenceExerciseId(
  direction: SequenceDirection,
  start: number,
  missingIndex: number,
): string {
  return `math-number-sequence-${direction}-${start}-${missingIndex}`;
}

function buildNumberSequenceExplanation(
  direction: SequenceDirection,
  sequence: number[],
  missing: number,
): string {
  const fullSequence = sequence.join(", ");

  if (direction === "forward") {
    return `Řada jde dopředu po jedné: ${fullSequence}. Chybí ${missing}.`;
  }

  return `Řada jde dozadu po jedné: ${fullSequence}. Chybí ${missing}.`;
}

export function createNumberSequenceExercise(
  direction: SequenceDirection,
  start: number,
  missingIndex: number,
): MathExercise {
  const sequence =
    direction === "forward"
      ? buildForwardSequence(start)
      : buildBackwardSequence(start);
  const missing = sequence[missingIndex]!;

  return {
    id: createNumberSequenceExerciseId(direction, start, missingIndex),
    subject: "math",
    topic: "mixed",
    operation: "number-sequence",
    operandA: start,
    operandB: missing,
    sequenceDirection: direction,
    sequenceNumbers: sequence,
    sequenceMissingIndex: missingIndex,
    prompt: formatNumberSequencePrompt(sequence, missingIndex),
    correctAnswer: String(missing),
    explanation: buildNumberSequenceExplanation(direction, sequence, missing),
    createdBy: "system",
  };
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
    case "missing-addend-to-10":
      throw new Error("Use createMissingAddendTo10Exercise instead.");
    case "count-dots":
      throw new Error("Use createCountDotsExercise instead.");
    case "compare-numbers":
      throw new Error("Use createCompareNumbersExercise instead.");
    case "number-sequence":
      throw new Error("Use createNumberSequenceExercise instead.");
  }
}

export function generateMathExercises(
  config: MathPracticeConfig,
): MathExercise[] {
  if (config.topicConfigs) {
    return generateFromTopicConfigs(config.topicConfigs);
  }

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

function generateFromTopicConfigs(
  topicConfigs: MathTopicConfigs,
): MathExercise[] {
  const byId = new Map<string, MathExercise>();
  const compareNumbersExercises = topicConfigs.compareNumbers?.enabled
    ? generateCompareNumbersFromTopicConfig(topicConfigs.compareNumbers)
    : undefined;

  if (topicConfigs.addition?.enabled) {
    for (const exercise of generateAdditionFromTopicConfig(
      topicConfigs.addition,
    )) {
      byId.set(exercise.id, exercise);
    }
  }

  if (topicConfigs.subtraction?.enabled) {
    for (const exercise of generateSubtractionFromTopicConfig(
      topicConfigs.subtraction,
    )) {
      byId.set(exercise.id, exercise);
    }
  }

  if (topicConfigs.multiplication?.enabled) {
    for (const exercise of generateMultiplicationFromTopicConfig(
      topicConfigs.multiplication,
    )) {
      byId.set(exercise.id, exercise);
    }
  }

  if (topicConfigs.division?.enabled) {
    for (const exercise of generateDivisionFromTopicConfig(
      topicConfigs.division,
    )) {
      byId.set(exercise.id, exercise);
    }
  }

  if (topicConfigs.divisionRemainder?.enabled) {
    for (const exercise of generateDivisionRemainderFromTopicConfig(
      topicConfigs.divisionRemainder,
    )) {
      byId.set(exercise.id, exercise);
    }
  }

  if (topicConfigs.missingAddend?.enabled) {
    for (const exercise of generateMissingAddendFromTopicConfig(
      topicConfigs.missingAddend,
    )) {
      byId.set(exercise.id, exercise);
    }
  }

  if (topicConfigs.countDots?.enabled) {
    for (const exercise of generateCountDotsFromTopicConfig(
      topicConfigs.countDots,
    )) {
      byId.set(exercise.id, exercise);
    }
  }

  if (topicConfigs.numberSequence?.enabled) {
    for (const exercise of generateNumberSequenceFromTopicConfig(
      topicConfigs.numberSequence,
    )) {
      byId.set(exercise.id, exercise);
    }
  }

  const exercises = [...byId.values()].sort((a, b) => a.id.localeCompare(b.id));

  if (!compareNumbersExercises) {
    return exercises;
  }

  return [...exercises, ...compareNumbersExercises];
}

function buildRangePool(range: MathRangeConfig): number[] {
  const values: number[] = [];

  for (let value = range.min; value <= range.max; value += 1) {
    values.push(value);
  }

  return values;
}

function passesTopicMaxResult(maxResult: number | undefined, value: number): boolean {
  if (maxResult === undefined) {
    return true;
  }

  return value <= maxResult;
}

function generateAdditionFromTopicConfig(
  config: AdditionConfig,
): MathExercise[] {
  const addendsA = buildRangePool(config.addendA);
  const addendsB = buildRangePool(config.addendB);
  const exercises: MathExercise[] = [];

  for (const operandA of addendsA) {
    for (const operandB of addendsB) {
      const result = operandA + operandB;
      if (!passesTopicMaxResult(config.maxResult, result)) {
        continue;
      }
      exercises.push(createMathExercise("add", operandA, operandB));
    }
  }

  return exercises;
}

function generateSubtractionFromTopicConfig(
  config: SubtractionConfig,
): MathExercise[] {
  const minuends = buildRangePool(config.minuend);
  const subtrahends = buildRangePool(config.subtrahend);
  const allowNegativeResults = config.allowNegativeResults ?? false;
  const exercises: MathExercise[] = [];

  for (const minuend of minuends) {
    for (const subtrahend of subtrahends) {
      if (!allowNegativeResults && minuend < subtrahend) {
        continue;
      }
      exercises.push(createMathExercise("subtract", minuend, subtrahend));
    }
  }

  return exercises;
}

function generateMultiplicationFromTopicConfig(
  config: MultiplicationConfig,
): MathExercise[] {
  const multiplicands = buildRangePool(config.multiplicand);
  const multipliers = buildRangePool(config.multiplier);
  const selectedMultipliers =
    config.selectedMultipliers && config.selectedMultipliers.length > 0
      ? config.selectedMultipliers
      : multipliers;
  const exercises: MathExercise[] = [];

  for (const multiplicand of multiplicands) {
    for (const multiplier of selectedMultipliers) {
      if (multiplier < config.multiplier.min || multiplier > config.multiplier.max) {
        continue;
      }

      const product = multiplicand * multiplier;
      if (!passesTopicMaxResult(config.maxResult, product)) {
        continue;
      }

      exercises.push(createMathExercise("multiply", multiplicand, multiplier));
    }
  }

  return exercises;
}

function isWithinRange(value: number, range: MathRangeConfig): boolean {
  return value >= range.min && value <= range.max;
}

function generateDivisionFromTopicConfig(
  config: DivisionConfig,
): MathExercise[] {
  if (config.quotient) {
    return generateDivisionFromQuotientRange(config);
  }

  const dividends = buildRangePool(config.dividend);
  const divisors = getTopicDivisors(config.divisor, config.selectedDivisors);
  const wholeNumbersOnly = config.wholeNumbersOnly ?? true;
  const exercises: MathExercise[] = [];

  for (const dividend of dividends) {
    for (const divisor of divisors) {
      if (divisor === 0) {
        continue;
      }

      if (wholeNumbersOnly && dividend % divisor !== 0) {
        continue;
      }

      exercises.push(createMathExercise("divide", dividend, divisor));
    }
  }

  return exercises;
}

function generateDivisionFromQuotientRange(
  config: DivisionConfig,
): MathExercise[] {
  const divisors = getTopicDivisors(config.divisor, config.selectedDivisors);
  const quotients = buildRangePool(config.quotient!);
  const exercises: MathExercise[] = [];

  for (const divisor of divisors) {
    if (divisor <= 0) {
      continue;
    }

    for (const quotient of quotients) {
      const dividend = divisor * quotient;
      if (!isWithinRange(dividend, config.dividend)) {
        continue;
      }

      exercises.push(createMathExercise("divide", dividend, divisor));
    }
  }

  return exercises;
}

function generateDivisionRemainderFromTopicConfig(
  config: DivisionRemainderConfig,
): MathExercise[] {
  if (config.quotient) {
    return generateDivisionRemainderFromQuotientRange(config);
  }

  const dividends = buildRangePool(config.dividend);
  const divisors = getTopicDivisors(config.divisor, config.selectedDivisors);
  const requireRemainder = config.requireRemainder ?? true;
  const exercises: MathExercise[] = [];

  for (const dividend of dividends) {
    for (const divisor of divisors) {
      if (!isValidDivisionRemainderExample(dividend, divisor)) {
        continue;
      }

      const remainder = dividend % divisor;
      if (requireRemainder && remainder === 0) {
        continue;
      }

      exercises.push(
        createMathExercise("divide-with-remainder", dividend, divisor),
      );
    }
  }

  return exercises;
}

function generateDivisionRemainderFromQuotientRange(
  config: DivisionRemainderConfig,
): MathExercise[] {
  const divisors = getTopicDivisors(config.divisor, config.selectedDivisors);
  const quotients = buildRangePool(config.quotient!);
  const exercises: MathExercise[] = [];

  for (const divisor of divisors) {
    if (divisor <= 0) {
      continue;
    }

    for (const quotient of quotients) {
      if (quotient < 1) {
        continue;
      }

      for (let remainder = 1; remainder < divisor; remainder += 1) {
        const dividend = divisor * quotient + remainder;
        if (!isWithinRange(dividend, config.dividend)) {
          continue;
        }

        if (!isValidDivisionRemainderExample(dividend, divisor)) {
          continue;
        }

        exercises.push(
          createMathExercise("divide-with-remainder", dividend, divisor),
        );
      }
    }
  }

  return exercises;
}

function generateMissingAddendFromTopicConfig(
  config: MissingAddendConfig,
): MathExercise[] {
  const byId = new Map<string, MathExercise>();
  const positions: MissingAddendPosition[] = ["left", "right"];

  for (
    let knownAddend = config.knownAddend.min;
    knownAddend <= config.knownAddend.max;
    knownAddend += 1
  ) {
    for (const missingPosition of positions) {
      const exercise = createMissingAddendTo10Exercise(
        knownAddend,
        missingPosition,
        config.targetSum,
      );
      byId.set(exercise.id, exercise);
    }
  }

  return [...byId.values()].sort((a, b) => a.id.localeCompare(b.id));
}

function generateCountDotsFromTopicConfig(
  config: CountDotsConfig,
): MathExercise[] {
  const byId = new Map<string, MathExercise>();

  for (
    let count = config.countRange.min;
    count <= config.countRange.max;
    count += 1
  ) {
    const exercise = createCountDotsExercise(count);
    byId.set(exercise.id, exercise);
  }

  return [...byId.values()].sort((a, b) => a.id.localeCompare(b.id));
}

function isValidForwardSequenceStart(
  start: number,
  range: MathRangeConfig,
): boolean {
  const end = start + NUMBER_SEQUENCE_LENGTH - 1;
  return start >= range.min && end <= range.max;
}

function isValidBackwardSequenceStart(
  start: number,
  range: MathRangeConfig,
): boolean {
  const end = start - (NUMBER_SEQUENCE_LENGTH - 1);
  return start <= range.max && end >= range.min;
}

function generateNumberSequenceFromTopicConfig(
  config: NumberSequenceConfig,
): MathExercise[] {
  const byId = new Map<string, MathExercise>();
  const directions: SequenceDirection[] = ["forward", "backward"];

  for (const direction of directions) {
    const starts = buildRangePool(config.numberRange).filter((start) =>
      direction === "forward"
        ? isValidForwardSequenceStart(start, config.numberRange)
        : isValidBackwardSequenceStart(start, config.numberRange),
    );

    for (const start of starts) {
      for (
        let missingIndex = 0;
        missingIndex < NUMBER_SEQUENCE_LENGTH;
        missingIndex += 1
      ) {
        const exercise = createNumberSequenceExercise(
          direction,
          start,
          missingIndex,
        );
        byId.set(exercise.id, exercise);
      }
    }
  }

  return [...byId.values()].sort((a, b) => a.id.localeCompare(b.id));
}

function sortCompareNumbersGroup(
  exercises: MathExercise[],
  group: "less" | "greater" | "equal",
): MathExercise[] {
  return [...exercises].sort((a, b) => {
    const leftA = a.operandA;
    const rightA = a.operandB;
    const leftB = b.operandA;
    const rightB = b.operandB;

    if (group === "equal") {
      return leftA - leftB;
    }

    if (rightA !== rightB) {
      return rightA - rightB;
    }

    return leftA - leftB;
  });
}

function interleaveCompareNumbersGroups(
  less: MathExercise[],
  greater: MathExercise[],
  equal: MathExercise[],
): MathExercise[] {
  const ordered: MathExercise[] = [];
  const maxLength = Math.max(less.length, greater.length, equal.length);

  for (let index = 0; index < maxLength; index += 1) {
    if (index < less.length) {
      ordered.push(less[index]!);
    }
    if (index < greater.length) {
      ordered.push(greater[index]!);
    }
    if (index < equal.length) {
      ordered.push(equal[index]!);
    }
  }

  return ordered;
}

function generateCompareNumbersFromTopicConfig(
  config: CompareNumbersConfig,
): MathExercise[] {
  const less: MathExercise[] = [];
  const greater: MathExercise[] = [];
  const equal: MathExercise[] = [];

  for (
    let left = config.numberRange.min;
    left <= config.numberRange.max;
    left += 1
  ) {
    for (
      let right = config.numberRange.min;
      right <= config.numberRange.max;
      right += 1
    ) {
      const exercise = createCompareNumbersExercise(left, right);

      if (left < right) {
        less.push(exercise);
      } else if (left > right) {
        greater.push(exercise);
      } else {
        equal.push(exercise);
      }
    }
  }

  return interleaveCompareNumbersGroups(
    sortCompareNumbersGroup(less, "less"),
    sortCompareNumbersGroup(greater, "greater"),
    sortCompareNumbersGroup(equal, "equal"),
  );
}

function isValidDivisionRemainderExample(
  dividend: number,
  divisor: number,
): boolean {
  if (divisor <= 0) {
    return false;
  }

  if (dividend <= divisor) {
    return false;
  }

  const quotient = Math.floor(dividend / divisor);
  const remainder = dividend % divisor;

  return quotient >= 1 && remainder > 0;
}

function getTopicDivisors(
  divisorRange: MathRangeConfig,
  selectedDivisors?: number[],
): number[] {
  if (selectedDivisors && selectedDivisors.length > 0) {
    return selectedDivisors.filter(
      (divisor) =>
        divisor !== 0 &&
        divisor >= divisorRange.min &&
        divisor <= divisorRange.max,
    );
  }

  return buildRangePool(divisorRange).filter((divisor) => divisor !== 0);
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
    case "missing-addend-to-10":
      return [];
    case "count-dots":
      return [];
    case "compare-numbers":
      return [];
    case "number-sequence":
      return [];
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
      if (!isValidDivisionRemainderExample(dividend, divisor)) {
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
