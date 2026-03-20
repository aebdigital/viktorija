import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sample blog data - in production this would come from a CMS/database
const BLOG_POSTS = [
    {
        id: 4,
        title: "Čo sa deje s pokožkou v procese permanentného make-upu",
        excerpt: "Pokožka, pigment, ihla a ruky artista – štyria aktéri, ktorí vytvárajú prirodzený permanentný make-up.",
        image: "/blog/co-sa-deje/a447c5d5-1bd1-40a7-8ceb-e2d5d599c470.JPG",
        slug: "co-sa-deje-s-pokozkou-v-procese-pmu",
        content: `
            <div class="my-10 space-y-8">
                <div>
                    <p>Permanentný make-up je estetická kresba na koži, ktorú umožňuje spolupráca štyroch hlavných aktérov:</p>
                    <p><strong>pokožka – pigment – ihla – ruky artista</strong></p>
                    <p>Ak každý z nich plní svoju úlohu správne, výsledkom je jemný, prirodzený permanentný make-up, ktorého cieľom je skrášliť tvar a črty ženy bez zaťaženia tváre.</p>
                </div>
                <div class="max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-black/5">
                    <video
                        src="/blog/co-sa-deje/45132545-96fe-4e0e-ab90-8913ff71f926.MP4"
                        controls
                        playsInline
                        loop
                        muted
                        class="w-full h-auto">
                    </video>
                </div>
            </div>

            <h2>Pokožka</h2>
            <p>Koža je najväčší orgán ľudského tela. Skladá sa z troch vrstiev:</p>
            <ul>
                <li>epidermis (pokožka),</li>
                <li>dermis (škára),</li>
                <li>hypoderma (podkožný tuk).</li>
            </ul>
            <p>V permanentnom make-upe pracujeme s epidermis a vrchnou – papilárnou vrstvou dermy, kam sa má pigment ukladať. Nie vyššie v epidermis (pigment nezostane), ani hlbšie v dermy (vzniká doživotný efekt).</p>
            <p>Správna hĺbka je základom čistého a stabilného výsledku.</p>

            <div class="grid grid-cols-1 md:grid-cols-[1fr_285px] gap-10 items-center my-10">
                <div>
                    <h2>Pigment</h2>
                    <p>Pigment je mikrojemný prášok – suchý farebný koncentrát. Aby bol použiteľný v pokožke, mieša sa s kozmetickými základmi:</p>
                    <ul>
                        <li>roztokmi,</li>
                        <li>aktívnymi látkami,</li>
                        <li>zvlhčovadlami,</li>
                        <li>konzervantmi a antiseptikami.</li>
                    </ul>
                    <p>Tieto zložky sa do niekoľkých týždňov vstrebú telom. V pokožke zostáva len samotné farbivo – jemný „farebný piesok".</p>
                </div>
                <div>
                    <img src="/blog/co-sa-deje/6575bcfd-aaaf-493a-b8f9-c2279835e8d9.JPG" alt="Pigment detail" class="rounded-2xl shadow-xl w-full aspect-square object-cover" />
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-[1fr_285px] gap-10 items-center my-10">
                <div>
                    <h2>Ihla / kartridž</h2>
                    <p>Ihla nevnáša pigment pod kožu silou.</p>
                    <p>Počas pigmentovania:</p>
                    <ul>
                        <li>vytvára mikrovpichy,</li>
                        <li>pri jej výstupe vzniká mikropodtlak,</li>
                        <li>fyzikálny vír vtiahne pigment do pokožky.</li>
                    </ul>
                    <p>Ide o jemnú, kontrolovanú prácu, nie o tlak.</p>
                </div>
                <div>
                    <img src="/blog/co-sa-deje/55f93148-2ebd-4ebe-b0b0-dde1a07066a5.JPG" alt="Ihla detail" class="rounded-2xl shadow-xl w-full aspect-square object-cover" />
                </div>
            </div>

            <h2>Ruky artista</h2>
            <p>Ruky PMU umelca sú rozhodujúce:</p>
            <ul>
                <li>strojček je vedený stabilne medzi troma prstami,</li>
                <li>dodržiava sa uhol približne 90°,</li>
                <li>pokožka sa zdravo napína (1–2 cm), aby bola pevná „ako bubon",</li>
                <li>jedna ruka pigmentuje, druhá vníma vibrácie pokožky – tie signalizujú správnu hĺbku.</li>
            </ul>
            <p>Permanentný make-up je kontrolovaná mikrotrauma. Dochádza k dočasnému narušeniu epidermis a kolagénovo-elastínových vlákien.</p>

            <h2>Po procedúre</h2>
            <p>Po približne dvoch hodinách je práca hotová:</p>
            <ul>
                <li>epidermis je kompletne prefarbená,</li>
                <li>pigment je uložený v papilárnej vrstve dermy.</li>
            </ul>
            <p>Bezprostredne po zákroku sa môže objaviť mierne začervenanie, opuch, brnenie alebo pálenie. Ide o normálnu reakciu.</p>

            <h2>Hojenie a regenerácia</h2>
            <ul>
                <li><strong>4.–5. deň:</strong> vytvára sa chrasta, farba pôsobí tmavšie.</li>
                <li><strong>2–4 týždne:</strong> spolu s olupujúcou sa epidermis odchádza časť pigmentu.</li>
                <li><strong>Krátke zosvetlenie:</strong> nad pigmentom sa tvorí nová kolagénovo-elastínová sieť.</li>
                <li><strong>28.–45. deň:</strong> farba sa stabilizuje a prejaví sa definitívny odtieň.</li>
            </ul>

            <h2>Korekcia</h2>
            <p>Korekcia je finálna etapa primárnej procedúry. Slúži na doladenie farby, symetrie, tvaru a sýtosti.</p>
        `,
        date: "10. februára 2026"
    },
    {
        id: 5,
        title: "Komplikácie pri permanentnom make-upe",
        excerpt: "Najčastejšou komplikáciou je neodborne vykonaný permanentný make-up. Riešením takýchto stavov je odstránenie pigmentu.",
        image: "/blog/co-sa-deje/komplikacie/9e62ada0-eb59-4b9d-b33b-0de486fc9f7b.JPG",
        slug: "komplikacie-pri-permanentnom-make-upe",
        content: `
            <p>Najčastejšou komplikáciou je neodborne vykonaný permanentný make-up. Výsledok potom pôsobí neesteticky, nekorešponduje s tvárou klientky a namiesto toho, aby vzhľad kultivoval a harmonizoval, ho opticky znehodnocuje. Môže dôjsť k asymetrii, narušeniu proporcií, nesprávnej voľbe pigmentu alebo k jeho nadmernému množstvu. Osobitnou komplikáciou je aj inverzia pigmentu, teda nežiaduca zmena farebného tónu v priebehu času, prípadne jeho podkožné rozpitie spôsobené nesprávnou hĺbkou uloženia.</p>

            <div class="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-black/5">
                    <img src="/blog/co-sa-deje/komplikacie/230d70c8-bc90-4bf3-a459-5dd54347621e.JPG" alt="Komplikácia PMU 1" class="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div class="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-black/5">
                    <img src="/blog/co-sa-deje/komplikacie/a1cc8370-5a72-4ecc-8e40-49e761b52186.JPG" alt="Komplikácia PMU 2" class="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div class="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-black/5">
                    <img src="/blog/co-sa-deje/komplikacie/63a2c206-6e1a-4250-a1c4-9b4edc368c78.JPG" alt="Komplikácia PMU 3" class="absolute inset-0 w-full h-full object-cover" />
                </div>
            </div>

            <p>Riešením takýchto stavov je odstránenie pigmentu, a to buď laserovou metódou založenou na fyzikálnom princípe, alebo chemickou metódou pomocou removera. V niektorých prípadoch je najefektívnejšia kombinácia oboch postupov. Úplné odstránenie pigmentu nie je možné v rámci jedného sedenia. Bezpečný proces si vyžaduje sériu zákrokov v intervaloch približne jeden až jeden a pol mesiaca, najmä pri laserovej terapii, aby mala pokožka dostatočný čas na regeneráciu.</p>

            <h2>Alergické reakcie</h2>
            <p>Alergické reakcie sú pri moderných, kvalitných pigmentoch a správnych pracovných postupoch zriedkavé. V mojej viac než dvadsaťročnej praxi som sa s klinicky potvrdenou alergickou reakciou nestretla; poznám ich najmä z odbornej literatúry a teoretickej roviny. Reakcia sa môže objaviť na pigment, anestetikum, dezinfekčný prípravok, kovové časti nástrojov alebo iné použité materiály.</p>
            <p>Ak by sa alergická reakcia objavila počas zákroku, procedúra sa okamžite preruší a artistka poskytne prvú predlekársku pomoc. Existujú aj oneskorené alergické reakcie, ktoré sa môžu prejaviť po mesiacoch či rokoch. V takom prípade je potrebné vyšetrenie u lekára – alergológa a následné odborné riešenie.</p>

            <h2>Jazvy</h2>
            <p>Traumaticky vykonaný permanentný make-up, najmä pri prí príliš hlbokom alebo agresívnom zásahu do dermy, môže viesť k vzniku jaziev. Ide o dôsledok narušenia prirodzených regeneračných procesov pokožky. Možnosti korekcie zahŕňajú chemické peelingy, špecializované farmaceutické prípravky na zjemnenie jaziev, kolagénové injekčné terapie alebo frakčný CO₂ laser, vždy po konzultácii s odborníkom.</p>

            <div class="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-black/5">
                    <img src="/Laser/8b7e97fa-b4cb-49f3-9c88-fbb9e05b62e3.JPG" alt="Jazva PMU 1" class="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div class="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-black/5">
                    <img src="/Laser/d8a809c0-0bd2-40c7-bd48-04e6e9e875a8.JPG" alt="Jazva PMU 2" class="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div class="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-black/5">
                    <img src="/Laser/fe779931-a74e-4009-a0f1-f0ba8c5c6f24.JPG" alt="Jazva PMU 3" class="absolute inset-0 w-full h-full object-cover" />
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-10 items-center my-10">
                <div>
                    <h2>Kontrola pracovnej oblasti</h2>
                    <p>Pred každým zákrom je nevyhnutné dôkladne skontrolovať pracovnú oblasť. Artistka musí posúdiť prítomnosť kožných výrastkov, novotvarov, znamienok, dermatitíd, papilómov, bradavíc či aktívneho herpesu. Permanentný make-up sa vykonáva výhradne na zdravej, čistej a neporušenej pokožke. Zodpovedná diagnostika pred zákrom je základom bezpečnosti, profesionálnej etiky aj kvalitného výsledku.</p>
                </div>
                <div>
                    <img src="/blog/co-sa-deje/komplikacie/9e62ada0-eb59-4b9d-b33b-0de486fc9f7b.JPG" alt="Kontrola oblasti" class="rounded-2xl shadow-xl w-full object-cover aspect-[4/5]" />
                </div>
            </div>

            <p>Prevencia komplikácií spočíva vo výbere kvalifikovanej a odborne vzdelanej artistky, v dôkladnej konzultácii a v rešpektovaní anatómie, fyziológie pokožky a správnej hĺbky uloženia pigmentu. Precízna technika, kvalitné materiály a individuálny prístup sú základom bezpečného a estetického výsledku.</p>
        `,
        date: "12. februára 2026"
    },
    {
        id: 6,
        title: "Laser a remover",
        excerpt: "Odstraňovanie nežiadúceho permanentného make-upu je odborný proces, ktorý rešpektuje biologické zákonitosti kože a imunitného systému.",
        image: "/Laser-pmu-odstranenie/def471a9-c59d-4981-9d9a-4e453c6a9e82.JPG",
        slug: "laser-a-remover",
        content: `
            <p>Laserovému odstraňovaniu pigmentov sa venujem od roku 2014. Odstraňovanie PMU je odborný proces, ktorý rešpektuje biologické zákonitosti kože a imunitného systému.</p>
            <p>Množstvo procedúr záleží od množstva pigmentu v pokožke, jeho hĺbky, odtieňa, zloženia, toho, ako „komunikuje“ s laserom, aj od skúseností špecialistu, ktorý zákrok vykonáva.</p>
            <p>Veľkú rolu zohráva aj váš zdravotný stav – ako funguje imunitný a lymfatický systém, či fajčíte, aký máte metabolizmus a ako dôsledne budete dodržiavať domácu starostlivosť. Procedúry vykonávam s certifikovanou technológiou a s dôrazom na maximálnu bezpečnosť pokožky.</p>
            <p>Pred každým zákrom prebieha individuálna konzultácia, počas ktorej zhodnotíme stav pigmentu, pokožky a vylúčime prípadné kontraindikácie.</p>

            <hr />

            <div class="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8 items-start my-10">
                <div>
                    <h2>Čo sa deje s pigmentom v pokožke</h2>
                    <p>Pri permanentnom make-upe sa pigment ukladá do papilárnej vrstvy dermy. Organizmus ho vníma ako cudziu látku.</p>
                    <p>Makrofágy (bunky imunitného systému) pigment pohltia, no nedokážu ho stráviš. Postupne sa okolo nich vytvorí kolagénovo-elastínová kapsula, ktorá pigment stabilizuje a bráni jeho voľnému pohybu.</p>
                    <p>Čím dlhšie je pigment v koži, tým je pevnejšie fixovaný. Zároveň neleží rovnomerne – má tendenciu sa zhlukovať do konglomerátov rôznej hustoty.</p>
                </div>
                <div class="relative aspect-[9/16] w-full max-w-[280px] mx-auto rounded-2xl overflow-hidden shadow-2xl border border-black/5">
                    <video 
                        src="/VIDEO-2026-02-11-17-21-32.mp4" 
                        controls 
                        playsInline 
                        loop 
                        muted 
                        class="absolute inset-0 w-full h-full object-cover">
                    </video>
                </div>
            </div>

            <hr />

            <h2>Nd:YAG Q-Switch laser</h2>
            <p>Laser „nevidí“ pokožku – reaguje selektívne na pigment. Laserový pulz zahreje pigment na vysokú teplotu. Dochádza k narušeniu kapsuly a rozbitiu pigmentu na veľmi malé častice.</p>
            <p>Následne sa spúšťa prirodzený proces čistenia, ktorý trvá minimálne 4–6 týždňov. Až po tomto období vieme objektívne zhodnotiť reálny zostatok pigmentu a rozhodnúť o ďalšom postupe. Odstraňovanie prebieha postupne, kontrolovane a v bezpečných intervaloch – až do dosiahnutia čistej pokožky.</p>

            <hr />

            <h2>Chemický remover</h2>
            <p>Pracujem s kyselinovým removerom s pH 4,5–6, čo je blízke prirodzenému pH pokožky. Aplikácia prebieha ihlou – podobne ako pri jemnom PMU zákroku. Vytvárajú sa mikrokanáliky v bezpečnej hĺbke, cez ktoré preniká aktívna látka.</p>
            <p>Remover vyvolá kontrolovanú reakciu pokožky. Imunitný systém pigment opätovne identifikuje ako cudziu látku a začne ho postupne odstraňovať cez lymfatický systém. Proces trvá niekoľko týždňov. Výsledok hodnotíme až po úplnom zahojení.</p>

            <hr />

            <h2>Laser alebo remover?</h2>
            <ul>
                <li>Laser je rýchlejší a veľmi účinný pri väčšine pigmentov.</li>
                <li>V niektorých prípadoch pigment na laser nereaguje alebo môže dôjsť k farebnej zmene.</li>
                <li>Vtedy volíme remover alebo kombinovaný protokol.</li>
            </ul>
            <p>Metódy je možné bezpečne striedať podľa typu pigmentu, hĺbky uloženia a reakcie pokožky.</p>

            <hr />

            <h2>Dôležité</h2>
            <p>V súčasnosti neexistuje bezpečný spôsob odstránenia permanentného make-upu na jednu procedúru. Rozumiem túžbe „zmazať to hneď“. Ak však chcete o rok či dva vidieť svoju tvár sviežu, čistú a bez jaziev, je potrebné rešpektovať biologický proces hojenia.</p>
            <p>Každá pokožka reaguje individuálne a proces vyžaduje trpezlivosť. Odstraňovanie je práca s časom. Nie boj proti pokožke.</p>
        `,
        date: "12. februára 2026"
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
        <main className="min-h-screen">
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

                <div className="max-w-5xl">
                    {/* Main Content */}
                    <article className="py-2 md:py-4 overflow-hidden border-b border-[#1D0E22]/10 mb-16">
                        <div
                            className="blog-content"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </article>

                    {/* Recommendations at bottom */}
                    <div className="mt-16 bg-[#1D0E22] rounded-3xl p-8 text-[#EEE3CE] shadow-2xl">
                        <h3 className="font-marcellus text-2xl mb-8 border-b border-white/10 pb-4 uppercase tracking-wider text-center">
                            Odporúčané články
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {recommendedPosts.map((recPost) => (
                                <Link
                                    key={recPost.id}
                                    href={`/blog/${recPost.slug}`}
                                    className="group/item flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 transition-colors"
                                >
                                    <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 border border-white/20">
                                        <Image
                                            src={recPost.image}
                                            alt={recPost.title}
                                            fill
                                            className="object-cover group-hover/item:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="font-marcellus text-lg text-[#EEE3CE] group-hover/item:text-gold transition-colors duration-300 leading-snug">
                                            {recPost.title}
                                        </h4>
                                        <p className="font-montserrat text-xs text-gold/60 mt-2 uppercase tracking-widest">
                                            {recPost.date}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
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
