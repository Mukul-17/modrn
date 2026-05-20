"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/BrandIcons";

const LOGO_URL =
  "https://modrn.in/cdn/shop/files/image.png?v=1774360540&width=360";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-background border-t border-white/[0.06] pt-20 pb-10 overflow-hidden">
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Left brand block */}
          <div className="lg:col-span-5">
            <Image
              src={LOGO_URL}
              alt="MODRN"
              width={220}
              height={56}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-4 text-white/55 text-sm leading-relaxed max-w-sm">
              Minimal. Bold. Intentional. Premium oversized essentials made
              in India for those who move with purpose.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/modrnindia"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-black hover:bg-accent hover:border-accent transition-colors"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/modrnindia"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-black hover:bg-accent hover:border-accent transition-colors"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:modrnindia@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-black hover:bg-accent hover:border-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <div className="text-[11px] tracking-[0.25em] uppercase text-white/40 mb-4">
                Shop
              </div>
              <ul className="space-y-3 text-sm text-white/75">
                <li><a href="#shop" className="hover:text-accent transition-colors">New Drops</a></li>
                <li><a href="#shop" className="hover:text-accent transition-colors">Best Sellers</a></li>
                <li><a href="#shop" className="hover:text-accent transition-colors">220 GSM</a></li>
                <li><a href="#shop" className="hover:text-accent transition-colors">240 GSM</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.25em] uppercase text-white/40 mb-4">
                Company
              </div>
              <ul className="space-y-3 text-sm text-white/75">
                <li><a href="#philosophy" className="hover:text-accent transition-colors">Philosophy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.25em] uppercase text-white/40 mb-4">
                Help
              </div>
              <ul className="space-y-3 text-sm text-white/75">
                <li><a href="#" className="hover:text-accent transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/[0.06] text-[11px] tracking-widest uppercase text-white/40">
          <div>© {year} MODRN India · All rights reserved</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
