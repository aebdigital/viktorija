"use client";

import Image from "next/image";

const ACHIEVEMENTS = [
    "V beauty sfére pôsobím od roku 2001.",
    "Vyškolila som 250+ študentiek a študentov.",
    "Kurz Permanentný make-up je akreditovaný a moja akadémia je certifikovaná vzdelávacia organizácia.",
    "Špecializujem sa na laserové odstraňovanie nežiaducich výsledkov permanentného make-upu.",
    "Som autorkou vlastných techník a metodiky výučby.",
    "Vytvorila som tri učebnice: Permanentný make-up, Pigmenty a Odstraňovanie removerom.",
    "Prednášala som na Kozmetickom kongrese 2024.",
    "Účastníčka medzinárodných PMU súťaží (2. – 8. miesto).",
    "Neustále sa odborne vzdelávam (SR, Poľsko, Česko, Taliansko, Rusko, Ukrajina).",
    "Pravidelne sa venujem osobnému rozvoju a komunikačným tréningom."
];

export default function About() {
    return (
        <section id="omne" className="bg-main-bg py-24 relative overflow-hidden">
            {/* Decorative Gold Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="w-[95vw] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_0.8fr] gap-16 items-center">

                {/* Text Content */}
                <div className="space-y-8 relative z-10">
                    <div>
                        <h2 className="font-marcellus text-4xl md:text-5xl text-white mb-2 tracking-wide">
                            VIKTORIJA <span className="text-gold-gradient">KENDRA</span>
                        </h2>
                        <p className="font-montserrat text-gold-light text-lg font-light tracking-wide uppercase">
                            Permanent make-up artistka a školiteľka
                        </p>
                    </div>

                    <div className="font-montserrat text-white/80 space-y-3 font-light leading-relaxed">
                        <p className="mb-6 italic text-white">
                            Špecialistka na laserové odstraňovanie nežiaducich výsledkov PMU • Kozmetička a podnikateľka
                        </p>

                        <ul className="space-y-3">
                            {ACHIEVEMENTS.map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <span className="text-gold text-xl min-w-[20px]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="pt-8">
                        <p className="font-alex text-6xl text-gold transform -rotate-2 origin-left">
                            Viktorija
                        </p>
                    </div>
                </div>

                {/* Photo */}
                <div className="relative h-[650px] w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                        src="/about photo.jpg"
                        alt="Viktorija Kendra"
                        fill
                        className="object-cover"
                    />
                    {/* Gradient Overlay for integration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-main-bg/80 via-transparent to-transparent opacity-60" />
                </div>

            </div>
        </section>
    );
}
