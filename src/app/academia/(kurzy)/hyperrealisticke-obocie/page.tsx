import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Hyperrealistické Obočie | Academia | Salón Viktória",
    description: "Master Class pre pokročilých zameraný na najnáročnejšiu techniku PMU – hyperrealistické obočie (hair stroke).",
    alternates: { canonical: "/academia/hyperrealisticke-obocie" },
};

const PHOTOS = ["/academia/kurz5/5.png", "/academia/kurz5/1.jpg", "/academia/kurz5/IMG_4090%201.jpg"];

function PhotoSection({
    photo,
    flip = false,
    aspectClass = "",
    imageClass = "object-cover",
    children
}: {
    photo: string;
    flip?: boolean;
    aspectClass?: string;
    imageClass?: string;
    children: React.ReactNode;
}) {
    const isPortraitPNG = /\.png$/i.test(photo);
    const resolvedAspect = aspectClass || (isPortraitPNG ? "aspect-[4/5]" : "min-h-[400px] md:min-h-[520px]");
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 items-start ${flip ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""}`}>
            <div className={`relative overflow-hidden rounded-2xl ${resolvedAspect}`}>
                <Image src={photo} alt="" fill className={imageClass} />
            </div>
            <div className="flex flex-col justify-start px-0 md:px-12 pt-6 md:pt-0 pb-10">
                {children}
            </div>
        </div>
    );
}

const SCHEDULE = [
    { num: "1", title: "ONLINE ŠTART", date: "20.10.", items: ["4 online stretnutia po 60 min – teória, systém práce"] },
    { num: "2", title: "ACADEMIA – TRÉNING + PRAX", date: "4. – 6.11. | 09:00 – 18:00", items: ["Intenzívny tréning techniky", "Práca na modelkách"] },
    { num: "3", title: "ACADEMIA – MODELKY + KOREKCIE", date: "4.12. | 09:00 – 18:00", items: ["Práca na modelkách", "Korekcie výsledkov"] },
];

import CourseBookingSection from "@/app/academia/_components/CourseBookingSection";
import AnimatedSpace from "@/app/academia/_components/AnimatedSpace";
import ContactCTA from "@/app/academia/_components/ContactCTA";

export default function Kurz5Page() {
    return (
        <AnimatedSpace className="space-y-16">
            <PhotoSection photo={PHOTOS[0]} flip={false}>
                <div className="space-y-6">
                    <h2 className="font-marcellus text-2xl md:text-3xl uppercase tracking-widest text-[#1D0E22] mb-4">
                        HYPERREALISTICKÉ OBOČIE / HAIRSTROKE
                    </h2>
                    
                    <p className="font-montserrat text-lg font-light text-[#1D0E22] leading-snug">
                        Technika kreslenia chĺpkov a schéma ich ukladania, ktorú učím, je vytvorená predovšetkým pre klientsku prax.
                        Na medzinárodných súťažiach som s touto technikou obsadila 2. až 8. miesto, no pre mňa je najdôležitejšie, že klientky tento typ obočia milujú — pretože pôsobí prirodzene, vzdušne a zároveň husto.
                    </p>
                    
                    <p className="font-montserrat text-lg font-light text-[#1D0E22] leading-snug">
                        Hyperrealistické obočie patrí technicky medzi najnáročnejšie techniky permanentného make-upu.
                        Aj skúsený artist musí pri práci neustále premýšľať nad smerom, rytmom a hustotou chĺpkov, vytvárať priestorový 3D efekt a kontrolovať jemnosť jednotlivých ťahov.
                    </p>
                    
                    <p className="font-montserrat text-lg font-light text-[#1D0E22] leading-snug">
                        Pracujeme s viacerými odtieňmi pigmentov aj s riedidlom, aby sme vedeli regulovať intenzitu chĺpka — pretože prirodzený chĺpok nikdy nemá rovnakú sýtosť po celej dĺžke a ku koncu zostáva jemnejší a priesvitnejší.
                    </p>
                    
                    <p className="font-montserrat text-lg font-light text-[#1D0E22] leading-snug">
                        Tento Master Class je určený pre skúsených artistov.
                        Budeme sa venovať predovšetkým technicky správnemu tetovaniu chĺpkov, práci s rýchlosťou strojčeka, vhodnou konfiguráciou ihiel a kontrole pohybu ruky pri vytváraní realistického efektu.
                    </p>
                </div>
            </PhotoSection>

            <PhotoSection photo={PHOTOS[1]} flip={true} aspectClass="aspect-[2/3] md:aspect-[3/4] max-h-[620px] mx-auto w-full" imageClass="object-cover object-top">
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
                </div>
            </PhotoSection>

            <PhotoSection photo={PHOTOS[2]} flip={false}>
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

            <div className="grid md:grid-cols-2 gap-6 md:max-w-[66.666%] md:mx-auto">
                <div className="border border-[#1D0E22]/30 bg-[#1D0E22]/5 rounded-2xl p-8 text-center space-y-3 flex flex-col justify-center">
                    <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#1D0E22]/50">Cena kurzu</p>
                    <p className="font-marcellus text-5xl text-[#1D0E22]">1 680 €</p>
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
            
            <div className="p-8 bg-[#1D0E22]/5 rounded-2xl text-center italic font-montserrat text-sm text-[#1D0E22]/70">
                "Priemernosť dnes nestačí – klientky si vyberajú kvalitu, presnosť a výsledok. Pridajte sa na kurz a posuňte svoju prácu na vyššiu úroveň."
            </div>

            <CourseBookingSection courseName="Hyperrealistické Obočie" />
        <ContactCTA />
        </AnimatedSpace>
    );
}
