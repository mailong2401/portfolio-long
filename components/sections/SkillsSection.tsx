'use client';

import { Code, Server } from 'lucide-react';
import { FaFlutter, FaGithub } from 'react-icons/fa6';
import { SiNextdotjs, SiQt, SiNodedotjs, SiArchlinux, SiSpringboot, SiReact, SiTailwindcss } from 'react-icons/si';

const skills = {
  frontend: [
    { name: 'React', icon: SiReact, color: 'text-normal-cyan' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-normal-black' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-normal-cyan' },
    { name: 'Flutter', icon: FaFlutter, color: 'text-normal-blue' },
  ],
  backend: [
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-normal-green' },
    { name: 'Spring Boot', icon: SiSpringboot, color: 'text-normal-green' },
    { name: 'Quickshell', icon: SiQt, color: 'text-normal-green' },
  ],
  tools: [
    { name: 'Arch Linux', icon: SiArchlinux, color: 'text-normal-magenta' },
    { name: 'Git', icon: FaGithub, color: 'text-primary-fg' },
  ]
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-normal-red via-normal-yellow to-normal-magenta bg-clip-text text-transparent">
            Kỹ năng & Công nghệ
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="bg-primary-dim-bg/20 rounded-xl p-6 border border-border/30 hover:border-normal-red/50 transition-all shadow-border-sm hover:shadow-border-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-normal-red/20 rounded-lg">
                <Code className="w-5 h-5 text-normal-red" />
              </div>
              <h3 className="text-xl font-semibold text-primary-fg">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 px-3 py-2 bg-background/50 rounded-full border border-border/30">
                  <skill.icon className={`w-4 h-4 ${skill.color}`} />
                  <span className="text-sm text-primary-fg">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-primary-dim-bg/20 rounded-xl p-6 border border-border/30 hover:border-normal-green/50 transition-all shadow-border-sm hover:shadow-border-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-normal-green/20 rounded-lg">
                <Server className="w-5 h-5 text-normal-green" />
              </div>
              <h3 className="text-xl font-semibold text-primary-fg">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 px-3 py-2 bg-background/50 rounded-full border border-border/30">
                  <skill.icon className={`w-4 h-4 ${skill.color}`} />
                  <span className="text-sm text-primary-fg">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-primary-dim-bg/20 rounded-xl p-6 border border-border/30 hover:border-normal-magenta/50 transition-all shadow-border-sm hover:shadow-border-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-normal-magenta/20 rounded-lg">
                <FaGithub className="w-5 h-5 text-normal-magenta" />
              </div>
              <h3 className="text-xl font-semibold text-primary-fg">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 px-3 py-2 bg-background/50 rounded-full border border-border/30">
                  <skill.icon className={`w-4 h-4 ${skill.color}`} />
                  <span className="text-sm text-primary-fg">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
