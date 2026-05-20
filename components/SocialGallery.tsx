"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { products } from "@/lib/products";
import { InstagramIcon } from "@/components/BrandIcons";

type Tile = {
  src: string;
  // Tailwind grid classes for this tile (asymmetric layout)
  className: string;
};

export function SocialGallery() {
  // Mosaic — different sizes per tile, 6-col grid
  const tiles: Tile[] = [
    { src: products[0].primary, className: "col-span-3 row-span-2 aspect-square md:aspect-auto" },
    { src: products[5].primary, className: "col-span-3 row-span-1 aspect-[4/3]" },
    { src: products[2].secondary, className: "col-span-2 row-span-1 aspect-square" },
    { src: products[4].primary, className: "col-span-1 row-span-1 aspect-square" },
    { src: products[1].primary, className: "col-span-2 row-span-2 aspect-[4/5]" },
    { src: products[3].primary, className: "col-span-2 row-span-1 aspect-square" },
    { src: products[6].primary, className: "col-span-2 row-span-1 aspect-square" },
  ];

  return (
    <section className="relative w-full bg-background py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4"
            >
              <span className="font-mono text-accent">[ 08 ]</span>
              <span>#ModrnInTheWild</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[0.9]"
            >
              SEEN ON <br className="md:hidden" />
              <span className="text-white/30 italic font-light">the streets</span>
            </motion.h2>
          </div>
          <motion.a
            href="https://www.instagram.com/modrnindia"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-xs tracking-widest uppercase text-white hover:bg-accent hover:text-black hover:border-accent transition-colors"
          >
            <InstagramIcon className="h-4 w-4" />
            <span>@modrnindia</span>
          </motion.a>
        </div>

        {/* Asymmetric mosaic */}
        <div className="grid grid-cols-6 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {tiles.map((t, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/modrnindia"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl bg-zinc-950 ${t.className}`}
            >
              <Image
                src={t.src}
                alt="MODRN community"
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2 text-white text-xs tracking-widest uppercase">
                  <InstagramIcon className="h-4 w-4" />
                  View on IG
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
