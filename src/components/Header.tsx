"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
    label: string;
    href: string;
    subItems?: { label: string; href: string }[];
}

function NavLink({ label, href }: NavItem) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <div className="relative group py-6">
            {!href ? (
                <span className="font-marcellus text-[#1D0E22] uppercase tracking-widest text-xl cursor-default transition-all duration-300 group-hover:[text-shadow:0_0_20px_rgba(29,14,34,0.7),0_0_10px_rgba(29,14,34,0.5)]">
                    {label}
                </span>
            ) : (
                <Link
                    href={href}
                    className={`font-marcellus uppercase tracking-widest text-xl transition-all duration-500 no-underline block text-[#1D0E22]
                        ${isActive
                            ? '[text-shadow:0_0_15px_rgba(29,14,34,0.6),0_0_8px_rgba(29,14,34,0.4)]'
                            : 'hover:[text-shadow:0_0_20px_rgba(29,14,34,0.7),0_0_10px_rgba(29,14,34,0.5)]'
                        }`}
                >
                    {label}
                </Link>
            )}
        </div>
    )
}

const NAV_LEFT: NavItem[] = [
    { label: "Domov", href: "/" },
    { label: "ŠTÚDIO", href: "/sluzby" },
];

const NAV_RIGHT: NavItem[] = [
    {
        label: "ACADEMY",
        href: "/#academy"
    },
    { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-2" : "py-4 md:py-6"
            }`}>
            <div className="w-[90vw] mx-auto flex items-center justify-between md:justify-center relative">

                {/* Mobile Logo (Left) */}
                <div className="md:hidden flex-shrink-0 relative z-[70]">
                    <Link href="/" onClick={() => setIsMenuOpen(false)}>
                        <div className="relative w-32 h-10">
                            <Image
                                src="/ФИОЛ__1__page-0001-removebg-preview.png"
                                alt="Viktorija Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </Link>
                </div>

                {/* Desktop Left Nav */}
                <nav className="hidden md:flex gap-12 items-center flex-1 justify-end pr-8">
                    {NAV_LEFT.map((item) => (
                        <NavLink key={item.href} {...item} />
                    ))}
                </nav>

                {/* Desktop Center Logo */}
                <div className="hidden md:block flex-shrink-0 mx-4">
                    <div className="relative w-40 md:w-60 h-12 md:h-20">
                        <Link href="/">
                            <Image
                                src="/ФИОЛ__1__page-0001-removebg-preview.png"
                                alt="Viktorija Logo"
                                fill
                                className="object-contain"
                            />
                        </Link>
                    </div>
                </div>

                {/* Desktop Right Nav */}
                <nav className="hidden md:flex gap-12 items-center flex-1 justify-start pl-8">
                    {NAV_RIGHT.map((item) => (
                        <NavLink key={item.href} {...item} />
                    ))}
                </nav>

                {/* Mobile Hamburger (Right) */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden relative z-[70] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <motion.span
                        animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="w-8 h-0.5 bg-[#1D0E22] block"
                    />
                    <motion.span
                        animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-8 h-0.5 bg-[#1D0E22] block"
                    />
                    <motion.span
                        animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="w-8 h-0.5 bg-[#1D0E22] block"
                    />
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 w-full h-screen z-[60] bg-[#F5F5F0] flex flex-col items-center justify-center pt-20"
                        >
                            <nav className="flex flex-col items-center gap-10">
                                {[...NAV_LEFT, ...NAV_RIGHT].map((item, idx) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * idx }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="font-marcellus uppercase tracking-widest text-3xl text-[#1D0E22] hover:text-gold transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
