"use client";

import { motion } from "motion/react";
import { ShieldCheck, MessageSquareText, MapPin, BadgeCheck } from "lucide-react";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "Secure payments",
    copy: "All transactions are encrypted & protected end-to-end.",
  },
  {
    icon: MessageSquareText,
    title: "Easy support",
    copy: "Quick help via email & chat — replies under 12 hours.",
  },
  {
    icon: MapPin,
    title: "Made in India",
    copy: "Cut, sewn and printed in Tirupur & Bangalore.",
  },
];

export function TrustBadges() {
  return (
    <section className="relative w-full bg-background py-16 md:py-20 border-y border-white/[0.06]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-10 md:gap-6">
          {ITEMS.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="flex items-start gap-5"
              >
                <div className="shrink-0 mt-1 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-accent">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.3em] uppercase text-white/90">
                    {it.title}
                  </div>
                  <p className="mt-2 text-sm md:text-base text-white/55 leading-relaxed max-w-xs">
                    {it.copy}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-2 text-[10px] tracking-[0.3em] uppercase text-accent">
            <BadgeCheck className="h-3.5 w-3.5" />
            Trusted by early customers across India
          </div>
        </motion.div>
      </div>
    </section>
  );
}
