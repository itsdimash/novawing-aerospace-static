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

  const rivetPairs: [number, number, number][] = [
    // [x, topY, bottomY]
    [288, 319, 355],
    [328, 316, 358],
    [369, 313, 361],
    [409, 311, 363],
    [450, 308, 366],
    [491, 306, 368],
    [518, 304, 370],
    [532, 304, 370],
    [562, 302, 372],
    [572, 302, 372],
    [613, 314, 359],
    [653, 317, 356],
  ];

  return (
    <svg
      viewBox="0 0 800 700"
      className="w-full max-w-3xl mx-auto md:mx-0"
      role="img"
      aria-label="Technical line drawing of a fixed-wing RC sport aerobat aircraft, top-down, with dimension callouts"
    >
      {/* centerline */}
      <motion.line
        x1="20"
        y1="337"
        x2="775"
        y2="337"
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
        d="M150,320 L239,322 C290,318 400,312 448,308 L602,300 C660,296 700,304 718,326 L718,348 C700,370 660,378 602,374 L448,366 C400,362 290,356 239,352 L150,354 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="text-blueprint"
        initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
        animate={finalState ?? { pathLength: 1, opacity: 1 }}
        transition={outlineTransition(0.2)}
      />

      {/* forward wings */}
      <motion.path
        d="M153,320 L163,160 Q165,154 171,154 L209,154 Q215,154 217,160 L239,322 Z"
        className="text-blueprint fill-current"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="1.4"
        initial={reduce ? undefined : { opacity: 0, scale: 0.94 }}
        animate={finalState ?? { opacity: 1, scale: 1 }}
        style={{ transformOrigin: "185px 240px" }}
        transition={fillTransition(0.9)}
      />
      <motion.path
        d="M153,354 L163,514 Q165,520 171,520 L209,520 Q215,520 217,514 L239,352 Z"
        className="text-blueprint fill-current"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="1.4"
        initial={reduce ? undefined : { opacity: 0, scale: 0.94 }}
        animate={finalState ?? { opacity: 1, scale: 1 }}
        style={{ transformOrigin: "185px 434px" }}
        transition={fillTransition(0.9)}
      />
      <motion.line
        x1="177"
        y1="170"
        x2="175"
        y2="312"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="6 5"
        className="text-blueprint-dim"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={finalState ?? { opacity: 1 }}
        transition={fillTransition(0.95)}
      />
      <motion.line
        x1="177"
        y1="504"
        x2="175"
        y2="362"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="6 5"
        className="text-blueprint-dim"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={finalState ?? { opacity: 1 }}
        transition={fillTransition(0.95)}
      />

      {/* main wings */}
      <motion.path
        d="M448,308 L478,60 Q488,46 498,46 L562,46 Q572,46 578,60 L602,300 Z"
        className="text-blueprint fill-current"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="1.8"
        initial={reduce ? undefined : { opacity: 0, scale: 0.94 }}
        animate={finalState ?? { opacity: 1, scale: 1 }}
        style={{ transformOrigin: "525px 177px" }}
        transition={fillTransition(1.1)}
      />
      <motion.path
        d="M448,366 L478,614 Q488,628 498,628 L562,628 Q572,628 578,614 L602,374 Z"
        className="text-blueprint fill-current"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="1.8"
        initial={reduce ? undefined : { opacity: 0, scale: 0.94 }}
        animate={finalState ?? { opacity: 1, scale: 1 }}
        style={{ transformOrigin: "525px 497px" }}
        transition={fillTransition(1.1)}
      />
      <motion.line
        x1="509"
        y1="70"
        x2="486"
        y2="300"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="6 5"
        className="text-blueprint-dim"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={finalState ?? { opacity: 1 }}
        transition={fillTransition(1.15)}
      />
      <motion.line
        x1="509"
        y1="604"
        x2="486"
        y2="374"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="6 5"
        className="text-blueprint-dim"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={finalState ?? { opacity: 1 }}
        transition={fillTransition(1.15)}
      />

      {/* nose cone */}
      <motion.path
        d="M88,337 Q108,320 144,320 L144,354 Q108,354 88,337 Z"
        className="text-ignition fill-current"
        stroke="currentColor"
        strokeWidth="1"
        initial={reduce ? undefined : { opacity: 0, scale: 0.9 }}
        animate={finalState ?? { opacity: 0.85, scale: 1 }}
        style={{ transformOrigin: "116px 337px" }}
        transition={fillTransition(1.3)}
      />
      <motion.circle
        cx="122"
        cy="337"
        r="11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-ink-faint"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={finalState ?? { opacity: 1 }}
        transition={fillTransition(1.35)}
      />

      {/* propeller hub */}
      <motion.circle
        cx="718"
        cy="337"
        r="11"
        fill="none"
        className="text-blueprint"
        stroke="currentColor"
        strokeWidth="1.4"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={finalState ?? { opacity: 1 }}
        transition={fillTransition(1.4)}
      />

      {/* propeller, spinning */}
      <motion.g
        style={{ transformOrigin: "718px 337px" }}
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
        <path
          d="M718,325 C708,300 706,260 718,218 C730,260 728,300 718,325 Z"
          className="text-blueprint"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M718,349 C708,374 706,414 718,456 C730,414 728,374 718,349 Z"
          className="text-blueprint"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </motion.g>

      {/* airflow motion lines, incoming toward the nose */}
      {[331, 343].map((y, i) => (
        <motion.line
          key={`incoming-${y}`}
          x1="20"
          y1={y}
          x2="80"
          y2={y}
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="5 7"
          className="text-blueprint-dim"
          initial={reduce ? undefined : { opacity: 0 }}
          animate={
            reduce
              ? { opacity: 0.6 }
              : { opacity: 0.6, strokeDashoffset: [0, -24] }
          }
          transition={
            reduce
              ? { duration: 0.4, delay: 1.6 }
              : {
                  opacity: { duration: 0.4, delay: 1.6 },
                  strokeDashoffset: { duration: 0.9, delay: 1.6 + i * 0.15, repeat: Infinity, ease: "linear" },
                }
          }
        />
      ))}

      {/* airflow motion lines, prop wash */}
      {[331, 343].map((y, i) => (
        <motion.line
          key={`wake-${y}`}
          x1="735"
          y1={y}
          x2="775"
          y2={y}
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="5 7"
          className="text-blueprint-dim"
          initial={reduce ? undefined : { opacity: 0 }}
          animate={
            reduce
              ? { opacity: 0.6 }
              : { opacity: 0.6, strokeDashoffset: [0, -24] }
          }
          transition={
            reduce
              ? { duration: 0.4, delay: 1.6 }
              : {
                  opacity: { duration: 0.4, delay: 1.6 },
                  strokeDashoffset: { duration: 0.9, delay: 1.6 + i * 0.15, repeat: Infinity, ease: "linear" },
                }
          }
        />
      ))}

      {/* rivets */}
      {rivetPairs.map(([x, topY, botY], i) => (
        <motion.g
          key={x}
          initial={reduce ? undefined : { opacity: 0 }}
          animate={finalState ?? { opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 + i * 0.04 }}
        >
          <circle cx={x} cy={topY} r="1.8" className="fill-current text-blueprint-dim" />
          <circle cx={x} cy={botY} r="1.8" className="fill-current text-blueprint-dim" />
        </motion.g>
      ))}

      {/* dimension: chord */}
      <motion.g
        initial={reduce ? undefined : { opacity: 0 }}
        animate={finalState ?? { opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.55 }}
      >
        <line x1="472" y1="153" x2="628" y2="153" stroke="currentColor" strokeWidth="1" strokeDasharray="1 5" className="text-blueprint-dim" />
        <text x="634" y="157" className="fill-current text-ink-muted font-mono" fontSize="12">
          CHORD 206
        </text>
      </motion.g>

      {/* dimension: wingspan */}
      <motion.g
        initial={reduce ? undefined : { opacity: 0 }}
        animate={finalState ?? { opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        <line x1="488" y1="46" x2="50" y2="46" stroke="currentColor" strokeWidth="1" strokeDasharray="1 5" className="text-blueprint-dim" />
        <line x1="488" y1="628" x2="50" y2="628" stroke="currentColor" strokeWidth="1" strokeDasharray="1 5" className="text-blueprint-dim" />
        <line x1="50" y1="46" x2="44" y2="46" stroke="currentColor" strokeWidth="1" className="text-blueprint-dim" />
        <line x1="50" y1="628" x2="44" y2="628" stroke="currentColor" strokeWidth="1" className="text-blueprint-dim" />
        <line x1="50" y1="46" x2="50" y2="628" stroke="currentColor" strokeWidth="1" className="text-blueprint-dim" />
        <text
          x="20"
          y="337"
          className="fill-current text-ink-muted font-mono"
          fontSize="12"
          textAnchor="middle"
          transform="rotate(-90 20 337)"
        >
          SPAN 1180 mm
        </text>
      </motion.g>

      {/* dimension: length */}
      <motion.g
        initial={reduce ? undefined : { opacity: 0 }}
        animate={finalState ?? { opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.7 }}
      >
        <line x1="88" y1="628" x2="88" y2="660" stroke="currentColor" strokeWidth="1" className="text-blueprint-dim" />
        <line x1="718" y1="628" x2="718" y2="660" stroke="currentColor" strokeWidth="1" className="text-blueprint-dim" />
        <line x1="88" y1="654" x2="718" y2="654" stroke="currentColor" strokeWidth="1" className="text-blueprint-dim" />
        <text x="403" y="680" className="fill-current text-ink-muted font-mono" fontSize="12" textAnchor="middle">
          L 1000 mm
        </text>
      </motion.g>

      {/* callout label */}
      <motion.g
        initial={reduce ? undefined : { opacity: 0, y: 6 }}
        animate={finalState ?? { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.9 }}
      >
        <text x="780" y="20" className="fill-current text-ink-muted font-mono" fontSize="15" textAnchor="end">
          FIG. 12
        </text>
        <line x1="700" y1="28" x2="780" y2="28" stroke="currentColor" strokeWidth="1" className="text-blueprint-dim" />
        <text x="780" y="42" className="fill-current text-ink-faint font-mono" fontSize="10" textAnchor="end">
          SPORT AEROBAT
        </text>
        <text x="780" y="54" className="fill-current text-ink-faint font-mono" fontSize="10" textAnchor="end">
          REV. C · PROP 11×6
        </text>
      </motion.g>
    </svg>
  );
}
