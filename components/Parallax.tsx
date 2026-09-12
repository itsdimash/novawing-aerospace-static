"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import BlueprintAirplane from "./BlueprintAirplane";

export default function Parallax() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-6%", "6%"]);

  return (
    <section
      ref={ref}
      className="blueprint-bg relative h-[58vh] min-h-[420px] overflow-hidden border-b border-hairline bg-surface"
    >
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute right-[6%] top-1/2 hidden w-56 -translate-y-1/2 opacity-30 md:block lg:w-72"
      >
        <BlueprintAirplane />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
      <div className="relative flex h-full items-end">
        <div className="mx-auto w-full max-w-6xl px-6 pb-14">
          <p className="font-mono text-xs text-ignition">From the catalog</p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-semibold text-ink md:text-5xl">
            From the shelf to the runway.
          </h2>
        </div>
      </div>
    </section>
  );
}
