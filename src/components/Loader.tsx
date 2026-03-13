"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // step 0 (0ms):     "Gabriel" fades/slides in
    // step 1 (150ms):   "Gabriel" begins exiting upward
    // step 2 (425ms):  Gabriel is fully gone — Burrows rises from below
    // onComplete(800ms): Burrows has settled, Header mounts, layoutId flight begins
    const t1 = setTimeout(() => setStep(1), 150);
    const t2 = setTimeout(() => setStep(2), 425);
    const t3 = setTimeout(() => onComplete(), 700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-primary overflow-hidden"
    >
      <div className="relative flex items-center justify-center w-full" style={{ height: '120px' }}>
        <AnimatePresence>
          {/* GABRIEL — visible in step 0, exits in step 1 */}
          {step < 2 && (
            <motion.h1
              key="gabriel"
              initial={{ y: 40, opacity: 0 }}
              animate={step === 0
                ? { y: 0, opacity: 1 }
                : { y: -70, opacity: 0 }  // step 1: fly upward
              }
              transition={step === 0
                ? { duration: 0.5, ease: [0.33, 1, 0.68, 1] }
                : { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
              }
              className="absolute text-5xl md:text-7xl font-bold tracking-tighter text-main"
            >
              GABRIEL
            </motion.h1>
          )}

          {/* BURROWS — only enters after Gabriel is fully gone (step 2) */}
          {step >= 2 && (
            <motion.h1
              key="burrows"
              layoutId="header-logo"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
              className="absolute text-5xl md:text-7xl font-bold tracking-tighter text-accent"
            >
              BURROWS.
            </motion.h1>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}