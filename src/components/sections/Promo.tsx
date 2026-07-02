"use client";

import { CheckCircle2 } from "lucide-react";
import { PROMO_CONTENT } from "@/constants/content";
import { getWhatsAppUrl } from "@/constants/site";
import { SectionHeader, AnimateInView, Button } from "@/components/ui";
import { cn } from "@/lib/utils";

/**
 * PROMO SECTION
 * Grid kartu promo per cluster dengan animasi stagger.
 */
export function Promo() {
  const { eyebrow, headline, subheadline, groups, note } = PROMO_CONTENT;

  return (
    <section id="promo" className="section-padding">
      <div className="container-wide">
        <AnimateInView>
          <SectionHeader
            eyebrow={eyebrow}
            headline={headline}
            subheadline={subheadline}
          />
        </AnimateInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {groups.map((group, i) => (
            <AnimateInView
              key={group.id}
              delay={0.1 * i}
              className={cn(
                "glass rounded-[var(--radius-card)] p-6",
                /* Kartu pertama (All Cluster) full width di lg */
                i === 0 && "lg:col-span-1 border-brand-primary/30",
              )}
            >
              {/* Group Title */}
              <div className="mb-4">
                <span className="text-xs font-semibold tracking-wider text-brand-secondary uppercase">
                  {i === 0 ? "✦ Semua Cluster" : `✦ ${group.title}`}
                </span>
              </div>
              <h3 className="text-base font-bold text-brand-text mb-4">
                {group.title}
              </h3>

              {/* Items */}
              <ul className="flex flex-col gap-2.5">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={16}
                      className="text-brand-accent flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-brand-text/80 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimateInView>
          ))}
        </div>

        {/* Note & CTA */}
        <AnimateInView delay={0.3} className="mt-8 text-center">
          <p className="text-xs text-brand-text/40 mb-6">{note}</p>
        </AnimateInView>
      </div>
    </section>
  );
}
