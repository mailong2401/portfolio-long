'use client';

import {
  Mail, FileText, Terminal, Sparkles, Palette, Code,
  Rocket, Award, BookOpen, ExternalLink, ChevronRight,
  Server
} from 'lucide-react';
import { FaLinkedin, FaFacebook, FaYoutube, FaFlutter, FaGithub } from 'react-icons/fa6';
import Image from 'next/image';
import { SiNextdotjs, SiQt, SiNodedotjs, SiArchlinux, SiSpringboot, SiReact, SiTailwindcss } from 'react-icons/si';

export default function HomePages() {
  // Dữ liệu skills
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

  // Dữ liệu experiences
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

  // Dữ liệu projects
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

  return (
    <main className="min-h-screen ">

      {/* ====== HERO SECTION - Căn giữa ====== */}
      <section className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-7xl w-full border-2 border-border rounded-2xl p-8 md:p-12 shadow-border-md hover:shadow-border-lg">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar */}
            <div className="relative group">
              <div className="w-50 h-50 rounded-full bg-border p-1 shadow-lg">
                <div className="w-full h-full rounded-full bg-primary-bg flex items-center justify-center overflow-hidden relative">
                  <Image
                    src="/images/avatar.png"
                    alt="Mai Dương Long"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary-bg border border-button-bg rounded-full p-1.5">
                <Terminal className="w-4 h-4 text-primary-fg" />
              </div>
            </div>

            {/* Thông tin chính */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-normal-red via-normal-yellow to-normal-magenta bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                  Mai Dương Long
                </h1>
                <Sparkles className="w-6 h-6 text-normal-yellow animate-pulse-slow" />
              </div>

              <p className="text-xl text-primary-bright-fg mb-2 flex items-center justify-center md:justify-start gap-2">
                <span className="text-normal-red">✦</span>
                Lập trình viên Full Stack đầy nhiệt huyết
                <span className="text-normal-red">✦</span>
              </p>

              <p className="text-primary-dim-fg max-w-2xl mx-auto md:mx-0">
                Với kinh nghiệm xây dựng các ứng dụng <span className="text-normal-red font-medium">Web</span> và <span className="text-normal-magenta font-medium">Mobile</span>
                sử dụng JavaScript / Reactjs / Nodejs / React Native cùng các thư viện và framework hiện đại khác.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-button-bg to-transparent" />
            <div className="flex items-center gap-2 px-4 py-1 bg-background/30 rounded-full border border-button-bg/30 shadow-border-md hover:shadow-border-lg">
              <SiArchlinux className="w-4 h-4 text-normal-magenta" />
              <span className="text-xs text-primary-dim-fg">Arch Linux</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-button-bg to-transparent" />
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <p className="text-sm text-primary-dim-fg text-center mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-button-bg" />
              Tech Stack yêu thích
              <span className="w-8 h-px bg-button-bg" />
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-background/30 rounded-full border border-border/30 shadow-border-md hover:shadow-border-lg">
                <SiQt className="w-4 h-4 text-normal-green" />
                <span className="text-xs text-primary-dim-fg">Quickshell</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-background/30 rounded-full border border-border/30 shadow-border-md hover:shadow-border-lg">
                <SiNextdotjs className="w-4 h-4 text-normal-black" />
                <span className="text-xs text-primary-dim-fg">Next.js</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-background/30 rounded-full border border-border/30 shadow-border-md hover:shadow-border-lg">
                <SiNodedotjs className="w-4 h-4 text-normal-green" />
                <span className="text-xs text-primary-dim-fg">Node.js</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-background/30 rounded-full border border-border/30 shadow-border-md hover:shadow-border-lg">
                <FaFlutter className="w-4 h-4 text-normal-blue" />
                <span className="text-xs text-primary-dim-fg">Flutter</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-background/30 rounded-full border border-border/30 shadow-border-md hover:shadow-border-lg">
                <SiSpringboot className="w-4 h-4 text-normal-green" />
                <span className="text-xs text-primary-dim-fg">Spring Boot</span>
              </div>
            </div>
          </div>

          {/* Passion & Sở thích */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-primary-dim-bg/20 rounded-xl p-4 border border-normal-red/20 hover:border-normal-red/50 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary-fg/20 rounded-lg">
                  <Sparkles className="w-5 h-5 text-primary-fg" />
                </div>
                <h3 className="font-semibold text-primary-fg">Sáng tạo & Thẩm mỹ</h3>
              </div>
              <p className="text-primary-dim-fg text-sm">
                Yêu thích sự sáng tạo trong thiết kế và luôn chú trọng đến tính thẩm mỹ trong từng sản phẩm.
              </p>
            </div>

            <div className="bg-primary-dim-bg/20 rounded-xl p-4 border border-normal-magenta/20 hover:border-normal-magenta/50 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary-fg/20 rounded-lg">
                  <Palette className="w-5 h-5 text-primary-fg" />
                </div>
                <h3 className="font-semibold text-primary-fg">Custom giao diện</h3>
              </div>
              <p className="text-primary-dim-fg text-sm">
                Đam mê tùy chỉnh giao diện, biến những ý tưởng độc đáo thành trải nghiệm người dùng ấn tượng.
              </p>
            </div>
          </div>

          {/* Terminal style info */}
          <div className="bg-primary-fg/5 rounded-xl p-4 font-mono text-sm border border-button-bg/30 mb-8">
            <div className="flex items-center gap-2 text-primary-dim-fg mb-2">
              <span className="w-3 h-3 rounded-full bg-normal-red" />
              <span className="w-3 h-3 rounded-full bg-normal-yellow" />
              <span className="w-3 h-3 rounded-full bg-normal-green" />
              <span className="ml-2 text-primary-dim-fg">~/portfolio</span>
            </div>
            <div className="space-y-1 text-primary-fg">
              <p><span className="text-normal-magenta">user@arch</span>:<span className="text-normal-blue">~</span>$ whoami</p>
              <p className="text-normal-green pl-4">Mai Dương Long - Full Stack Developer</p>
              <p><span className="text-normal-magenta">user@arch</span>:<span className="text-normal-blue">~</span>$ neofetch</p>
              <div className="pl-4 text-primary-dim-fg text-xs space-y-0.5">
                <p>OS: Arch Linux x86_64</p>
                <p>Shell: zsh 5.9</p>
                <p>Editor: Neovim</p>
                <p>DE: Hyprland + Quickshell</p>
                <p>Passion: Creative UI/UX ✦</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SKILLS SECTION ====== */}
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

      {/* ====== EXPERIENCE SECTION ====== */}
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

      {/* ====== PROJECTS SECTION ====== */}
      <section id="projects" className="py-16 px-4">
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

      {/* ====== ACHIEVEMENTS SECTION ====== */}
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

      {/* ====== BLOGS SECTION ====== */}
      <section id="blogs" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-normal-red via-normal-yellow to-normal-magenta bg-clip-text text-transparent">
              Bài viết gần đây
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary-dim-bg/20 rounded-xl p-6 border border-border/30 hover:border-normal-red/50 transition-all shadow-border-sm hover:shadow-border-md">
              <div className="flex items-center gap-2 text-primary-dim-fg text-sm mb-2">
                <span>📝</span>
                <span>15 Jan 2026</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-fg mb-2">Tối ưu hóa Next.js với Arch Linux</h3>
              <p className="text-primary-dim-fg mb-4">Chia sẻ kinh nghiệm tối ưu hóa hiệu suất Next.js trên môi trường Arch Linux.</p>
              <a href="#" className="text-normal-blue hover:text-normal-cyan transition-colors flex items-center gap-1">
                Đọc tiếp <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-primary-dim-bg/20 rounded-xl p-6 border border-border/30 hover:border-normal-blue/50 transition-all shadow-border-sm hover:shadow-border-md">
              <div className="flex items-center gap-2 text-primary-dim-fg text-sm mb-2">
                <span>📝</span>
                <span>10 Jan 2026</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-fg mb-2">Flutter vs React Native 2026</h3>
              <p className="text-primary-dim-fg mb-4">So sánh chi tiết Flutter và React Native cho phát triển mobile đa nền tảng.</p>
              <a href="#" className="text-normal-blue hover:text-normal-cyan transition-colors flex items-center gap-1">
                Đọc tiếp <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CONTACT SECTION ====== */}
      <section id="contact" className="py-16 px-4 bg-primary-dim-bg/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-normal-red via-normal-yellow to-normal-magenta bg-clip-text text-transparent">
              Liên hệ với tôi
            </span>
          </h2>
          <p className="text-primary-dim-fg mb-8">
            Bạn có dự án cần hợp tác? Hãy để lại lời nhắn, tôi sẽ phản hồi sớm nhất có thể.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:long@example.com"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-normal-red to-normal-magenta rounded-full font-medium text-primary-bg transition-all hover:scale-105 hover:shadow-lg hover:shadow-normal-red/30"
            >
              <Mail className="w-5 h-5" />
              <span>Gửi email</span>
            </a>

            <a
              href="/resume.pdf"
              download
              className="group flex items-center gap-2 px-6 py-3 bg-button-bg/20 backdrop-blur border border-button-bg/30 rounded-full font-medium text-primary-fg transition-all hover:bg-button-bg/30 hover:scale-105"
            >
              <FileText className="w-5 h-5" />
              <span>Tải CV</span>
            </a>

            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-button-bg/20 rounded-full hover:bg-button-bg/30 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5 text-primary-fg" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-button-bg/20 rounded-full hover:bg-button-bg/30 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 text-normal-blue" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-button-bg/20 rounded-full hover:bg-button-bg/30 transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5 text-normal-blue" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-button-bg/20 rounded-full hover:bg-button-bg/30 transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5 text-normal-red" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="py-8 px-4 border-t border-border/30">
        <div className="max-w-7xl mx-auto text-center text-primary-dim-fg text-sm flex items-center justify-center gap-2">
          <span>© 2026 Mai Dương Long</span>
          <span>✦</span>
          <SiArchlinux className="w-3 h-3 text-normal-magenta/60" />
          <span className="font-mono"># powered by Arch Linux</span>
          <span>✦</span>
          <span className="font-mono"># Hyprland + Quickshell</span>
        </div>
      </footer>
    </main>
  );
}
