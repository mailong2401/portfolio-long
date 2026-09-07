'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  phase: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number | null>(null);

  const timeRef = useRef(0);

  const rgbRef = useRef({
    r: 43,
    g: 37,
    b: 48,
  });

  const visibleRef = useRef(true);

  useEffect(() => {
    const getRGB = () => {
      const color = getComputedStyle(document.documentElement)
        .getPropertyValue('--foreground')
        .trim();

      const match = color.match(/\d+/g);

      if (match) {
        rgbRef.current = {
          r: Number(match[0]),
          g: Number(match[1]),
          b: Number(match[2]),
        };
      }
    };

    getRGB();

    const observer = new MutationObserver(getRGB);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    const stars: Star[] = [];

    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 0.5,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.6 + 0.2,
        phase: Math.random() * Math.PI * 2,
      });
    }

    starsRef.current = stars;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = '100%';
      canvas.style.height = '100%';

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    window.addEventListener('resize', resize);

    const visibility = () => {
      visibleRef.current = !document.hidden;
    };

    document.addEventListener('visibilitychange', visibility);

    const render = (time: number) => {
      animationRef.current = requestAnimationFrame(render);

      if (!visibleRef.current) return;

      timeRef.current = time * 0.001;

      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      const { r, g, b } = rgbRef.current;

      for (const star of starsRef.current) {
        const x = (star.x / 100) * width;
        const y = (star.y / 100) * height;

        const alpha =
          star.opacity *
          (0.6 + 0.4 * Math.sin(timeRef.current * star.speed + star.phase));

        if (star.size > 2) {
          const gradient = ctx.createRadialGradient(
            x,
            y,
            0,
            x,
            y,
            star.size * 4
          );

          gradient.addColorStop(
            0,
            `rgba(${r},${g},${b},${alpha * 0.8})`
          );

          gradient.addColorStop(
            0.3,
            `rgba(${r},${g},${b},${alpha * 0.25})`
          );

          gradient.addColorStop(
            1,
            `rgba(${r},${g},${b},0)`
          );

          ctx.fillStyle = gradient;

          ctx.beginPath();
          ctx.arc(x, y, star.size * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;

        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    animationRef.current = requestAnimationFrame(render);

    return () => {
      observer.disconnect();

      document.removeEventListener(
        'visibilitychange',
        visibility
      );

      window.removeEventListener('resize', resize);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden opacity-30">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
}
