"use client";

import Image from "next/image";
import Link from "next/link";

const BLOG_POSTS = [
    {
        id: 1,
        title: "Čo sa deje s pokožkou v procese permanentného make-upu",
        excerpt: "Pokožka, pigment, ihla a ruky artista – štyria aktéri, ktorí vytvárajú prirodzený permanentný make-up.",
        image: "/blog/co-sa-deje/a447c5d5-1bd1-40a7-8ceb-e2d5d599c470.JPG",
        slug: "co-sa-deje-s-pokozkou-v-procese-pmu"
    },
    {
        id: 5,
        title: "Komplikácie pri permanentnom make-upe",
        excerpt: "Najčastejšou komplikáciou je neodborne vykonaný permanentný make-up. Riešením takýchto stavov je odstránenie pigmentu.",
        image: "/blog/co-sa-deje/komplikacie/9e62ada0-eb59-4b9d-b33b-0de486fc9f7b.JPG",
        slug: "komplikacie-pri-permanentnom-make-upe"
    },
    {
        id: 6,
        title: "Laser a remover",
        excerpt: "Odstraňovanie nežiadúceho permanentného make-upu je odborný proces, ktorý rešpektuje biologické zákonitosti kože.",
        image: "/Laser-pmu-odstranenie/def471a9-c59d-4981-9d9a-4e453c6a9e82.JPG",
        slug: "laser-a-remover"
    },
];

export default function BlogSection() {
    return (
        <section className="py-20 px-4" id="blog">
            <div className="w-[90vw] max-w-7xl mx-auto">
                <div className="w-full text-center mb-16">
                    <h2 className="font-marcellus text-4xl mb-4 text-[#1D0E22] tracking-widest">
                        BLOG
                    </h2>
                    <p className="font-montserrat text-[#1D0E22] text-lg uppercase tracking-wider">
                        Najnovšie zo sveta krásy
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
