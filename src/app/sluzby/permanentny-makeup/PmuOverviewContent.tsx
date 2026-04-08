"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, PlayIcon, PauseIcon } from "lucide-react";

const PMU_SUBTABS = [
    { label: "Obočie", href: "/sluzby/permanentny-makeup/obocie", image: "/permanent-obocie/m4.jpg", position: "70% center" },
    { label: "Pery", href: "/sluzby/permanentny-makeup/pery", image: "/pery/PHOTO-2026-02-10-14-41-10.jpg" },
    { label: "Očné linky", href: "/sluzby/permanentny-makeup/ocne-linky", image: "/PMU-linky/PHOTO-2026-02-10-10-17-17.jpg", position: "40% center" },
    { label: "Dermopigmentácia", href: "/sluzby/permanentny-makeup/dermopigmentacia", image: "/dermopigmentacia.webp", position: "65% center" }
];

export default function PmuOverviewContent() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoStarted, setVideoStarted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const startVideo = () => {
        if (!videoRef.current) return;
        setVideoStarted(true);
        videoRef.current.play();
        setIsPlaying(true);
    };

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="space-y-12">
            {/* Service & Video Grid on Top */}
            <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {PMU_SUBTABS.map((sub) => (
                        <Link
                            key={sub.label}
                            href={sub.href}
                            className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] block"
                        >
                            <div className="absolute inset-0">
                                <Image
                                    src={sub.image}
                                    alt={sub.label}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    style={sub.position ? { objectPosition: sub.position } : undefined}
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-colors duration-300" />
                            <div className="absolute inset-0 flex items-end justify-center p-4 md:p-6">
                                <span className="relative font-marcellus text-sm md:text-lg uppercase tracking-widest text-white group-hover:text-gold transition-colors duration-300 text-center after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-current after:origin-left after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                                    {sub.label}
                                </span>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>

            {/* Text Content Area (Single Column now) */}
            <div className="font-montserrat font-light text-[#1D0E22] leading-snug text-base space-y-8 max-w-4xl">
                <h3 className="font-marcellus text-3xl md:text-4xl text-[#1D0E22] uppercase tracking-wider">Permanentný Make-up</h3>
                <p className="text-lg font-normal italic text-[#1D0E22]/80">
                    Priebeh procedúry: hlavné sedenie, korekcia a kontrolná návšteva
                </p>
                <p>
                    Permanentný make-up je odborná estetická procedúra, ktorá prebieha v etapách. Každý krok má svoj význam – od návrhu tvaru, cez precízne prevedenie, až po stabilizáciu pigmentu počas hojenia. Cieľom je prirodzene krásny a harmonický výsledok, ktorý rešpektuje anatómiu tváre aj vaše želania.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8 items-start">
                    <div className="space-y-2">
                        <h4 className="font-marcellus text-xl text-[#1D0E22] uppercase tracking-wider">1) Hlavná procedúra (1. sedenie)</h4>
                        <p>
                            Na hlavnom sedení vytváram precízny predkres tvaru (obočie, pery alebo očné linky). Spoločne komunikujeme, hodnotíme proporcie tváre a volíme riešenie, ktoré vás skrášli a bude harmonizovať s vašimi črtami tváre a prirodzenou mimikou.
                        </p>
                        <p className="font-medium mt-4">Súčasťou sedenia je:</p>
                        <ul className="space-y-3 mt-2">
                            <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>analýza tváre a prirodzených línií,</span></li>
                            <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>predkreslenie tvaru a jeho odsúhlasenie,</span></li>
                            <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>konzultácia odtieňa pigmentu, jeho intenzity a voľba techniky (prirodzenejší vs. výraznejší efekt),</span></li>
                            <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>samotná aplikácia pigmentu.</span></li>
                        </ul>
                        <p className="mt-4">Na hlavné sedenie odporúčam vyhradiť približne 3 hodiny.</p>
                        <p className="mt-4">
                            Po zákroku budete pôsobiť výraznejšia, no stále prirodzene upravená. Pri procedúrach pier sa môže objaviť mierny opuch, ktorý zvyčajne postupne ustúpi približne do 5 hodín. Vo väčšine prípadov môžete fungovať bežne a spoločensky – stačí dodržať menšie odporúčania podľa pokynov po procedúre.
                        </p>
                    </div>

                    {/* Video */}
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-white/10 group">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: videoStarted ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <video
                                ref={videoRef}
                                src="/be8d349d-d9c7-43a3-90c7-43512efb1731.MP4"
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        <AnimatePresence>
                            {!videoStarted && (
                                <motion.div
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 cursor-pointer"
                                    onClick={startVideo}
                                >
                                    <Image
                                        src="/IMG_1422.JPG"
                                        alt="Video Preview"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors duration-300">
                                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/60 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                                            <PlayCircle className="w-8 h-8" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {videoStarted && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                    onClick={togglePlay}
                                    className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    {isPlaying ? <PauseIcon size={20} fill="currentColor" /> : <PlayIcon size={20} fill="currentColor" />}
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <h4 className="font-marcellus text-xl text-[#1D0E22] uppercase tracking-wider">2) Korekcia (2. sedenie – dokončenie práce)</h4>
                    <p>
                        Po prvom sedení prebieha hojenie a stabilizácia pigmentu. Keďže pokožka reaguje individuálne, je prirodzené, že sa pigment môže zahojiť miestami jemnejšie alebo nerovnomerne. Preto je štandardnou súčasťou permanentného make-upu korekcia, na ktorej výsledok profesionálne dotiahneme.
                    </p>
                    <p className="mt-4">Korekciu odporúčam zvyčajne po 4–8 týždňoch (podľa typu pleti a priebehu hojenia). Na korekcii:</p>
                    <ul className="space-y-3 mt-2">
                        <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>doplníme miesta, kde sa pigment zahojil svetlejšie,</span></li>
                        <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>doladíme intenzitu alebo gradient,</span></li>
                        <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>vyrovnáme drobné asymetrie a dotiahneme detail.</span></li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <h4 className="font-marcellus text-xl text-[#1D0E22] uppercase tracking-wider">3) Kontrolná návšteva po korekcii</h4>
                    <p className="text-sm italic text-[#1D0E22]/70">(kvalitatívna kontrola)</p>
                    <p>
                        Po korekcii klientky v mojej praxi pozývam ešte na krátku kontrolnú návštevu, aby sme spolu overili, že výsledok je stabilný a ideálny:
                    </p>
                    <ul className="space-y-3 mt-2">
                        <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>či sa pigment zahojil rovnomerne,</span></li>
                        <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>či nikde nevznikli drobné „výpadky",</span></li>
                        <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>či ste s výsledkom spokojná aj v dennom svetle a pri bežnom fungovaní.</span></li>
                    </ul>
                    <p className="mt-4">
                        Ak je potrebné drobné technické doladenie (napríklad malé doplnenie detailu alebo jemné zjemnenie prechodu), vykonávam ho bezplatne v rámci mini úpravy v rozsahu približne do 15 minút práce. Celkový čas tejto návštevy spravidla nepresahuje 20 minút.
                    </p>
                    <p className="mt-4 text-sm italic text-[#1D0E22]/70 border-l-2 border-gold/30 pl-4">
                        Poznámka k rozsahu: bezplatná mini úprava je určená výhradne na drobné korekčné detaily. Ak by bolo potrebné výraznejšie doplnenie alebo prepracovanie, rieši sa to ako samostatné sedenie podľa aktuálneho cenníka.
                    </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-black/5">
                    <h4 className="font-marcellus text-xl text-[#1D0E22] uppercase tracking-wider">Domáca starostlivosť a odporúčania</h4>
                    <p>
                        Po každej procedúre dostanete v salóne presné odporúčania pre domácu starostlivosť. Dodržiavanie aftercare výrazne ovplyvňuje kvalitu zahojenia aj trvácnosť výsledku.
                    </p>
                </div>
            </div>
        </div>
    );
}
