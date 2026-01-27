"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function NavLink({ label, href }: { label: string; href: string }) {
    const [hovered, setHovered] = useState(false);
    const pathname = usePathname();

    // Disabled link (Academy) - Stylistically same as active, just disabled actions? 
    // User requested: "make the academy text please white like rest of links because it has the inactive style and also remove the"
    // I will remove the opacity and cursor-default, effectively making it look normal but still not navigating if href is empty?
    // Actually if href is empty Link component might complain or just reload. 
    // I will render it as a div/span but with same styling as Link, or just give it a '#' href if strictly need visual parity.
    // The user said "remove the [inactive style]", so I will use the same styling class.

    if (!href) {
        return (
            <span className="relative font-marcellus text-white uppercase tracking-widest text-xl drop-shadow-md py-6 block cursor-pointer">
                {label}
            </span>
        );
    }

    // Active state logic
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`relative font-marcellus text-white uppercase tracking-widest text-xl py-6 group block transition-all duration-300 ${hovered || isActive ? 'drop-shadow-[0_0_12px_rgba(255,255,255,1)] text-white' : 'drop-shadow-md'}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {label}
        </Link>
    )
}

const NAV_LEFT = [
    { label: "TEST", href: "/test" },
    { label: "Úvod", href: "/" },
    { label: "ŠTÚDIO", href: "/sluzby" },
];

const NAV_RIGHT = [
    { label: "Academy", href: "" }, // Disabled
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
                <div className="hidden md:block flex-shrink-0 mx-4 py-2">
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

                {/* Mobile Menu Toggle (Simplified) - HIDDEN for now as requested */}
                <button className="hidden absolute right-4 text-white p-4">
                    MENU
                </button>
            </div>
        </header>
    );
}
