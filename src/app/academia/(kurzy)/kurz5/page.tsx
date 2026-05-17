import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Hyperrealistické Obočie | Academia | Salón Viktória",
    description: "Master Class pre pokročilých zameraný na najnáročnejšiu techniku PMU – hyperrealistické obočie (hair stroke).",
};

// TODO: replace placeholder PHOTOS[0] with original /permanent-obocie/hyperrealisticke.jpg once asset is added
const PHOTOS = ["/academia/kurz5/vik1.jpg", "/academia/kurz5/vik1.jpg", "/academia/kurz5/vik4.jpg"];

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
    { num: "1", title: "ONLINE ŠTART", date: "5.10.", items: ["4 online stretnutia po 60 min – teória, systém práce"] },
    { num: "2", title: "ACADEMIA – TRÉNING + PRAX", date: "1. – 21.10. | 09:00 – 18:00", items: ["Intenzívny tréning techniky", "Práca na modelkách"] },
    { num: "3", title: "ACADEMIA – MODELKY + KOREKCIE", date: "2. – 20.11. | 09:00 – 18:00", items: ["Práca na modelkách", "Korekcie výsledkov"] },
];

import CourseBookingSection from "@/app/academia/_components/CourseBookingSection";

export default function Kurz5Page() {
    return (
        <div className="space-y-16">
            <div className="space-y-4">
                <p className="font-montserrat text-xs uppercase tracking-[0.3em] text-[#1D0E22]/50">Úroveň: Pokročilý</p>
                <h1 className="font-marcellus text-4xl md:text-5xl uppercase tracking-widest text-[#1D0E22]">Hyperrealistické Obočie</h1>
                <p className="font-montserrat text-lg font-light text-[#1D0E22] leading-snug max-w-2xl">
                    Master Class zameraný na jednu z najnáročnejších techník PMU. Výsledok musí pôsobiť tak prirodzene, že nie je čitateľný ako permanentný make-up.
                </p>
            </div>

            <PhotoSection photo={PHOTOS[0]} flip={false}>
                <div className="space-y-6">
                    <div>
                        <h2 className="font-marcellus text-xl md:text-2xl uppercase tracking-widest text-[#1D0E22]">Moja technika</h2>
                    </div>
                    <p className="font-montserrat text-lg font-light text-[#1D0E22] leading-snug">
                        Počas rokov praxe som vytvorila vlastný systém práce, v ktorom chĺpky pôsobia maximálne prirodzene, obočie si zachováva ľahkosť a výsledok ostáva čistý počas celej doby nosenia.
                    </p>
                    <ul className="space-y-2 font-montserrat text-lg font-light text-[#1D0E22] leading-snug">
                        {["maximálna prirodzenosť", "ľahkosť a vzduch", "pigment nie je čitateľný ako tetovanie"].map((item, i) => (
                            <li key={i} className="flex gap-3"><span className="text-[#1D0E22]/30">—</span><span>{item}</span></li>
                        ))}
                    </ul>
                </div>
            </PhotoSection>

            <PhotoSection photo={PHOTOS[1]} flip={true}>
                <div className="space-y-6">
                    <div>
                        <h2 className="font-marcellus text-xl md:text-2xl uppercase tracking-widest text-[#1D0E22]">Čo sa naučíte</h2>
                    </div>
                    <ul className="space-y-3 font-montserrat text-lg font-light text-[#1D0E22] leading-snug">
                        {[
                            "presné vedenie chĺpkov (flow, smer, vrstvenie)",
                            "kontrolu ruky a hĺbky pigmentácie",
                            "výber vhodných pigmentov pre čisté chĺpky bez rozpitia",
                            "tvorbu prirodzenej hustoty bez preplnenia",
                            "dosiahnuť výsledok, ktorý sa hojí jemne a čisto"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3"><span className="text-[#1D0E22]/30 mt-0.5 shrink-0">✦</span><span>{item}</span></li>
                        ))}
                    </ul>
                    <div className="pt-4 space-y-1 font-montserrat text-sm text-[#1D0E22]/70">
                        <p><span className="font-medium text-[#1D0E22]">Začiatok:</span> 5. 10. 2026</p>
                        <p><span className="font-medium text-[#1D0E22]">Záverečná korekcia:</span> 20. 11. 2026</p>
                    </div>
                </div>
            </PhotoSection>

            <PhotoSection photo={PHOTOS[2]} flip={false}>
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
                                        <p className="font-marcellus text-xs uppercase tracking-widest text-[#1D0E22]">{block.title}</p>
                                        {block.date && <p className="font-montserrat text-[11px] text-[#1D0E22]/45 mt-0.5">{block.date}</p>}
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

            <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-[#1D0E22]/30 bg-[#1D0E22]/5 rounded-2xl p-8 text-center space-y-3 flex flex-col justify-center">
                    <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#1D0E22]/50">Cena kurzu</p>
                    <p className="font-marcellus text-5xl text-[#1D0E22]">1 600 €</p>
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
            
            <div className="p-8 bg-[#1D0E22]/5 rounded-2xl text-center italic font-montserrat text-sm text-[#1D0E22]/70">
                "Priemernosť dnes nestačí – klientky si vyberajú kvalitu, presnosť a výsledok. Pridajte sa na kurz a posuňte svoju prácu na vyššiu úroveň."
            </div>

            <CourseBookingSection courseName="Hyperrealistické Obočie" />
        </div>
    );
}
