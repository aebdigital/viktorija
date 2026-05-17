import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Tri Techniky Obočia | Academia | Salón Viktória",
    description: "Komplexný kurz zameraný na hybridné, minerálne a hyperrealistické obočie pre začiatočníkov aj pokročilých.",
};

// TODO: replace placeholder PHOTOS[0] with original /permanent-obocie/obocie.webp once asset is added
const PHOTOS = ["/academia/kurz4/vik2.jpg", "/academia/kurz4/vik2.jpg", "/academia/kurz4/vik3.jpg"];

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
    { num: "1", title: "ONLINE ŠTART", date: "19.10.", items: ["4 online stretnutia – teória, systém práce, príprava"] },
    { num: "2", title: "ACADEMIA – NASTAVENIE", date: "22.10. | 09:00 – 18:00", items: ["Nastavenie ruky", "Technika práce", "Napínanie pokožky"] },
    { num: "3", title: "ACADEMIA – PRAX", date: "1. – 30.10. | 09:00 – 18:00", items: ["Demonštrácie", "Práca na modelkách"] },
    { num: "4", title: "KOREKCIE", date: "2. – 27.11. | 09:00 – 18:00", items: ["Práca na vyhojenom obočí", "Stabilizácia výsledkov"] },
];

import CourseBookingSection from "@/app/academia/_components/CourseBookingSection";

export default function Kurz4Page() {
    return (
        <div className="space-y-16">
            <div className="space-y-4">
                <p className="font-montserrat text-xs uppercase tracking-[0.3em] text-[#1D0E22]/50">Úroveň: Začiatočník aj pokročilý</p>
                <h1 className="font-marcellus text-4xl md:text-5xl uppercase tracking-widest text-[#1D0E22]">Tri Techniky Obočia</h1>
                <p className="font-montserrat text-lg font-light text-[#1D0E22] leading-snug max-w-2xl">
                    Staňte sa komplexným špecialistom na obočie. Naučte sa vybrať správnu techniku a pigment podľa konkrétnej klientky.
                </p>
            </div>

            <PhotoSection photo={PHOTOS[0]} flip={false}>
                <div className="space-y-6">
                    <div>
                        <h2 className="font-marcellus text-xl md:text-2xl uppercase tracking-widest text-[#1D0E22]">Čo sa naučíte</h2>
                    </div>
                    <ul className="space-y-4 font-montserrat text-lg font-light text-[#1D0E22] leading-snug">
                        {[
                            "obočie hybridnými pigmentmi",
                            "obočie minerálnymi pigmentmi",
                            "hyperrealistické obočie (hair stroke)"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3"><span className="text-[#1D0E22]/30 mt-0.5 shrink-0">✦</span><span>{item}</span></li>
                        ))}
                    </ul>
                    <div className="pt-4 space-y-1 font-montserrat text-sm text-[#1D0E22]/70">
                        <p><span className="font-medium text-[#1D0E22]">Začiatok:</span> 19. 10. 2026</p>
                        <p><span className="font-medium text-[#1D0E22]">Záverečná korekcia:</span> 27. 11. 2026</p>
                    </div>
                </div>
            </PhotoSection>

            <PhotoSection photo={PHOTOS[1]} flip={true}>
                <div className="space-y-6">
                    <div>
                        <h2 className="font-marcellus text-xl md:text-2xl uppercase tracking-widest text-[#1D0E22]">Filozofia kurzu</h2>
                    </div>
                    <p className="font-montserrat text-lg font-light text-[#1D0E22] leading-snug">
                        Nie je správne ovládať jednu techniku a aplikovať ju na všetky klientky. Každá technika má svoje miesto a každá klientka potrebuje individuálne riešenie. Tento kurz vás odlíši od konkurencie.
                    </p>
                    <ul className="space-y-2 font-montserrat text-lg font-light text-[#1D0E22] leading-snug">
                        {["analyzovať tvár", "prispôsobiť tvar obočia", "zvoliť správnu techniku podľa typu pokožky"].map((item, i) => (
                            <li key={i} className="flex gap-3"><span className="text-[#1D0E22]/30">—</span><span>{item}</span></li>
                        ))}
                    </ul>
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

            <CourseBookingSection courseName="Tri Techniky Obočia" />
        </div>
    );
}
