'use client';

import { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Tạo ngôi sao 1 lần duy nhất
    const numStars = 100; // tăng/giảm tùy ý
    const stars: Star[] = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * 100, // %
        y: Math.random() * 100, // %
        size: Math.random() * 1.5 + 0.5, // px, nhỏ gọn như chấm
        opacity: Math.random() * 0.6 + 0.2,
      });
    }
    starsRef.current = stars;
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      const width = rect?.width ?? window.innerWidth;
      const height = rect?.height ?? window.innerHeight;

      canvas.width = width;
      canvas.height = height;

      // Lấy màu foreground 1 lần, không tạo DOM tạm mỗi frame
      const color = getComputedStyle(document.documentElement)
        .getPropertyValue('--foreground')
        .trim() || '#2b2530';

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;

      for (const star of starsRef.current) {
        const x = (star.x / 100) * width;
        const y = (star.y / 100) * height;

        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    draw();

    // Vẽ lại khi resize hoặc đổi theme (class trên <html> đổi)
    window.addEventListener('resize', draw);

    const observer = new MutationObserver(draw);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      window.removeEventListener('resize', draw);
      observer.disconnect();
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-30">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  );
}
