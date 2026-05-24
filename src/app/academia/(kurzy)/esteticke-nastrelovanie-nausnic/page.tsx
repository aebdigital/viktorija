import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSpace from "@/app/academia/_components/AnimatedSpace";
import ContactCTA from "@/app/academia/_components/ContactCTA";
import CourseBookingSection from "@/app/academia/_components/CourseBookingSection";

export const metadata: Metadata = {
    title: "Estetické Nastreľovanie Náušníc | Academia | Salón Viktória",
    description: "Individuálny praktický kurz estetického nastreľovania náušníc – hygiena, anatómia a precízne umiestnenie.",
    alternates: { canonical: "/academia/esteticke-nastrelovanie-nausnic" },
};

function PhotoSection({ photo, flip = false, children }: { photo: string; flip?: boolean; children: React.ReactNode }) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 items-start ${flip ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""}`}>
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] md:min-h-[520px]">
                <Image src={photo} alt="" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-start px-0 md:px-12 pt-6 md:pt-0 pb-10">
                {children}
            </div>
        </div>
    );
}



export default function Kurz7Page() {
    return (
        <AnimatedSpace className="space-y-16">
            <h1 className="sr-only">Estetické Nastreľovanie Náušníc – Individuálny praktický kurz</h1>

            {/* Section 1: Photo + Intro, Acupuncture & Focus Areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-start">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] md:min-h-[520px]">
                    <Image
                        src="/academia/kurz7/7.png"
                        alt="Estetické Nastreľovanie Náušníc"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col justify-start px-0 md:px-12 pt-6 md:pt-0 pb-10 space-y-4 font-montserrat font-light text-[#1D0E22] leading-tight text-lg [&_p]:my-0">
                    <p className="font-montserrat text-lg font-light text-[#1D0E22] leading-snug mb-2 font-medium">
                        Estetické nastreľovanie náušníc — Individuálny praktický kurz
                    </p>
                    <p>
                        Keď som sa v roku 2001 učila nastreľovať náušnice, školenie vyzeralo jednoducho — pri kúpe pištole výrobca ukázal základné miesta vpichu a tým sa výučba prakticky končila.
                    </p>
                    <p>
                        Lenže reálna prax vyzerá úplne inak.
                    </p>
                    <p>
                        Keď začnete pracovať s klientmi, veľmi rýchlo zistíte, že každé ucho má inú anatómiu, inú formu a iné proporcie. A niekedy stačí posun o pol milimetra a náušnica už nepôsobí esteticky.
                    </p>
                    <p>
                        Na uchu existujú body, kde náušnica pôsobí harmonicky a prirodzene. Zaujímavé je, že tieto miesta mi neskôr potvrdili aj akupunkturisti — viackrát ku mne prišli maminky s označením bodov priamo od nich a tieto miesta sa zhodovali s tým, čo som si rokmi vypozorovala v praxi.
                    </p>
                    <p className="pt-2">
                        Na kurze sa budeme venovať nielen samotnému vpichu, ale hlavne estetike, anatómii ucha a komunikácii s klientom.
                    </p>
                    <p className="font-medium text-base uppercase tracking-wider pt-2">Budeme riešiť:</p>
                    <ul className="space-y-1.5 text-sm text-[#1D0E22]/80">
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>správne umiestnenie náušnice podľa typu ucha</span></li>
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>zarastené dierky</span></li>
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>zošívané alebo poškodené uši</span></li>
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>prácu v oblasti jazvy</span></li>
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>jemné detské ušká</span></li>
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>vystrašené deti a stres rodičov</span></li>
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>pubertiačky</span></li>
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>helix</span></li>
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>uši po plastických operáciách</span></li>
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>vytvorenie pokojnej a priateľskej atmosféry počas procedúry</span></li>
                        <li className="flex gap-2"><span className="text-[#1D0E22]/25 shrink-0">—</span><span>domácu starostlivosť po nastrelení</span></li>
                    </ul>
                    <p className="pt-2">
                        Budeme hovoriť aj o tom, kto je naším klientom — či dieťa, alebo rodič — a ako správne viesť komunikáciu, aby bol celý proces pokojný, bezpečný a príjemný pre všetkých.
                    </p>
                </div>
            </div>

            {/* Section 2: Video + Experience & Course Format details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1">
                <div className="relative min-h-[400px] md:min-h-[520px] h-full w-full overflow-hidden rounded-2xl">
                    <video
                        src="https://pub-60b685024baf4def829d5151d4dc320a.r2.dev/kurz7.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col justify-start px-0 md:px-12 pt-6 md:pt-0 pb-10 space-y-4 font-montserrat font-light text-[#1D0E22] leading-tight text-lg [&_p]:my-0">
                    <p>
                        Kurz je postavený na dlhoročnej praxi, skúsenostiach a detailoch, ktoré sa človek z klasického „školenia k pištoli“ nenaučí.
                    </p>
                    <p className="font-medium pt-2">
                        O svoje profesionálne tajomstvá a systém estetického nastreľovania náušníc sa s vami podelím na tomto autorskom kurze, vytvorenom na základe rokov každodennej praxe.
                    </p>
                    <p className="pt-4 font-medium">
                        Kurz je prakticky orientovaný a trvá približne 4 hodiny. Súčasťou výučby je demo ukážka a následná práca na modelkách.
                    </p>
                    <p>
                        Študent počas kurzu samostatne nastrelí náušnice dvom modelkám pod mojím vedením, aby získal istotu v označovaní bodov, komunikácii s klientom aj samotnej technike vpichu.
                    </p>
                    <p>
                        Dôraz kladiem nielen na technické prevedenie, ale aj na estetiku výsledku, symetriu a pokojné vedenie celej procedúry.
                    </p>
                </div>
            </div>



            {/* Pricing Section */}
            <div className="grid md:grid-cols-2 gap-6 md:max-w-[66.666%] md:mx-auto">
                <div className="border border-[#1D0E22]/30 bg-[#1D0E22]/5 rounded-2xl p-8 text-center space-y-3 flex flex-col justify-center">
                    <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#1D0E22]/50">Cena kurzu</p>
                    <p className="font-marcellus text-5xl text-[#1D0E22]">458 €</p>
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

            <CourseBookingSection courseName="Nastreľovanie Náušníc" />
            <ContactCTA />
        </AnimatedSpace>
    );
}
