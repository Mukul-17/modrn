"use client";

import { motion } from "motion/react";
import { MaskReveal } from "@/components/MaskReveal";

const FEATURES = [
  {
    num: "01",
    title: "Structured fit",
    copy: "Clean construction that stays sharp, wear after wear. Double-stitched seams, pre-shrunk, drop-shouldered.",
  },
  {
    num: "02",
    title: "Refined detailing",
    copy: "Precision finishes — reinforced collars, tonal stitching, ribbed hems. The small things that separate premium from cheap.",
  },
  {
    num: "03",
    title: "Breathable comfort",
    copy: "Soft, garment-washed cotton that feels smooth, light, and premium. Heavy at 220–240 GSM, never stiff.",
  },
];

export function Engineered() {
  return (
    <section className="relative w-full bg-background py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute right-[10%] top-1/3 h-[380px] w-[380px] rounded-full bg-accent/10 blur-[160px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Editorial header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16 md:mb-20 items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/40 mb-6"
            >
              <span className="font-mono text-accent">[ 03 ]</span>
              <span>Engineered</span>
              <span className="h-px flex-1 max-w-[140px] bg-white/10" />
            </motion.div>
            <div className="font-display leading-[0.88] tracking-tight text-white text-[clamp(3rem,8vw,7.5rem)]">
              <MaskReveal className="inline-block">ENGINEERED</MaskReveal>
              <MaskReveal delay={0.08} className="italic font-light text-white/30 inline-block">
                for excellence.
              </MaskReveal>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 lg:pl-10 text-white/65 text-base md:text-lg leading-relaxed max-w-md"
          >
            No shortcuts in the build. Every MODRN piece is constructed for
            the people who notice the seams, feel the weight, and care about
            the things that last.
          </motion.p>
        </div>

        {/* Feature columns */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative pt-8 border-t border-white/[0.1] hover:border-accent transition-colors duration-500"
            >
              <div className="font-display text-6xl md:text-7xl text-white/15 leading-none mb-6 group-hover:text-accent/40 transition-colors duration-500">
                {f.num}
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-white tracking-wide mb-3">
                {f.title}
              </h3>
              <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-xs">
                {f.copy}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Sub tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 md:mt-28 flex justify-center"
        >
          <div className="font-display text-2xl md:text-4xl tracking-wide text-white/80">
            Worn daily. <span className="text-accent">Built to last.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
