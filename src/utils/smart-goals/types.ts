export type SmartStepId = 'specific' | 'measurable' | 'achievable' | 'relevant' | 'temporal';

/** Both deadline values are retained in a draft; only the selected mode is validated. */
export interface SmartGoalDraft {
  objective: string;
  successIndicator: string;
  baseline: string;
  expectedOutcome: string;
  feasibility: string;
  relevance: string;
  deadlineType: 'date' | 'horizon';
  deadlineDate: string;
  deadlineHorizon: string;
}

export type SmartTextField = Exclude<keyof SmartGoalDraft, 'deadlineType'>;
export type SmartGoalField = keyof SmartGoalDraft;

export interface SmartFieldDefinition {
  field: SmartTextField;
  label: string;
  question: string;
  example: string;
}

export interface SmartStepDefinition {
  id: SmartStepId;
  letter: 'S' | 'M' | 'A' | 'R' | 'T';
  title: string;
  explanation: string;
  question: string;
  example: string;
  fields: readonly SmartFieldDefinition[];
}

export type SmartValidationCode = 'required' | 'too_long' | 'invalid_date' | 'past_date';

export interface SmartValidationOptions {
  /** Local browser date supplied by the caller, in YYYY-MM-DD format. */
  minimumDate?: string;
}

export interface SmartValidationError {
  field: SmartGoalField;
  code: SmartValidationCode;
  message: string;
}

export type SmartFieldErrors = Partial<Record<SmartGoalField, SmartValidationError>>;

export interface SmartValidationResult {
  valid: boolean;
  errors: SmartFieldErrors;
}
