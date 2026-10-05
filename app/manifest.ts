import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Hay Bee Concepts",
        short_name: "Hay Bee",
        description: "Painting, branding and custom gifts in Ibadan.",
        start_url: "/",
        display: "standalone",
        background_color: "#0a1630",
        theme_color: "#0a1630",
        icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
    };
}