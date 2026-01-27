"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const MAIN_SERVICES = [
    { id: "pmu", label: "Permanentný Make-up", image: "/sluzby/permanent.jpg" },
    { id: "removal", label: "Odstraňovanie PMU", image: "/sluzby/odstranenie.jpeg" },
    { id: "piercing", label: "Nastreľovanie náušníc", image: "/sluzby/nastrelovanie.webp" },
    { id: "cosmetics", label: "Kozmetika & Starostlivosť", image: "/sluzby/kozmetika.webp" },
    { id: "creams", label: "Krémy a Séra", image: "" }
];

const PMU_SUBTABS = [
    { id: "brows", label: "Obočie", image: "/sluzby/pmu-brows.jpg" },
    { id: "lips", label: "Pery", image: "/sluzby/pmu-lips.jpg" },
    { id: "eyes", label: "Očné linky", image: "/sluzby/pmu-eyes.jpg" }
];

export default function ServicesPage() {
    const [activeMain, setActiveMain] = useState("pmu");
    const [activePmu, setActivePmu] = useState("brows");

    return (
        <main className="min-h-screen bg-main-bg text-white">
            <Header />

            <div className="pt-32 pb-24 w-[98vw] lg:w-[90vw] mx-auto min-h-screen">

                {/* Page Title */}
                {/* Page Title */}


                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">

                    {/* LEFT SIDE: Main Navigation */}
                    <div className="flex flex-col gap-4 sticky top-32">
                        {MAIN_SERVICES.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveMain(service.id)}
                                className={`group relative h-16 md:h-20 w-full overflow-hidden rounded-xl border transition-all duration-300 ${activeMain === service.id
                                    ? "border-gold shadow-[0_0_15px_rgba(182,141,87,0.3)] scale-[1.02]"
                                    : "border-white/10 hover:border-gold/50 opacity-70 hover:opacity-100"
                                    }`}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    {service.image && (
                                        <Image
                                            src={service.image}
                                            alt={service.label}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    )}
                                </div>
                                {/* Overlay */}
                                <div className={`absolute inset-0 transition-colors duration-300 ${activeMain === service.id ? "bg-black/40" : "bg-black/60 group-hover:bg-black/50"
                                    }`} />

                                {/* Label */}
                                <div className="absolute inset-0 flex items-center justify-center p-2">
                                    <span className={`font-marcellus text-sm md:text-base uppercase tracking-widest text-center transition-colors duration-300 ${activeMain === service.id ? "text-gold" : "text-white"
                                        }`}>
                                        {service.label}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* RIGHT SIDE: Content Area */}
                    <div className="min-h-[600px] relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            {activeMain === "pmu" ? (
                                <motion.div
                                    key="pmu"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="flex flex-col xl:flex-row gap-8"
                                >
                                    {/* Main Content (Image + Text) - Takes up most space */}
                                    <div className="flex-1 space-y-8">
                                        {/* Large Detail Image */}
                                        <div className="relative h-[300px] md:h-[500px] w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                                            <Image
                                                src={subTabsImage(activePmu)}
                                                alt="PMU Detail"
                                                fill
                                                className="object-cover"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = "/sluzby/permanent.jpg";
                                                }}
                                            />
                                        </div>

                                        {/* Content Text - Full Width Below Image */}
                                        <motion.div
                                            key={activePmu}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="font-montserrat font-light text-white/90 leading-relaxed text-lg max-w-4xl"
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
                                    </div>

                                    {/* PMU Sub-Navigation (Right Side Column) - Smaller Buttons */}
                                    <div className="w-full xl:w-[200px] flex flex-row xl:flex-col gap-4 flex-shrink-0">
                                        {PMU_SUBTABS.map((sub) => (
                                            <button
                                                key={sub.id}
                                                onClick={() => setActivePmu(sub.id)}
                                                className={`group relative h-16 xl:h-24 overflow-hidden rounded-lg border transition-all duration-300 ${activePmu === sub.id
                                                    ? "border-gold shadow-md"
                                                    : "border-white/20 hover:border-gold/50 opacity-80"
                                                    }`}
                                            >
                                                <div className="absolute inset-0">
                                                    <Image
                                                        src={sub.image}
                                                        alt={sub.label}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                        onError={(e) => {
                                                            const target = e.target as HTMLImageElement;
                                                            target.src = "/sluzby/permanent.jpg";
                                                        }}
                                                    />
                                                </div>
                                                <div className={`absolute inset-0 transition-colors duration-300 ${activePmu === sub.id ? "bg-black/20" : "bg-black/60 group-hover:bg-black/40"
                                                    }`} />
                                                <div className="absolute inset-0 flex items-center justify-center p-2 text-center">
                                                    <span className={`font-marcellus text-sm font-bold uppercase tracking-wider ${activePmu === sub.id ? "text-gold" : "text-white"
                                                        }`}>
                                                        {sub.label}
                                                    </span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key={activeMain}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="flex flex-col gap-8"
                                >
                                    {/* For other tabs: Just Image Top, Text Bottom */}
                                    <div className="relative h-[300px] md:h-[500px] w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                                        <Image
                                            src={
                                                activeMain === "removal" ? "/sluzby/odstranenie.jpeg" :
                                                    activeMain === "piercing" ? "/sluzby/nastrelovanie.webp" :
                                                        activeMain === "cosmetics" ? "/sluzby/kozmetika.webp" :
                                                            "/sluzby/kremy.webp"
                                            }
                                            alt={activeMain}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="space-y-6 font-montserrat font-light text-white/90 leading-relaxed text-lg max-w-4xl">
                                        <h3 className="font-marcellus text-4xl text-gold mb-8 uppercase">
                                            {MAIN_SERVICES.find(s => s.id === activeMain)?.label}
                                        </h3>

                                        {activeMain === "removal" && (
                                            <>
                                                <p>
                                                    Ponúkame bezpečné odstraňovanie starého alebo nepodareného permanentného make-upu pomocou najmodernejších laserov a removerov.
                                                    Každý prípad konzultujeme individuálne pre najlepšie výsledky bez jaziev.
                                                </p>
                                                <ul className="space-y-4 mt-6">
                                                    <li className="flex gap-4"><span className="text-gold text-xl">✦</span><span>Laserové odstránenie (šetrné k pokožke)</span></li>
                                                    <li className="flex gap-4"><span className="text-gold text-xl">✦</span><span>Chemický remover pre ťažké pigmenty</span></li>
                                                    <li className="flex gap-4"><span className="text-gold text-xl">✦</span><span>Konzultácie a plán opráv</span></li>
                                                </ul>
                                            </>
                                        )}
                                        {activeMain === "piercing" && (
                                            <>
                                                <p>
                                                    Profesionálne nastreľovanie náušníc pre deti aj dospelých. Zameriavame sa na estetické umiestnenie v tzv. "bode krásy"
                                                    s dôrazom na maximálnu hygienu a sterilitu.
                                                </p>
                                                <ul className="space-y-4 mt-6">
                                                    <li className="flex gap-4"><span className="text-gold text-xl">✦</span><span>Veľký výber sterilných náušníc</span></li>
                                                    <li className="flex gap-4"><span className="text-gold text-xl">✦</span><span>Bezbolestná a rýchla aplikácia</span></li>
                                                    <li className="flex gap-4"><span className="text-gold text-xl">✦</span><span>Vhodné aj pre bábätká</span></li>
                                                </ul>
                                            </>
                                        )}
                                        {activeMain === "cosmetics" && (
                                            <>
                                                <p>
                                                    Komplexné kozmetické ošetrenia pre zdravie a krásu vašej pleti. Používame len overené, prémiové produkty
                                                    a procedúry prispôsobené vašim individuálnym potrebám.
                                                </p>
                                                <ul className="space-y-4 mt-6">
                                                    <li className="flex gap-4"><span className="text-gold text-xl">✦</span><span>Hĺbkové čistenie pleti</span></li>
                                                    <li className="flex gap-4"><span className="text-gold text-xl">✦</span><span>Anti-age kúry a masáže</span></li>
                                                    <li className="flex gap-4"><span className="text-gold text-xl">✦</span><span>Poradenstvo v domácej starostlivosti</span></li>
                                                </ul>
                                            </>
                                        )}
                                        {activeMain === "creams" && (
                                            <>
                                                <p>
                                                    Prémiové krémy a séra na domáce použitie, ktoré dopĺňajú naše salónne ošetrenia.
                                                    Vysoko účinné látky pre vašu každodennú rutinu a dlhodobú krásu.
                                                </p>
                                                <ul className="space-y-4 mt-6">
                                                    <li className="flex gap-4"><span className="text-gold text-xl">✦</span><span>Hydratačné a vyživujúce séra</span></li>
                                                    <li className="flex gap-4"><span className="text-gold text-xl">✦</span><span>Anti-age nočné a denné krémy</span></li>
                                                    <li className="flex gap-4"><span className="text-gold text-xl">✦</span><span>Špeciálna starostlivosť po PMU</span></li>
                                                </ul>
                                            </>
                                        )}

                                        <button className="mt-8 px-8 py-3 bg-gold text-main-bg font-marcellus font-bold tracking-widest uppercase hover:bg-white transition-colors">
                                            Objednať sa
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>

            <Footer />
        </main >
    );
}

function subTabsImage(id: string) {
    if (id === 'brows') return "/sluzby/pmu-brows.jpg";
    if (id === 'lips') return "/sluzby/pmu-lips.jpg";
    if (id === 'eyes') return "/sluzby/pmu-eyes.jpg";
    return "/sluzby/permanent.jpg";
}
