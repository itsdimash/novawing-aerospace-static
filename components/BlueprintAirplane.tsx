"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";

export default function BlueprintAirplane() {
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
      viewBox="0 0 480 300"
      className="w-full max-w-3xl mx-auto md:mx-0"
      role="img"
      aria-label="Technical line drawing of a fixed-wing RC aircraft, top-down, with dimension callouts"
    >
      {/* centerline */}
      <motion.line
        x1="52"
        y1="150"
        x2="452"
        y2="150"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 6"
        className="text-blueprint-dim"
        initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
        animate={finalState ?? { pathLength: 1, opacity: 1 }}
        transition={outlineTransition(0.1)}
      />

      {/* fuselage outline */}
      <motion.path
        d="M448,150 C 424,138 388,136 320,138 L150,138 C 96,138 66,144 56,150 C 66,156 96,162 150,162 L320,162 C 388,164 424,162 448,150 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-blueprint"
        initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
        animate={finalState ?? { pathLength: 1, opacity: 1 }}
        transition={outlineTransition(0.2)}
      />

      {/* main wings */}
      <motion.path
        d="M292,139 L326,32 L246,32 L226,139 Z"
        className="text-blueprint fill-current"
        fillOpacity="0.06"
        stroke="currentColor"
        strokeWidth="1.6"
        initial={reduce ? undefined : { opacity: 0, scale: 0.94 }}
        animate={finalState ?? { opacity: 1, scale: 1 }}
        style={{ transformOrigin: "260px 139px" }}
        transition={fillTransition(0.9)}
      />
      <motion.path
        d="M292,161 L326,268 L246,268 L226,161 Z"
        className="text-blueprint fill-current"
        fillOpacity="0.06"
        stroke="currentColor"
        strokeWidth="1.6"
        initial={reduce ? undefined : { opacity: 0, scale: 0.94 }}
        animate={finalState ?? { opacity: 1, scale: 1 }}
        style={{ transformOrigin: "260px 161px" }}
        transition={fillTransition(0.9)}
      />

      {/* tail wings */}
      <motion.path
        d="M156,139 L177,88 L119,88 L100,139 Z"
        className="text-blueprint fill-current"
        fillOpacity="0.06"
        stroke="currentColor"
        strokeWidth="1.4"
        initial={reduce ? undefined : { opacity: 0, scale: 0.94 }}
        animate={finalState ?? { opacity: 1, scale: 1 }}
        style={{ transformOrigin: "138px 139px" }}
        transition={fillTransition(1.1)}
      />
      <motion.path
        d="M156,161 L177,212 L119,212 L100,161 Z"
        className="text-blueprint fill-current"
        fillOpacity="0.06"
        stroke="currentColor"
        strokeWidth="1.4"
        initial={reduce ? undefined : { opacity: 0, scale: 0.94 }}
        animate={finalState ?? { opacity: 1, scale: 1 }}
        style={{ transformOrigin: "138px 161px" }}
        transition={fillTransition(1.1)}
      />

      {/* vertical fin */}
      <motion.path
        d="M104,149 L124,104 L146,149 Z"
        className="text-ignition fill-current"
        initial={reduce ? undefined : { opacity: 0, scale: 0.9 }}
        animate={finalState ?? { opacity: 0.85, scale: 1 }}
        style={{ transformOrigin: "125px 149px" }}
        transition={fillTransition(1.3)}
      />

      {/* nose hub */}
      <motion.circle
        cx="448"
        cy="150"
        r="6"
        className="text-ink-faint fill-current"
        stroke="currentColor"
        strokeWidth="1"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={finalState ?? { opacity: 1 }}
        transition={fillTransition(1.4)}
      />

      {/* propeller, spinning */}
      <motion.g
        style={{ transformOrigin: "448px 150px" }}
        initial={reduce ? undefined : { opacity: 0 }}
        animate={
          reduce
            ? { opacity: 1 }
            : { opacity: 1, rotate: 360 }
        }
        transition={
          reduce
            ? { duration: 0.4, delay: 1.5 }
            : { opacity: { duration: 0.3, delay: 1.5 }, rotate: { duration: 1.1, delay: 1.5, repeat: Infinity, ease: "linear" } }
        }
      >
        <line x1="448" y1="150" x2="448" y2="122" stroke="currentColor" strokeWidth="2" className="text-ink-faint" strokeLinecap="round" />
        <line x1="448" y1="150" x2="448" y2="178" stroke="currentColor" strokeWidth="2" className="text-ink-faint" strokeLinecap="round" />
      </motion.g>

      {/* rivets */}
      {[190, 250, 310, 370].map((x, i) => (
        <motion.g
          key={x}
          initial={reduce ? undefined : { opacity: 0 }}
          animate={finalState ?? { opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 + i * 0.06 }}
        >
          <circle cx={x} cy="140" r="1.6" className="fill-current text-blueprint-dim" />
          <circle cx={x} cy="160" r="1.6" className="fill-current text-blueprint-dim" />
        </motion.g>
      ))}

      {/* dimension: wingspan */}
      <motion.g
        initial={reduce ? undefined : { opacity: 0 }}
        animate={finalState ?? { opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <line x1="326" y1="20" x2="338" y2="20" stroke="currentColor" strokeWidth="1" className="text-blueprint-dim" />
        <line x1="326" y1="280" x2="338" y2="280" stroke="currentColor" strokeWidth="1" className="text-blueprint-dim" />
        <line x1="332" y1="20" x2="332" y2="280" stroke="currentColor" strokeWidth="1" className="text-blueprint-dim" />
        <text
          x="340"
          y="150"
          className="fill-current text-ink-muted font-mono"
          fontSize="11"
          transform="rotate(90 340 150)"
        >
          Span 860mm
        </text>
      </motion.g>

      {/* dimension: length */}
      <motion.g
        initial={reduce ? undefined : { opacity: 0 }}
        animate={finalState ?? { opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.7 }}
      >
        <line x1="56" y1="220" x2="56" y2="232" stroke="currentColor" strokeWidth="1" className="text-blueprint-dim" />
        <line x1="448" y1="220" x2="448" y2="232" stroke="currentColor" strokeWidth="1" className="text-blueprint-dim" />
        <line x1="56" y1="226" x2="448" y2="226" stroke="currentColor" strokeWidth="1" className="text-blueprint-dim" />
        <text x="230" y="246" className="fill-current text-ink-muted font-mono" fontSize="11">
          L 760mm
        </text>
      </motion.g>

      {/* callout label */}
      <motion.g
        initial={reduce ? undefined : { opacity: 0, y: 6 }}
        animate={finalState ?? { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.9 }}
      >
        <text x="20" y="40" className="fill-current text-ink-muted font-mono" fontSize="10">
          Fig. 03, primary trainer
        </text>
        <text x="20" y="54" className="fill-current text-ink-faint font-mono" fontSize="10">
          Rev. C
        </text>
      </motion.g>
    </svg>
  );
}
