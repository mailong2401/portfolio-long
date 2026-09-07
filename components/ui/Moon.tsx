'use client';

import Image from 'next/image';

export default function Moon() {
  return (
    <div className="fixed right-8 md:right-16 top-2/3 md:top-1/6 pointer-events-none z-0  opacity-70">
      {/* Container chính */}
      <div className="relative w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96">
        {/* Quỹ đạo hiển thị */}
        <div className="absolute inset-0 rounded-full border border-white/5 animate-rotate-slow" style={{ animationDuration: '30s' }} />
        <div className="absolute inset-[-20%] rounded-full border border-white/3 animate-rotate-slow" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />

        {/* Moon với CSS animation */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 animate-moon-orbit"
        >
          <div className="relative w-full h-full animate-moon-rotate">
            {/* Moon image */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-white/5">
              <Image
                src="/images/moon-vec.png"
                alt="Moon"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Glow effects */}
            <div className="absolute inset-[-20%] rounded-full bg-white/5 blur-3xl animate-pulse-slow" />
            <div className="absolute inset-[-40%] rounded-full bg-purple-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
