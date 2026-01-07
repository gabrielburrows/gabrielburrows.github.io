"use client";
import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-950">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]"
      />
    </div>
  );
}