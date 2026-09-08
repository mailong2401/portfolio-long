import { Mail, FileText, Send, MessageCircle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube, FaTwitter, FaDev } from 'react-icons/fa6';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <ScrollAnimation direction="up" delay={0.1} duration={0.6}>
          <div className="text-3xl md:text-4xl font-bold text-center mb-12">
            <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground transition-all duration-300 hover:text-normal-blue hover:-translate-y-0.5 hover:scale-105 inline-block">
              Liên hệ với tôi
            </h1>
          </div>
        </ScrollAnimation>

        {/* Description */}
        <ScrollAnimation direction="up" delay={0.2} duration={0.6}>
          <p className="text-primary-dim-fg mb-8 max-w-2xl mx-auto leading-relaxed">
            Bạn có dự án cần hợp tác? Hãy để lại lời nhắn, tôi sẽ phản hồi sớm nhất có thể.
          </p>
        </ScrollAnimation>

        {/* Action Buttons */}
        <ScrollAnimation direction="up" delay={0.3} duration={0.6}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <a
              href="mailto:long@example.com"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-normal-red to-normal-magenta rounded-full font-medium text-primary-bg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-normal-red/30"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Gửi email</span>
              <Send className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-2 group-hover:ml-0" />
            </a>
          </div>
        </ScrollAnimation>

        {/* Social Links */}
        <ScrollAnimation direction="up" delay={0.4} duration={0.6}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <p className="text-sm text-primary-dim-fg w-full mb-3">Kết nối với tôi qua mạng xã hội</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://github.com/mailong2401"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-button-bg/20 rounded-full hover:bg-button-bg/30 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5 text-primary-fg group-hover:text-normal-yellow transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-button-bg/20 rounded-full hover:bg-button-bg/30 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 text-normal-blue group-hover:text-normal-cyan transition-colors" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-button-bg/20 rounded-full hover:bg-button-bg/30 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5 text-normal-blue group-hover:text-normal-cyan transition-colors" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-button-bg/20 rounded-full hover:bg-button-bg/30 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5 text-normal-red group-hover:text-bright-red transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-button-bg/20 rounded-full hover:bg-button-bg/30 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5 text-normal-cyan group-hover:text-bright-cyan transition-colors" />
              </a>
              <a
                href="https://dev.to"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-button-bg/20 rounded-full hover:bg-button-bg/30 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Dev.to"
              >
                <FaDev className="w-5 h-5 text-primary-fg group-hover:text-normal-magenta transition-colors" />
              </a>
            </div>
          </div>
        </ScrollAnimation>

        {/* Divider với thông tin thêm */}
        <ScrollAnimation direction="up" delay={0.5} duration={0.6}>
          <div className="mt-8 pt-6 border-t border-border/30">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-dim-fg">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-normal-green rounded-full animate-pulse" />
                <span>Available for work</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-normal-yellow rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span>Open to collaborate</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-normal-magenta rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <span>Based in Vietnam</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
