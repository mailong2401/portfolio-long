'use client';

import Image from 'next/image';

export default function PlanetMars() {
  return (
    <div className="fixed left-8 md:left-16 top-1/5 md:top-1/7 pointer-events-none z-0 opacity-40">
      {/* Container chính */}
      <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] lg:w-[560px] lg:h-[560px]">
        {/* Quỹ đạo hiển thị */}
        <div className="absolute inset-0 rounded-full border border-red-500/10 animate-rotate-slow" style={{ animationDuration: '45s' }} />
        <div className="absolute inset-[-15%] rounded-full border border-red-500/5 animate-rotate-slow" style={{ animationDuration: '55s', animationDirection: 'reverse' }} />
        <div className="absolute inset-[-30%] rounded-full border border-orange-500/5 animate-rotate-slow" style={{ animationDuration: '65s' }} />

        {/* Planet Mars với CSS animation */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] md:w-[260px] md:h-[260px] lg:w-[340px] lg:h-[340px] animate-mars-orbit"
        >
          <div className="relative w-full h-full animate-mars-rotate">
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

            {/* Glow effects */}
            <div className="absolute inset-[-20%] rounded-full bg-red-500/15 blur-3xl animate-pulse-slow" />
            <div className="absolute inset-[-40%] rounded-full bg-orange-500/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <div className="absolute inset-[-60%] rounded-full bg-yellow-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

            {/* Orbital rings */}
            <div className="absolute inset-[-25%] rounded-full border border-red-400/25 animate-rotate-slow" />
            <div className="absolute inset-[-45%] rounded-full border border-orange-400/15 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '50s' }} />
            <div className="absolute inset-[-65%] rounded-full border border-red-300/10 animate-rotate-slow" style={{ animationDuration: '60s' }} />

            {/* Surface details */}
            <div className="absolute top-[20%] right-[25%] w-[15%] h-[10%] rounded-full bg-red-600/20 blur-sm animate-pulse-slow" />
            <div className="absolute bottom-[30%] left-[20%] w-[20%] h-[15%] rounded-full bg-orange-600/15 blur-sm animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-[50%] left-[60%] w-[12%] h-[8%] rounded-full bg-red-500/20 blur-sm animate-pulse-slow" style={{ animationDelay: '2.5s' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
