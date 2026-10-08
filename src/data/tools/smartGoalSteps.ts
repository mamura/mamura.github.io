import type { SmartGoalDraft, SmartStepDefinition } from '../../utils/smart-goals/types';

/** A single qualitative example connects the five criteria without equating activity with outcome. */
export const smartGoalExample: Readonly<SmartGoalDraft> = {
  objective: 'Desenvolver minha capacidade de avaliar e apresentar decisões arquiteturais com autonomia.',
  successIndicator: 'Revisão de uma proposta técnica por um profissional experiente, verificando clareza das alternativas, riscos e justificativas.',
  baseline: 'Hoje preciso de ajuda para comparar alternativas e justificar uma decisão técnica.',
  expectedOutcome: 'Apresentar e defender uma proposta com alternativas, riscos e justificativas, sem depender de outra pessoa para organizar meus argumentos.',
  feasibility: 'Tenho três horas semanais disponíveis, acesso a um projeto de estudo e apoio de um profissional experiente para revisar minha proposta.',
  relevance: 'Quero contribuir com mais autonomia nas decisões técnicas da equipe e evoluir em arquitetura de software.',
  deadlineType: 'horizon',
  deadlineDate: '',
  deadlineHorizon: 'Nos próximos três meses, contados a partir do início desta meta.',
};

export const smartGoalSteps = [
  {
    id: 'specific', letter: 'S', title: 'Específica',
    explanation: 'Descreva a mudança que deseja alcançar e seu contexto. Troque intenções genéricas, como “quero melhorar”, por um objetivo concreto.',
    question: 'O que exatamente você deseja alcançar?',
    example: smartGoalExample.objective,
    fields: [
      { field: 'objective', label: 'Objetivo', question: 'Qual capacidade, condição ou resultado você deseja desenvolver?', example: smartGoalExample.objective },
    ],
  },
  {
    id: 'measurable', letter: 'M', title: 'Mensurável',
    explanation: 'Defina como reconhecer o sucesso e qual mudança espera observar. O indicador pode ser quantitativo ou uma evidência qualitativa verificável. Concluir atividades, por si só, não comprova o resultado.',
    question: 'Que evidência permitirá reconhecer que você alcançou o objetivo?',
    example: `Indicador: ${smartGoalExample.successIndicator} Resultado esperado: ${smartGoalExample.expectedOutcome}`,
    fields: [
      { field: 'successIndicator', label: 'Indicador de sucesso', question: 'Como o resultado será verificado e por quem, quando aplicável?', example: smartGoalExample.successIndicator },
      { field: 'baseline', label: 'Situação inicial (opcional)', question: 'Como está a situação hoje, se houver uma referência disponível?', example: smartGoalExample.baseline },
      { field: 'expectedOutcome', label: 'Resultado esperado', question: 'Que mudança concreta demonstrará sucesso?', example: smartGoalExample.expectedOutcome },
    ],
  },
  {
    id: 'achievable', letter: 'A', title: 'Atingível',
    explanation: 'Considere tempo, recursos, apoio e condições disponíveis. Reconheça dependências de outras pessoas. A viabilidade é uma avaliação sua, não uma conclusão automática da ferramenta.',
    question: 'Quais condições tornam essa meta viável para você?',
    example: smartGoalExample.feasibility,
    fields: [
      { field: 'feasibility', label: 'Justificativa de viabilidade', question: 'Quais recursos e condições você tem ou precisa garantir?', example: smartGoalExample.feasibility },
    ],
  },
  {
    id: 'relevant', letter: 'R', title: 'Relevante',
    explanation: 'Explique por que a mudança importa e como se conecta às suas necessidades ou prioridades. A ferramenta ajuda a explicitar essa relação, sem julgar sua importância.',
    question: 'Por que vale a pena alcançar essa meta?',
    example: smartGoalExample.relevance,
    fields: [
      { field: 'relevance', label: 'Justificativa de importância', question: 'Como o objetivo contribui para algo importante para você?', example: smartGoalExample.relevance },
    ],
  },
  {
    id: 'temporal', letter: 'T', title: 'Temporal',
    explanation: 'Escolha uma data específica ou descreva um horizonte com duração e referência claras. Evite prazos vagos como “algum dia”. O texto orienta essa escolha; sua clareza não é julgada automaticamente.',
    question: 'Até quando você pretende alcançar o resultado?',
    example: smartGoalExample.deadlineHorizon,
    fields: [
      { field: 'deadlineDate', label: 'Data específica', question: 'Qual é a data limite?', example: '2027-03-31' },
      { field: 'deadlineHorizon', label: 'Horizonte temporal', question: 'Qual é a duração e a referência de início do prazo?', example: smartGoalExample.deadlineHorizon },
    ],
  },
] as const satisfies readonly SmartStepDefinition[];
