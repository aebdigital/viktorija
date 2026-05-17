"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

// Note: metadata is exported from layout or a server wrapper if needed

const PRODUCTS = [
    { name: "Sérum", video: "https://pub-60b685024baf4def829d5151d4dc320a.r2.dev/serum.mp4" },
    { name: "Produkt", image: "/sluzby/kremy-sera/prod1.jpg" },
    { name: "Produkt", image: "/sluzby/kremy-sera/prod2.jpg" },
    { name: "Produkt", image: "/sluzby/kremy-sera/prod3.jpg" },
    { name: "Produkt", image: "/sluzby/kremy-sera/prod4.jpg" },
    { name: "Produkt", image: "/sluzby/kremy-sera/prod5.jpg" },
    { name: "Produkt", image: "/sluzby/kremy-sera/prod6.jpg" },
    { name: "Produkt", image: "/sluzby/kremy-sera/prod7.jpg" },
    { name: "Produkt", image: "/sluzby/kremy-sera/prod8.jpg" },
    { name: "Produkt", image: "/sluzby/kremy-sera/prod9.jpg" },
    { name: "Produkt", image: "/sluzby/kremy-sera/10.jpg" },
    { name: "Produkt", image: "/sluzby/kremy-sera/11.jpg" },
];

export default function CreamsPage() {
    const [videoLightbox, setVideoLightbox] = useState<{ isOpen: boolean; src: string }>({ isOpen: false, src: "" });
    const videoLightboxRef = useRef<HTMLVideoElement>(null);

    const openVideoLightbox = (src: string) => {
        setVideoLightbox({ isOpen: true, src });
        setTimeout(() => {
            if (videoLightboxRef.current) {
                videoLightboxRef.current.volume = 0.5;
            }
        }, 50);
    };

    const closeVideoLightbox = () => setVideoLightbox({ isOpen: false, src: "" });

    const handleKey = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") closeVideoLightbox();
    }, []);

    useEffect(() => {
        if (videoLightbox.isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKey);
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKey);
        };
    }, [videoLightbox.isOpen, handleKey]);

    return (
        <div className="flex flex-col gap-10">

            {/* Top: shop.mp4 + serum.mp4 side by side */}
            <div className="flex flex-col md:flex-row gap-4">
                <div
                    className="flex-1 rounded-xl overflow-hidden border border-white/10 shadow-lg cursor-pointer relative group"
                    style={{ height: "420px" }}
                    onClick={() => openVideoLightbox("https://pub-60b685024baf4def829d5151d4dc320a.r2.dev/shop.mp4")}
                >
                    <video src="https://pub-60b685024baf4def829d5151d4dc320a.r2.dev/shop.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center text-white">
                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                    </div>
                </div>
                <div
                    className="flex-1 rounded-xl overflow-hidden border border-white/10 shadow-lg cursor-pointer relative group"
                    style={{ height: "420px" }}
                    onClick={() => openVideoLightbox("https://pub-60b685024baf4def829d5151d4dc320a.r2.dev/serum.mp4")}
                >
                    <video src="https://pub-60b685024baf4def829d5151d4dc320a.r2.dev/serum.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center text-white">
                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Moje odporúčané produkty */}
            <div className="space-y-4">
                <div className="space-y-2">
                    <h3 className="font-marcellus text-4xl text-[#1D0E22] uppercase">Moje odporúčané produkty</h3>
                    <p className="font-montserrat text-base font-light text-[#1D0E22]/75 max-w-2xl">
                        Produkty, ktoré odporúčam svojim klientkám — vybrané pre ich výsledky, kvalitu zloženia a dlhodobý efekt na pleť.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {PRODUCTS.map((product, i) => (
                        <div
                            key={i}
                            className="group relative aspect-square rounded-xl overflow-hidden border border-white/10 shadow-md bg-white/5 cursor-pointer"
                            onClick={() => product.video && openVideoLightbox(product.video)}
                        >
                            {product.video ? (
                                <>
                                    <video src={product.video} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center text-white">
                                            <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                        </div>
                                    </div>
                                </>
                            ) : product.image ? (
                                <Image src={product.image} alt={product.name} fill className="object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full border border-white/20" />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                            <div className="absolute bottom-0 left-0 right-0 p-3 pointer-events-none">
                                <p className="font-marcellus text-xs uppercase tracking-wider text-white">{product.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Moja rutina */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-3 font-montserrat font-light text-[#1D0E22]">
                    <h3 className="font-marcellus text-4xl text-[#1D0E22] uppercase">Moja rutina</h3>
                    <p className="text-base text-[#1D0E22]/75">
                        Každý deň začínam s produktmi, ktorým verím — overenými rokmi praxe aj osobným používaním. Starostlivosť o pleť nie je luxus, je to investícia, ktorá sa vždy vráti.
                    </p>
                </div>
                <div
                    className="w-full md:w-[480px] shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-lg cursor-pointer relative group"
                    onClick={() => openVideoLightbox("https://pub-60b685024baf4def829d5151d4dc320a.r2.dev/moja_rutina.mp4")}
                >
                    <video src="https://pub-60b685024baf4def829d5151d4dc320a.r2.dev/moja_rutina.mp4" autoPlay muted loop playsInline className="w-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center text-white">
                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                    </div>
                </div>
            </div>

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
                        <div className="relative w-full max-w-3xl mx-auto p-4 md:p-12" onClick={(e) => e.stopPropagation()}>
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
