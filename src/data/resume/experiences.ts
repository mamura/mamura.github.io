import type { Experience } from './types';

export const experiences: Experience[] = [
  {
    id: 'dr-consulta',

    company: 'Dr. Consulta',

    role: 'Senior PHP Developer (AMS)',

    period: {
      start: '2025-10',
      end: '2026-03',
    },

    context:
      'Atuação em sustentação e evolução de sistemas corporativos críticos no modelo Application Management Services (AMS).',

    highlights: [
      {
        text: 'Atuação em atendimentos N2 e N3 em sistemas corporativos críticos.',
        groups: ['general', 'backend'],
        keywords: ['AMS', 'N2', 'N3', 'sustentação'],
      },

      {
        text: 'Manutenção e evolução de sistemas legados, incluindo correções, melhorias e implementação de novas funcionalidades.',
        groups: ['general', 'php', 'backend'],
        keywords: ['PHP', 'legacy systems', 'maintenance'],
      },

      {
        text: 'Participação em múltiplos projetos estratégicos, incluindo Floresta, S2, Sensrit e plataforma de Assinatura Digital.',
        groups: ['general', 'backend', 'architecture'],
      },

      {
        text: 'Desenvolvimento e evolução de interfaces administrativas com Next.js, React e TypeScript.',
        groups: ['typescript', 'frontend', 'general'],
        keywords: ['React', 'Next.js', 'TypeScript'],
      },

      {
        text: 'Integração entre aplicações frontend e APIs REST, incluindo tratamento de estados, filtros, paginação e erros.',
        groups: ['typescript', 'frontend', 'backend'],
        keywords: ['REST API', 'React', 'integration'],
      },

      {
        text: 'Investigação e resolução de incidentes em produção com foco em estabilidade, performance e integridade dos dados.',
        groups: ['general', 'backend', 'architecture'],
        keywords: ['production', 'debugging', 'performance'],
      },

      {
        text: 'Construção e otimização de consultas SQL em ambientes Oracle e MySQL.',
        groups: ['php', 'backend'],
        keywords: ['SQL', 'Oracle', 'MySQL'],
      },

      {
        text: 'Condução autônoma de demandas críticas e priorização de incidentes em ambiente remoto.',
        groups: ['general', 'leadership'],
      },
    ],

    technologies: [
      'PHP',
      'Laravel',
      'React',
      'Next.js',
      'TypeScript',
      'Oracle',
      'MySQL',
      'MongoDB',
      'Docker',
      'REST APIs',
      'SQL',
    ],

    areas: [
      'backend',
      'frontend',
      'fullstack',
      'database',
      'architecture',
    ],

    featured: true,
  },

  {
    id: 'zerodox',

    company: 'Zerodox',

    role: 'Senior PHP Developer',

    period: {
      start: '2025-05',
      end: '2025-10',
    },

    highlights: [
      {
        text: 'Manutenção e evolução de sistema legado em PHP, garantindo estabilidade e continuidade operacional.',
        groups: ['general', 'php', 'backend'],
      },

      {
        text: 'Implementação de funcionalidades e melhorias evolutivas em sistema de gestão de documentos.',
        groups: ['general', 'php', 'backend'],
      },

      {
        text: 'Refatoração de componentes Vue 2 com foco em performance, organização e manutenibilidade.',
        groups: ['frontend', 'typescript'],
        keywords: ['Vue.js', 'refactoring'],
      },

      {
        text: 'Integração com serviços externos, incluindo AWS S3, OCR e APIs internas.',
        groups: ['backend', 'php', 'architecture'],
        keywords: ['AWS S3', 'OCR', 'API integration'],
      },

      {
        text: 'Otimização de consultas SQL e fluxos de processamento de arquivos e documentos.',
        groups: ['backend', 'php'],
      },

      {
        text: 'Ampliação da cobertura de testes automatizados em sistema legado.',
        groups: ['php', 'backend'],
        keywords: ['automated tests'],
      },
    ],

    technologies: [
      'PHP',
      'Laravel',
      'Vue.js',
      'MySQL',
      'Docker',
      'Elasticsearch',
      'AWS S3',
      'OCR',
      'GitHub',
    ],

    areas: ['backend', 'fullstack', 'database', 'architecture'],

    featured: true,
  },

  {
    id: 'iebt-innovation',

    company: 'IEBT Innovation',

    role: 'Engenheiro de Software',

    period: {
      start: '2025-02',
      end: '2025-05',
    },

    context:
      'Atuação no desenvolvimento de plataforma de empréstimo consignado em ambiente corporativo.',

    highlights: [
      {
        text: 'Desenvolvimento de APIs REST utilizando Laravel, aplicando validação, organização arquitetural e separação de responsabilidades.',
        groups: ['php', 'backend', 'architecture'],
        keywords: ['PHP', 'Laravel', 'REST API'],
      },

      {
        text: 'Desenvolvimento em aplicação React estruturada como SPA separada da API backend.',
        groups: ['frontend', 'typescript', 'fullstack'],
        keywords: ['React', 'SPA'],
      },

      {
        text: 'Implementação de integrações entre frontend e backend, incluindo consumo de endpoints, estados de aplicação e regras de negócio.',
        groups: ['fullstack', 'backend', 'frontend'],
      },

      {
        text: 'Responsabilidade pelo módulo de comissionamento, incluindo regras de negócio, persistência, validações e endpoints de integração.',
        groups: ['php', 'backend', 'architecture'],
        keywords: ['business rules', 'Laravel'],
      },
    ],

    technologies: [
      'PHP',
      'Laravel',
      'React',
      'JavaScript',
      'MySQL',
      'Docker',
      'GitHub',
    ],

    areas: ['backend', 'frontend', 'fullstack', 'architecture'],

    featured: true,
  },

  {
    id: 'stefanini',

    company: 'Stefanini',

    role: 'Líder Técnico / Senior Fullstack Developer',

    period: {
      start: '2022-09',
      end: '2024-11',
    },

    context:
      'Consultoria em múltiplos projetos corporativos e governamentais, principalmente para instituições do Estado de Minas Gerais.',

    highlights: [
      {
        text: 'Atuação como Líder Técnico em projetos governamentais para Fundação Hemominas, Secretaria de Esportes, Secretaria de Assistência Social, Junta Comercial e AGE.',
        groups: ['general', 'leadership', 'management'],
      },

      {
        text: 'Liderança de decisões técnicas, organização de entregas, revisão de código, depuração e discussões arquiteturais.',
        groups: ['leadership', 'architecture', 'management'],
        keywords: [
          'technical leadership',
          'code review',
          'software architecture',
        ],
      },

      {
        text: 'Orientação de equipes em boas práticas, manutenibilidade, organização técnica e resolução de problemas complexos.',
        groups: ['leadership', 'architecture'],
      },

      {
        text: 'Manutenção e evolução de aplicações web com PHP, Laravel e JavaScript.',
        groups: ['php', 'backend', 'fullstack'],
      },

      {
        text: 'Análise e otimização de consultas SQL em ambientes Oracle de alta volumetria.',
        groups: ['php', 'backend'],
        keywords: ['Oracle', 'SQL', 'performance'],
      },

      {
        text: 'Participação em refinamentos, análise de riscos técnicos e definição de integrações entre sistemas.',
        groups: ['architecture', 'leadership'],
      },

      {
        text: 'Atuação em projeto privado da TIM como Programador Sênior, contribuindo para evolução e manutenção de sistemas backend.',
        groups: ['php', 'backend'],
      },
    ],

    technologies: [
      'PHP',
      'Laravel',
      'JavaScript',
      'HTML',
      'CSS',
      'MySQL',
      'Oracle',
      'Docker',
      'Git',
      'Jira',
    ],

    areas: [
      'backend',
      'fullstack',
      'architecture',
      'leadership',
      'management',
      'database',
    ],

    featured: true,
  },

  {
    id: 'leoa',

    company: 'Leoa',

    role: 'Senior PHP Developer',

    period: {
      start: '2020-10',
      end: '2022-11',
    },

    highlights: [
      {
        text: 'Evolução de sistemas relacionados à declaração de imposto de renda, acompanhando mudanças anuais nas regras da Receita Federal.',
        groups: ['php', 'backend', 'general'],
      },

      {
        text: 'Implementação de regras fiscais complexas e melhorias em sistemas internos.',
        groups: ['php', 'backend'],
        keywords: ['business rules', 'PHP'],
      },

      {
        text: 'Participação na remodelagem do sistema interno de operações.',
        groups: ['php', 'backend', 'architecture'],
      },

      {
        text: 'Desenvolvimento de funcionalidades para produto voltado ao ecossistema de afiliados.',
        groups: ['php', 'backend'],
      },

      {
        text: 'Manutenção e evolução de código legado e processos internos.',
        groups: ['php', 'backend'],
      },
    ],

    technologies: [
      'PHP',
      'Yii',
      'MySQL',
      'Docker',
      'JavaScript',
    ],

    areas: ['backend', 'fullstack', 'database'],

    featured: true,
  },

  {
    id: 'rb-servicos',

    company: 'RB Serviços',

    role: 'Senior PHP Developer / Backend Developer',

    period: {
      start: '2021-03',
      end: '2022-07',
    },

    context:
      'Contrato paralelo à atividade principal, voltado à manutenção e evolução de sistema financeiro.',

    contractType: 'parallel-project',

    highlights: [
      {
        text: 'Manutenção e evolução de sistema financeiro legado.',
        groups: ['php', 'backend'],
      },

      {
        text: 'Desenvolvimento de APIs para integração com aplicações externas.',
        groups: ['php', 'backend', 'architecture'],
        keywords: ['REST API', 'integration'],
      },

      {
        text: 'Proposição de melhorias arquiteturais e de organização do processo de desenvolvimento.',
        groups: ['architecture', 'leadership'],
      },

      {
        text: 'Implementação de regras de negócio específicas para fornecedores e clientes.',
        groups: ['php', 'backend'],
      },
    ],

    technologies: [
      'PHP',
      'Laravel',
      'Node.js',
      'ExtJS',
      'MySQL',
    ],

    areas: ['backend', 'architecture', 'database'],

    featured: false,
  },

  {
    id: 'primeit',

    company: 'PrimeIT',

    role: 'JavaScript Developer / Analista de Sistemas',

    period: {
      start: '2022-03',
      end: '2022-05',
    },

    context:
      'Projeto pontual relacionado a acessibilidade digital para sites do Ministério da Saúde de Portugal.',

    contractType: 'parallel-project',

    highlights: [
      {
        text: 'Desenvolvimento de módulos JavaScript reutilizáveis voltados à acessibilidade digital.',
        groups: ['frontend', 'typescript'],
      },

      {
        text: 'Trabalho com manipulação de DOM, compatibilidade entre navegadores e integração com WordPress.',
        groups: ['frontend'],
      },

      {
        text: 'Contribuição para a camada base do EasyApp, responsável pelo carregamento dos recursos de acessibilidade.',
        groups: ['frontend', 'architecture'],
      },
    ],

    technologies: [
      'JavaScript',
      'Vanilla JS',
      'WordPress',
      'HTML',
      'CSS',
    ],

    areas: ['frontend'],

    featured: false,
  },

  {
    id: 'prefeitura-sobral',

    company: 'Prefeitura de Sobral',

    role: 'Analista de Sistemas',

    period: {
      start: '2018-06',
      end: '2019-02',
    },

    highlights: [
      {
        text: 'Atuação em sistemas de gestão pública nas áreas corporativa, financeira, educação e saúde.',
        groups: ['general', 'backend'],
      },

      {
        text: 'Participação em decisões técnicas e levantamento de requisitos junto aos usuários.',
        groups: ['architecture', 'leadership'],
      },

      {
        text: 'Liderança no desenvolvimento de funcionalidades para sistemas de licitações e gestão de contratos.',
        groups: ['leadership', 'backend'],
      },
    ],

    technologies: [
      'PHP',
      'Laravel',
      'Java',
      'PrimeFaces',
      'PostgreSQL',
    ],

    areas: ['backend', 'fullstack', 'leadership', 'database'],

    featured: false,
  },

  {
    id: 'grupo-rabelo',

    company: 'Grupo Rabelo',

    role: 'Analista de E-commerce',

    period: {
      start: '2012',
      end: '2013',
    },

    highlights: [
      {
        text: 'Manutenção e evolução de soluções de e-commerce.',
        groups: ['php', 'backend', 'general'],
      },

      {
        text: 'Modelagem e otimização de bancos de dados para sites e sistemas internos.',
        groups: ['backend'],
      },

      {
        text: 'Apoio técnico a novos desenvolvedores na adaptação à base de código.',
        groups: ['leadership'],
      },
    ],

    technologies: [
      'PHP',
      'Slim',
      'Magento',
      'PostgreSQL',
      'MySQL',
    ],

    areas: ['backend', 'fullstack', 'database'],

    featured: false,
  },

  {
    id: 'verdes-mares',

    company: 'Sistema Verdes Mares de Comunicação',

    role: 'Analista de Sistemas',

    period: {
      start: '2010',
      end: '2012',
    },

    highlights: [
      {
        text: 'Desenvolvimento, manutenção e testes de aplicações web utilizadas em processos internos.',
        groups: ['php', 'backend', 'general'],
      },

      {
        text: 'Análise e desenvolvimento de sistemas voltados ao suporte de processos de negócio.',
        groups: ['backend', 'architecture'],
      },

      {
        text: 'Resolução de problemas complexos e orientação técnica sobre novas implementações.',
        groups: ['backend', 'leadership'],
      },
    ],

    technologies: [
      'PHP',
      'Doctrine',
      'CodeIgniter',
      'MySQL',
      'JavaScript',
    ],

    areas: ['backend', 'fullstack'],

    featured: false,
  },

  {
    id: 'noix-internet',

    company: 'NOIX Internet',

    role: 'Gerente de Desenvolvimento',

    period: {
      start: '2008',
      end: '2010',
    },

    highlights: [
      {
        text: 'Colaboração com áreas comerciais na definição de escopo e objetivos de produtos digitais.',
        groups: ['management', 'leadership'],
      },

      {
        text: 'Planejamento de entregas, recursos e cronogramas de projetos.',
        groups: ['management'],
      },

      {
        text: 'Coordenação da equipe de desenvolvimento e adoção de práticas Scrum.',
        groups: ['leadership', 'management'],
      },

      {
        text: 'Atuação em projetos web utilizando PHP, CMSs e plataformas de e-commerce.',
        groups: ['php', 'backend'],
      },
    ],

    technologies: [
      'PHP',
      'Magento',
      'Joomla',
      'JavaScript',
      'PostgreSQL',
    ],

    areas: ['management', 'leadership', 'fullstack'],

    featured: false,
  },

  {
    id: 'tce-ceara',

    company: 'Tribunal de Contas do Ceará',

    role: 'PHP Developer',

    period: {
      start: '2005',
      end: '2009',
    },

    highlights: [
      {
        text: 'Desenvolvimento, testes e manutenção de aplicações web com PHP e JavaScript.',
        groups: ['php', 'backend', 'general'],
      },

      {
        text: 'Desenvolvimento de interfaces dinâmicas, formulários, integrações e persistência de dados.',
        groups: ['php', 'fullstack'],
      },

      {
        text: 'Manutenção e evolução de sistemas internos.',
        groups: ['php', 'backend'],
      },
    ],

    technologies: [
      'PHP',
      'Symfony',
      'PostgreSQL',
      'WordPress',
      'JavaScript',
      'jQuery',
    ],

    areas: ['backend', 'fullstack'],

    featured: false,
  },

  {
    id: 'prefeitura-fortaleza-2002',

    company: 'Prefeitura Municipal de Fortaleza',

    role: 'Fullstack PHP Developer',

    period: {
      start: '2002',
      end: '2005',
    },

    highlights: [
      {
        text: 'Desenvolvimento de aplicações web e sistemas internos.',
        groups: ['php', 'backend', 'fullstack'],
      },

      {
        text: 'Criação de serviços web e integrações entre sistemas.',
        groups: ['php', 'backend', 'architecture'],
      },

      {
        text: 'Implantação de aplicações e suporte à operação.',
        groups: ['backend', 'devops'],
      },

      {
        text: 'Otimização de consultas e refatoração de código para melhoria de escalabilidade.',
        groups: ['php', 'backend', 'architecture'],
      },
    ],

    technologies: [
      'PHP',
      'JavaScript',
      'HTML',
      'CSS',
      'PostgreSQL',
      'Oracle',
      'Zend Framework',
      'Java',
      'ASP',
    ],

    areas: ['backend', 'fullstack', 'database'],

    featured: false,
  },
];