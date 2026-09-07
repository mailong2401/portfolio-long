'use client';

import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
}

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  delay: string;
  duration: string;
  angle: number;
  length: number;
}

export default function StarField() {
  const [stars, setStars] = useState<Star[]>([]);
  const [foregroundColor, setForegroundColor] = useState<string>('#2b2530');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Lấy màu foreground từ CSS variable (chỉ chạy ở client)
    const getForegroundColor = () => {
      if (typeof window === 'undefined') return '#2b2530';
      const computedStyle = getComputedStyle(document.documentElement);
      return computedStyle.getPropertyValue('--foreground').trim() || '#2b2530';
    };

    setForegroundColor(getForegroundColor());

    // ===== Tạo ngôi sao =====
    const newStars: Star[] = [];
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
      const size = Math.random() * 6 + 0.5;
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: size,
        delay: `${Math.random() * 5}s`,
        duration: `${Math.random() * 3 + 2}s`,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }
    setStars(newStars);

    // Theo dõi thay đổi theme
    const observer = new MutationObserver(() => {
      const color = getForegroundColor();
      setForegroundColor(color);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Không render gì khi chưa mount (tránh SSR mismatch)
  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-30">
      {/* Ngôi sao */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: foregroundColor,
            boxShadow: star.size > 2 ? `0 0 ${star.size * 4}px ${foregroundColor}40` : 'none',
            animationDelay: star.delay,
            animationDuration: star.duration,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}
