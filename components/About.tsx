"use client";

import { motion } from "framer-motion";
import { Wind, Flame, Compass, Users } from "lucide-react";

const items = [
  {
    icon: Compass,
    title: "Curated, not everything",
    body: "Every kit, part, and tool in the catalog is chosen for builders who actually fly what they build, not padded out with filler SKUs.",
  },
  {
    icon: Wind,
    title: "Checked before it ships",
    body: "Specs on the sheet are pulled and verified against the manufacturer, from wingspan to flight time, so what you order matches what you get.",
  },
  {
    icon: Flame,
    title: "Built for the whole build",
    body: "Airframes and kits sit next to the batteries, motors, and finishing tools that go with them, so a build doesn't stall on a missing part.",
  },
  {
    icon: Users,
    title: "Stocked for builders",
    body: "Restocks and new listings are driven by what customers are actually asking for, not just what's easy to source.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-b border-hairline bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <h2 className="text-balance font-display text-3xl font-semibold text-ink md:text-4xl">
            How the catalog gets built.
          </h2>
          <p className="mt-4 leading-relaxed text-ink-muted">
            Nothing goes on the shelf without a reason. Here is what we look for
            before a kit, part, or tool gets a listing.
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
