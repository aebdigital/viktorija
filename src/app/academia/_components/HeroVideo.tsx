"use client";

import { useEffect, useState, useRef } from "react";
import { PlayIcon, PauseIcon } from "lucide-react";

export default function HeroVideo({ src }: { src: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        return () => {
            v.pause();
        };
    }, []);

    return (
        <>
            <video
                ref={videoRef}
                src={src}
                autoPlay
                loop
                playsInline
                preload="auto"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="absolute inset-0 w-full h-full object-cover scale-[1.01]"
            />

            {/* Play/Pause control - visible when paused, fades out when playing (re-appears on hover) */}
            <div
                className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
                    isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
            >
                <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-md border-2 border-white/70 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 pointer-events-auto shadow-2xl"
                >
                    {isPlaying ? <PauseIcon size={28} fill="currentColor" /> : <PlayIcon size={28} fill="currentColor" className="ml-1" />}
                </button>
            </div>
        </>
    );
}
