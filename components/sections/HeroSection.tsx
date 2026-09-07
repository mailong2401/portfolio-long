'use client';

import { Mail, FileText, Sparkles, Palette } from 'lucide-react';
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa6';
import { SiArchlinux } from 'react-icons/si';
import Avatar from '@/components/ui/Avatar';
import TerminalInfo from '@/components/ui/TerminalInfo';
import TechStack from '@/components/ui/TechStack';
import PassionCard from '@/components/ui/PassionCard';

export default function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-7xl w-full border-2 bg-background/50 border-border rounded-2xl p-8 md:p-12 shadow-border-md hover:shadow-border-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <Avatar />

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
              Với kinh nghiệm xây dựng các ứng dụng{' '}
              <span className="text-normal-red font-medium">Web</span> và{' '}
              <span className="text-normal-magenta font-medium">Mobile</span>
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

        <TechStack />

        {/* Passion & Sở thích */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <PassionCard
            icon={<Sparkles className="w-5 h-5 text-foreground" />}
            title="Sáng tạo & Thẩm mỹ"
            description="Yêu thích sự sáng tạo trong thiết kế và luôn chú trọng đến tính thẩm mỹ trong từng sản phẩm."
            borderColor="border-normal-red"
          />
          <PassionCard
            icon={<Palette className="w-5 h-5 text-foreground" />}
            title="Custom giao diện"
            description="Đam mê tùy chỉnh giao diện, biến những ý tưởng độc đáo thành trải nghiệm người dùng ấn tượng."
            borderColor="border-normal-magenta"
          />
        </div>

        <TerminalInfo />
      </div>
    </section>
  );
}
