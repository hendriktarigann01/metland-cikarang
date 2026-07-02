import {
  Waves, Activity, Trees, Shield, Bus, Sun,
  Recycle, Building, Wifi, Droplets, KeyRound, Moon
} from "lucide-react";
import { FACILITY_CONTENT } from "@/constants/content";
import { SectionHeader, AnimateInView } from "@/components/ui";
import type { FacilityIcon } from "@/types";

const iconMap: Record<FacilityIcon, React.ElementType> = {
  waves:    Waves,
  activity: Activity,
  trees:    Trees,
  shield:   Shield,
  bus:      Bus,
  sun:      Sun,
  recycle:  Recycle,
  building: Building,
  wifi:     Wifi,
  droplets: Droplets,
  key:      KeyRound,
  moon:     Moon,
};

/**
 * FACILITY SECTION
 * Masonry-like grid dengan hover glow effect.
 */
export function Facility() {
  const { eyebrow, headline, subheadline, items } = FACILITY_CONTENT;

  return (
    <section id="facility" className="section-padding">
      <div className="container-wide">
        <AnimateInView>
          <SectionHeader eyebrow={eyebrow} headline={headline} subheadline={subheadline} />
        </AnimateInView>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Shield;
            return (
              <AnimateInView
                key={item.id}
                delay={0.05 * i}
                className="glass rounded-[var(--radius-card)] p-4 md:p-5 group cursor-default hover:bg-white/[0.06] hover:border-brand-accent/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-brand-accent/15 flex items-center justify-center mb-3 group-hover:bg-brand-accent/25 transition-colors duration-300">
                  <Icon size={18} className="text-brand-accent" aria-hidden="true" />
                </div>

                {/* Text */}
                <p className="text-sm font-medium text-brand-text mb-1 leading-snug">{item.label}</p>
                <p className="text-xs text-brand-text/50 leading-snug hidden sm:block">{item.description}</p>
              </AnimateInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
