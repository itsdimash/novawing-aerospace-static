"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function Preloader() {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(3);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduce) {
      setDone(true);
      return;
    }
    if (count === 0) {
      const t = setTimeout(() => setDone(true), 420);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setCount((c) => c - 1), 380);
    return () => clearTimeout(t);
  }, [count, reduce]);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="blueprint-bg absolute inset-0 opacity-40" />
          <div className="relative flex flex-col items-center gap-4">
            <span className="font-mono text-xs tracking-wide text-ink-faint">
              t-minus ignition sequence
            </span>
            <motion.span
              key={count}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="font-display text-6xl font-semibold text-ink tabular-nums"
            >
              {count > 0 ? count : "Liftoff"}
            </motion.span>
            <div className="h-px w-40 bg-hairline overflow-hidden">
              <motion.div
                className="h-full bg-blueprint"
                initial={{ width: "0%" }}
                animate={{ width: `${((3 - count) / 3) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
