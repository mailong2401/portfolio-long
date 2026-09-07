'use client';

import { SiArchlinux } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border/30">
      <div className="max-w-7xl mx-auto text-center text-primary-dim-fg text-sm flex items-center justify-center gap-2">
        <span>© 2026 Mai Dương Long</span>
        <span>✦</span>
        <SiArchlinux className="w-3 h-3 text-normal-magenta/60" />
        <span className="font-mono"># powered by Arch Linux</span>
        <span>✦</span>
        <span className="font-mono"># Hyprland + Quickshell</span>
      </div>
    </footer>
  );
}
