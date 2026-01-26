"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function NavLink({ label, href }: { label: string; href: string }) {
    const [hovered, setHovered] = useState(false);
    const pathname = usePathname();

    // Active state logic:
    // If href matches pathname exactly (e.g. / or /kontakt or /academy) - active.
    // Hash links generally won't match pathname unless we parse. 
    // But since 'Služby' etc are on homepage, we can assume they are not "active page" unless we are on homepage.
    // However, user specifically asked: "when on homepage underline the uvod when on kontakt oage underline Kontakt"

    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className="relative font-marcellus text-white uppercase tracking-widest text-xl drop-shadow-md py-6 group block"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {label}
            {/* Underline: slightly adjusted bottom position to not be too far or overlapping */}
            <span className={`absolute bottom-5 left-0 w-full h-[2px] bg-white transform transition-transform duration-300 ease-out origin-left ${hovered || isActive ? 'scale-x-100' : 'scale-x-0'}`} />
        </Link>
    )
}

const NAV_LEFT = [
    { label: "Úvod", href: "/" },
    { label: "Služby", href: "/sluzby" },
    { label: "O mne", href: "#omne" },
];

const NAV_RIGHT = [
    { label: "Academy", href: "/academy" },
    { label: "Referencie", href: "#referencie" },
    { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-gradient-to-b from-black/90 via-black/50 to-transparent">
            <div className="w-[95vw] mx-auto flex items-center justify-center">
                {/* Left Nav - Pushed to right (towards center) */}
                <nav className="hidden md:flex gap-12 items-center flex-1 justify-end pr-8">
                    {NAV_LEFT.map((item) => (
                        <NavLink key={item.href} {...item} />
                    ))}
                </nav>

                {/* Logo */}
                <div className="flex-shrink-0 mx-4 py-2">
                    <div className="relative w-40 md:w-60 h-12 md:h-20">
                        <Link href="/">
                            <Image
                                src="/logo copy.png"
                                alt="Viktorija Logo"
                                fill
                                className="object-contain filter brightness-0 invert"
                            />
                        </Link>
                    </div>
                </div>

                {/* Right Nav - Pushed to left (towards center) */}
                <nav className="hidden md:flex gap-12 items-center flex-1 justify-start pl-8">
                    {NAV_RIGHT.map((item) => (
                        <NavLink key={item.href} {...item} />
                    ))}
                </nav>

                {/* Mobile Menu Toggle (Simplified) */}
                <button className="md:hidden absolute right-4 text-white p-4">
                    MENU
                </button>
            </div>
        </header>
    );
}
