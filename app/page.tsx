import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ProductShowcase } from "@/components/ProductShowcase";
import { TrustBadges } from "@/components/TrustBadges";
import { Engineered } from "@/components/Engineered";
import { Collections } from "@/components/Collections";
import { Philosophy } from "@/components/Philosophy";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { SocialGallery } from "@/components/SocialGallery";
import { FAQ } from "@/components/FAQ";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorGlow } from "@/components/CursorGlow";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-clip">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Hero />
      <Marquee />
      <ProductShowcase />
      <TrustBadges />
      <Engineered />
      <Collections />
      <Philosophy />
      <Stats />
      <Testimonials />
      <SocialGallery />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  );
}
