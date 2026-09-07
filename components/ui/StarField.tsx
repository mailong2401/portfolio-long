'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  seed: number;
  twinkleSpeed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  active: boolean;
  resetTimer: number;
  angle: number;
  seed: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const rgbRef = useRef<{ r: number; g: number; b: number }>({ r: 43, g: 37, b: 48 });
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // ===== Lấy màu foreground 1 lần =====
    const getForegroundRGB = () => {
      const computedStyle = getComputedStyle(document.documentElement);
      const color = computedStyle.getPropertyValue('--foreground').trim() || '#2b2530';

      let hex = color.replace('#', '');
      if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
      }
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return { r, g, b };
    };

    // Lấy màu ban đầu
    rgbRef.current = getForegroundRGB();

    // Theo dõi thay đổi theme
    const observer = new MutationObserver(() => {
      rgbRef.current = getForegroundRGB();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // ===== Canvas với DPI tối ưu =====
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';

      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // ===== Tạo ngôi sao =====
    const createStars = () => {
      const stars: Star[] = [];
      const numStars = 40; // Giảm từ 50 xuống 40

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2.5 + 0.5,
          seed: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.03 + 0.005,
        });
      }

      return stars;
    };

    // ===== Tạo sao băng =====
    const createShootingStars = () => {
      const shootingStars: ShootingStar[] = [];
      const count = 3; // Giảm từ 6 xuống 3

      for (let i = 0; i < count; i++) {
        shootingStars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight * 0.6,
          length: Math.random() * 100 + 50,
          speed: Math.random() * 6 + 3,
          opacity: 0,
          active: false,
          resetTimer: Math.random() * 300 + 100,
          angle: Math.random() * 60 + 20,
          seed: Math.random() * 1000,
        });
      }
      return shootingStars;
    };

    starsRef.current = createStars();
    shootingStarsRef.current = createShootingStars();

    let animationId: number;

    // ===== Vẽ ngôi sao (tối ưu) =====
    const drawStar = (ctx: CanvasRenderingContext2D, star: Star, rgb: { r: number; g: number; b: number }, frame: number) => {
      // Dùng sin thay vì random
      const wave = Math.sin(frame * star.twinkleSpeed + star.seed);
      const opacity = 0.3 + wave * 0.35;
      const size = star.size * (0.8 + wave * 0.2);

      // Vẽ ngôi sao
      ctx.beginPath();
      ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
      ctx.fill();

      // Glow effect - chỉ cho sao thật lớn (giảm ngưỡng)
      if (star.size > 2.3) {
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, size * 2.5 // Giảm từ 4 xuống 2.5
        );
        gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity * 0.2})`);
        gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
        ctx.beginPath();
        ctx.arc(star.x, star.y, size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    };

    // ===== Vẽ sao băng (tối ưu) =====
    const drawShootingStar = (ctx: CanvasRenderingContext2D, shootingStar: ShootingStar, rgb: { r: number; g: number; b: number }, width: number, height: number) => {
      if (!shootingStar.active) {
        shootingStar.resetTimer -= 1;
        if (shootingStar.resetTimer <= 0) {
          shootingStar.active = true;
          shootingStar.x = Math.random() * width * 0.9 + width * 0.05;
          shootingStar.y = Math.random() * height * 0.6;
          shootingStar.opacity = 1;
          shootingStar.angle = Math.random() * 60 + 20;
          shootingStar.resetTimer = Math.random() * 400 + 200;
          shootingStar.length = Math.random() * 100 + 50;
          shootingStar.speed = Math.random() * 6 + 3;
        }
        return;
      }

      // Tính toán hướng di chuyển
      const angleRad = (shootingStar.angle * Math.PI) / 180;
      const dx = -Math.cos(angleRad) * shootingStar.speed;
      const dy = Math.sin(angleRad) * shootingStar.speed;

      // Di chuyển
      shootingStar.x += dx;
      shootingStar.y += dy;
      shootingStar.opacity -= 0.012;

      const endX = shootingStar.x - Math.cos(angleRad) * shootingStar.length;
      const endY = shootingStar.y + Math.sin(angleRad) * shootingStar.length;

      // Vẽ sao băng (giảm độ phức tạp)
      const gradient = ctx.createLinearGradient(
        shootingStar.x, shootingStar.y,
        endX, endY
      );

      gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${shootingStar.opacity})`);
      gradient.addColorStop(0.5, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${shootingStar.opacity * 0.4})`);
      gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);

      ctx.beginPath();
      ctx.moveTo(shootingStar.x, shootingStar.y);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Glow nhỏ cho đầu sao băng
      const glowGradient = ctx.createRadialGradient(
        shootingStar.x, shootingStar.y, 0,
        shootingStar.x, shootingStar.y, 20 // Giảm từ 30 xuống 20
      );
      glowGradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${shootingStar.opacity * 0.2})`);
      glowGradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
      ctx.beginPath();
      ctx.arc(shootingStar.x, shootingStar.y, 20, 0, Math.PI * 2);
      ctx.fillStyle = glowGradient;
      ctx.fill();

      // Reset
      if (shootingStar.opacity <= 0 ||
        shootingStar.x < -100 ||
        shootingStar.x > width + 100 ||
        shootingStar.y > height + 100) {
        shootingStar.active = false;
        shootingStar.opacity = 0;
        shootingStar.resetTimer = Math.random() * 400 + 200;
        shootingStar.x = Math.random() * width * 0.9 + width * 0.05;
        shootingStar.y = Math.random() * height * 0.6;
      }
    };

    // ===== Animation loop với giới hạn 60 FPS =====
    const animate = (time: number) => {
      if (!ctx || !canvas) return;

      // Giới hạn 60 FPS
      if (time - lastTimeRef.current < 1000 / 60) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      lastTimeRef.current = time;

      const width = window.innerWidth;
      const height = window.innerHeight;
      const rgb = rgbRef.current;
      const frame = frameCountRef.current;

      ctx.clearRect(0, 0, width, height);

      // Vẽ các ngôi sao
      starsRef.current.forEach((star) => {
        drawStar(ctx, star, rgb, frame);
      });

      // Vẽ sao băng
      shootingStarsRef.current.forEach((shootingStar) => {
        drawShootingStar(ctx, shootingStar, rgb, width, height);
      });

      frameCountRef.current++;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-40"
      style={{ background: 'transparent' }}
    />
  );
}
