import { motion } from 'motion/react';

export default function VerticalReveal() {
  return (
    <motion.div
      initial={{
        scaleY: 0,
        opacity: 0,
      }}
      whileInView={{
        scaleY: 1,
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 0.8,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        hidden
        h-full
        origin-top
        bg-white/10
        lg:block
      "
    />
  );
}