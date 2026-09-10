"use client";

import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductsSection({
  id,
  eyebrow,
  title,
  description,
  products,
  accent,
  tone,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  products: Product[];
  accent: "blueprint" | "ignition" | "steel";
  tone: "surface" | "bg";
}) {
  return (
    <section id={id} className={`border-b border-hairline ${tone === "surface" ? "bg-surface" : "bg-bg"} py-20 md:py-28`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <p className={`font-mono text-xs ${accent === "blueprint" ? "text-blueprint" : accent === "ignition" ? "text-ignition" : "text-steel"}`}>
            {eyebrow}
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-ink md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-balance leading-relaxed text-ink-muted">{description}</p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} accent={accent} priority={i < 4} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
