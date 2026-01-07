"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { content } = useLanguage();
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);

  const toRotate = content.hero.titles;
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text, delta, loopNum, content]); // Re-run when dependencies change

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) setDelta(50);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  };

  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center text-center px-4 pt-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl md:text-2xl text-purple-400 mb-4"
      >
        {content.hero.greeting}
      </motion.h2>
      <h1 className="text-4xl md:text-7xl font-bold h-[80px]">
        {text}
        <span className="animate-pulse text-purple-500">|</span>
      </h1>
    </section>
  );
}