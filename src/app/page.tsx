"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
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