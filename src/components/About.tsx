"use client";
import { motion } from "framer-motion";
import { FileText, Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { content, language } = useLanguage();

  const resumeLink = language === "en" ? "/Gabriel Burrows Resume English March 2026.pdf" : "/Burrows, Gabriel 履歴書一般的.pdf";

  // Language proficiency data
  const proficiencies = [
    { name: language === "en" ? "English" : "英語", level: language === "en" ? "Native" : "母国語", width: "100%" },
    { name: language === "en" ? "Japanese" : "日本語", level: language === "en" ? "Business Level" : "ビジネスレベル", width: "75%" },
  ];

  return (
    <section id="about" className="py-20 max-w-4xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-accent">{content.about.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Side: Description & Socials */}
          <div className="md:col-span-2">
            <p className="text-lg text-muted leading-relaxed mb-8">
              {content.about.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              {/* GitHub */}
              <a 
                href="https://github.com/gabrielburrows" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 bg-secondary rounded-full text-main hover:text-accent hover:bg-accent/10 transition-all border border-border-theme"
              >
                <svg role="img" viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/gabrielburrows/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-secondary rounded-full text-main hover:text-accent hover:bg-accent/10 transition-all border border-border-theme"
              >
                <svg role="img" viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Resume Button */}
              <a 
                href={resumeLink} 
                target="_blank" 
                className="flex items-center gap-2 px-6 py-3 bg-accent text-primary rounded-full hover:opacity-90 transition-all font-bold shadow-lg shadow-accent/20"
              >
                <FileText size={20} />
                {content.about.resumeBtn}
              </a>
            </div>
          </div>

          {/* Right Side: Language Proficiency */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-accent mb-4">
              <Languages size={20} />
              <h3 className="font-bold uppercase tracking-wider text-sm">{content.about.language}</h3>
            </div>
            
            {proficiencies.map((lang) => (
              <div key={lang.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-main font-semibold">{lang.name}</span>
                  <span className="text-muted">{lang.level}</span>
                </div>
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: lang.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-accent"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}