import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebinarButton from "./_components/WebinarButton";
import HeroVideo from "./_components/HeroVideo";

export const metadata: Metadata = {
    title: "Academia | Salón Viktória",
    description: "Certifikované kurzy permanentného make-upu. Profesionálne vzdelávanie pre začiatočníčky aj pokročilé.",
    alternates: { canonical: "/academia" },
};

type Course = {
    label: string;
    href: string;
    image?: string;
    video?: string;
    sub: string;
    position?: string;
};

const COURSES: Course[] = [
    { label: "The Art of PMU", href: "/academia/the-art-of-pmu", image: "/academia/kurz1/preview.PNG", sub: "Kurz pre Začiatočníkov", position: "center 40%" },
    { label: "Tri Techniky Obočia", href: "/academia/tri-techniky-obocia", image: "/academia/kurz4/preview.PNG", sub: "Kurz pre Začiatočníkov aj pokročilých" },
    { label: "Estetické nastrelovanie náušníc", href: "/academia/esteticke-nastrelovanie-nausnic", video: "https://pub-60b685024baf4def829d5151d4dc320a.r2.dev/kurz7.mp4", sub: "Kurz" },
    { label: "Laser Touch", href: "/academia/laser-touch", image: "/academia/kurz6/lasertouch_preview.PNG", sub: "Kurz" },
    { label: "PMU Očných Liniek", href: "/academia/pmu-ocnych-liniek", image: "/academia/kurz3/linky_preview.PNG", sub: "Master Class pre Pokročilých" },
    { label: "PMU Pier", href: "/academia/pmu-pier", image: "/academia/kurz2/pery_preview.PNG", sub: "Master Class pre Pokročilých" },
    { label: "Hyperrealistické Obočie", href: "/academia/hyperrealisticke-obocie", image: "/academia/kurz5/preview.PNG", sub: "Master Class pre Pokročilých" },
    { label: "Deň Otvorených Dverí", href: "/academia/dod", video: "https://pub-60b685024baf4def829d5151d4dc320a.r2.dev/dod.mp4", sub: "Príďte sa pozrieť", position: "center 20%" },
];

export default function AcademiaPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <section className="pt-40 pb-20 px-6">
                <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 xl:gap-16">
                    {/* Left Side: 3 Cards Stacked */}
                    <div className="flex flex-col gap-8 w-full lg:w-[380px] xl:w-[500px]">
                        {COURSES.slice(0, 4).map((course) => (
                            <Link
                                key={course.href}
                                href={course.href}
                                className="group relative aspect-[16/5] overflow-hidden rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] block"
                            >
                                {course.video ? (
                                    <video
                                        src={course.video}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        style={course.position ? { objectPosition: course.position } : undefined}
                                    />
                                ) : course.image ? (
                                    <Image
                                        src={course.image}
                                        alt={course.label}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        style={course.position ? { objectPosition: course.position } : undefined}
                                    />
                                ) : null}
                                {(course.href === "/academia/dod" || course.href === "/academia/esteticke-nastrelovanie-nausnic") && (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-0.5">
                                            <p className="font-montserrat text-[9px] uppercase tracking-[0.2em] text-white/50">{course.sub}</p>
                                            <h2 className="font-marcellus text-base uppercase tracking-widest text-white group-hover:text-gold transition-colors duration-300">
                                                {course.label}
                                            </h2>
                                        </div>
                                    </>
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Center: Main Video */}
                    <div className="max-w-[450px] w-full rounded-[2rem] overflow-hidden shadow-2xl relative aspect-[9/16] group shrink-0 border border-white/20">
                        <HeroVideo src="https://pub-60b685024baf4def829d5151d4dc320a.r2.dev/academia.mp4" />
                    </div>

                    {/* Right Side: 3 Cards Stacked */}
                    <div className="flex flex-col gap-8 w-full lg:w-[380px] xl:w-[500px]">
                        {COURSES.slice(4, 8).map((course) => (
                            <Link
                                key={course.href}
                                href={course.href}
                                className="group relative aspect-[16/5] overflow-hidden rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] block"
                            >
                                {course.video ? (
                                    <video
                                        src={course.video}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        style={course.position ? { objectPosition: course.position } : undefined}
                                    />
                                ) : course.image ? (
                                    <Image
                                        src={course.image}
                                        alt={course.label}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        style={course.position ? { objectPosition: course.position } : undefined}
                                    />
                                ) : null}
                                {(course.href === "/academia/dod" || course.href === "/academia/esteticke-nastrelovanie-nausnic") && (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-0.5">
                                            <p className="font-montserrat text-[9px] uppercase tracking-[0.2em] text-white/50">{course.sub}</p>
                                            <h2 className="font-marcellus text-base uppercase tracking-widest text-white group-hover:text-gold transition-colors duration-300">
                                                {course.label}
                                            </h2>
                                        </div>
                                    </>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

                        <section className="mt-20 max-w-4xl mx-auto px-6 space-y-20 pb-32">
                    {/* Question 1 */}
                    <div className="space-y-8">
                        <div className="text-center space-y-2">
                            <h2 className="font-marcellus text-2xl md:text-3xl uppercase tracking-[0.2em] text-[#1D0E22]">
                                ako sa človek z “0” môže stať permanent make-up artistom, aké musí postúpiť školenia a papierovania?
                            </h2>
                        </div>
                        <div className="space-y-8">
                            <p className="font-montserrat text-base text-[#1D0E22]/70 leading-tight text-center max-w-3xl mx-auto">
                                Keďže osoba nemá príslušné vzdelanie (napr. strednú zdravotnícku školu alebo výučný list v odbore kozmetik/kozmetička), musí postupovať cestou ďalšieho vzdelávania podľa zákona č. 292/2024 Z. z. o vzdelávaní dospelých (platný od 1. 1. 2026).
                            </p>

                            <div className="space-y-8">
                                {/* Phase 1 */}
                                <div className="space-y-2">
                                    <h3 className="font-marcellus text-lg uppercase tracking-widest text-[#1D0E22]">1. Fáza: Získanie odbornej kvalifikácie</h3>
                                    <div className="grid gap-2">
                                        <div className="space-y-1">
                                            <p className="font-montserrat text-base font-medium text-[#1D0E22]">Akreditovaný kurz PMU:</p>
                                            <p className="font-montserrat text-base text-[#1D0E22]/70 leading-tight">Musí absolvovať kurz v inštitúcii, ktorá má akreditáciu Ministerstva školstva SR. Rozsah býva zvyčajne 80 až 120 hodín.</p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="font-montserrat text-base font-medium text-[#1D0E22]">Osvedčenie o profesijnej kvalifikácii:</p>
                                            <p className="font-montserrat text-base text-[#1D0E22]/70 leading-tight">Samotný certifikát z kurzu dnes už na otvorenie živnosti nestačí. Pokurze musíte absolvovať skúšku na overenie vzdelávacích výstupov pred autorizovanou inštitúciou. Po jej úspešnom zvládnutí získa osvedčenie, ktoré je rovnocenné s výučným listom pre účely živnostenského zákona. (Zákon č. 292/2024 Z. z. explicitne uvádza, že osvedčenie o profesijnej kvalifikácii je dokladom o odbornej spôsobilosti.)</p>
                                        </div>
                                        <div className="p-4 bg-gold/5 rounded-lg border border-gold/10">
                                            <p className="font-montserrat text-sm text-[#1D0E22]/80 leading-tight italic">
                                                <span className="font-bold not-italic">Dôležité upozornenie:</span> Od 1. januára 2026 sú overovanie vzdelávacích výstupov oprávnené vykonávať len autorizované inštitúcie. Je kľúčové si vopred overiť, či vzdelávacia agentúra a inštitúcia vykonávajúca skúšku majú príslušnú autorizáciu podľa nového zákona, inak vám Živnostenský úrad doklad neuzná. Register autorizovaných inštitúcií je dostupný na Informačnom systéme vzdelávania dospelých (ISVD).
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Phase 2 */}
                                <div className="space-y-2">
                                    <h3 className="font-marcellus text-lg uppercase tracking-widest text-[#1D0E22]">2. Fáza: Zdravotná spôsobilosť (Hygiena)</h3>
                                    <div className="grid gap-2">
                                        <p className="font-montserrat text-base text-[#1D0E22]/70 leading-tight">PMU je považovaný za epidemiologicky závažnú činnosť. Pred otvorením prevádzky potrebujete:</p>
                                        <div className="space-y-1">
                                            <p className="font-montserrat text-base font-medium text-[#1D0E22]">Zdravotný preukaz:</p>
                                            <p className="font-montserrat text-base text-[#1D0E22]/70 leading-tight">Vydá vám ho váš obvodný lekár.</p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="font-montserrat text-base font-medium text-[#1D0E22]">Osvedčenie o odbornej spôsobilosti na epidemiologicky závažné činnosti:</p>
                                            <p className="font-montserrat text-base text-[#1D0E22]/70 leading-tight">Musí absolvovať skúšku na príslušnom Regionálnom úrade verejného zdravotníctva (RÚVZ). Skúška preveruje znalosti o dezinfekcii, sterilizácii a prevencii nákaz.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Phase 3 */}
                                <div className="space-y-2">
                                    <h3 className="font-marcellus text-lg uppercase tracking-widest text-[#1D0E22]">3. Fáza: Založenie živnosti</h3>
                                    <div className="grid gap-2">
                                        <p className="font-montserrat text-base text-[#1D0E22]/70 leading-tight">Permanentný make-up spadá pod remeselnú živnosť (v rámci skupiny Kozmetické služby).</p>
                                        <div className="space-y-1">
                                            <p className="font-montserrat text-base font-medium text-[#1D0E22]">Dokumenty potrebné pre Živnostenský úrad:</p>
                                            <ul className="space-y-1 font-montserrat text-base text-[#1D0E22]/70">
                                                <li className="flex gap-2"><span>—</span> Občiansky preukaz (všeobecné podmienky: vek 18 rokov, spôsobilosť na právne úkony).</li>
                                                <li className="flex gap-2"><span>—</span> Výpis z registra trestov (úrad si ho vyžiada sám, musíte byť bezúhonný/á).</li>
                                                <li className="flex gap-2"><span>—</span> Doklad o odbornej spôsobilosti (vyššie spomínané Osvedčenie o úplnej kvalifikácii).</li>
                                                <li className="flex gap-2"><span>—</span> Správny poplatok: 22 € za každú remeselnú živnosť (pri elektronickom ohlásení cez slovensko.sk je to 11 €).</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Phase 4 */}
                                <div className="space-y-2">
                                    <h3 className="font-marcellus text-lg uppercase tracking-widest text-[#1D0E22]">4. Fáza: Prevádzka a schvaľovanie (RÚVZ)</h3>
                                    <div className="grid gap-2">
                                        <p className="font-montserrat text-base text-[#1D0E22]/70 leading-tight">Musíte mať priestor, ktorý spĺňa prísne hygienické normy.</p>
                                        <div className="space-y-1">
                                            <p className="font-montserrat text-base font-medium text-[#1D0E22]">Prevádzkový poriadok:</p>
                                            <p className="font-montserrat text-base text-[#1D0E22]/70 leading-tight">Musíte vypracovať dokument, kde presne popíšete postupy hygieny a manipulácie s odpadom (ihly sú nebezpečný odpad).</p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="font-montserrat text-base font-medium text-[#1D0E22]">Schválenie priestorov:</p>
                                            <p className="font-montserrat text-base text-[#1D0E22]/70 leading-tight">Miestny hygienik (RÚVZ) musí prísť na osobnú obhliadku a vydať rozhodnutie o uvedení priestorov do prevádzky. Bez tohto papiera nesmiete začať pracovať.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Question 2 */}
                    <div className="space-y-8">
                        <div className="text-center space-y-2">
                            <h2 className="font-marcellus text-2xl md:text-3xl uppercase tracking-[0.2em] text-[#1D0E22]">
                                Ako má postupovať pracujúca kozmetička aby mohla oficiálne tetovať?
                            </h2>
                        </div>

                        <div className="space-y-8">
                            <p className="font-montserrat text-base text-[#1D0E22]/70 leading-tight text-center max-w-3xl mx-auto">
                                Ak už pracuje ako kozmetička a má v tejto oblasti vzdelanie (výučný list, maturitné vysvedčenie v odbore kozmetik alebo osvedčenie o úplnej kvalifikácii), jej cesta k legálnemu vykonávaniu PMU je výrazne jednoduchšia než u laika.
                                <br /><br />
                                Z hľadiska živnostenského zákona je totiž permanentný make-up súčasťou remeselnej živnosti „Kozmetické služby“. Ak už túto živnosť má zapísanú, technicky vlastní oprávnenie. Avšak, z hľadiska hygienických predpisov a odbornosti sú tu dôležité kroky:
                            </p>

                            <div className="space-y-8">
                                {/* Step 1 */}
                                <div className="space-y-2">
                                    <h3 className="font-marcellus text-lg uppercase tracking-widest text-[#1D0E22]">1. Rozšírenie odbornosti (Akreditovaný kurz)</h3>
                                    <div className="space-y-1">
                                        <p className="font-montserrat text-base text-[#1D0E22]/70 leading-tight">Aj keď má „papiere“ na kozmetiku, stredné školy bežne PMU nevyučujú v potrebnom rozsahu. Pre her vlastnú ochranu a poistenie zodpovednosti za škodu musí absolvovať:</p>
                                        <ul className="space-y-0.5 font-montserrat text-base text-[#1D0E22]/70">
                                            <li>— <span className="font-medium">Špecializovaný akreditovaný kurz PMU:</span> Zameraný na mikropigmentáciu, koloristiku a prácu s prístrojom/čepieľkami.</li>
                                            <li>— <span className="font-medium">Certifikát:</span> Po ukončení získa doklad, ktorý predkladá poisťovni a RÚVZ pri aktualizácii prevádzkového poriadku.</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="space-y-2">
                                    <h3 className="font-marcellus text-lg uppercase tracking-widest text-[#1D0E22]">2. Aktualizácia na Hygienu (RÚVZ)</h3>
                                    <div className="space-y-1">
                                        <p className="font-montserrat text-base text-[#1D0E22]/70 leading-tight">Súčasné povolenie na prevádzku kozmetiky pravdepodobne nezahŕňa činnosti, pri ktorých sa porušuje integrita kože.</p>
                                        <ul className="space-y-1 font-montserrat text-base text-[#1D0E22]/70">
                                            <li>— <span className="font-medium text-[#1D0E22]">Doplnenie prevádzkového poriadku:</span> Musí doň dopísať procesy súvisiace s PMU (sterilizácia ihiel, používanie jednorazových pomôcok, nakladanie s nebezpečným odpadom, typy používaných pigmentov s certifikáciou REACH).</li>
                                            <li>— <span className="font-medium text-[#1D0E22]">Ohlásenie zmeny:</span> Písomne oznámi na RÚVZ rozšírenie služieb o permanentný make-up.</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="space-y-2">
                                    <h3 className="font-marcellus text-lg uppercase tracking-widest text-[#1D0E22]">3. Administratíva v registroch</h3>
                                    <div className="overflow-hidden">
                                        <table className="w-full text-left font-montserrat text-base border-collapse">
                                            <thead>
                                                <tr className="border-b border-[#1D0E22]/10">
                                                    <th className="py-1 pr-4 font-marcellus text-xs uppercase tracking-widest text-[#1D0E22]/50">Situácia</th>
                                                    <th className="py-1 font-marcellus text-xs uppercase tracking-widest text-[#1D0E22]/50">Postup</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-[#1D0E22]/70">
                                                <tr className="border-b border-[#1D0E22]/5">
                                                    <td className="py-2 pr-4 align-top">Má živnosť „Kozmetické služby“</td>
                                                    <td className="py-2">Nemusí nahlasovať nič na Živnostenský úrad.</td>
                                                </tr>
                                                <tr className="border-b border-[#1D0E22]/5">
                                                    <td className="py-2 pr-4 align-top">Má len „Vizážistické služby“</td>
                                                    <td className="py-2">Musí si dohlásiť remeselnú živnosť „Kozmetické služby“.</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 pr-4 align-top">Je zamestnanec</td>
                                                    <td className="py-2">Musí dismantle PMU v náplni práce a schválené hygienou.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Step 4 */}
                                <div className="space-y-2">
                                    <h3 className="font-marcellus text-lg uppercase tracking-widest text-[#1D0E22]">4. Povinnosti podľa nariadenia EÚ (REACH)</h3>
                                    <div className="space-y-1">
                                        <p className="font-montserrat text-base text-[#1D0E22]/70 leading-tight">Ako odborníčka musí od roku 2022 prísne sledovať zloženie pigmentov:</p>
                                        <ul className="space-y-0.5 font-montserrat text-base text-[#1D0E22]/70">
                                            <li>— Používať výhradne pigmenty s kartou bezpečnostných údajov (SDS) v slovenčine.</li>
                                            <li>— Povinnosť informovať klientku o zložení a rizikách (Informovaný súhlas).</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-5 bg-[#1D0E22]/5 rounded-2xl space-y-2">
                                    <h4 className="font-marcellus text-xs uppercase tracking-widest text-gold text-center">Čo urobiť ako prvé?</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 font-montserrat text-sm text-[#1D0E22]/70">
                                        <li className="flex gap-2"><span>1.</span> Skontrolovať si na živnostenskom liste formuláciu „Kozmetické služby“.</li>
                                        <li className="flex gap-2"><span>2.</span> Nájsť si kvalitný kurz.</li>
                                        <li className="flex gap-2"><span>3.</span> Kontaktovať firmu na odvoz biologického odpadu a nádobu na ihly.</li>
                                        <li className="flex gap-2"><span>4.</span> Upraviť svoj prevádzkový poriadok a poslať ho na RÚVZ.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Question 3 */}
                    <div className="space-y-8">
                        <div className="text-center space-y-2">
                            <h2 className="font-marcellus text-2xl md:text-3xl uppercase tracking-[0.2em] text-[#1D0E22]">
                                Vzor “neakreditovaný vzdelávací program“ – kedy on slúži?
                            </h2>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-gold/5 p-6 rounded-2xl border border-gold/10 space-y-4">
                                <p className="font-montserrat text-base text-[#1D0E22]/80 leading-tight text-center">
                                    Áno, ak ste certifikovanou vzdelávacou inštitúciou. Zákon č. 292/2024 Z. z. v § 4 ods. 2 definuje, že ak vzdelávanie dospelých poskytuje certifikovaná inštitúcia, vydáva toto osvedčenie.
                                </p>
                                <p className="font-montserrat text-base text-[#1D0E22]/70 leading-tight">
                                    Tento vzor používate pre tie kurzy, ktoré nie sú akreditované ako samostatné programy (teda tie "neakreditované"), ale poskytujete ich vy ako "preverená/certifikovaná" firma. V hlavičke uvádzate svoje evidenčné číslo certifikovanej inštitúcie, čím garantujete kvalitu.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <h4 className="font-marcellus text-sm uppercase tracking-widest text-[#1D0E22]">Registruje sa toto osvedčenie niekde štátne?</h4>
                                    <p className="font-montserrat text-base text-[#1D0E22]/70 leading-tight">
                                        Áno, malo by sa. Podľa novej legislatívy se certifikované inštitúcie napájajú na Informačný systém vzdelávania dospelých (ISVD). Cieľom je sústreďovať údaje o vzdelávaní dospelých v tomto systéme pre budúce uznávanie mikro-kvalifikácií.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-marcellus text-sm uppercase tracking-widest text-[#1D0E22]">Je to len pre toho človeka, že ovláda niečo nové?</h4>
                                    <p className="font-montserrat text-base text-[#1D0E22]/70 leading-tight">
                                        Nie úplne. Má to vyššiu hodnotu než bežný "diplom" z necertifikovanej firmy:
                                    </p>
                                    <ul className="space-y-1 font-montserrat text-base text-[#1D0E22]/70">
                                        <li>— <span className="font-medium text-[#1D0E22]">Dôveryhodnosť:</span> Dôkaz, že kurz absolvoval u subjektu pod dohľadom Ministerstva školstva.</li>
                                        <li>— <span className="font-medium text-[#1D0E22]">Základ pre uznávanie:</span> Podklad pre budúce uznávanie výsledkov neformálneho vzdelávania.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="p-5 bg-[#1D0E22] text-white rounded-2xl shadow-xl">
                                <p className="font-montserrat text-sm leading-tight italic text-center text-white/80">
                                    <span className="text-gold font-bold not-italic uppercase tracking-widest block mb-1 text-sm">Dôležité upozornenie k PMU:</span>
                                    Hoci na tento vzor môžete napísať "Permanentný mejkap", toto konkrétne osvedčenie stále <span className="underline decoration-gold text-white font-medium">nestačí na otvorenie viazanej živnosti</span>. Na to absolvent potrebuje osvedčenie o akreditovanom vzdelávacom programe. Tento vzor slúži na doplnkové zručnosti.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer />
            <WebinarButton />
        </main>
    );
}
