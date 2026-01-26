"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const MAIN_SERVICES = [
    { id: "pmu", label: "Permanentný Make-up" },
    { id: "removal", label: "Odstraňovanie PMU" },
    { id: "piercing", label: "Nastreľovanie náušníc" },
    { id: "cosmetics", label: "Kozmetika & Starostlivosť" }
];

const PMU_SUBTABS = [
    { id: "brows", label: "Obočie" },
    { id: "lips", label: "Pery" },
    { id: "eyes", label: "Očné linky" }
];

export default function ServicesPage() {
    const [activeMain, setActiveMain] = useState("pmu");
    const [activePmu, setActivePmu] = useState("brows");

    return (
        <main className="min-h-screen bg-main-bg text-white">
            <Header />

            <div className="pt-40 pb-24 w-[95vw] lg:w-[80vw] mx-auto min-h-screen">

                {/* Page Title */}
                <h1 className="font-saol italic text-5xl md:text-7xl text-center text-white mb-16 tracking-wide drop-shadow-2xl">
                    NAŠE SLUŽBY
                </h1>

                {/* Main Tabs */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-20 border-b border-white/10 pb-6">
                    {MAIN_SERVICES.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setActiveMain(service.id)}
                            className={`relative font-marcellus text-lg md:text-2xl tracking-widest uppercase transition-colors duration-300 ${activeMain === service.id ? "text-gold" : "text-white/60 hover:text-white"}`}
                        >
                            {service.label}
                            {activeMain === service.id && (
                                <motion.span
                                    layoutId="mainTabIndicator"
                                    className="absolute -bottom-[25px] left-0 w-full h-[2px] bg-gold"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="min-h-[500px]">
                    <AnimatePresence mode="wait">
                        {activeMain === "pmu" && (
                            <motion.div
                                key="pmu"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-12"
                            >
                                {/* PMU Sub-Tabs */}
                                <div className="flex justify-center gap-8 mb-12">
                                    {PMU_SUBTABS.map((sub) => (
                                        <button
                                            key={sub.id}
                                            onClick={() => setActivePmu(sub.id)}
                                            className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm md:text-base font-montserrat uppercase tracking-wider ${activePmu === sub.id ? "border-gold text-main-bg bg-gold font-bold" : "border-white/20 text-white/60 hover:border-gold/50 hover:text-white"}`}
                                        >
                                            {sub.label}
                                        </button>
                                    ))}
                                </div>

                                {/* PMU Content */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                    {/* Text Content */}
                                    <motion.div
                                        key={activePmu}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="space-y-6 font-montserrat font-light text-white/90 leading-relaxed text-lg"
                                    >
                                        {activePmu === "brows" && (
                                            <>
                                                <h3 className="font-marcellus text-3xl text-gold mb-4">Permanentný make-up obočia</h3>
                                                <p>
                                                    Hyperrealistické chĺpky alebo jemné Púdrové tieňovanie – zvolíme techniku podľa vašich čŕt, aby výsledok pôsobil prirodzene a harmonicky.
                                                </p>
                                                <ul className="space-y-4 mt-6">
                                                    <li className="flex gap-4">
                                                        <span className="text-gold text-xl">✦</span>
                                                        <span>Rekonštrukcia a zahustenie obočia</span>
                                                    </li>
                                                    <li className="flex gap-4">
                                                        <span className="text-gold text-xl">✦</span>
                                                        <span>Prirodzený vzhľad vďaka 3D technikám</span>
                                                    </li>
                                                    <li className="flex gap-4">
                                                        <span className="text-gold text-xl">✦</span>
                                                        <span>Dlhodobý efekt a úspora času</span>
                                                    </li>
                                                </ul>
                                            </>
                                        )}

                                        {activePmu === "lips" && (
                                            <>
                                                <h3 className="font-marcellus text-3xl text-gold mb-4">Permanentný make-up pier</h3>
                                                <ul className="space-y-6">
                                                    <li>
                                                        <strong className="text-gold block mb-1">VIKTORIJA LIPS</strong>
                                                        Plné vyfarbenie pier v odtieni, ktorý vám pristane. Zvýrazní plnosť a dodá šťavu.
                                                    </li>
                                                    <li>
                                                        <strong className="text-gold block mb-1">Obnova kontúry pier</strong>
                                                        Pre dámy s výplňou pier alebo keď kontúra vekom jemne “mizne” a pery pôsobia bledšie.
                                                    </li>
                                                    <li>
                                                        <strong className="text-gold block mb-1">Kórejské pery</strong>
                                                        Gradient s koncentráciou farby v strede pier. Ide o jemné, vrstvené tieňovanie bez jasnej kontúry – efekt prekrvených, pobozkaných pier.
                                                    </li>
                                                </ul>
                                            </>
                                        )}

                                        {activePmu === "eyes" && (
                                            <>
                                                <h3 className="font-marcellus text-3xl text-gold mb-4">Permanentný make-up očných liniek</h3>
                                                <ul className="space-y-6">
                                                    <li>
                                                        <strong className="text-gold block mb-1">Linky medzi riasy</strong>
                                                        Opticky zahustia riasy a podčiarknu mandľovú formu oka bez toho, aby pôsobili ako make-up.
                                                    </li>
                                                    <li>
                                                        <strong className="text-gold block mb-1">Púdrové očné linky</strong>
                                                        Jemné zvýraznenie pohľadu a ženskosti s efektom tieňa.
                                                    </li>
                                                    <li>
                                                        <strong className="text-gold block mb-1">Tieňované očné linky</strong>
                                                        V troch odtieňoch – mäkký, viacrozmerný efekt, ktorý pôsobí luxusne a prirodzene; krásne sa ukáže pri pevnejšom viečku.
                                                    </li>
                                                </ul>
                                            </>
                                        )}
                                    </motion.div>

                                    {/* Image Content */}
                                    <motion.div
                                        key={`${activePmu}-img`}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                                    >
                                        <Image
                                            src={activePmu === "brows" ? "/sluzby/pmu-brows.jpg" : activePmu === "lips" ? "/sluzby/pmu-lips.jpg" : "/sluzby/pmu-eyes.jpg"}
                                            alt="PMU Service"
                                            fill
                                            className="object-cover"
                                            // Fallback to placeholder if specific images don't exist yet, usually I should check availability
                                            onError={(e) => {
                                                // Ideally strictly typed but this is just fallback visual
                                                const target = e.target as HTMLImageElement;
                                                target.src = "/sluzby/permanent.jpg"; // Fallback to generic
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}

                        {activeMain !== "pmu" && (
                            <motion.div
                                key={activeMain}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                            >
                                <div className="space-y-6 font-montserrat font-light text-white/90 leading-relaxed text-lg">
                                    <h3 className="font-marcellus text-3xl text-gold mb-4 uppercase">
                                        {MAIN_SERVICES.find(s => s.id === activeMain)?.label}
                                    </h3>

                                    {activeMain === "removal" && (
                                        <p>
                                            Ponúkame bezpečné odstraňovanie starého alebo nepodareného permanentného make-upu pomocou najmodernejších laserov a removerov.
                                            Každý prípad konzultujeme individuálne pre najlepšie výsledky bez jaziev.
                                        </p>
                                    )}
                                    {activeMain === "piercing" && (
                                        <p>
                                            Profesionálne nastreľovanie náušníc pre deti aj dospelých. Zameriavame sa na estetické umiestnenie v tzv. "bode krásy"
                                            s dôrazom na maximálnu hygienu a sterilitu.
                                        </p>
                                    )}
                                    {activeMain === "cosmetics" && (
                                        <p>
                                            Komplexné kozmetické ošetrenia pre zdravie a krásu vašej pleti. Používame len overené, prémiové produkty
                                            a procedúry prispôsobené vašim individuálnym potrebám.
                                        </p>
                                    )}

                                    <button className="mt-8 px-8 py-3 bg-gold text-main-bg font-marcellus font-bold tracking-widest uppercase hover:bg-white transition-colors">
                                        Objednať sa
                                    </button>
                                </div>

                                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                    <Image
                                        src={
                                            activeMain === "removal" ? "/sluzby/odstranenie.jpeg" :
                                                activeMain === "piercing" ? "/sluzby/nastrelovanie.webp" :
                                                    "/sluzby/kozmetika.webp"
                                        }
                                        alt={activeMain}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <Footer />
        </main>
    );
}
