"use client";

import Image from "next/image";

const SERVICES = [
    {
        title: "PERMANENTNÝ MAKE-UP",
        subtitle: "Prirodzený a moderný, s rešpektom k anatómii tváre",
        image: "/sluzby/permanent.jpg",
    },
    {
        title: "ODSTRAŇOVANIE PMU",
        subtitle: "Laserom a removerom – bezpečne a kontrolovane",
        image: "/sluzby/odstranenie.jpeg",
    },
    {
        title: "NASTREĽOVANIE NÁUŠNÍC",
        subtitle: "Estetické umiestnenie v bode krásy",
        image: "/sluzby/nastrelovanie.webp",
    },
    {
        title: "KOZMETIKA & STAROSTLIVOSŤ",
        subtitle: "Ošetrenia pleti a kurátorovaný výber krémov a sér",
        image: "/sluzby/kozmetika.webp",
    },
];

export default function Services() {
    return (
        <section id="sluzby" className="bg-main-bg py-24">
            <div className="w-[95vw] mx-auto">
                <h2 className="font-marcellus text-4xl md:text-5xl text-center text-white mb-16 tracking-widest">
                    NAŠE <span className="text-gold-gradient">SLUŽBY</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Side: Services Grid (4 boxes) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {SERVICES.map((service, idx) => (
                            <div
                                key={idx}
                                className="group relative h-[300px] overflow-hidden rounded-xl border border-white/10 cursor-pointer"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 transition-transform duration-700 md:group-hover:scale-110">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover opacity-80"
                                    />
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/50 md:group-hover:bg-black/40 transition-colors duration-500" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                                    <h3 className="font-marcellus text-xl md:text-2xl text-white tracking-widest mb-2 transition-colors duration-300 md:group-hover:text-gold uppercase">
                                        {service.title}
                                    </h3>

                                    <div className="overflow-hidden md:max-h-0 md:group-hover:max-h-24 transition-all duration-500 ease-in-out">
                                        <p className="font-montserrat text-white text-xs md:text-sm font-light opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                            {service.subtitle}
                                        </p>
                                    </div>
                                    {/* Mobile: Always show subtitle */}
                                    <p className="md:hidden font-montserrat text-white text-xs font-light mt-1 opacity-80">
                                        {service.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Academia */}
                    <div id="academy" className="group relative h-full min-h-[616px] overflow-hidden rounded-xl border border-white/10 cursor-pointer">
                        {/* Background Image */}
                        <div className="absolute inset-0 transition-transform duration-700 md:group-hover:scale-110">
                            <Image
                                src="/vik3.jpg"
                                alt="Academia"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/70 md:group-hover:bg-black/60 transition-colors duration-500" />

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center z-10">
                            <h3 className="font-marcellus text-4xl md:text-5xl text-white tracking-[0.2em] mb-8 transition-colors duration-300 md:group-hover:text-gold uppercase">
                                ACADEMIA
                            </h3>

                            <div className="space-y-4 text-left inline-block">
                                <div className="flex items-start gap-3">
                                    <span className="text-gold mt-1">✦</span>
                                    <p className="font-montserrat text-white text-lg font-light">Akreditovaný profesionálny kurz <br />permanentného make-upu</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-gold">✦</span>
                                    <p className="font-montserrat text-white text-lg font-light">Tri techniky púdrového obočia</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-gold">✦</span>
                                    <p className="font-montserrat text-white text-lg font-light">Hyperrealistické obočie</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-gold">✦</span>
                                    <p className="font-montserrat text-white text-lg font-light">3 najmodernejšie techniky PMU pier</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-gold">✦</span>
                                    <p className="font-montserrat text-white text-lg font-light">Očné linky</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-gold">✦</span>
                                    <p className="font-montserrat text-white text-lg font-light">Nastreľovanie náušníc</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-gold">✦</span>
                                    <p className="font-montserrat text-white text-lg font-light">Laser touch</p>
                                </div>
                            </div>

                            <button className="mt-12 px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 font-marcellus tracking-widest uppercase">
                                Zistiť viac
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
