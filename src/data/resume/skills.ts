import type { ResumeArea } from './types';

export type SkillLevel = 'core' | 'strong' | 'supporting';

export type SkillCategory =
  | 'language'
  | 'backend'
  | 'frontend'
  | 'database'
  | 'architecture'
  | 'devops'
  | 'testing'
  | 'leadership'
  | 'management'
  | 'tools';

export interface Skill {
  name: string;
  category: SkillCategory;
  areas: ResumeArea[];
  level: SkillLevel;
}

export const skills: Skill[] = [
  // Languages
  {
    name: 'PHP',
    category: 'language',
    areas: ['backend', 'fullstack', 'architecture'],
    level: 'core',
  },
  {
    name: 'TypeScript',
    category: 'language',
    areas: ['frontend', 'fullstack'],
    level: 'core',
  },
  {
    name: 'JavaScript',
    category: 'language',
    areas: ['frontend', 'backend', 'fullstack'],
    level: 'core',
  },
  {
    name: 'Java',
    category: 'language',
    areas: ['backend'],
    level: 'supporting',
  },

  // Backend
  {
    name: 'Laravel',
    category: 'backend',
    areas: ['backend', 'fullstack', 'architecture'],
    level: 'core',
  },
  {
    name: 'Symfony',
    category: 'backend',
    areas: ['backend', 'architecture'],
    level: 'strong',
  },
  {
    name: 'Yii',
    category: 'backend',
    areas: ['backend'],
    level: 'supporting',
  },
  {
    name: 'Node.js',
    category: 'backend',
    areas: ['backend', 'fullstack'],
    level: 'supporting',
  },
  {
    name: 'REST APIs',
    category: 'backend',
    areas: ['backend', 'fullstack', 'architecture'],
    level: 'core',
  },

  // Frontend
  {
    name: 'React',
    category: 'frontend',
    areas: ['frontend', 'fullstack'],
    level: 'core',
  },
  {
    name: 'Next.js',
    category: 'frontend',
    areas: ['frontend', 'fullstack'],
    level: 'strong',
  },
  {
    name: 'Vue.js',
    category: 'frontend',
    areas: ['frontend', 'fullstack'],
    level: 'strong',
  },
  {
    name: 'HTML',
    category: 'frontend',
    areas: ['frontend', 'fullstack'],
    level: 'strong',
  },
  {
    name: 'CSS',
    category: 'frontend',
    areas: ['frontend', 'fullstack'],
    level: 'strong',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    areas: ['frontend', 'fullstack'],
    level: 'strong',
  },

  // Databases
  {
    name: 'MySQL',
    category: 'database',
    areas: ['backend', 'fullstack', 'database'],
    level: 'core',
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    areas: ['backend', 'fullstack', 'database'],
    level: 'core',
  },
  {
    name: 'Oracle',
    category: 'database',
    areas: ['backend', 'database'],
    level: 'strong',
  },
  {
    name: 'MongoDB',
    category: 'database',
    areas: ['backend', 'database'],
    level: 'supporting',
  },
  {
    name: 'Redis',
    category: 'database',
    areas: ['backend', 'architecture', 'database'],
    level: 'supporting',
  },
  {
    name: 'SQL',
    category: 'database',
    areas: ['backend', 'database'],
    level: 'core',
  },

  // Architecture
  {
    name: 'Software Architecture',
    category: 'architecture',
    areas: ['architecture', 'backend', 'leadership'],
    level: 'strong',
  },
  {
    name: 'Clean Architecture',
    category: 'architecture',
    areas: ['architecture', 'backend'],
    level: 'strong',
  },
  {
    name: 'Modular Architecture',
    category: 'architecture',
    areas: ['architecture', 'backend', 'fullstack'],
    level: 'strong',
  },
  {
    name: 'System Integration',
    category: 'architecture',
    areas: ['architecture', 'backend'],
    level: 'strong',
  },
  {
    name: 'Legacy Systems',
    category: 'architecture',
    areas: ['architecture', 'backend'],
    level: 'strong',
  },

  // DevOps
  {
    name: 'Docker',
    category: 'devops',
    areas: ['devops', 'backend', 'fullstack'],
    level: 'core',
  },
  {
    name: 'Git',
    category: 'devops',
    areas: ['devops', 'backend', 'frontend', 'fullstack'],
    level: 'core',
  },
  {
    name: 'GitHub',
    category: 'tools',
    areas: ['devops', 'backend', 'frontend', 'fullstack'],
    level: 'strong',
  },
  {
    name: 'NGINX',
    category: 'devops',
    areas: ['devops', 'backend'],
    level: 'supporting',
  },
  {
    name: 'AWS S3',
    category: 'devops',
    areas: ['devops', 'backend'],
    level: 'supporting',
  },

  // Testing
  {
    name: 'Automated Testing',
    category: 'testing',
    areas: ['backend', 'frontend', 'fullstack'],
    level: 'strong',
  },
  {
    name: 'Code Review',
    category: 'testing',
    areas: ['leadership', 'architecture'],
    level: 'core',
  },
  {
    name: 'Refactoring',
    category: 'testing',
    areas: ['backend', 'frontend', 'architecture'],
    level: 'strong',
  },

  // Leadership
  {
    name: 'Technical Leadership',
    category: 'leadership',
    areas: ['leadership', 'management'],
    level: 'core',
  },
  {
    name: 'Technical Mentoring',
    category: 'leadership',
    areas: ['leadership'],
    level: 'strong',
  },
  {
    name: 'Technical Decision Making',
    category: 'leadership',
    areas: ['leadership', 'architecture'],
    level: 'core',
  },
  {
    name: 'Requirements Refinement',
    category: 'management',
    areas: ['leadership', 'management'],
    level: 'strong',
  },
  {
    name: 'Technical Risk Analysis',
    category: 'management',
    areas: ['leadership', 'management', 'architecture'],
    level: 'strong',
  },
];