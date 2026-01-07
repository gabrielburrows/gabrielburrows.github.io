"use client";
import { createContext, useContext, useState } from 'react';

type Language = 'en' | 'jp';

const LanguageContext = createContext<any>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'jp' : 'en'));
  };

  // Simple translation dictionary
  const t = {
    en: {
      about: "About Me",
      projects: "Projects",
      contact: "Contact",
      hero_text: ["Developer.", "Designer.", "Creator."],
    },
    jp: {
      about: "私について",
      projects: "プロジェクト",
      contact: "お問い合わせ",
      hero_text: ["開発者", "デザイナー", "クリエイター"],
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, content: t[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);