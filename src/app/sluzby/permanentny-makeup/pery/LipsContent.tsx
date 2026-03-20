"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "@/components/Lightbox";
import PmuSubSidebar from "../../_components/PmuSubSidebar";
import ContactForm from "../../_components/ContactForm";
import StickyCennikButton from "../../_components/StickyCennikButton";

export default function LipsContent() {
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

    const detailImage = "/pery/PHOTO-2026-02-10-14-41-10.jpg";

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
                    <div
                        className="relative h-[300px] md:h-[500px] w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
                        onClick={() => openLightbox([detailImage], 0)}
                    >
                        <Image
                            src={detailImage}
                            alt="Permanentný make-up pier"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="font-montserrat font-light text-[#1D0E22] leading-snug text-lg">
                        <div className="space-y-8">
                            <h3 className="font-marcellus text-3xl text-[#1D0E22] mb-4">Permanentný make-up pier</h3>

                            <div className="space-y-2">
                                <p>
                                    Pery patria medzi najjemnejšie a najcitlivejšie oblasti tváre. Práve preto pracujem výhradne s prémiovými pigmentmi Swiss Color Lip Pigments, ktoré sú známe svojou zamatovou, bohatou konzistenciou a vysokou kvalitou.
                                </p>
                                <p>
                                    Pigmenty sa do pokožky vstrebávajú ľahko a rovnomerne, čo umožňuje presnú a kontrolovanú aplikáciu farby. Výsledok pôsobí mäkko a elegantne. Vďaka miešaniu, vrstveniu a práci s intenzitou odtieňov vytváram jemné kontúrovacie a tieňovacie techniky, ako sú aqua efekt, ombré, pixelové, púdrové či perleťové pery.
                                </p>
                            </div>

                            <div className="pt-4 space-y-2">
                                <p className="font-medium">Permanentný make-up pier je vhodný pre ženy, ktoré:</p>
                                <ul className="space-y-0">
                                    <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>chcú mať upravený vzhľad bez každodenného líčenia,</span></li>
                                    <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>absolvujú výplne pier, pri ktorých pery získajú objem, no strácajú formu a farebnosť,</span></li>
                                    <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>vnímajú, že s vekom pery blednú, chladnú do fialových tónov a strácajú jasné kontúry.</span></li>
                                </ul>
                            </div>

                            {/* 3 Clickable Technique Boxes */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                                {[
                                    { id: "section-viktorija-lips", label: "Viktorija Lips", image: "/viktoria=lips.JPG" },
                                    { id: "section-korejske-pery", label: "Kórejské pery", image: "/korejske=pery.JPG" },
                                    { id: "section-obnova-kontury", label: "Obnova kontúry pier", image: "/obnova-kontury%20pier.JPG" },
                                ].map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth' })}
                                        className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
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

                            <div className="space-y-0">
                                {/* ═══ SECTION 1: Viktorija Lips ═══ */}
                                <div id="section-viktorija-lips" className="space-y-2 scroll-mt-32">
                                    <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider">Viktorija Lips</h4>
                                    <p>
                                        Autorská technika navrhnutá pre maximálne jemný a sofistikovaný efekt. Permanentný make-up pôsobí ako druhá pokožka – nový odtieň skrášľuje pery bez viditeľného zásahu. Výsledok je elegantný, ženský a nadčasový.
                                    </p>
                                </div>

                                {/* ═══ SECTION 2: Kórejské pery ═══ */}
                                <div id="section-korejske-pery" className="space-y-2 pt-4 scroll-mt-32">
                                    <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider">Kórejské pery</h4>
                                    <p className="text-sm italic text-[#1D0E22]/70">efekt jemne „pokusaných" pier</p>
                                    <p>
                                        Moderná technika, pri ktorej je stred pier výraznejší a farba sa smerom k okrajom postupne stráca. Bez ostrej kontúry, s mäkkým prechodom. Výsledok pôsobí sviežo, mladistvo a veľmi žensky.
                                    </p>
                                </div>

                                {/* ═══ SECTION 3: Obnova kontúry pier ═══ */}
                                <div id="section-obnova-kontury" className="space-y-2 pt-4 scroll-mt-32">
                                    <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider">Obnova kontúry pier</h4>
                                    <p>
                                        Ideálna voľba pri stratenej alebo rozmazanej kontúre pier. Pery získajú jasne definovaný tvar, harmonicky prepojené kútiky a jemne vykreslený stred („srdiečko"). Technika obnovuje proporcie pier a navracia im upravený, elegantný vzhľad.
                                    </p>
                                </div>
                            </div>

                            {/* Photo Gallery */}
                            <div className="pt-8">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        "/pery/758e49a4-60f9-4b31-a5be-6dcb08c63042.JPG",
                                        "/pery/fa06826f-aae7-4505-94ba-b24755bc17f5.JPG",
                                        "/pery/a01b64c0-6bc7-4823-aa30-5ca802a5770f.JPG",
                                        "/pery/488b4480-092a-4317-b3e5-b8e58268b951.JPG",
                                        "/pery/8d1dd94f-375a-4755-98c3-8ffea44447f4.JPG",
                                        "/pery/c4e6a02b-907d-4d2e-af03-d33025c0b805.JPG",
                                        "/pery/new1.JPG",
                                        "/pery/new2.JPG",
                                        "/pery/94af66ed-792a-4773-8474-275978715eba.JPG",
                                        "/pery/d74aa6fc-b43b-4d2e-8c50-4b184c6b25ad.JPG",
                                        "/pery/pernew.JPG",
                                        "/Laser/a71e61dc-42b3-4b2e-a9fd-23644b665060.JPG",
                                    ].map((src, idx, arr) => (
                                        <div
                                            key={idx}
                                            className={`relative rounded-lg overflow-hidden border border-black/10 shadow-sm transition-all duration-500 hover:scale-[1.02] cursor-pointer ${idx === arr.length - 1 ? 'aspect-[4/5] md:col-span-1' : idx >= 9 ? 'aspect-[4/3.6]' : 'aspect-[4/3]'
                                                }`}
                                            onClick={() => openLightbox(arr, idx)}
                                        >
                                            <Image
                                                src={src}
                                                alt={`Pery ${idx + 1}`}
                                                fill
                                                className={`object-cover ${src.includes("c4e6a02b") ? "object-[center_40%]" : ""}`}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Cenník + Contact Form */}
                            <div id="pmu-lips-prices" className="pt-16 border-t-2 border-gold/20 mt-16">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div className="space-y-10 bg-white/30 p-8 rounded-2xl">
                                        <h3 className="font-marcellus text-3xl text-[#1D0E22] text-center uppercase tracking-widest">Cenník – Pery</h3>
                                        <div className="space-y-4 font-montserrat text-[#1D0E22]">
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-end gap-4">
                                                    <h5 className="font-marcellus text-lg uppercase tracking-wider">Konzultácia & predkreslenie</h5>
                                                    <span className="font-bold text-lg whitespace-nowrap">50 €</span>
                                                </div>
                                                <p className="text-sm opacity-80 italic">cca 30 minút</p>
                                                <p className="text-sm">Analýza pier, predkreslenie budúcej formy a výber vhodného odtieňa.</p>
                                                <p className="text-xs italic opacity-60">Pri objednaní na procedúru sa suma odpočíta z celkovej ceny.</p>
                                            </div>
                                            <div className="border-b border-gold/10 w-24 mx-auto" />
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-end gap-4">
                                                    <h5 className="font-marcellus text-lg uppercase tracking-wider">Hlavná procedúra</h5>
                                                    <span className="font-bold text-lg whitespace-nowrap">380 €</span>
                                                </div>
                                                <p className="text-sm opacity-80 italic">3 – 3,5 hodiny</p>
                                                <p className="text-sm">Rekonštrukcia a predkreslenie tvaru pier, miešanie individuálne zvoleného odtieňa, aplikácia permanentného make-upu.</p>
                                            </div>
                                            <div className="border-b border-gold/10 w-24 mx-auto" />
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-end gap-4">
                                                    <h5 className="font-marcellus text-lg uppercase tracking-wider">Korekcia po 4–6 týždňoch</h5>
                                                    <span className="font-bold text-lg whitespace-nowrap">120 €</span>
                                                </div>
                                                <p className="text-sm opacity-80 italic">30 min – 1,5 hodiny</p>
                                                <p className="text-sm">Doladenie farby, tvaru a intenzity podľa hojenia.</p>
                                            </div>
                                            <div className="border-b border-gold/10 w-24 mx-auto" />
                                            <div className="space-y-4">
                                                <h5 className="font-marcellus text-lg uppercase tracking-wider">Druhá korekcia</h5>
                                                <div className="space-y-2 pl-4 border-l-2 border-gold/20">
                                                    <div className="flex justify-between items-end gap-4">
                                                        <span className="text-sm">drobná úprava do 15 minút</span>
                                                        <span className="font-bold whitespace-nowrap">Bezplatne</span>
                                                    </div>
                                                    <div className="flex justify-between items-end gap-4">
                                                        <span className="text-sm">väčší zásah</span>
                                                        <span className="font-bold whitespace-nowrap">120 €</span>
                                                    </div>
                                                </div>
                                                <p className="text-xs italic opacity-60">Korekcia umožňuje finálne doladenie výsledku po zahojení.</p>
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
