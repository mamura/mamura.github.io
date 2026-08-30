import type { Experience } from './types';

export const experiences: Experience[] = [
  {
    id: 'softtek',

    company: 'Softtek',

    role: 'Senior PHP Developer',

    period: {
      start: '2025-09',
      end: '2026-08'
    },

    featured: true,

    engagements: [
      {
        client: 'Dr. Consulta',

        context:
          'Atuação em sustentação e evolução de sistemas corporativos críticos no modelo Application Management Services (AMS).',

        areas: [
          'backend',
          'frontend',
          'fullstack',
          'architecture',
        ],

        technologies: [
          'PHP',
          'Laravel',
          'Next.js',
          'React',
          'TypeScript',
          'SQL',
          'Oracle',
          'MySQL',
        ],

        highlights: [
          {
            text:
              'Atuação em sustentação N2/N3 de sistemas críticos, realizando análise, correção e acompanhamento de incidentes em produção.',
            groups: [
              'general',
              'backend',
            ],
            keywords: [
              'AMS',
              'N2',
              'N3',
              'sustentação',
            ],
          },

          {
            text:
              'Manutenção e evolução de aplicações legadas em PHP, incluindo correções, melhorias e implementação de novas funcionalidades.',
            groups: [
              'general',
              'php',
              'backend',
            ],
            keywords: [
              'PHP',
              'legacy systems',
              'maintenance',
            ],
          },

          {
            text:
              'Participação em projetos estratégicos como Floresta (concebido por mim e liderei o desenvolvimento do produto), S2, Sensrit e Digital Signature.',
            groups: [
              'general',
              'backend',
              'architecture',
            ],
          },

          {
            text:
              'Desenvolvimento de interfaces administrativas utilizando Next.js, React e TypeScript.',
            groups: [
              'typescript',
              'frontend',
              'general',
            ],
            keywords: [
              'React',
              'Next.js',
              'TypeScript',
            ],
          },

          {
            text:
              'Integração entre frontend e APIs REST utilizadas pelos sistemas internos.',
            groups: [
              'typescript',
              'frontend',
              'backend',
            ],
            keywords: [
              'REST API',
              'React',
              'integration',
            ],
          },

          {
            text:
              'Investigação de incidentes de produção relacionados a estabilidade, performance e inconsistências de dados.',
            groups: [
              'general',
              'backend',
              'architecture',
            ],
            keywords: [
              'production',
              'debugging',
              'performance',
            ],
          },

          {
            text:
              'Análise e manutenção de consultas SQL em bancos Oracle e MySQL.',
            groups: [
              'php',
              'backend',
            ],
            keywords: [
              'SQL',
              'Oracle',
              'MySQL',
            ],
          },

          {
            text:
              'Atuação com autonomia na resolução de demandas críticas e suporte técnico às equipes envolvidas.',
            groups: [
              'general',
              'leadership',
            ],
          },
        ]
      },

      {
        client: 'UNIASSELVI',
        project: 'BDQ / Banco de Questões',

        context:
          'Sistema acadêmico para criação, edição, aprovação e gestão de questões, conteúdos e fórmulas matemáticas.',

        areas: [
          'backend',
          'frontend',
          'fullstack',
        ],

        technologies: [
          'PHP',
          'Symfony',
          'Doctrine',
          'Twig',
          'JavaScript',
          'Redis',
          'Oracle',
          'AWS S3',
        ],

        highlights: [
          {
            text:
              'Manutenção e evolução de sistema acadêmico em PHP e Symfony para gestão, aprovação e publicação de questões.',
            groups: [
              'general',
              'php',
              'backend',
            ],
            keywords: [
              'PHP',
              'Symfony',
              'workflow',
              'legacy systems',
            ],
          },

          {
            text:
              'Implementação de funcionalidades frontend com Twig e JavaScript para edição de conteúdo acadêmico e fórmulas matemáticas.',
            groups: [
              'frontend',
              'fullstack',
            ],
            keywords: [
              'Twig',
              'JavaScript',
              'KaTeX',
            ],
          },

          {
            text:
              'Integração de upload e gerenciamento de arquivos e imagens utilizando serviços internos e AWS S3.',
            groups: [
              'backend',
              'architecture',
            ],
            keywords: [
              'AWS S3',
              'file upload',
              'integration',
            ],
          },
        ],
      },

      {
        client: 'Unicesumar / Vitru Educação',
        project: 'Mundo Azul',

        context:
          'Ecossistema de APIs e aplicações administrativas para módulos acadêmicos, controle de acesso e integrações corporativas.',

        areas: [
          'backend',
          'frontend',
          'fullstack',
          'architecture',
        ],

        technologies: [
          'Java',
          'Spring Boot',
          'Spring Security',
          'Spring Data JPA',
          'Redis',
          'SQL Server',
          'Angular',
          'TypeScript',
          'Docker',
          'Kubernetes',
        ],

        highlights: [
          {
            text:
              'Desenvolvimento e evolução de APIs Java com Spring Boot para módulos acadêmicos, integrações corporativas e controle de acesso.',
            groups: [
              'general',
              'backend',
              'java',
            ],
            keywords: [
              'Java',
              'Spring Boot',
              'REST API',
              'microservices',
            ],
          },

          {
            text:
              'Implementação de autenticação e segurança utilizando Spring Security, JWT e integração com LDAP/Active Directory.',
            groups: [
              'backend',
              'architecture',
              'java',
            ],
            keywords: [
              'Spring Security',
              'JWT',
              'LDAP',
              'Active Directory',
            ],
          },

          {
            text:
              'Desenvolvimento de interfaces administrativas em Angular e TypeScript integradas às APIs do ecossistema.',
            groups: [
              'frontend',
              'typescript',
              'fullstack',
            ],
            keywords: [
              'Angular',
              'TypeScript',
              'REST API',
            ],
          },

          {
            text:
              'Atuação em ambiente com Docker, Jenkins e Kubernetes para build e deploy das aplicações.',
            groups: [
              'architecture',
              'devops',
            ],
            keywords: [
              'Docker',
              'Jenkins',
              'Kubernetes',
              'CI/CD',
            ],
          },
        ],
      },

      {
        client: 'Vitru Educação / UNIASSELVI',
        project: 'Gioconda EAD',

        context:
          'Plataforma EAD legada com módulos acadêmicos, autenticação, AVA e integrações educacionais.',

        areas: [
          'backend',
          'frontend',
          'fullstack',
        ],

        technologies: [
          'PHP',
          'JavaScript',
          'Oracle',
          'Redis',
          'HTML',
          'CSS',
        ],

        highlights: [
          {
            text:
              'Manutenção e evolução de plataforma EAD legada em PHP, com módulos acadêmicos, autenticação e área do aluno e professor.',
            groups: [
              'general',
              'php',
              'backend',
            ],
            keywords: [
              'PHP',
              'legacy systems',
              'EAD',
              'authentication',
            ],
          },

          {
            text:
              'Atuação em integrações educacionais e serviços corporativos utilizando Oracle, Redis e APIs internas.',
            groups: [
              'backend',
              'architecture',
            ],
            keywords: [
              'Oracle',
              'Redis',
              'system integration',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'zerodox',

    company: 'Zerodox',

    role: 'Senior PHP Developer',

    period: {
      start: '2025-05',
      end: '2025-10',
    },

    featured: true,

    engagements: [
      {
        context:
          'Atuação na manutenção e evolução de sistema de gestão de documentos, incluindo backend PHP/Laravel, frontend Vue.js, integrações e processamento de arquivos.',

        areas: [
          'backend',
          'frontend',
          'fullstack',
          'database',
          'architecture',
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

        highlights: [
          {
            text:
              'Manutenção e evolução de sistema legado em PHP, garantindo estabilidade e continuidade operacional.',
            groups: [
              'general',
              'php',
              'backend',
            ],
          },

          {
            text:
              'Implementação de funcionalidades e melhorias evolutivas em sistema de gestão de documentos.',
            groups: [
              'general',
              'php',
              'backend',
            ],
          },

          {
            text:
              'Refatoração de componentes Vue 2 com foco em performance, organização e manutenibilidade.',
            groups: [
              'frontend',
              'typescript',
            ],
            keywords: [
              'Vue.js',
              'refactoring',
            ],
          },

          {
            text:
              'Integração com serviços externos, incluindo AWS S3, OCR e APIs internas.',
            groups: [
              'backend',
              'php',
              'architecture',
            ],
            keywords: [
              'AWS S3',
              'OCR',
              'API integration',
            ],
          },

          {
            text:
              'Otimização de consultas SQL e fluxos de processamento de arquivos e documentos.',
            groups: [
              'backend',
              'php',
            ],
          },

          {
            text:
              'Ampliação da cobertura de testes automatizados em sistema legado.',
            groups: [
              'php',
              'backend',
            ],
            keywords: [
              'automated tests',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'iebt-innovation',

    company: 'IEBT Innovation',

    role: 'Engenheiro de Software',

    period: {
      start: '2025-02',
      end: '2025-05',
    },

    featured: true,

    engagements: [
      {
        client: 'PicPay',

        project: 'Plataforma de Empréstimo Consignado',

        context:
          'Atuação no desenvolvimento de plataforma de empréstimo consignado em ambiente corporativo.',

        areas: [
          'backend',
          'frontend',
          'fullstack',
          'architecture',
        ],

        technologies: [
          'PHP',
          'Laravel',
          'React',
          'TypeScript',
          'MySQL',
          'Docker',
          'GitHub',
        ],

        highlights: [
          {
            text:
              'Desenvolvimento de APIs REST utilizando Laravel, aplicando validação, organização arquitetural e separação de responsabilidades.',
            groups: [
              'php',
              'backend',
              'architecture',
            ],
            keywords: [
              'PHP',
              'Laravel',
              'REST API',
            ],
          },

          {
            text:
              'Desenvolvimento de aplicação React e TypeScript estruturada como SPA separada da API backend.',
            groups: [
              'frontend',
              'typescript',
              'fullstack',
            ],
            keywords: [
              'React',
              'TypeScript',
              'SPA',
            ],
          },

          {
            text:
              'Implementação de integrações entre frontend React/TypeScript e backend Laravel, incluindo consumo de endpoints, estados de aplicação e regras de negócio.',
            groups: [
              'typescript',
              'fullstack',
              'backend',
              'frontend',
            ],
            keywords: [
              'React',
              'TypeScript',
              'Laravel',
              'REST API',
              'system integration',
            ],
          },

          {
            text:
              'Responsabilidade pelo módulo de comissionamento, incluindo regras de negócio, persistência, validações e endpoints de integração.',
            groups: [
              'php',
              'backend',
              'architecture',
            ],
            keywords: [
              'business rules',
              'Laravel',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'stefanini',

    company: 'Stefanini',

    role: 'Líder Técnico / Senior Full Stack Developer',

    period: {
      start: '2022-09',
      end: '2024-11',
    },

    featured: true,

    engagements: [
      {
        client: 'Fundação Hemominas',

        project: 'Sistemas Corporativos Hemominas',

        context:
          'Atuação como Líder Técnico na definição e evolução da arquitetura e infraestrutura de sistemas corporativos da Fundação Hemominas.',

        areas: [
          'backend',
          'frontend',
          'fullstack',
          'architecture',
          'leadership',
          'database',
        ],

        technologies: [
          'PHP',
          'React',
          'Oracle',
          'Docker',
          'Git',
        ],

        highlights: [
          {
            text:
              'Atuação como Líder Técnico, conduzindo decisões técnicas e arquiteturais dos sistemas desenvolvidos para a Fundação Hemominas.',
            groups: [
              'general',
              'leadership',
              'architecture',
            ],
            keywords: [
              'technical leadership',
              'software architecture',
              'technical decision making',
            ],
          },

          {
            text:
              'Definição da arquitetura das aplicações, incluindo organização dos sistemas backend em PHP, frontend em React e integração com banco de dados Oracle.',
            groups: [
              'leadership',
              'architecture',
              'php',
              'typescript',
              'fullstack',
            ],
            keywords: [
              'PHP',
              'React',
              'Oracle',
              'software architecture',
            ],
          },

          {
            text:
              'Definição da infraestrutura de execução das aplicações utilizando servidores baseados em Docker.',
            groups: [
              'leadership',
              'architecture',
              'devops',
            ],
            keywords: [
              'Docker',
              'infrastructure',
              'containerization',
            ],
          },

          {
            text:
              'Orientação técnica da equipe, revisão de soluções e apoio na resolução de problemas de desenvolvimento e integração.',
            groups: [
              'leadership',
              'architecture',
            ],
            keywords: [
              'technical mentoring',
              'code review',
              'problem solving',
            ],
          },

          {
            text:
              'Desenvolvimento e evolução de funcionalidades em aplicações PHP e React integradas a banco de dados Oracle.',
            groups: [
              'php',
              'typescript',
              'backend',
              'frontend',
              'fullstack',
            ],
            keywords: [
              'PHP',
              'React',
              'Oracle',
            ],
          },
        ],
      },

      {
        client: 'Junta Comercial do Estado de Minas Gerais',

        project: 'Modernização de Sistema Legado',

        context:
          'Projeto de modernização de sistema legado para uma nova plataforma baseada em Java, Spring Boot e Angular.',

        areas: [
          'backend',
          'frontend',
          'fullstack',
          'architecture',
        ],

        technologies: [
          'Java',
          'Spring Boot',
          'Angular',
          'TypeScript',
          'Git',
        ],

        highlights: [
          {
            text:
              'Participação na modernização de sistema legado para uma nova arquitetura baseada em Java e Spring Boot.',
            groups: [
              'general',
              'java',
              'backend',
              'architecture',
            ],
            keywords: [
              'Java',
              'Spring Boot',
              'legacy modernization',
            ],
          },

          {
            text:
              'Desenvolvimento e evolução de serviços backend utilizando Java e Spring Boot para implementação das regras de negócio da nova plataforma.',
            groups: [
              'java',
              'backend',
            ],
            keywords: [
              'Java',
              'Spring Boot',
              'backend development',
            ],
          },

          {
            text:
              'Atuação no desenvolvimento do frontend utilizando Angular e TypeScript integrado aos serviços backend.',
            groups: [
              'typescript',
              'frontend',
              'fullstack',
            ],
            keywords: [
              'Angular',
              'TypeScript',
            ],
          },

          {
            text:
              'Participação na migração funcional do sistema legado para uma arquitetura moderna baseada em aplicações frontend e serviços backend.',
            groups: [
              'architecture',
              'java',
              'typescript',
              'fullstack',
            ],
            keywords: [
              'system modernization',
              'software architecture',
              'legacy systems',
            ],
          },
        ],
      },

      {
        client: 'Secretaria de Desenvolvimento Social de Minas Gerais',

        project: 'Sistema de Gestão de Cursos e Ações de Desenvolvimento Social',

        context:
          'Sistema para cadastro, acompanhamento e monitoramento de cursos e ações de desenvolvimento social promovidos pelo Estado de Minas Gerais.',

        areas: [
          'backend',
          'frontend',
          'fullstack',
          'architecture',
          'database',
        ],

        technologies: [
          'PHP',
          'Laravel',
          'Vue.js',
          'Quasar',
          'TypeScript',
          'Git',
        ],

        highlights: [
          {
            text:
              'Desenvolvimento do backend do sistema utilizando PHP e Laravel para cadastro, acompanhamento e monitoramento de cursos e ações de desenvolvimento social.',
            groups: [
              'general',
              'php',
              'backend',
            ],
            keywords: [
              'PHP',
              'Laravel',
              'backend development',
            ],
          },

          {
            text:
              'Desenvolvimento do frontend utilizando Vue.js, Quasar e TypeScript para construção das interfaces de gestão e acompanhamento das informações.',
            groups: [
              'frontend',
              'typescript',
              'fullstack',
            ],
            keywords: [
              'Vue.js',
              'Quasar',
              'TypeScript',
            ],
          },

          {
            text:
              'Implementação da integração entre frontend Vue.js/TypeScript e backend Laravel, incluindo consumo de APIs e tratamento das regras de negócio da aplicação.',
            groups: [
              'php',
              'typescript',
              'frontend',
              'backend',
              'fullstack',
            ],
            keywords: [
              'PHP',
              'Laravel',
              'Vue.js',
              'TypeScript',
              'REST API',
              'system integration',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'leoa',

    company: 'Leoa',

    role: 'Senior PHP Developer',

    period: {
      start: '2020-10',
      end: '2022-11',
    },

    featured: true,

    engagements: [
      {
        context:
          'Atuação no desenvolvimento e evolução de sistemas relacionados à declaração de imposto de renda, regras fiscais e produtos internos da empresa.',

        areas: [
          'backend',
          'fullstack',
          'database',
          'architecture',
        ],

        technologies: [
          'PHP',
          'Yii',
          'MySQL',
          'Docker',
          'JavaScript',
        ],

        highlights: [
          {
            text:
              'Evolução de sistemas relacionados à declaração de imposto de renda, acompanhando mudanças anuais nas regras da Receita Federal.',
            groups: [
              'general',
              'php',
              'backend',
            ],
            keywords: [
              'PHP',
              'business rules',
            ],
          },

          {
            text:
              'Implementação de regras fiscais complexas e melhorias em sistemas internos.',
            groups: [
              'php',
              'backend',
            ],
            keywords: [
              'PHP',
              'business rules',
            ],
          },

          {
            text:
              'Participação na remodelagem do sistema interno de operações.',
            groups: [
              'php',
              'backend',
              'architecture',
            ],
            keywords: [
              'PHP',
              'software architecture',
              'system modernization',
            ],
          },

          {
            text:
              'Desenvolvimento de funcionalidades para produto voltado ao ecossistema de afiliados.',
            groups: [
              'php',
              'backend',
            ],
            keywords: [
              'PHP',
              'backend development',
            ],
          },

          {
            text:
              'Manutenção e evolução de código legado e processos internos.',
            groups: [
              'php',
              'backend',
            ],
            keywords: [
              'PHP',
              'legacy systems',
              'refactoring',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'rb-servicos',

    company: 'RB Serviços',

    role: 'Senior PHP Developer / Backend Developer',

    period: {
      start: '2021-03',
      end: '2022-07',
    },

    featured: false,

    engagements: [
      {
        context:
          'Contrato paralelo voltado à manutenção e evolução de sistema financeiro e ao desenvolvimento de integrações com aplicações externas.',

        areas: [
          'backend',
          'frontend',
          'fullstack',
          'architecture',
          'database',
        ],

        technologies: [
          'PHP',
          'Laravel',
          'Node.js',
          'Sencha Ext JS',
          'MySQL',
        ],

        highlights: [
          {
            text:
              'Manutenção e evolução de sistema financeiro legado utilizando PHP e Laravel.',
            groups: [
              'general',
              'php',
              'backend',
            ],
            keywords: [
              'PHP',
              'Laravel',
              'legacy systems',
            ],
          },

          {
            text:
              'Desenvolvimento de APIs para integração do sistema com aplicações e serviços externos.',
            groups: [
              'php',
              'backend',
              'architecture',
            ],
            keywords: [
              'PHP',
              'Laravel',
              'REST API',
              'system integration',
            ],
          },

          {
            text:
              'Desenvolvimento e manutenção de interfaces do sistema utilizando Sencha Ext JS.',
            groups: [
              'frontend',
              'fullstack',
            ],
            keywords: [
              'Sencha',
              'Ext JS',
              'Sencha Ext JS',
            ],
          },

          {
            text:
              'Implementação de regras de negócio específicas para operações envolvendo fornecedores e clientes.',
            groups: [
              'php',
              'backend',
            ],
            keywords: [
              'PHP',
              'business rules',
            ],
          },

          {
            text:
              'Proposição de melhorias arquiteturais e na organização do processo de desenvolvimento.',
            groups: [
              'architecture',
              'leadership',
            ],
            keywords: [
              'software architecture',
              'development process',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'primeit',

    company: 'PrimeIT',

    role: 'JavaScript Developer / Analista de Sistemas',

    period: {
      start: '2022-03',
      end: '2022-05',
    },

    featured: false,

    engagements: [
      {
        client: 'Ministério da Saúde de Portugal',

        project: 'EasyApp — Acessibilidade Digital',

        context:
          'Projeto internacional voltado ao desenvolvimento de recursos de acessibilidade digital para sites do Ministério da Saúde de Portugal.',

        areas: [
          'frontend',
          'architecture',
        ],

        technologies: [
          'JavaScript',
          'Vanilla JS',
          'WordPress',
          'HTML',
          'CSS',
        ],

        highlights: [
          {
            text:
              'Desenvolvimento de módulos JavaScript reutilizáveis voltados à implementação de recursos de acessibilidade digital.',
            groups: [
              'general',
              'frontend',
            ],
            keywords: [
              'JavaScript',
              'accessibility',
              'reusable modules',
            ],
          },

          {
            text:
              'Desenvolvimento de funcionalidades envolvendo manipulação de DOM, compatibilidade entre navegadores e integração com WordPress.',
            groups: [
              'frontend',
            ],
            keywords: [
              'JavaScript',
              'DOM',
              'cross-browser compatibility',
              'WordPress',
            ],
          },

          {
            text:
              'Contribuição para a camada base do EasyApp, responsável pelo carregamento e disponibilização dos recursos de acessibilidade.',
            groups: [
              'frontend',
              'architecture',
            ],
            keywords: [
              'JavaScript',
              'software architecture',
              'accessibility',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'prefeitura-sobral',

    company: 'Prefeitura de Sobral',

    role: 'Analista de Sistemas',

    period: {
      start: '2018-06',
      end: '2019-02',
    },

    featured: false,

    engagements: [
      {
        project: 'Sistema de Gestão de Contratos e Convênios',

        context:
          'Desenvolvimento de sistema corporativo para gestão de contratos e convênios da administração pública municipal.',

        areas: [
          'backend',
          'fullstack',
          'database',
        ],

        technologies: [
          'Java',
          'PrimeFaces',
          'PostgreSQL',
        ],

        highlights: [
          {
            text:
              'Desenvolvimento de sistema de gestão de contratos e convênios utilizando Java e PrimeFaces.',
            groups: [
              'general',
              'java',
              'backend',
            ],
            keywords: [
              'Java',
              'PrimeFaces',
              'contract management',
            ],
          },

          {
            text:
              'Implementação de regras de negócio e funcionalidades voltadas ao controle e acompanhamento de contratos e convênios da administração pública.',
            groups: [
              'java',
              'backend',
            ],
            keywords: [
              'Java',
              'business rules',
              'public administration',
            ],
          },

          {
            text:
              'Atuação no levantamento de requisitos e definição de funcionalidades junto aos usuários das áreas responsáveis.',
            groups: [
              'architecture',
              'leadership',
            ],
            keywords: [
              'requirements analysis',
              'requirements gathering',
            ],
          },
        ],
      },

      {
        project: 'Sistemas de Controles Internos',

        context:
          'Desenvolvimento e manutenção de sistemas internos utilizados por áreas administrativas da Prefeitura de Sobral.',

        areas: [
          'backend',
          'fullstack',
          'database',
        ],

        technologies: [
          'PHP',
          'Laravel',
          'PostgreSQL',
        ],

        highlights: [
          {
            text:
              'Desenvolvimento e manutenção de sistemas internos utilizando PHP e Laravel para apoio a processos administrativos.',
            groups: [
              'general',
              'php',
              'backend',
            ],
            keywords: [
              'PHP',
              'Laravel',
              'internal systems',
            ],
          },

          {
            text:
              'Implementação de regras de negócio e funcionalidades para controle de processos internos da administração municipal.',
            groups: [
              'php',
              'backend',
            ],
            keywords: [
              'PHP',
              'business rules',
              'public administration',
            ],
          },

          {
            text:
              'Participação no levantamento de requisitos e na definição de soluções técnicas para atendimento às necessidades dos usuários.',
            groups: [
              'architecture',
              'leadership',
            ],
            keywords: [
              'requirements analysis',
              'technical solution',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'prefeitura-fortaleza',

    company: 'Prefeitura Municipal de Fortaleza',

    role: 'Analista de Sistemas',

    period: {
      start: '2013',
      end: '2018',
    },

    featured: false,

    engagements: [
      {
        project: 'SGF — Sistema de Gestão de Frotas',

        context:
          'Desenvolvimento de sistema corporativo para gestão da frota de veículos da Prefeitura Municipal de Fortaleza.',

        areas: [
          'backend',
          'fullstack',
          'database',
          'architecture',
        ],

        technologies: [
          'Java',
        ],

        highlights: [
          {
            text:
              'Desenvolvimento do Sistema de Gestão de Frotas (SGF), utilizado na gestão corporativa da frota de veículos da Prefeitura de Fortaleza.',
            groups: [
              'general',
              'java',
              'backend',
            ],
            keywords: [
              'Java',
              'fleet management',
              'corporate systems',
            ],
          },

          {
            text:
              'Implementação de regras de negócio e funcionalidades para controle e gestão das operações relacionadas à frota municipal.',
            groups: [
              'java',
              'backend',
            ],
            keywords: [
              'Java',
              'business rules',
              'fleet management',
            ],
          },
        ],
      },

      {
        project: 'Portal da Prefeitura de Fortaleza',

        context:
          'Reformulação do portal institucional da Prefeitura de Fortaleza como plataforma corporativa de comunicação e publicação de informações.',

        areas: [
          'backend',
          'frontend',
          'fullstack',
          'architecture',
        ],

        technologies: [
          'PHP',
          'Joomla',
        ],

        highlights: [
          {
            text:
              'Reformulação do Portal da Prefeitura de Fortaleza utilizando Joomla e PHP, transformando-o em uma ferramenta corporativa de comunicação institucional.',
            groups: [
              'general',
              'php',
              'backend',
              'frontend',
              'fullstack',
              'architecture',
            ],
            keywords: [
              'PHP',
              'Joomla',
              'corporate portal',
              'institutional communication',
            ],
          },

          {
            text:
              'Desenvolvimento e evolução de funcionalidades para publicação e gestão de conteúdo institucional no portal.',
            groups: [
              'php',
              'backend',
              'frontend',
              'fullstack',
            ],
            keywords: [
              'PHP',
              'Joomla',
              'content management',
              'corporate portal',
            ],
          },
        ],
      },

      {
        project: 'Sistemas Corporativos Internos',

        context:
          'Desenvolvimento e manutenção de sistemas internos para suporte aos processos de gestão corporativa da Prefeitura de Fortaleza.',

        areas: [
          'backend',
          'fullstack',
          'database',
          'architecture',
        ],

        technologies: [
          'PHP',
          'Java',
        ],

        highlights: [
          {
            text:
              'Desenvolvimento e manutenção de sistemas internos voltados à gestão e automação de processos corporativos da administração municipal.',
            groups: [
              'general',
              'php',
              'java',
              'backend',
              'fullstack',
            ],
            keywords: [
              'PHP',
              'Java',
              'corporate systems',
              'internal systems',
              'business process automation',
            ],
          },

          {
            text:
              'Análise de necessidades das áreas internas e implementação de soluções para suporte aos processos administrativos.',
            groups: [
              'backend',
              'architecture',
            ],
            keywords: [
              'requirements analysis',
              'business processes',
              'system analysis',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'grupo-rabelo',

    company: 'Grupo Rabelo',

    role: 'Analista de E-commerce',

    period: {
      start: '2012',
      end: '2013',
    },

    featured: false,

    engagements: [
      {
        project: 'Plataforma de E-commerce',

        context:
          'Atuação no desenvolvimento, manutenção e gestão da plataforma de e-commerce do Grupo Rabelo.',

        areas: [
          'backend',
          'frontend',
          'fullstack',
          'database',
        ],

        technologies: [
          'PHP',
          'Magento',
          'MySQL',
          'PostgreSQL',
        ],

        highlights: [
          {
            text:
              'Desenvolvimento e manutenção da plataforma de e-commerce utilizando Magento e PHP.',
            groups: [
              'general',
              'php',
              'backend',
              'fullstack',
            ],
            keywords: [
              'PHP',
              'Magento',
              'e-commerce',
            ],
          },

          {
            text:
              'Implementação de funcionalidades e melhorias na plataforma para suporte às operações de venda online.',
            groups: [
              'php',
              'backend',
              'fullstack',
            ],
            keywords: [
              'Magento',
              'PHP',
              'e-commerce platform',
            ],
          },

          {
            text:
              'Gerenciamento técnico da plataforma de e-commerce, incluindo acompanhamento de funcionamento, correções e evolução da aplicação.',
            groups: [
              'php',
              'backend',
              'architecture',
            ],
            keywords: [
              'Magento',
              'platform management',
              'maintenance',
            ],
          },

          {
            text:
              'Atuação com bancos de dados relacionais no suporte à plataforma e aos sistemas internos.',
            groups: [
              'backend',
            ],
            keywords: [
              'MySQL',
              'PostgreSQL',
              'SQL',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'verdes-mares',

    company: 'Sistema Verdes Mares de Comunicação',

    role: 'Analista de Sistemas',

    period: {
      start: '2010',
      end: '2012',
    },

    featured: false,

    engagements: [
      {
        project: 'Sistemas Corporativos Internos',

        context:
          'Atuação na análise, desenvolvimento, manutenção e evolução de aplicações web utilizadas nos processos internos do Sistema Verdes Mares de Comunicação.',

        areas: [
          'backend',
          'frontend',
          'fullstack',
          'architecture',
        ],

        technologies: [
          'PHP',
          'Doctrine',
          'CodeIgniter',
          'MySQL',
          'JavaScript',
        ],

        highlights: [
          {
            text:
              'Desenvolvimento, manutenção e testes de aplicações web em PHP utilizadas em processos internos da empresa.',
            groups: [
              'general',
              'php',
              'backend',
            ],
            keywords: [
              'PHP',
              'web applications',
              'software maintenance',
            ],
          },

          {
            text:
              'Desenvolvimento de sistemas utilizando PHP, CodeIgniter e Doctrine, com persistência de dados em MySQL.',
            groups: [
              'php',
              'backend',
            ],
            keywords: [
              'PHP',
              'CodeIgniter',
              'Doctrine',
              'MySQL',
            ],
          },

          {
            text:
              'Análise de requisitos e desenvolvimento de soluções para suporte aos processos de negócio e operações internas.',
            groups: [
              'backend',
              'architecture',
            ],
            keywords: [
              'requirements analysis',
              'business processes',
              'system analysis',
            ],
          },

          {
            text:
              'Resolução de problemas técnicos e orientação sobre a implementação de novas funcionalidades nos sistemas.',
            groups: [
              'php',
              'backend',
              'leadership',
            ],
            keywords: [
              'problem solving',
              'technical guidance',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'noix-internet',

    company: 'NOIX Internet',

    role: 'Gerente de Desenvolvimento',

    period: {
      start: '2008',
      end: '2010',
    },

    featured: false,

    engagements: [
      {
        project: 'Gestão de Desenvolvimento e Projetos Web',

        context:
          'Atuação na gestão da equipe de desenvolvimento e na condução de projetos web e produtos digitais para diferentes clientes.',

        areas: [
          'management',
          'leadership',
          'backend',
          'fullstack',
        ],

        technologies: [
          'PHP',
          'Magento',
          'Joomla',
          'JavaScript',
          'PostgreSQL',
        ],

        highlights: [
          {
            text:
              'Coordenação da equipe de desenvolvimento, acompanhando atividades técnicas, prioridades e entregas dos projetos.',
            groups: [
              'general',
              'leadership',
              'management',
            ],
            keywords: [
              'team leadership',
              'technical leadership',
              'delivery management',
            ],
          },

          {
            text:
              'Colaboração com as áreas comerciais na definição de escopo, requisitos e objetivos de produtos e projetos digitais.',
            groups: [
              'leadership',
              'management',
            ],
            keywords: [
              'requirements analysis',
              'project scope',
              'stakeholder collaboration',
            ],
          },

          {
            text:
              'Planejamento de projetos, incluindo definição de entregas, alocação de recursos e acompanhamento de cronogramas.',
            groups: [
              'management',
              'leadership',
            ],
            keywords: [
              'project planning',
              'resource allocation',
              'delivery planning',
            ],
          },

          {
            text:
              'Coordenação da adoção de práticas Scrum no processo de desenvolvimento da equipe.',
            groups: [
              'management',
              'leadership',
            ],
            keywords: [
              'Scrum',
              'Agile',
              'development process',
            ],
          },

          {
            text:
              'Atuação técnica em projetos web utilizando PHP, CMSs e plataformas de e-commerce.',
            groups: [
              'php',
              'backend',
              'fullstack',
            ],
            keywords: [
              'PHP',
              'Magento',
              'Joomla',
              'e-commerce',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'tcm-ceara',

    company: 'Tribunal de Contas do Ceará',

    role: 'PHP Developer',

    period: {
      start: '2005',
      end: '2009',
    },

    featured: false,

    engagements: [
      {
        project: 'Sistemas Institucionais',

        context:
          'Atuação no desenvolvimento, manutenção e evolução de aplicações web e sistemas internos do Tribunal de Contas do Ceará.',

        areas: [
          'backend',
          'frontend',
          'fullstack',
          'database',
        ],

        technologies: [
          'PHP',
          'Symfony',
          'PostgreSQL',
          'WordPress',
          'JavaScript',
          'jQuery',
        ],

        highlights: [
          {
            text:
              'Desenvolvimento, testes e manutenção de aplicações web utilizando PHP e JavaScript.',
            groups: [
              'general',
              'php',
              'backend',
              'fullstack',
            ],
            keywords: [
              'PHP',
              'JavaScript',
              'web applications',
            ],
          },

          {
            text:
              'Desenvolvimento de interfaces dinâmicas, formulários e funcionalidades utilizando JavaScript e jQuery.',
            groups: [
              'frontend',
              'fullstack',
            ],
            keywords: [
              'JavaScript',
              'jQuery',
              'frontend development',
            ],
          },

          {
            text:
              'Implementação de funcionalidades backend, integrações e persistência de dados em sistemas institucionais.',
            groups: [
              'php',
              'backend',
            ],
            keywords: [
              'PHP',
              'PostgreSQL',
              'system integration',
            ],
          },

          {
            text:
              'Manutenção e evolução de sistemas internos e aplicações web existentes.',
            groups: [
              'php',
              'backend',
            ],
            keywords: [
              'PHP',
              'software maintenance',
              'legacy systems',
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'prefeitura-fortaleza-2002',

    company: 'Prefeitura Municipal de Fortaleza',

    role: 'Full Stack PHP Developer',

    period: {
      start: '2002',
      end: '2005',
    },

    featured: false,

    engagements: [
      {
        project: 'Sistemas Institucionais',

        context:
          'Atuação no desenvolvimento, integração, implantação e manutenção de aplicações web e sistemas internos da administração municipal.',

        areas: [
          'backend',
          'frontend',
          'fullstack',
          'architecture',
          'database',
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

        highlights: [
          {
            text:
              'Desenvolvimento e manutenção de aplicações web e sistemas internos utilizando PHP e tecnologias web.',
            groups: [
              'general',
              'php',
              'backend',
              'fullstack',
            ],
            keywords: [
              'PHP',
              'web applications',
              'internal systems',
            ],
          },

          {
            text:
              'Desenvolvimento de serviços web e integrações para comunicação entre sistemas institucionais.',
            groups: [
              'php',
              'backend',
              'architecture',
            ],
            keywords: [
              'web services',
              'system integration',
              'PHP',
            ],
          },

          {
            text:
              'Implantação de aplicações e suporte técnico à operação dos sistemas.',
            groups: [
              'backend',
              'devops',
            ],
            keywords: [
              'application deployment',
              'production support',
            ],
          },

          {
            text:
              'Otimização de consultas e refatoração de código para melhoria de desempenho e escalabilidade das aplicações.',
            groups: [
              'php',
              'backend',
              'architecture',
              'database',
            ],
            keywords: [
              'PHP',
              'SQL',
              'refactoring',
              'performance optimization',
              'scalability',
            ],
          },
        ],
      },
    ],
  },

];