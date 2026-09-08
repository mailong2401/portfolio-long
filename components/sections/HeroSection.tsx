'use client';

import { Sparkles, Palette, Moon } from 'lucide-react';
import { SiArchlinux } from 'react-icons/si';
import { useEffect, useState, useMemo } from 'react';
import Avatar from '@/components/ui/Avatar';
import TerminalInfo from '@/components/ui/TerminalInfo';
import TechStack from '@/components/ui/TechStack';
import PassionCard from '@/components/ui/PassionCard';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

// Typing Effect Component
function TypingRole() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = useMemo(
    () => [
      'Creative Coder',
      'Full Stack Developer',
      'UI/UX Enthusiast',
      'Arch Linux User',
      'Open Source Contributor',
    ],
    []
  );

  useEffect(() => {
    const current = loopNum % roles.length;
    const fullText = roles[current];

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText((prev) => fullText.substring(0, prev.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText((prev) => fullText.substring(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setTypingSpeed(150);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <span className="text-normal-cyan whitespace-nowrap">
      {displayText}
      <span
        className={`inline-block w-0.5 h-6 ml-0.5 bg-normal-magenta ${displayText ? 'animate-blink' : ''
          }`}
      />
    </span>
  );
}

export default function HeroSection() {
  const EMOJIS = ['🚀', '💻', '🎨', '⚡', '✨', '🔥'];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
    >
      <div className="max-w-7xl w-full border-2 bg-background/50 border-border rounded-2xl p-8 md:p-12 shadow-border-md hover:shadow-border-lg relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar - Animation từ trái sang */}
          <ScrollAnimation direction="right" delay={0.2} duration={0.6}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-normal-red via-normal-yellow to-normal-magenta rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative">
                <Avatar />
              </div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-normal-green rounded-full animate-ping" />
            </div>
          </ScrollAnimation>

          {/* Thông tin chính - Animation từ dưới lên */}
          <div className="flex-1 text-center md:text-left">
            <ScrollAnimation direction="up" delay={0.3} duration={0.6}>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1 flex-wrap">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground transition-all duration-300 hover:text-normal-blue hover:-translate-y-0.5 hover:scale-105 inline-block">
                  Mai Dương Long
                </h1>
                <Sparkles className="w-6 h-6 text-normal-yellow animate-pulse-slow" />
                <Moon className="w-5 h-5 text-normal-cyan animate-float hidden sm:inline-block" />
              </div>
            </ScrollAnimation>

            {/* Typing effect */}
            <ScrollAnimation direction="up" delay={0.4} duration={0.6}>
              <div className="text-xl text-primary-bright-fg mb-2 flex items-center justify-center md:justify-start gap-2 flex-wrap min-h-[2.8rem]">
                <span className="text-normal-red">✦</span>
                <span className="font-medium inline-flex items-center flex-wrap">
                  <span className="text-foreground whitespace-nowrap">Lập trình viên</span>
                  <span className="text-normal-red mx-1">|</span>
                  <TypingRole />
                </span>
                <span className="text-normal-red">✦</span>
              </div>
            </ScrollAnimation>

            {/* Description */}
            <ScrollAnimation direction="up" delay={0.5} duration={0.6}>
              <p className="text-primary-dim-fg max-w-2xl mx-auto md:mx-0 leading-relaxed">
                Với kinh nghiệm xây dựng các ứng dụng{' '}
                <span className="text-foreground font-medium hover:text-normal-red/80 transition-colors cursor-default relative group">
                  Web
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-normal-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </span>{' '}
                và{' '}
                <span className="text-foreground font-medium hover:text-normal-magenta/80 transition-colors cursor-default relative group">
                  Mobile
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-normal-magenta scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </span>{' '}
                sử dụng JavaScript / Reactjs / Nodejs / React Native cùng các thư viện và framework hiện đại khác.
              </p>
            </ScrollAnimation>

            {/* Decorative floating tags */}
            <ScrollAnimation direction="up" delay={0.6} duration={0.6}>
              <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                {EMOJIS.map((emoji, i) => (
                  <span
                    key={i}
                    className="text-lg animate-float"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Divider */}
        <ScrollAnimation direction="up" delay={0.7} duration={0.6}>
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-button-bg to-transparent" />
            <div className="flex items-center gap-2 px-4 py-1 bg-background/30 rounded-full border border-button-bg/30 shadow-border-md hover:shadow-border-lg transition-all duration-300 hover:scale-105 cursor-default">
              <SiArchlinux className="w-4 h-4 text-normal-magenta" />
              <span className="text-xs text-primary-dim-fg">Arch Linux</span>
              <span className="w-1.5 h-1.5 bg-normal-green rounded-full animate-pulse" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-button-bg to-transparent" />
          </div>
        </ScrollAnimation>

        {/* Tech Stack */}
        <ScrollAnimation direction="up" delay={0.8} duration={0.6}>
          <TechStack />
        </ScrollAnimation>

        {/* Passion & Sở thích */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <ScrollAnimation direction="left" delay={0.9} duration={0.6}>
            <PassionCard
              icon={<Sparkles className="w-5 h-5 text-foreground" />}
              title="Sáng tạo & Thẩm mỹ"
              description="Yêu thích sự sáng tạo trong thiết kế và luôn chú trọng đến tính thẩm mỹ trong từng sản phẩm."
              borderColor="border-normal-red"
            />
          </ScrollAnimation>
          <ScrollAnimation direction="right" delay={1.0} duration={0.6}>
            <PassionCard
              icon={<Palette className="w-5 h-5 text-foreground" />}
              title="Custom giao diện"
              description="Đam mê tùy chỉnh giao diện, biến những ý tưởng độc đáo thành trải nghiệm người dùng ấn tượng."
              borderColor="border-normal-magenta"
            />
          </ScrollAnimation>
        </div>

        {/* Terminal Info */}
        <ScrollAnimation direction="up" delay={1.1} duration={0.6}>
          <TerminalInfo />
        </ScrollAnimation>
      </div>
    </section>
  );
}
