'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function PlanetMars() {
  const marsRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    let angle = 0;
    const radiusX = 50;
    const radiusY = 60;
    const speed = 0.0018;

    const animate = () => {
      if (!marsRef.current || !orbitRef.current) return;

      angle += speed;

      // Vị trí trên quỹ đạo elip
      const x = Math.cos(angle) * radiusX;
      const y = Math.sin(angle) * radiusY;

      // Áp dụng vị trí
      marsRef.current.style.transform = `translate(${x}px, ${y}px)`;

      // Xoay nhẹ Sao Hỏa
      const rotation = Math.sin(angle * 1.5) * 3;
      marsRef.current.style.rotate = `${rotation}deg`;

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed left-8 md:left-16 top-1/3 pointer-events-none z-0  opacity-40">
      {/* Container chính - lớn hơn Earth */}
      <div
        ref={orbitRef}
        className="relative w-72 h-72 md:w-[420px] md:h-[420px] lg:w-[560px] lg:h-[560px]"
      >
        <div className="absolute inset-0 rounded-full border border-red-500/10 animate-rotate-slow" style={{ animationDuration: '45s' }} />
        <div className="absolute inset-[-15%] rounded-full border border-red-500/5 animate-rotate-slow" style={{ animationDuration: '55s', animationDirection: 'reverse' }} />
        <div className="absolute inset-[-30%] rounded-full border border-orange-500/5 animate-rotate-slow" style={{ animationDuration: '65s' }} />

        {/* Planet Mars */}
        <div
          ref={marsRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] md:w-[260px] md:h-[260px] lg:w-[340px] lg:h-[340px] transition-transform duration-100 ease-linear"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="relative w-full h-full">
            {/* Mars image */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-red-500/20">
              <Image
                src="/images/planet-mars.png"
                alt="Planet Mars"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute inset-[-20%] rounded-full bg-red-500/15 blur-3xl animate-pulse-slow" />
            <div className="absolute inset-[-40%] rounded-full bg-orange-500/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <div className="absolute inset-[-60%] rounded-full bg-yellow-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

            <div className="absolute inset-[-25%] rounded-full border border-red-400/25 animate-rotate-slow" />
            <div className="absolute inset-[-45%] rounded-full border border-orange-400/15 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '50s' }} />
            <div className="absolute inset-[-65%] rounded-full border border-red-300/10 animate-rotate-slow" style={{ animationDuration: '60s' }} />

            <div className="absolute top-[20%] right-[25%] w-[15%] h-[10%] rounded-full bg-red-600/20 blur-sm animate-pulse-slow" />
            <div className="absolute bottom-[30%] left-[20%] w-[20%] h-[15%] rounded-full bg-orange-600/15 blur-sm animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-[50%] left-[60%] w-[12%] h-[8%] rounded-full bg-red-500/20 blur-sm animate-pulse-slow" style={{ animationDelay: '2.5s' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
