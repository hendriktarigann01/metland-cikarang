/**
 * SITE CONFIGURATION
 * ─────────────────────────────────────────────────────────────────
 * Ganti nilai di sini untuk mengkustomisasi branding per client.
 * Semua section mengambil data dari file ini — tidak ada hardcode.
 */

export const SITE_CONFIG = {
  /** Nama proyek / perumahan */
  name: "Metland Cikarang",

  /** Tagline singkat */
  tagline: "Perumahan Eco Living di Cibitung, Bekasi",

  /** Description untuk SEO */
  description:
    "Metland Cikarang — perumahan eco-living modern di Cibitung, Bekasi. Hunian hijau dengan desain biophilic, high ceiling, dan akses transportasi publik yang mudah. Harga mulai Rp 635 Juta.",

  /** URL canonical */
  url: "https://www.metlandcikarang.com",

  /** Path logo (di dalam /public) */
  logo: "/metland.png",

  /** Nama developer */
  developer: "PT Metropolitan Land Tbk",

  /** Nomor WhatsApp (format internasional, tanpa +) */
  whatsapp: {
    number: "6281234567890",
    message: "Halo, saya ingin informasi lebih lanjut mengenai Metland Cikarang.",
  },

  /** Social media */
  social: {
    instagram: "https://www.instagram.com/metlandcikarang/",
    youtube:   "https://www.youtube.com/@metland",
    tiktok:    "https://www.tiktok.com/@metlandcikarang",
  },

  /** Google Maps Embed URL */
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484.74898076248684!2d107.12404149224845!3d-6.237530551803793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6985001cf5ee41%3A0x36e111b2afda3ae1!2sMarketing%20Galery%20Metland%20Cikarang!5e0!3m2!1sid!2sid!4v1782877141060!5m2!1sid!2sid",

  /** Tahun untuk copyright */
  year: new Date().getFullYear(),
} as const;

/** WhatsApp URL builder */
export const getWhatsAppUrl = (message?: string) => {
  const text = encodeURIComponent(message ?? SITE_CONFIG.whatsapp.message);
  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${text}`;
};
