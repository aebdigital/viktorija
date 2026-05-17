import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Master Class: Permanentný Make-up Pier | Academia | Salón Viktória",
    description: "Špecializačný kurz zameraný na moderné techniky pier, ombré a kórejské pery pre pokročilých artistov.",
};

const PHOTOS = ["/academia/kurz2/PHOTO-2026-02-10-14-41-10.jpg", "/academia/kurz2/kozmetika.webp", "/academia/kurz2/vik2.jpg"];

function PhotoSection({ photo, flip = false, children }: { photo: string; flip?: boolean; children: React.ReactNode }) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch ${flip ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""}`}>
            <div className="relative min-h-[400px] md:min-h-[520px] overflow-hidden rounded-2xl">
                <Image src={photo} alt="" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center px-8 md:px-12 py-10">
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
    { num: "5", title: "KOREKCIA", date: "09:00 – 19:00", items: ["Stabilizácia výsledkov a prehĺbenie techniky"] },
];

import CourseBookingSection from "@/app/academia/_components/CourseBookingSection";

export default function Kurz2Page() {
    return (
        <div className="space-y-16">
            {/* Intro */}
            <div className="space-y-4">
                <p className="font-montserrat text-xs uppercase tracking-[0.3em] text-[#1D0E22]/50">Úroveň: Pokročilý</p>
                <h1 className="font-marcellus text-4xl md:text-5xl uppercase tracking-widest text-[#1D0E22]">Master Class: PMU Pier</h1>
                <p className="font-montserrat text-lg font-light text-[#1D0E22] leading-snug max-w-2xl">
                    Špecializačný kurz zameraný na moderné techniky pier, systematizáciu vedomostí a precíznu prácu s tvarom a farbou.
                </p>
            </div>

            {/* Section 1: Techniques */}
            <PhotoSection photo={PHOTOS[0]} flip={false}>
                <div className="space-y-6">
                    <div>
                        <h2 className="font-marcellus text-xl md:text-2xl uppercase tracking-widest text-[#1D0E22]">Čo sa naučíte</h2>
                    </div>
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
                    <div className="space-y-4">
                        {SCHEDULE.map((block) => (
                            <div key={block.num} className="rounded-xl border border-[#1D0E22]/10 p-4">
                                <div className="flex gap-4">
                                    <span className="font-marcellus text-3xl text-[#1D0E22]/15 leading-none shrink-0">{block.num}</span>
                                    <div className="space-y-2">
                                        <div>
                                            <p className="font-marcellus text-xs uppercase tracking-widest text-[#1D0E22]">{block.title}</p>
                                            {block.date && <p className="font-montserrat text-[11px] text-[#1D0E22]/45 mt-0.5">{block.date}</p>}
                                        </div>
                                        <ul className="space-y-1 font-montserrat text-xs font-light text-[#1D0E22]/70">
                                            {block.items.map((item, i) => (
                                                <li key={i} className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>{item}</span></li>
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
            <div className="grid md:grid-cols-2 gap-6">
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
                        src="/academia/tb-opu-banner.jpg"
                        alt="Tatra banka – Online podnikateľský úver"
                        fill
                        className="object-cover"
                    />
                </a>
            </div>
            </div>

            <CourseBookingSection courseName="Master Class: PMU Pier" />
        </div>
    );
}
