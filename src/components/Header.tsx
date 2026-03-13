"use client";
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function Header() {
  const { language, toggleLanguage, content } = useLanguage();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const hasMounted = useRef(false);

  useEffect(() => {
    // After first render, mark as mounted so subsequent language changes
    // use the fast transition instead of the delayed loader transition
    hasMounted.current = true;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = document.documentElement.getAttribute('data-theme') as 'dark' | 'light';
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = [
    { name: content.nav.about, to: "#about" },
    { name: content.nav.education, to: "#education" },
    { name: content.nav.projects, to: "#projects" },
    { name: content.nav.stack, to: "#stack" },
    { name: content.nav.contact, to: "#contact" },
  ];

  // First mount: delay so Gabriel waits for BURROWS. to land from loader
  // Language switch: instant, no delay
  const gabrielTransition = hasMounted.current
    ? { delay: 0, duration: 0.2, ease: "easeOut" as const }
    : { delay: 0.6, duration: 0.4, ease: "easeOut" as const };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full z-50 bg-primary/80 backdrop-blur-md border-b border-border-theme transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

        <motion.button
          onClick={scrollToTop}
          className="flex items-center text-xl font-bold tracking-tighter cursor-pointer"
        >
          <motion.span
            key={`gabriel-${language}`}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={gabrielTransition}
            className="text-main whitespace-nowrap"
          >
            {language === 'en' ? 'GABRIEL\u00A0' : 'ガブリエル・\u00A0'}
          </motion.span>

          <motion.span
            key={`burrows-${language}`}
            layoutId={language === 'en' ? 'header-logo' : undefined}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="text-accent whitespace-nowrap"
          >
            {language === 'en' ? 'BURROWS.' : 'バローズ'}
          </motion.span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="hidden md:flex gap-8 items-center"
        >
          {links.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="text-sm font-medium text-main hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-3"
        >
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 border border-border-theme rounded bg-secondary text-main hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 flex items-center justify-center"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={toggleLanguage}
            className="text-xs font-mono border border-border-theme px-3 py-1.5 h-8.5 rounded bg-secondary text-main hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
          >
            {language === 'en' ? 'JP' : 'EN'}
          </button>
        </motion.div>
      </div>
    </motion.nav>
  );
}