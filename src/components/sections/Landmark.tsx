import {
  Train, Route, ShoppingCart, Cross, School,
  Navigation, Plane, MapPin
} from "lucide-react";
import { LANDMARK_CONTENT } from "@/constants/content";
import { SectionHeader, AnimateInView } from "@/components/ui";
import type { LandmarkIcon } from "@/types";

const iconMap: Record<LandmarkIcon, React.ElementType> = {
  train:    Train,
  road:     Route,
  shopping: ShoppingCart,
  hospital: Cross,
  school:   School,
  metro:    Navigation,
  plane:    Plane,
  map:      MapPin,
};

/**
 * LANDMARK SECTION
 * Grid lokasi strategis terdekat dengan icon dan jarak.
 */
export function Landmark() {
  const { eyebrow, headline, subheadline, points } = LANDMARK_CONTENT;

  return (
    <section id="landmark" className="section-padding">
      <div className="container-wide">
        <AnimateInView>
          <SectionHeader eyebrow={eyebrow} headline={headline} subheadline={subheadline} />
        </AnimateInView>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {points.map((point, i) => {
            const Icon = iconMap[point.icon] ?? MapPin;
            return (
              <AnimateInView
                key={point.id}
                delay={0.06 * i}
                className="glass rounded-[var(--radius-card)] p-5 flex flex-col gap-3 hover:border-brand-secondary/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center">
                  <Icon size={18} className="text-brand-secondary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-brand-text leading-snug mb-1">{point.label}</p>
                  <span className="text-xs font-medium text-brand-accent">{point.distance}</span>
                </div>
              </AnimateInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
