"use client";

import Image from "next/image";
import Link from "next/link";
import PmuSubSidebar from "../../_components/PmuSubSidebar";
import ContactForm from "../../_components/ContactForm";
import StickyCennikButton from "../../_components/StickyCennikButton";

export default function EyesContent() {
    return (
        <div className="flex flex-col xl:flex-row gap-8 items-start">
            <div className="flex-1 space-y-8">
                {/* Mobile sub-nav */}
                <PmuSubSidebar variant="mobile" />

                {/* Desktop Back Button */}
                <Link
                    href="/sluzby/permanentny-makeup"
                    className="hidden xl:flex items-center gap-2 text-[#1D0E22] text-sm uppercase tracking-widest font-marcellus hover:text-gold transition-colors mb-4"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    Späť na prehľad
                </Link>

                {/* Large Detail Image */}
                <div className="relative h-[300px] md:h-[500px] w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                        src="/PMU-linky/PHOTO-2026-02-10-10-17-17.jpg"
                        alt="Permanentný make-up očných liniek"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div className="font-montserrat font-light text-[#1D0E22] leading-snug text-lg">
                    <div className="space-y-8">
                        <h3 className="font-marcellus text-3xl text-[#1D0E22] mb-4">Očné linky – permanentný make-up</h3>

                        {/* ═══ Tieňované očné linky ═══ */}
                        <div className="space-y-2">
                            <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider">Tieňované očné linky</h4>
                            <p>
                                Tieňované očné linky sú technikou jemného vrstvenia pigmentu, ktorá modeluje tvar oka bez ostrých línií. Plynulý prechod farieb vytvára mäkký tieňovaný efekt a dodáva pohľadu hĺbku.
                            </p>
                            <p className="mt-4">Gradient sa volí individuálne podľa tvaru oka, hustoty rias a požadovaného výsledku:</p>
                            <ul className="space-y-3 mt-2">
                                <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>prechod od tmavšieho pigmentu k svetlejšiemu, medovému odtieňu zvýrazňuje líniu rias a opticky ich zahusťuje, výsledok je výraznejší,</span></li>
                                <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>prechod od svetlého pieskového podkladu k tmavšiemu pigmentu vytvára dojem ľahkosti, objemu a otvoreného pohľadu. V tomto prípade pôsobí linka hnedo vďaka svetlej podložke.</span></li>
                            </ul>
                        </div>

                        {/* ═══ Očné linky medzi riasy ═══ */}
                        <div className="space-y-2 pt-8">
                            <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider">Očné linky medzi riasy</h4>
                            <p>
                                Táto technika vytvára optickú hustotu rias a jemne podkresľuje mandľový tvar očí. Podľa proporcií oka môže byť doplnená o veľmi jemný „chvostík", ak očiam pristane. Priestor medzi riasami je pigmentovaný nahusto, aby vznikol objem.
                            </p>
                        </div>

                        {/* Photo Gallery */}
                        <div className="pt-8 border-t border-black/5">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    "/PMU-linky/PHOTO-2026-02-10-10-17-17.jpg",
                                    "/linka/PHOTO-2026-02-12-14-30-21.jpg",
                                    "/PMU-linky/newlinka.jpg",
                                    "/PMU-linky/c597af61-656a-4a9d-a148-359e7955ad2e.JPG",
                                    "/PMU-linky/fd7c6036-aa32-4eb7-a553-8a59543b1273 copy.JPG",
                                    "/PMU-linky/fe199ee0-a552-4844-8589-09ffcd1f0987.JPG",
                                    "/linka/19d06e7e-4044-4150-b5b6-45d303b8d4ce.JPG",
                                    "/PHOTO-2026-02-25-11-16-06.jpg",
                                    "/Laser/27d7535b-db4f-40ba-9a15-18e6620c8044.JPG",
                                ].map((src, idx) => (
                                    <div
                                        key={idx}
                                        className={`relative rounded-lg overflow-hidden border border-black/10 shadow-sm transition-all duration-500 hover:scale-[1.02] ${idx >= 3 ? "aspect-[4/3.9]" : "aspect-[4/3]"
                                            }`}
                                    >
                                        <Image
                                            src={src}
                                            alt={`Očné linky ${idx + 1}`}
                                            fill
                                            className={`object-cover ${idx === 2 ? "object-top" : ""}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cenník + Contact Form */}
                        <div id="pmu-eyes-prices" className="pt-16 border-t-2 border-gold/20 mt-16">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="space-y-10 bg-white/30 p-8 rounded-2xl">
                                    <h3 className="font-marcellus text-3xl text-[#1D0E22] text-center uppercase tracking-widest">Cenník – Očné linky</h3>
                                    <div className="space-y-4 font-montserrat text-[#1D0E22]">
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-end gap-4">
                                                <h5 className="font-marcellus text-lg uppercase tracking-wider">Konzultácia</h5>
                                                <span className="font-bold text-lg whitespace-nowrap">Bezplatná</span>
                                            </div>
                                            <p className="text-sm opacity-80 italic">20 minút</p>
                                            <p className="text-sm">Predkreslenie linky, výber techniky a odtieňa.</p>
                                        </div>
                                        <div className="border-b border-gold/10 w-24 mx-auto" />
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-end gap-4">
                                                <h5 className="font-marcellus text-lg uppercase tracking-wider">Tieňované očné linky</h5>
                                                <span className="font-bold text-lg whitespace-nowrap">300 €</span>
                                            </div>
                                            <p className="text-sm opacity-80 italic">2,5 – 3 hodiny</p>
                                        </div>
                                        <div className="border-b border-gold/10 w-24 mx-auto" />
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-end gap-4">
                                                <h5 className="font-marcellus text-lg uppercase tracking-wider">Očné linky medzi riasy</h5>
                                                <span className="font-bold text-lg whitespace-nowrap">260 €</span>
                                            </div>
                                            <p className="text-sm opacity-80 italic">2 hodiny</p>
                                        </div>
                                        <div className="border-b border-gold/10 w-24 mx-auto" />
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-end gap-4">
                                                <h5 className="font-marcellus text-lg uppercase tracking-wider">Očné linky medzi riasy s chvostíkom</h5>
                                                <span className="font-bold text-lg whitespace-nowrap">280 €</span>
                                            </div>
                                            <p className="text-sm opacity-80 italic">2 – 2,5 hodiny</p>
                                        </div>
                                        <div className="border-b border-gold/10 w-24 mx-auto" />
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-end gap-4">
                                                <h5 className="font-marcellus text-lg uppercase tracking-wider">Korekcia</h5>
                                                <span className="font-bold text-lg whitespace-nowrap">120 €</span>
                                            </div>
                                            <p className="text-sm opacity-80 italic">do 1 hodiny</p>
                                        </div>
                                    </div>
                                </div>
                                <ContactForm />
                            </div>
                        </div>

                        <StickyCennikButton />
                    </div>
                </div>
            </div>

            {/* Desktop Right Sub-Sidebar */}
            <PmuSubSidebar variant="desktop" />
        </div>
    );
}
