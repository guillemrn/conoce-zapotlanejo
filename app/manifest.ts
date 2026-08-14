import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Conoce Zapotlanejo",
    short_name: "Conoce Zapotlanejo",
    description: "Guía digital colaborativa para descubrir negocios, lugares, sabores y experiencias recomendadas en Zapotlanejo, Jalisco.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5efe3",
    theme_color: "#173c35",
    icons: [
      {
        src: "/favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
