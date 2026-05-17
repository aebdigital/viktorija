"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const COURSES = [
    { label: "The Art of PMU", href: "/academia/kurz1", image: "/academia/vik1.jpg", position: "center 40%" },
    { label: "Tri Techniky Obočia", href: "/academia/kurz4", image: "/academia/IMG_8478.JPG" },
    { label: "Hyperrealistické Obočie", href: "/academia/kurz5", image: "/academia/m4.jpg" },
    { label: "PMU Očných Liniek", href: "/academia/kurz3", image: "/academia/IMG_8476.JPG" },
    { label: "PMU Pier", href: "/academia/kurz2", image: "/academia/PHOTO-2026-02-10-14-41-10.jpg" },
    { label: "Deň Otvorených Dverí", href: "/academia/dod", image: "/academia/vik3.jpg", position: "center 20%" },
];

export default function AcademiaSidebar() {
    const pathname = usePathname();

    const isActive = (href: string) =>
        href === "/academia" ? pathname === "/academia" : pathname.startsWith(href);

    return (
        <>
            {/* Desktop */}
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
                            <Image
                                src={course.image}
                                alt={course.label}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                style={course.position ? { objectPosition: course.position } : undefined}
                            />
                        </div>
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
                    </Link>
                ))}
            </div>

            {/* Mobile */}
            <div className="lg:hidden flex flex-col gap-2 mb-8">
                <label className="text-[#1D0E22] text-xs uppercase tracking-widest mb-1 block font-marcellus">Kurzy</label>
                <div className="flex flex-wrap gap-2">
                    {COURSES.map((course) => (
                        <Link
                            key={course.href}
                            href={course.href}
                            className={`font-marcellus text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-colors duration-300 ${
                                isActive(course.href)
                                    ? "border-gold text-gold bg-gold/10"
                                    : "border-white/20 text-[#1D0E22] hover:border-gold/50"
                            }`}
                        >
                            {course.label}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
