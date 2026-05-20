"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 220, damping: 28, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 28, mass: 0.4 });

  useEffect(() => {
    // Only enable on fine pointer devices
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const handler = (e: MouseEvent) => {
      x.set(e.clientX - 220);
      y.set(e.clientY - 220);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-0 h-[440px] w-[440px] rounded-full bg-accent/15 blur-[120px] mix-blend-screen"
    />
  );
}
