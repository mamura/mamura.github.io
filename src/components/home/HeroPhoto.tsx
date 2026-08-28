import {
  motion,
  useScroll,
  useTransform,
} from 'motion/react';
import { useEffect, useState } from 'react';

export default function HeroPhoto() {
  const { scrollY } = useScroll();

  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    function updateViewportHeight() {
      setViewportHeight(window.innerHeight);
    }

    updateViewportHeight();

    window.addEventListener('resize', updateViewportHeight);

    return () => {
      window.removeEventListener('resize', updateViewportHeight);
    };
  }, []);

  const fadeEnd = Math.max(viewportHeight * 0.8, 1);

  const opacity = useTransform(
    scrollY,
    [0, viewportHeight * 0.2, viewportHeight * 0.9],
    [1, 1, 0],
  );

  const y = useTransform(
    scrollY,
    [0, viewportHeight],
    [0, 500],
  );

  const scale = useTransform(
    scrollY,
    [0, viewportHeight],
    [1, 0.85],
  );

  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        hidden
        overflow-hidden
        lg:block
      "
    >
      <motion.div
        style={{ opacity }}
        className="absolute inset-0"
      >
        <motion.img
          src="/images/mamura-full.png"
          alt="Márcio Mota"
          loading="eager"
          decoding="async"
          style={{ y, scale }}
          className="
            absolute
            right-0
            top-0
            h-[200%]
            max-w-none
            object-contain
            object-top
          "
        />
      </motion.div>
    </div>
  );
}