export type ResumeArea =
  | 'backend'
  | 'frontend'
  | 'fullstack'
  | 'architecture'
  | 'leadership'
  | 'management'
  | 'database'
  | 'devops';

export type ResumeTechnology =
  | 'php'
  | 'laravel'
  | 'symfony'
  | 'yii'
  | 'typescript'
  | 'javascript'
  | 'react'
  | 'nextjs'
  | 'vue'
  | 'nodejs'
  | 'java'
  | 'spring'
  | 'mysql'
  | 'postgresql'
  | 'oracle'
  | 'mongodb'
  | 'redis'
  | 'docker';

export type HighlightGroup =
  | 'general'
  | 'php'
  | 'typescript'
  | 'java'
  | 'frontend'
  | 'backend'
  | 'architecture'
  | 'leadership'
  | 'management'
  | 'fullstack'
  | 'devops';

export interface ResumePeriod {
  start: string;
  end?: string;
  current?: boolean;
  display?: string;
}

export interface ExperienceHighlight {
  text: string;
  groups: HighlightGroup[];
  keywords?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: ResumePeriod;

  context?: string;

  highlights: ExperienceHighlight[];

  technologies: string[];

  areas: ResumeArea[];

  contractType?: 'full-time' | 'part-time' | 'contract' | 'parallel-project';

  featured?: boolean;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  highlights: ExperienceHighlight[];
  technologies: string[];
  areas: ResumeArea[];
  url?: string;
}

export interface Education {
  institution: string;
  course: string;
  period: {
    start: string;
    end?: string;
  };
}

export interface ResumeProfile {
  name: string;
  location: string;
  email: string;
  phone?: string;

  website: string;
  github: string;
  linkedin: string;

  languages?: {
    language: string;
    level: string;
  }[];
}