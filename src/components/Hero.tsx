"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { PlayIcon, PauseIcon } from "lucide-react";

const IMAGES = ["/vik1.jpg", "/vik2.jpg", "/vik3.jpg", "/vik4.jpg"];

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, -100]); // 10% parallax move up

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
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
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Slideshow */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    style={{ y }}
                    initial={{ opacity: 0, scale: 1.25 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${IMAGES[index]})` }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Overlays */}
            <div className="absolute inset-0 z-1 bg-black/30" /> {/* General dim */}
            <div className="absolute inset-0 z-1 bg-gradient-to-r from-black/80 via-black/40 to-transparent w-3/4" /> {/* Left Shadow */}

            {/* Content */}
            <div className="relative z-10 w-[95vw] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full pt-20">

                {/* Left: Text */}
                <div className="space-y-6 max-w-2xl">
                    <h1 className="font-saol text-5xl md:text-7xl lg:text-8xl leading-none text-white drop-shadow-2xl tracking-wide">
                        <span className="block mb-2">Kozmetický salón</span>
                        <span className="text-gold-gradient italic">Viktorija Kendra</span>
                    </h1>
                    <p className="font-montserrat text-lg md:text-xl text-gray-200 font-light max-w-lg leading-relaxed border-l-2 border-gold pl-6">
                        Permanent make-up artistka a školiteľka.
                        Špecialistka na laserové odstraňovanie a prirodzenú krásu.
                    </p>
                    <div className="pt-4">
                        <button className="px-8 py-3 bg-gold text-main-bg font-marcellus font-bold tracking-widest hover:bg-white transition-colors duration-300">
                            REZERVÁCIA
                        </button>
                    </div>
                </div>

                {/* Right: Video */}
                <div className="hidden lg:flex justify-end items-center">
                    <div className="relative w-[300px] md:w-[400px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
                        <video
                            ref={videoRef}
                            src="/viktoria hero section vid.mp4"
                            autoPlay
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                        {/* Play/Pause Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button
                                onClick={togglePlay}
                                className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                            >
                                {isPlaying ? <PauseIcon size={24} fill="currentColor" /> : <PlayIcon size={24} fill="currentColor" />}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
