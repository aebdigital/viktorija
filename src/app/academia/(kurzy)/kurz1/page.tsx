import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "The Art of PMU | Academia | Salón Viktória",
    description: "THE ART OF PMU – profesionálny kurz permanentného make-upu pre začiatočníčky. Naučte sa púdrové obočie, očné linky a lip blush.",
};

const PHOTOS = ["/academia/kurz1/vik1.jpg", "/academia/kurz1/vik2.jpg", "/academia/kurz1/vik3.jpg"];

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

export default function ArtOfPmuPage() {
    return (
        <div className="space-y-16">

            {/* Intro */}
            <div className="space-y-4">
                <p className="font-montserrat text-xs uppercase tracking-[0.3em] text-[#1D0E22]/50">Úroveň: začiatočník</p>
                <h1 className="font-marcellus text-4xl md:text-5xl uppercase tracking-widest text-[#1D0E22]">The Art of PMU</h1>
                <p className="font-montserrat text-lg font-light text-[#1D0E22] leading-snug max-w-2xl">
                    Program permanentného make-upu vedie k pochopeniu systému: od správneho nastavenia ruky a techniky, cez schopnosť vidieť a zvýrazniť prirodzenú krásu, až po estetický, prirodzený výsledok a jeho kontrolu po zahojení.
                </p>
            </div>

            {/* Section 1: For whom + photo */}
            <PhotoSection photo={PHOTOS[0]} flip={false}>
                <div className="space-y-6">
                    <div>
                        <h2 className="font-marcellus text-xl md:text-2xl uppercase tracking-widest text-[#1D0E22]">Pre koho je program určený</h2>
                    </div>
                    <ul className="space-y-4 font-montserrat text-lg font-light text-[#1D0E22] leading-snug">
                        {["pre začiatočníčky bez skúseností", "pre kozmetičky, ktoré chcú rozšíriť svoje služby a klientelu", "pre ženy, ktoré chcú pracovať samostatne a budovať si vlastný rast a tvorivosť", "pre tie, ktoré sú pripravené prevziať zodpovednosť za výsledok svojej práce"].map((item, i) => (
                            <li key={i} className="flex gap-3"><span className="text-[#1D0E22]/30 mt-0.5 shrink-0">—</span><span>{item}</span></li>
                        ))}
                    </ul>
                    <div className="pt-4 space-y-3">
                        <h3 className="font-marcellus text-sm uppercase tracking-[0.2em] text-[#1D0E22]">Techniky, ktoré sa naučíte</h3>
                        <ul className="space-y-2 font-montserrat text-lg font-light text-[#1D0E22] leading-snug">
                            {["púdrové obočie (hybridnými a minerálnymi pigmentmi)", "očné linky medzi riasy", "lip blush – efekt sviežich, prirodzených pier"].map((item, i) => (
                                <li key={i} className="flex gap-3"><span className="text-[#1D0E22]/30 shrink-0">—</span><span>{item}</span></li>
                            ))}
                        </ul>
                    </div>
                    <div className="pt-4 space-y-1 font-montserrat text-sm text-[#1D0E22]/70">
                        <p><span className="font-medium text-[#1D0E22]">Začiatok:</span> 2. 10. 2026</p>
                        <p><span className="font-medium text-[#1D0E22]">Záverečná korekcia:</span> 13. 11. 2026</p>
                    </div>
                </div>
            </PhotoSection>

            {/* Section 2: Schedule + photo */}
            <PhotoSection photo={PHOTOS[1]} flip={true}>
                <div className="space-y-6">
                    <div>
                        <h2 className="font-marcellus text-xl md:text-2xl uppercase tracking-widest text-[#1D0E22]">Štruktúra kurzu</h2>
                    </div>
                    <div className="space-y-4">
                        {SCHEDULE.map((block) => (
                            <div key={block.num} className={`rounded-xl border p-4 ${block.bonus ? "border-[#1D0E22]/25 bg-[#1D0E22]/5" : "border-[#1D0E22]/10"}`}>
                                <div className="flex gap-4">
                                    <span className="font-marcellus text-3xl text-[#1D0E22]/15 leading-none shrink-0">{block.num}</span>
                                    <div className="space-y-2">
                                        <div>
                                            <p className="font-marcellus text-xs uppercase tracking-widest text-[#1D0E22]">{block.title}</p>
                                            {block.date && <p className="font-montserrat text-[11px] text-[#1D0E22]/45 mt-0.5">{block.date}</p>}
                                            {block.bonus && <span className="inline-block mt-1 font-montserrat text-[10px] uppercase tracking-widest text-[#1D0E22] border border-[#1D0E22]/30 rounded-full px-2 py-0.5">Bonus</span>}
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

            {/* Section 3: Training system + photo */}
            <PhotoSection photo={PHOTOS[2]} flip={false}>
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div>
                            <h2 className="font-marcellus text-xl md:text-2xl uppercase tracking-widest text-[#1D0E22]">Systém tréningu</h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {["papier", "latex", "umelá koža", "transparentná koža", "umelá tvár", "modelka"].map((step, i, arr) => (
                                <div key={step} className="flex items-center gap-2">
                                    <span className="font-montserrat text-xs text-[#1D0E22] border border-[#1D0E22]/20 rounded-full px-3 py-1">{step}</span>
                                    {i < arr.length - 1 && <span className="text-[#1D0E22]/25 text-xs">→</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-marcellus text-sm uppercase tracking-[0.2em] text-[#1D0E22]">Povinné lekcie</h3>
                        <ul className="space-y-1.5 font-montserrat text-sm font-light text-[#1D0E22]/80">
                            {["anatómia lebky", "pokožka", "pigmentológia", "strojčeky a kartridže", "hygiena"].map((item, i) => (
                                <li key={i} className="flex gap-3"><span className="text-[#1D0E22]/30">—</span><span>{item}</span></li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-3">
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
                </div>
            </PhotoSection>

            {/* Section 4: Profession + What you gain */}
            <PhotoSection photo={PHOTOS[0]} flip={true}>
                <div className="space-y-8">
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
            </PhotoSection>

            {/* Section 5: Starter kit + Bonus */}
            <PhotoSection photo={PHOTOS[1]} flip={false}>
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
                    <div className="space-y-3">
                        <h3 className="font-marcellus text-sm uppercase tracking-[0.2em] text-[#1D0E22]">Bonus pre absolventov</h3>
                        <p className="font-montserrat text-lg font-light text-[#1D0E22] leading-snug">Študentky, ktoré úspešne absolvujú program, získajú profesionálne plagáty:</p>
                        <ul className="space-y-1.5 font-montserrat text-lg font-light text-[#1D0E22] leading-snug">
                            {["filtre pokožky", "symetria obočia", "symetria pier"].map((item, i) => (
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
                        <p className="font-marcellus text-5xl text-[#1D0E22]">2 290 €</p>
                    </div>
                    <div className="border border-[#1D0E22]/30 bg-[#1D0E22]/5 rounded-2xl p-8 text-center space-y-3 flex flex-col justify-center relative">
                        <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#1D0E22]/50">Vrátane štartovacieho balíka</p>
                        <p className="font-marcellus text-5xl text-[#1D0E22]">2 890 €</p>
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
                            src="/academia/tb-opu-banner.jpg"
                            alt="Tatra banka – Online podnikateľský úver"
                            fill
                            className="object-cover"
                        />
                    </a>
                </div>
            </div>

            <CourseBookingSection courseName="The Art of PMU" />
        </div>
    );
}
