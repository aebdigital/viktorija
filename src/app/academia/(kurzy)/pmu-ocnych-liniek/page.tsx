import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Master Class: PMU Očných Liniek | Academia | Salón Viktória",
    description: "Špecializačný kurz zameraný na moderné techniky očných liniek, precíznu prácu na viečkach a tieňované linky.",
    alternates: { canonical: "/academia/pmu-ocnych-liniek" },
};

const PHOTOS = ["/academia/kurz3/3.png", "/academia/kurz3/vik4.jpg", "/academia/kurz3/vik1.jpg"];

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
    { num: "1", title: "ONLINE ŠTART", date: "08:00 – 09:00", items: ["Úvodné online stretnutie, nastavenie systému práce"] },
    { num: "2", title: "ONLINE PRÍPRAVA", date: "4 hodiny", items: ["Anatómia očí", "Technické vybavenie", "Koloristika", "Cvičenie na papieri a latexe"] },
    { num: "3", title: "1. DEŇ – PREZENČNE", date: "09:00 – 18:00", items: ["Analýza domácich úloh", "Nastavenie ruky", "Odpracovanie techník na latexe", "Demo ukážka od Viktorije"] },
    { num: "4", title: "2. DEŇ – PRAX", date: "09:00 – 18:00", items: ["Prax na modelkách", "Odpracovanie dvoch techník"] },
    { num: "5", title: "ONLINE KONTROLA", date: "08:00 – 09:00", items: ["Analýza domácich prác"] },
    { num: "6", title: "KOREKCIA O MESIAC", date: "09:00 – 18:00", items: ["Analýza vyhojených prác", "Pochopenie procesu hojenia", "Dovedenie práce k profesionálnemu výsledku"] },
];

import CourseBookingSection from "@/app/academia/_components/CourseBookingSection";
import AnimatedSpace from "@/app/academia/_components/AnimatedSpace";
import ContactCTA from "@/app/academia/_components/ContactCTA";

export default function Kurz3Page() {
    return (
        <AnimatedSpace className="space-y-16">
            <h1 className="sr-only">Master Class: PMU Očných Liniek</h1>

            {/* Section 1: Intro & Techniques */}
            <PhotoSection photo={PHOTOS[0]} flip={false}>
                <div className="space-y-4 font-montserrat font-light text-[#1D0E22] leading-tight text-lg [&_p]:my-0">
                    <p className="font-montserrat text-lg font-light text-[#1D0E22] leading-snug mb-2 font-medium">
                        MASTER CLASS — Permanentný make-up očných liniek
                    </p>
                    <p>
                        Očné linky patria medzi najprecíznejšie techniky permanentného make-upu. Práca na viečkach vyžaduje jemnosť, technickú kontrolu a správne nastavenie ruky.
                    </p>
                    <p>
                        Ja osobne si myslím, že linky medzi riasy pristanú takmer každému oku. Niektorým klientkam pristane len veľmi jemné zahustenie medzi riasami, iným mäkký chvostík alebo linka vedená jemne nad líniou rias.
                    </p>
                    <p>
                        Ich najväčšou výhodou je, že opticky vytvárajú efekt hustejších rias a zvýrazňujú pohľad bez toho, aby pôsobili ťažko.
                    </p>
                    <p>
                        Kórejské očné linky patria medzi moderné svetové trendy. Sú jemné, elegantné, vzdušné a klientky ich veľmi žiadajú. Vďaka tejto technike obohatíte svoju ponuku o aktuálnu estetickú novinku zo sveta moderného permanentného make-upu.
                    </p>
                    <p>
                        Tieňované očné linky patria technicky medzi najnáročnejšie techniky tetovania viečok. Vyžadujú trpezlivosť, jemnosť, technické znalosti a pochopenie práce s tieňom, hustotou a gradáciou pigmentu.
                    </p>
                </div>
            </PhotoSection>

            {/* Section 2: What we will cover & Who it is for */}
            <PhotoSection photo={PHOTOS[1]} flip={true}>
                <div className="space-y-4 font-montserrat font-light text-[#1D0E22] leading-tight text-lg [&_p]:my-0">
                    <p className="font-medium text-base uppercase tracking-wider">Počas kurzu sa budeme venovať:</p>
                    <ul className="space-y-1.5 text-sm text-[#1D0E22]/80">
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>správnemu nastaveniu ruky pre jemnú prácu na viečkach</span></li>
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>technike natiahnutia pokožky</span></li>
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>anatómii očí a viečok</span></li>
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>korekcii formy oka</span></li>
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>vyrovnávaniu asymetrie</span></li>
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>vytváraniu harmonického mandľového tvaru oka</span></li>
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>výberu vhodných ihiel a nastaveniu strojčeka</span></li>
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>bezpečnej a šetrnej práci na citlivej pokožke viečok</span></li>
                    </ul>

                    <p className="pt-4">
                        Kurz je určený pre artistov, ktorí chcú získať väčšiu istotu pri práci na očiach a naučiť sa vytvárať moderné, jemné a estetické očné linky.
                    </p>

                    <div className="pt-4 border-t border-[#1D0E22]/10">
                        <p className="text-sm font-medium text-[#1D0E22] italic">
                            ⚠️ Prosím, príďte s krátkymi prírodnými nechtami.
                        </p>
                    </div>
                </div>
            </PhotoSection>

            {/* Pricing Section */}
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

            <CourseBookingSection courseName="Master Class: PMU Očných Liniek" />
            <ContactCTA />
        </AnimatedSpace>
    );
}
