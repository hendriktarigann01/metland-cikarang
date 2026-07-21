/**
 * TYPE DEFINITIONS
 * ─────────────────────────────────────────────────────────────────
 * Shared TypeScript interfaces untuk seluruh proyek.
 */

// ── Navigation ───────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href:  string;
}

export interface HeroSlide {
  id:          string;
  headline:    string;
  description: string;
}

export interface HeroContent {
  eyebrow:     string;
  headline:    string;
  subheadline: string;
  description: string;
  badge:       string;
  cta: {
    primary:   string;
    secondary: string;
  };
  totalFrames: number;
  frameDir:    string;
  frameName:   string;
  slides:      HeroSlide[];
}

// ── Promo ────────────────────────────────────────────────────────
export interface PromoGroup {
  id:    string;
  title: string;
  items: string[];
}

export interface PromoContent {
  eyebrow:     string;
  headline:    string;
  subheadline: string;
  note:        string;
  groups:      PromoGroup[];
}

// ── Cluster ──────────────────────────────────────────────────────
export interface UnitSpec {
  id:           string;
  name:         string;
  price:        string;
  installment:  string;
  bed:          number;
  bath:         number;
  landArea:     number;
  buildArea:    number;
  image:        string;
  images?:      string[];
}

export interface ClusterItem {
  id:    string;
  name:  string;
  units: UnitSpec[];
}

export interface ClusterContent {
  eyebrow:     string;
  headline:    string;
  subheadline: string;
  clusters:    ClusterItem[];
}

// ── Landmark ─────────────────────────────────────────────────────
export type LandmarkIcon =
  | "train" | "road" | "shopping" | "hospital"
  | "school" | "metro" | "plane" | "map";

export interface LandmarkPoint {
  id:       string;
  label:    string;
  distance: string;
  icon:     LandmarkIcon;
}

export interface LandmarkContent {
  eyebrow:     string;
  headline:    string;
  subheadline: string;
  points:      LandmarkPoint[];
}

// ── Location ─────────────────────────────────────────────────────
export interface LocationContent {
  eyebrow:     string;
  headline:    string;
  subheadline: string;
  description: string;
}

// ── Facility ─────────────────────────────────────────────────────
export type FacilityIcon =
  | "waves" | "activity" | "trees" | "shield" | "bus"
  | "sun" | "recycle" | "building" | "wifi" | "droplets"
  | "key" | "moon";

export interface FacilityItem {
  id:          string;
  label:       string;
  description: string;
  icon:        FacilityIcon;
}

export interface FacilityContent {
  eyebrow:     string;
  headline:    string;
  subheadline: string;
  items:       FacilityItem[];
}

// ── Advantage ────────────────────────────────────────────────────
export interface AdvantageItem {
  id:          string;
  number:      string;
  title:       string;
  description: string;
}

export interface AdvantageContent {
  eyebrow:     string;
  headline:    string;
  subheadline: string;
  items:       AdvantageItem[];
}

// ── About ────────────────────────────────────────────────────────
export interface StatItem {
  id:    string;
  value: string;
  label: string;
}

export interface AboutContent {
  eyebrow:     string;
  headline:    string;
  subheadline: string;
  description: string;
  stats:       StatItem[];
}

// ── FAQ ──────────────────────────────────────────────────────────
export interface FAQItem {
  id:       string;
  question: string;
  answer:   string;
}

export interface FAQContent {
  eyebrow:  string;
  headline: string;
  items:    FAQItem[];
}

// ── CTA ──────────────────────────────────────────────────────────
export interface CTAContent {
  eyebrow:     string;
  headline:    string;
  subheadline: string;
  cta: {
    primary:   string;
    secondary: string;
  };
}

// ── Footer ───────────────────────────────────────────────────────
export interface FooterContent {
  tagline:   string;
  copyright: string;
  links:     NavLink[];
}

// ── Generic ──────────────────────────────────────────────────────
export interface SectionProps {
  className?: string;
}
