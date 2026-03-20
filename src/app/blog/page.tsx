import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BLOG_POSTS = [
    {
        id: 4,
        title: "Čo sa deje s pokožkou v procese permanentného make-upu",
        excerpt: "Pokožka, pigment, ihla a ruky artista – štyria aktéri, ktorí vytvárajú prirodzený permanentný make-up.",
        image: "/blog/co-sa-deje/a447c5d5-1bd1-40a7-8ceb-e2d5d599c470.JPG",
        slug: "co-sa-deje-s-pokozkou-v-procese-pmu",
        date: "10. februára 2026"
    },
    {
        id: 5,
        title: "Komplikácie pri permanentnom make-upe",
        excerpt: "Najčastejšou komplikáciou je neodborne vykonaný permanentný make-up. Riešením takýchto stavov je odstránenie pigmentu.",
        image: "/blog/co-sa-deje/komplikacie/9e62ada0-eb59-4b9d-b33b-0de486fc9f7b.JPG",
        slug: "komplikacie-pri-permanentnom-make-upe",
        date: "12. februára 2026"
    },
    {
        id: 6,
        title: "Laser a remover",
        excerpt: "Odstraňovanie nežiadúceho permanentného make-upu je odborný proces, ktorý rešpektuje biologické zákonitosti kože.",
        image: "/Laser-pmu-odstranenie/def471a9-c59d-4981-9d9a-4e453c6a9e82.JPG",
        slug: "laser-a-remover",
        date: "12. februára 2026"
    },
];

export default function BlogPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <section className="pt-32 pb-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="font-alex text-6xl md:text-7xl text-[#1D0E22] text-center mb-4">
                        Blog
                    </h1>
                    <p className="font-montserrat text-[#1D0E22]/70 text-center max-w-2xl mx-auto mb-16">
                        Tipy, triky a novinky zo sveta permanentného make-upu a kozmetiky
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS.map((post) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                className="group block"
                            >
                                <article
                                    className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full"
                                    style={{
                                        background: "linear-gradient(to bottom right, #F9F9F9 0%, #EEE3CE 100%)"
                                    }}
                                >
                                    {/* Image */}
                                    <div className="relative w-full h-56 overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <p className="font-montserrat text-xs text-[#1D0E22]/50 uppercase tracking-wider mb-2">
                                            {post.date}
                                        </p>
                                        <h2 className="font-prociono text-xl text-[#1D0E22] mb-3 group-hover:text-[#1D0E22]/80 transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="font-montserrat text-[#1D0E22]/70 text-sm leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <span className="inline-block mt-4 font-montserrat text-sm text-[#1D0E22] font-medium group-hover:underline">
                                            Čítať viac →
                                        </span>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
