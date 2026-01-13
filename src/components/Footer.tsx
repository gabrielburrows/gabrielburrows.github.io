"use client";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { content } = useLanguage();
  return (
    <footer className="py-6 text-center text-muted text-sm border-t border-border-theme">
      <p>© {new Date().getFullYear()} Gabriel Burrows. {content.footer.rights}</p>
    </footer>
  );
}