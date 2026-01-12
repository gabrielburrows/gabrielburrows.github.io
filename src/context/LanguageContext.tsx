"use client";
import React, { createContext, useContext, useState } from 'react';
// Ensure your translations file path is correct
import { translations } from '../utils/translations'; 

const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'en' | 'jp'>('en');

  const toggleLanguage = () => setLanguage(prev => prev === 'en' ? 'jp' : 'en');
  const content = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);