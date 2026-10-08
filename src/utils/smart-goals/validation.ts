import type {
  SmartFieldErrors, SmartGoalDraft, SmartStepId, SmartTextField,
  SmartValidationError, SmartValidationResult, SmartValidationOptions,
} from './types';

/**
 * Text is trimmed before checking requiredness and length (String.length,
 * UTF-16 code units, matching HTML maxlength). No minimum beyond nonblank.
 * Baseline is optional. Dates use exactly YYYY-MM-DD; horizons are free text.
 */
export const SMART_FIELD_RULES = {
  objective: { required: true, maxLength: 600 },
  successIndicator: { required: true, maxLength: 600 },
  baseline: { required: false, maxLength: 600 },
  expectedOutcome: { required: true, maxLength: 600 },
  feasibility: { required: true, maxLength: 1000 },
  relevance: { required: true, maxLength: 1000 },
  deadlineDate: { required: true, maxLength: 10 },
  deadlineHorizon: { required: true, maxLength: 200 },
} as const satisfies Record<SmartTextField, { required: boolean; maxLength: number }>;

const STEP_FIELDS = {
  specific: ['objective'],
  measurable: ['successIndicator', 'baseline', 'expectedOutcome'],
  achievable: ['feasibility'],
  relevant: ['relevance'],
  temporal: [],
} as const satisfies Record<SmartStepId, readonly SmartTextField[]>;

/** Calendar validation without Date parsing, timezone or a dependency on today. */
export function isValidDeadlineDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split('-').map(Number);
  if (year < 1 || month < 1 || month > 12 || day < 1) return false;
  const leapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const monthDays = [31, leapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return day <= monthDays[month - 1];
}

export function validateSmartField(field: SmartTextField, value: string, options: SmartValidationOptions = {}): SmartValidationError | undefined {
  const text = value.trim();
  const rule = SMART_FIELD_RULES[field];
  if (rule.required && text.length === 0) {
    return { field, code: 'required', message: 'Preencha este campo.' };
  }
  if (text.length > rule.maxLength) {
    return { field, code: 'too_long', message: `Use no máximo ${rule.maxLength} caracteres.` };
  }
  if (field === 'deadlineDate' && !isValidDeadlineDate(text)) {
    return { field, code: 'invalid_date', message: 'Informe uma data válida no formato AAAA-MM-DD.' };
  }
  if (field === 'deadlineDate' && options.minimumDate && isValidDeadlineDate(options.minimumDate) && text < options.minimumDate) {
    return { field, code: 'past_date', message: 'Escolha uma data igual ou posterior ao dia de hoje.' };
  }
  return undefined;
}

export function validateSmartStep(step: SmartStepId, draft: SmartGoalDraft, options: SmartValidationOptions = {}): SmartValidationResult {
  const errors: SmartFieldErrors = {};
  const fields: readonly SmartTextField[] = step === 'temporal'
    ? [draft.deadlineType === 'date' ? 'deadlineDate' : 'deadlineHorizon']
    : STEP_FIELDS[step];
  for (const field of fields) {
    const error = validateSmartField(field, draft[field], options);
    if (error) errors[field] = error;
  }
  return { valid: Object.keys(errors).length === 0, errors };
}

export function validateSmartGoal(draft: SmartGoalDraft, options: SmartValidationOptions = {}): SmartValidationResult {
  const errors: SmartFieldErrors = {};
  for (const step of Object.keys(STEP_FIELDS) as SmartStepId[]) {
    Object.assign(errors, validateSmartStep(step, draft, options).errors);
  }
  return { valid: Object.keys(errors).length === 0, errors };
}
