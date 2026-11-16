"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Product } from "@/data/products";
import ImageSkeleton from "./ImageSkeleton";
import { ui, type Lang } from "@/lib/i18n";
import { productDescription, productPath } from "@/lib/site";

const ACCENT_TEXT = {
  blueprint: "text-blueprint",
  ignition: "text-ignition",
  steel: "text-steel",
} as const;

export default function ProductCard({
  product,
  accent,
  priority = false,
  lang,
}: {
  product: Product;
  accent: "blueprint" | "ignition" | "steel";
  priority?: boolean;
  lang: Lang;
}) {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const t = ui[lang].card;
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
          <>
            {!loaded && <ImageSkeleton />}
            <Image
              src={product.image}
              alt={t.alt(product.name)}
              fill
              priority={priority}
              onLoad={() => setLoaded(true)}
              className={`object-cover transition-all duration-700 ease-out group-hover:scale-[1.06] ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
            />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-surface2 text-ink-faint">
            <span className="font-mono text-xs">{t.soon}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-ink">
          <Link href={productPath(product, lang)} className="hover:underline focus-visible:underline">
            {product.name}
          </Link>
        </h3>
        <p className={`mt-1 text-sm ${accentText}`}>{product.tagline}</p>
        {product.sku && <p className="mt-1 text-xs text-ink-muted">{t.article}{lang === "zh" ? "：" : ": "}{product.sku}</p>}
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{productDescription(product, lang)}</p>

        <Link href={productPath(product, lang)} className="mt-4 self-start text-sm text-ink underline underline-offset-4">
          {t.details}
          <span className="sr-only">{t.forName(product.name)}</span>
        </Link>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="mt-4 flex items-center gap-1.5 self-start text-xs font-medium text-ink-faint transition-colors hover:text-ink"
        >
          <ChevronDown size={14} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          {open ? t.hide : t.see}
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
