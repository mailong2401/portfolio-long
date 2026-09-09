// app/contexts/LanguageContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { translations, LanguageCode, getNestedValue } from "@/locales";

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (path: string) => string;  // 👈 Đảm bảo có t
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>("vi");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as LanguageCode;
    if (savedLanguage && ["vi", "en", "zh", "ja"].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
    setMounted(true);
  }, []);

  // 👈 Định nghĩa hàm t
  const t = (path: string): string => {
    const currentTranslations = translations[language];
    const value = getNestedValue(currentTranslations, path);
    return value || path;
  };

  const handleSetLanguage = (lang: LanguageCode) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  // 👈 Trả về object đầy đủ
  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
