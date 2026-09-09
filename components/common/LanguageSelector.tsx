"use client";

import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/app/contexts/LanguageContext";

const languages = [
  { code: "vi" as const, name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "en" as const, name: "English", flag: "🇬🇧" },
  { code: "ko" as const, name: "한국어", flag: "🇰🇷" },
  { code: "zh" as const, name: "中文", flag: "🇨🇳" },
  { code: "ja" as const, name: "日本語", flag: "🇯🇵" },
];

type LanguageCode = "vi" | "en" | "ko" | "zh" | "ja";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(l => l.code === language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageSelect = (languageCode: LanguageCode) => {
    setLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors text-foreground/60 hover:text-primary"
        aria-label="Chọn ngôn ngữ"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {currentLanguage.flag} {currentLanguage.name}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-48 bg-background/98 backdrop-blur-md border-2 border-border rounded-xl shadow-border-lg overflow-hidden z-50"
          >
            {languages.map((languageItem) => {
              const isActive = language === languageItem.code;
              return (
                <button
                  key={languageItem.code}
                  onClick={() => handleLanguageSelect(languageItem.code)}
                  className={`flex items-center gap-3 w-full px-4 py-3 text-left transition-colors ${isActive
                    ? "bg-primary/20 text-primary font-semibold"
                    : "text-foreground/70 hover:bg-primary/10 hover:text-primary"
                    }`}
                  aria-label={`Chọn ${languageItem.name}`}
                >
                  <span className="text-lg">{languageItem.flag}</span>
                  <span className="text-sm">{languageItem.name}</span>
                  {isActive && (
                    <span className="ml-auto text-primary">✓</span>
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
