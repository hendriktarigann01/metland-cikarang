import { MapPin } from "lucide-react";
import { LOCATION_CONTENT } from "@/constants/content";
import { SITE_CONFIG } from "@/constants/site";
import { SectionHeader, AnimateInView } from "@/components/ui";

/**
 * LOCATION SECTION
 * Google Maps embed + deskripsi lokasi.
 */
export function Location() {
  const { eyebrow, headline, subheadline, description } = LOCATION_CONTENT;

  return (
    <section id="location" className="section-padding">
      <div className="container-wide">
        <AnimateInView>
          <SectionHeader eyebrow={eyebrow} headline={headline} subheadline={subheadline} />
        </AnimateInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Map Embed */}
          <AnimateInView variant="fade-left" className="order-2 lg:order-1">
            <div className="relative rounded-[var(--radius-card)] overflow-hidden aspect-video glass">
              <iframe
                src={SITE_CONFIG.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: "none", filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Peta lokasi ${SITE_CONFIG.name}`}
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </AnimateInView>

          {/* Description */}
          <AnimateInView variant="fade-right" delay={0.1} className="order-1 lg:order-2">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/20 border border-brand-border flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-brand-secondary" />
              </div>
              <div>
                <p className="text-sm font-medium text-brand-text mb-1">{subheadline}</p>
                <p className="text-xs text-brand-text/50">Bekasi, Jawa Barat</p>
              </div>
            </div>

            <p className="text-sm md:text-base text-brand-text/70 leading-relaxed mb-6">
              {description}
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "10 mnt", label: "ke Stasiun Telaga Murni" },
                { value: "25 mnt", label: "ke Tol Telaga Asih" },
                { value: "12 mnt", label: "ke Lotte Grosir" },
                { value: "3 km",   label: "dari Rencana MRT" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-4"
                >
                  <p className="text-lg font-medium text-brand-secondary mb-0.5">{stat.value}</p>
                  <p className="text-xs text-brand-text/60 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
