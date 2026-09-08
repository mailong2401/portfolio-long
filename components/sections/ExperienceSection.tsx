import {
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiSupabase
} from 'react-icons/si';

const experiences = [
  {
    company: 'Hitek Group',
    position: 'Thực tập sinh',
    period: '10/2025 - 1/2026',
    description: 'Xây dựng và tự thiết kế giao diện website Hitek Flycam và Hitek bằng nextjs và supabase',
    logo: 'https://hitekgroup.vn/wp-content/uploads/2022/03/Logo-HITEK.png',
    technologies: [
      {
        name: 'Next.js',
        icon: SiNextdotjs,
        color: 'text-white'
      },
      {
        name: 'Node.js',
        icon: SiNodedotjs,
        color: 'text-green-500'
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
        color: 'text-blue-600'
      },
      {
        name: 'Supabase',
        icon: SiSupabase,
        color: 'text-emerald-400'
      }
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-3xl md:text-4xl font-bold text-center mb-12">
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground transition-all duration-300 hover:text-normal-blue hover:-translate-y-0.5 hover:scale-105 inline-block">
            Kỹ năng & Công nghệ
          </h1>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/30 transition-all shadow-border-sm hover:shadow-border-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center gap-4">
                  {/* Logo */}
                  {exp.logo && (
                    <div className="flex-shrink-0">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-12 h-12 object-contain rounded-lg bg-white/5 p-1 border border-border/30"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.position}</h3>
                    <p className="text-normal-blue font-medium">{exp.company}</p>
                  </div>
                </div>
                <span className="text-primary-dim-fg text-sm mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-primary-dim-fg mb-4">{exp.description}</p>

              {/* Technologies với icon */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-2 px-3 backdrop-blur-sm py-1.5 bg-background/15 rounded-full border border-border/30 shadow-border-md hover:shadow-border-lg transition-all hover:scale-105"
                  >
                    <tech.icon className={`w-4 h-4 ${tech.color}`} />
                    <span className="text-xs text-primary-dim-fg">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
