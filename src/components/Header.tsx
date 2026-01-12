"use client";
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function Header() {
  const { language, toggleLanguage, content } = useLanguage();

  const links = [
    { name: content.nav.about, to: "#about" },
    { name: content.nav.education, to: "#education" },
    { name: content.nav.projects, to: "#projects" },
    { name: content.nav.stack, to: "#stack" },
    { name: content.nav.contact, to: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <h1 className="text-xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          DEV.
        </h1>
        
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a 
              key={link.to}
              href={link.to} 
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          onClick={toggleLanguage}
          className="text-xs font-mono border border-white/10 px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 transition"
        >
          {language === 'en' ? 'JP' : 'EN'}
        </button>
      </div>
    </motion.nav>
  );
}