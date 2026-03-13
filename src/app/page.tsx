"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Stack from "../components/Stack";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Background from "../components/Background";
import Loader from "../components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Loader sits at z-[200] — always on top */}
      <AnimatePresence>
        {loading && (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* Curtain at z-[90] — below the loader and Header (z-50) flight path */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            key="curtain"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[90] bg-primary pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Header at z-50 — above curtain, below loader */}
      {!loading && <Header />}

      <main className="relative min-h-screen">
        <Background />
        <Hero />
        <About />
        <Education />
        <Projects />
        <Stack />
        <Contact />
        <Footer />
      </main>
    </>
  );
}