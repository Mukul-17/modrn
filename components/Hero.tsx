"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight, Play, Volume2, VolumeX } from "lucide-react";
import { heroVideos, heroImages, products } from "@/lib/products";

const LINES = [
  { text: "WEAR", className: "" },
  { text: "the", className: "italic font-light text-white/40 pl-[0.4em]" },
  { text: "FUTURE.", className: "" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <section
      ref={ref}
      className="relative isolate w-full min-h-[100svh] overflow-hidden flex flex-col"
    >
      {/* FULL-BLEED BACKGROUND VIDEO */}
      <motion.div
        style={{ scale: videoScale, y: videoY }}
        className="absolute inset-0 z-0"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroImages.primary}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={heroVideos.primary} type="video/mp4" />
        </video>
        {/* Cinematic overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-black/40" />
      </motion.div>

      {/* Subtle grid + noise */}
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute inset-0 noise" />

      {/* Floating accent orb */}
      <motion.div
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[10%] h-[380px] w-[380px] rounded-full bg-accent/20 blur-[140px] pointer-events-none"
      />

      {/* Mute button (floating top-right) */}
      <div className="relative z-30 pt-24 md:pt-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-end">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
            className="flex h-9 items-center gap-2 rounded-full border border-white/15 bg-black/30 backdrop-blur-md px-3 text-[11px] tracking-[0.3em] uppercase text-white/70 hover:border-accent transition-colors"
          >
            {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
            <span className="text-[10px]">{muted ? "Sound off" : "Sound on"}</span>
          </motion.button>
        </div>
      </div>

      {/* Main content — text only, left-anchored, video plays behind */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 flex-1 mx-auto max-w-[1400px] w-full px-6 md:px-10 pt-12 md:pt-16 pb-10 flex flex-col justify-end"
      >
        {/* Right-side floating product chip (live drop callout) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="hidden md:flex absolute right-6 md:right-10 top-12 items-center gap-4 rounded-2xl border border-white/15 bg-black/40 backdrop-blur-md p-3 pr-5 max-w-xs"
        >
          <span className="flex h-2.5 w-2.5 relative">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-ping opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
          <div className="text-left">
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/55">
              Now featured
            </div>
            <div className="text-sm text-white">
              {products[0].name}
            </div>
            <div className="text-xs text-white/60 mt-0.5">
              ₹{products[0].price}{" "}
              <span className="line-through text-white/30">₹{products[0].compareAt}</span>
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display leading-[0.85] tracking-tight text-white text-left">
          {LINES.map((line, li) => (
            <div
              key={li}
              className={`overflow-hidden text-[clamp(3.4rem,10vw,9.5rem)] ${line.className}`}
            >
              <motion.div
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.5 + li * 0.12,
                  duration: 1.0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {line.text}
              </motion.div>
            </div>
          ))}
        </h1>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.1, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0 }}
          className="mt-8 h-px max-w-md bg-gradient-to-r from-accent via-white/50 to-transparent"
        />

        {/* Sub + CTAs */}
        <div className="mt-8 grid md:grid-cols-2 gap-6 md:gap-10 items-end max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="text-white/80 text-base md:text-lg leading-relaxed"
          >
            Premium oversized essentials, engineered for those who move with
            purpose. <span className="text-white">240 GSM cotton.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            className="flex flex-wrap items-center gap-5"
          >
            <a
              href="#shop"
              className="group relative inline-flex items-center gap-3 rounded-full bg-white text-black pl-7 pr-2 py-2 text-sm font-semibold tracking-widest uppercase overflow-hidden"
            >
              <span className="relative z-10">Shop Drop 03</span>
              <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-[-45deg]">
                <ArrowRight className="h-4 w-4" />
              </span>
              <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </a>
            <a
              href="#philosophy"
              className="group inline-flex items-center gap-2 text-sm tracking-widest uppercase text-white/80 hover:text-white pb-1 border-b border-white/20 hover:border-accent transition-colors"
            >
              <Play className="h-3 w-3 fill-current" /> The film
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom metadata strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="relative z-10 mx-auto max-w-[1400px] w-full px-6 md:px-10 pb-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 py-5 border-t border-white/[0.15] text-[11px] tracking-[0.25em] uppercase text-white/70">
          <span>240 GSM cotton</span>
          <span className="hidden md:inline">Garment-washed</span>
          <span>Made in India</span>
          <span className="hidden md:inline">Free shipping ₹1499+</span>
          <span className="flex items-center gap-2 text-accent">
            <span>Scroll</span>
            <span className="inline-block h-[1px] w-8 bg-accent" />
            <span className="text-white/50">to explore</span>
          </span>
        </div>
      </motion.div>
    </section>
  );
}
