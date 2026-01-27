"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PlayIcon, PauseIcon } from "lucide-react";

// Data from Services
const SERVICES = [
    {
        title: "PERMANENTNÝ MAKE-UP",
        image: "/sluzby/permanent.jpg",
    },
    {
        title: "ODSTRAŇOVANIE PMU",
        image: "/sluzby/odstranenie.jpeg",
    },
    {
        title: "NASTREĽOVANIE NÁUŠNÍC",
        image: "/sluzby/nastrelovanie.webp",
    },
    {
        title: "KOZMETIKA & STAROSTLIVOSŤ",
        image: "/sluzby/kozmetika.webp",
    },
    {
        title: "KRÉMY a SÉRA",
        image: "/sluzby/kremy.webp",
    },
];

const ACADEMIA_ITEMS = [
    "Akreditovaný profesionálny kurz permanentného make-up",
    "Tri techniky púdrového obočia",
    "Hyperrealistické obočie",
    "3 najmodernejšie techniky PMU pier",
    "Očné linky",
    "Nastreľovanie náušníc",
    "Laser touch"
];

const ACHIEVEMENTS = [
    "V beauty sfére pôsobím od roku 2001.",
    "Vyškolila som 250+ študentiek a študentov.",
    "Kurz Permanentný make-up je akreditovaný a moja akadémia je certifikovaná vzdelávacia organizácia.",
    "Špecializujem sa na laserové odstraňovanie nežiaducich výsledkov permanentného make-upu.",
    "Som autorkou vlastných techník a metodiky výučby.",
    "Vytvorila som tri učebnice: Permanentný make-up, Pigmenty a Odstraňovanie removerom.",
    "Prednášala som na Kozmetickom kongrese 2024.",
    "Účastníčka medzinárodných PMU súťaží (2. – 8. miesto).",
    "Neustále sa odborne vzdelávam (SR, Poľsko, Česko, Taliansko, Rusko, Ukrajina).",
    "Pravidelne sa venujem osobnému rozvoju a komunikačným tréningom."
];

export default function Hero() {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Cursor Follower Logic
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [hoveredServiceImage, setHoveredServiceImage] = useState<string | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

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
        <section className="bg-main-bg min-h-screen w-full relative pt-32 pb-20 px-2 md:px-4 overflow-hidden">
            {/* Red Background is handled by bg-main-bg class (#3f1827) */}

            {/* Cursor Follower Image */}
            <AnimatePresence>
                {hoveredServiceImage && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: cursorPos.x + 5,
                            y: cursorPos.y + 5
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 150, damping: 15 }}
                        className="fixed top-0 left-0 z-50 w-64 h-40 rounded-lg overflow-hidden border-2 border-gold shadow-2xl pointer-events-none"
                    >
                        <Image
                            src={hoveredServiceImage}
                            alt="Service Preview"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="w-[98vw] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-4 items-start relative z-10">

                {/* LEFT COLUMN: Studio Services */}
                <div id="sluzby" className="rounded-xl border border-white/10 p-8 h-[90vh] flex flex-col items-center justify-center text-center relative overflow-hidden group">
                    {/* Background Image */}
                    <div className="absolute inset-0 transition-transform duration-700 md:group-hover:scale-110">
                        <Image
                            src="/vik2.jpg"
                            alt="Studio Services Background"
                            fill
                            className="object-cover opacity-60"
                        />
                    </div>
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/70 md:group-hover:bg-black/60 transition-colors duration-500" />

                    <h2 className="font-alex text-6xl md:text-7xl text-gold tracking-widest mb-12 transform -rotate-2 relative z-10 w-full text-center">
                        Štúdio
                    </h2>

                    <div className="space-y-6 w-full max-w-md bg-black/40 p-6 rounded-lg backdrop-blur-sm border border-white/5 relative z-10">
                        {SERVICES.map((service, idx) => (
                            <Link
                                href="/sluzby"
                                key={idx}
                                onMouseEnter={() => setHoveredServiceImage(service.image)}
                                onMouseLeave={() => setHoveredServiceImage(null)}
                                className="cursor-pointer group/item block"
                            >
                                <h3 className="font-marcellus text-xl text-white transition-colors duration-300 group-hover/item:text-gold border-b border-transparent group-hover/item:border-gold inline-block pb-1">
                                    {service.title}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* CENTER COLUMN: Video & About Text */}
                <div className="flex flex-col items-center space-y-6">
                    {/* Video */}
                    <div className="relative w-full max-w-[350px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
                        <video
                            ref={videoRef}
                            src="/viktoria hero section vid.mp4"
                            autoPlay
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button
                                onClick={togglePlay}
                                className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                            >
                                {isPlaying ? <PauseIcon size={24} fill="currentColor" /> : <PlayIcon size={24} fill="currentColor" />}
                            </button>
                        </div>
                    </div>

                    {/* About Text (Centered) - FULL Text */}
                    <div id="omne" className="text-center max-w-4xl space-y-8 bg-black/20 p-8 rounded-xl backdrop-blur-sm border border-white/5 w-full">
                        <h2 className="font-alex text-5xl md:text-6xl text-gold mb-2 transform -rotate-2">
                            Viktorija Kendra
                        </h2>
                        <p className="font-montserrat text-gold-light text-lg font-light tracking-wide uppercase">
                            Permanent make-up artistka a školiteľka
                        </p>

                        <div className="h-px w-20 bg-gold/50 mx-auto my-6" />

                        <div className="font-montserrat text-white/90 text-sm md:text-base font-light leading-relaxed space-y-4 text-left pl-4">
                            {ACHIEVEMENTS.map((item, i) => (
                                <p key={i} className="flex gap-2">
                                    <span className="text-gold min-w-[10px]">•</span>
                                    <span>{item}</span>
                                </p>
                            ))}
                        </div>
                        <div className="pt-6 text-center">
                            <p className="font-alex text-5xl text-gold transform -rotate-2 inline-block">
                                Viktorija
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Academia (from Services.tsx) */}
                <div id="academy" className="group relative w-full h-[90vh] overflow-hidden rounded-xl border border-white/10 cursor-pointer">
                    {/* Background Image */}
                    <div className="absolute inset-0 transition-transform duration-700 md:group-hover:scale-110">
                        <Image
                            src="/vik2.jpg"
                            alt="Academia Background"
                            fill
                            className="object-cover opacity-60"
                        />
                    </div>

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/70 md:group-hover:bg-black/60 transition-colors duration-500" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                        <h3 className="font-alex text-6xl md:text-7xl text-gold mb-8 transform -rotate-2">
                            Academia
                        </h3>

                        <div className="space-y-6 w-full max-w-md bg-black/40 p-6 rounded-lg backdrop-blur-sm border border-white/5 relative z-10 flex flex-col items-center">
                            {ACADEMIA_ITEMS.map((item, i) => (
                                <div
                                    key={i}
                                    className="cursor-pointer group/item text-center"
                                >
                                    <h3 className="font-marcellus text-xl text-white uppercase transition-colors duration-300 group-hover/item:text-gold border-b border-transparent group-hover/item:border-gold inline-block pb-1">
                                        {item}
                                    </h3>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>

            </div>
        </section>
    );
}
