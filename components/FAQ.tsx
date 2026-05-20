"use client";

import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";

const ITEMS = [
  {
    q: "What is the fit like?",
    a: "All MODRN tees are oversized. They sit drop-shouldered with a relaxed body and slightly longer hem. Size up only if you want extra room — we recommend your usual size for the intended fit.",
  },
  {
    q: "What's the fabric quality?",
    a: "Either 220 or 240 GSM 100% combed cotton — depending on the drop. Garment-washed for softness, pre-shrunk, and constructed with double-stitched seams. Built to keep its shape after the 50th wash.",
  },
  {
    q: "How long does delivery take?",
    a: "Metro cities: 48–72 hours. Rest of India: 4–6 business days. Free shipping above ₹1,499. Express options at checkout.",
  },
  {
    q: "Easy returns?",
    a: "7-day no-questions-asked returns on unworn pieces with tags. We schedule a pickup from your address. No restocking fee.",
  },
  {
    q: "Where is MODRN made?",
    a: "Cut, sewn and printed in India. We work directly with a small set of partner units in Tirupur and Bangalore. No middlemen — that's why the price stays honest.",
  },
];

function Item({ item, open, onToggle }: { item: typeof ITEMS[number]; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/[0.08]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-6 md:py-8 text-left group"
      >
        <span className="text-lg md:text-2xl text-white font-display tracking-wide group-hover:text-accent transition-colors">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white"
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 pr-12 text-white/65 text-base md:text-lg leading-relaxed max-w-3xl">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4"
          >
            <span className="font-mono text-accent">[ 09 ]</span>
            <span>Frequently asked</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-5xl md:text-7xl tracking-tight text-white leading-[0.95]"
          >
            QUESTIONS, <span className="text-white/30 italic font-light">answered.</span>
          </motion.h2>
        </div>

        <div>
          {ITEMS.map((item, i) => (
            <Item
              key={item.q}
              item={item}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
