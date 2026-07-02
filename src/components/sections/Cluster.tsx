"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BedDouble, Bath, Maximize2 } from "lucide-react";
import { CLUSTER_CONTENT } from "@/constants/content";
import { getWhatsAppUrl } from "@/constants/site";
import { SectionHeader, AnimateInView, Button } from "@/components/ui";
import type { UnitSpec } from "@/types";
import { cn } from "@/lib/utils";

function UnitCard({ unit }: { unit: UnitSpec }) {
  const waMessage = `Halo, saya tertarik dengan unit ${unit.name} (${unit.price}). Mohon informasi lebih lanjut.`;

  return (
    <div className="glass rounded-[var(--radius-card)] overflow-hidden group hover:border-brand-secondary/40 transition-colors duration-300">
      {/* Unit Image Placeholder */}
      <div className="relative aspect-video bg-gradient-to-br from-brand-surface to-brand-bg flex items-center justify-center overflow-hidden">
        <div className="text-center">
          <Maximize2 size={32} className="text-brand-text/20 mx-auto mb-2" />
          <p className="text-xs text-brand-text/30">{unit.name}</p>
        </div>
        {/* Price Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-brand-primary text-white text-xs rounded-full">
            {unit.price}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-medium text-brand-text text-lg mb-1">
          {unit.name}
        </h3>
        <p className="text-xs text-brand-secondary mb-4">
          Cicilan mulai {unit.installment}
        </p>

        {/* Specs */}
        <div className="grid grid-cols-4 gap-2 mb-5">
          <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5">
            <BedDouble size={14} className="text-brand-secondary" />
            <span className="text-xs text-brand-text font-medium">
              {unit.bed}
            </span>
            <span className="text-[10px] text-brand-text/50">KT</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5">
            <Bath size={14} className="text-brand-secondary" />
            <span className="text-xs text-brand-text font-medium">
              {unit.bath}
            </span>
            <span className="text-[10px] text-brand-text/50">KM</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5">
            <Maximize2 size={14} className="text-brand-secondary" />
            <span className="text-xs text-brand-text font-medium">
              {unit.landArea}
            </span>
            <span className="text-[10px] text-brand-text/50">LT</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5">
            <Maximize2 size={14} className="text-brand-secondary" />
            <span className="text-xs text-brand-text font-medium">
              {unit.buildArea}
            </span>
            <span className="text-[10px] text-brand-text/50">LB</span>
          </div>
        </div>

        <Button
          as="a"
          href={getWhatsAppUrl(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="sm"
          className="w-full justify-center"
        >
          <svg
            fill="currentColor"
            viewBox="0 0 32 32"
            className="w-3.5 h-3.5 text-white flex-shrink-0"
            aria-hidden="true"
          >
            <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z" />
          </svg>
          Tanya Unit Ini
        </Button>
      </div>
    </div>
  );
}

/**
 * CLUSTER SECTION
 * Tab navigation per cluster dengan animasi slide unit cards.
 */
export function Cluster() {
  const { eyebrow, headline, subheadline, clusters } = CLUSTER_CONTENT;
  const [activeTab, setActiveTab] = useState(0);

  const active = clusters[activeTab];

  return (
    <section id="cluster" className="section-padding">
      <div className="container-wide">
        <AnimateInView>
          <SectionHeader
            eyebrow={eyebrow}
            headline={headline}
            subheadline={subheadline}
          />
        </AnimateInView>

        {/* Tab Navigation */}
        <AnimateInView delay={0.1} className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {clusters.map((cluster, i) => (
              <button
                key={cluster.id}
                id={`cluster-tab-${cluster.id}`}
                role="tab"
                onClick={() => setActiveTab(i)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeTab === i
                    ? "bg-brand-primary text-white"
                    : "glass text-brand-text/70 hover:text-brand-text hover:border-brand-text/30",
                )}
                aria-selected={activeTab === i}
              >
                {cluster.name}
              </button>
            ))}
          </div>
        </AnimateInView>

        {/* Unit Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {active.units.map((unit, i) => (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <UnitCard unit={unit} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
