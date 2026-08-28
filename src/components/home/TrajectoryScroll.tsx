import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'motion/react';

import {
  useEffect,
  useRef,
  useState,
} from 'react';

import TrajectoryPath from './TrajectoryPath';

import TrajectoryExperience, {
  type Experience,
} from './TrajectoryExperience';

import { Experiences } from './Experiences';

const experiences: Experience[] = Experiences;

export default function TrajectoryScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [scrollDistance, setScrollDistance] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  /**
   * A câmera permanece parada nos primeiros 20%
   * da seção e nos últimos 10%.
   */
  const cameraProgress = useTransform(
    scrollYProgress,
    [0, 0.20, 0.90, 1],
    [0, 0, 1, 1],
  );

  /**
   * A linha possui seu próprio progresso.
   *
   * Ela começa imediatamente quando a seção
   * entra no viewport e avança mais rápido
   * que o restante da trajetória.
   *
   * Dessa forma:
   *
   * linha → texto → imagens
   */
  const pathProgress = useTransform(
    scrollYProgress,
    [0, 0.72],
    [0, 1],
  );

  const x = useTransform(
    cameraProgress,
    [0, 1],
    [0, -scrollDistance],
  );

  useEffect(() => {
    const updateMeasurements = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;

      if (!viewport || !track) {
        return;
      }

      const currentViewportWidth =
        viewport.offsetWidth;

      const viewportHeight =
        viewport.offsetHeight;

      const trackWidth =
        track.scrollWidth;

      const horizontalDistance =
        Math.max(
          0,
          trackWidth -
            currentViewportWidth,
        );

      setViewportWidth(
        currentViewportWidth,
      );

      setScrollDistance(
        horizontalDistance,
      );

      /**
       * O multiplicador 2.5 controla
       * a velocidade geral da trajetória.
       */
      setSectionHeight(
        viewportHeight +
          horizontalDistance * 2.5,
      );
    };

    updateMeasurements();

    const resizeObserver =
      new ResizeObserver(
        updateMeasurements,
      );

    if (viewportRef.current) {
      resizeObserver.observe(
        viewportRef.current,
      );
    }

    if (trackRef.current) {
      resizeObserver.observe(
        trackRef.current,
      );
    }

    window.addEventListener(
      'resize',
      updateMeasurements,
    );

    return () => {
      resizeObserver.disconnect();

      window.removeEventListener(
        'resize',
        updateMeasurements,
      );
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="trajetoria"
      aria-labelledby="trajectory-title"
      className="relative bg-content"
      style={{
        height:
          sectionHeight > 0
            ? `${sectionHeight}px`
            : '100svh',
      }}
    >
      <div
        ref={viewportRef}
        className="
          sticky
          top-0
          h-screen
          overflow-hidden
        "
      >
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="
            relative
            flex
            h-full
            w-max
            will-change-transform
          "
        >
          <TrajectoryTrack
            progress={scrollYProgress}
            pathProgress={pathProgress}
            cameraProgress={cameraProgress}
            scrollDistance={scrollDistance}
            viewportWidth={viewportWidth}
          />
        </motion.div>
      </div>
    </section>
  );
}

type TrajectoryTrackProps = {
  progress: MotionValue<number>;
  pathProgress: MotionValue<number>;
  cameraProgress: MotionValue<number>;
  scrollDistance: number;
  viewportWidth: number;
};

function TrajectoryTrack({
  progress,
  pathProgress,
  cameraProgress,
  scrollDistance,
  viewportWidth,
}: TrajectoryTrackProps) {
  return (
    <div
      className="
        relative
        h-full
        w-[5500px]
        shrink-0
        bg-content
      "
    >
      <div
        className="
          absolute
          left-0
          top-0
          w-screen
          pt-10
        "
      >
        <div className="m-container">
          <span
            id="trajectory-title"
            className="
              font-body
              text-xs
              font-semibold
              uppercase
              tracking-[0.14em]
              text-white/80
            "
          >
            04 / Trajetória
          </span>
        </div>
      </div>

      {/*
       * A linha recebe um progresso
       * independente e adiantado.
       */}
      <TrajectoryPath
        progress={pathProgress}
      />

      {experiences.map(
        (experience) => (
          <TrajectoryExperience
            key={`${experience.company}-${experience.period}`}
            experience={experience}
            progress={progress}
            cameraProgress={
              cameraProgress
            }
            scrollDistance={
              scrollDistance
            }
            viewportWidth={
              viewportWidth
            }
          />
        ),
      )}
    </div>
  );
}