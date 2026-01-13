"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { MapPin } from "lucide-react";

export default function Education() {
  const { content } = useLanguage();

  return (
    <section id="education" className="py-20 max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-secondary p-8 rounded-xl border border-border-theme"
      >
        <h2 className="text-3xl font-bold mb-6 text-accent">{content.education.title}</h2>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
          <h3 className="text-xl font-bold text-main">{content.education.degree}</h3>
          <div className="text-right flex flex-col items-end">
            <span className="text-accent font-medium whitespace-nowrap">
              {content.education.date}
            </span>
            <span className="text-muted text-sm flex items-center gap-1 mt-1">
              <MapPin size={12} />
              {content.education.location}
            </span>
          </div>
        </div>
        <p className="text-lg text-muted mb-2">{content.education.uni}</p>
        <p className="text-muted italic opacity-80">{content.education.desc}</p>
      </motion.div>
    </section>
  );
}