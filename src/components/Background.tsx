"use client";
import { useEffect } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export default function Background() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smoothing the mouse movement
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  // Transform values for different intensities of movement
  const translateX1 = useTransform(smoothX, [-0.5, 0.5], [-50, 50]);
  const translateY1 = useTransform(smoothY, [-0.5, 0.5], [-50, 50]);
  
  const translateX2 = useTransform(smoothX, [-0.5, 0.5], [100, -100]);
  const translateY2 = useTransform(smoothY, [-0.5, 0.5], [100, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate progress relative to the center of the screen
      const xProgress = (e.clientX / window.innerWidth) - 0.5;
      const yProgress = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(xProgress);
      mouseY.set(yProgress);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-primary transition-colors duration-700">
      {/* Blob 1: Top Left */}
      <motion.div
        style={{ x: translateX1, y: translateY1 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-accent rounded-full blur-[120px]"
      />

      {/* Blob 2: Bottom Right */}
      <motion.div
        style={{ x: translateX2, y: translateY2 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-accent rounded-full blur-[140px]"
      />

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}