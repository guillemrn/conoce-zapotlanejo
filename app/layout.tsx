import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://conocezapotlanejo.com"),
  title: {
    default: "Conoce Zapotlanejo | Guía Local de Lugares, Moda y Sabores",
    template: "%s | Conoce Zapotlanejo",
  },
  description:
    "Descubre los mejores lugares, comercios, gastronomía tradicional, moda textil y experiencias en Zapotlanejo, Jalisco recomendados por su propia comunidad.",
  applicationName: "Conoce Zapotlanejo",
  authors: [{ name: "Comunidad de Conoce Zapotlanejo" }],
  creator: "Conoce Zapotlanejo",
  publisher: "Conoce Zapotlanejo",
  keywords: [
    "Zapotlanejo",
    "Zapotlanejo Jalisco",
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
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/logo-conoce-zapotlanejo.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Conoce Zapotlanejo | Guía Local de Lugares, Moda y Sabores",
    description:
      "Descubre los mejores lugares, comercios, gastronomía tradicional, moda textil y experiencias en Zapotlanejo, Jalisco recomendados por la comunidad.",
    url: "https://conocezapotlanejo.com",
    siteName: "Conoce Zapotlanejo",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/zapotlanejo-centro.webp",
        width: 1200,
        height: 630,
        alt: "Centro Histórico y Parroquia de Zapotlanejo, Jalisco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conoce Zapotlanejo | Guía Local de Lugares, Moda y Sabores",
    description:
      "Descubre lugares, gastronomía, moda y experiencias recomendadas en Zapotlanejo, Jalisco.",
    images: ["/zapotlanejo-centro.webp"],
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
      description:
        "Guía colaborativa para descubrir negocios, lugares, sabores y experiencias en Zapotlanejo, Jalisco.",
      inLanguage: "es-MX",
    },
    {
      "@type": "Organization",
      "@id": "https://conocezapotlanejo.com/#organization",
      name: "Conoce Zapotlanejo",
      url: "https://conocezapotlanejo.com",
      logo: "https://conocezapotlanejo.com/conoce-zapotlanejo-logo.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
