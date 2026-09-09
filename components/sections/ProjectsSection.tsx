'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Star, GitFork, AlertCircle, X, Globe, Expand } from 'lucide-react';
import IconButton from '@/components/ui/IconButton';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
  deployLink?: string;
  stars?: number;
  forks?: number;
  issues?: number;
}

const projects: Project[] = [
  {
    id: 'cartoonShell',
    title: 'Cartoon Shell',
    description: 'Cartoon Shell is a modern Wayland panel built entirely with QuickShell (QML) specifically for Hyprland window manager.',
    tech: ['QuickShell', 'QML', 'Hyprland'],
    link: 'https://github.com/mailong2401/cartoon-shell',
    image: '/images/projects/cartoon-shell.png',
    stars: 341,
    forks: 22,
    issues: 1,
  },
  {
    id: 'dotfiles',
    title: 'dotfiles hyprland',
    description: 'A complete Hyprland(Lua) configuration with Quickshell, custom themes, and essential tools for a beautiful Wayland desktop experience.',
    tech: ['Lua', 'Shell', 'Css'],
    link: 'https://github.com/mailong2401/dotfiles-hyprland',
    image: '/images/projects/dotfiles.png',
    stars: 100,
    forks: 7,
    issues: 0,
  },
  {
    id: 'hitekFlycam',
    title: 'Hitek Flycam',
    description: 'Website landingpage cho danh nghiệp Hitek Flycam thiết kế theo phong cách đơn giản',
    tech: ['Nextjs', 'Typescript'],
    link: 'https://github.com/mailong2401/hitek-flycam',
    image: '/images/projects/hitek-flycam.png',
    deployLink: 'https://flycam.hitek.com.vn/',
    stars: 0,
    forks: 0,
    issues: 0,
  },
  {
    id: 'billiard',
    title: 'Billiard Website',
    description: 'Xây dựng Website quản lí billiard thiết kế theo phong cách tối giản hiện đại cộng nghệ realtime tính giá tiền',
    tech: ['Nextjs', 'Nodejs', 'Typescript', 'Javascript'],
    link: 'https://github.com/mailong2401/billard-frontend',
    image: '/images/projects/billiard.png',
    deployLink: 'https://billard-frontend.vercel.app',
    stars: 0,
    forks: 0,
    issues: 0,
  },
  {
    id: 'vietgreen',
    title: 'VietGreen',
    description: 'Xây dựng Website VietGreen Data & AI quy mô quốc gia nhằm thu thập, chuẩn hóa, phân tích và khai thác dữ liệu về sản xuất xanh và tiêu dùng bền vững tại Việt Nam',
    tech: ['Nextjs', 'Typescript', 'Python', 'PostgreSQL'],
    link: 'https://github.com/mailong2401/vietgreen',
    image: '/images/projects/vietgreen.png',
    deployLink: 'https://vietgreen.vercel.app',
    stars: 0,
    forks: 0,
    issues: 0,
  },
];

const formatNumber = (num: number) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num;
};

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');

  const openLightbox = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="opensource" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <ScrollAnimation direction="up" delay={0.1} duration={0.6}>
          <div className="text-3xl md:text-4xl font-bold text-center mb-12">
            <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground transition-all duration-300 hover:text-normal-blue hover:-translate-y-0.5 hover:scale-105 inline-block">
              {t('projects.title')}
            </h1>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ScrollAnimation
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={0.2 + index * 0.15}
              duration={0.6}
            >
              <div className="bg-background/50 rounded-xl overflow-hidden border border-border/30 shadow-border-lg hover:shadow-border-md transition-all duration-300 group flex flex-col h-full">
                {/* Project Image - Click để xem lớn */}
                <div
                  className="relative w-full aspect-video overflow-hidden bg-background/30 cursor-pointer"
                  onClick={() => openLightbox(project.image, t(`projects.${project.id}.title`))}
                >
                  <Image
                    src={project.image}
                    alt={t(`projects.${project.id}.title`)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    priority={index < 2}
                  />
                  {/* Overlay khi hover - sử dụng icon Expand */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 p-3 rounded-full backdrop-blur-sm">
                      <Expand className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-normal-red transition-colors line-clamp-1">
                      {t(`projects.${project.id}.title`)}
                    </h3>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {/* Deploy Link - nếu có */}
                      {project.deployLink && (
                        <a
                          href={project.deployLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-dim-fg hover:text-normal-green transition-colors"
                          title="View live demo"
                        >
                          <Globe className="w-5 h-5" />
                        </a>
                      )}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-dim-fg hover:text-normal-blue transition-colors"
                        title="View source code"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-primary-dim-fg mb-4 text-sm flex-1 line-clamp-2">
                    {t(`projects.${project.id}.description`)}
                  </p>

                  {/* Tech Stack - giữ nguyên không translation */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 px-3 py-2 bg-background/50 rounded-full border border-border transition-all duration-300 hover:scale-105 hover:shadow-md"
                      >
                        <span className="text-sm text-primary-dim-fg">{tech}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 pt-3 border-t border-border/30">
                    {project.stars !== undefined && (
                      <div className="flex items-center gap-1.5 text-foreground/60 hover:text-normal-yellow transition-colors">
                        <Star size={14} className="fill-current" />
                        <span className="text-sm font-medium">{formatNumber(project.stars)}</span>
                      </div>
                    )}

                    {project.forks !== undefined && (
                      <div className="flex items-center gap-1.5 text-foreground/60 hover:text-normal-blue transition-colors">
                        <GitFork size={14} />
                        <span className="text-sm font-medium">{formatNumber(project.forks)}</span>
                      </div>
                    )}

                    {project.issues !== undefined && (
                      <div className="flex items-center gap-1.5 text-foreground/60 hover:text-normal-red transition-colors">
                        <AlertCircle size={14} />
                        <span className="text-sm font-medium">{formatNumber(project.issues)}</span>
                      </div>
                    )}

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-xs text-foreground/40 hover:text-primary transition-colors"
                    >
                      View repo →
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-background/5 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nút đóng - sử dụng IconButton */}
            <div className="absolute -top-14 right-0">
              <IconButton
                onClick={closeLightbox}
                aria-label="Close lightbox"
                variant="ghost"
                size="md"
                className="text-foreground/60 transition-all"
                icon={<X size={28} />}
              />
            </div>

            {/* Ảnh */}
            <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
              <Image
                src={selectedImage}
                alt={selectedTitle}
                width={1200}
                height={675}
                className="object-contain max-h-[80vh] rounded-lg shadow-2xl"
                priority
              />
            </div>

            {/* Title */}
            <div className="absolute -bottom-12 left-0 right-0 text-center">
              <p className="text-white/80 text-sm font-medium">
                {selectedTitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
