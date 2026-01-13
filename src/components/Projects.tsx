"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { content } = useLanguage();

  const projectList = [
    {
      id: "project1",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      link: "#",
      completionDate: new Date("2026-01-01"),
    },
    {
      id: "project2",
      tags: ["Python", "OpenCV", "Biomedical"],
      link: "#",
      completionDate: new Date("2024-08-01"),
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
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-primary text-[10px] uppercase tracking-widest px-2 py-1 rounded-md font-bold shadow-lg shadow-accent/20">
                    Latest
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold mb-1 text-main pr-12">{item.name}</h3>
                <p className="text-accent/80 text-sm font-medium mb-4">{item.date}</p>
                <p className="text-muted mb-6 line-clamp-3">{item.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary text-muted text-xs rounded-full border border-border-theme">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                {content.projects.view}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}