"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";

export default function BlueprintRocket() {
  const reduce = useReducedMotion();

  const outlineTransition = (delay: number): Transition => ({
    pathLength: { duration: 1.6, delay, ease: [0.65, 0, 0.35, 1] },
    opacity: { duration: 0.4, delay },
  });

  const fillTransition = (delay: number): Transition => ({
    duration: 0.5,
    delay,
    ease: "easeOut",
  });

  const finalState = reduce ? true : undefined;

  return (
    <svg
      viewBox="0 0 320 560"
      className="w-full max-w-md mx-auto md:mx-0"
      role="img"
      aria-label="Technical line drawing of a two-fin model rocket airframe with dimension callouts"
    >
      {/* centerline */}
      <motion.line
        x1="160"
        y1="18"
        x2="160"
        y2="408"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 6"
        className="text-blueprint-dim"
        initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
        animate={finalState ?? { pathLength: 1, opacity: 1 }}
        transition={outlineTransition(0.1)}
      />

      {/* nose + body outline, left side */}
      <motion.path
        d="M160,20 Q122,66 126,112 L126,382"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-blueprint"
        initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
        animate={finalState ?? { pathLength: 1, opacity: 1 }}
        transition={outlineTransition(0.2)}
      />
      {/* nose + body outline, right side */}
      <motion.path
        d="M160,20 Q198,66 194,112 L194,382"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-blueprint"
        initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
        animate={finalState ?? { pathLength: 1, opacity: 1 }}
        transition={outlineTransition(0.2)}
      />
      {/* shoulder line */}
      <motion.line
        x1="126"
        y1="112"
        x2="194"
        y2="112"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-blueprint-dim"
        initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
        animate={finalState ?? { pathLength: 1, opacity: 1 }}
        transition={outlineTransition(0.5)}
      />
      {/* base line */}
      <motion.line
        x1="126"
        y1="382"
        x2="194"
        y2="382"
        stroke="currentColor"
        strokeWidth="2"
        className="text-blueprint"
        initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
        animate={finalState ?? { pathLength: 1, opacity: 1 }}
        transition={outlineTransition(0.9)}
      />

      {/* fins */}
      <motion.path
        d="M126,300 L80,432 L110,432 L126,380 Z"
        className="text-blueprint fill-current"
        stroke="currentColor"
        strokeWidth="1.5"
        initial={reduce ? undefined : { opacity: 0, scale: 0.9 }}
        animate={finalState ?? { opacity: 0.9, scale: 1 }}
        style={{ transformOrigin: "126px 380px" }}
        transition={fillTransition(1.1)}
      />
      <motion.path
        d="M194,300 L240,432 L210,432 L194,380 Z"
        className="text-blueprint fill-current"
        stroke="currentColor"
        strokeWidth="1.5"
        initial={reduce ? undefined : { opacity: 0, scale: 0.9 }}
        animate={finalState ?? { opacity: 0.9, scale: 1 }}
        style={{ transformOrigin: "194px 380px" }}
        transition={fillTransition(1.1)}
      />

      {/* nozzle */}
      <motion.path
        d="M145,382 L175,382 L168,412 L152,412 Z"
        className="text-ink-faint fill-current"
        stroke="currentColor"
        strokeWidth="1"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={finalState ?? { opacity: 1 }}
        transition={fillTransition(1.3)}
      />

      {/* flame flicker */}
      <motion.path
        d="M152,412 L168,412 L163,438 L157,438 Z"
        className="text-ignition fill-current"
        initial={{ opacity: 0 }}
        animate={
          reduce
            ? { opacity: 0.7 }
            : { opacity: [0, 0.85, 0.6, 0.9, 0.7], scaleY: [0.8, 1.1, 0.9, 1.05, 1] }
        }
        style={{ transformOrigin: "160px 412px" }}
        transition={
          reduce
            ? { duration: 0.4, delay: 1.5 }
            : { duration: 1.6, delay: 1.5, repeat: Infinity, repeatType: "mirror" }
        }
      />

      {/* rivets */}
      {[150, 200, 250, 300].map((y, i) => (
        <motion.g
          key={y}
          initial={reduce ? undefined : { opacity: 0 }}
          animate={finalState ?? { opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 + i * 0.06 }}
        >
          <circle cx="132" cy={y} r="1.6" className="fill-current text-blueprint-dim" />
          <circle cx="188" cy={y} r="1.6" className="fill-current text-blueprint-dim" />
        </motion.g>
      ))}

      {/* dimension: length */}
      <motion.g
        initial={reduce ? undefined : { opacity: 0 }}
        animate={finalState ?? { opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <line x1="252" y1="20" x2="264" y2="20" stroke="currentColor" strokeWidth="1" className="text-blueprint-dim" />
        <line x1="252" y1="412" x2="264" y2="412" stroke="currentColor" strokeWidth="1" className="text-blueprint-dim" />
        <line x1="258" y1="20" x2="258" y2="412" stroke="currentColor" strokeWidth="1" className="text-blueprint-dim" />
        <text
          x="266"
          y="220"
          className="fill-current text-ink-muted font-mono"
          fontSize="11"
          transform="rotate(90 266 220)"
        >
          L 640mm
        </text>
      </motion.g>

      {/* dimension: diameter */}
      <motion.g
        initial={reduce ? undefined : { opacity: 0 }}
        animate={finalState ?? { opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.7 }}
      >
        <line x1="126" y1="460" x2="126" y2="472" stroke="currentColor" strokeWidth="1" className="text-blueprint-dim" />
        <line x1="194" y1="460" x2="194" y2="472" stroke="currentColor" strokeWidth="1" className="text-blueprint-dim" />
        <line x1="126" y1="466" x2="194" y2="466" stroke="currentColor" strokeWidth="1" className="text-blueprint-dim" />
        <text x="132" y="486" className="fill-current text-ink-muted font-mono" fontSize="11">
          ⌀ 68mm
        </text>
      </motion.g>

      {/* callout label */}
      <motion.g
        initial={reduce ? undefined : { opacity: 0, y: 6 }}
        animate={finalState ?? { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.9 }}
      >
        <text x="12" y="150" className="fill-current text-ink-muted font-mono" fontSize="10">
          Fig. 03, sustainer
        </text>
        <text x="12" y="164" className="fill-current text-ink-faint font-mono" fontSize="10">
          Rev. C
        </text>
      </motion.g>
    </svg>
  );
}
