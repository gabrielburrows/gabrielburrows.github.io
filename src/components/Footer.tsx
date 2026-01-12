"use client";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { content } = useLanguage();
  return (
    <footer className="py-6 text-center text-slate-600 text-sm border-t border-white/5">
      <p>© {new Date().getFullYear()} Gabriel Burrows. {content.footer.rights}</p>
    </footer>
  );
}