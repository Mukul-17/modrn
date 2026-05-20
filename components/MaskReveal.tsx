"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Slide-up text reveal masked by an overflow-hidden parent.
 * The OUTER wrapper observes its own (untransformed) visibility so the
 * IntersectionObserver fires correctly — the inner element starts off-screen
 * via variants, which only propagate after the outer is in view.
 */
export function MaskReveal({
  children,
  delay = 0,
  duration = 1,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      <motion.div
        variants={{
          hidden: { y: "110%" },
          visible: { y: 0 },
        }}
        transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
