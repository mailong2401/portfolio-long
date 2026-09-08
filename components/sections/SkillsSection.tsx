import { Code, Server, Database, Wrench, Languages } from 'lucide-react';
import {
  FaFlutter,
  FaGithub,
  FaDocker,
  FaLinux,
  FaPython,
  FaJava,
  FaNodeJs
} from 'react-icons/fa6';
import {
  SiNextdotjs,
  SiNodedotjs,
  SiArchlinux,
  SiSpringboot,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiQt,
  SiNestjs,
  SiRedis,
  SiPostgresql,
  SiMysql,
  SiNeovim,
  SiCplusplus,
  SiDart
} from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";

const skills = {
  languages: [
    { name: 'TypeScript', icon: SiTypescript, color: 'text-normal-blue' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-normal-yellow' },
    { name: 'Qml', icon: SiQt, color: 'text-normal-green' },
    { name: 'C++', icon: SiCplusplus, color: 'text-normal-blue' },
    { name: 'C#', icon: TbBrandCSharp, color: 'text-normal-magenta' },
    { name: 'Java', icon: FaJava, color: 'text-normal-red' },
    { name: 'Python', icon: FaPython, color: 'text-normal-cyan' },
    { name: 'Dart', icon: SiDart, color: 'text-normal-cyan' },
  ],
  frameworks: [
    { name: 'NestJS', icon: SiNestjs, color: 'text-normal-red' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-primary-fg' },
    { name: 'Flutter', icon: FaFlutter, color: 'text-normal-blue' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-normal-green' },
    { name: 'Spring Boot', icon: SiSpringboot, color: 'text-normal-green' },
    { name: 'React', icon: SiReact, color: 'text-normal-cyan' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-normal-cyan' },
  ],
  tools: [
    { name: 'Linux', icon: FaLinux, color: 'text-normal-yellow' },
    { name: 'Arch Linux', icon: SiArchlinux, color: 'text-normal-magenta' },
    { name: 'Docker', icon: FaDocker, color: 'text-normal-blue' },
    { name: 'Redis', icon: SiRedis, color: 'text-normal-red' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-normal-blue' },
    { name: 'MySQL', icon: SiMysql, color: 'text-normal-cyan' },
    { name: 'Neovim', icon: SiNeovim, color: 'text-normal-green' },
    { name: 'Git', icon: FaGithub, color: 'text-primary-fg' },
  ]
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-3xl md:text-4xl font-bold text-center mb-12">
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground transition-all duration-300 hover:text-normal-blue hover:-translate-y-0.5 hover:scale-105 inline-block">
            Kỹ năng & Công nghệ
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Programming Languages */}
          <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border transition-all shadow-border-lg hover:shadow-border-md group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-normal-red/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Languages className="w-5 h-5 text-normal-red" />
              </div>
              <h3 className="text-xl font-semibold text-normal-red">Ngôn ngữ</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-background/50 rounded-full border border-border transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  <skill.icon className={`w-4 h-4 ${skill.color}`} />
                  <span className="text-sm text-primary-dim-fg">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border transition-all shadow-border-lg hover:shadow-border-md group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-normal-cyan/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Code className="w-5 h-5 text-normal-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-normal-cyan">Framework</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-background/50 rounded-full border border-border transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  <skill.icon className={`w-4 h-4 ${skill.color}`} />
                  <span className="text-sm text-primary-dim-fg">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Database */}
          <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border transition-all shadow-border-lg hover:shadow-border-md group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-normal-magenta/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Wrench className="w-5 h-5 text-normal-magenta" />
              </div>
              <h3 className="text-xl font-semibold text-normal-magenta">Tools & DB</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-background/50 rounded-full border border-border transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  <skill.icon className={`w-4 h-4 ${skill.color}`} />
                  <span className="text-sm text-primary-dim-fg">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
