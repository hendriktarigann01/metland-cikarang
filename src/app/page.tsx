import { SITE_CONFIG } from "@/constants/site";
import { HERO_CONTENT } from "@/constants/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WAFloatingButton } from "@/components/ui";
import {
  HeroFrameBackground,
  Hero,
  Promo,
  Cluster,
  Landmark,
  Location,
  Facility,
  Advantage,
  AboutUs,
  FAQ,
  CTA,
} from "@/components/sections";

/**
 * MAIN PAGE
 * ─────────────────────────────────────────────────────────────────
 * One-page landing page. Tambahkan/hapus section di sini.
 * Urutan section dapat diubah tanpa menyentuh komponen individual.
 */
export default function HomePage() {
  return (
    <main className="relative bg-brand-bg min-h-screen overflow-x-hidden">
      {/* ── Fixed Scroll-driven Background (Envision Pattern) ────── */}
      <HeroFrameBackground />

      {/* ── Layout ──────────────────────────────────────────────── */}
      <Navbar />

      <Hero />

      {/* ── Other Sections ──────────────────────────────────────── */}
      <Promo />
      <Cluster />
      <Landmark />
      <Location />
      <Facility />
      <Advantage />
      <AboutUs />
      <FAQ />
      <CTA />

      {/* ── Footer ──────────────────────────────────────────────── */}
      <Footer />

      {/* ── Floating WhatsApp ────────────────────────────────────── */}
      <WAFloatingButton />

      {/* ── Structured Data FAQ ──────────────────────────────────── */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "RealEstateListing",
                name: SITE_CONFIG.name,
                url: SITE_CONFIG.url,
                description: SITE_CONFIG.description,
              },
            ],
          }),
        }}
      />
    </main>
  );
}
