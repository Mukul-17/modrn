"use client";

import { motion, AnimatePresence } from "motion/react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const REVIEWS = [
  {
    quote:
      "The 240 GSM is no joke. Heaviest tee in my wardrobe. Cut is perfect — oversized but still clean.",
    name: "Aarav S.",
    city: "Bangalore",
    piece: "Built To Burn Fuel",
    rating: 5,
  },
  {
    quote:
      "Finally a brand that gets minimal right. Not boring — confident. Wearing 'Focus' on repeat.",
    name: "Ishita K.",
    city: "Mumbai",
    piece: "Focus",
    rating: 5,
  },
  {
    quote:
      "I've spent ₹3k on tees that feel cheaper than this ₹599 one. MODRN is doing something right.",
    name: "Tanvi R.",
    city: "Pune",
    piece: "Unstoppable",
    rating: 5,
  },
  {
    quote:
      "Packaging felt like unboxing a phone. Fit is exactly what was shown. Already ordered two more.",
    name: "Rohan M.",
    city: "Delhi",
    piece: "Who Needs Roads",
    rating: 5,
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const current = REVIEWS[idx];

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((p) => (p + 1) % REVIEWS.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full bg-background py-28 md:py-36 overflow-hidden">
      <div className="absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-accent/8 blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/40"
          >
            <span className="font-mono text-accent">[ 07 ]</span>
            <span>Customer voices</span>
            <span className="h-px flex-1 w-16 md:w-32 bg-white/10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-display text-xl text-white">4.9</span>
            <span className="text-xs text-white/50 tracking-widest uppercase">
              2,400+ reviews
            </span>
          </motion.div>
        </div>

        {/* Featured editorial quote */}
        <div className="relative">
          <div className="absolute -top-8 -left-2 font-display text-[10rem] md:text-[18rem] leading-none text-accent/15 pointer-events-none select-none">
            "
          </div>

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative font-display text-white tracking-tight leading-[1.05] text-[clamp(2.2rem,6vw,5.5rem)] max-w-5xl"
            >
              {current.quote}
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 md:mt-14 flex flex-wrap items-center justify-between gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent to-accent/30 flex items-center justify-center text-black font-semibold">
                  {current.name[0]}
                </div>
                <div>
                  <div className="text-base text-white">{current.name}</div>
                  <div className="text-xs text-white/50 tracking-widest uppercase mt-0.5">
                    {current.city} · Wore {current.piece}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIdx((p) => (p - 1 + REVIEWS.length) % REVIEWS.length)}
                aria-label="Previous"
                className="h-11 w-11 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-black hover:bg-accent hover:border-accent transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <span className="text-xs tracking-widest text-white/50 tabular-nums">
                {String(idx + 1).padStart(2, "0")} / {String(REVIEWS.length).padStart(2, "0")}
              </span>
              <button
                onClick={() => setIdx((p) => (p + 1) % REVIEWS.length)}
                aria-label="Next"
                className="h-11 w-11 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-black hover:bg-accent hover:border-accent transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
