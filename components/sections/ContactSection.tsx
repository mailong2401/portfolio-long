'use client';

import { Mail, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa6';

export default function ContactSection() {
  return (
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
  );
}
