'use client';

import { useEffect, useState } from 'react';

export default function TerminalInfo() {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Typing effect
  useEffect(() => {
    setIsVisible(true);

    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Sequential display of terminal lines
  useEffect(() => {
    if (textIndex < 4) {
      const timer = setTimeout(() => {
        setTextIndex(prev => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [textIndex]);

  const lines = [
    {
      prompt: 'user@arch',
      dir: '~',
      cmd: 'whoami',
      output: 'Mai Dương Long - Full Stack Developer',
      outputClass: 'text-normal-green'
    },
    {
      prompt: 'long@arch',
      dir: '~',
      cmd: 'neofetch',
      output: null,
      outputClass: ''
    }
  ];

  const systemInfo = [
    'OS: Arch Linux x86_64',
    'Shell: zsh 5.9',
    'Editor: Neovim',
    'DE: Hyprland + Quickshell',
    'Passion: Creative UI/UX ✦'
  ];

  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="relative bg-primary-fg/5 rounded-xl p-4 font-mono text-sm border border-button-bg/30 shadow-border-md hover:shadow-border-lg transition-all duration-300">
        {/* Window controls */}
        <div className="flex items-center gap-2 text-primary-dim-fg mb-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-normal-red hover:scale-110 transition-transform cursor-pointer" />
            <span className="w-3 h-3 rounded-full bg-normal-yellow hover:scale-110 transition-transform cursor-pointer" />
            <span className="w-3 h-3 rounded-full bg-normal-green hover:scale-110 transition-transform cursor-pointer" />
          </div>
          <span className="ml-2 text-primary-dim-fg/60 text-xs select-none">~/portfolio</span>
        </div>

        {/* Terminal content */}
        <div className="space-y-1.5 px-2 py-1.5 text-primary-fg relative">
          {/* Line 1: whoami */}
          <div className={`transition-all duration-500 ${textIndex >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
            <p className="flex flex-wrap items-center gap-1">
              <span className="text-normal-magenta font-bold">user@arch</span>
              <span className="text-primary-dim-fg">:</span>
              <span className="text-normal-blue">~</span>
              <span className="text-primary-dim-fg">$</span>
              <span className="text-primary-fg/80">whoami</span>
              {textIndex === 0 && (
                <span className={`inline-block w-2 h-4 bg-normal-magenta/70 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`} />
              )}
            </p>
            {textIndex >= 1 && (
              <p className={`text-normal-green pl-4 animate-fade-in font-medium`}>
                <span className="inline-block">Mai Dương Long</span>
                <span className="text-primary-dim-fg/60 ml-2">-</span>
                <span className="text-normal-cyan ml-2">Full Stack Developer</span>
                <span className="inline-block ml-1 animate-wiggle">🚀</span>
              </p>
            )}
          </div>

          {/* Line 2: neofetch */}
          <div className={`transition-all duration-500 ${textIndex >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
            <p className="flex flex-wrap items-center gap-1">
              <span className="text-normal-magenta font-bold">long@arch</span>
              <span className="text-primary-dim-fg">:</span>
              <span className="text-normal-blue">~</span>
              <span className="text-primary-dim-fg">$</span>
              <span className="text-primary-fg/80">neofetch</span>
              {textIndex === 1 && (
                <span className={`inline-block w-2 h-4 bg-normal-magenta/70 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`} />
              )}
            </p>
          </div>

          {/* System info */}
          {textIndex >= 2 && (
            <div className="pl-4 text-primary-dim-fg text-xs space-y-0.5 animate-fade-in">
              {systemInfo.map((info, idx) => (
                <p
                  key={idx}
                  className={`transition-all duration-300 hover:text-foreground cursor-default flex items-center gap-2 ${idx < textIndex - 1 ? 'opacity-100' : 'opacity-0'
                    }`}
                  style={{
                    transitionDelay: `${idx * 100}ms`,
                    opacity: idx < textIndex - 1 ? 1 : 0
                  }}
                >
                  <span className="text-normal-cyan/30">▸</span>
                  <span className="hover:translate-x-1 transition-transform duration-200 inline-block">
                    {info}
                  </span>
                </p>
              ))}

              {/* Final cursor */}
              {textIndex >= 3 && (
                <p className="flex items-center gap-1 mt-1">
                  <span className="text-normal-cyan/30">▸</span>
                  <span className={`inline-block w-2 h-3 bg-normal-magenta/70 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`} />
                </p>
              )}
            </div>
          )}

          {/* Animated border glow */}
          <div className="absolute -inset-px rounded-xl border border-border/50 group-hover:border-border transition-all duration-500 pointer-events-none" />
        </div>

        {/* Decorative ASCII art */}
        <div className="mt-3 pt-3 border-t border-button-bg/20 text-[10px] text-primary-dim-fg/30 font-mono select-none overflow-hidden">
          <div className="animate-scroll-text whitespace-nowrap">
            <span className="inline-block mr-8">✦</span>
            <span className="inline-block mr-8">┌─[ARCH]─[HYPRLAND]─[NEOVIM]─┐</span>
            <span className="inline-block mr-8">✦</span>
            <span className="inline-block mr-8">└─[CREATIVE]─[UI/UX]─[DEV]─┘</span>
            <span className="inline-block">✦</span>
          </div>
        </div>
      </div>
    </div>
  );
}
