import { AnimatePresence, motion } from "motion/react";
import { div } from "motion/react-client";
import { useEffect, useState } from "react";

const roles = [
  'Software Engineer',
  'Tech Lead',
  'Software Architect',
];

const INTERVAL = 3500;

export default function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length)
    }, INTERVAL);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="hero-role relative flex min-h-[1em] items-center justify-center text-white/90 sm:justify-start" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -10,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute whitespace-nowrap">
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}