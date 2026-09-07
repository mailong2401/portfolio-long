import Image from 'next/image';

export default function Astronaut() {
  return (
    <div className="fixed right-4 md:right-20 bottom-4 md:bottom-20 pointer-events-none z-0">
      <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-40 md:w-44 md:h-56 lg:w-56 lg:h-72 animate-astronaut-float">
          <div className="relative w-full h-full animate-astronaut-rotate">
            <div className="relative w-full h-full overflow-hidden  transition-shadow duration-500">
              <Image
                src="/images/astronaut.png"
                alt="Astronaut"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 8rem, (max-width: 1024px) 11rem, 14rem"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
