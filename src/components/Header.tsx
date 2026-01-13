"use client";
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const { language, toggleLanguage, content } = useLanguage();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Handle Theme Toggle
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Sync theme state with the document attribute on load
  useEffect(() => {
    const savedTheme = document.documentElement.getAttribute('data-theme') as 'dark' | 'light';
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to dark if no attribute is set
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const links = [
    { name: content.nav.about, to: "#about" },
    { name: content.nav.education, to: "#education" },
    { name: content.nav.projects, to: "#projects" },
    { name: content.nav.stack, to: "#stack" },
    { name: content.nav.contact, to: "#contact" },
  ];

  // Logic for Name Translation
  const displayName = language === 'en' ? 'GABRIEL BURROWS.' : 'ガブリエル・バローズ';

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-primary/80 backdrop-blur-md border-b border-border-theme transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* Clickable & Hoverable Name */}
        <button 
          onClick={scrollToTop}
          className="text-xl font-bold tracking-tighter text-main hover:text-accent transition-colors duration-300 cursor-pointer text-left"
        >
          {displayName}
        </button>
        
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a 
              key={link.to}
              href={link.to} 
              className="text-sm font-medium text-main hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Switcher Button */}
          <button 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 border border-border-theme rounded bg-secondary text-main hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 flex items-center justify-center"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Language Switcher Button */}
          <button 
            onClick={toggleLanguage}
            className="text-xs font-mono border border-border-theme px-3 py-1.5 h-8.5 rounded bg-secondary text-main hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
          >
            {language === 'en' ? 'JP' : 'EN'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}