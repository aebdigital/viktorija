"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MAIN_SERVICES = [
    { id: "pmu", label: "Permanentný Make-up", href: "/sluzby/permanentny-makeup", image: "/pery/PHOTO-2026-02-10-14-41-10.jpg", position: "center center" },
    { id: "removal", label: "Odstraňovanie PMU", href: "/sluzby/odstranovanie-pmu", image: "/sluzby/odstranenie.jpeg", position: "center 75%" },
    { id: "piercing", label: "Nastreľovanie náušníc", href: "/sluzby/nastrelovanie-nausnic", image: "/nastrelovanie/e38dda3c-d932-43cb-8f1d-3b15663e716d.JPG", position: "center 35%" },
    { id: "cosmetics", label: "Rituály tváre", href: "/sluzby/kozmetika", image: "/sluzby/kozmetika.webp", position: "center center" },
    { id: "creams", label: "Skincare routine", href: "/sluzby/kremy-sera", image: "/sluzby/kozmetika.webp", position: "center center" }
];

export default function ServicesSidebar() {
    const pathname = usePathname();
    const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);

    const isActive = (service: typeof MAIN_SERVICES[number]) => {
        if (service.id === "pmu") {
            return pathname.startsWith("/sluzby/permanentny-makeup");
        }
        return pathname === service.href;
    };

    const activeService = MAIN_SERVICES.find(s => isActive(s)) || MAIN_SERVICES[0];

    return (
        <>
            {/* MOBILE NAVIGATION: Custom Dropdown */}
            <div className="lg:hidden flex flex-col gap-4 mb-8">
                <div className="relative">
                    <label className="text-[#1D0E22] text-xs uppercase tracking-widest mb-2 block font-marcellus">Kategória</label>
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={() => setIsMainDropdownOpen(!isMainDropdownOpen)}
                            className="relative h-16 w-full overflow-hidden rounded-xl border border-gold shadow-sm group"
                        >
                            <div className="absolute inset-0">
                                <Image
                                    src={activeService.image}
                                    alt="Active Category"
                                    fill
                                    className="object-cover"
                                    style={{ objectPosition: activeService.position }}
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="relative z-10 px-6 flex items-center justify-between w-full h-full">
                                <span className="font-marcellus uppercase tracking-widest text-white">
                                    {activeService.label}
                                </span>
                                <svg
                                    className={`w-5 h-5 text-gold transition-transform duration-300 ${isMainDropdownOpen ? "rotate-180" : ""}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>

                        <AnimatePresence>
                            {isMainDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-full left-0 right-0 z-[40] mt-2 flex flex-col gap-2 p-2 bg-main-bg border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl"
                                >
                                    {MAIN_SERVICES.filter(s => !isActive(s)).map((service) => (
                                        <Link
                                            key={service.id}
                                            href={service.href}
                                            onClick={() => setIsMainDropdownOpen(false)}
                                            className="relative h-14 w-full overflow-hidden rounded-lg group block"
                                        >
                                            <div className="absolute inset-0">
                                                <Image
                                                    src={service.image}
                                                    alt={service.label}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                    style={{ objectPosition: service.position }}
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
                                            <div className="relative z-10 px-4 flex items-center h-full">
                                                <span className="font-marcellus uppercase tracking-widest text-sm text-white/90 group-hover:text-white transition-colors">
                                                    {service.label}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* DESKTOP NAVIGATION: Left Side */}
            <div className="hidden lg:flex flex-col gap-4 sticky top-32">
                {MAIN_SERVICES.map((service) => (
                    <Link
                        key={service.id}
                        href={service.href}
                        className={`group relative h-16 md:h-20 w-full overflow-hidden rounded-xl border transition-all duration-300 block ${isActive(service)
                            ? "border-gold shadow-[0_0_15px_rgba(182,141,87,0.3)] scale-[1.02]"
                            : "border-white/10 hover:border-gold/50 opacity-70 hover:opacity-100"
                            }`}
                    >
                        <div className="absolute inset-0">
                            {service.image && (
                                <Image
                                    src={service.image}
                                    alt={service.label}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    style={{ objectPosition: service.position }}
                                />
                            )}
                        </div>
                        <div className={`absolute inset-0 transition-colors duration-300 ${isActive(service) ? "bg-black/40" : "bg-black/60 group-hover:bg-black/50"
                            }`} />
                        <div className="absolute inset-0 flex items-center justify-center p-2">
                            <span className={`font-marcellus text-sm md:text-base uppercase tracking-widest text-center transition-colors duration-300 ${isActive(service) ? "text-gold" : "text-white"
                                }`}>
                                {service.label}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
