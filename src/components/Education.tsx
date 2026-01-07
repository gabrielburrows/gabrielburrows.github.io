"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const { content } = useLanguage();

  return (
    <section id="education" className="py-20 max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12 text-purple-400">{content.education.title}</h2>
        
        <div className="relative border-l border-white/10 ml-4 space-y-12">
          <div className="ml-8 relative">
            <span className="absolute -left-[41px] top-0 bg-purple-600 p-2 rounded-full">
              <GraduationCap size={16} />
            </span>
            <h3 className="text-xl font-bold">{content.education.uni}</h3>
            <p className="text-purple-300 mb-2">{content.education.degree}</p>
            <p className="text-slate-400">{content.education.desc}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}