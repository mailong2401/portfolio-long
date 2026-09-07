'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function PlanetEarth() {
  const earthRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    let angle = 0;
    const radiusX = 60; // Bán kính theo trục X
    const radiusY = 35; // Bán kính theo trục Y (tạo hình elip)
    const speed = 0.002; // Tốc độ rất chậm

    const animate = () => {
      if (!earthRef.current) return;

      angle += speed;

      // Vị trí trên quỹ đạo elip
      const x = Math.cos(angle) * radiusX;
      const y = Math.sin(angle) * radiusY;

      // Di chuyển
      earthRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;

      // Xoay nhẹ
      const rotation = Math.sin(angle * 1.5) * 3;
      const earthImg = earthRef.current.querySelector('.earth-image');
      if (earthImg) {
        (earthImg as HTMLElement).style.transform = `rotate(${rotation}deg)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed right-8 md:right-16 top-1/2 pointer-events-none z-0 w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]  opacity-60">

      <div className="absolute inset-0 rounded-full border border-blue-500/10 animate-rotate-slow" style={{ animationDuration: '40s' }} />
      <div className="absolute inset-[-15%] rounded-full border border-blue-500/5 animate-rotate-slow" style={{ animationDuration: '50s', animationDirection: 'reverse' }} />
      {/* Planet Earth */}
      <div
        ref={earthRef}
        className="absolute top-1/2 left-1/2 w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="relative w-full h-full">
          {/* Earth image */}
          <div className="earth-image relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-blue-500/20 transition-transform duration-300">
            <Image
              src="/images/planet-earth.png"
              alt="Planet Earth"
              fill
              className="object-cover"
              priority
            />
          </div>


        </div>
        <div className="absolute inset-[-20%] rounded-full bg-blue-500/10 blur-3xl animate-pulse-slow" />
        <div className="absolute inset-[-40%] rounded-full bg-cyan-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-[-60%] rounded-full bg-green-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

        {/* Orbital rings */}
        <div className="absolute inset-[-25%] rounded-full border border-blue-400/20 animate-rotate-slow" />
        <div className="absolute inset-[-45%] rounded-full border border-blue-400/10 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '50s' }} />
        <div className="absolute inset-[-65%] rounded-full border border-green-400/5 animate-rotate-slow" style={{ animationDuration: '60s' }} />
      </div>
    </div>
  );
}
