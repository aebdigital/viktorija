"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "@/components/Lightbox";
import ContactForm from "../_components/ContactForm";
import StickyCennikButton from "../_components/StickyCennikButton";

const HERO_VIDEOS = [
    "https://pub-60b685024baf4def829d5151d4dc320a.r2.dev/nausnice3.mp4",
    "https://pub-60b685024baf4def829d5151d4dc320a.r2.dev/nausnice.mp4",
    "https://pub-60b685024baf4def829d5151d4dc320a.r2.dev/IMG_1800.mp4",
];

const DETI_IMAGES = [
    "/sluzby/nastrelovanie-nausnic/1.jpg",
    "/sluzby/nastrelovanie-nausnic/2.jpg",
    "/sluzby/nastrelovanie-nausnic/3.jpg",
    "/sluzby/nastrelovanie-nausnic/4.jpg",
    "/sluzby/nastrelovanie-nausnic/5.jpg",
    "/sluzby/nastrelovanie-nausnic/6.jpg",
    "/sluzby/nastrelovanie-nausnic/7.jpg",
    "/sluzby/nastrelovanie-nausnic/8.jpg",
];

const DOSPELI_IMAGES = [
    "/sluzby/nastrelovanie-nausnic/9.jpg",
    "/sluzby/nastrelovanie-nausnic/10.jpg",
    "/sluzby/nastrelovanie-nausnic/11.jpg",
    "/sluzby/nastrelovanie-nausnic/12.jpg",
    "/sluzby/nastrelovanie-nausnic/13.jpg",
    "/sluzby/nastrelovanie-nausnic/14.jpg",
    "/sluzby/nastrelovanie-nausnic/15.jpg",
    "/sluzby/nastrelovanie-nausnic/16.jpg",
    "/sluzby/nastrelovanie-nausnic/17.jpg",
    "/sluzby/nastrelovanie-nausnic/18.jpg",
    "/sluzby/nastrelovanie-nausnic/19.jpg",
    "/sluzby/nastrelovanie-nausnic/20.jpg",
    "/sluzby/nastrelovanie-nausnic/21.jpg",
    "/sluzby/nastrelovanie-nausnic/22.jpg",
    "/sluzby/nastrelovanie-nausnic/23.jpg",
    "/sluzby/nastrelovanie-nausnic/24.jpg",
];

export default function NausniceContent() {
    const [lightbox, setLightbox] = useState<{
        isOpen: boolean;
        images: string[];
        index: number;
    }>({
        isOpen: false,
        images: [],
        index: 0,
    });

    const [videoLightbox, setVideoLightbox] = useState<{ isOpen: boolean; src: string }>({ isOpen: false, src: "" });
    const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
    const [isEnvelopeHovered, setIsEnvelopeHovered] = useState(false);
    const videoLightboxRef = useRef<HTMLVideoElement>(null);

    const openVideoLightbox = (src: string) => {
        setVideoLightbox({ isOpen: true, src });
        setTimeout(() => {
            if (videoLightboxRef.current) {
                // First video (nausnice3) is loud, keep it quiet
                videoLightboxRef.current.volume = src === HERO_VIDEOS[0] ? 0.05 : 0.5;
            }
        }, 50);
    };

    const closeVideoLightbox = () => {
        setVideoLightbox({ isOpen: false, src: "" });
    };

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            closeVideoLightbox();
            setIsInfoPopupOpen(false);
        }
    }, []);

    useEffect(() => {
        if (videoLightbox.isOpen || isInfoPopupOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [videoLightbox.isOpen, isInfoPopupOpen, handleKeyDown]);

    const openLightbox = (images: string[], index: number) => {
        setLightbox({ isOpen: true, images, index });
    };

    const nextImage = () => {
        setLightbox(prev => ({
            ...prev,
            index: (prev.index + 1) % prev.images.length,
        }));
    };

    const prevImage = () => {
        setLightbox(prev => ({
            ...prev,
            index: (prev.index - 1 + prev.images.length) % prev.images.length,
        }));
    };

    return (
        <div className="flex flex-col gap-8">
            <div className="grid grid-cols-3 gap-3 w-full">
                {HERO_VIDEOS.map((src, idx) => (
                    <div key={idx} className="relative h-[200px] md:h-[500px] rounded-xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer" onClick={() => openVideoLightbox(src)}>
                        <video
                            src={src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            <div className="font-montserrat font-light text-[#1D0E22] leading-tight text-lg [&_p]:my-0 [&_ul]:my-0">
                <div className="space-y-6">

                    {/* ═══ Úvod ═══ */}
                    <div className="space-y-1">
                        <h3 className="font-marcellus text-3xl text-[#1D0E22] uppercase">Nastreľovanie náušníc</h3>
                        <p>
                            Náušnice sú často prvým jemným detailom, ktorým žena alebo dieťa vyjadruje svoju osobnosť, štýl a estetické cítenie.
                        </p>
                        <p>
                            Aj preto vnímam nastreľovanie náušníc nie len ako technický úkon, ale ako malý estetický rituál, pri ktorom je dôležitá presnosť, pokoj a citlivý prístup.
                        </p>
                        <p>
                            Pri nastreľovaní používam profesionálny systém značky <strong>STUDEX</strong>. K dispozícii mám dva typy aplikačných pištolí:
                        </p>
                        <ul className="space-y-1 pl-1">
                            <li className="flex gap-1.5"><span className="text-gold text-lg leading-none">✦</span><span>veľmi tichý systém, ktorý odporúčam najmä pre malé dievčatká a citlivejšie klientky,</span></li>
                            <li className="flex gap-1.5"><span className="text-gold text-lg leading-none">✦</span><span>dynamickejší systém s rýchlou aplikáciou.</span></li>
                        </ul>
                        <p>
                            Používané náušnice sú vyrobené z chirurgickej ocele implantátovej kvality <strong>316LVM</strong>, ktorá sa vyznačuje vysokou čistotou materiálu a veľmi dobrou znášanlivosťou pokožkou.
                        </p>
                    </div>

                    {/* ═══ Priebeh procedúry ═══ */}
                    <div className="space-y-1">
                        <div className="flex justify-center w-full py-4 overflow-visible">
                            <button
                                onClick={() => setIsInfoPopupOpen(true)}
                                onMouseEnter={() => setIsEnvelopeHovered(true)}
                                onMouseLeave={() => setIsEnvelopeHovered(false)}
                                className="group relative w-44 h-24 sm:w-48 sm:h-28 bg-[#EEE3CE] rounded-lg border border-[#1D0E22]/15 flex items-center justify-center cursor-pointer focus:outline-none shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-visible select-none"
                            >
                                <svg 
                                    className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" 
                                    fill="none" 
                                    viewBox="0 0 100 60" 
                                    preserveAspectRatio="none"
                                >
                                    {/* Top Flap (Animated) */}
                                    <motion.path 
                                        animate={{
                                            d: isEnvelopeHovered ? "M 0 0 L 50 -20 L 100 0" : "M 0 0 L 50 32 L 100 0"
                                        }}
                                        transition={{ duration: 0.35, ease: "easeInOut" }}
                                        stroke="#1D0E22" 
                                        strokeWidth="1" 
                                        strokeOpacity="0.3"
                                        fill="#EEE3CE"
                                        fillOpacity="0.75"
                                    />
                                </svg>
                                
                                <motion.div 
                                    className="relative z-10 flex flex-col items-center gap-1 text-center px-4"
                                    animate={{
                                        y: isEnvelopeHovered ? -8 : 4
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <span className="font-marcellus text-xs sm:text-sm uppercase tracking-widest text-[#1D0E22] font-semibold">
                                        List pre rodičov
                                    </span>
                                    {/* Mini letter arrow indicator */}
                                    <motion.span 
                                        className="text-[9px] text-[#1D0E22]/60 uppercase tracking-widest flex items-center gap-1 font-montserrat font-medium"
                                        animate={{ opacity: isEnvelopeHovered ? 1 : 0 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        Otvoriť →
                                    </motion.span>
                                </motion.div>
                            </button>
                        </div>
                        <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider pb-1 border-b border-[#1D0E22]/10 mb-1 pt-4">
                            Priebeh procedúry
                        </h4>
                        <p>
                            Každému klientovi venujem individuálnu pozornosť a dostatok času, aby celý proces prebehol pokojne, komfortne a s dôrazom na estetický výsledok.
                        </p>
                        <p>Procedúra zahŕňa:</p>
                        <ul className="space-y-1 pl-1">
                            <li className="flex gap-1.5"><span className="text-gold text-lg leading-none">✦</span><span>konzultáciu a výber náušníc,</span></li>
                            <li className="flex gap-1.5"><span className="text-gold text-lg leading-none">✦</span><span>analýzu tvaru a anatómie uška,</span></li>
                            <li className="flex gap-1.5"><span className="text-gold text-lg leading-none">✦</span><span>dezinfekciu,</span></li>
                            <li className="flex gap-1.5"><span className="text-gold text-lg leading-none">✦</span><span>presné zakreslenie miesta vpichu,</span></li>
                            <li className="flex gap-1.5"><span className="text-gold text-lg leading-none">✦</span><span>odsúhlasenie umiestnenia klientkou alebo rodičom,</span></li>
                            <li className="flex gap-1.5"><span className="text-gold text-lg leading-none">✦</span><span>samotné prepichnutie uší,</span></li>
                            <li className="flex gap-1.5"><span className="text-gold text-lg leading-none">✦</span><span>záverečnú dezinfekciu a odporúčania k starostlivosti.</span></li>
                        </ul>
                        <p>
                            Dôležitou súčasťou mojej práce je aj estetika umiestnenia náušníc — aby pôsobili harmonicky, symetricky a prirodzene vzhľadom na tvar ucha a tvár.
                        </p>
                        <p>
                            Na jednu procedúru si vyhradzujem približne 30 minút, aby celý proces prebehol bez stresu, s dôrazom na hygienu, komfort a precízny výsledok.
                        </p>
                    </div>

                    {/* ═══ Domáca starostlivosť ═══ */}
                    <div className="space-y-1">
                        <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider">Domáca starostlivosť</h4>
                        <p>
                            Správna starostlivosť po nastrelení náušníc je dôležitou súčasťou hojenia a ovplyvňuje komfort aj výsledný stav prepichnutého miesta.
                        </p>

                        <h5 className="font-marcellus text-lg text-[#1D0E22] uppercase tracking-wider pt-2">Odporúčania po procedúre</h5>
                        <ul className="space-y-1 pl-1">
                            <li className="flex gap-1.5"><span className="text-gold text-lg leading-none">✦</span><span>V deň procedúry neodporúčam umývanie vlasov.</span></li>
                            <li className="flex gap-1.5"><span className="text-gold text-lg leading-none">✦</span>
                                <div>
                                    <span>Náušnice počas hojenia nevyťahujte:</span>
                                    <ul className="space-y-1 pl-4 pt-1">
                                        <li className="flex gap-1.5"><span className="text-gold/60 text-lg leading-none">—</span><span>klasické prepichnutie minimálne 6 týždňov,</span></li>
                                        <li className="flex gap-1.5"><span className="text-gold/60 text-lg leading-none">—</span><span>pri helixe a chrupavke minimálne 9 týždňov, často aj dlhšie podľa hojenia.</span></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <p>
                            Počas celej doby hojenia odporúčam miesto ráno a večer dezinfikovať z prednej aj zadnej strany. Vhodný je napríklad <strong>60 % lieh</strong>, <strong>Dettol</strong> alebo <strong>Softa-Man/Softasept</strong>.
                        </p>
                        <p>
                            Počas prvých dvoch týždňov môžete dezinfekciu aplikovať aj 3–4× denne, aby sa čerstvé miesto hojilo pokojne a čisto.
                        </p>

                        <h5 className="font-marcellus text-lg text-[#1D0E22] uppercase tracking-wider pt-2">Čomu sa počas hojenia vyhnúť</h5>
                        <ul className="space-y-1 pl-1">
                            <li className="flex gap-1.5"><span className="text-gold text-lg leading-none">✦</span><span>bazén odporúčam vynechať približne 5 dní,</span></li>
                            <li className="flex gap-1.5"><span className="text-gold text-lg leading-none">✦</span><span>kúpanie v jazerách a prírodných vodách približne 1 mesiac.</span></li>
                        </ul>

                        <h5 className="font-marcellus text-lg text-[#1D0E22] uppercase tracking-wider pt-2">Výmena náušníc</h5>
                        <p>
                            Po uplynutí odporúčanej doby je možné náušnice jemným, ale pevným potiahnutím otvoriť a vybrať. Pred výmenou odporúčam:
                        </p>
                        <ul className="space-y-1 pl-1">
                            <li className="flex gap-1.5"><span className="text-gold text-lg leading-none">✦</span><span>vydezinfikovať uško,</span></li>
                            <li className="flex gap-1.5"><span className="text-gold text-lg leading-none">✦</span><span>očistiť a vydezinfikovať náušnice.</span></li>
                        </ul>
                        <p>
                            Ak je miesto zahojené, bez bolesti a citlivosti, môžete začať nosiť iné náušnice. Ak je uško ešte citlivé alebo potrebuje viac času na hojenie, odporúčam dočasne ponechať pôvodné nastreľovacie náušnice.
                        </p>
                        <p>
                            Používaný materiál je bezpečný a vhodný aj na dlhodobé nosenie.
                        </p>
                    </div>

                    {/* ═══ Galéria – Deti ═══ */}
                    <div className="pt-8 border-t border-black/5">
                        <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider mb-6">Deti</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {DETI_IMAGES.map((src, idx) => (
                                <div
                                    key={idx}
                                    className="relative aspect-square rounded-lg overflow-hidden border border-black/10 shadow-sm cursor-pointer"
                                    onClick={() => openLightbox(DETI_IMAGES, idx)}
                                >
                                    <Image
                                        src={src}
                                        alt={`Nastreľovanie náušníc – deti ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ═══ Galéria – Dospelí ═══ */}
                    <div className="pt-8 border-t border-black/5">
                        <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider mb-6">Dospelí</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {DOSPELI_IMAGES.map((src, idx) => (
                                <div
                                    key={idx}
                                    className="relative aspect-square rounded-lg overflow-hidden border border-black/10 shadow-sm cursor-pointer"
                                    onClick={() => openLightbox(DOSPELI_IMAGES, idx)}
                                >
                                    <Image
                                        src={src}
                                        alt={`Nastreľovanie náušníc – dospelí ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══ Cenník + Contact Form ═══ */}
            <div id="nausnice-prices" className="pt-16 border-t-2 border-gold/20 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-10 bg-white/30 p-8 rounded-2xl">
                        <div className="text-center space-y-2 mb-8">
                            <h3 className="font-marcellus text-3xl text-[#1D0E22] uppercase tracking-widest">Nastreľovanie náušníc</h3>
                            <p className="font-montserrat text-sm text-[#1D0E22]/60 uppercase tracking-widest">Precíznosť, bezpečnosť a estetika v harmonickom spojení</p>
                        </div>

                        <div className="space-y-8 font-montserrat text-[#1D0E22]">
                            {/* Profesionálne služby */}
                            <div className="space-y-4">
                                <h4 className="font-marcellus text-lg uppercase tracking-wider border-b border-gold/10 pb-1">Profesionálne služby</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="space-y-1">
                                            <p className="font-medium">Klasické nastreľovanie uší</p>
                                            <p className="text-xs opacity-70">Dve dierky vrátane páru univerzálnych náušníc</p>
                                        </div>
                                        <span className="font-bold text-lg whitespace-nowrap">68 €</span>
                                    </div>
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="space-y-1">
                                            <p className="font-medium">Nastrelenie jednej dierky</p>
                                            <p className="text-xs opacity-70">Vrátane páru náušníc</p>
                                        </div>
                                        <span className="font-bold text-lg whitespace-nowrap">44 €</span>
                                    </div>
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="space-y-1">
                                            <p className="font-medium">Nastrelenie jednej dierky</p>
                                            <p className="text-xs opacity-70">Bez náušníc</p>
                                        </div>
                                        <span className="font-bold text-lg whitespace-nowrap">24 €</span>
                                    </div>
                                    <div className="flex justify-between items-start gap-4">
                                        <p className="font-medium text-sm">Každá ďalšia dierka od tretej</p>
                                        <span className="font-bold whitespace-nowrap">18 €</span>
                                    </div>
                                    <div className="flex justify-between items-start gap-4">
                                        <p className="font-medium text-sm">Ošetrenie zarastených dierok / nasadenie náušníc</p>
                                        <span className="font-bold whitespace-nowrap">12 €</span>
                                    </div>
                                </div>
                            </div>

                            {/* Výber náušníc */}
                            <div className="space-y-4">
                                <h4 className="font-marcellus text-lg uppercase tracking-wider border-b border-gold/10 pb-1">Výber náušníc</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start gap-4">
                                        <p className="font-medium text-sm">Univerzálne nastreľovacie náušnice – pár</p>
                                        <span className="font-bold whitespace-nowrap">20 €</span>
                                    </div>
                                    <div className="flex justify-between items-start gap-4">
                                        <p className="font-medium text-sm">Dizajnové náušnice od šperkárskych značiek – pár</p>
                                        <span className="font-bold whitespace-nowrap">36 €</span>
                                    </div>
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="space-y-1">
                                            <p className="font-medium">Baby Box</p>
                                            <p className="text-xs opacity-70 italic leading-relaxed">Odporúčaný pri nastreľovaní bábätkám (jemný, krátky a tenký hrot pre maximálny komfort)</p>
                                        </div>
                                        <span className="font-bold text-lg whitespace-nowrap">52 €</span>
                                    </div>
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="space-y-1">
                                            <p className="font-medium">Luxusné šperkové nastreľovacie náušnice</p>
                                            <p className="text-xs opacity-70">Rhódium / 14-karátové zlato / zirkón</p>
                                        </div>
                                        <span className="font-bold text-lg whitespace-nowrap">100 €</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hygiena a starostlivosť */}
                            <div className="space-y-4">
                                <h4 className="font-marcellus text-lg uppercase tracking-wider border-b border-gold/10 pb-1">Hygiena a starostlivosť</h4>
                                <div className="flex justify-between items-center gap-4">
                                    <p className="font-medium text-sm">Dezinfekcia (6 g)</p>
                                    <span className="font-bold whitespace-nowrap">4 €</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </div>

            <StickyCennikButton />

            <Lightbox
                isOpen={lightbox.isOpen}
                images={lightbox.images}
                currentIndex={lightbox.index}
                onClose={() => setLightbox(prev => ({ ...prev, isOpen: false }))}
                onNext={nextImage}
                onPrev={prevImage}
            />

            {/* Video Lightbox */}
            <AnimatePresence>
                {videoLightbox.isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl"
                        onClick={closeVideoLightbox}
                    >
                        <button
                            onClick={closeVideoLightbox}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
                            aria-label="Close"
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div
                            className="relative w-full max-w-3xl mx-auto p-4 md:p-12"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            >
                                <video
                                    ref={videoLightboxRef}
                                    src={videoLightbox.src}
                                    controls
                                    autoPlay
                                    playsInline
                                    className="w-full max-h-[90vh] rounded-xl"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Info Popup for Parents */}
            <AnimatePresence>
                {isInfoPopupOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsInfoPopupOpen(false)}
                        className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 md:p-6 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", duration: 0.4 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#EEE3CE] border border-white/20 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative p-8 md:p-10 text-[#1D0E22] flex flex-col gap-6"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsInfoPopupOpen(false)}
                                className="absolute top-4 right-4 md:top-6 md:right-6 text-[#1D0E22]/60 hover:text-[#1D0E22] transition-colors p-1 cursor-pointer"
                                aria-label="Zatvoriť"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Popup Content */}
                            <div className="space-y-4 font-montserrat font-light text-base leading-relaxed md:text-lg">
                                <p className="font-semibold text-lg md:text-xl">Milé maminky, tatinkovia a babičky,</p>
                                
                                <p>
                                    nastreľovanie náušníc nie je bolestivá procedúra.
                                    <br />
                                    Áno, samotný moment vpichu môže byť na sekundu mierne nepríjemný, no trvá naozaj len veľmi krátko.
                                </p>
                                
                                <p>
                                    Pracujem s tichým systémom nastreľovania, ktorý je pre deti jemnejší a komfortnejší. Moderné technológie dnes posunuli nastreľovanie náušníc na úplne inú úroveň než kedysi.
                                </p>
                                
                                <p>
                                    Celý proces vnímam ako radostný a skrášľujúci moment — malý slávnostný krok k vlastnému štýlu a sebavyjadreniu dieťaťa.
                                </p>
                                
                                <p>
                                    Deti veľmi citlivo vnímajú emócie rodičov. Keď prichádzajú rodiny pokojné, usmiate a v príjemnom očakávaní, celý proces prebieha ľahšie, krajšie a s lepším zážitkom pre všetkých.
                                </p>
                                
                                <p>
                                    Náušnice nastreľujem viac ako 25 rokov a viem, že deti často zvládnu procedúru oveľa lepšie, než si dospelí predstavujú.
                                </p>
                                
                                <p className="font-medium">
                                    Dôverujte svojim deťom, že to zvládnu.
                                    <br />
                                    A dôverujte aj mne — celým procesom vás prevediem čo najjemnejšie, pokojne a empaticky.
                                </p>
                            </div>

                            {/* Signature */}
                            <div className="border-t border-[#1D0E22]/15 pt-6 flex flex-col items-end shrink-0">
                                <span className="font-montserrat text-xs uppercase tracking-widest text-[#1D0E22]/60">S úctou,</span>
                                <span className="!font-alex text-4xl md:text-5xl text-[#1D0E22] mt-2 block tracking-wide">
                                    Viktorija Kendra
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
