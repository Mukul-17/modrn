"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight, Heart, Plus } from "lucide-react";
import { products, type Product } from "@/lib/products";
import { MaskReveal } from "@/components/MaskReveal";
import { useState } from "react";

function ProductCard({
  product,
  index,
  large = false,
}: {
  product: Product;
  index: number;
  large?: boolean;
}) {
  const [liked, setLiked] = useState(false);
  const discount = Math.round(
    ((product.compareAt - product.price) / product.compareAt) * 100
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay: (index % 5) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col h-full"
    >
      <div
        className={`relative w-full overflow-hidden rounded-2xl bg-zinc-950 border border-white/[0.05] ${
          large ? "h-full min-h-[460px]" : "aspect-[4/5]"
        }`}
      >
        {/* Accent glow on hover */}
        <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-accent/25 via-transparent to-accent/10 blur-md -z-10" />

        {/* Primary image */}
        <Image
          src={product.primary}
          alt={product.name}
          fill
          sizes={
            large
              ? "(min-width: 1024px) 50vw, 100vw"
              : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          }
          className="object-cover transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] group-hover:opacity-0"
        />
        <Image
          src={product.secondary}
          alt={`${product.name} alt view`}
          fill
          sizes={
            large
              ? "(min-width: 1024px) 50vw, 100vw"
              : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          }
          className="object-cover opacity-0 scale-[1.08] transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:scale-100"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-10 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-black">
            {product.badge}
          </div>
        )}

        {discount > 0 && (
          <div className="absolute top-4 right-4 z-10 rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white border border-white/10">
            −{discount}%
          </div>
        )}

        {/* Wishlist */}
        <button
          aria-label="Wishlist"
          onClick={(e) => {
            e.preventDefault();
            setLiked((l) => !l);
          }}
          className="absolute bottom-4 left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-white hover:text-black"
        >
          <Heart
            className={`h-4 w-4 transition ${liked ? "fill-accent text-accent" : ""}`}
          />
        </button>

        {/* Quick add */}
        <button className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-full bg-white text-black px-4 h-10 text-xs font-semibold uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-accent">
          <Plus className="h-3.5 w-3.5" />
          {large ? "Add to bag" : "Quick add"}
        </button>

        {/* Large card: overlaid editorial title */}
        {large && (
          <div className="absolute top-4 left-4 right-16 z-10 mt-10">
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/60 mb-1">
              Hero piece
            </div>
            <div className="font-display text-3xl md:text-5xl text-white leading-[0.95] tracking-tight max-w-md">
              {product.name}
            </div>
          </div>
        )}
      </div>

      {/* Meta (small cards only — large card uses overlaid title) */}
      {!large && (
        <div className="mt-4 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-sm md:text-base font-medium text-white truncate">
              {product.name}
            </h3>
            <p className="text-xs text-white/50 mt-0.5">
              {product.gsm} GSM · Oversized
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="text-sm md:text-base font-semibold text-white">
              ₹{product.price}
            </div>
            <div className="text-xs text-white/40 line-through">
              ₹{product.compareAt}
            </div>
          </div>
        </div>
      )}

      {large && (
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-white/60 italic">"{product.tagline}"</p>
          <div className="text-right">
            <div className="font-display text-2xl text-white">
              ₹{product.price}{" "}
              <span className="text-xs text-white/40 line-through font-sans">
                ₹{product.compareAt}
              </span>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export function ProductShowcase() {
  const hero = products[0];
  const featured = products.slice(1, 5); // 4 medium tiles
  const rest = products.slice(5); // remaining 3

  return (
    <section id="shop" className="relative w-full bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Editorial header */}
        <div className="mb-14 md:mb-20 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/40 mb-6"
            >
              <span className="font-mono text-accent">[ 02 ]</span>
              <span>The Drop</span>
              <span className="h-px flex-1 max-w-[120px] bg-white/10" />
            </motion.div>
            <div className="font-display leading-[0.88] tracking-tight text-white text-[clamp(3rem,8vw,7.5rem)]">
              <MaskReveal>FEATURED</MaskReveal>
              <MaskReveal delay={0.08} className="italic font-light text-white/30">
                tees.
              </MaskReveal>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 lg:pl-10 flex flex-col gap-4"
          >
            <p className="text-white/65 text-base md:text-lg max-w-md leading-relaxed">
              Eight pieces. Two weights. One philosophy — clean cuts,
              heavyweight cotton, and zero shouting.
            </p>
            <a
              href="#"
              className="self-start inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/80 hover:text-accent border-b border-white/15 hover:border-accent pb-1 transition-colors"
            >
              View all 24 styles
              <ArrowRight className="h-3 w-3" />
            </a>
          </motion.div>
        </div>

        {/* Bento layout: HERO product (2 cols x 2 rows on lg) + 4 medium tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:auto-rows-fr">
          <div className="col-span-2 row-span-2 lg:h-full">
            <ProductCard product={hero} index={0} large />
          </div>
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i + 1} />
          ))}
        </div>

        {/* Bottom row: remaining tiles + CTA card */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mt-5 md:mt-6">
          {rest.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i + 5} />
          ))}

          {/* CTA card slot */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-transparent flex flex-col justify-between p-6 hover:border-accent/50 transition-colors"
          >
            <div className="text-[11px] tracking-[0.3em] uppercase text-white/50">
              + 16 more
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl text-white leading-tight mb-3">
                Explore the<br />
                <span className="italic font-light text-white/40">full archive</span>
              </div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent">
                Shop all
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 h-[260px] w-[260px] rounded-full bg-accent/15 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
