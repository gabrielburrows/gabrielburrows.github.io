"use client";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 360],
          borderRadius: ["20%", "50%", "20%"],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-16 h-16 border-4 border-purple-500 border-t-transparent"
      />
    </motion.div>
  );
}