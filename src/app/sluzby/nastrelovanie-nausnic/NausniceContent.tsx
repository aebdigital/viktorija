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

    const handleVideoLightboxKey = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") closeVideoLightbox();
    }, []);

    useEffect(() => {
        if (videoLightbox.isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleVideoLightboxKey);
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleVideoLightboxKey);
        };
    }, [videoLightbox.isOpen, handleVideoLightboxKey]);

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

            <div className="font-montserrat font-light text-[#1D0E22] leading-snug text-lg">
                <div className="space-y-8">

                    {/* ═══ Estetické sebavedomie ═══ */}
                    <div className="space-y-2">
                        <h3 className="font-marcellus text-3xl text-[#1D0E22] uppercase">Nastreľovanie náušníc</h3>
                        <p className="text-xl italic text-[#1D0E22]/80">
                            Estetické sebavedomie je formou sebavyjadrenia.
                        </p>
                        <p>
                            Ucho sa stalo novou plochou pre šperkársky dizajn. Žena si skladá šperky ako kompozíciu. Viacero jemných dierok pôsobí sofistikovanejšie než jeden dominantný šperk – menej objemu, viac detailu.
                        </p>
                        <p>
                            Zdobenie viacerými dierkami je moderné, pretože spája architektúru, identitu a flexibilitu. Ucho má líniu, body a proporcie. Žena si vytvára vlastný podpis. Môže kombinovať, meniť, vrstviť.
                        </p>
                        <p>
                            Asymetria pôsobí moderne, detail ucha je fotogenický. Pri nastreľovaní vždy volím taký uhol, aby náušnice smerovali tam, kam smeruje pohľad – aby kompozícia ladila s tvárou ako celkom.
                        </p>
                    </div>

                    {/* ═══ Od bábätiek po slečny ═══ */}
                    <div className="space-y-2">
                        <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider">Nastreľovanie náušníc – od bábätiek po slečny</h4>
                        <p className="text-sm italic text-[#1D0E22]/60">Píšem z viac ako 20-ročného pozorovania vo svojej praxi.</p>
                        <p>
                            Pri nastreľovaní náušníc bábätkám je veľmi dôležitá pohoda mamy. Je to malý rituál – prijatie ženskosti. Ak sa mama teší na svoju dcérku s náušnicami, dieťa cíti pokoj.
                        </p>
                        <p>
                            U dospievajúcich dievčat je to iný moment. Je to rituál prechodu – z dievčaťa na slečnu.
                        </p>
                        <p>
                            Samotné nastreľovanie je krátky a spravidla príjemný proces. Pri analýze a dezinfekcii uška robím jemnú masáž. Nájdeme esteticky pekné miesto a označím ho bodkou. Značky musia byť symetrické. Mama alebo slečna majú vždy priestor miesto schváliť alebo pripomienkovať – musí sa páčiť nám všetkým.
                        </p>
                        <p>
                            Následne náušnice nastrelím.
                        </p>
                        <p>
                            Klienti si môžu vybrať z dvoch typov pištolí. Jedna je rýchlejšia a je počuť jemné &ldquo;kliknutie&rdquo;. Druhá je tichá – bábätko pocíti len drobný vpich a často ani nestihne zareagovať.
                        </p>
                        <p>
                            U adolescentiek býva reakcia podobná: prídu bledé a vystrašené, no po nastrelení sa pozrú do zrkadla a povedia: &ldquo;To až tak nebolelo.&rdquo; Odchádzajú usmiate a spokojné.
                        </p>
                        <p>
                            Čo sa týka akupunktúrnych bodov, v estetických miestach sa spravidla nenachádzajú. Niekoľkokrát sa stalo, že maminky dali uško označiť akupunkturistovi – a značky boli presne v miestach, ktoré sú vizuálne harmonické.
                        </p>
                        <p>
                            Náušnice sú vyrobené z chirurgickej ocele najvyššej kvality. Sú sterilné a hermeticky balené. Majú precízne tvarovaný hrot, ktorý uško šetrne prepichne.
                        </p>
                        <p>
                            K dispozícii je viacero modelov, z ktorých si môžete vybrať podľa vlastného štýlu.
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
                                    <span className="font-bold whitespace-nowrap">3,50 €</span>
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
        </div>
    );
}
