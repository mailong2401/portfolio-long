import Image from 'next/image';
import { Terminal } from 'lucide-react';

export default function Avatar() {
  return (
    <div className="relative group">
      <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-border p-1 shadow-lg shadow-primary-fg/10 group-hover:shadow-primary-fg/20 transition-all duration-300 group-hover:scale-105">
        <div className="w-full h-full rounded-full bg-primary-bg flex items-center justify-center overflow-hidden relative">
          <Image
            src="/images/avatar.png"
            alt="Mai Dương Long"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-fg/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
      <div className="absolute -bottom-1 -right-2 bg-primary-bg border-2 border-button-bg rounded-full p-2 shadow-lg shadow-primary-fg/10 group-hover:shadow-primary-fg/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
        <Terminal className="w-8 h-8 text-primary-fg group-hover:text-normal-magenta transition-colors duration-300" />
      </div>
    </div>
  );
}
