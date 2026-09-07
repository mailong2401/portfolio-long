'use client';

import { SiNextdotjs, SiQt, SiNodedotjs, SiSpringboot } from 'react-icons/si';
import { FaFlutter } from 'react-icons/fa6';

const techs = [
  { name: 'Quickshell', icon: SiQt, color: 'text-normal-green' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-normal-black' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-normal-green' },
  { name: 'Flutter', icon: FaFlutter, color: 'text-normal-blue' },
  { name: 'Spring Boot', icon: SiSpringboot, color: 'text-normal-green' },
];

export default function TechStack() {
  return (
    <div className="mb-6">
      <p className="text-sm text-primary-dim-fg text-center mb-3 flex items-center justify-center gap-2">
        <span className="w-8 h-px bg-button-bg" />
        Tech Stack yêu thích
        <span className="w-8 h-px bg-button-bg" />
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 backdrop-blur-sm py-1.5 bg-background/15 rounded-full border border-border/30 shadow-border-md hover:shadow-border-lg"
          >
            <tech.icon className={`w-4 h-4 ${tech.color}`} />
            <span className="text-xs text-primary-dim-fg">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
