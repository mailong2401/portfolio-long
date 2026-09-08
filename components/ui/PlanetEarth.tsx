import Image from 'next/image';

export default function PlanetEarth() {
  return (
    <div className="fixed right-1 md:right-16 top-1/9 pointer-events-none z-0">
      {/* Container chính */}
      <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
        {/* Quỹ đạo hiển thị */}
        <div className="absolute inset-0 rounded-full border border-blue-500/10 animate-rotate-slow" style={{ animationDuration: '40s' }} />
        <div className="absolute inset-[-15%] rounded-full border border-blue-500/5 animate-rotate-slow" style={{ animationDuration: '50s', animationDirection: 'reverse' }} />

        {/* Planet Earth với CSS animation */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 animate-earth-orbit"
        >
          <div className="relative w-full h-full animate-earth-rotate">
            {/* Earth image */}
            <div className="earth-image relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-blue-500/20">
              <Image
                src="/images/planet-earth.png"
                alt="Planet Earth"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Glow effects */}
            <div className="absolute inset-[-20%] rounded-full bg-blue-500/10 blur-3xl animate-pulse-slow" />
            <div className="absolute inset-[-40%] rounded-full bg-cyan-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <div className="absolute inset-[-60%] rounded-full bg-green-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

            {/* Orbital rings */}
            <div className="absolute inset-[-25%] rounded-full border border-blue-400/20 animate-rotate-slow" />
            <div className="absolute inset-[-45%] rounded-full border border-blue-400/10 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '50s' }} />
            <div className="absolute inset-[-65%] rounded-full border border-green-400/5 animate-rotate-slow" style={{ animationDuration: '60s' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
