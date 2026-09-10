"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Product } from "@/data/products";

const ACCENT_TEXT = {
  blueprint: "text-blueprint",
  ignition: "text-ignition",
  steel: "text-steel",
} as const;

const CATEGORY_LABEL: Record<Product["category"], string> = {
  tool: "workshop equipment",
};

export default function ProductCard({
  product,
  accent,
  priority = false,
}: {
  product: Product;
  accent: "blueprint" | "ignition" | "steel";
  priority?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const accentText = ACCENT_TEXT[accent];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative flex flex-col border border-hairline bg-surface transition-colors hover:border-hairline2"
    >
      <div className="relative aspect-[4/5] overflow-hidden border-b border-hairline bg-surface2">
        {product.image ? (
          <Image
            src={product.image}
            alt={`${product.name} — ${CATEGORY_LABEL[product.category]}`}
            fill
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-surface2 text-ink-faint">
            <span className="font-mono text-xs">soon</span>
          </div>
        )}
        {typeof product.price === "number" && (
          <span className="absolute right-0 top-0 border-b border-l border-hairline2 bg-bg/85 px-2.5 py-1 font-mono text-[11px] text-ink">
            ${product.price.toLocaleString()}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-ink">{product.name}</h3>
        <p className={`mt-1 text-sm ${accentText}`}>{product.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{product.description}</p>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="mt-4 flex items-center gap-1.5 self-start text-xs font-medium text-ink-faint transition-colors hover:text-ink"
        >
          <ChevronDown size={14} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          {open ? "Hide spec sheet" : "View spec sheet"}
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-hairline pt-4 font-mono text-xs">
                {product.specs.map((s) => (
                  <div key={s.label} className="flex flex-col gap-0.5">
                    <dt className="text-ink-faint">{s.label}</dt>
                    <dd className="text-ink">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
