"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MAIN_SERVICES = [
    { id: "pmu", label: "Permanentný Make-up", href: "/sluzby/permanentny-makeup", image: "/sluzby/PHOTO-2026-02-10-14-41-10.jpg", position: "center center" },
    { id: "removal", label: "Odstraňovanie PMU", href: "/sluzby/odstranovanie-pmu", image: "/sluzby/odstranenie.jpeg", position: "center 75%" },
    { id: "piercing", label: "Nastreľovanie náušníc", href: "/sluzby/nastrelovanie-nausnic", image: "/sluzby/e38dda3c-d932-43cb-8f1d-3b15663e716d.JPG", position: "center 35%" },
    { id: "cosmetics", label: "Beauty therapy", href: "/sluzby/kozmetika", image: "/sluzby/kozmetika.webp", position: "center center" },
    { id: "creams", label: "Skincare routine", href: "/sluzby/kremy-sera", image: "/sluzby/kremy-sera/serum-sidebar.jpg", position: "center 45%" }
];

export default function ServicesSidebar() {
    const pathname = usePathname();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const isActive = (service: typeof MAIN_SERVICES[number]) => {
        if (service.id === "pmu") {
            return pathname.startsWith("/sluzby/permanentny-makeup");
        }
        return pathname === service.href;
    };

    const activeService = MAIN_SERVICES.find(s => isActive(s)) || MAIN_SERVICES[0];

    // Disable body scroll when drawer is open
    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isDrawerOpen]);

    return (
        <>
            {/* MOBILE NAVIGATION: Trigger Button & Right-Side Drawer */}
            <div className="lg:hidden flex flex-col gap-2 mb-8">
                <label className="text-[#1D0E22] text-xs uppercase tracking-widest mb-1 block font-marcellus">Vybraná kategória</label>
                <button
                    onClick={() => setIsDrawerOpen(true)}
                    className="group relative h-28 w-full overflow-hidden rounded-xl border text-left border-gold shadow-[0_0_15px_rgba(182,141,87,0.3)] block focus:outline-none"
                >
                    <div className="absolute inset-0">
                        {activeService.image && (
                            <Image
                                src={activeService.image}
                                alt={activeService.label}
                                fill
                                className="object-cover"
                                style={{ objectPosition: activeService.position }}
                            />
                        )}
                    </div>
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex items-center justify-start px-6 pr-14">
                        <span className="font-marcellus text-sm uppercase tracking-widest text-gold truncate">
                            {activeService.label}
                        </span>
                    </div>
                    {/* Dropdown Indicator Icon */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-gold/25 border border-gold/40 rounded-full p-1.5 text-gold z-10">
                        <ChevronDown size={16} />
                    </div>
                </button>
            </div>

            {/* Mobile Drawer Slide-out Menu */}
            <AnimatePresence>
                {isDrawerOpen && (
                    <>
                        {/* Backdrop overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsDrawerOpen(false)}
                            className="fixed inset-0 bg-black/60 z-[9999] backdrop-blur-sm"
                        />

                        {/* Drawer body */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
                            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#1D0E22] border-l border-white/10 z-[10000] shadow-2xl flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
                                <span className="font-marcellus text-sm uppercase tracking-widest text-[#EEE3CE]">Vyberte kategóriu</span>
                                <button
                                    onClick={() => setIsDrawerOpen(false)}
                                    className="text-white/60 hover:text-white transition-colors p-1"
                                    aria-label="Zatvoriť menu"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Scrollable list of categories */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                {MAIN_SERVICES.map((service) => (
                                    <Link
                                        key={service.id}
                                        href={service.href}
                                        onClick={() => setIsDrawerOpen(false)}
                                        className={`group relative h-16 w-full overflow-hidden rounded-xl border transition-all duration-300 block ${
                                            isActive(service)
                                                ? "border-gold shadow-[0_0_12px_rgba(182,141,87,0.3)] scale-[1.02]"
                                                : "border-white/10 opacity-70 hover:opacity-100"
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
                                        <div className={`absolute inset-0 transition-colors duration-300 ${
                                            isActive(service) ? "bg-black/40" : "bg-black/60 group-hover:bg-black/50"
                                        }`} />
                                        <div className="absolute inset-0 flex items-center justify-center p-2">
                                            <span className={`font-marcellus text-xs uppercase tracking-widest text-center transition-colors duration-300 ${
                                                isActive(service) ? "text-gold" : "text-white"
                                            }`}>
                                                {service.label}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

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
