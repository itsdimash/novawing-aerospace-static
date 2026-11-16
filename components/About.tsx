"use client";

import { motion } from "framer-motion";
import { Wind, Flame, Compass, Users } from "lucide-react";
import { ui, type Lang } from "@/lib/i18n";

const icons = [Compass, Wind, Flame, Users];

export default function About({ lang }: { lang: Lang }) {
  const t = ui[lang].about;
  const items = t.items.map((item, i) => ({ ...item, icon: icons[i] }));
  return (
    <section id="about" className="border-b border-hairline bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <h2 className="text-balance font-display text-3xl font-semibold text-ink md:text-4xl">
            {t.heading}
          </h2>
          <p className="mt-4 leading-relaxed text-ink-muted">
            {t.sub}
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="border-t-2 border-blueprint pt-5"
            >
              <Icon className="text-blueprint" size={22} strokeWidth={1.6} />
              <h3 className="mt-4 font-display text-base font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
