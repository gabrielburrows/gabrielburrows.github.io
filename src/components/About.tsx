"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { content } = useLanguage();

  return (
    <section id="about" className="py-20 max-w-4xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-purple-400">{content.about.title}</h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-8">
          {content.about.description}
        </p>
        
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-purple-400 transition">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-purple-400 transition">
            <Linkedin size={24} />
          </a>
          <a href="/Resume_en_2026.pdf" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition font-medium">
            <FileText size={20} />
            {content.about.resumeBtn}
          </a>
        </div>
      </motion.div>
    </section>
  );
}