"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { MaskReveal } from "@/components/MaskReveal";

type Story = {
  num: string;
  name: string;
  tagline: string;
  narrative: string;
  image: string;
};

const STORIES: Story[] = [
  {
    num: "01",
    name: "Back in the Game",
    tagline: "Not the first restart. But maybe the one that sticks.",
    narrative:
      "Every comeback starts with showing up. These are pieces for the second wind, the early mornings, the long roads back. Built for the people who don't quit — they just regroup.",
    image:
      "https://modrn.in/cdn/shop/files/ChatGPT_Image_Apr_10_2026_04_49_17_PM.png?v=1776067779&width=2000",
  },
  {
    num: "02",
    name: "High Standards",
    tagline: "Calm mind. Loud standards.",
    narrative:
      "You don't need to shout to set the bar. Heavy fabric, clean cuts, unapologetic confidence — for the ones who hold themselves to more, quietly.",
    image:
      "https://modrn.in/cdn/shop/files/ChatGPT_Image_Apr_10_2026_03_07_34_PM.png?v=1776066628&width=2000",
  },
  {
    num: "03",
    name: "Machine Mode",
    tagline: "Built for machines. Driven by instinct.",
    narrative:
      "Whether it's the bike, the gym, or the grind — these tees keep up with motion. Made for movement, made for the makers.",
    image:
      "https://modrn.in/cdn/shop/files/ChatGPT_Image_Apr_10_2026_02_11_09_PM.png?v=1776075534&width=2000",
  },
  {
    num: "04",
    name: "Minimal Vibe",
    tagline: "Less noise. More intent.",
    narrative:
      "Stripped back to what matters. No logos shouting. No prints fighting. Just clean cuts and confident silhouettes for the days you let the work speak.",
    image:
      "https://modrn.in/cdn/shop/files/MinimalVibe_collection_img.png?v=1777443353&width=2000",
  },
];

function CollectionRow({ story, index }: { story: Story; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reverse = index % 2 === 1;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "10%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.0]);

  return (
    <div ref={ref} className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center py-16 md:py-24">
      {/* Image */}
      <motion.div
        style={{ y: imageY }}
        className={`lg:col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.06] ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <motion.div style={{ scale: imageScale }} className="absolute inset-0">
          <Image
            src={story.image}
            alt={story.name}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent" />

        {/* Number overlay */}
        <div className="absolute top-5 left-5 right-5 flex items-start justify-between text-white">
          <div className="font-display text-5xl md:text-6xl tracking-tight text-white/95 mix-blend-difference">
            {story.num}
          </div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-white/70 backdrop-blur-sm bg-black/30 px-3 py-1.5 rounded-full">
            Collection
          </div>
        </div>
      </motion.div>

      {/* Text */}
      <div className={`lg:col-span-5 ${reverse ? "lg:order-1 lg:pr-6" : "lg:order-2 lg:pl-6"}`}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="font-display tracking-tight text-white leading-[0.95] text-[clamp(2.4rem,6vw,5rem)]">
            <MaskReveal duration={0.9} className="inline-block uppercase">
              {story.name}
            </MaskReveal>
          </div>
          <p className="mt-5 text-lg md:text-xl text-white/85 italic font-light leading-snug max-w-md">
            "{story.tagline}"
          </p>
          <p className="mt-5 text-sm md:text-base text-white/55 leading-relaxed max-w-md">
            {story.narrative}
          </p>
          <a
            href="#shop"
            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 hover:border-accent px-5 py-2.5 text-xs uppercase tracking-widest text-white hover:bg-accent hover:text-black transition-colors"
          >
            <span>Shop {story.name}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export function Collections() {
  return (
    <section id="collections" className="relative w-full bg-background py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-10 md:mb-16 items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/40 mb-6"
            >
              <span className="font-mono text-accent">[ 04 ]</span>
              <span>Collections</span>
              <span className="h-px flex-1 max-w-[140px] bg-white/10" />
            </motion.div>
            <div className="font-display leading-[0.88] tracking-tight text-white text-[clamp(3rem,8vw,7.5rem)]">
              <MaskReveal className="inline-block">FOUR MOODS,</MaskReveal>
              <MaskReveal delay={0.08} className="italic font-light text-white/30 inline-block">
                one wardrobe.
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
            Every drop is a story. Built around a feeling, a phase, a way of
            moving through the day. Pick the one that matches your week.
          </motion.p>
        </div>

        {/* Collection blocks */}
        <div className="divide-y divide-white/[0.06]">
          {STORIES.map((s, i) => (
            <CollectionRow key={s.num} story={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
