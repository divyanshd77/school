import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Best CBSE School in Lucknow | Seth Anandram Jaipuria School",
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
};

const schoolJsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Sec-D, Pocket-3, Ansal Sushant Golf City, Shaheed Path",
    addressLocality: "Lucknow",
    postalCode: "226030",
    addressCountry: "IN",
  },
  telephone: siteConfig.phone.join(", "),
  email: siteConfig.email,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} font-sans antialiased`}
      >
        <JsonLd data={schoolJsonLd} />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
