'use client';

export default function TerminalInfo() {
  return (
    <div className="bg-primary-fg/5 rounded-xl p-4 font-mono text-sm border border-button-bg/30">
      <div className="flex items-center gap-2 text-primary-dim-fg mb-2">
        <span className="w-3 h-3 rounded-full bg-normal-red" />
        <span className="w-3 h-3 rounded-full bg-normal-yellow" />
        <span className="w-3 h-3 rounded-full bg-normal-green" />
        <span className="ml-2 text-primary-dim-fg">~/portfolio</span>
      </div>
      <div className="space-y-1 text-primary-fg">
        <p>
          <span className="text-normal-magenta">user@arch</span>:
          <span className="text-normal-blue">~</span>$ whoami
        </p>
        <p className="text-normal-green pl-4">Mai Dương Long - Full Stack Developer</p>
        <p>
          <span className="text-normal-magenta">user@arch</span>:
          <span className="text-normal-blue">~</span>$ neofetch
        </p>
        <div className="pl-4 text-primary-dim-fg text-xs space-y-0.5">
          <p>OS: Arch Linux x86_64</p>
          <p>Shell: zsh 5.9</p>
          <p>Editor: Neovim</p>
          <p>DE: Hyprland + Quickshell</p>
          <p>Passion: Creative UI/UX ✦</p>
        </div>
      </div>
    </div>
  );
}
