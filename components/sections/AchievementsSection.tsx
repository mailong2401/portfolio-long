'use client';

import { Award, Rocket, BookOpen } from 'lucide-react';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-16 px-4 bg-primary-dim-bg/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-normal-red via-normal-yellow to-normal-magenta bg-clip-text text-transparent">
            Thành tích
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-primary-dim-bg/20 rounded-xl border border-border/30 hover:border-normal-yellow/50 transition-all shadow-border-sm hover:shadow-border-md">
            <Award className="w-12 h-12 text-normal-yellow mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-primary-fg">10+</h3>
            <p className="text-primary-dim-fg">Dự án hoàn thành</p>
          </div>
          <div className="text-center p-6 bg-primary-dim-bg/20 rounded-xl border border-border/30 hover:border-normal-green/50 transition-all shadow-border-sm hover:shadow-border-md">
            <Rocket className="w-12 h-12 text-normal-green mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-primary-fg">5+</h3>
            <p className="text-primary-dim-fg">Startup hợp tác</p>
          </div>
          <div className="text-center p-6 bg-primary-dim-bg/20 rounded-xl border border-border/30 hover:border-normal-magenta/50 transition-all shadow-border-sm hover:shadow-border-md">
            <BookOpen className="w-12 h-12 text-normal-magenta mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-primary-fg">15+</h3>
            <p className="text-primary-dim-fg">Blog posts</p>
          </div>
        </div>
      </div>
    </section>
  );
}
