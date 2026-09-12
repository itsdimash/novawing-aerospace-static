"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import BlueprintAirplane from "./BlueprintAirplane";

export default function Hero({
  headline,
  subhead,
}: {
  headline: string;
  subhead: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const glow = useMotionTemplate`radial-gradient(480px circle at ${mx}px ${my}px, rgba(110,168,254,0.10), transparent 70%)`;

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMouseMove}
      className="blueprint-bg relative overflow-hidden border-b border-hairline pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ backgroundImage: glow }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/0 via-bg/10 to-bg" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.1] text-ink md:text-5xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-md text-balance text-base leading-relaxed text-ink-muted">
            {subhead}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#tools"
              className="inline-flex items-center border border-ignition bg-ignition px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-ignition-dim hover:border-ignition-dim"
            >
              View the full catalog
            </a>
            <a
              href="#contact"
              className="inline-flex items-center border border-hairline2 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-blueprint hover:text-blueprint"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-14 flex items-center gap-6 font-mono text-xs text-ink-faint">
            <span>Curated catalog</span>
            <span className="h-px w-8 bg-hairline2" />
            <span>Specs verified</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <BlueprintAirplane />
        </motion.div>
      </div>
    </section>
  );
}
