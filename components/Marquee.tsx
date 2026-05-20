const PHRASES = [
  "Wear The Future",
  "Minimal · Bold · Modrn",
  "Engineered For Everyday",
  "Streetwear Meets Tomorrow",
];

export function Marquee() {
  // Duplicate so the loop is seamless
  const stream = [...PHRASES, ...PHRASES, ...PHRASES, ...PHRASES];
  return (
    <section
      aria-hidden
      className="relative w-full overflow-hidden border-y border-white/[0.06] bg-background py-6 md:py-8"
    >
      <div className="marquee-track flex whitespace-nowrap will-change-transform">
        {stream.map((phrase, i) => (
          <div
            key={i}
            className="flex items-center gap-10 md:gap-14 px-6 md:px-10"
          >
            <span
              className={
                i % 2 === 0
                  ? "font-display text-4xl md:text-6xl tracking-wider text-white"
                  : "font-display text-4xl md:text-6xl tracking-wider text-transparent [-webkit-text-stroke:1px_white]"
              }
            >
              {phrase}
            </span>
            <span className="h-2 w-2 rounded-full bg-accent" />
          </div>
        ))}
      </div>
    </section>
  );
}
