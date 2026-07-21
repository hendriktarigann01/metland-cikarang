/**
 * CONTENT CONFIG
 * ─────────────────────────────────────────────────────────────────
 * Semua konten halaman dikelola di sini.
 * Ganti teks, data, dan gambar tanpa menyentuh komponen.
 */

import type {
  HeroContent,
  PromoContent,
  ClusterContent,
  LandmarkContent,
  LocationContent,
  FacilityContent,
  AdvantageContent,
  AboutContent,
  FAQContent,
  CTAContent,
  FooterContent,
} from "@/types";

// ── HERO ─────────────────────────────────────────────────────────
export const HERO_CONTENT: HeroContent = {
  eyebrow:     "Perumahan Eco Living",
  headline:    "METLAND CIKARANG",
  subheadline: "Hunian Hijau Modern di Cibitung, Bekasi",
  description: "Desain biophilic · High ceiling · 10 menit ke Stasiun Telaga Murni",
  badge:       "Harga mulai Rp 635 Juta",
  cta: {
    primary:   "Tanya via WhatsApp",
    secondary: "Lihat Cluster",
  },
  /** Jumlah frame di /public/frame-metland-parallax/ */
  totalFrames: 101,
  frameDir:    "/frame-metland-parallax",
  frameName:   "frame_", // frame_000000.png
  slides: [
    {
      id: "slide-biophilic",
      headline: "Eco Design & Biophilic Layout",
      description: "Konstruksi rumah didesain dengan ceiling yang tinggi, tata ruang minim sekat, serta area ventilasi dan jendela luas guna mengoptimalkan sirkulasi udara segar dan intensitas cahaya matahari alami di dalam rumah."
    },
    {
      id: "slide-transport",
      headline: "Seamless Connectivity",
      description: "Konektivitas transportasi yang sangat praktis. Hanya berjarak 10 menit menuju Stasiun KRL Telaga Murni dan Stasiun Cikarang, serta didukung penyediaan fasilitas Shuttle Bus internal yang terkoneksi langsung dengan sistem transportasi publik."
    },
    {
      id: "slide-solar",
      headline: "Solar Energy Charging",
      description: "Infrastruktur modern yang mendukung gaya hidup masa depan. Tersedia area pengisian daya (charging station) bertenaga surya (solar panels) khusus untuk sepeda listrik dan kendaraan listrik ramah lingkungan lainnya."
    },
    {
      id: "slide-waste",
      headline: "Integrated Waste System",
      description: "Pengelolaan lingkungan secara bertanggung jawab. Dilengkapi Bank Sampah mandiri, tempat pembuangan khusus yang terintegrasi dengan komposter, serta fasilitas pabrik pengolahan sampah internal kawasan."
    }
  ]
};

// ── PROMO ────────────────────────────────────────────────────────
export const PROMO_CONTENT: PromoContent = {
  eyebrow: "Penawaran Terbatas",
  headline: "Promo Spesial",
  subheadline: "Dapatkan keuntungan eksklusif untuk pembelian unit sekarang.",
  note: "*Syarat & Ketentuan Berlaku",
  groups: [
    {
      id:    "all",
      title: "Semua Cluster",
      items: [
        "Free Biaya BPHTB",
        "Subsidi Biaya KPR",
        "Free Biaya AJB BN",
      ],
    },
    {
      id:    "brassia",
      title: "Brassia Garden",
      items: [
        "Free Membership Waterland 1 Tahun (4 orang)",
        "Free Internet 1 Tahun",
      ],
    },
    {
      id:    "derora",
      title: "Derora Type 59/84 & 37/72",
      items: [
        "Free Membership Waterland 1 Tahun (4 orang)",
        "Free Internet 1 Tahun",
        "E-Voucher Metland Rp 5.000.000",
        "Voucher Sepeda Listrik",
      ],
    },
    {
      id:    "canary",
      title: "Canary",
      items: [
        "Free Membership Waterland 1 Tahun (4 orang)",
        "Voucher Sepeda Listrik",
        "E-Voucher Rp 10.000.000",
      ],
    },
    {
      id:    "easton-weston",
      title: "Easton & Weston Gateway",
      items: ["Free IPL 2 Tahun"],
    },
  ],
};

// ── CLUSTER ──────────────────────────────────────────────────────
export const CLUSTER_CONTENT: ClusterContent = {
  eyebrow:     "Tipe Unit",
  headline:    "Metland Cikarang",
  subheadline: "Metland Cikarang mengusung gaya hidup ramah lingkungan dengan desain hemat energi, high ceiling, layout minim sekat, dan banyak bukaan untuk udara & cahaya alami.",
  clusters: [
    {
      id:    "brassia",
      name:  "Brassia Garden",
      units: [
        {
          id:        "myzora-33",
          name:      "Myzora 33",
          price:     "Rp 635 Juta",
          installment: "Rp 3 Jutaan / bln",
          bed:       2,
          bath:      1,
          landArea:  72,
          buildArea: 33,
          image:     "/type-building/myzora-33-1.webp",
          images:    [
            "/type-building/myzora-33-1.webp",
            "/type-building/myzora-33-2.webp"
          ]
        },
        {
          id:        "myzora-45",
          name:      "Myzora 45",
          price:     "Rp 715 Juta",
          installment: "Rp 4 Jutaan / bln",
          bed:       3,
          bath:      1,
          landArea:  72,
          buildArea: 45,
          image:     "/type-building/myzora-45-1.webp",
          images:    [
            "/type-building/myzora-45-1.webp",
            "/type-building/myzora-45-2.webp"
          ]
        },
        {
          id:        "myzora-56",
          name:      "Myzora 56",
          price:     "Rp 955 Juta",
          installment: "Rp 5 Jutaan / bln",
          bed:       3,
          bath:      2,
          landArea:  84,
          buildArea: 56,
          image:     "/type-building/myzora-56-1.webp",
          images:    [
            "/type-building/myzora-56-1.webp",
            "/type-building/myzora-56-2.webp",
            "/type-building/myzora-56-3.webp"
          ]
        },
        {
          id:        "myzora-77",
          name:      "Myzora 77",
          price:     "Rp 1,21 Miliar",
          installment: "Rp 6 Jutaan / bln",
          bed:       4,
          bath:      3,
          landArea:  98,
          buildArea: 77,
          image:     "/type-building/myzora-77-1.webp",
          images:    [
            "/type-building/myzora-77-1.webp",
            "/type-building/myzora-77-2.webp"
          ]
        },
      ],
    },
    {
      id:    "easton",
      name:  "Easton Gateway",
      units: [
        {
          id:        "easton-100",
          name:      "Easton 100",
          price:     "Rp 1,36 Miliar",
          installment: "Rp 7 Jutaan / bln",
          bed:       0,
          bath:      2,
          landArea:  100,
          buildArea: 60,
          image:     "/type-building/easton-100-1.webp",
          images:    [
            "/type-building/easton-100-1.webp",
            "/type-building/easton-100-2.webp",
            "/type-building/easton-100-3.webp",
            "/type-building/easton-100-4.webp",
            "/type-building/easton-100-5.webp",
            "/type-building/easton-100-6.webp"
          ]
        },
        {
          id:        "easton-90",
          name:      "Easton 90",
          price:     "Rp 1,21 Miliar",
          installment: "Rp 6 Jutaan / bln",
          bed:       0,
          bath:      2,
          landArea:  90,
          buildArea: 54,
          image:     "/type-building/easton-90-1.webp",
          images:    [
            "/type-building/easton-90-1.webp",
            "/type-building/easton-90-2.webp",
            "/type-building/easton-90-3.webp",
            "/type-building/easton-90-4.webp",
            "/type-building/easton-90-5.webp",
            "/type-building/easton-90-6.webp"
          ]
        },
      ],
    },
    {
      id:    "weston",
      name:  "Weston Gateway",
      units: [
        {
          id:        "weston-100",
          name:      "Weston 100",
          price:     "Rp 1,37 Miliar",
          installment: "Rp 7 Jutaan / bln",
          bed:       0,
          bath:      2,
          landArea:  100,
          buildArea: 60,
          image:     "/type-building/weston-100-1.webp",
          images:    [
            "/type-building/weston-100-1.webp",
            "/type-building/weston-100-2.webp",
            "/type-building/weston-100-3.webp"
          ]
        },
        {
          id:        "weston-90",
          name:      "Weston 90",
          price:     "Rp 1,21 Miliar",
          installment: "Rp 6 Jutaan / bln",
          bed:       0,
          bath:      2,
          landArea:  90,
          buildArea: 54,
          image:     "/type-building/weston-90-1.webp",
          images:    [
            "/type-building/weston-90-1.webp",
            "/type-building/weston-90-2.webp",
            "/type-building/weston-90-3.webp"
          ]
        },
      ],
    },
  ],
}

// ── LANDMARK ─────────────────────────────────────────────────────
export const LANDMARK_CONTENT: LandmarkContent = {
  eyebrow:     "Akses Strategis",
  headline:    "Dekat dengan Segalanya",
  subheadline: "Metland Cikarang terletak di lokasi strategis Cibitung, Bekasi dengan akses mudah ke berbagai fasilitas utama.",
  points: [
    { id: "station-1",  label: "Stasiun Telaga Murni",  distance: "10 menit",  icon: "train" },
    { id: "station-2",  label: "Stasiun Cikarang",       distance: "10 menit",  icon: "train" },
    { id: "toll-1",     label: "Tol Telaga Asih",        distance: "25 menit",  icon: "road" },
    { id: "mall-1",     label: "Lotte Grosir",           distance: "12 menit",  icon: "shopping" },
    { id: "hospital-1", label: "RS Annisa",              distance: "15 menit",  icon: "hospital" },
    { id: "school-1",   label: "Sekolah Terdekat",       distance: "5 menit",   icon: "school" },
    { id: "mrt-1",      label: "Rencana MRT",            distance: "3 km",      icon: "metro" },
    { id: "airport-1",  label: "Bandara Halim PK",       distance: "45 menit",  icon: "plane" },
  ],
};

// ── LOCATION ─────────────────────────────────────────────────────
export const LOCATION_CONTENT: LocationContent = {
  eyebrow:     "Lokasi",
  headline:    "Cibitung, Bekasi",
  subheadline: "Jl. Metland Cikarang, Cibitung, Bekasi, Jawa Barat 17520",
  description: "Terletak di kawasan strategis Cibitung yang terus berkembang, Metland Cikarang memberikan akses mudah ke pusat bisnis, transportasi publik, dan fasilitas kota.",
};

// ── FACILITY ─────────────────────────────────────────────────────
export const FACILITY_CONTENT: FacilityContent = {
  eyebrow:     "Fasilitas",
  headline:    "Lengkap untuk Gaya Hidup Anda",
  subheadline: "Dirancang untuk mendukung kualitas hidup penghuni dengan fasilitas modern dan ramah lingkungan.",
  items: [
    { id: "waterland",    label: "Waterland",          description: "Kolam renang & wahana air keluarga",          icon: "waves" },
    { id: "jogging",      label: "Jogging Track",      description: "Lintasan lari di lingkungan hijau",            icon: "activity" },
    { id: "park",         label: "Taman Bermain",      description: "Area bermain anak yang aman dan nyaman",       icon: "trees" },
    { id: "cctv",         label: "CCTV 24 Jam",        description: "Keamanan terpantau sepanjang waktu",           icon: "shield" },
    { id: "shuttle",      label: "Shuttle Bus",        description: "Layanan transportasi ke stasiun terdekat",     icon: "bus" },
    { id: "solar",        label: "Solar Charger",      description: "Pengisi daya sepeda listrik tenaga surya",     icon: "sun" },
    { id: "waste",        label: "Bank Sampah",        description: "Pengelolaan sampah terpadu & ramah lingkungan", icon: "recycle" },
    { id: "clubhouse",    label: "Clubhouse",          description: "Fasilitas sosial dan pertemuan komunitas",     icon: "building" },
    { id: "wifi",         label: "Internet Ready",     description: "Infrastruktur internet fiber siap tersambung", icon: "wifi" },
    { id: "water",        label: "Water Treatment",    description: "Sistem pengolahan air bersih mandiri",         icon: "droplets" },
    { id: "gate",         label: "One Gate System",    description: "Sistem akses satu pintu untuk keamanan",      icon: "key" },
    { id: "mosque",       label: "Masjid",             description: "Sarana ibadah di dalam kawasan",              icon: "moon" },
  ],
};

// ── ADVANTAGE ────────────────────────────────────────────────────
export const ADVANTAGE_CONTENT: AdvantageContent = {
  eyebrow:     "Keunggulan",
  headline:    "Kenapa Metland Cikarang?",
  subheadline: "Metland bukan sekadar rumah — ini adalah gaya hidup yang lebih baik untuk Anda dan keluarga.",
  items: [
    {
      id:          "eco",
      number:      "01",
      title:       "Eco Living Nyata",
      description: "Bukan sekadar tagline. Sistem pengolahan air, solar panel, bank sampah, dan shuttle bus terhubung ke transportasi publik.",
    },
    {
      id:          "design",
      number:      "02",
      title:       "Desain Biophilic",
      description: "High ceiling, layout minim sekat, dan banyak bukaan jendela menghadirkan udara segar dan cahaya alami ke setiap sudut rumah.",
    },
    {
      id:          "location",
      number:      "03",
      title:       "Lokasi Strategis",
      description: "10 menit ke Stasiun Telaga Murni, dekat tol, pusat perbelanjaan, sekolah, dan rumah sakit. Semua dalam jangkauan.",
    },
    {
      id:          "developer",
      number:      "04",
      title:       "Developer Terpercaya",
      description: "PT Metropolitan Land Tbk, pengembang properti berpengalaman lebih dari 30 tahun dengan rekam jejak pembangunan tepat waktu.",
    },
  ],
};

// ── ABOUT ────────────────────────────────────────────────────────
export const ABOUT_CONTENT: AboutContent = {
  eyebrow: "Tentang Kami",
  headline: "PT Metropolitan Land Tbk",
  subheadline: "Menghadirkan Hunian Berkualitas Sejak 1994",
  description:
    "Metropolitan Land (Metland) adalah perusahaan properti publik Indonesia yang telah berpengalaman lebih dari tiga dekade dalam mengembangkan kawasan perumahan, pusat perbelanjaan, dan hotel di seluruh Indonesia. Metland Cikarang adalah wujud komitmen kami menghadirkan hunian eco-living yang terjangkau, berkualitas, dan berkelanjutan.",
  stats: [
    { id: "years", value: "30+", label: "Tahun Pengalaman" },
    { id: "units", value: "10K+", label: "Unit Terbangun" },
    { id: "projects", value: "15+", label: "Proyek Aktif" },
    { id: "cities", value: "8", label: "Kota di Indonesia" },
  ],
};

// ── FAQ ──────────────────────────────────────────────────────────
export const FAQ_CONTENT: FAQContent = {
  eyebrow:  "FAQ",
  headline: "Pertanyaan yang Sering Diajukan",
  items: [
    {
      id:       "developer",
      question: "Siapa perusahaan pengembang Metland Cikarang?",
      answer:   "Perumahan Metland Cikarang dikembangkan oleh PT Metropolitan Land Tbk (Metland), perusahaan properti publik yang telah berdiri sejak 1994.",
    },
    {
      id:       "completion",
      question: "Kapan perkiraan selesai pembangunan?",
      answer:   "Pembangunan dilakukan secara bertahap. Cluster pertama telah selesai dan siap huni. Hubungi tim marketing kami untuk informasi status unit terkini.",
    },
    {
      id:       "promo",
      question: "Masa berlaku promo hingga kapan?",
      answer:   "Promo bersifat terbatas dan dapat berubah sewaktu-waktu. Hubungi kami untuk mengetahui promo yang sedang berlaku saat ini.",
    },
    {
      id:       "eco-facility",
      question: "Apa saja fasilitas eco living di Metland Cikarang?",
      answer:   "Sistem pengolahan air bersih mandiri, shuttle bus terkoneksi transportasi publik, solar charger untuk sepeda listrik, bank sampah, garbage bin & komposter, serta pabrik pengolahan sampah.",
    },
    {
      id:       "transport",
      question: "Apa saja akses transportasi publik terdekat?",
      answer:   "Stasiun Telaga Murni berjarak 10 menit, Stasiun Cikarang berjarak 10 menit. Tersedia juga layanan shuttle bus dari dalam kawasan.",
    },
    {
      id:       "design",
      question: "Bagaimana konsep desain rumah Metland Cikarang?",
      answer:   "Rumah dirancang dengan konsep biophilic: high ceiling, layout minim sekat, serta banyak bukaan untuk memaksimalkan udara segar dan cahaya alami — menciptakan hunian yang hemat energi dan nyaman.",
    },
  ],
};

// ── CTA ──────────────────────────────────────────────────────────
export const CTA_CONTENT: CTAContent = {
  eyebrow:     "Hubungi Kami",
  headline:    "Wujudkan Rumah Impian Anda Sekarang",
  subheadline: "Konsultasikan kebutuhan Anda dengan tim marketing kami. Gratis, tanpa komitmen.",
  cta: {
    primary:   "Chat WhatsApp",
    secondary: "Jadwalkan Kunjungan",
  },
};

// ── FOOTER ───────────────────────────────────────────────────────
export const FOOTER_CONTENT: FooterContent = {
  tagline:   "Perumahan Eco Living Modern di Cibitung, Bekasi.",
  copyright: `© ${new Date().getFullYear()} PT Metropolitan Land Tbk. All rights reserved.`,
  links: [
    { label: "Promo",     href: "#promo" },
    { label: "Cluster",   href: "#cluster" },
    { label: "Lokasi",    href: "#location" },
    { label: "Fasilitas", href: "#facility" },
    { label: "FAQ",       href: "#faq" },
  ],
};
