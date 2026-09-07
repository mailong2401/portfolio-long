'use client';

import { useEffect, useRef, useState } from 'react';

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
  const animationRef = useRef<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const starsRef = useRef<Star[]>([]);
  const foregroundColorRef = useRef<string>('#2b2530');
  const timeRef = useRef<number>(0);

  useEffect(() => {
    setMounted(true);

    // Lấy màu foreground từ CSS variable
    const getForegroundColor = () => {
      if (typeof window === 'undefined') return '#2b2530';
      const computedStyle = getComputedStyle(document.documentElement);
      return computedStyle.getPropertyValue('--foreground').trim() || '#2b2530';
    };

    foregroundColorRef.current = getForegroundColor();

    // ===== Tạo ngôi sao =====
    const numStars = 100; // Có thể tăng lên 5000
    const stars: Star[] = [];

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * 100, // %
        y: Math.random() * 100, // %
        size: Math.random() * 3 + 0.5, // px
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.6 + 0.2,
        phase: Math.random() * Math.PI * 2,
      });
    }
    starsRef.current = stars;

    // Theo dõi thay đổi theme
    const observer = new MutationObserver(() => {
      const color = getForegroundColor();
      foregroundColorRef.current = color;
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // ===== Canvas animation =====
  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const render = (timestamp: number) => {
      timeRef.current = timestamp / 1000;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Vẽ các ngôi sao
      const stars = starsRef.current;
      const color = foregroundColorRef.current;
      const width = canvas.width;
      const height = canvas.height;

      // Chuyển đổi màu sang RGB để dễ dàng thay đổi opacity
      const tempDiv = document.createElement('div');
      tempDiv.style.color = color;
      document.body.appendChild(tempDiv);
      const computedColor = getComputedStyle(tempDiv).color;
      document.body.removeChild(tempDiv);

      // Parse RGB
      const rgbMatch = computedColor.match(/\d+/g);
      const r = rgbMatch ? parseInt(rgbMatch[0]) : 43;
      const g = rgbMatch ? parseInt(rgbMatch[1]) : 37;
      const b = rgbMatch ? parseInt(rgbMatch[2]) : 48;

      for (const star of stars) {
        const x = (star.x / 100) * width;
        const y = (star.y / 100) * height;

        // Twinkle effect
        const twinkle = Math.sin(timeRef.current * star.speed + star.phase);
        const opacity = star.opacity * (0.6 + 0.4 * twinkle);

        const size = star.size;
        const alpha = Math.min(opacity, 1);

        // Vẽ sao với glow nếu đủ lớn
        if (size > 1.5) {
          // Glow
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 4);
          gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.8})`);
          gradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${alpha * 0.3})`);
          gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, size * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        // Core của ngôi sao
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(render);
    };

    render(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-30">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}
