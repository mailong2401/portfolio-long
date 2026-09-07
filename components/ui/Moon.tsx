'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Moon() {
  const moonRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    let angle = 0;
    const radius = 30; // Bán kính quỹ đạo
    const speed = 0.005; // Tốc độ quay

    const animate = () => {
      if (!moonRef.current || !orbitRef.current) return;

      angle += speed;

      // Tính toán vị trí trên quỹ đạo tròn
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      // Áp dụng vị trí
      moonRef.current.style.transform = `translate(${x}px, ${y}px)`;

      // Xoay nhẹ mặt trăng
      const rotation = Math.sin(angle * 2) * 5; // Xoay từ -5 đến 5 độ
      moonRef.current.style.rotate = `${rotation}deg`;

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed right-8 md:right-16 top-1/7 pointer-events-none z-0">
      {/* Container chính */}
      <div
        ref={orbitRef}
        className="relative w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96"
      >
        <div className="absolute inset-0 rounded-full border border-white/5 animate-rotate-slow" style={{ animationDuration: '30s' }} />
        <div className="absolute inset-[-20%] rounded-full border border-white/3 animate-rotate-slow" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />

        <div
          ref={moonRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 transition-transform duration-100 ease-linear"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="relative w-full h-full">
            {/* Moon image */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-white/5">
              <Image
                src="/images/moon-vec.png"
                alt="Moon"
                fill
                className="object-cover opacity-60"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
