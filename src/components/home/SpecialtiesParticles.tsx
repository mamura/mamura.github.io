import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
};

export default function SpecialtiesParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext('2d');

    if (!context) return;

    let animationFrame = 0;
    let particles: Particle[] = [];

    function resizeCanvas() {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const amount = Math.max(
        180,
        Math.min(
          400,
          Math.floor((width * height) / 28000),
        ),
      );

      particles = Array.from(
        { length: amount },
        () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.62,
          vy: (Math.random() - 0.5) * 0.035,
          radius: Math.random() * 1.4 + 0.8,
          alpha: Math.random() * 0.3 + 0.04,
          phase: Math.random() * Math.PI * 2,
        }),
      );
    }

    function draw() {
      const { width, height } =
        canvas.getBoundingClientRect();

      context.clearRect(
        0,
        0,
        width,
        height,
      );

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) {
          particle.x = width;
        }

        if (particle.x > width) {
          particle.x = 0;
        }

        if (particle.y < 0) {
          particle.y = height;
        }

        if (particle.y > height) {
          particle.y = 0;
        }

        context.beginPath();

        context.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2,
        );

        context.fillStyle =
          `rgba(255,255,255,${particle.alpha})`;

        context.fill();
      }

      animationFrame =
        window.requestAnimationFrame(draw);
    }

    resizeCanvas();
    draw();

    const resizeObserver =
      new ResizeObserver(resizeCanvas);

    resizeObserver.observe(canvas);

    return () => {
      resizeObserver.disconnect();

      window.cancelAnimationFrame(
        animationFrame,
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        h-full
        w-full
      "
    />
  );
}