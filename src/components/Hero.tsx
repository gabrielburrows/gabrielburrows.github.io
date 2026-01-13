"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { content } = useLanguage();
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  // Speed settings:
  // Lower = Faster. 80ms for typing, 30ms for deleting.
  const [delta, setDelta] = useState(80); 
  const typingSpeed = 80;
  const deletingSpeed = 30;
  const pauseDuration = 1500; // How long it stays visible (ms)

  const toRotate = content.hero.titles;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text, delta, loopNum, content]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(deletingSpeed);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(pauseDuration); // Pause at the end of the word
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(typingSpeed);
    }
  };

  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center text-center px-4 pt-16 transition-colors duration-500">
      {/* Primary Focus: Your Name */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl sm:text-7xl md:text-9xl font-extrabold text-main tracking-tight leading-none mb-4"
      >
        {content.hero.greeting}
      </motion.h2>

      {/* Secondary Info: Typed Text (Snappier Animation) */}
      <div className="min-h-10 md:min-h-15 flex items-center justify-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-medium text-accent tracking-wide whitespace-nowrap">
          {text}
          <motion.span 
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="text-accent ml-1"
          >
            |
          </motion.span>
        </h1>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-muted max-w-lg text-lg md:text-xl"
      >
        {/* Placeholder for extra bio or scroll down hint */}
      </motion.p>
    </section>
  );
}