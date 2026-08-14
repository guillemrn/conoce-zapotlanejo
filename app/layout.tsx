import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import CookieConsent from "./CookieConsent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://conocezapotlanejo.com"),
  title: {
    default: "Conoce Zapotlanejo | Guía local de lugares recomendados",
    template: "%s | Conoce Zapotlanejo",
  },
  description:
    "Guía digital en preparación para descubrir dónde comer, comprar y qué hacer en Zapotlanejo, Jalisco, con recomendaciones revisadas de la comunidad.",
  applicationName: "Conoce Zapotlanejo",
  authors: [{ name: "Comunidad de Conoce Zapotlanejo" }],
  creator: "Conoce Zapotlanejo",
  publisher: "Conoce Zapotlanejo",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Zapotlanejo",
    "Zapotlanejo Jalisco",
    "Conoce Zapotlanejo",
    "guía de Zapotlanejo",
    "ropa en Zapotlanejo",
    "turismo Zapotlanejo",
    "compras Zapotlanejo",
    "textil Zapotlanejo",
    "restaurantes Zapotlanejo",
    "qué hacer en Zapotlanejo",
    "lugares para visitar en Zapotlanejo",
    "directorio local Zapotlanejo",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/",
    },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Conoce Zapotlanejo | Guía local de lugares recomendados",
    description:
      "Una guía digital en preparación para descubrir lugares, sabores, moda, comercios y experiencias recomendadas en Zapotlanejo, Jalisco.",
    url: "https://conocezapotlanejo.com",
    siteName: "Conoce Zapotlanejo",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/social-share-conoce-zapotlanejo.png",
        width: 1200,
        height: 630,
        alt: "Conoce Zapotlanejo, guía digital de lugares recomendados por la comunidad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conoce Zapotlanejo | Guía local de lugares recomendados",
    description:
      "Descubre lugares, gastronomía, moda y experiencias recomendadas por la comunidad en Zapotlanejo, Jalisco.",
    images: ["/social-share-conoce-zapotlanejo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  other: {
    "codex-preview": "development",
  },
  category: "travel",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#173c35",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://conocezapotlanejo.com/#website",
      url: "https://conocezapotlanejo.com",
      name: "Conoce Zapotlanejo",
      alternateName: "Guía local de Zapotlanejo",
      description:
        "Guía digital en preparación para descubrir negocios, lugares, sabores y experiencias en Zapotlanejo, Jalisco.",
      inLanguage: "es-MX",
      publisher: {
        "@id": "https://conocezapotlanejo.com/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://conocezapotlanejo.com/#organization",
      name: "Conoce Zapotlanejo",
      url: "https://conocezapotlanejo.com",
      logo: "https://conocezapotlanejo.com/logo-conoce-zapotlanejo.svg",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zapotlanejo",
        addressRegion: "Jalisco",
        addressCountry: "MX",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Zapotlanejo, Jalisco",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://conocezapotlanejo.com/#webpage",
      url: "https://conocezapotlanejo.com",
      name: "Conoce Zapotlanejo | Guía local de lugares recomendados",
      description:
        "Landing de registro para recibir el lanzamiento y recomendar lugares, negocios y experiencias de Zapotlanejo, Jalisco.",
      isPartOf: {
        "@id": "https://conocezapotlanejo.com/#website",
      },
      about: {
        "@type": "Place",
        name: "Zapotlanejo",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Zapotlanejo",
          addressRegion: "Jalisco",
          addressCountry: "MX",
        },
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://conocezapotlanejo.com/social-share-conoce-zapotlanejo.png",
        width: 1200,
        height: 630,
      },
      potentialAction: [
        {
          "@type": "RegisterAction",
          name: "Recibir aviso del lanzamiento",
          target: "https://conocezapotlanejo.com/#registro",
        },
        {
          "@type": "RecommendAction",
          name: "Recomendar un lugar de Zapotlanejo",
          target: "https://conocezapotlanejo.com/#registro",
        },
      ],
      inLanguage: "es-MX",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
