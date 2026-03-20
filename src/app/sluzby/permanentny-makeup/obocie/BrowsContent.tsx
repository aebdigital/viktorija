"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "@/components/Lightbox";
import PmuSubSidebar from "../../_components/PmuSubSidebar";
import ContactForm from "../../_components/ContactForm";
import StickyCennikButton from "../../_components/StickyCennikButton";

export default function BrowsContent() {
    const [lightbox, setLightbox] = useState<{
        isOpen: boolean;
        images: string[];
        index: number;
    }>({
        isOpen: false,
        images: [],
        index: 0
    });

    const openLightbox = (images: string[], index: number) => {
        setLightbox({ isOpen: true, images, index });
    };

    const nextImage = () => {
        setLightbox(prev => ({
            ...prev,
            index: (prev.index + 1) % prev.images.length
        }));
    };

    const prevImage = () => {
        setLightbox(prev => ({
            ...prev,
            index: (prev.index - 1 + prev.images.length) % prev.images.length
        }));
    };

    return (
        <>
            <div className="flex flex-col xl:flex-row gap-8 items-start">
                <div className="flex-1 space-y-8">
                    {/* Mobile sub-nav */}
                    <PmuSubSidebar variant="mobile" />

                    {/* Desktop Back Button */}
                    <Link
                        href="/sluzby/permanentny-makeup"
                        className="hidden xl:flex items-center gap-2 text-[#1D0E22] text-sm uppercase tracking-widest font-marcellus hover:text-gold transition-colors mb-4"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        Späť na prehľad
                    </Link>

                    {/* Large Detail Image */}
                    <div className="relative h-[300px] md:h-[500px] w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src="/permanent-obocie/m4.jpg"
                            alt="Permanentný make-up obočia"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="font-montserrat font-light text-[#1D0E22] leading-snug text-lg">
                        <div className="space-y-8">
                            {/* Intro + 3 Navigation Boxes */}
                            <div>
                                <h3 className="font-marcellus text-3xl text-[#1D0E22] mb-4">Permanentný make-up obočia</h3>
                                <p>
                                    Hyperrealistické chĺpky alebo jemné Púdrové tieňovanie – zvolíme techniku podľa vašich čŕt, aby výsledok pôsobil prirodzene a harmonicky.
                                </p>
                                <ul className="flex flex-wrap gap-6 mt-6">
                                    <li className="flex gap-2 items-center"><span className="text-gold text-xl">✦</span><span>Rekonštrukcia a zahustenie obočia</span></li>
                                    <li className="flex gap-2 items-center"><span className="text-gold text-xl">✦</span><span>Prirodzený vzhľad vďaka 3D technikám</span></li>
                                    <li className="flex gap-2 items-center"><span className="text-gold text-xl">✦</span><span>Dlhodobý efekt a úspora času</span></li>
                                </ul>
                            </div>

                            {/* 3 Clickable Category Boxes */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                                {[
                                    { id: "section-hyperrealisticke", label: "Hyperrealistické obočie", image: "/obocie-more/hyper3.JPG" },
                                    { id: "section-pudrove", label: "Púdrové obočie", image: "/obocie-more/pud3.jpg" },
                                    { id: "section-mineralne", label: "Púdrové obočie s minerálnymi pigmentmi", image: "/obocie-more/mineral.jpg" },
                                ].map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth' })}
                                        className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                                    >
                                        <div className="absolute inset-0">
                                            <Image src={cat.image} alt={cat.label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-colors duration-300" />
                                        <div className="absolute inset-0 flex items-end justify-center p-4 md:p-6">
                                            <span className="font-marcellus text-sm md:text-base uppercase tracking-widest text-white group-hover:text-gold transition-colors duration-300 text-center">
                                                {cat.label}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* ═══ SECTION 1: Hyperrealistické obočie ═══ */}
                            <div id="section-hyperrealisticke" className="space-y-2 pt-8 border-t border-black/5 scroll-mt-32">
                                <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider">Hyperrealistické obočie</h4>
                                <p>
                                    Hyperrealistická technika spočíva vo vykresľovaní jednotlivých „chĺpkov" v 3D efekte a v ich precíznom rozmiestnení tak, aby napodobňovali prirodzený smer a hustotu rastu obočia. Hrúbku, dĺžku a intenzitu ťahov prispôsobujem konkrétnym zónam obočia: tam, kde sú prirodzené chĺpky výraznejšie, pracujem plnšie; tam, kde je potrebná jemnosť, volím svetlejšie a tenšie ťahy. Výsledok je veľmi prirodzený, „čistý", s optikou reálneho chĺpku.
                                </p>
                                <div className="space-y-2">
                                    <p className="font-medium">Pre koho je vhodné:</p>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>pri riedkom alebo chýbajúcom obočí (medzery, asymetria, vypadávanie chĺpkov),</span></li>
                                        <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>pre klientky, ktoré preferujú maximálne prirodzený vzhľad,</span></li>
                                        <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>pre ženy, ktoré chcú doplniť tvar bez viditeľného „make-up" efektu.</span></li>
                                    </ul>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {[1, 2, 3, 4, 5, 6].map((i) => {
                                        const mImages = [1, 2, 3, 4, 5, 6].map(n => `/permanent-obocie/m${n}.jpg`);
                                        return (
                                            <div key={`m${i}`} className="space-y-2">
                                                <div
                                                    className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/10 shadow-sm cursor-pointer "
                                                    onClick={() => openLightbox(mImages, i - 1)}
                                                >
                                                    <Image src={mImages[i - 1]} alt={`Transformácia m${i}`} fill className="object-cover" />
                                                    <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gold/80 flex items-center justify-center text-xs font-bold text-[#1D0E22]">{i}</span>
                                                </div>
                                                {i === 1 && (
                                                    <p className="text-sm text-[#1D0E22]/80 italic">
                                                        Obočie má studený sivý odtieň a pigment je uložený v hrubej vrstve. Pri tetovaní cez tento zostatok by sivá vždy prebíjala čerstvý odtieň, preto je potrebné jeho odstránenie laserom.
                                                    </p>
                                                )}
                                                {i === 2 && (
                                                    <p className="text-sm text-[#1D0E22]/80 italic">
                                                        Po jednej laserovej procedúre. Zostatok pigmentu je teplý, jemný a priesvitný, bez vplyvu na novú formu.
                                                    </p>
                                                )}
                                                {i === 3 && (
                                                    <p className="text-sm text-[#1D0E22]/80 italic">
                                                        Symetrický predkres.
                                                    </p>
                                                )}
                                                {i === 4 && (
                                                    <p className="text-sm text-[#1D0E22]/80 italic">
                                                        Obočie po procedúre.
                                                    </p>
                                                )}
                                                {i === 5 && (
                                                    <p className="text-sm text-[#1D0E22]/80 italic">
                                                        Obočie po procedúre.
                                                    </p>
                                                )}
                                                {i === 6 && (
                                                    <p className="text-sm text-[#1D0E22]/80 italic">
                                                        O tri hodiny je obočie hotové. Pri tvorbe nevymýšľam nič, čo by nebolo Vaše – zvýrazňujem dané a zachovávam prirodzený tvar.
                                                    </p>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Standalone Brows Photos: b1-b3 */}
                            <div className="pt-8 border-t border-black/5">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[1, 2, 3].map((i) => {
                                        const bImages = [1, 2, 3].map(n => `/permanent-obocie/b${n}.JPG`);
                                        return (
                                            <div
                                                key={`b${i}`}
                                                className="relative aspect-[4/3.3] rounded-lg overflow-hidden border border-black/10 shadow-sm cursor-pointer "
                                                onClick={() => openLightbox(bImages, i - 1)}
                                            >
                                                <Image src={bImages[i - 1]} alt={`Obočie b${i}`} fill className="object-cover" />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Korekcia within Hyperrealistické: n1-n3 */}
                            <div className="space-y-2 pt-8 border-t border-black/5">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[1, 2, 3].map((i) => {
                                        const nImages = ['/obocie-more/trio.JPG', '/permanent-obocie/n2.JPG', '/permanent-obocie/new-n3.jpg'];
                                        return (
                                            <div
                                                key={`n${i}`}
                                                className="relative aspect-[3/3.5] rounded-lg overflow-hidden border border-black/10 shadow-sm cursor-pointer "
                                                onClick={() => openLightbox(nImages, i - 1)}
                                            >
                                                <Image src={nImages[i - 1]} alt={`Transformácia n${i}`} fill className="object-cover" />
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="space-y-4">

                                </div>
                            </div>

                            {/* ═══ SECTION 2: Púdrové obočie ═══ */}
                            <div id="section-pudrove" className="space-y-2 pt-8 border-t-2 border-gold/20 scroll-mt-32">
                                <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider">Púdrové obočie</h4>
                                <p>
                                    Púdrová technika je vrstvené, vzdušné tieňovanie pigmentu. Obočie je v začiatkoch ľahké a jemné, smerom k telu a chvostíku postupne prechádza do tmavšieho gradientu. Tvar a rozloženie tieňa vytváram podľa anatómie tváre a očného okolia tak, aby obočie pôsobilo harmonicky a „otvorilo vzhľad".
                                    <br />
                                    Pri navrhovaní pracujem s optikou tváre: napríklad pri mierne navisnutom viečku je spodná línia obočia jemnejšia a gradient smerujem viac do stredu obočia, aby vznikol prirodzený objem a liftingový efekt bez tvrdých kontúr.
                                </p>
                                <div className="space-y-2">
                                    <p className="font-medium">Pre koho je vhodné:</p>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>pre klientky, ktoré majú vlastné obočie, ale chýba mu forma, hustota alebo symetria,</span></li>
                                        <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>pre ženy, ktorým pristane jemne upravené, definované obočie,</span></li>
                                        <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>pre tých, ktorí chcú stabilný tvar a elegantný výsledok.</span></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Featured Photos */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { src: "/permanent-obocie/PHOTO-2026-02-05-17-26-46.jpg", label: "Púdrové obočie vytvára optický lifting a definovaný tvar.", alt: "Púdrové obočie" },
                                    { src: "/permanent-obocie/PHOTO-2026-02-05-17-37-00.jpg", label: "Púdrové obočie a očné linky.", alt: "Púdrové obočie a očné linky" },
                                    { src: "/permanent-obocie/n1.JPG", label: "Obočie po roku od aplikácie.", alt: "Obočie po roku" }
                                ].map((photo, idx, arr) => (
                                    <div key={idx} className="space-y-4">
                                        <div
                                            className="relative aspect-[3/4] rounded-lg overflow-hidden border border-black/10 shadow-sm cursor-pointer "
                                            onClick={() => openLightbox(arr.map(p => p.src), idx)}
                                        >
                                            <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                                        </div>
                                        <p className="text-center font-marcellus text-[#1D0E22] tracking-wide text-sm">{photo.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* z1-z3 Grid */}
                            <div className="pt-8 border-t border-black/5">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[3, 1, 2].map((i, idx) => {
                                        const zImages = [3, 1, 2].map(n => `/permanent-obocie/z${n}.jpg`);
                                        return (
                                            <div key={`z${i}`} className="space-y-4">
                                                <div
                                                    className="relative aspect-[3/3.2] rounded-lg overflow-hidden border border-black/10 shadow-sm cursor-pointer "
                                                    onClick={() => openLightbox(zImages, idx)}
                                                >
                                                    <Image src={`/permanent-obocie/z${i}.jpg`} alt={`Obočie z${i}`} fill className="object-cover" />
                                                </div>
                                                {i === 3 && (
                                                    <p className="text-center font-marcellus text-[#1D0E22] tracking-wide text-sm">
                                                        Pudrové obočie a očné linky medzi riasy
                                                    </p>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* ═══ SECTION 3: Púdrové obočie s minerálnymi pigmentmi ═══ */}
                            <div id="section-mineralne" className="pt-8 border-t-2 border-gold/20 space-y-2 scroll-mt-32">
                                <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider">Púdrové obočie s minerálnymi pigmentmi</h4>
                                <p>
                                    Táto varianta púdrového obočia sa vytvára minerálnymi pigmentmi, ktoré zanechávajú veľmi prirodzený, mäkký efekt — akoby bolo obočie len zľahka podfarbené tieňom. Výsledok je decentný, nadčasový a vhodný aj pre klientky, ktoré chcú tvár len jemne upraviť bez výrazného líčenia.
                                    <br />
                                    V závislosti od typu pokožky a životného štýlu má táto technika tendenciu postupne a prirodzene vyblednúť — typicky približne v priebehu 12–18 mesiacov.
                                </p>
                                <div className="space-y-2">
                                    <p className="font-medium">Pre koho je vhodné:</p>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>pre mladé dievčatá a klientky, ktoré preferujú naturálnu krásu,</span></li>
                                        <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>pre ženy, ktoré nechcú výraznú intenzitu ani ostré línie,</span></li>
                                        <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>pre klientky, ktoré uprednostňujú jemný, dočasnejší efekt.</span></li>
                                    </ul>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        { file: 11, ext: 'JPG', label: "Pôvodné obočie pred procedúrou." },
                                        { file: 22, ext: 'JPG', label: "Obočie ihneď po aplikácii minerálnych pigmentov.", position: "center 30%" },
                                        { file: 55, ext: 'JPG', label: "Obočie ihneď po aplikácii minerálnych pigmentov." },
                                        { file: 33, ext: 'JPG', label: "Zahojený výsledok – mäkký, prirodzený efekt." },
                                        { file: 44, ext: 'jpg', label: "Obočie po zahojení." },
                                    ].map((item, idx, arr) => {
                                        const aImages = arr.map(a => `/permanent-obocie/a${a.file}.${a.ext}`);
                                        return (
                                            <div key={`a${item.file}`} className="space-y-2">
                                                <div
                                                    className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/10 shadow-sm cursor-pointer "
                                                    onClick={() => openLightbox(aImages, idx)}
                                                >
                                                    <Image src={`/permanent-obocie/a${item.file}.${item.ext}`} alt={`Obočie a${item.file}`} fill className="object-cover" style={item.position ? { objectPosition: item.position } : undefined} />
                                                    <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gold/80 flex items-center justify-center text-xs font-bold text-[#1D0E22]">{idx + 1}</span>
                                                </div>
                                                <p className="text-center font-marcellus text-[#1D0E22] tracking-wide text-sm">{item.label}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Cenník + Contact Form */}
                            <div id="pmu-brows-prices" className="pt-16 border-t-2 border-gold/20 mt-16">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div className="space-y-10 bg-white/30 p-8 rounded-2xl">
                                        <h3 className="font-marcellus text-3xl text-[#1D0E22] text-center uppercase tracking-widest">Cenník – Obočie</h3>
                                        <div className="space-y-4 font-montserrat text-[#1D0E22]">
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-end gap-4">
                                                    <h5 className="font-marcellus text-lg uppercase tracking-wider">Konzultácia & predkreslenie</h5>
                                                    <span className="font-bold text-lg whitespace-nowrap">Zdarma</span>
                                                </div>
                                                <p className="text-sm opacity-80 italic">20 minút</p>
                                                <p className="text-sm">Individuálna analýza tváre, návrh tvaru a výber najvhodnejšej techniky.</p>
                                            </div>
                                            <div className="border-b border-gold/10 w-24 mx-auto" />
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-end gap-4">
                                                    <h5 className="font-marcellus text-lg uppercase tracking-wider">Hyperrealistické obočie – Hair Stroke</h5>
                                                    <span className="font-bold text-lg whitespace-nowrap">400 €</span>
                                                </div>
                                                <p className="text-sm opacity-80 italic">Hlavná procedúra | 3 – 3,5 hodiny</p>
                                                <p className="text-sm">Vysoko precízna chĺpková technika najvyššej úrovne, vytvárajúca ilúziu prirodzeného rastu obočia.</p>
                                            </div>
                                            <div className="border-b border-gold/10 w-24 mx-auto" />
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-end gap-4">
                                                    <h5 className="font-marcellus text-lg uppercase tracking-wider">Púdrové obočie</h5>
                                                    <span className="font-bold text-lg whitespace-nowrap">320 €</span>
                                                </div>
                                                <p className="text-sm opacity-80 italic">Hybridné alebo minerálne pigmenty</p>
                                                <p className="text-sm opacity-80 italic">Hlavná procedúra | 2,5 – 3 hodiny</p>
                                                <p className="text-sm">Mäkké, vrstvené tieňovanie bez ostrých kontúr. Obočie pôsobí upravene, elegantne a nadčasovo.</p>
                                            </div>
                                            <div className="border-b border-gold/10 w-24 mx-auto" />
                                            <div className="space-y-4">
                                                <h5 className="font-marcellus text-lg uppercase tracking-wider">Korekcie</h5>
                                                <div className="space-y-4 pl-4 border-l-2 border-gold/20">
                                                    <div className="space-y-1">
                                                        <div className="flex justify-between items-end gap-4">
                                                            <span className="font-bold text-sm">Prvá korekcia</span>
                                                            <span className="font-bold whitespace-nowrap">120 €</span>
                                                        </div>
                                                        <p className="text-sm opacity-70">45 minút – 2 hodiny</p>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <div className="flex justify-between items-end gap-4">
                                                            <span className="font-bold text-sm">Druhá korekcia</span>
                                                            <span className="font-bold whitespace-nowrap">Zdarma</span>
                                                        </div>
                                                        <p className="text-sm opacity-70">15 – 30 minút</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ContactForm />
                                </div>
                            </div>

                            <StickyCennikButton />
                        </div>
                    </div>
                </div>

                {/* Desktop Right Sub-Sidebar */}
                <PmuSubSidebar variant="desktop" />
            </div>

            <Lightbox
                isOpen={lightbox.isOpen}
                images={lightbox.images}
                currentIndex={lightbox.index}
                onClose={() => setLightbox(prev => ({ ...prev, isOpen: false }))}
                onNext={nextImage}
                onPrev={prevImage}
            />
        </>
    );
}
