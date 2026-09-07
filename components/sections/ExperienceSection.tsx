'use client';

const experiences = [
  {
    company: 'Tech Corp',
    position: 'Full Stack Developer',
    period: '2022 - Present',
    description: 'Xây dựng và phát triển các ứng dụng web và mobile sử dụng React, Next.js và Node.js.',
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript']
  },
  {
    company: 'Startup Studio',
    position: 'Mobile Developer',
    period: '2021 - 2022',
    description: 'Phát triển ứng dụng mobile đa nền tảng sử dụng Flutter và React Native.',
    technologies: ['Flutter', 'React Native', 'Dart', 'Firebase']
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-4 bg-primary-dim-bg/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-normal-red via-normal-yellow to-normal-magenta bg-clip-text text-transparent">
            Kinh nghiệm làm việc
          </span>
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-primary-dim-bg/20 rounded-xl p-6 border border-border/30 hover:border-normal-blue/50 transition-all shadow-border-sm hover:shadow-border-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary-fg">{exp.position}</h3>
                  <p className="text-normal-blue font-medium">{exp.company}</p>
                </div>
                <span className="text-primary-dim-fg text-sm mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-primary-dim-fg mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-background/50 rounded-full text-xs text-primary-fg border border-border/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
