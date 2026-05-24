import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/osobne-udaje"],
            },
        ],
        sitemap: "https://salonviktoria.sk/sitemap.xml",
        host: "https://salonviktoria.sk",
    };
}
