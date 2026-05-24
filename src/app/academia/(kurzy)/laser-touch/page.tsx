import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSpace from "@/app/academia/_components/AnimatedSpace";
import ContactCTA from "@/app/academia/_components/ContactCTA";
import CourseBookingSection from "@/app/academia/_components/CourseBookingSection";

export const metadata: Metadata = {
    title: "Laser Touch | Academia | Salón Viktória",
    description: "Individuálny kurz odstraňovania permanentného make-upu ND:YAG Q-Switch laserom – teória, bezpečnosť a prax v rukách skúsenej špecialistky.",
    alternates: { canonical: "/academia/laser-touch" },
};

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

export default function Kurz6Page() {
    return (
        <AnimatedSpace className="space-y-16">
            <h1 className="sr-only">Laser Touch – Individuálny kurz</h1>

            {/* Section 1: Photo + Intro */}
            <PhotoSection photo="/academia/kurz6/lasertouch%20main.PNG" flip={false}>
                <div className="space-y-4 font-montserrat font-light text-[#1D0E22] leading-tight text-lg [&_p]:my-0">
                    <p className="font-montserrat text-lg font-light text-[#1D0E22] leading-snug mb-2">
                        Odstraňovanie nežiaduceho permanentného make-upu ND:YAG Q-Switch laserom
                    </p>
                    <p>
                        Laserovému odstraňovaniu permanentného make-upu sa venujem od roku 2014.
                        Aj ja sama som absolvovala individuálne školenia u dvoch špecialistov, ktorí patrili medzi priekopníkov laserového odstraňovania pigmentov. Jeden z nich sa dokonca podieľal na vývoji Q-Switch technológie.
                    </p>
                    <p>
                        Dlhoročná prax v permanentnom make-upe mi umožňuje rozumieť pigmentu nielen z pohľadu lasera, ale aj z pohľadu jeho správania v pokožke, hĺbky uloženia, hojenia a reakcie organizmu počas rokov.
                    </p>
                    <p>
                        Kurz je určený pre špecialistov, ktorí chcú bezpečne a profesionálne pracovať s laserovým odstraňovaním permanentného make-upu a malých tetovaní.
                    </p>
                    <p>
                        Výučba prebieha individuálne a pozostáva z dvoch častí.
                    </p>
                </div>
            </PhotoSection>

            {/* Section 2: Photo + 1. časť — teória */}
            <PhotoSection photo="/academia/kurz6/lasertouch_preview.PNG" flip={true}>
                <div className="space-y-6">
                    <div>
                        <h2 className="font-marcellus text-xl md:text-2xl uppercase tracking-widest text-[#1D0E22]">1. časť</h2>
                        <p className="font-montserrat text-sm text-[#1D0E22]/60 mt-1">Teória a ukážky procedúr</p>
                    </div>
                    <div className="space-y-4 font-montserrat font-light text-[#1D0E22] leading-tight text-lg [&_p]:my-0">
                        <p>
                            Prvé stretnutie prebieha v mojom štúdiu formou teoretickej výučby a praktických ukážok.
                        </p>
                        <p className="font-medium text-base uppercase tracking-wider">Budeme sa venovať:</p>
                        <ul className="space-y-1.5 text-sm text-[#1D0E22]/80">
                            <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>technickým možnostiam ND:YAG Q-Switch lasera</span></li>
                            <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>správnemu nastavovaniu a kalibrácii impulzov</span></li>
                            <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>komunikácii medzi laserom, pokožkou a pigmentom</span></li>
                            <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>odtieňom pigmentov, ktoré laser vidí a ktoré reagujú odlišne</span></li>
                            <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>biologickým procesom v pokožke počas procedúry</span></li>
                            <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>fungovaniu lymfatického systému pri odvádzaní pigmentu</span></li>
                            <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>životu pigmentu v pokožke a pôsobeniu organizmu na jeho zmeny</span></li>
                            <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>bezpečnosti práce a ochrane integrity pokožky</span></li>
                            <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>situáciám, v ktorých môžeme bezpečne zvýšiť intenzitu laserového lúča</span></li>
                        </ul>
                        <p className="font-medium text-base uppercase tracking-wider pt-2">Učíme sa pracovať s:</p>
                        <ul className="space-y-1.5 text-sm text-[#1D0E22]/80">
                            <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>obočím</span></li>
                            <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>perami</span></li>
                            <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>očnými linkami</span></li>
                            <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>malými tetovaniami</span></li>
                        </ul>
                        <p className="pt-2">
                            Súčasťou školenia je aj systém výpočtu predpokladaného počtu procedúr pomocou špecializovaných tabuliek, aby ste vedeli klientov správne informovať ešte pred začiatkom procesu.
                        </p>
                        <div className="border-l-2 border-gold/40 pl-4 italic text-[#1D0E22]/80 pt-2">
                            <p>Laserové odstránenie patrí medzi najrýchlejšie a najbezpečnejšie metódy odstránenia pigmentu z tela bez narušenia integrity pokožky.</p>
                        </div>
                    </div>
                </div>
            </PhotoSection>

            {/* Section 3: 2. časť + V rámci kurzu získavate */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                <div className="space-y-6">
                    <div>
                        <h2 className="font-marcellus text-xl md:text-2xl uppercase tracking-widest text-[#1D0E22]">2. časť</h2>
                        <p className="font-montserrat text-sm text-[#1D0E22]/60 mt-1">Práca s vaším laserom</p>
                    </div>
                    <div className="space-y-4 font-montserrat font-light text-[#1D0E22] leading-tight text-lg [&_p]:my-0">
                        <p>Druhá časť kurzu prebieha priamo u vás v salóne alebo na klinike.</p>
                        <p>Pracujeme s vaším laserom a nastavujeme vhodné parametre podľa typu zariadenia, výkonu a konkrétnych procedúr.</p>
                        <p>Nasleduje praktická časť na modelkách, kde sa špecialista zaučuje pod mojím vedením priamo v praxi.</p>
                    </div>
                </div>
                <div className="space-y-6">
                    <div>
                        <h2 className="font-marcellus text-xl md:text-2xl uppercase tracking-widest text-[#1D0E22]">V rámci kurzu získavate</h2>
                    </div>
                    <ul className="space-y-2 font-montserrat font-light text-[#1D0E22]/80 text-base">
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>plagáty procesu odstránenia pre klientov</span></li>
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>anamnézy a informované súhlasy</span></li>
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>systém práce a konzultácií</span></li>
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>individuálne vedenie počas zaučenia</span></li>
                    </ul>
                    <div className="border-l-2 border-gold/40 pl-4 italic text-[#1D0E22]/70 text-sm">
                        <p className="font-montserrat font-light leading-relaxed">V prípade záujmu viem individuálne pomôcť aj so zabezpečením kvalitného lasera priamo od výrobcu — od komunikácie a dohodnutia podmienok až po samotný proces objednávky.</p>
                    </div>
                </div>
            </div>

            {/* Pricing */}
            <div className="grid md:grid-cols-2 gap-6 md:max-w-[66.666%] md:mx-auto">
                <div className="border border-[#1D0E22]/30 bg-[#1D0E22]/5 rounded-2xl p-8 text-center space-y-3 flex flex-col justify-center">
                    <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#1D0E22]/50">Cena kurzu</p>
                    <p className="font-marcellus text-5xl text-[#1D0E22]">1 280 €</p>
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

            <CourseBookingSection courseName="Laser Touch" />
            <ContactCTA />
        </AnimatedSpace>
    );
}
