"use client";

import Image from "next/image";
import Link from "next/link";

const BLOG_POSTS = [
    {
        id: 1,
        title: "Permanentný make-up: Čo potrebujete vedieť",
        excerpt: "Všetko o príprave, procese a starostlivosti po zákroku permanentného make-upu.",
        image: "/sluzby/permanent.jpg",
        slug: "permanentny-makeup-co-potrebujete-vediet"
    },
    {
        id: 2,
        title: "Techniky púdrového obočia",
        excerpt: "Objavte tri moderné techniky púdrového obočia, ktoré ponúkame v našom štúdiu.",
        image: "/sluzby/pmu-brows.jpg",
        slug: "techniky-pudroveho-obocia"
    },
    {
        id: 3,
        title: "Starostlivosť o pleť v zime",
        excerpt: "Tipy a triky ako sa starať o pleť počas chladných zimných mesiacov.",
        image: "/sluzby/kozmetika.webp",
        slug: "starostlivost-o-plet-v-zime"
    },
];

export default function BlogSection() {
    return (
        <section className="py-20 px-4">
            <div className="w-[90vw] max-w-7xl mx-auto">
                <div className="w-full text-center mb-16">
                    <h2 className="font-marcellus text-4xl mb-4 text-[#1D0E22] tracking-widest">
                        BLOG
                    </h2>
                    <p className="font-montserrat text-[#1D0E22] text-lg uppercase tracking-wider">
                        Najnovšie zo sveta krásy
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {BLOG_POSTS.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="group flex flex-col h-full"
                        >
                            <article
                                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
                                style={{
                                    background: "linear-gradient(to bottom right, #F9F9F9 0%, #EEE3CE 100%)"
                                }}
                            >
                                {/* Image on top */}
                                <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                {/* Text content below */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="font-prociono text-xl text-[#1D0E22] mb-3 group-hover:text-[#1D0E22]/80 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="font-montserrat text-[#1D0E22]/70 text-sm leading-relaxed mb-4">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto">
                                        <span className="font-montserrat text-sm text-[#1D0E22] font-medium group-hover:underline">
                                            Čítať viac →
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
