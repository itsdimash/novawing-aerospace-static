"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function Contact({
  headline,
  description,
  email,
  address,
}: {
  headline: string;
  description: string;
  email: string;
  address: string;
}) {
  return (
    <section id="contact" className="border-b border-hairline bg-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-balance font-display text-3xl font-semibold text-ink md:text-4xl">
            {headline}
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-ink-muted">{description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-hairline bg-bg p-8"
        >
          <ul className="flex flex-col gap-6">
            <li className="flex items-start gap-4">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-hairline2 text-ignition">
                <Mail size={16} />
              </span>
              <div>
                <p className="text-xs text-ink-faint">Email</p>
                <p className="mt-0.5 font-mono text-sm text-ink">{email}</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-hairline2 text-steel">
                <MapPin size={16} />
              </span>
              <div>
                <p className="text-xs text-ink-faint">Address</p>
                <p className="mt-0.5 font-mono text-sm leading-relaxed text-ink">{address}</p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
