"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { MapPin, X } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const { content } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projectList = [
    {
      id: "portfolio",
      tags: ["Next.js 15", "TypeScript", "Tailwind", "Framer Motion"],
      link: "https://github.com/gabrielburrows/gabrielburrows.github.io",
      image: "/projects/portfolio.png",
      completionDate: new Date("2026-01-13"),
    },
    {
      id: "dbstargetlocator",
      tags: ["Python", "3D Slicer", "fMRI", "NumPy", "Biomedical"],
      link: "https://github.com/gabrielburrows/CISC472-DBS-Target-Locator-Module-Fall-2025",
      image: "/projects/dbstargetlocator.png",
      completionDate: new Date("2025-11-23"),
    },
    {
      id: "housingmarket",
      tags: ["Python", "Scikit-Learn", "GridSearchCV", "EDA"],
      link: "https://github.com/gabrielburrows/Ames-Housing-Price-Kaggle-Challenge--Data-Analytics-Group-21",
      image: "/projects/housingmarket.png",
      completionDate: new Date("2025-11-30"),
    },
  ];

  const sortedProjects = [...projectList].sort(
    (a, b) => b.completionDate.getTime() - a.completionDate.getTime()
  );

  return (
    <section id="projects" className="py-20 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 text-accent">{content.projects.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sortedProjects.map((project, idx) => {
          const item = content.projects.items[project.id as keyof typeof content.projects.items];
          const isLatest = idx === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-secondary p-8 rounded-xl border ${
                isLatest ? "border-accent/50 shadow-[0_0_20px_rgba(var(--accent-rgb),0.15)]" : "border-border-theme"
              } flex flex-col justify-between group hover:border-accent/50 transition-all`}
            >
              {isLatest && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-accent text-primary text-[10px] uppercase tracking-widest px-2 py-1 rounded-md font-bold shadow-lg shadow-accent/20">
                    Latest
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold mb-1 text-main pr-12 leading-tight">
                  {item.name}
                </h3>
                
                <div className="flex flex-col mb-4">
                  <p className="text-accent/80 text-sm font-medium">{item.date}</p>
                  <p className="text-muted text-xs flex items-center gap-1 mt-0.5">
                    <MapPin size={10} />
                    {item.location}
                  </p>
                </div>

                {/* Framed Image with Zoom Trigger */}
                <div 
                  className="relative w-full h-48 mb-6 overflow-hidden rounded-lg border border-border-theme bg-primary/50 cursor-zoom-in"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <Image
                    src={project.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-accent bg-secondary/80 p-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    </span>
                  </div>
                </div>

                <p className="text-muted mb-6 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-primary text-muted text-xs rounded-full border border-border-theme"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold flex items-center gap-2 hover:opacity-80 transition-opacity mt-auto"
              >
                {content.projects.view}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox / Zoom Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-100 flex items-center justify-center bg-primary/95 backdrop-blur-md p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-main hover:text-accent transition-colors p-2"
              >
                <X size={32} />
              </button>
              <div className="relative w-full h-full rounded-xl overflow-hidden border border-border-theme shadow-2xl">
                <Image
                  src={selectedImage}
                  alt="Zoomed project view"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}