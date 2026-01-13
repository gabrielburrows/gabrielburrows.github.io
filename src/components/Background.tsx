"use client";
import { useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Background() {
  // 1. Create Motion Values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Smooth the movement with springs
  const springConfig = { damping: 50, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate position relative to center of screen (-0.5 to 0.5)
      const { clientX, clientY } = e;
      const xProgress = (clientX / window.innerWidth) - 0.5;
      const yProgress = (clientY / window.innerHeight) - 0.5;
      
      mouseX.set(xProgress);
      mouseY.set(yProgress);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-950">
      {/* Blob 1: Top Left (Purple) - Moves slightly */}
      <motion.div
        style={{
          x: smoothX.get() * 50, // Move range: 50px
          y: smoothY.get() * 50,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-purple-900/30 rounded-full blur-[100px]"
      />

      {/* Blob 2: Bottom Right (Blue) - Moves opposite direction */}
      <motion.div
        style={{
          x: smoothX.get() * -100, // Moves further and in reverse
          y: smoothY.get() * -100,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-150 h-150 bg-blue-900/20 rounded-full blur-[120px]"
      />

      {/* Blob 3: Center (Indigo) - Deep Parallax */}
      <motion.div
        style={{
          x: smoothX.get() * 150,
          y: smoothY.get() * 150,
        }}
        className="absolute top-[20%] left-[30%] w-100 h-100 bg-indigo-900/10 rounded-full blur-[110px]"
      />

      {/* Subtle Noise Overlay (Optional - adds texture) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}