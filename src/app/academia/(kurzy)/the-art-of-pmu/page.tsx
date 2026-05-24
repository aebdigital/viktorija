import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "The Art of PMU | Academia | Salón Viktória",
    description: "THE ART OF PMU – profesionálny kurz permanentného make-upu pre začiatočníčky. Naučte sa púdrové obočie, očné linky a lip blush.",
    alternates: { canonical: "/academia/the-art-of-pmu" },
};

const PHOTOS = ["/academia/kurz1/main.PNG", "/academia/kurz1/vik2.jpg", "/academia/kurz1/vik3.jpg"];
const SYSTEM_VIDEO = "https://pub-60b685024baf4def829d5151d4dc320a.r2.dev/kurz1.mp4";

function PhotoSection({ photo, flip = false, children }: { photo: string; flip?: boolean; children: React.ReactNode }) {
    const isVideo = /\.(mp4|mov)$/i.test(photo);
    const isPortraitPNG = /\.png$/i.test(photo);
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch ${flip ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""}`}>
            <div className={`relative overflow-hidden rounded-2xl ${isPortraitPNG ? "aspect-[4/5]" : "min-h-[400px] md:min-h-[520px]"}`}>
                {isVideo ? (
                    <video src={photo} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                    <Image src={photo} alt="" fill className="object-cover" />
                )}
            </div>
            <div className="flex flex-col justify-center px-0 md:px-12 py-10">
                {children}
            </div>
        </div>
    );
}

const SCHEDULE = [
    { num: "1", title: "ONLINE ŠTART", date: "2. 10. 2026 | 08:00 – 10:00", items: ["úvodné stretnutie", "nastavenie programu", "organizácia výučby", "Prvý týždeň: teoretické lekcie, kreslenie a šrafovanie (face charty), kontrola domácich úloh"] },
    { num: "2", title: "ACADEMIA – ZÁKLADY (PRÁCA SO STROJČEKOM)", date: "8. – 9. 10. 2026 | 09:00 – 18:00", items: ["zoznámenie so strojčekom", "nastavenie ruky", "šrafovanie na latexe", "základy techniky obočia"] },
    { num: "3", title: "ACADEMIA – INTENZÍVNA PRAX", date: "14. – 16. 10. 2026 | 09:00 – 18:00", items: ["púdrové obočie", "očné linky medzi riasy", "lip blush", "demo ukážky", "práca na modelkách"] },
    { num: "4", title: "STÁŽ (dobrovoľná | individuálne termíny)", date: null, items: ["možnosť individuálnej stáže", "online alebo priamo v salóne", "podľa dohody"] },
    { num: "5", title: "BONUS MODUL – Laser & remover", date: "2. 11. 2026", items: ["master class", "praktické ukážky"], bonus: true },
    { num: "6", title: "ACADEMIA – KOREKCIA", date: "12. – 13. 11. 2026 | 08:00 – 19:00", items: ["práca na zahojenom výsledku", "pochopenie správania pigmentu v pokožke", "finálne doladenie techniky"] },
];

const DIRECTIONS = [
    "chcem byť artistkou a skrášľovať ženy svojou prácou",
    "chcem súťažiť a vyhrať svetové súťaže, napríklad WULOP",
    "chcem učiť a vytvoriť vlastnú akadémiu",
    "chcem budovať online školu permanentného make-upu",
    "chcem byť autorkou vlastných techník a posúvať odbor ďalej",
    "chcem vyvíjať vlastné strojčeky a kartridže, pretože mám technické nadanie",
    "chcem tvoriť vlastné odtiene pigmentov, pretože mám vzťah k farbe a chémii. Pantone je moja obľúbená kniha",
    "chcem byť speakerom a stáť na pódiách odborných konferencií, pretože viem hovoriť k veci a pracovať s pozornosťou",
    "chcem sa špecializovať na laserové odstraňovanie pigmentu a pracovať s najmodernejšími technológiami. Kúpim si laser PicoSure",
    "chcem viesť sociálne siete a budovať vlastnú značku",
];

import CourseBookingSection from "@/app/academia/_components/CourseBookingSection";
import AnimatedSpace from "@/app/academia/_components/AnimatedSpace";
import ContactCTA from "@/app/academia/_components/ContactCTA";

export default function ArtOfPmuPage() {
    return (
        <AnimatedSpace className="space-y-16">

            {/* Section 1: Estetika a biznis + photo */}
            <PhotoSection photo={PHOTOS[0]} flip={false}>
                <div className="space-y-4 font-montserrat font-light text-[#1D0E22] leading-tight text-lg [&_p]:my-0">
                    <h2 className="font-marcellus text-xl md:text-2xl uppercase tracking-widest text-[#1D0E22]">Estetika a biznis</h2>
                    <p>
                        Moderný permanentný make-up patrí medzi vyhľadávané procedúry aktívnych žien. Šetrí čas a pomáha ženám pôsobiť harmonicky, prirodzene a upravene každý deň.
                    </p>
                    <p>
                        Počas kurzu sa naučíte tri základné techniky permanentného make-upu — obočie, očné linky medzi riasy a pery. Budeme pracovať modernými technikami, ktoré sú ľahké, vzdušné a nezaťažujú tvár pigmentom.
                    </p>
                    <p>
                        Dôležitou súčasťou výučby je správne technické nastavenie ruky pri tetovaní. Práve technicky čistá práca je základom krásnych výsledkov, dobrého hojenia a spokojných klientiek.
                    </p>
                </div>
            </PhotoSection>

            {/* Full-width training video */}
            <div className="relative w-full aspect-[20/9] overflow-hidden rounded-2xl">
                <video
                    src={SYSTEM_VIDEO}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Section 2: Schedule + photo */}
            <PhotoSection photo={PHOTOS[1]} flip={true}>
                <div className="space-y-6">
                    <div>
                        <h2 className="font-marcellus text-xl md:text-2xl uppercase tracking-widest text-[#1D0E22]">Štruktúra kurzu</h2>
                    </div>
                    <div className="space-y-2">
                        {SCHEDULE.map((block) => (
                            <div key={block.num}>
                                <div className="flex gap-3">
                                    <span className="font-marcellus text-3xl text-[#1D0E22]/15 leading-none shrink-0">{block.num}</span>
                                    <div className="space-y-0.5">
                                        <div>
                                            <p className="font-marcellus text-sm uppercase tracking-widest text-[#1D0E22] leading-tight">{block.title}</p>
                                            {block.date && <p className="font-montserrat text-xs text-[#1D0E22]/45 leading-tight">{block.date}</p>}
                                            {block.bonus && <span className="inline-block mt-0.5 font-montserrat text-[10px] uppercase tracking-widest text-[#1D0E22] border border-[#1D0E22]/30 rounded-full px-2 py-0.5">Bonus</span>}
                                        </div>
                                        <ul className="font-montserrat text-sm font-light text-[#1D0E22]/70 leading-tight">
                                            {block.items.map((item, i) => (
                                                <li key={i} className="flex gap-1.5"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>{item}</span></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </PhotoSection>

            {/* Section 3a: Training system */}
            <div className="space-y-6 text-center">
                <h2 className="font-marcellus text-2xl md:text-3xl uppercase tracking-widest text-[#1D0E22]">Systém tréningu</h2>
                <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-2 md:gap-x-3">
                    {["papier", "latex", "umelá koža", "transparentná koža", "umelá tvár", "modelka", "stáž", "korekcia"].map((step, i, arr) => (
                        <div key={step} className="flex items-center gap-2 md:gap-3 shrink-0">
                            <span className="font-montserrat text-sm md:text-base bg-[#936a82] text-[#EEE3CE] rounded-full px-4 md:px-5 py-2 md:py-2.5 whitespace-nowrap">{step}</span>
                            {i < arr.length - 1 && <span className="text-[#1D0E22]/30 text-base md:text-lg">→</span>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 3b: Odborné semináre */}
            <div className="max-w-3xl mx-auto px-2 md:px-0 space-y-3">
                <div className="flex items-center gap-3">
                    <h3 className="font-marcellus text-sm uppercase tracking-[0.2em] text-[#1D0E22]">Odborné semináre</h3>
                    <span className="font-montserrat text-[10px] uppercase tracking-widest text-[#1D0E22] border border-[#1D0E22]/30 rounded-full px-2 py-0.5">Bonus</span>
                </div>
                <ul className="space-y-1.5 font-montserrat text-sm font-light text-[#1D0E22]/80">
                    {["právna zodpovednosť v PMU (rozhovor s právnikom)", "prvá pomoc v praxi (rozhovor s lekárom)", "psychológia práce s klientom (hranice a komunikácia)", "práca so strachom a budovanie istoty"].map((item, i) => (
                        <li key={i} className="flex gap-3"><span className="text-[#1D0E22]/30">—</span><span>{item}</span></li>
                    ))}
                </ul>
            </div>

            {/* Section 4: Profession + What you gain (text only) */}
            <div className="space-y-8 max-w-3xl mx-auto px-2 md:px-0">
                <div className="space-y-4">
                    <div>
                        <h2 className="font-marcellus text-xl md:text-2xl uppercase tracking-widest text-[#1D0E22]">Profesia a prax</h2>
                    </div>
                    <p className="font-montserrat text-lg font-light text-[#1D0E22] leading-snug">Profesia PMU artistky je kreatívna, sociálna a zároveň líderská. Ponúka dlhodobý rast a možnosť budovať vlastnú klientelu.</p>
                    <ul className="space-y-1.5 font-montserrat text-lg font-light text-[#1D0E22] leading-snug">
                        {["foto a video", "sociálne siete", "marketing a cenotvorba", "spolupráce"].map((item, i) => (
                            <li key={i} className="flex gap-3"><span className="text-[#1D0E22]/30">—</span><span>{item}</span></li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-3">
                    <h3 className="font-marcellus text-sm uppercase tracking-[0.2em] text-[#1D0E22]">Čo získate</h3>
                    <ul className="space-y-2 font-montserrat text-lg font-light text-[#1D0E22] leading-snug">
                        {["zvládnutie 3 základných techník PMU", "systém práce s pigmentom a pokožkou", "schopnosť navrhovať prirodzené a harmonické výsledky", "prax na modelkách pod vedením", "istotu pracovať samostatne"].map((item, i) => (
                            <li key={i} className="flex gap-3"><span className="text-[#1D0E22]/30 shrink-0">✦</span><span>{item}</span></li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Section 5: Starter kit + Bonus */}
            <PhotoSection photo="/academia/kurz1/balik.JPG" flip={false}>
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <h2 className="font-marcellus text-xl md:text-2xl uppercase tracking-widest text-[#1D0E22]">Štartovací balík</h2>
                            <span className="font-montserrat text-[10px] uppercase tracking-widest text-[#1D0E22] border border-[#1D0E22]/30 rounded-full px-3 py-0.5 shrink-0">voliteľný</span>
                        </div>
                        <ul className="space-y-2 font-montserrat text-lg font-light text-[#1D0E22] leading-snug">
                            {["strojček Mast", "40 ks kartridží", "5 pigmentov", "2 druhy anestézie", "50 ks kelímkov", "2 ceruzky na predkreslenie"].map((item, i) => (
                                <li key={i} className="flex gap-3"><span className="text-[#1D0E22]/30">—</span><span>{item}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </PhotoSection>

            {/* Section 6: Directions */}
            <PhotoSection photo={PHOTOS[2]} flip={true}>
                <div className="space-y-6">
                    <div>
                        <h2 className="font-marcellus text-xl md:text-2xl uppercase tracking-widest text-[#1D0E22]">Čo vám program otvorí</h2>
                        <p className="font-montserrat text-lg font-light text-[#1D0E22] leading-snug mt-3">
                            Mesiac intenzívnej práce, ktorý vám otvorí nový pohľad na vlastný potenciál, rozvoj talentu a smer, ktorým sa môže uberať vaša budúcnosť v tejto profesii.
                        </p>
                    </div>
                    <ul className="space-y-2">
                        {DIRECTIONS.map((item, i) => (
                            <li key={i} className="flex gap-3 font-montserrat text-lg font-light text-[#1D0E22] leading-snug">
                                <span className="text-[#1D0E22]/25 shrink-0 mt-0.5">→</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="font-montserrat text-xs font-light text-[#1D0E22]/50 italic">
                        A možno vás táto profesia posunie ešte ďalej — smerom, ktorý si dnes ešte ani neviete predstaviť.
                    </p>
                </div>
            </PhotoSection>

            {/* Hours + Pricing */}
            <div className="space-y-8">
                <div className="border border-[#1D0E22]/10 rounded-2xl p-8 space-y-6">
                    <h2 className="font-marcellus text-sm uppercase tracking-[0.2em] text-[#1D0E22]">Rozsah programu</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[{ label: "Prezenčná výučba a prax", value: "102 hod" }, { label: "Online LIVE stretnutia", value: "6 hod" }, { label: "Odborné semináre", value: "4 hod" }, { label: "Nahraté lekcie", value: "5 hod" }].map((row, i) => (
                            <div key={i} className="text-center space-y-1">
                                <p className="font-marcellus text-3xl text-[#1D0E22]">{row.value}</p>
                                <p className="font-montserrat text-[11px] uppercase tracking-wider text-[#1D0E22]/50">{row.label}</p>
                            </div>
                        ))}
                    </div>
                    <div className="pt-4 border-t border-[#1D0E22]/10 text-center">
                        <p className="font-marcellus text-xl text-[#1D0E22]">Spolu: 117 hodín</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="border border-[#1D0E22]/15 rounded-2xl p-8 text-center space-y-3 flex flex-col justify-center">
                        <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#1D0E22]/50">Bez štartovacieho balíka</p>
                        <p className="font-marcellus text-5xl text-[#1D0E22]">2 380 €</p>
                    </div>
                    <div className="border border-[#1D0E22]/30 bg-[#1D0E22]/5 rounded-2xl p-8 text-center space-y-3 flex flex-col justify-center relative">
                        <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#1D0E22]/50">Vrátane štartovacieho balíka</p>
                        <p className="font-marcellus text-5xl text-[#1D0E22]">2 980 €</p>
                        <span className="inline-block font-montserrat text-[10px] uppercase tracking-widest text-[#1D0E22] border border-[#1D0E22]/30 rounded-full px-3 py-0.5">Odporúčané</span>
                    </div>
                    <a
                        href="https://www.tatrabanka.sk/sk/business/uvery-financovanie/online-podnikatelsky-uver/?utm_medium=banner&utm_campaign=opu2026&utm_source=viktorijakendra"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Tatra banka – Online podnikateľský úver"
                        className="relative block overflow-hidden rounded-2xl border border-gold/30 bg-gold/5 h-full min-h-[180px]"
                    >
                        <Image
                            src="/_unused/tb-opu/TB-OPU_1000x450px-ucto_1.jpg"
                            alt="Tatra banka – Online podnikateľský úver"
                            fill
                            className="object-cover"
                        />
                    </a>
                </div>
            </div>

            <CourseBookingSection courseName="The Art of PMU" />
            <ContactCTA />
        </AnimatedSpace>
    );
}
