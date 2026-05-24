import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Master Class: Permanentný Make-up Pier | Academia | Salón Viktória",
    description: "Špecializačný kurz zameraný na moderné techniky pier, ombré a kórejské pery pre pokročilých artistov.",
    alternates: { canonical: "/academia/pmu-pier" },
};

const PHOTOS = ["/academia/kurz2/4.png", "/academia/kurz2/kozmetika.webp", "/academia/kurz2/vik2.jpg"];

function PhotoSection({ photo, flip = false, children }: { photo: string; flip?: boolean; children: React.ReactNode }) {
    const isPortraitPNG = /\.png$/i.test(photo);
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 items-start ${flip ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""}`}>
            <div className={`relative overflow-hidden rounded-2xl ${isPortraitPNG ? "aspect-[4/5]" : "min-h-[400px] md:min-h-[520px]"}`}>
                <Image src={photo} alt="" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-start px-0 md:px-12 pt-6 md:pt-0 pb-10">
                {children}
            </div>
        </div>
    );
}

const SCHEDULE = [
    { num: "1", title: "ONLINE ŠTART", date: "09:00 – 10:00", items: ["Úvod, nastavenie systému práce a očakávaní"] },
    { num: "2", title: "1. DEŇ – TEÓRIA + TRÉNING", date: "09:00 – 19:00", items: ["komplexný teoretický základ", "analýza typov pokožky", "tréning na latexe", "demo ukážka od Viktorije", "prezentácia techník (ombré, kórejské pery, čistá forma)"] },
    { num: "3", title: "2. DEŇ – PRAX NA MODELKÁCH", date: "09:00 – 18:00", items: ["každá účastníčka pracuje na modelkách", "výber 2 techník", "individuálne vedenie", "malá skupina pre maximálnu pozornosť"] },
    { num: "4", title: "ONLINE", date: "08:00 – 9:00", items: ["Rozbor domácich úloh (latex / klientky)"] },
    { num: "5", title: "KOREKCIA", date: "09:00 – 19:00", items: ["Stabilizácia výsledkov and prehĺbenie techniky"] },
];

import CourseBookingSection from "@/app/academia/_components/CourseBookingSection";
import AnimatedSpace from "@/app/academia/_components/AnimatedSpace";
import ContactCTA from "@/app/academia/_components/ContactCTA";

export default function Kurz2Page() {
    return (
        <AnimatedSpace className="space-y-16">
            <h1 className="sr-only">Master Class: PMU Pier</h1>

            {/* Section 1: Techniques */}
            <PhotoSection photo={PHOTOS[0]} flip={false}>
                <div className="space-y-6">
                    <p className="font-montserrat text-lg font-light text-[#1D0E22] leading-snug">
                        Špecializačný kurz zameraný na moderné techniky pier, systematizáciu vedomostí a precíznu prácu s tvarom a farbou.
                    </p>
                    
                    <h2 className="font-marcellus text-xl md:text-2xl uppercase tracking-widest text-[#1D0E22] pt-4">
                        Čo sa naučíte
                    </h2>
                    <ul className="space-y-4 font-montserrat text-lg font-light text-[#1D0E22] leading-snug">
                        {[
                            "technika ombré s minerálnymi pigmentmi",
                            "kórejské pery s hybridnými pigmentmi",
                            "vytvorenie čistej formy a rovnomerného vyfarbenia bez efektu rozmazaného rúžu"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3"><span className="text-[#1D0E22]/30 mt-0.5 shrink-0">✦</span><span>{item}</span></li>
                        ))}
                    </ul>
                    <div className="pt-4 space-y-1 font-montserrat text-sm text-[#1D0E22]/70">
                        <p><span className="font-medium text-[#1D0E22]">Začiatok:</span> 14. 9. 2026</p>
                        <p><span className="font-medium text-[#1D0E22]">Záverečná korekcia:</span> 23. 10. 2026</p>
                    </div>
                </div>
            </PhotoSection>

            {/* Section 2: Schedule */}
            <PhotoSection photo={PHOTOS[1]} flip={true}>
                <div className="space-y-6">
                    <div>
                        <h2 className="font-marcellus text-xl md:text-2xl uppercase tracking-widest text-[#1D0E22]">Program kurzu</h2>
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

            {/* Hours + Pricing */}
            <div className="space-y-8">
                <div className="border border-[#1D0E22]/10 rounded-2xl p-8 space-y-6">
                    <h2 className="font-marcellus text-sm uppercase tracking-[0.2em] text-[#1D0E22]">Rozsah výučby</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div>
                            <p className="font-marcellus text-3xl text-[#1D0E22]">29 hod</p>
                            <p className="font-montserrat text-[11px] uppercase tracking-wider text-[#1D0E22]/50">Prezenčne</p>
                        </div>
                        <div>
                            <p className="font-marcellus text-3xl text-[#1D0E22]">2 hod</p>
                            <p className="font-montserrat text-[11px] uppercase tracking-wider text-[#1D0E22]/50">Online</p>
                        </div>
                        <div>
                            <p className="font-marcellus text-3xl text-[#1D0E22]">2 hod</p>
                            <p className="font-montserrat text-[11px] uppercase tracking-wider text-[#1D0E22]/50">Video lekcie</p>
                        </div>
                    </div>
                </div>
            <div className="grid md:grid-cols-2 gap-6 md:max-w-[66.666%] md:mx-auto">
                <div className="border border-[#1D0E22]/30 bg-[#1D0E22]/5 rounded-2xl p-8 text-center space-y-3 flex flex-col justify-center">
                    <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#1D0E22]/50">Cena kurzu</p>
                    <p className="font-marcellus text-5xl text-[#1D0E22]">1 240 €</p>
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

            <CourseBookingSection courseName="Master Class: PMU Pier" />
        <ContactCTA />
        </AnimatedSpace>
    );
}
