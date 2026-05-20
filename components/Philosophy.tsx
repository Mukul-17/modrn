"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { heroVideos } from "@/lib/products";
import { MaskReveal } from "@/components/MaskReveal";

export function Philosophy() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ["-6%", "10%"]);
  const wordX = useTransform(scrollYProgress, [0, 1], ["-2%", "6%"]);

  return (
    <section
      id="philosophy"
      ref={ref}
      className="relative w-full bg-background py-28 md:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[160px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10 md:mb-14 text-[11px] tracking-[0.3em] uppercase text-white/40"
        >
          <span className="font-mono text-accent">[ 05 ]</span>
          <span>Philosophy</span>
          <span className="h-px flex-1 max-w-[140px] bg-white/10" />
        </motion.div>

        {/* MASSIVE typographic statement — the section's centerpiece */}
        <motion.div
          style={{ x: wordX }}
          className="relative font-display tracking-[-0.03em] leading-[0.88] text-white text-[clamp(4rem,14vw,16rem)]"
        >
          <MaskReveal duration={1.1}>MINIMAL.</MaskReveal>
          <MaskReveal duration={1.1} delay={0.08} className="pl-[2em] md:pl-[3em]">
            BOLD.
          </MaskReveal>
          <MaskReveal duration={1.1} delay={0.16} className="italic font-light text-white/30">
            intentional.
          </MaskReveal>
        </motion.div>

        {/* Lower split: small video poster (left, offset down) + body copy (right) */}
        <div className="mt-12 md:mt-20 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            style={{ y: videoY }}
            className="lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.07] lg:-mt-32"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={heroVideos.secondary} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/60 mb-1">
                  The Film
                </div>
                <div className="font-display text-xl tracking-wide">MINIMAL VIBE</div>
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/60">
                SS · 26
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 lg:pt-10">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-xl md:text-2xl text-white/85 leading-snug max-w-xl"
            >
              We build oversized essentials for people who think before they
              wear.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-base md:text-lg text-white/60 leading-relaxed max-w-xl"
            >
              Heavy 240 GSM cotton, garment-washed for softness, cut for
              attitude. No logos shouting for attention — just confident
              pieces that move with you, from coffee at 7 to the city at
              midnight.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-lg pt-8 border-t border-white/[0.08]"
            >
              {[
                { k: "240", v: "GSM Cotton" },
                { k: "100%", v: "Made in India" },
                { k: "08", v: "Drops a Year" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-4xl md:text-6xl text-white leading-none">
                    {s.k}
                  </div>
                  <div className="text-[10px] mt-3 tracking-[0.2em] uppercase text-white/50">
                    {s.v}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
