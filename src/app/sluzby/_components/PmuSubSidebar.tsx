"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const PMU_SUBTABS = [
    { label: "Obočie", href: "/sluzby/permanentny-makeup/obocie", image: "/permanent-obocie/m4.jpg", position: "70% center" },
    { label: "Pery", href: "/sluzby/permanentny-makeup/pery", image: "/pery/PHOTO-2026-02-10-14-41-10.jpg" },
    { label: "Očné linky", href: "/sluzby/permanentny-makeup/ocne-linky", image: "/PMU-linky/PHOTO-2026-02-10-10-17-17.jpg", position: "40% center" },
    { label: "Dermopigmentácia", href: "/sluzby/permanentny-makeup/dermopigmentacia", image: "/dermopigmentacia.webp", position: "right center" }
];

export default function PmuSubSidebar({ variant = "both" }: { variant?: "mobile" | "desktop" | "both" }) {
    const pathname = usePathname();

    return (
        <>
            {/* Mobile: Back button + subtab pills */}
            {(variant === "mobile" || variant === "both") && (
                <div className="xl:hidden flex flex-col gap-2 mb-4">
                    <Link
                        href="/sluzby/permanentny-makeup"
                        className="flex items-center gap-2 text-[#1D0E22] text-sm uppercase tracking-widest mb-2 font-marcellus hover:text-gold transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        Späť na prehľad
                    </Link>
                    <label className="text-[#1D0E22] text-xs uppercase tracking-widest mb-1 block font-marcellus">Služba</label>
                    <div className="flex flex-wrap gap-2">
                        {PMU_SUBTABS.map((sub) => (
                            <Link
                                key={sub.href}
                                href={sub.href}
                                className={`px-4 py-2 rounded-lg border text-sm uppercase tracking-wider transition-all ${pathname === sub.href
                                    ? "border-gold bg-gold text-[#1D0E22] font-bold"
                                    : "border-white/20 text-white opacity-60 hover:opacity-100"
                                    }`}
                            >
                                {sub.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Desktop: Right side column */}
            {(variant === "desktop" || variant === "both") && (
                <div className="hidden xl:flex w-[200px] flex-col gap-4 flex-shrink-0 pt-0 sticky top-32 h-fit">
                    {PMU_SUBTABS.map((sub) => (
                        <Link
                            key={sub.href}
                            href={sub.href}
                            className={`group relative h-16 md:h-20 overflow-hidden rounded-lg border transition-all duration-300 block ${pathname === sub.href
                                ? "border-gold shadow-md"
                                : "border-white/20 hover:border-gold/50 opacity-80"
                                }`}
                        >
                            <div className="absolute inset-0">
                                <Image
                                    src={sub.image}
                                    alt={sub.label}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    style={sub.position ? { objectPosition: sub.position } : undefined}
                                />
                            </div>
                            <div className={`absolute inset-0 transition-colors duration-300 ${pathname === sub.href ? "bg-black/20" : "bg-black/60 group-hover:bg-black/40"
                                }`} />
                            <div className="absolute inset-0 flex items-center justify-center p-2 text-center">
                                <span className={`font-marcellus text-sm font-bold uppercase tracking-wider ${pathname === sub.href ? "text-gold" : "text-white"
                                    }`}>
                                    {sub.label}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}
