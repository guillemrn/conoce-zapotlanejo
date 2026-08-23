import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import CookieConsent from "./CookieConsent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://conocezapotlanejo.com"),
  title: {
    default: "Conoce Zapotlanejo | Plataforma interactiva local",
    template: "%s | Conoce Zapotlanejo",
  },
  description:
    "Plataforma interactiva en preparación para descubrir lugares, sabores, compras, historias y rutas locales recomendadas por la comunidad de Zapotlanejo, Jalisco.",
  applicationName: "Conoce Zapotlanejo",
  authors: [{ name: "Comunidad de Conoce Zapotlanejo" }],
  creator: "Conoce Zapotlanejo",
  publisher: "Conoce Zapotlanejo",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Zapotlanejo",
    "Zapotlanejo Jalisco",
    "Conoce Zapotlanejo",
    "plataforma interactiva Zapotlanejo",
    "rutas en Zapotlanejo",
    "recomendaciones Zapotlanejo",
    "ropa en Zapotlanejo",
    "turismo Zapotlanejo",
    "compras Zapotlanejo",
    "textil Zapotlanejo",
    "restaurantes Zapotlanejo",
    "qué hacer en Zapotlanejo",
    "lugares para visitar en Zapotlanejo",
    "experiencias locales Zapotlanejo",
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
    title: "Conoce Zapotlanejo | Plataforma interactiva local",
    description:
      "Una plataforma viva para descubrir lugares, sabores, moda, comercios, rutas y experiencias recomendadas en Zapotlanejo, Jalisco.",
    url: "https://conocezapotlanejo.com",
    siteName: "Conoce Zapotlanejo",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/open-graph.jpg",
        width: 1200,
        height: 630,
        alt: "Conoce Zapotlanejo, plataforma interactiva de rutas y recomendaciones locales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conoce Zapotlanejo | Plataforma interactiva local",
    description:
      "Descubre lugares, gastronomía, moda, rutas y experiencias recomendadas por la comunidad en Zapotlanejo, Jalisco.",
    images: ["/open-graph.jpg"],
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
      alternateName: "Plataforma interactiva de Zapotlanejo",
      description:
        "Plataforma interactiva en preparación para descubrir negocios, lugares, sabores, rutas y experiencias en Zapotlanejo, Jalisco.",
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
      name: "Conoce Zapotlanejo | Plataforma interactiva local",
      description:
        "Landing de registro para recibir el lanzamiento y recomendar lugares, negocios, rutas y experiencias de Zapotlanejo, Jalisco.",
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
        url: "https://conocezapotlanejo.com/open-graph.jpg",
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
        <Analytics />
      </body>
    </html>
  );
}
