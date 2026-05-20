"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const LOGO_URL =
  "https://modrn.in/cdn/shop/files/image.png?v=1774360540&width=360";

const NAV = [
  { label: "Shop", href: "#shop" },
  { label: "Collections", href: "#collections" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Journal", href: "#journal" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-xl bg-black/60 border-b border-white/[0.06]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group" aria-label="MODRN">
            <Image
              src={LOGO_URL}
              alt="MODRN"
              width={180}
              height={48}
              priority
              className="h-7 md:h-9 w-auto object-contain brightness-0 invert"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm tracking-wide text-white/70 hover:text-white transition-colors group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              aria-label="Search"
              className="hidden md:flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/5 transition-colors"
            >
              <Search className="h-4 w-4 text-white/80" />
            </button>
            <button
              aria-label="Bag"
              className="relative flex items-center gap-2 h-9 px-3 md:px-4 rounded-full bg-white text-black text-xs font-medium tracking-wider hover:bg-accent transition-colors"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">BAG</span>
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-[10px] text-black flex items-center justify-center font-semibold ring-2 ring-background">
                2
              </span>
            </button>
            <button
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/5"
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-6 flex flex-col gap-4 border-t border-white/5 pt-4"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg text-white/80 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
