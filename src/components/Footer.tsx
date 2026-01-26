"use client";

import Image from "next/image";

export default function Footer() {
    return (
        <footer id="kontakt" className="bg-black py-16 border-t border-white/10">
            <div className="w-[95vw] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

                {/* Brand */}
                <div className="space-y-4 flex flex-col md:items-start items-center">
                    <div className="relative w-40 h-12 md:w-56 md:h-16 mb-2">
                        <Image
                            src="/logo copy.png"
                            alt="Viktorija Kendra"
                            fill
                            className="object-contain filter brightness-0 invert"
                        />
                    </div>
                    <p className="font-montserrat text-white/60 font-light text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                        Permanentný make-up, kozmetika a školenia na najvyššej úrovni.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h4 className="font-marcellus text-gold tracking-widest text-lg">NAVIGÁCIA</h4>
                    <nav className="flex flex-col gap-2 font-montserrat text-white/80 font-light text-sm">
                        <a href="#sluzby" className="hover:text-white transition-colors">Služby</a>
                        <a href="#omne" className="hover:text-white transition-colors">O mne</a>
                        <a href="#academy" className="hover:text-white transition-colors">Academy</a>
                        <a href="#referencie" className="hover:text-white transition-colors">Referencie</a>
                    </nav>
                </div>

                {/* Contact */}
                <div className="space-y-4">
                    <h4 className="font-marcellus text-gold tracking-widest text-lg">KONTAKT</h4>
                    <div className="font-montserrat text-white/80 font-light text-sm space-y-2">
                        <p>Salón Viktória</p>
                        <p>Infolinka: +421 907 796 562</p>
                        <p>Email: viktorija@viktorija.sk</p>

                        <div className="pt-6 space-y-2 flex flex-col items-center md:items-start text-xs text-white/50">
                            <a href="/osobne-udaje" className="hover:text-gold transition-colors">Ochrana osobných údajov</a>
                            <button
                                onClick={() => window.dispatchEvent(new Event('openCookieSettings'))}
                                className="hover:text-gold transition-colors text-left"
                            >
                                Nastavenia cookies
                            </button>
                            <p className="pt-2">
                                © {new Date().getFullYear()} Viktorija Kendra. Všetky práva vyhradené.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
