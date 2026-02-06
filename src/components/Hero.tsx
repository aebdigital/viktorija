"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PlayIcon, PauseIcon } from "lucide-react";
import { PlayCircle } from "lucide-react";

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



const ACHIEVEMENTS = [
    "Vyškolila som 250+ študentiek a študentov.",
    "Vytvorila som tri učebnice: Permanentný make-up, Pigmenty a Odstraňovanie removerom.",
    'V roku 2024 som prednášala na Kozmetickom kongrese: „Od nuly k expertovi: Permanentný make-up ako vaša nová profesia".',
    "V rokoch 2020 – 2024 som sa zúčastnila viacerých medzinárodných PMU súťaží (umiestnenia: 2. – 8. miesto).",
    "Neustále sa odborne vzdelávam; absolvovala som školenia na Slovensku aj v zahraničí (Poľsko, Česko, Taliansko, Rusko, Ukrajina)."
];

export default function Hero() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoStarted, setVideoStarted] = useState(false);
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
        <section className="min-h-screen w-full relative pt-16 md:pt-32 pb-20 px-2 md:px-4 overflow-hidden">
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
                        className="fixed top-0 left-0 z-50 w-64 h-40 rounded-lg overflow-hidden border-2 border-[#EEE3CE] shadow-2xl pointer-events-none"
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

            <div className="w-full lg:w-[98vw] mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-4 items-start relative z-10">

                {/* LEFT COLUMN: Studio Services */}
                <div id="sluzby" className="border border-white/10 p-8 h-[70vh] md:h-[90vh] flex flex-col items-center justify-start pt-12 md:pt-48 text-center relative overflow-hidden group">
                    {/* Background Image */}
                    <div className="absolute inset-0 transition-transform duration-700 md:group-hover:scale-110">
                        <Image
                            src="/IMG_1401.JPG"
                            alt="Studio Services Background"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Dark Overlay - Pure black */}
                    <div className="absolute inset-0 bg-black/60 md:group-hover:bg-black/50 transition-colors duration-500" />

                    <h2 className="font-alex text-6xl md:text-7xl text-[#EEE3CE] tracking-widest mb-16 relative z-10 w-full text-center uppercase">
                        Štúdio
                    </h2>

                    <div className="space-y-6 w-full max-w-md p-6 relative z-10">
                        {SERVICES.map((service, idx) => (
                            <Link
                                href="/sluzby"
                                key={idx}
                                onMouseEnter={() => setHoveredServiceImage(service.image)}
                                onMouseLeave={() => setHoveredServiceImage(null)}
                                className="cursor-pointer group/item block"
                            >
                                <h3 className="font-marcellus text-xl text-[#EEE3CE] transition-colors duration-300 group-hover/item:text-white inline-block pb-1">
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
                        {/* Video element - hidden until started */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: videoStarted ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <video
                                ref={videoRef}
                                src="/viktoria hero section vid.mp4"
                                loop
                                playsInline
                                muted
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Poster Image - shown until video starts */}
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
                                    {/* Play Icon Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors duration-300">
                                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/60 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                                            <PlayCircle size={48} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Play/Pause control - only shows when video is playing */}
                        {videoStarted && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                    onClick={togglePlay}
                                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    {isPlaying ? <PauseIcon size={24} fill="currentColor" /> : <PlayIcon size={24} fill="currentColor" />}
                                </button>
                            </div>
                        )}
                    </div>

                    {/* About Text (Centered) - FULL Text */}
                    <div id="omne" className="text-center max-w-4xl space-y-8 p-8 w-full">
                        <h2 className="!font-alex text-5xl md:text-6xl text-[#1D0E22] mb-2">
                            Viktorija Kendra
                        </h2>
                        <p className="font-montserrat text-[#1D0E22]/80 text-lg font-light tracking-wide uppercase">
                            Permanent make-up artistka, kozmetička a školiteľka od roku 2001
                        </p>

                        <div className="h-px w-20 bg-[#1D0E22]/30 mx-auto my-6" />

                        <div className="font-montserrat text-[#1D0E22]/90 text-sm md:text-base font-light leading-relaxed space-y-4 text-center">
                            {ACHIEVEMENTS.map((item, i) => (
                                <p key={i}>
                                    <span className="text-[#1D0E22]">•</span> {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Academia (from Services.tsx) */}
                <div id="academy" className="group relative w-full h-[50vh] md:h-[90vh] overflow-hidden border border-white/10 cursor-pointer">
                    {/* Background Image */}
                    <div className="absolute inset-0 transition-transform duration-700 md:group-hover:scale-110">
                        <Image
                            src="/vik2.jpg"
                            alt="Academy Background"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Dark Overlay - Pure black */}
                    <div className="absolute inset-0 bg-black/60 md:group-hover:bg-black/50 transition-colors duration-500" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 md:pt-48 p-8 text-center z-10">
                        <h3 className="font-alex text-6xl md:text-7xl text-[#EEE3CE] mb-16 uppercase">
                            ACADEMY
                        </h3>

                        <div className="w-full max-w-md relative z-10 flex flex-col items-center">
                            <h4 className="font-marcellus text-xl text-[#EEE3CE] uppercase tracking-[0.15em] leading-relaxed">
                                CERTIFIKOVANÉ KURZY PERMANENTNÉHO MAKE-UPU
                            </h4>
                        </div>


                    </div>
                </div>

            </div>
        </section>
    );
}
