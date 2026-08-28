import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'motion/react';

import {
  Boxes,
  Braces,
  CodeXml,
  Component,
  Database,
  GitBranch,
  Layers3,
  Network,
  Plug,
  ServerCog,
  UsersRound,
  Workflow,
} from 'lucide-react';

import {
  useState,
  type ComponentType,
} from 'react';
import Reveal from '../ui/Reveal';
import SpecialtyDiagram, {
  type DiagramNode,
  type DiagramPath,
  type DecorativePoint,
} from './SpecialtyDiagram';
import SpecialtiesParticles from './SpecialtiesParticles';

type SpecialtyDiagramConfig = {
 centerLabel: string;
};

type Specialty = {
  id: string;
  shortLabel: string;
  titleStrong?: string;
  title: string;
  description: string;
  technologies: string[];
  accent: string;
  navImage?: string;
  diagram: SpecialtyDiagramConfig;
  
};

const specialties: Specialty[] = [
  {
    id: 'php',
    shortLabel: 'PHP / Backend',
    titleStrong: 'PHP /',
    title: ' Backend',
    description:
      'Construção e evolução de sistemas robustos, APIs e integrações que movem negócios.',
    technologies: [
      'Laravel',
      'Symfony',
      'Yii',
      'Drupal',
      'SQL',
      'REST APIs',
    ],
    accent: '#8B5CF6',
    navImage: '/images/skills/php.svg',
    diagram: {
      centerLabel: 'PHP',
    },
  },

  {
    id: 'typescript',
    shortLabel: 'TypeScript / Frontend',
    titleStrong: 'TypeScript /',
    title: ' Frontend',
    description:
      'Interfaces e aplicações modernas com foco em experiência, componentização e integração entre frontend e serviços.',
    technologies: [
      'TypeScript',
      'React',
      'Next.js',
      'Vue',
      'Angular',
      'Node.js',
    ],
    accent: '#3178C6',
    navImage: '/images/skills/typescript.svg',
    diagram: {
      centerLabel: 'TypeScript'
    }
  },

  {
    id: 'java',
    shortLabel: 'Java',
    title: 'Java', 
    description:
      'Desenvolvimento e evolução de sistemas corporativos, serviços e aplicações orientadas a regras de negócio complexas.',
    technologies: [
      'Java',
      'Spring',
      'REST APIs',
      'SQL',
      'JPA',
      'Docker',
    ],
    accent: '#E88A12',
    navImage: '/images/skills/java.svg',
    diagram: {
      centerLabel: 'Java'
    }
  },

  {
    id: 'architecture',
    shortLabel: 'Arquitetura',
    title: 'Arquitetura de Software',
    description:
      'Estruturação e evolução de sistemas, definição de integrações e decisões arquiteturais orientadas às necessidades do produto.',
    technologies: [
      'REST APIs',
      'Clean Architecture',
      'Docker',
      'Integrações',
      'Mensageria',
      'Modelagem',
    ],
    accent: '#3155C6',
    navImage: '/images/skills/arquitetura.svg',
    diagram: {
      centerLabel: 'Arquitetura'
    }
  },

  {
    id: 'leadership',
    shortLabel: 'Liderança Técnica',
    title: 'Liderança Técnica',
    description:
      'Decisões técnicas, mentoria e alinhamento entre pessoas, produto e tecnologia para conduzir a evolução de sistemas e equipes.',
    technologies: [
      'Tech Leadership',
      'Mentoria',
      'Code Review',
      'Planejamento',
      'Arquitetura',
      'Produto',
    ],
    accent: '#13B89A',
    navImage: '/images/skills/lideranca.svg',
    diagram: {
      centerLabel: 'TechLead'
    }
  },
];

export default function SpecialtiesInteractive() {
  const [activeId, setActiveId] = useState('php');

  const shouldReduceMotion = useReducedMotion();

  const active =
    specialties.find(
      (specialty) => specialty.id === activeId,
    ) ?? specialties[0];

  return (
    <section id="especialidades" aria-labelledby="specialties-title" className="relative overflow-hidden bg-content min-h-[calc(100svh)]">
      <div className="absolute inset-0">
        <img src="/images/fortaleza.jpg" alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-cover" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-black/70"></div>

      <motion.div
        aria-hidden="true"
        animate={{
          backgroundColor: active.accent
        }}
        transition={{
          duration: 0.6,
        }}
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
      />

      <div className="m-container flex flex-col relative z-10 py-20 lg:py-24 min-h-[calc(100svh-4rem)]">
        <Reveal>
          <span id="specialties-title" className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
            03 / Especialidades
          </span>
        </Reveal>

        {/* navegação */}
        <div 
        className="mt-14
          grid
          grid-cols-5
          items-center
          gap-3
          lg:flex
          lg:w-full
          lg:justify-between
          lg:gap-0"
        >
          {specialties.map((specialty) => {
            const selected = specialty.id === activeId;

            return(
              <button
                key={specialty.id}
                type="button"
                onClick={() => {
                  setActiveId(specialty.id)
                }}
                className="group relative flex min-h-16 items-center gap-3 text-left font-heading text-sm font-semibold uppercase text-white/70 transition-colors duration-300 hover:text-white lg:flex-none">
                <span 
                  className="flex h-10 w-12 shrink-0 items-center justify-center transition-opacity duration-300"
                  style={{
                    opacity: selected ? 1 : 0.72,
                  }}
                >
                 {specialty.navImage ? (
                  <img src={specialty.navImage} alt="" aria-hidden="true" className="max-h-9 max-w-12 object-contain" />
                 ) : (
                  specialty.navIcon && (
                    <specialty.navIcon size={30} strokeWidth={1.8} style={{
                      color: specialty.accent,
                    }}
                    />
                  )
                 )} 
                </span>

                <span className={`hidden whitespace-nowrap transition-colors duration-300 lg:inline ${selected ? 'text-white' : 'text-white/65'}`}>
                  {specialty.shortLabel}
                </span>

                {selected && (
                  <motion.span
                    layoutId="specialty-active-line"
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[2px] w-full rounded-full"
                    style={{
                      backgroundColor: specialty.accent,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* cards */}
        <div
          className="
            mt-8
            flex
            min-h-[380px]
            flex-1
            overflow-hidden
            rounded-xl
            border
            border-white/15
            bg-black/25
            p-6
            backdrop-blur-sm
            md:p-8
            lg:p-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{
                opacity: 0,
                x: 18,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -12,
              }}
              transition={{
                duration: 0.65,
                ease: [0.62, 1, 0.36, 1],
              }}
              className="
                grid
                min-h-0
                w-full
                flex-1
                gap-10
                lg:grid-cols-[280px_minmax(0,1fr)]
                lg:items-center
              "
            >
              <div className="flex flex-col gap-6">
                <h3 className="font-heading text-3xl uppercase text-white">
                  {active.titleStrong ? (
                    <>
                      <span className="font-bold">
                        {active.titleStrong}
                      </span>{' '}
                      {active.title}
                    </>
                  ) : (
                    <span className="font-bold">
                      {active.title}
                    </span>
                  )}
                </h3>

                <p className="mt-8 font-body text-base leading-7 text-white/75">
                  {active.description}
                </p>

                <a
                  href="#projetos"
                  className="
                    group
                    mt-8
                    inline-flex
                    items-center
                    gap-3
                    border
                    border-white/50
                    px-4
                    py-3
                    font-body
                    text-sm
                    font-medium
                    text-white
                    transition-colors
                    hover:border-white
                    justify-self-start
                    self-start
                  "
                >
                  Ver projetos relacionados

                  <span
                    aria-hidden="true"
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:translate-y-1
                    "
                  >
                    ↘
                  </span>
                </a>
              </div>

              <div
                className="
                  relative
                  flex
                  h-full
                  min-h-[320px]
                  min-w-0
                  w-full
                  items-center
                  justify-center
                "
              >
                <SpecialtiesParticles />

                <SpecialtyDiagram
                  accent={active.accent}
                  centerLabel={active.diagram.centerLabel}
                  technologies={active.technologies}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
    </section>
      
  );
}

