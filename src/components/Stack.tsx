"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const stackItems = {
  frontend: ["React", "Next.js", "Tailwind", "TypeScript", "Framer Motion"],
  backend: ["Node.js", "Express", "Python", "Go"],
  database: ["PostgreSQL", "MongoDB", "Redis"],
  tools: ["Git", "Docker", "AWS", "Figma"]
};

export default function Stack() {
  const { content } = useLanguage();

  return (
    <section id="stack" className="py-20 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 text-purple-400">{content.stack.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(stackItems).map(([category, items], idx) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/5 p-6 rounded-xl border border-white/10"
          >
            <h3 className="text-xl font-bold mb-4 capitalize text-slate-200">
              {content.stack[category as keyof typeof content.stack]}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map(item => (
                <span key={item} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/20">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}