import { Award, Rocket, Trophy, Star, Code, Users, GitBranch } from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

interface Achievement {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const achievements: Achievement[] = [

  {
    id: 1,
    year: '2024',
    title: 'Top 12 Code War Hutech',
    description: 'Tham gia Code War 2024 Hutech',
    icon: <Code className="w-5 h-5" />,
    color: 'text-normal-cyan',
  },
  {
    id: 2,
    year: '2022',
    title: 'Học sinh giỏi cấp tỉnh',
    description: 'Tham gia học sinh giỏi cấp tỉnh môn tin học',
    icon: <Award className="w-5 h-5" />,
    color: 'text-normal-red',
  },
  {
    id: 3,
    year: '2020',
    title: 'Bắt đầu hành trình lập trình',
    description: 'Bắt đầu học lập trình và xây dựng các dự án đầu tay với JavaScript và React.',
    icon: <Users className="w-5 h-5" />,
    color: 'text-normal-magenta',
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <ScrollAnimation direction="up" delay={0.1} duration={0.6}>
          <div className="text-3xl md:text-4xl font-bold text-center mb-12">
            <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground transition-all duration-300 hover:text-normal-blue hover:-translate-y-0.5 hover:scale-105 inline-block">
              Thành tích & Cột mốc
            </h1>
          </div>
        </ScrollAnimation>

        {/* Timeline */}
        <div className="relative">
          {/* Đường dọc timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden md:block" />

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <ScrollAnimation
                key={achievement.id}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={0.2 + index * 0.1}
                duration={0.6}
              >
                <div className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                  {/* Năm - bên trái hoặc phải */}
                  <div className={`md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <div className="md:text-right px-4 py-2">
                      <span className="text-2xl md:text-3xl font-bold text-foreground">
                        {achievement.year}
                      </span>
                    </div>
                  </div>

                  {/* Nội dung */}
                  <div className={`md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/30 transition-all shadow-border-sm hover:shadow-border-md hover:border-normal-blue/30 w-full max-w-md">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg bg-background/50 ${achievement.color}`}>
                          {achievement.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {achievement.title}
                        </h3>
                      </div>
                      <p className="text-primary-dim-fg text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Stats Cards - Hiển thị thêm số liệu tổng quan */}
        <ScrollAnimation direction="up" delay={0.8} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-border/30 hover:border-normal-yellow/50 transition-all shadow-border-sm hover:shadow-border-md group">
              <Award className="w-12 h-12 text-normal-yellow mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-3xl font-bold text-foreground">10+</h3>
              <p className="text-primary-dim-fg">Dự án hoàn thành</p>
            </div>
            <div className="text-center p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-border/30 hover:border-normal-green/50 transition-all shadow-border-sm hover:shadow-border-md group">
              <Rocket className="w-12 h-12 text-normal-green mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-3xl font-bold text-foreground">2+</h3>
              <p className="text-primary-dim-fg">Startup hợp tác</p>
            </div>
            <div className="text-center p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-border/30 hover:border-normal-magenta/50 transition-all shadow-border-sm hover:shadow-border-md group">
              <GitBranch className="w-12 h-12 text-normal-magenta mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-3xl font-bold text-foreground">350+</h3>
              <p className="text-primary-dim-fg">Stars trên GitHub</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
