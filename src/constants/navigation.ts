/**
 * NAVIGATION CONFIG
 * ─────────────────────────────────────────────────────────────────
 * Daftar menu navbar. `href` menggunakan anchor (#section-id).
 * Tidak semua section perlu masuk navbar — sesuaikan sesuai kebutuhan.
 */

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Promo",     href: "#promo" },
  { label: "Cluster",   href: "#cluster" },
  { label: "Lokasi",    href: "#location" },
  { label: "Fasilitas", href: "#facility" },
  { label: "FAQ",       href: "#faq" },
];
