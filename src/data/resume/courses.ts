export interface Course {
  institution: string;
  name: string;
  year: string;
  areas: string[];
  featured?: boolean;
}

export const courses: Course[] = [
  {
    institution: 'Alura',
    name: 'Formação Tech Lead',
    year: '2024',
    areas: ['leadership', 'management'],
    featured: true,
  },

  {
    institution: 'Alura',
    name: 'Formação em PHP e Programação Orientada a Objetos',
    year: '2025',
    areas: ['php', 'backend'],
  },

  {
    institution: 'Alura',
    name: 'Formação em Python e Programação Orientada a Objetos',
    year: '2025',
    areas: ['backend'],
  },

  {
    institution: 'Alura',
    name: 'Formação JavaScript para Backend',
    year: '2022',
    areas: ['javascript', 'backend'],
  },

  {
    institution: 'Alura',
    name: 'Ferramentas para Desenvolvimento, APIs, Git, NGINX e IA aplicada à programação',
    year: '2025',
    areas: ['backend', 'devops', 'architecture'],
  },
];