import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'floresta',

    name: 'Floresta',

    icon: '/images/projects/floresta-40.png',

    description:
      'Sistema corporativo desenvolvido com backend Laravel e frontend moderno, estruturado com foco em modularidade, manutenção e evolução gradual.',

    highlights: [
      {
        text: 'Desenvolvimento de backend em Laravel organizado em módulos e APIs.',
        groups: ['php', 'backend', 'architecture'],
        keywords: ['PHP', 'Laravel', 'REST API', 'modular architecture'],
      },

      {
        text: 'Construção de interfaces administrativas com React e Next.js.',
        groups: ['typescript', 'frontend', 'fullstack'],
        keywords: ['React', 'Next.js', 'TypeScript'],
      },

      {
        text: 'Implementação de autenticação, filtros, dashboards e integração frontend/backend.',
        groups: ['frontend', 'backend', 'fullstack'],
      },

      {
        text: 'Integração com sistemas legados, bancos relacionais e serviços internos.',
        groups: ['backend', 'architecture'],
        keywords: ['integration', 'legacy systems'],
      },
    ],

    technologies: [
      'PHP',
      'Laravel',
      'React',
      'Next.js',
      'TypeScript',
      'Docker',
      'MySQL',
      'PostgreSQL',
      'MongoDB',
    ],

    areas: [
      'backend',
      'frontend',
      'fullstack',
      'architecture',
      'database',
    ],
  },

  {
    id: 'bem-pertim',

    name: 'Bem Pertim',

    icon: '/images/projects/bem-pertim-40.png',

    description:
      'Aplicação web voltada à descoberta de negócios locais, construída com foco em experiência mobile e componentes reutilizáveis.',

    highlights: [
      {
        text: 'Desenvolvimento de aplicação web responsiva voltada para descoberta de negócios locais.',
        groups: ['frontend', 'typescript', 'general'],
      },

      {
        text: 'Construção da interface com Next.js, React e TypeScript.',
        groups: ['frontend', 'typescript'],
        keywords: ['Next.js', 'React', 'TypeScript'],
      },

      {
        text: 'Implementação de mapa interativo, layout mobile-first e fluxo inicial de cadastro de empresas.',
        groups: ['frontend'],
      },

      {
        text: 'Estruturação do projeto para deploy e execução utilizando Vercel e Docker.',
        groups: ['frontend', 'architecture'],
      },
    ],

    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vercel',
      'Docker',
    ],

    areas: ['frontend', 'fullstack'],
  },

  {
    id: 'obsidian-mcp',

    name: 'Obsidian MCP',

    icon: '/images/projects/obsidian-mcp-40.png',

    description:
      'Servidor MCP desenvolvido para disponibilizar conhecimento armazenado em vaults do Obsidian para aplicações baseadas em modelos de linguagem.',

    highlights: [
      {
        text: 'Desenvolvimento de servidor MCP para leitura e consulta de notas armazenadas no Obsidian.',
        groups: ['backend', 'architecture', 'typescript'],
        keywords: ['MCP', 'TypeScript', 'LLM'],
      },

      {
        text: 'Implementação de ferramentas para pesquisa, leitura de notas e consulta de metadados.',
        groups: ['backend', 'architecture'],
      },

      {
        text: 'Estruturação da aplicação para integração entre bases de conhecimento locais e clientes de IA.',
        groups: ['architecture', 'backend'],
        keywords: ['AI', 'LLM integration', 'knowledge management'],
      },
    ],

    technologies: [
      'TypeScript',
      'Node.js',
      'Model Context Protocol',
      'Obsidian',
    ],

    areas: ['backend', 'architecture'],
  },
];