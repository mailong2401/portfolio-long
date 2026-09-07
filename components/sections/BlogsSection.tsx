'use client';

import { ChevronRight } from 'lucide-react';

const blogs = [
  {
    date: '15 Jan 2026',
    title: 'Tối ưu hóa Next.js với Arch Linux',
    description: 'Chia sẻ kinh nghiệm tối ưu hóa hiệu suất Next.js trên môi trường Arch Linux.',
    link: '#'
  },
  {
    date: '10 Jan 2026',
    title: 'Flutter vs React Native 2026',
    description: 'So sánh chi tiết Flutter và React Native cho phát triển mobile đa nền tảng.',
    link: '#'
  }
];

export default function BlogsSection() {
  return (
    <section id="blogs" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-normal-red via-normal-yellow to-normal-magenta bg-clip-text text-transparent">
            Bài viết gần đây
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-primary-dim-bg/20 rounded-xl p-6 border border-border/30 hover:border-normal-red/50 transition-all shadow-border-sm hover:shadow-border-md">
              <div className="flex items-center gap-2 text-primary-dim-fg text-sm mb-2">
                <span>📝</span>
                <span>{blog.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-fg mb-2">{blog.title}</h3>
              <p className="text-primary-dim-fg mb-4">{blog.description}</p>
              <a href={blog.link} className="text-normal-blue hover:text-normal-cyan transition-colors flex items-center gap-1">
                Đọc tiếp <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
