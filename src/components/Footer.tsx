"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Footer() {
    const pathname = usePathname();

    const NavLink = ({ href, label }: { href: string; label: string }) => {
        const isActive = pathname === href || (href.startsWith('/#') && pathname === '/');

        return (
            <a
                href={href}
                className={`transition-all duration-500 font-montserrat font-light text-sm
                    ${isActive
                        ? 'text-[#EEE3CE] [text-shadow:0_0_12px_rgba(238,227,206,0.8)]'
                        : 'text-[#EEE3CE] hover:[text-shadow:0_0_15px_rgba(238,227,206,0.6)] [text-shadow:0_0_5px_rgba(238,227,206,0.1)]'
                    }`}
            >
                {label}
            </a>
        );
    };

    return (
        <footer id="kontakt" className="bg-[#1D0E22] py-16 border-t border-white/10">
            <div className="w-[95vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* LEFT SIDE - Content */}
                <div className="flex flex-col justify-between h-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left items-start">
                        {/* Brand */}
                        <div className="relative w-full h-32 md:h-48">
                            <Image
                                src="/output-onlinepngtools-removebg-preview.png"
                                alt="Viktorija Kendra"
                                fill
                                className="object-contain md:object-left"
                            />
                        </div>

                        {/* Navigation */}
                        <div className="space-y-6 pt-4">
                            <h4 className="font-marcellus text-[#EEE3CE] tracking-[0.2em] text-sm uppercase">NAVIGÁCIA</h4>
                            <nav className="flex flex-col gap-3">
                                <NavLink href="/" label="Domov" />
                                <NavLink href="/sluzby" label="Štúdio" />
                                <NavLink href="#academy" label="Academy" />
                                <NavLink href="/kontakt" label="Kontakt" />
                            </nav>
                        </div>

                        {/* Contact */}
                        <div className="space-y-6 pt-4">
                            <h4 className="font-marcellus text-[#EEE3CE] tracking-[0.2em] text-sm uppercase">KONTAKT</h4>
                            <div className="font-montserrat text-[#EEE3CE] font-light text-sm space-y-3">
                                <p className="leading-relaxed text-[#EEE3CE]">Twin City Tower<br />Mlynské Nivy 10<br />821 09 Bratislava</p>
                                <a href="tel:+421907796562" className="block hover:text-white transition-all duration-300 text-[#EEE3CE]">+421 907 796 562</a>
                                <a href="mailto:viktorija@viktorija.sk" className="block hover:[text-shadow:0_0_10px_rgba(238,227,206,0.6)] transition-all duration-300 text-[#EEE3CE]">viktorija@viktorija.sk</a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Links */}
                    <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 items-center justify-center md:justify-start text-[10px] text-[#EEE3CE] font-montserrat font-light uppercase tracking-widest">
                        <p>© {new Date().getFullYear()} Viktorija Kendra. Všetky práva vyhradené.</p>
                        <a href="/osobne-udaje" className="hover:text-[#EEE3CE] transition-colors hover:[text-shadow:0_0_8px_rgba(238,227,206,0.4)]">Ochrana osobných údajov</a>
                        <button
                            onClick={() => window.dispatchEvent(new Event('openCookieSettings'))}
                            className="hover:text-[#EEE3CE] transition-colors hover:[text-shadow:0_0_8px_rgba(238,227,206,0.4)]"
                        >
                            NASTAVENIA COOKIES
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE - Map */}
                <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.0!2d17.12450597711311!3d48.147514250269094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c893f6282c159%3A0xcb0c29487a5d69b4!2sSal%C3%B3n%20Vikt%C3%B3ria!5e0!3m2!1ssk!2ssk!4v1738202400000!5m2!1ssk!2ssk"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(1) contrast(0.9) brightness(1.1)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Salón Viktória - Mapa"
                    />
                </div>
            </div>
        </footer>
    );
}
