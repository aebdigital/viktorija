import { MetadataRoute } from "next";

const BASE_URL = "https://salonviktoria.sk";

// Blog post slugs kept in sync with src/app/blog/[slug]/page.tsx BLOG_POSTS array.
const BLOG_SLUGS = [
    "co-sa-deje-s-pokozkou-v-procese-pmu",
    "komplikacie-pri-permanentnom-make-upe",
    "laser-a-remover",
];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
        { path: "/", priority: 1.0, changeFrequency: "monthly" },

        // Services
        { path: "/sluzby/permanentny-makeup", priority: 0.9, changeFrequency: "monthly" },
        { path: "/sluzby/permanentny-makeup/obocie", priority: 0.85, changeFrequency: "monthly" },
        { path: "/sluzby/permanentny-makeup/pery", priority: 0.85, changeFrequency: "monthly" },
        { path: "/sluzby/permanentny-makeup/ocne-linky", priority: 0.85, changeFrequency: "monthly" },
        { path: "/sluzby/permanentny-makeup/dermopigmentacia", priority: 0.8, changeFrequency: "monthly" },
        { path: "/sluzby/odstranovanie-pmu", priority: 0.85, changeFrequency: "monthly" },
        { path: "/sluzby/nastrelovanie-nausnic", priority: 0.85, changeFrequency: "monthly" },
        { path: "/sluzby/kozmetika", priority: 0.85, changeFrequency: "monthly" },
        { path: "/sluzby/kremy-sera", priority: 0.7, changeFrequency: "monthly" },

        // Academia
        { path: "/academia", priority: 0.9, changeFrequency: "monthly" },
        { path: "/academia/the-art-of-pmu", priority: 0.8, changeFrequency: "monthly" },
        { path: "/academia/pmu-pier", priority: 0.8, changeFrequency: "monthly" },
        { path: "/academia/pmu-ocnych-liniek", priority: 0.8, changeFrequency: "monthly" },
        { path: "/academia/tri-techniky-obocia", priority: 0.8, changeFrequency: "monthly" },
        { path: "/academia/hyperrealisticke-obocie", priority: 0.8, changeFrequency: "monthly" },
        { path: "/academia/laser-touch", priority: 0.8, changeFrequency: "monthly" },
        { path: "/academia/esteticke-nastrelovanie-nausnic", priority: 0.8, changeFrequency: "monthly" },
        { path: "/academia/dod", priority: 0.75, changeFrequency: "monthly" },

        // Blog
        { path: "/blog", priority: 0.7, changeFrequency: "weekly" },

        // Misc
        { path: "/kontakt", priority: 0.6, changeFrequency: "yearly" },
    ];

    return [
        ...staticRoutes.map((r) => ({
            url: `${BASE_URL}${r.path}`,
            lastModified: now,
            changeFrequency: r.changeFrequency,
            priority: r.priority,
        })),
        ...BLOG_SLUGS.map((slug) => ({
            url: `${BASE_URL}/blog/${slug}`,
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: 0.5,
        })),
    ];
}
