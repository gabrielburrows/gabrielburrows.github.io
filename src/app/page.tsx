"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "../../src/components/Header";
import Hero from "../../src/components/Hero";
import About from "../../src/components/About";
import Education from "../../src/components/Education";
import Projects from "../../src/components/Projects";
import Stack from "../../src/components/Stack";
import Contact from "../../src/components/Contact";
import Footer from "../../src/components/Footer";
import Background from "../../src/components/Background";
import Loader from "../../src/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <main className="relative min-h-screen">
          <Background />
          <Header />
          <Hero />
          <About />
          <Education />
          <Projects />
          <Stack />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}