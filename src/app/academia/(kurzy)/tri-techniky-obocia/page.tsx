import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Tri Techniky Obočia | Academia | Salón Viktória",
    description: "Komplexný kurz zameraný na hybridné, minerálne a hyperrealistické obočie pre začiatočníkov aj pokročilých.",
    alternates: { canonical: "/academia/tri-techniky-obocia" },
};

const PHOTOS = ["/academia/kurz4/2.png", "/academia/kurz4/3d72931a-081c-427a-8a31-07c8d8fea3ff.JPG", "/academia/kurz4/vik3.jpg"];

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
    { num: "1", title: "ONLINE ŠTART", date: "21.9.", items: ["4 online stretnutia – teória, systém práce, príprava"] },
    { num: "2", title: "ACADEMIA – NASTAVENIE", date: "26.9. | 09:00 – 18:00", items: ["Nastavenie ruky", "Technika práce na latexe", "Demo ukážka"] },
    { num: "3", title: "ACADEMIA – PRAX", date: "1. – 2.10. | 09:00 – 18:00", items: ["Prax na modelkách - púdrové obočie", "Hyperrealistické obočie na latexe"] },
    { num: "4", title: "Prax na modelkách", date: "10.10. | 09:00 – 18:00", items: ["Hyperrealistické obočie"] },
    { num: "5", title: "KOREKCIE všetkých techník", date: "10. – 11.11. | 09:00 – 18:00", items: [] },
];

import CourseBookingSection from "@/app/academia/_components/CourseBookingSection";
import AnimatedSpace from "@/app/academia/_components/AnimatedSpace";
import ContactCTA from "@/app/academia/_components/ContactCTA";

export default function Kurz4Page() {
    return (
        <AnimatedSpace className="space-y-16">
            <PhotoSection photo={PHOTOS[0]} flip={false}>
                <div className="space-y-4 font-montserrat font-light text-[#1D0E22] leading-tight text-lg [&_p]:my-0">
                    <h2 className="font-marcellus text-3xl uppercase tracking-widest text-[#1D0E22] mb-1">
                        TRI TECHNIKY OBOČIA
                    </h2>
                    <p className="font-marcellus text-xs uppercase tracking-wider text-[#1D0E22]/60 mb-6">
                        Kurz permanentného make-upu obočia
                    </p>
                    
                    <p className="font-medium text-[#1D0E22] mb-4">
                        Na kurze sa budeme učiť tri rozdielne techniky obočia — od najjemnejších a technicky jednoduchších až po pokročilé hairstroke techniky.
                    </p>
                    
                    <p className="pt-2">
                        <strong>Začíname púdrovým obočím s hybridnými pigmentami.</strong><br />
                        Pigment sa do pokožky ukladá ľahšie a technika je pre študentov dobre čitateľná, preto je vhodná na pochopenie základov práce ruky, saturácie a pohybu.
                    </p>
                    
                    <p className="pt-2">
                        <strong>Následne pracujeme s minerálnymi pigmentami.</strong><br />
                        Tie vyžadujú viac trpezlivosti, citu a technickej kontroly. Do pokožky vstupujú jemnejšie a po vyhojení zanechávajú mäkší zostatok, čo je v začiatkoch práce bezpečnejšie aj pre klientku.
                        Študent sa tak učí pracovať precízne a bez zbytočného preťažovania pokožky.
                    </p>
                    
                    <p className="pt-2">
                        <strong>Hairstroke / hyperrealistické obočie</strong> je najnáročnejšia technika kurzu.<br />
                        Vo svete permanentného make-upu existuje mnoho spôsobov ukladania chĺpkov a každý artist má svoj vlastný systém práce.
                    </p>
                    
                    <p className="pt-2">
                        Moja technika je vytvorená tak, aby bola „klientská“ — po vyhojení pôsobí obočie prirodzene, vzdušne, ale zároveň dostatočne husto.
                        A práve prirodzenú hustotu klientky milujú.
                    </p>
                    
                    <p className="pt-2">
                        <strong>Veľký dôraz kladiem na formu obočia.</strong><br />
                        Učíme sa vyrovnávať asymetriu, opticky otvárať pohľad, vytvárať jemný liftingový efekt a pracovať v harmónii s tvárou klientky.
                    </p>
                    
                    <p className="pt-2">
                        <strong>Najdôležitejšie je správne nastavenie ruky.</strong><br />
                        Každá technika pracuje s iným typom šrafovania, preto sa pripravte na to, že budeme meniť pohyb ruky, rytmus práce aj technické myslenie.
                    </p>
                    
                    <p className="pt-2">
                        Kurz je vhodný aj pre začiatočníkov — pôjdeme od úplných základov permanentného make-upu.
                        Zároveň sa pripravte na intenzívnu prácu. Budeme veľa trénovať, tetovať každý deň, analyzovať chyby a dostávať spätnú väzbu k domácim úlohám aj každodennému progresu.
                    </p>
                    
                    <p className="pt-4 italic text-[#1D0E22]/80">
                        Prosím, príďte s krátkymi nechtami, ideálne bez umelých nechtov.
                    </p>
                    
                    <div className="pt-6 border-t border-[#1D0E22]/10 mt-6 flex flex-col items-end">
                        <span className="font-montserrat text-xs uppercase tracking-widest text-[#1D0E22]/60">Teším sa na Vás,</span>
                        <span className="!font-alex text-4xl text-[#1D0E22] mt-1 block">
                            Viktorija Kendra
                        </span>
                    </div>
                </div>
            </PhotoSection>

            <PhotoSection photo={PHOTOS[1]} flip={true}>
                <div className="space-y-4 font-montserrat font-light text-[#1D0E22] leading-tight text-lg [&_p]:my-0">
                    <h2 className="font-marcellus text-2xl uppercase tracking-widest text-[#1D0E22] mb-6">
                        Komplexný špecialista na obočie
                    </h2>
                    
                    <p className="mb-4">
                        Na kurze nadobudnete zručnosti v troch hlavných technikách permanentného make-upu obočia a naučíte sa vyberať správnu techniku podľa typu klientky, pokožky a požadovaného výsledku.
                    </p>
                    
                    <p className="pt-2">
                        <strong>Hyperrealistické obočie / hairstroke technika</strong> je vhodná pre klientky, ktoré majú málo vlastných chĺpkov alebo preferujú maximálne prirodzený vzhľad imitujúci reálne obočie.
                    </p>
                    
                    <p className="pt-2">
                        <strong>Púdrové obočie s hybridnými pigmentami</strong> je ideálne pre klientky, ktoré chcú opticky otvoriť pohľad, dosiahnuť jemný liftingový efekt a upravenejší vizážistický výsledok.
                    </p>
                    
                    <p className="pt-2">
                        <strong>Minerálne pigmenty</strong> využívame pri veľmi jemných, prirodzených a vzdušných výsledkoch, ktoré obľubujú najmä mladšie klientky alebo ženy preferujúce nenápadný permanentný make-up.
                    </p>
                </div>
            </PhotoSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                    { src: "/academia/kurz4/5bddc510-09c7-4ed2-94cc-4f41247bf806.JPG", label: "Hyperrealistické / Hairstroke" },
                    { src: "/academia/kurz4/e1d00a2b-d239-40bf-b217-3d283796a228.JPG", label: "Hybridné pigmenty" },
                    { src: "/academia/kurz4/06e30ad8-671a-4f20-bb8e-73e2e3de7a43.JPG", label: "Minerálne" },
                ].map((item, i) => (
                    <div key={i} className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/10 shadow-sm">
                        <Image src={item.src} alt={item.label} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <p className="absolute bottom-4 left-4 font-marcellus text-sm md:text-base uppercase tracking-widest text-[#EEE3CE]">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* Program kurzu */}
            <div className="space-y-8 max-w-xl mx-auto flex flex-col items-center py-8">
                <h2 className="font-marcellus text-xl md:text-2xl uppercase tracking-widest text-[#1D0E22] text-center">Program kurzu</h2>
                <div className="space-y-6 w-full px-4 sm:px-8">
                    {SCHEDULE.map((block) => (
                        <div key={block.num} className="flex gap-4 items-start">
                            <span className="font-marcellus text-4xl text-[#1D0E22]/20 leading-none shrink-0">{block.num}</span>
                            <div className="space-y-1">
                                <div>
                                    <p className="font-marcellus text-sm uppercase tracking-widest text-[#1D0E22] leading-tight font-semibold">{block.title}</p>
                                    {block.date && <p className="font-montserrat text-xs text-[#1D0E22]/50 leading-tight mt-0.5">{block.date}</p>}
                                </div>
                                <ul className="font-montserrat text-sm font-light text-[#1D0E22]/70 leading-tight pt-1">
                                    {block.items.map((item, i) => (
                                        <li key={i} className="flex gap-1.5"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:max-w-[66.666%] md:mx-auto">
                <div className="border border-[#1D0E22]/30 bg-[#1D0E22]/5 rounded-2xl p-8 text-center space-y-3 flex flex-col justify-center">
                    <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#1D0E22]/50">Cena kurzu</p>
                    <p className="font-marcellus text-5xl text-[#1D0E22]">2 280 €</p>
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

            <CourseBookingSection courseName="Tri Techniky Obočia" />
        <ContactCTA />
        </AnimatedSpace>
    );
}
