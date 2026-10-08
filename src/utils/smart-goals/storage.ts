import { SMART_FIELD_RULES } from './validation';
import type { SmartGoalDraft, SmartStepId } from './types';

export const SMART_GOAL_STORAGE_KEY = 'mamura:smart-goal:v1';
export const SMART_GOAL_SCHEMA_VERSION = 1;

export interface StoredSmartGoal {
  version: typeof SMART_GOAL_SCHEMA_VERSION;
  draft: SmartGoalDraft;
  currentStep: SmartStepId;
  view: 'form' | 'editing' | 'result';
}

/** Injectable subset of Storage, allowing tests without browser globals. */
export interface SmartGoalStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export type SmartGoalReadResult =
  | { status: 'restored'; data: StoredSmartGoal }
  | { status: 'empty' | 'invalid' | 'unavailable' };

function browserStorage(): SmartGoalStorage | undefined {
  if (typeof window === 'undefined') return undefined;
  // Access to the property itself can throw a SecurityError.
  return window.localStorage;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/** Structural validation accepts incomplete answers, but rejects unexpected types and oversized text. */
export function parseStoredSmartGoal(value: unknown): StoredSmartGoal | null {
  if (!isRecord(value) || value.version !== SMART_GOAL_SCHEMA_VERSION || !isRecord(value.draft)) return null;
  const stepIds: readonly SmartStepId[] = ['specific', 'measurable', 'achievable', 'relevant', 'temporal'];
  if (!stepIds.includes(value.currentStep as SmartStepId)) return null;
  if (value.view !== 'form' && value.view !== 'editing' && value.view !== 'result') return null;
  const draft = value.draft;
  if (draft.deadlineType !== 'date' && draft.deadlineType !== 'horizon') return null;
  for (const [field, rule] of Object.entries(SMART_FIELD_RULES)) {
    const text = draft[field];
    if (typeof text !== 'string' || text.trim().length > rule.maxLength) return null;
  }
  // Copy only known properties instead of trusting arbitrary persisted keys.
  return {
    version: SMART_GOAL_SCHEMA_VERSION,
    currentStep: value.currentStep as SmartStepId,
    view: value.view,
    draft: {
      objective: draft.objective as string,
      successIndicator: draft.successIndicator as string,
      baseline: draft.baseline as string,
      expectedOutcome: draft.expectedOutcome as string,
      feasibility: draft.feasibility as string,
      relevance: draft.relevance as string,
      deadlineType: draft.deadlineType,
      deadlineDate: draft.deadlineDate as string,
      deadlineHorizon: draft.deadlineHorizon as string,
    },
  };
}

export function readSmartGoal(storage?: SmartGoalStorage): SmartGoalReadResult {
  try {
    const target = storage ?? browserStorage();
    if (!target) return { status: 'unavailable' };
    const raw = target.getItem(SMART_GOAL_STORAGE_KEY);
    if (raw === null) return { status: 'empty' };
    let parsed: unknown;
    try { parsed = JSON.parse(raw); } catch { return { status: 'invalid' }; }
    const data = parseStoredSmartGoal(parsed);
    return data ? { status: 'restored', data } : { status: 'invalid' };
  } catch {
    return { status: 'unavailable' };
  }
}

export function writeSmartGoal(data: StoredSmartGoal, storage?: SmartGoalStorage): boolean {
  try {
    const target = storage ?? browserStorage();
    if (!target) return false;
    const raw = JSON.stringify(data);
    if (target.getItem(SMART_GOAL_STORAGE_KEY) !== raw) target.setItem(SMART_GOAL_STORAGE_KEY, raw);
    return true;
  } catch {
    return false;
  }
}

export function removeSmartGoal(storage?: SmartGoalStorage): boolean {
  try {
    const target = storage ?? browserStorage();
    if (!target) return false;
    target.removeItem(SMART_GOAL_STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}
