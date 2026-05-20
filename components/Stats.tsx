"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import { useEffect, useRef } from "react";

function Counter({
  to,
  duration = 2,
  formatter = (v: number) => Math.round(v).toLocaleString(),
}: {
  to: number;
  duration?: number;
  formatter?: (v: number) => string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const text = useTransform(motionValue, (v) => formatter(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, to, {
        duration,
        ease: [0.22, 1, 0.36, 1],
      });
      return () => controls.stop();
    }
  }, [inView, motionValue, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{text}</motion.span>
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative w-full bg-background py-20 md:py-28 border-y border-white/[0.06] overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/40 mb-12"
        >
          <span className="font-mono text-accent">[ 06 ]</span>
          <span>Numbers don't lie</span>
          <span className="h-px flex-1 max-w-[140px] bg-white/10" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          {/* PRIMARY huge stat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <div className="font-display text-white leading-[0.85] tracking-tight text-[clamp(5rem,16vw,17rem)]">
              <Counter to={28} formatter={(v) => Math.round(v).toString()} />
              <span className="text-accent">K+</span>
            </div>
            <div className="mt-4 text-sm tracking-[0.25em] uppercase text-white/55">
              Tees shipped across India
            </div>
          </motion.div>

          {/* Secondary stats stack */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-10 lg:pb-6 lg:border-l lg:border-white/[0.08] lg:pl-10">
            {[
              { value: 4.9, label: "Customer rating", float: true },
              { value: 72, suffix: "h", label: "Avg. delivery time" },
              { value: 14, suffix: "+", label: "Indian cities served" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              >
                <div className="font-display text-4xl md:text-5xl text-white leading-none">
                  {s.float ? (
                    <>
                      4<span className="text-accent">.</span>9
                      <span className="text-white/40 text-3xl">/5</span>
                    </>
                  ) : (
                    <>
                      <Counter to={s.value} />
                      {s.suffix && <span className="text-accent">{s.suffix}</span>}
                    </>
                  )}
                </div>
                <div className="mt-3 text-[10px] tracking-[0.25em] uppercase text-white/50">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
