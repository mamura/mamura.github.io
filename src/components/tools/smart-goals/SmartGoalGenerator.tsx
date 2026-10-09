
import { useEffect, useRef, useState, type FormEvent } from 'react';

import { smartGoalSteps } from '@/data/tools/smartGoalSteps';

import {
  validateSmartField,
  validateSmartGoal,
  validateSmartStep,
} from '@/utils/smart-goals/validation';

import {
  readSmartGoal,
  writeSmartGoal,
  removeSmartGoal,
  SMART_GOAL_SCHEMA_VERSION,
  type StoredSmartGoal,
} from '@/utils/smart-goals/storage';

import type {
  SmartFieldErrors,
  SmartGoalDraft,
  SmartStepId,
  SmartTextField,
} from '@/utils/smart-goals/types';

import SmartGoalStep from './SmartGoalStep';
import SmartGoalResult from './SmartGoalResult';

/* ==========================================================
   HELPERS
   ========================================================== */

function browserToday(): string {
  const now = new Date();

  return [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
  ].join('-');
}

function emptyDraft(): SmartGoalDraft {
  return {
    objective: '',
    successIndicator: '',
    baseline: '',
    expectedOutcome: '',
    feasibility: '',
    relevance: '',
    deadlineType: 'horizon',
    deadlineDate: '',
    deadlineHorizon: '',
  };
}

function hasAnswers(draft: SmartGoalDraft): boolean {
  return Object.entries(draft).some(
    ([field, value]) =>
      field !== 'deadlineType' && value.trim().length > 0
  );
}

/* ==========================================================
   SMART GOAL GENERATOR
   ========================================================== */

export default function SmartGoalGenerator() {
  /* --------------------------------------------------------
     Estado
     -------------------------------------------------------- */

  const [draft, setDraft] = useState<SmartGoalDraft>(emptyDraft);
  const [index, setIndex] = useState(0);
  const [errors, setErrors] = useState<SmartFieldErrors>({});

  const [completed, setCompleted] = useState(false);
  const [editing, setEditing] = useState(false);

  const [minimumDate, setMinimumDate] = useState('');

  const [focusRequest, setFocusRequest] = useState<{
    field?: SmartTextField;
  } | null>(null);

  const [restored, setRestored] = useState(false);
  const [storageMessage, setStorageMessage] = useState('');

  /* --------------------------------------------------------
     Referências
     -------------------------------------------------------- */

  const lastAttemptedSave = useRef<string | null>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const form = useRef<HTMLFormElement>(null);

  const step = smartGoalSteps[index];

  /* --------------------------------------------------------
     Restauração do localStorage
     -------------------------------------------------------- */

  useEffect(() => {
    const saved = readSmartGoal();

    if (saved.status === 'restored') {
      const { data } = saved;

      setDraft(data.draft);

      setIndex(
        smartGoalSteps.findIndex(
          candidate => candidate.id === data.currentStep
        )
      );

      setEditing(data.view === 'editing');

      if (data.view === 'result') {
        const validation = validateSmartGoal(data.draft, {
          minimumDate: browserToday(),
        });

        if (validation.valid) {
          setCompleted(true);
          setFocusRequest({});
        } else {
          const firstIndex = smartGoalSteps.findIndex(
            candidate =>
              candidate.fields.some(
                ({ field }) => validation.errors[field]
              )
          );

          const firstField = smartGoalSteps[firstIndex].fields.find(
            ({ field }) => validation.errors[field]
          )!.field;

          setIndex(firstIndex);
          setErrors(validation.errors);
          setEditing(true);
          setFocusRequest({ field: firstField });

          setStorageMessage(
            'Suas respostas foram recuperadas. Revise os campos indicados antes de voltar ao resultado.'
          );
        }
      } else if (
        data.draft.deadlineType === 'date' &&
        data.draft.deadlineDate.trim()
      ) {
        const error = validateSmartField(
          'deadlineDate',
          data.draft.deadlineDate,
          { minimumDate: browserToday() }
        );

        if (error) {
          setErrors({ deadlineDate: error });
        }
      }
    } else if (saved.status === 'invalid') {
      setStorageMessage(
        'Os dados salvos não puderam ser recuperados. Você pode começar uma nova meta.'
      );
    } else if (saved.status === 'unavailable') {
      setStorageMessage(
        'O armazenamento local está indisponível. Você pode usar a ferramenta, mas suas respostas podem não ser mantidas ao sair.'
      );
    }

    setRestored(true);
  }, []);

  /* --------------------------------------------------------
     Salvamento automático
     -------------------------------------------------------- */

  useEffect(() => {
    // A restauração precisa terminar antes do primeiro salvamento.
    if (!restored) return;

    const data: StoredSmartGoal = {
      version: SMART_GOAL_SCHEMA_VERSION,
      draft,
      currentStep: step.id,
      view: completed ? 'result' : editing ? 'editing' : 'form',
    };

    const serialized = JSON.stringify(data);

    if (serialized === lastAttemptedSave.current) {
      return;
    }

    const hadPreviousSave = lastAttemptedSave.current !== null;

    lastAttemptedSave.current = serialized;

    // Evita recriar a chave após limpar uma meta.
    if (
      !hasAnswers(draft) &&
      index === 0 &&
      !completed &&
      !editing
    ) {
      if (hadPreviousSave && !removeSmartGoal()) {
        setStorageMessage(
          'Não foi possível limpar o armazenamento deste navegador.'
        );
      }

      return;
    }

    if (!writeSmartGoal(data)) {
      setStorageMessage(
        'Não foi possível salvar neste navegador. A ferramenta continua disponível, mas suas respostas podem não ser mantidas ao sair.'
      );
    }
  }, [
    restored,
    draft,
    index,
    completed,
    editing,
    step.id,
  ]);

  /* --------------------------------------------------------
     Atualização da data mínima
     -------------------------------------------------------- */

  useEffect(() => {
    const refresh = () => setMinimumDate(browserToday());

    refresh();

    window.addEventListener('focus', refresh);

    const timer = window.setInterval(refresh, 60_000);

    return () => {
      window.removeEventListener('focus', refresh);
      window.clearInterval(timer);
    };
  }, []);

  /* --------------------------------------------------------
     Gerenciamento do foco
     -------------------------------------------------------- */

  useEffect(() => {
    if (!focusRequest) return;

    if (focusRequest.field) {
      form.current
        ?.querySelector<HTMLElement>(
          `[name="${focusRequest.field}"]`
        )
        ?.focus();
    } else {
      heading.current?.focus();
    }
  }, [focusRequest]);

  /* ========================================================
     AÇÕES
     ======================================================== */

  function update(field: SmartTextField, value: string) {
    setDraft(current => ({
      ...current,
      [field]: value,
    }));

    setErrors(current => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const options = {
      minimumDate: browserToday(),
    };

    setMinimumDate(options.minimumDate);

    const last = index === smartGoalSteps.length - 1;

    const result =
      last || editing
        ? validateSmartGoal(draft, options)
        : validateSmartStep(step.id, draft, options);

    setErrors(result.errors);

    if (!result.valid) {
      const firstIndex = smartGoalSteps.findIndex(
        candidate =>
          candidate.fields.some(
            ({ field }) => result.errors[field]
          )
      );

      const firstField = smartGoalSteps[firstIndex].fields.find(
        ({ field }) => result.errors[field]
      )!.field;

      setIndex(firstIndex);
      setFocusRequest({ field: firstField });

      return;
    }

    if (last || editing) {
      setCompleted(true);
      setEditing(false);
    } else {
      setIndex(current => current + 1);
    }

    setFocusRequest({});
  }

  function editCriterion(id: SmartStepId) {
    setIndex(
      smartGoalSteps.findIndex(
        candidate => candidate.id === id
      )
    );

    setCompleted(false);
    setEditing(true);
    setErrors({});
    setFocusRequest({});
  }

  function createNewGoal() {
    if (
      hasAnswers(draft) &&
      !window.confirm(
        'Criar uma nova meta? As respostas da meta atual serão apagadas deste navegador.'
      )
    ) {
      return;
    }

    const removed = removeSmartGoal();
    const fresh = emptyDraft();

    // Impede que um efeito pendente recrie a meta removida.
    lastAttemptedSave.current = JSON.stringify({
      version: SMART_GOAL_SCHEMA_VERSION,
      draft: fresh,
      currentStep: 'specific',
      view: 'form',
    });

    setDraft(fresh);
    setIndex(0);
    setCompleted(false);
    setEditing(false);
    setErrors({});

    setStorageMessage(
      removed
        ? 'Nova meta iniciada. As respostas anteriores foram removidas deste navegador.'
        : 'Nova meta iniciada. Não foi possível limpar o armazenamento deste navegador.'
    );

    setFocusRequest({});
  }

  /* ========================================================
     RENDERIZAÇÃO
     ======================================================== */

  return (
    <section
      className="smart-form"
      aria-labelledby={completed ? undefined : 'smart-heading'}
    >
      {/* Cabeçalho do painel */}

      {!completed && (
        <div className="smart-goal-panel__header">
          <p className="smart-goal-panel__title">
            Crie sua Meta SMART
          </p>

          <p className="smart-goal-panel__meta">
            Etapa {index + 1} de {smartGoalSteps.length}
          </p>
        </div>
      )}

      {/* Privacidade e armazenamento */}

      <p className="smart-form__privacy">
        Suas respostas são salvas automaticamente neste navegador
        e não são enviadas para nossos servidores.
      </p>

      <p
        className="smart-form__storage-message"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {storageMessage}
      </p>

      {completed ? (
        /* --------------------------------------------------
           Resultado
           -------------------------------------------------- */

        <SmartGoalResult
          draft={draft}
          headingRef={heading}
          onEdit={editCriterion}
        />
      ) : (
        <>
          {/* Navegação SMART */}

          <ol
            className="smart-form__steps"
            aria-label="Etapas SMART"
          >
            {smartGoalSteps.map((item, position) => {
              const isCurrent = position === index;
              const isDone = position < index && !editing;

              return (
                <li
                  key={item.id}
                  className={
                    isDone
                      ? 'smart-form__step--done'
                      : undefined
                  }
                  aria-current={
                    isCurrent ? 'step' : undefined
                  }
                >
                  <span aria-hidden="true">
                    {item.letter}
                  </span>

                  <span className="sr-only">
                    {item.title}
                    {isDone ? ' — etapa anterior' : ''}
                  </span>
                </li>
              );
            })}
          </ol>

          {/* Título da etapa */}

          <h2
            id="smart-heading"
            ref={heading}
            tabIndex={-1}
          >
            {step.letter} — {step.title}
          </h2>

          {/* Formulário */}

          <form
            ref={form}
            noValidate
            onSubmit={submit}
          >
            <fieldset
              className="smart-form__restore-fields"
              disabled={!restored}
            >
              <legend className="sr-only">
                Respostas da etapa {step.title}
              </legend>

              <SmartGoalStep
                key={step.id}
                step={step}
                draft={draft}
                errors={errors}
                minimumDate={minimumDate}
                onChange={update}
                onDeadlineTypeChange={value => {
                  setDraft(current => ({
                    ...current,
                    deadlineType: value,
                  }));

                  setErrors({});
                }}
              />

              {/* Ações do formulário */}

              <div className="smart-form__actions">
                {index > 0 && (
                  <button
                    type="button"
                    className="smart-form__button smart-form__button--secondary"
                    onClick={() => {
                      setIndex(current => current - 1);
                      setErrors({});
                      setFocusRequest({});
                    }}
                  >
                    Voltar
                  </button>
                )}

                <button
                  type="submit"
                  className="smart-form__button"
                >
                  {editing
                    ? 'Salvar e voltar ao resultado'
                    : index === smartGoalSteps.length - 1
                      ? 'Concluir preenchimento'
                      : 'Próxima etapa'}
                </button>
              </div>
            </fieldset>
          </form>
        </>
      )}

      {/* Nova meta e artigo relacionado */}

      <div className="smart-form__new-goal">
        <button
          type="button"
          className="smart-form__button smart-form__button--secondary"
          disabled={!restored}
          onClick={createNewGoal}
        >
          Criar nova meta
        </button>

        <p className="smart-related">
          <a
            className="tools-text-link"
            href="/artigos/metas-smart"
          >
            Entenda a metodologia SMART{' '}
            <span aria-hidden="true">→</span>
          </a>
        </p>
      </div>
    </section>
  );
}
