import { Code, Wrench, Languages } from 'lucide-react';
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
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import { useLanguage } from '@/app/contexts/LanguageContext';

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
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation direction="up" delay={0.1} duration={0.6}>
          <div className="text-3xl md:text-4xl font-bold text-center mb-12">
            <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground transition-all duration-300 hover:text-normal-blue hover:-translate-y-0.5 hover:scale-105 inline-block">
              {t('skills.title')}
            </h1>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Programming Languages */}
          <ScrollAnimation direction="left" delay={0.2} duration={0.6}>
            <div className="bg-background/50 rounded-xl p-6 border border-border transition-all shadow-border-lg hover:shadow-border-md group h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-normal-red/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Languages className="w-5 h-5 text-normal-red" />
                </div>
                <h3 className="text-xl font-semibold text-normal-red">{t('skills.languages')}</h3>
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
          </ScrollAnimation>

          {/* Frameworks */}
          <ScrollAnimation direction="up" delay={0.3} duration={0.6}>
            <div className="bg-background/50 rounded-xl p-6 border border-border transition-all shadow-border-lg hover:shadow-border-md group h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-normal-cyan/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-5 h-5 text-normal-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-normal-cyan">{t('skills.frameworks')}</h3>
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
          </ScrollAnimation>

          {/* Tools & Database */}
          <ScrollAnimation direction="right" delay={0.4} duration={0.6}>
            <div className="bg-background/50 rounded-xl p-6 border border-border transition-all shadow-border-lg hover:shadow-border-md group h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-normal-magenta/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="w-5 h-5 text-normal-magenta" />
                </div>
                <h3 className="text-xl font-semibold text-normal-magenta">{t('skills.tools')}</h3>
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
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
