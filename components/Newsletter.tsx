"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { MaskReveal } from "@/components/MaskReveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative w-full bg-background py-28 md:py-40 overflow-hidden border-y border-white/[0.06]">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[480px] w-[480px] rounded-full bg-accent/15 blur-[180px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/40 mb-10"
        >
          <span className="font-mono text-accent">[ 10 ]</span>
          <span>Early access</span>
          <span className="h-px flex-1 max-w-[160px] bg-white/10" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          {/* Big editorial text */}
          <div className="lg:col-span-8">
            <div className="font-display tracking-tight text-white leading-[0.88] text-[clamp(3.6rem,11vw,11rem)]">
              <MaskReveal>JOIN THE</MaskReveal>
              <MaskReveal delay={0.08} className="italic font-light text-white/30">
                drop list.
              </MaskReveal>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-md text-base md:text-lg text-white/60 leading-relaxed"
            >
              10% off your first order. Be first to know when new drops go
              live. No spam — only fire.
            </motion.p>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-4 lg:pb-4"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubmitted(true);
              }}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md p-1.5 pl-5 focus-within:border-accent transition-colors"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 bg-transparent outline-none text-white placeholder:text-white/30 text-sm min-w-0"
              />
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-4 h-10 text-xs font-semibold uppercase tracking-widest hover:bg-accent transition-colors whitespace-nowrap"
              >
                {submitted ? "On list ✓" : "Join"}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>

            <div className="mt-4 text-[11px] tracking-widest uppercase text-white/40">
              We never sell your data
            </div>

            <div className="mt-10 pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4 text-center">
              {[
                { k: "10%", v: "Off first order" },
                { k: "1st", v: "On new drops" },
                { k: "0", v: "Spam ever" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-2xl md:text-3xl text-white leading-none">
                    {s.k}
                  </div>
                  <div className="text-[10px] mt-2 tracking-[0.2em] uppercase text-white/45">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
