import type {
  AdditionConfig,
  DivisionConfig,
  DivisionRemainderConfig,
  MathPracticeConfig,
  MathRangeConfig,
  MathTopicConfigs,
  MissingAddendConfig,
  MultiplicationConfig,
  CountDotsConfig,
  SubtractionConfig,
  CompareNumbersConfig,
  NumberSequenceConfig,
  MoneyCountConfig,
  ClockReadConfig,
} from "@/types";

export const DEFAULT_MATH_RANGE: MathRangeConfig = {
  min: 1,
  max: 100,
};

export const DEFAULT_ADDITION_CONFIG: AdditionConfig = {
  enabled: false,
  addendA: { min: 1, max: 100 },
  addendB: { min: 1, max: 100 },
  maxResult: 100,
};

export const DEFAULT_SUBTRACTION_CONFIG: SubtractionConfig = {
  enabled: false,
  minuend: { min: 1, max: 100 },
  subtrahend: { min: 1, max: 100 },
  allowNegativeResults: false,
};

export const DEFAULT_MULTIPLICATION_CONFIG: MultiplicationConfig = {
  enabled: true,
  multiplicand: { min: 1, max: 10 },
  multiplier: { min: 1, max: 10 },
  maxResult: 100,
  wholeNumbersOnly: true,
};

export const DEFAULT_DIVISION_CONFIG: DivisionConfig = {
  enabled: false,
  dividend: { min: 1, max: 120 },
  divisor: { min: 1, max: 10 },
  wholeNumbersOnly: true,
};

export const DEFAULT_DIVISION_REMAINDER_CONFIG: DivisionRemainderConfig = {
  enabled: false,
  dividend: { min: 1, max: 120 },
  divisor: { min: 1, max: 10 },
  requireRemainder: true,
};

export const DEFAULT_MISSING_ADDEND_CONFIG: MissingAddendConfig = {
  enabled: false,
  targetSum: 10,
  knownAddend: { min: 0, max: 10 },
};

export const DEFAULT_COUNT_DOTS_CONFIG: CountDotsConfig = {
  enabled: false,
  countRange: { min: 1, max: 5 },
  objectType: "dot",
};

export const DEFAULT_COMPARE_NUMBERS_CONFIG: CompareNumbersConfig = {
  enabled: false,
  numberRange: { min: 0, max: 10 },
};

export const DEFAULT_NUMBER_SEQUENCE_CONFIG: NumberSequenceConfig = {
  enabled: false,
  numberRange: { min: 0, max: 10 },
};

export const DEFAULT_MONEY_COUNT_CONFIG: MoneyCountConfig = {
  enabled: false,
  currencyCode: "CZK",
  coinDenominations: [1, 2, 5],
  minAmount: 2,
  maxAmount: 12,
  maxCoins: 4,
};

export const DEFAULT_CLOCK_READ_CONFIG: ClockReadConfig = {
  enabled: false,
  hourRange: { min: 1, max: 12 },
  halfHours: true,
};

export const DEFAULT_MATH_TOPIC_CONFIGS: MathTopicConfigs = {
  addition: DEFAULT_ADDITION_CONFIG,
  subtraction: DEFAULT_SUBTRACTION_CONFIG,
  multiplication: DEFAULT_MULTIPLICATION_CONFIG,
  division: DEFAULT_DIVISION_CONFIG,
  divisionRemainder: DEFAULT_DIVISION_REMAINDER_CONFIG,
  missingAddend: DEFAULT_MISSING_ADDEND_CONFIG,
  countDots: DEFAULT_COUNT_DOTS_CONFIG,
  compareNumbers: DEFAULT_COMPARE_NUMBERS_CONFIG,
  numberSequence: DEFAULT_NUMBER_SEQUENCE_CONFIG,
  moneyCount: DEFAULT_MONEY_COUNT_CONFIG,
  clockRead: DEFAULT_CLOCK_READ_CONFIG,
};

export function createDefaultMathPracticeConfig(): MathPracticeConfig {
  return {
    enabledTopics: ["multiplication"],
    minValue: 1,
    maxValue: 10,
    maxResult: 100,
    questionCount: 10,
    allowRemainders: false,
    topicConfigs: DEFAULT_MATH_TOPIC_CONFIGS,
  };
}
