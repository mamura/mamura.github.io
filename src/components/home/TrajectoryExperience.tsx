import {
  motion,
  useTransform,
  type MotionValue,
} from 'motion/react';

export type ExperienceImage = {
  src: string;
  rotation: number;
  x: number;
  y: number;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  x: number;
  y: number;
  images: ExperienceImage[];
};

type TrajectoryExperienceProps = {
  experience: Experience;
  progress: MotionValue<number>;
  cameraProgress: MotionValue<number>;
  scrollDistance: number;
  viewportWidth: number;
};

type TrajectoryCardProps = {
  image: ExperienceImage;
  index: number;
  reveal: MotionValue<number>;
};

function TrajectoryCard({
  image,
  index,
  reveal,
}: TrajectoryCardProps) {
  /**
   * Cada imagem possui sua própria janela
   * para produzir o efeito de cartas
   * sendo lançadas uma após a outra.
   */
  const start =
    index * 0.18;

  const end =
    Math.min(
      start + 0.55,
      1,
    );

  const cardReveal =
    useTransform(
      reveal,
      [start, end],
      [0, 1],
    );

  const opacity =
    useTransform(
      cardReveal,
      [0, 0.25, 1],
      [0, 1, 1],
    );

  const scale =
    useTransform(
      cardReveal,
      [0, 1],
      [0.78, 1],
    );

  const cardX =
    useTransform(
      cardReveal,
      [0, 1],
      [
        image.x - 60,
        image.x,
      ],
    );

  const cardY =
    useTransform(
      cardReveal,
      [0, 1],
      [
        image.y - 90,
        image.y,
      ],
    );

  const rotate =
    useTransform(
      cardReveal,
      [0, 1],
      [
        image.rotation +
          (
            index % 2 === 0
              ? -22
              : 22
          ),
        image.rotation,
      ],
    );

  return (
    <motion.img
      src={image.src}
      alt=""
      aria-hidden="true"
      className="
        absolute
        h-auto
        w-[135px]
        max-h-[90px]
        rounded-md
        object-contain
      "
      style={{
        opacity,
        scale,
        x: cardX,
        y: cardY,
        rotate,
      }}
    />
  );
}

export default function TrajectoryExperience({
  experience,
  progress,
  cameraProgress,
  scrollDistance,
  viewportWidth,
}: TrajectoryExperienceProps) {
  const {
    company,
    role,
    period,
    x,
    y,
    images,
  } = experience;

  /**
   * Experiências posicionadas dentro
   * do primeiro viewport.
   *
   * Elas precisam usar o progresso
   * geral porque a câmera permanece
   * parada no início.
   */
  const isInitialViewport =
    viewportWidth > 0 &&
    x < viewportWidth;

  /**
   * Calcula onde a experiência está
   * dentro do percurso horizontal.
   */
  const experienceProgress =
    scrollDistance > 0
      ? Math.max(
          0,
          Math.min(
            1,
            (
              x -
              viewportWidth * 0.65
            ) /
              scrollDistance,
          ),
        )
      : 0;

  /**
   * Primeiro viewport:
   * progresso geral.
   *
   * Demais experiências:
   * progresso da câmera.
   */
  const revealProgress =
    isInitialViewport
      ? progress
      : cameraProgress;

  /**
   * Momento aproximado em que
   * a linha alcança a experiência.
   *
   * O primeiro viewport é distribuído
   * durante a pausa inicial da câmera.
   */
  const revealStart =
    isInitialViewport
      ? Math.max(
          (
            x /
            Math.max(
              viewportWidth,
              1,
            )
          ) * 0.16,
          0,
        )
      : Math.max(
          experienceProgress -
            0.06,
          0,
        );

  /**
   * A janela é suficientemente longa
   * para separar:
   *
   * texto
   *   ↓
   * imagens
   */
  const revealEnd =
    isInitialViewport
      ? Math.min(
          revealStart + 0.10,
          0.20,
        )
      : Math.min(
          experienceProgress +
            0.12,
          1,
        );

  const reveal =
    useTransform(
      revealProgress,
      [
        revealStart,
        revealEnd,
      ],
      [0, 1],
    );

  /**
   * -------------------------
   * FASE 1 — TEXTO
   * -------------------------
   *
   * A linha já alcançou
   * a experiência.
   */
  const textOpacity =
    useTransform(
      reveal,
      [
        0,
        0.08,
        0.45,
        1,
      ],
      [
        0,
        0,
        1,
        1,
      ],
    );

  const textY =
    useTransform(
      reveal,
      [
        0.08,
        0.45,
      ],
      [
        16,
        0,
      ],
    );

  /**
   * -------------------------
   * FASE 2 — IMAGENS
   * -------------------------
   *
   * Só começam depois que
   * o texto já apareceu.
   */
  const imagesReveal =
    useTransform(
      reveal,
      [
        0,
        0.50,
        1,
      ],
      [
        0,
        0,
        1,
      ],
    );

  return (
    <div
      className="
        absolute
        flex
        w-[320px]
        flex-col
        items-end
      "
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <div
        className="
          relative
          h-[150px]
          w-full
          overflow-visible
        "
      >
        {images.map(
          (image, index) => (
            <TrajectoryCard
              key={image.src}
              image={image}
              index={index}
              reveal={
                imagesReveal
              }
            />
          ),
        )}
      </div>

      <motion.div
        className="
          mt-2
          w-full
          text-right
        "
        style={{
          opacity:
            textOpacity,
          y: textY,
        }}
      >
        <h3
          className="
            font-heading
            text-3xl
            font-bold
            text-white
          "
        >
          {company}
        </h3>

        <p
          className="
            mt-1
            font-body
            text-lg
            font-semibold
            text-white/85
          "
        >
          {role}
        </p>

        <span
          className="
            mt-1
            block
            font-body
            text-xs
            text-white/60
          "
        >
          {period}
        </span>
      </motion.div>
    </div>
  );
}