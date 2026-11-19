import type { ResumeArea, ResumePositioning } from './types';
import type { SkillCategory } from './skills';

export interface ResumePreset {
  slug: string;
  title: string;
  positioning: ResumePositioning;
  summary: string[];
  targetAreas?: ResumeArea[];
  targetSkillCategories?: SkillCategory[];
  targetExperienceGroups?: string[];
}

export const masterPreset: ResumePreset = {
  slug: 'master',

  title: 'Senior Software Engineer',

  positioning: {
    roles: [
      'Senior Software Engineer',
      'Full Stack Developer',
    ],

    stack: [
      'PHP',
      'Laravel',
      'TypeScript',
      'React',
      'Java',
      'Software Architecture',
      'Technical Leadership',
    ],
  },

  summary: [
    'Desenvolvedor de Software com sólida experiência na concepção, arquitetura, desenvolvimento e evolução de sistemas corporativos e produtos digitais, atuando em diferentes ecossistemas tecnológicos, com destaque para PHP, Laravel, Java, Spring Boot, TypeScript, React e Angular.',

    'Experiência em arquitetura de software, desenvolvimento de APIs REST, integração entre sistemas, modelagem de dados, modernização de aplicações legadas e construção de soluções escaláveis e sustentáveis. Atuação tanto no backend quanto no frontend, com domínio de diferentes padrões arquiteturais e práticas de engenharia de software.',

    'Vivência em liderança técnica, definição de soluções arquiteturais, orientação de desenvolvedores e tomada de decisões técnicas, participando de todas as etapas do ciclo de vida do software, desde o levantamento de requisitos e planejamento até a implementação, implantação, monitoramento e sustentação em produção. Experiência também com ambientes conteinerizados, orquestração, pipelines CI/CD e práticas de qualidade e testes automatizados.',
    
  ],
};

export const presets: ResumePreset[] = [
  {
    slug: 'php-backend',

    title: 'Senior PHP Backend Engineer',

    positioning: {
      roles: [
        'Senior PHP Backend Engineer',
      ],

      stack: [
        'PHP',
        'Laravel',
        'Symfony',
        'REST APIs',
        'SQL',
        'Software Architecture',
        'Docker',
      ],
    },

    summary: [
      'Desenvolvedor Backend Sênior com ampla experiência no desenvolvimento, manutenção e evolução de aplicações web e sistemas corporativos utilizando PHP, Laravel e Symfony.',

      'Experiência na construção de APIs REST, integração de sistemas, bancos de dados relacionais, arquitetura de software, modernização de aplicações legadas e resolução de problemas em ambientes de produção.',
    ],

    targetAreas: [
      'backend',
      'architecture',
      'database',
    ],

    targetSkillCategories: [
      'language',
      'backend',
      'database',
      'architecture',
      'devops',
      'testing',
    ],

    targetExperienceGroups: [
      'php',
    ],
  },

  {
    slug: 'typescript-fullstack',

    title: 'Senior TypeScript Full Stack Engineer',

    positioning: {
      roles: [
        'Senior TypeScript Full Stack Engineer',
      ],

      stack: [
        'TypeScript',
        'React',
        'Next.js',
        'Vue.js',
        'Node.js',
        'REST APIs',
      ],
    },

    summary: [
      'Desenvolvedor Full Stack Sênior com experiência no desenvolvimento e evolução de aplicações web utilizando TypeScript, React, Next.js, Vue.js e tecnologias modernas do ecossistema JavaScript.',

      'Experiência na construção de interfaces, integração com APIs REST, desenvolvimento de aplicações SPA, organização de componentes e integração entre frontend e backend em sistemas corporativos e produtos digitais.',
    ],

    targetAreas: [
      'frontend',
      'backend',
      'fullstack',
    ],

    targetSkillCategories: [
      'language',
      'frontend',
      'backend',
      'architecture',
      'devops',
      'testing',
    ],

    targetExperienceGroups: [
      'typescript',
    ],
  },

  {
    slug: 'java-backend',

    title: 'Java Backend Developer',

    positioning: {
      roles: [
        'Java Backend Developer',
      ],

      stack: [
        'Java',
        'Backend Development',
        'REST APIs',
        'SQL',
        'PostgreSQL',
        'Oracle',
        'Software Architecture',
      ],
    },

    summary: [
      'Desenvolvedor de software com experiência em Java aplicada ao desenvolvimento backend e à construção e manutenção de sistemas corporativos, além de uma trajetória consolidada em engenharia de software e desenvolvimento web.',

      'Experiência com bancos de dados relacionais, integração de sistemas, APIs, arquitetura de software e desenvolvimento de regras de negócio em ambientes corporativos.',
    ],

    targetAreas: [
      'backend',
      'architecture',
      'database',
    ],

    targetSkillCategories: [
      'language',
      'backend',
      'database',
      'architecture',
      'devops',
      'testing',
    ],

    targetExperienceGroups: [
      'java',
    ],
  },

  {
    slug: 'tech-lead',

    title: 'Tech Lead',

    positioning: {
      roles: [
        'Tech Lead',
        'Senior Software Engineer',
      ],

      stack: [
        'Technical Leadership',
        'Software Architecture',
        'Code Review',
        'Technical Mentoring',
        'System Integration',
        'PHP',
        'TypeScript',
      ],
    },

    summary: [
      'Líder Técnico e Desenvolvedor de Software Sênior com experiência na condução técnica de equipes e no desenvolvimento e evolução de sistemas corporativos e produtos digitais.',

      'Experiência em decisões técnicas, arquitetura de software, revisão de código, mentoria, refinamento de requisitos, análise de riscos e integração de sistemas, conciliando atuação hands-on com liderança técnica.',
    ],

    targetAreas: [
      'leadership',
      'architecture',
      'backend',
      'fullstack',
    ],

    targetSkillCategories: [
      'language',
      'backend',
      'frontend',
      'architecture',
      'devops',
      'testing',
      'leadership',
    ],

    targetExperienceGroups: [
    'leadership',
  ],
  },
];