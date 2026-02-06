import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sample blog data - in production this would come from a CMS/database
const BLOG_POSTS = [
    {
        id: 1,
        title: "Permanentný make-up: Čo potrebujete vedieť",
        excerpt: "Všetko o príprave, procese a starostlivosti po zákroku permanentného make-upu.",
        image: "/sluzby/permanent.jpg",
        slug: "permanentny-makeup-co-potrebujete-vediet",
        content: `
            <p>Permanentný make-up je moderná kozmetická technika, ktorá vám umožní mať dokonalý vzhľad 24 hodín denne, 7 dní v týždni. V tomto článku sa dozviete všetko, čo potrebujete vedieť pred tým, ako sa rozhodnete pre tento zákrok.</p>

            <h2>Čo je permanentný make-up?</h2>
            <p>Permanentný make-up, známy aj ako mikropigmentácia, je kozmetická technika, pri ktorej sa pigment aplikuje do horných vrstiev kože pomocou špeciálnych ihiel. Výsledkom je prirodzený vzhľad, ktorý vydrží niekoľko rokov.</p>

            <h2>Príprava pred zákrokom</h2>
            <p>Pred zákrokom je dôležité dodržiavať niekoľko pravidiel:</p>
            <ul>
                <li>Vyhnite sa alkoholu 24 hodín pred zákrokom</li>
                <li>Neužívajte lieky na riedenie krvi</li>
                <li>Dobre sa vyspite</li>
                <li>Príďte s čistou pokožkou bez make-upu</li>
            </ul>

            <h2>Starostlivosť po zákroku</h2>
            <p>Po zákroku je potrebné dodržiavať pokyny pre správne hojenie:</p>
            <ul>
                <li>Prvých 7 dní nenamáčajte ošetrené miesto</li>
                <li>Aplikujte odporúčaný hojivý krém</li>
                <li>Vyhnite sa priamemu slnku</li>
                <li>Neškriabte ani nelúpte chrasty</li>
            </ul>
        `,
        date: "15. januára 2025"
    },
    {
        id: 2,
        title: "Techniky púdrového obočia",
        excerpt: "Objavte tri moderné techniky púdrového obočia, ktoré ponúkame v našom štúdiu.",
        image: "/sluzby/pmu-brows.jpg",
        slug: "techniky-pudroveho-obocia",
        content: `
            <p>Púdrové obočie je jednou z najobľúbenejších techník permanentného make-upu. Ponúka jemný, prirodzený vzhľad, ktorý vyzerá ako profesionálne nalíčené obočie.</p>

            <h2>Čo je púdrové obočie?</h2>
            <p>Púdrové obočie je technika, pri ktorej sa pigment aplikuje do kože pomocou špeciálnej ihly, čím sa vytvára jemný, rozmazaný efekt podobný púdru alebo tieňu.</p>

            <h2>Tri techniky, ktoré ponúkame</h2>
            <h3>1. Ombré obočie</h3>
            <p>Gradientný efekt, ktorý je svetlejší na začiatku obočia a tmavší na konci.</p>

            <h3>2. Kombinovaná technika</h3>
            <p>Kombinácia microblading a púdrovej techniky pre maximálne prirodzený vzhľad.</p>

            <h3>3. Full púdrové obočie</h3>
            <p>Rovnomerné pokrytie celého obočia pre výraznejší efekt.</p>
        `,
        date: "10. januára 2025"
    },
    {
        id: 3,
        title: "Starostlivosť o pleť v zime",
        excerpt: "Tipy a triky ako sa starať o pleť počas chladných zimných mesiacov.",
        image: "/sluzby/kozmetika.webp",
        slug: "starostlivost-o-plet-v-zime",
        content: `
            <p>Zimné mesiace môžu byť pre našu pleť náročné. Studený vzduch vonku a suché kúrenie vnútri môžu spôsobiť vysušenie, podráždenie a iné problémy s pleťou.</p>

            <h2>Prečo je zimná starostlivosť dôležitá?</h2>
            <p>V zime naša pokožka stráca viac vlhkosti, čo vedie k suchosti, praskaniu a predčasnému starnutiu. Správna starostlivosť môže tieto problémy minimalizovať.</p>

            <h2>Tipy pre zimnú starostlivosť</h2>
            <ul>
                <li>Používajte bohatšie hydratačné krémy</li>
                <li>Nezabúdajte na SPF ochranu</li>
                <li>Pite dostatok vody</li>
                <li>Používajte zvlhčovač vzduchu</li>
                <li>Vyhnite sa príliš horúcej vode pri umývaní</li>
            </ul>

            <h2>Odporúčané produkty</h2>
            <p>V našom štúdiu ponúkame špeciálne zimné krémy a séra, ktoré pomôžu vašej pleti prežiť zimu v perfektnom stave.</p>
        `,
        date: "5. januára 2025"
    },
];

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Find the current post
    const post = BLOG_POSTS.find(p => p.slug === slug);

    // Get recommended posts (excluding current)
    const recommendedPosts = BLOG_POSTS.filter(p => p.slug !== slug);

    if (!post) {
        return (
            <main className="min-h-screen">
                <Header />
                <div className="pt-32 pb-20 px-4 text-center">
                    <h1 className="text-4xl text-[#1D0E22]">Článok nenájdený</h1>
                    <Link href="/" className="text-[#1D0E22] underline mt-4 inline-block">
                        Späť na úvod
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-main-bg">
            <Header />

            <div className="pt-32 pb-24 w-[90vw] md:w-[95vw] max-w-7xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/#blog"
                    className="inline-flex items-center text-[#1D0E22]/60 hover:text-[#1D0E22] transition-colors mb-8 font-montserrat text-sm uppercase tracking-widest"
                >
                    <span className="mr-2">←</span> Späť na blog
                </Link>

                {/* Article Header: Image Top, Title Below */}
                <header className="mb-16">
                    <div className="relative aspect-[21/7] max-h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 mb-10">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="max-w-5xl">
                        <p className="font-montserrat text-gold uppercase tracking-[0.3em] text-xs mb-4">
                            {post.date}
                        </p>
                        <h1 className="font-marcellus text-4xl md:text-6xl text-[#1D0E22] leading-[1.2] mb-6">
                            {post.title}
                        </h1>
                        <p className="font-montserrat text-lg md:text-xl text-[#1D0E22]/70 font-light leading-relaxed italic border-l-4 border-gold pl-6">
                            {post.excerpt}
                        </p>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-start">
                    {/* Main Content */}
                    <article className="py-2 md:py-4 overflow-hidden">
                        <div
                            className="blog-content"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:sticky lg:top-32 space-y-8">
                        <div className="bg-[#1D0E22] rounded-3xl p-6 text-[#EEE3CE] shadow-2xl">
                            <h3 className="font-marcellus text-xl mb-6 border-b border-white/10 pb-3 uppercase tracking-wider">
                                Odporúčané
                            </h3>

                            <div className="space-y-6">
                                {recommendedPosts.map((recPost) => (
                                    <Link
                                        key={recPost.id}
                                        href={`/blog/${recPost.slug}`}
                                        className="group/item flex items-center gap-4 py-2 border-b border-white/5 last:border-0"
                                    >
                                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-white/20">
                                            <Image
                                                src={recPost.image}
                                                alt={recPost.title}
                                                fill
                                                className="object-cover group-hover/item:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-marcellus text-sm text-[#EEE3CE] group-hover/item:text-gold transition-colors duration-300 leading-snug line-clamp-2">
                                                {recPost.title}
                                            </h4>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <Footer />
        </main>
    );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}
