import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BLOG_POSTS = [
    {
        id: 1,
        title: "Permanentný make-up: Čo potrebujete vedieť",
        excerpt: "Všetko o príprave, procese a starostlivosti po zákroku permanentného make-upu.",
        image: "/sluzby/permanent.jpg",
        slug: "permanentny-makeup-co-potrebujete-vediet",
        date: "15. januára 2025"
    },
    {
        id: 2,
        title: "Techniky púdrového obočia",
        excerpt: "Objavte tri moderné techniky púdrového obočia, ktoré ponúkame v našom štúdiu.",
        image: "/sluzby/pmu-brows.jpg",
        slug: "techniky-pudroveho-obocia",
        date: "10. januára 2025"
    },
    {
        id: 3,
        title: "Starostlivosť o pleť v zime",
        excerpt: "Tipy a triky ako sa starať o pleť počas chladných zimných mesiacov.",
        image: "/sluzby/kozmetika.webp",
        slug: "starostlivost-o-plet-v-zime",
        date: "5. januára 2025"
    },
];

export default function BlogPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <section className="pt-32 pb-20 px-4 bg-main-bg">
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
