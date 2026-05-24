"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Course = {
    label: string;
    href: string;
    image?: string;
    video?: string;
    position?: string;
};

const COURSES: Course[] = [
    { label: "The Art of PMU", href: "/academia/the-art-of-pmu", image: "/academia/kurz1/preview.PNG", position: "center 40%" },
    { label: "Tri Techniky Obočia", href: "/academia/tri-techniky-obocia", image: "/academia/kurz4/preview.PNG" },
    { label: "Hyperrealistické Obočie", href: "/academia/hyperrealisticke-obocie", image: "/academia/kurz5/preview.PNG" },
    { label: "Laser Touch", href: "/academia/laser-touch", image: "/academia/kurz6/lasertouch_preview.PNG" },
    { label: "PMU Očných Liniek", href: "/academia/pmu-ocnych-liniek", image: "/academia/kurz3/linky_preview.PNG" },
    { label: "PMU Pier", href: "/academia/pmu-pier", image: "/academia/kurz2/pery_preview.PNG" },
    { label: "Estetické nastrelovanie náušníc", href: "/academia/esteticke-nastrelovanie-nausnic", video: "https://pub-60b685024baf4def829d5151d4dc320a.r2.dev/kurz7.mp4" },
    { label: "Deň Otvorených Dverí", href: "/academia/dod", video: "https://pub-60b685024baf4def829d5151d4dc320a.r2.dev/dod.mp4", position: "center 20%" },
];

export default function AcademiaSidebar() {
    const pathname = usePathname();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const isActive = (href: string) =>
        href === "/academia" ? pathname === "/academia" : pathname.startsWith(href);

    const activeCourse = COURSES.find((course) => isActive(course.href)) || COURSES[0];

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
            {/* Desktop Sidebar */}
            <div className="hidden lg:flex flex-col gap-4 sticky top-32">
                {COURSES.map((course) => (
                    <Link
                        key={course.href}
                        href={course.href}
                        className={`group relative h-16 md:h-20 w-full overflow-hidden rounded-xl border transition-all duration-300 block ${
                            isActive(course.href)
                                ? "border-gold shadow-[0_0_15px_rgba(182,141,87,0.3)] scale-[1.02]"
                                : "border-white/10 hover:border-gold/50 opacity-70 hover:opacity-100"
                        }`}
                    >
                        <div className="absolute inset-0">
                            {course.video ? (
                                <video
                                    src={course.video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    style={course.position ? { objectPosition: course.position } : undefined}
                                />
                            ) : course.image ? (
                                <Image
                                    src={course.image}
                                    alt={course.label}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    style={course.position ? { objectPosition: course.position } : undefined}
                                />
                            ) : null}
                        </div>
                        {course.video ? (
                            <>
                                <div className={`absolute inset-0 transition-colors duration-300 ${
                                    isActive(course.href) ? "bg-black/40" : "bg-black/60 group-hover:bg-black/50"
                                }`} />
                                <div className="absolute inset-0 flex items-center justify-center p-2">
                                    <span className={`font-marcellus text-sm md:text-base uppercase tracking-widest text-center transition-colors duration-300 ${
                                        isActive(course.href) ? "text-gold" : "text-white"
                                    }`}>
                                        {course.label}
                                    </span>
                                </div>
                            </>
                        ) : isActive(course.href) && (
                            <div className="absolute inset-0 bg-gold/10" />
                        )}
                    </Link>
                ))}
            </div>

            {/* Mobile Top Active Button Trigger */}
            <div className="lg:hidden flex flex-col gap-2 mb-8">
                <label className="text-[#1D0E22] text-xs uppercase tracking-widest mb-1 block font-marcellus">Vybraný kurz</label>
                <button
                    onClick={() => setIsDrawerOpen(true)}
                    className="group relative h-28 w-full overflow-hidden rounded-xl border text-left border-gold shadow-[0_0_15px_rgba(182,141,87,0.3)] block focus:outline-none"
                >
                    <div className="absolute inset-0">
                        {activeCourse.video ? (
                            <video
                                src={activeCourse.video}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                                style={activeCourse.position ? { objectPosition: activeCourse.position } : undefined}
                            />
                        ) : activeCourse.image ? (
                            <Image
                                src={activeCourse.image}
                                alt={activeCourse.label}
                                fill
                                className="object-cover"
                                style={activeCourse.position ? { objectPosition: activeCourse.position } : undefined}
                            />
                        ) : null}
                    </div>
                    {activeCourse.video ? (
                        <>
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="absolute inset-0 flex items-center justify-start px-6 pr-14">
                                <span className="font-marcellus text-sm uppercase tracking-widest text-gold truncate">
                                    {activeCourse.label}
                                </span>
                            </div>
                        </>
                    ) : (
                        <div className="absolute inset-0 bg-gold/10" />
                    )}
                    {/* Dropdown Indicator Icon */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-gold/25 border border-gold/40 rounded-full p-1.5 text-gold z-10">
                        <ChevronDown size={16} />
                    </div>
                </button>
            </div>

            {/* Mobile Drawer Slider */}
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
                                <span className="font-marcellus text-sm uppercase tracking-widest text-[#EEE3CE]">Vyberte kurz</span>
                                <button
                                    onClick={() => setIsDrawerOpen(false)}
                                    className="text-white/60 hover:text-white transition-colors p-1"
                                    aria-label="Zatvoriť menu"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Scrollable list of courses */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                {COURSES.map((course) => (
                                    <Link
                                        key={course.href}
                                        href={course.href}
                                        onClick={() => setIsDrawerOpen(false)}
                                        className={`group relative h-16 w-full overflow-hidden rounded-xl border transition-all duration-300 block ${
                                            isActive(course.href)
                                                ? "border-gold shadow-[0_0_12px_rgba(182,141,87,0.3)] scale-[1.02]"
                                                : "border-white/10 opacity-70 hover:opacity-100"
                                        }`}
                                    >
                                        <div className="absolute inset-0">
                                            {course.video ? (
                                                <video
                                                    src={course.video}
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    style={course.position ? { objectPosition: course.position } : undefined}
                                                />
                                            ) : course.image ? (
                                                <Image
                                                    src={course.image}
                                                    alt={course.label}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    style={course.position ? { objectPosition: course.position } : undefined}
                                                />
                                            ) : null}
                                        </div>
                                        {course.video ? (
                                            <>
                                                <div className={`absolute inset-0 transition-colors duration-300 ${
                                                    isActive(course.href) ? "bg-black/40" : "bg-black/60 group-hover:bg-black/50"
                                                }`} />
                                                <div className="absolute inset-0 flex items-center justify-center p-2">
                                                    <span className={`font-marcellus text-xs uppercase tracking-widest text-center transition-colors duration-300 ${
                                                        isActive(course.href) ? "text-gold" : "text-white"
                                                    }`}>
                                                        {course.label}
                                                    </span>
                                                </div>
                                            </>
                                        ) : isActive(course.href) && (
                                            <div className="absolute inset-0 bg-gold/10" />
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
