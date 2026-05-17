"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo({ src }: { src: string }) {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const v = ref.current;
        return () => {
            if (!v) return;
            v.pause();
            v.removeAttribute("src");
            v.load();
        };
    }, []);

    return (
        <video
            ref={ref}
            src={src}
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover scale-[1.01]"
        />
    );
}
