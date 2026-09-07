'use client';

import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Portfolio cá nhân với thiết kế độc đáo, tích hợp Arch Linux theme.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    link: '#'
  },
  {
    title: 'E-commerce App',
    description: 'Ứng dụng thương mại điện tử với đầy đủ tính năng giỏ hàng, thanh toán.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#'
  }
];

export default function ProjectsSection() {
  return (
    <section id="opensource" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-normal-red via-normal-yellow to-normal-magenta bg-clip-text text-transparent">
            Dự án tiêu biểu
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-primary-dim-bg/20 rounded-xl p-6 border border-border/30 hover:border-normal-yellow/50 transition-all shadow-border-sm hover:shadow-border-md group">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-primary-fg">{project.title}</h3>
                <a href={project.link} className="text-primary-dim-fg hover:text-normal-blue transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-primary-dim-fg mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
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
