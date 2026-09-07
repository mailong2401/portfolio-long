'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
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
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Lấy màu foreground và chuyển sang RGB
    const getForegroundRGB = () => {
      const computedStyle = getComputedStyle(document.documentElement);
      const color = computedStyle.getPropertyValue('--foreground').trim() || '#2b2530';

      // Chuyển hex sang rgb
      let hex = color.replace('#', '');
      if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
      }
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return { r, g, b };
    };

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Tạo các ngôi sao
    const createStars = () => {
      const stars: Star[] = [];
      const numStars = 50;

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.5 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.02 + 0.005,
          twinkleSpeed: Math.random() * 0.03 + 0.005,
        });
      }

      return stars;
    };

    // Tạo sao băng
    const createShootingStars = () => {
      const shootingStars: ShootingStar[] = [];
      for (let i = 0; i < 6; i++) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.6,
          length: Math.random() * 100 + 50,
          speed: Math.random() * 6 + 3,
          opacity: 0,
          active: false,
          resetTimer: Math.random() * 300 + 100,
          angle: Math.random() * 60 + 20,
        });
      }
      return shootingStars;
    };

    starsRef.current = createStars();
    shootingStarsRef.current = createShootingStars();

    let frameCount = 0;
    let animationId: number;

    // Hàm vẽ ngôi sao
    const drawStar = (ctx: CanvasRenderingContext2D, star: Star, rgb: { r: number; g: number; b: number }) => {
      // Hiệu ứng nhấp nháy
      star.opacity += (Math.random() - 0.5) * star.twinkleSpeed * 2;
      star.opacity = Math.max(0.1, Math.min(1, star.opacity));

      const size = star.size * (0.8 + Math.sin(frameCount * star.twinkleSpeed) * 0.2);

      // Vẽ ngôi sao
      ctx.beginPath();
      ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${star.opacity})`;
      ctx.fill();

      // Glow effect cho sao lớn
      if (star.size > 1.5) {
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, size * 4
        );
        gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${star.opacity * 0.3})`);
        gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
        ctx.beginPath();
        ctx.arc(star.x, star.y, size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Cross glow cho sao rất lớn
      if (star.size > 2) {
        ctx.save();
        ctx.globalAlpha = star.opacity * 0.3;
        ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`;
        ctx.lineWidth = 0.5;

        for (let i = 0; i < 4; i++) {
          const angle = (i * Math.PI) / 4 + frameCount * 0.001;
          ctx.beginPath();
          ctx.moveTo(star.x - Math.cos(angle) * size * 2, star.y - Math.sin(angle) * size * 2);
          ctx.lineTo(star.x + Math.cos(angle) * size * 4, star.y + Math.sin(angle) * size * 4);
          ctx.stroke();
        }
        ctx.restore();
      }
    };

    // Hàm vẽ sao băng
    const drawShootingStar = (ctx: CanvasRenderingContext2D, shootingStar: ShootingStar, rgb: { r: number; g: number; b: number }) => {
      if (!shootingStar.active) {
        shootingStar.resetTimer -= 1;
        if (shootingStar.resetTimer <= 0) {
          shootingStar.active = true;
          shootingStar.x = Math.random() * canvas.width * 0.9 + canvas.width * 0.05;
          shootingStar.y = Math.random() * canvas.height * 0.6;
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

      // Di chuyển sao băng
      shootingStar.x += dx;
      shootingStar.y += dy;
      shootingStar.opacity -= 0.012;

      // Tính điểm cuối của sao băng
      const endX = shootingStar.x - Math.cos(angleRad) * shootingStar.length;
      const endY = shootingStar.y + Math.sin(angleRad) * shootingStar.length;

      // Vẽ sao băng - sử dụng rgba
      const gradient = ctx.createLinearGradient(
        shootingStar.x, shootingStar.y,
        endX, endY
      );

      gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${shootingStar.opacity})`);
      gradient.addColorStop(0.3, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${shootingStar.opacity * 0.7})`);
      gradient.addColorStop(0.7, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${shootingStar.opacity * 0.3})`);
      gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);

      ctx.beginPath();
      ctx.moveTo(shootingStar.x, shootingStar.y);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Vẽ tia sáng thứ hai mỏng hơn
      ctx.beginPath();
      ctx.moveTo(shootingStar.x - dx * 0.2, shootingStar.y - dy * 0.2);
      ctx.lineTo(endX - dx * 0.2, endY - dy * 0.2);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Glow cho đầu sao băng
      const glowGradient = ctx.createRadialGradient(
        shootingStar.x, shootingStar.y, 0,
        shootingStar.x, shootingStar.y, 30
      );
      glowGradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${shootingStar.opacity * 0.3})`);
      glowGradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
      ctx.beginPath();
      ctx.arc(shootingStar.x, shootingStar.y, 30, 0, Math.PI * 2);
      ctx.fillStyle = glowGradient;
      ctx.fill();

      // Reset sao băng
      if (shootingStar.opacity <= 0 ||
        shootingStar.x < -100 ||
        shootingStar.x > canvas.width + 100 ||
        shootingStar.y > canvas.height + 100) {
        shootingStar.active = false;
        shootingStar.opacity = 0;
        shootingStar.resetTimer = Math.random() * 400 + 200;
        shootingStar.x = Math.random() * canvas.width * 0.9 + canvas.width * 0.05;
        shootingStar.y = Math.random() * canvas.height * 0.6;
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const rgb = getForegroundRGB();

      // Vẽ các ngôi sao
      starsRef.current.forEach((star) => {
        drawStar(ctx, star, rgb);
      });

      // Vẽ sao băng
      shootingStarsRef.current.forEach((shootingStar) => {
        drawShootingStar(ctx, shootingStar, rgb);
      });

      frameCount++;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
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
