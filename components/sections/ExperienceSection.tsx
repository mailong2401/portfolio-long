'use client';

import {
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiSupabase,
} from 'react-icons/si';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import { useLanguage } from '@/app/contexts/LanguageContext';

const experiences = [
  {
    company: 'Hitek Group',
    position: 'Thực tập sinh',
    period: '10/2025 - 1/2026',
    description: 'Xây dựng và tự thiết kế giao diện website Hitek Flycam và Hitek bằng Next.js và Supabase.',
    logo: 'https://hitekgroup.vn/wp-content/uploads/2022/03/Logo-HITEK.png',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-normal-green' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-normal-blue' },
      { name: 'Supabase', icon: SiSupabase, color: 'text-emerald-400' },
    ],
  },
];

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <ScrollAnimation direction="up" delay={0.1} duration={0.6}>
          <div className="text-3xl md:text-4xl font-bold text-center mb-12">
            <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground transition-all duration-300 hover:text-normal-blue hover:-translate-y-0.5 hover:scale-105 inline-block">
              {t('experience.title')}
            </h1>
          </div>
        </ScrollAnimation>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ScrollAnimation
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={0.2 + index * 0.15}
              duration={0.6}
            >
              <div className="bg-background/50 rounded-xl p-6 border border-border/30 transition-all shadow-border-sm hover:shadow-border-md hover:border-normal-blue/30 group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-4">
                    {/* Logo */}
                    {exp.logo && (
                      <div className="flex-shrink-0">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-12 h-12 object-contain rounded-lg bg-white/5 p-1 border border-border/30 group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-normal-red transition-colors">
                        {t('experience.position')}
                      </h3>
                      <p className="text-normal-blue font-medium group-hover:text-normal-cyan transition-colors">
                        {t('experience.company')}
                      </p>
                    </div>
                  </div>
                  <span className="text-primary-dim-fg text-sm mt-2 md:mt-0 bg-background/30 px-3 py-1 rounded-full border border-border/30">
                    {t('experience.period')}
                  </span>
                </div>

                <p className="text-primary-dim-fg mb-4 leading-relaxed">
                  {t('experience.description')}
                </p>

                {/* Technologies với icon */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-2 px-3 backdrop-blur-sm py-1.5 bg-background/15 rounded-full border border-border/30 shadow-border-sm hover:shadow-border-md transition-all hover:scale-105"
                    >
                      <tech.icon className={`w-4 h-4 ${tech.color}`} />
                      <span className="text-xs text-primary-dim-fg">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
