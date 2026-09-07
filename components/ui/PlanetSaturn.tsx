import Image from 'next/image';

export default function PlanetSaturn() {
  return (
    <div className="fixed left-2/3 md:left-4/5 -translate-x-1/2 top-3/5 pointer-events-none z-0 opacity-40">
      {/* Container chính - hình chữ nhật theo tỷ lệ ảnh 760:312 */}
      <div className="relative w-[600px] h-[250px] md:w-[900px] md:h-[370px] lg:w-[1200px] lg:h-[493px]">
        {/* Quỹ đạo hiển thị - màu vàng đặc trưng của Sao Thổ */}
        <div className="absolute inset-0 rounded-full border border-yellow-500/10 animate-rotate-slow" style={{ animationDuration: '60s' }} />
        <div className="absolute inset-[-15%] rounded-full border border-yellow-500/5 animate-rotate-slow" style={{ animationDuration: '70s', animationDirection: 'reverse' }} />
        <div className="absolute inset-[-30%] rounded-full border border-orange-400/5 animate-rotate-slow" style={{ animationDuration: '80s' }} />

        {/* Planet Saturn với CSS animation */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[230px] md:w-[840px] md:h-[345px] lg:w-[1120px] lg:h-[460px] animate-saturn-orbit"
        >
          <div className="relative w-full h-full animate-saturn-rotate">
            {/* Saturn image - không bo tròn để giữ vành đai */}
            <div className="relative w-full h-full overflow-visible">
              <Image
                src="/images/planet-saturn.png"
                alt="Planet Saturn"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 560px, (max-width: 1024px) 840px, 1120px"
              />
            </div>

            {/* Glow effects - màu vàng cam */}
            <div className="absolute inset-[-30%] rounded-full bg-yellow-500/15 blur-3xl animate-pulse-slow" />
            <div className="absolute inset-[-50%] rounded-full bg-orange-500/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <div className="absolute inset-[-70%] rounded-full bg-amber-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

            {/* Orbital rings */}
            <div className="absolute inset-[-25%] rounded-full border border-yellow-400/20 animate-rotate-slow" />
            <div className="absolute inset-[-45%] rounded-full border border-orange-400/10 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '50s' }} />
            <div className="absolute inset-[-65%] rounded-full border border-yellow-300/5 animate-rotate-slow" style={{ animationDuration: '60s' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
