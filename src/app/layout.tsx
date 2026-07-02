import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/constants/site";

const fontDisplay = Fraunces({
  subsets:  ["latin"],
  variable: "--font-display",
  weight:   ["300", "400", "500"],
  display:  "swap",
});

const fontBody = Inter({
  subsets:  ["latin"],
  variable: "--font-body",
  weight:   ["300", "400", "500"],
  display:  "swap",
});

export const metadata: Metadata = {
  title: {
    default:  SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type:        "website",
    locale:      "id_ID",
    url:         SITE_CONFIG.url,
    siteName:    SITE_CONFIG.name,
    title:       SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card:        "summary_large_image",
    title:       SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  robots: {
    index:  true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${fontDisplay.variable} ${fontBody.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
