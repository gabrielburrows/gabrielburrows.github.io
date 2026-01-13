"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { content, language } = useLanguage();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "captchaError">("idle");
  
  // Track theme specifically for the reCAPTCHA widget
  const [captchaTheme, setCaptchaTheme] = useState<"dark" | "light">("dark");

  // Sync reCAPTCHA theme with the document's data-theme attribute
  useEffect(() => {
    // Function to check the current theme
    const updateTheme = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') as "dark" | "light" || "dark";
      setCaptchaTheme(currentTheme);
    };

    // Update once on mount
    updateTheme();

    // Set up a MutationObserver to listen for theme changes on the <html> tag
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const token = recaptchaRef.current?.getValue();
    if (!token) {
      setStatus("captchaError");
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, 
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          language: language,
          site_url: window.location.hostname,
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
        <h2 className="text-3xl font-bold mb-8 text-accent">{content.contact.title}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder={content.contact.name} 
            value={formData.name}
            required
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-3 bg-secondary border border-border-theme text-main placeholder:text-muted rounded focus:border-accent outline-none"
          />
          <input 
            type="email" 
            placeholder={content.contact.email} 
            value={formData.email}
            required
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-3 bg-secondary border border-border-theme text-main placeholder:text-muted rounded focus:border-accent outline-none"
          />
          <textarea 
            rows={5}
            placeholder={content.contact.message} 
            value={formData.message}
            required
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full p-3 bg-secondary border border-border-theme text-main placeholder:text-muted rounded focus:border-accent outline-none"
          />
          
          <div className="flex justify-center py-2">
            <ReCAPTCHA
              key={captchaTheme} // Re-renders the component when theme changes
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              theme={captchaTheme}
            />
          </div>

          {status === "error" && <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again.</p>}
          {status === "captchaError" && <p className="text-red-500 text-sm font-medium">Please complete the reCAPTCHA.</p>}
          {status === "success" && <p className="text-accent text-sm font-medium">Message sent successfully!</p>}

          <button 
            type="submit" 
            disabled={status === "sending"}
            className="w-full bg-accent text-primary py-3 rounded font-bold hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : content.contact.send}
          </button>
        </form>
      </motion.div>
    </section>
  );
}