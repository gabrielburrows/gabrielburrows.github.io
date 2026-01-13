"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { content, language } = useLanguage();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "captchaError">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // 1. Get reCAPTCHA Token
    const token = recaptchaRef.current?.getValue();
    if (!token) {
      setStatus("captchaError");
      return;
    }

    // 2. Validate Fields
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    try {
      // 3. Send Email via EmailJS using Environment Variables
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, 
        {
          from_name: formData.name,       // Matches {{from_name}}
          reply_to: formData.email,      // Matches {{reply_to}}
          message: formData.message,      // Matches {{message}}
          language: language,             // Matches {{language}}
          site_url: window.location.hostname, // Matches {{site_url}}
          'g-recaptcha-response': token,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      recaptchaRef.current?.reset();
    } catch (err) {
      console.error("Email error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 max-w-xl mx-auto px-6 mb-20">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold mb-8 text-purple-400">{content.contact.title}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder={content.contact.name} 
            value={formData.name}
            required
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-3 bg-white/5 border border-white/10 rounded focus:border-purple-500 outline-none transition"
          />
          <input 
            type="email" 
            placeholder={content.contact.email} 
            value={formData.email}
            required
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-3 bg-white/5 border border-white/10 rounded focus:border-purple-500 outline-none transition"
          />
          <textarea 
            rows={5}
            placeholder={content.contact.message} 
            value={formData.message}
            required
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full p-3 bg-white/5 border border-white/10 rounded focus:border-purple-500 outline-none transition"
          />
          
          <div className="flex justify-center py-2">
            <ReCAPTCHA
              ref={recaptchaRef}
              // Site key from environment variables
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              theme="dark"
            />
          </div>

          {status === "error" && <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>}
          {status === "captchaError" && <p className="text-red-400 text-sm">Please complete the reCAPTCHA.</p>}
          {status === "success" && <p className="text-green-400 text-sm">Message sent successfully!</p>}

          <button 
            type="submit" 
            disabled={status === "sending"}
            className="w-full bg-purple-600 py-3 rounded font-bold hover:bg-purple-700 transition disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : content.contact.send}
          </button>
        </form>
      </motion.div>
    </section>
  );
}