'use client';

import Image from 'next/image';
import { Terminal } from 'lucide-react';

export default function Avatar() {
  return (
    <div className="relative group">
      <div className="w-50 h-50 rounded-full bg-border p-1 shadow-lg">
        <div className="w-full h-full rounded-full bg-primary-bg flex items-center justify-center overflow-hidden relative">
          <Image
            src="/images/avatar.png"
            alt="Mai Dương Long"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="absolute -bottom-2 -right-2 bg-primary-bg border border-button-bg rounded-full p-1.5">
        <Terminal className="w-4 h-4 text-primary-fg" />
      </div>
    </div>
  );
}
