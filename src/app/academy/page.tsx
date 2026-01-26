"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

export default function AcademyPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        age: "",
        instagram: "",
        facebook: "",
        inBeauty: "",
        isArtist: "",
        whyPmu: "",
        consent: false
    });
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTimeout(() => setStatus("success"), 1000);
    };

    return (
        <main className="min-h-screen bg-main-bg text-white">
            <Header />

            <div className="pt-40 pb-24 w-[95vw] mx-auto min-h-screen">

                {/* Title */}
                <h1 className="font-saol italic text-6xl md:text-8xl text-center text-white mb-20 tracking-wide drop-shadow-2xl">
                    ACADEMY
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left: Content Text */}
                    <div className="font-montserrat text-white/90 font-light leading-relaxed space-y-8 text-lg">
                        <p className="border-l-2 border-gold pl-6 text-xl">
                            Permanentný make-up je estetická a etická procedúra. Je to tvorivá, dobre platená ale aj zodpovedná profesia.
                        </p>

                        <div className="space-y-4">
                            <h3 className="font-marcellus text-gold text-2xl tracking-widest uppercase">Skladá sa z:</h3>
                            <ul className="space-y-2 list-none">
                                {[
                                    "medicíny (pokožka a procesy regenerácie)",
                                    "chémie (pigmenty, ich zloženie a život v koži)",
                                    "mechanika (strojčeky a kartridže)",
                                    "estetiky (klientky ku nám chodia za krásou)",
                                    "zručnosti (správne techniky a cítenie pokožky)",
                                    "plnenia záväzkov (ideálne je prevýšiť očakávania klientiek)"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="text-gold">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p>
                            Aby sme obsiahli celú teoretickú aj praktickú časť, musíme mať dostatok času. Náš mozog si musí zvyknúť na myslenie v smere permanentného make-upu a naše ruky sa musia naučiť disciplinovane šrafovať.
                        </p>

                        <div className="bg-white/5 p-8 border border-gold/30 rounded-xl space-y-4">
                            <h3 className="font-marcellus text-3xl text-gold">KURZ TRVÁ 49 DNÍ</h3>
                            <p className="uppercase tracking-widest text-sm">Aby ste si vypracovali správne návyky.</p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-marcellus text-gold text-2xl tracking-widest uppercase">Čo vás čaká</h3>
                            <ul className="space-y-3 list-none">
                                {[
                                    "Na kurze sa naučíte robiť púdrové obočie, akvarelové pery a linky medzi riasy v ľahkých moderných technikách",
                                    "Prejdeme od kreslenia na papieri, tetovania na latexe, na umelej koži, až po aplikáciu na modelke",
                                    "Budeme pokračovať stážou (môže byt v academii aj on-line) a na záver robíme korekciu našim modelkám",
                                    "Urobíme celú procedúru PMU na všetky tri zóny a naučíte sa analyzovať Vašu prácu",
                                    "Správne “nastavím” ruku každej študentke s ohľadom na pigmenty",
                                    "Rýchlosť strojčeka taktiež prispôsobím „temperamentu“ Vašej ruky"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-base">
                                        <span className="text-gold mt-1">✦</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-8">
                            <p className="text-2xl font-marcellus text-white">CENA KURZU: <span className="text-gold text-3xl">3 650 eur</span></p>
                            <p className="text-sm text-white/60 mt-2">Je možnosť vnútorných splátok aj prefinancovanie cez Tatra banku.</p>
                        </div>

                        <p className="italic text-gold opacity-80">
                            "Rada Vám odovzdám svoje vedomosti a úspešne Vás uvediem do sveta permanentného make-upu. Vidíme sa na kurze."
                        </p>
                    </div>

                    {/* Right: Photos & Form */}
                    <div className="space-y-16">
                        {/* 4 Photos Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {["/vik1.jpg", "/vik2.jpg", "/vik3.jpg", "/vik4.jpg"].map((src, i) => (
                                <div key={i} className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg group">
                                    <Image src={src} alt="Academy" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            ))}
                        </div>

                        {/* Application Form */}
                        <div id="form" className="bg-black/40 p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <h3 className="font-marcellus text-3xl text-center text-gold mb-8 uppercase tracking-widest">
                                Prihláste sa na kurz
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Vaše meno (povinné)"
                                        className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors font-montserrat font-light"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                    <input
                                        type="email"
                                        placeholder="E-mail (povinný)"
                                        className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors font-montserrat font-light"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Telefónne číslo"
                                        className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors font-montserrat font-light"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Vek"
                                        className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors font-montserrat font-light"
                                        value={formData.age}
                                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Váš Instagram profil"
                                        className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors font-montserrat font-light"
                                        value={formData.instagram}
                                        onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Váš Facebook profil"
                                        className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors font-montserrat font-light"
                                        value={formData.facebook}
                                        onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-6 pt-4">
                                    {/* Yes/No Questions */}
                                    <div className="space-y-2">
                                        <p className="text-sm uppercase tracking-wide text-white/80">Pracujete v skrašľujúcich službách?</p>
                                        <div className="flex gap-6">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="inBeauty" value="yes" onChange={(e) => setFormData({ ...formData, inBeauty: e.target.value })} className="accent-gold" />
                                                <span className="font-light text-sm">Áno</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="inBeauty" value="no" onChange={(e) => setFormData({ ...formData, inBeauty: e.target.value })} className="accent-gold" />
                                                <span className="font-light text-sm">Nie</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-sm uppercase tracking-wide text-white/80">Ste permanent make-up artista?</p>
                                        <div className="flex gap-6">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="isArtist" value="yes" onChange={(e) => setFormData({ ...formData, isArtist: e.target.value })} className="accent-gold" />
                                                <span className="font-light text-sm">Áno</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="isArtist" value="no" onChange={(e) => setFormData({ ...formData, isArtist: e.target.value })} className="accent-gold" />
                                                <span className="font-light text-sm">Nie</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-sm uppercase tracking-wide text-white/80">Prečo sa chcete stať permanent make-up artistom?</p>
                                        <textarea
                                            rows={3}
                                            className="w-full bg-transparent border border-white/20 p-3 text-white focus:outline-none focus:border-gold transition-colors font-montserrat font-light text-sm rounded-lg"
                                            value={formData.whyPmu}
                                            onChange={(e) => setFormData({ ...formData, whyPmu: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="pt-4 flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        required
                                        className="accent-gold w-4 h-4"
                                        checked={formData.consent}
                                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                                    />
                                    <span className="text-xs text-white/60 font-light">Súhlasím s podmienkami ochrany osobných údajov</span>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "success"}
                                    className="w-full py-4 bg-gold text-main-bg font-marcellus font-bold tracking-widest hover:bg-white transition-colors duration-300 uppercase mt-4"
                                >
                                    {status === "success" ? "Odoslané" : "Odoslať prihlášku"}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    );
}
