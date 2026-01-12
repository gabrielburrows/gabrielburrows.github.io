"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { content } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "", captcha: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error" | "captchaError">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (formData.captcha !== "5") {
      setStatus("captchaError");
      return;
    }
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    // SIMULATION MODE
    // To use real emails later, you will install '@emailjs/browser'
    setTimeout(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", captcha: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 max-w-xl mx-auto px-6 mb-20">
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-purple-400">{content.contact.title}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder={content.contact.name} 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-3 bg-white/5 border border-white/10 rounded focus:border-purple-500 outline-none transition"
          />
          <input 
            type="email" 
            placeholder={content.contact.email} 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-3 bg-white/5 border border-white/10 rounded focus:border-purple-500 outline-none transition"
          />
          <textarea 
            rows={5}
            placeholder={content.contact.message} 
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full p-3 bg-white/5 border border-white/10 rounded focus:border-purple-500 outline-none transition"
          />
          
          <div className="flex items-center gap-4">
            <label className="text-sm text-slate-400">{content.contact.captcha}</label>
            <input 
              type="text" 
              className="w-16 p-2 bg-white/5 border border-white/10 rounded text-center"
              value={formData.captcha}
              onChange={(e) => setFormData({...formData, captcha: e.target.value})}
            />
          </div>

          {status === "error" && <p className="text-red-400 text-sm">{content.contact.error}</p>}
          {status === "captchaError" && <p className="text-red-400 text-sm">{content.contact.captchaError}</p>}
          {status === "success" && <p className="text-green-400 text-sm">{content.contact.success}</p>}

          <button type="submit" className="w-full bg-purple-600 py-3 rounded font-bold hover:bg-purple-700 transition">
            {content.contact.send}
          </button>
        </form>
      </motion.div>
    </section>
  );
}