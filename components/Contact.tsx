"use client";

import { type FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

export default function Contact({ headline, description, address, lang }: { headline: string; description: string; address: string; lang: Lang }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const zh = lang === "zh";
  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "5f5c8ebe-0ac7-40a6-85f3-a69be518b2f5";
    setStatus("sending"); setError("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append("subject", "New contact request from Aviorafly");
    formData.append("from_name", "Aviorafly website");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const result = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || !result.success) throw new Error(result.message || "Unable to send your message.");
      form.reset(); setStatus("success");
    } catch (caught) { setStatus("error"); setError(caught instanceof Error ? caught.message : "Unable to send your message."); }
  }
  return (
    <section id="contact" className="border-b border-hairline bg-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-20">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
          <h2 className="text-balance font-display text-3xl font-semibold text-ink md:text-4xl">{headline}</h2>
          <p className="mt-4 max-w-md leading-relaxed text-ink-muted">{description}</p>
          <p className="mt-5 break-words font-semibold text-ink">{site.email}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: 0.1 }} className="border border-hairline bg-bg p-8">
          <form onSubmit={submitForm} className="space-y-5"><input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />
            <div><label htmlFor="aviorafly-name" className="text-sm font-medium text-ink">{zh ? "您的姓名" : "Your name"}</label><input id="aviorafly-name" name="name" required autoComplete="name" className="mt-2 w-full border border-hairline2 bg-surface px-3 py-3 text-ink outline-none placeholder:text-ink-faint focus:border-blueprint" placeholder={zh ? "姓名" : "Name"} /></div>
            <div><label htmlFor="aviorafly-email" className="text-sm font-medium text-ink">{zh ? "电子邮箱" : "Email address"}</label><input id="aviorafly-email" name="email" type="email" required autoComplete="email" className="mt-2 w-full border border-hairline2 bg-surface px-3 py-3 text-ink outline-none placeholder:text-ink-faint focus:border-blueprint" placeholder="you@example.com" /></div>
            <div><label htmlFor="aviorafly-message" className="text-sm font-medium text-ink">{zh ? "您的留言" : "How can we help?"}</label><textarea id="aviorafly-message" name="message" required rows={5} className="mt-2 w-full resize-y border border-hairline2 bg-surface px-3 py-3 text-ink outline-none placeholder:text-ink-faint focus:border-blueprint" placeholder={zh ? "请告诉我们您的需求。" : "Tell us what you need."} /></div>
            <button type="submit" disabled={status === "sending"} className="inline-flex min-h-11 items-center bg-blueprint px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-blueprint-dim disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blueprint">{status === "sending" ? (zh ? "发送中…" : "Sending…") : (zh ? "发送留言" : "Send message")}</button>
            <p aria-live="polite" className={status === "error" ? "text-sm text-red-700" : "text-sm text-ink-muted"}>{status === "success" && (zh ? "感谢您的留言。我们已收到您的信息。" : "Thanks — your message has been sent.")}{status === "error" && error}</p>
          </form>
          <div className="mt-8 flex items-start gap-4"><span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-hairline2 text-steel"><MapPin size={16} /></span><div><p className="text-xs text-ink-faint">{zh ? "地址" : "Address"}</p><p className="mt-0.5 text-sm leading-relaxed text-ink">{address}</p></div></div>
        </motion.div>
      </div>
    </section>
  );
}
