"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const MAIN_SERVICES = [
    { id: "pmu", label: "Permanentný Make-up", image: "/sluzby/permanent.jpg" },
    { id: "removal", label: "Odstraňovanie PMU", image: "/sluzby/odstranenie.jpeg" },
    { id: "piercing", label: "Nastreľovanie náušníc", image: "/sluzby/nastrelovanie.webp" },
    { id: "cosmetics", label: "Kozmetika & Starostlivosť", image: "/sluzby/kozmetika.webp" },
    { id: "creams", label: "Krémy a Séra", image: "/sluzby/kozmetika.webp" }
];

const PMU_SUBTABS = [
    { id: "brows", label: "Obočie", image: "/permanent-obocie/m4.jpg" },
    { id: "lips", label: "Pery", image: "/sluzby/pmu-lips.jpg" },
    { id: "eyes", label: "Očné linky", image: "/sluzby/pmu-eyes.jpg" },
    { id: "dermopigmentation", label: "Dermopigmentácia", image: "/sluzby/permanent.jpg" }
];

export default function ServicesPage() {
    const [activeMain, setActiveMain] = useState("pmu");
    const [activePmu, setActivePmu] = useState("brows");
    const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);

    // Lightbox State
    const [lightbox, setLightbox] = useState<{
        isOpen: boolean;
        images: string[];
        index: number;
    }>({
        isOpen: false,
        images: [],
        index: 0
    });

    const openLightbox = (images: string[], index: number) => {
        setLightbox({ isOpen: true, images, index });
    };

    const nextImage = () => {
        setLightbox(prev => ({
            ...prev,
            index: (prev.index + 1) % prev.images.length
        }));
    };

    const prevImage = () => {
        setLightbox(prev => ({
            ...prev,
            index: (prev.index - 1 + prev.images.length) % prev.images.length
        }));
    };

    return (
        <main className="min-h-screen bg-main-bg text-white">
            <Header />

            <div className="pt-32 pb-24 w-[90vw] md:w-[95vw] mx-auto min-h-screen">

                {/* Page Title */}
                {/* Page Title */}


                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">

                    {/* MOBILE NAVIGATION: Custom Dropdowns */}
                    <div className="lg:hidden flex flex-col gap-4 mb-8">
                        {/* Main Service Dropdown */}
                        <div className="relative">
                            <label className="text-[#1D0E22] text-xs uppercase tracking-widest mb-2 block font-marcellus">Kategória</label>
                            <div className="flex flex-col gap-2">
                                <button
                                    onClick={() => setIsMainDropdownOpen(!isMainDropdownOpen)}
                                    className="relative h-16 w-full overflow-hidden rounded-xl border border-gold shadow-sm group"
                                >
                                    {/* Background Image for Active */}
                                    <div className="absolute inset-0">
                                        <Image
                                            src={MAIN_SERVICES.find(s => s.id === activeMain)?.image || "/sluzby/permanent.jpg"}
                                            alt="Active Category"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black/40" />

                                    <div className="relative z-10 px-6 flex items-center justify-between w-full h-full">
                                        <span className="font-marcellus uppercase tracking-widest text-white">
                                            {MAIN_SERVICES.find(s => s.id === activeMain)?.label}
                                        </span>
                                        <svg
                                            className={`w-5 h-5 text-gold transition-transform duration-300 ${isMainDropdownOpen ? "rotate-180" : ""}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isMainDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute top-full left-0 right-0 z-[40] mt-2 flex flex-col gap-2 p-2 bg-main-bg border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl"
                                        >
                                            {MAIN_SERVICES.filter(s => s.id !== activeMain).map((service) => (
                                                <button
                                                    key={service.id}
                                                    onClick={() => {
                                                        setActiveMain(service.id);
                                                        setIsMainDropdownOpen(false);
                                                    }}
                                                    className="relative h-14 w-full overflow-hidden rounded-lg group"
                                                >
                                                    <div className="absolute inset-0">
                                                        <Image
                                                            src={service.image}
                                                            alt={service.label}
                                                            fill
                                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
                                                    <div className="relative z-10 px-4 flex items-center h-full">
                                                        <span className="font-marcellus uppercase tracking-widest text-sm text-white/90 group-hover:text-white transition-colors">
                                                            {service.label}
                                                        </span>
                                                    </div>
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* LEFT SIDE: Main Navigation (Desktop) */}
                    <div className="hidden lg:flex flex-col gap-4 sticky top-32">
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
                                        {/* Mobile Subtask Selection */}
                                        <div className="xl:hidden flex flex-col gap-2 mb-4">
                                            <label className="text-[#1D0E22] text-xs uppercase tracking-widest mb-1 block font-marcellus">Služba</label>
                                            <div className="flex flex-wrap gap-2">
                                                {PMU_SUBTABS.map((sub) => (
                                                    <button
                                                        key={sub.id}
                                                        onClick={() => setActivePmu(sub.id)}
                                                        className={`px-4 py-2 rounded-lg border text-sm uppercase tracking-wider transition-all ${activePmu === sub.id
                                                            ? "border-gold bg-gold text-[#1D0E22] font-bold"
                                                            : "border-white/20 text-white opacity-60 hover:opacity-100"
                                                            }`}
                                                    >
                                                        {sub.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

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
                                            className="font-montserrat font-light text-[#1D0E22] leading-relaxed text-lg max-w-4xl"
                                        >
                                            {activePmu === "brows" && (
                                                <div className="space-y-12">
                                                    <div>
                                                        <h3 className="font-marcellus text-3xl text-[#1D0E22] mb-4">Permanentný make-up obočia</h3>
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
                                                    </div>

                                                    {/* Transformation 1: m1-m6 */}
                                                    <div className="space-y-6 pt-8 border-t border-black/5">
                                                        <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider">Premena: Laserové odstránenie a nová forma</h4>
                                                        <p className="text-base text-[#1D0E22]/80 italic">
                                                            Obočie má studený sivý odtieň a pigment je uložený v hrubej vrstve. Pri tetovaní cez tento zostatok by sivá vždy prebíjala čerstvý odtieň, preto je potrebné jeho odstránenie laserom.
                                                        </p>
                                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                            {[1, 2, 3, 4, 5, 6].map((i) => {
                                                                const mImages = [1, 2, 3, 4, 5, 6].map(n => `/permanent-obocie/m${n}.jpg`);
                                                                return (
                                                                    <div
                                                                        key={`m${i}`}
                                                                        className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/10 shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                                                                        onClick={() => openLightbox(mImages, i - 1)}
                                                                    >
                                                                        <Image src={mImages[i - 1]} alt={`Transformácia m${i}`} fill className="object-cover" />
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                        <p className="text-base text-[#1D0E22]">
                                                            Po jednej laserovej procedúre. Zostatok pigmentu je teplý, jemný a priesvitný, bez vplyvu na novú formu. Symetrický predkres. O tri hodiny je obočie hotové. Pri tvorbe nevymýšľam nič, čo by nebolo Vaše – zvýrazňujem dané a zachovávam prirodzený tvar.
                                                        </p>
                                                    </div>

                                                    {/* Standalone Brows Photos: b1-b3 */}
                                                    <div className="pt-8 border-t border-black/5">
                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                            {[1, 2, 3].map((i) => {
                                                                const bImages = [1, 2, 3].map(n => `/permanent-obocie/b${n}.jpg`);
                                                                return (
                                                                    <div
                                                                        key={`b${i}`}
                                                                        className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/10 shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                                                                        onClick={() => openLightbox(bImages, i - 1)}
                                                                    >
                                                                        <Image src={bImages[i - 1]} alt={`Obočie b${i}`} fill className="object-cover" />
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>

                                                    {/* Transformation 2: n1-n3 */}
                                                    <div className="space-y-6 pt-8 border-t border-black/5">
                                                        <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider">Korekcia formy a hustoty</h4>
                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                            {[1, 2, 3].map((i) => {
                                                                const nImages = [1, 2, 3].map(n => `/permanent-obocie/n${n}.jpg`);
                                                                return (
                                                                    <div
                                                                        key={`n${i}`}
                                                                        className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/10 shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                                                                        onClick={() => openLightbox(nImages, i - 1)}
                                                                    >
                                                                        <Image src={nImages[i - 1]} alt={`Transformácia n${i}`} fill className="object-cover" />
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                        <div className="space-y-4">
                                                            <p>
                                                                Prirodzené obočie malo vysoký zdvih, výrazný apex (pravdepodobne v súvislosti s botoxom) a prudký spád. Klientke viac pristala jemne vyrovnaná forma do plynulej línie.
                                                            </p>
                                                            <p>
                                                                Na korekcii sme zvolili o niečo tmavší odtieň a mierne zvýšili hustotu. Čaká nás ešte tretia procedúra na jemné dotvorenie celkovej harmónie.
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Individual Featured Photos */}
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-black/5">
                                                        {[
                                                            { src: "/permanent-obocie/PHOTO-2026-02-05-17-26-46.jpg", label: "Púdrové obočie vytvára optický lifting a definovaný tvar.", alt: "Púdrové obočie" },
                                                            { src: "/permanent-obocie/PHOTO-2026-02-05-17-37-00.jpg", label: "Púdrové obočie a očné linky.", alt: "Púdrové obočie a očné linky" },
                                                            { src: "/permanent-obocie/PHOTO-2026-02-05-18-13-02.jpg", label: "Obočie po roku od aplikácie.", alt: "Obočie po roku" }
                                                        ].map((photo, idx, arr) => (
                                                            <div key={idx} className="space-y-4">
                                                                <div
                                                                    className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/10 shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                                                                    onClick={() => openLightbox(arr.map(p => p.src), idx)}
                                                                >
                                                                    <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                                                                </div>
                                                                <p className="text-center font-marcellus text-[#1D0E22] tracking-wide">{photo.label}</p>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Final Bottom Grid: z1-z3 */}
                                                    <div className="pt-8 border-t border-black/5">
                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                            {[3, 1, 2].map((i, idx, arr) => {
                                                                const zImages = [3, 1, 2].map(n => `/permanent-obocie/z${n}.jpg`);
                                                                return (
                                                                    <div key={`z${i}`} className="space-y-4">
                                                                        <div
                                                                            className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/10 shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                                                                            onClick={() => openLightbox(zImages, idx)}
                                                                        >
                                                                            <Image src={`/permanent-obocie/z${i}.jpg`} alt={`Obočie z${i}`} fill className="object-cover" />
                                                                        </div>
                                                                        {i === 3 && (
                                                                            <p className="text-center font-marcellus text-[#1D0E22] tracking-wide text-sm">
                                                                                Pudrové obočie a očné linky medzi riasy
                                                                            </p>
                                                                        )}
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>

                                                    {/* Row: a1-a4 Grid */}
                                                    <div className="pt-8 border-t border-black/5 space-y-6">
                                                        <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider">Korekcia formy a hustoty</h4>
                                                        <p className="text-base text-[#1D0E22]">
                                                            Púdrové obočie minerálnymi pigmentmi – jemný, vzdušný efekt s prirodzeným vytrácaním.
                                                        </p>
                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                            {[1, 2, 3, 4].map((i) => {
                                                                const aImages = [1, 2, 3, 4].map(n => `/permanent-obocie/a${n}.JPG`);
                                                                return (
                                                                    <div
                                                                        key={`a${i}`}
                                                                        className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/10 shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                                                                        onClick={() => openLightbox(aImages, i - 1)}
                                                                    >
                                                                        <Image src={aImages[i - 1]} alt={`Obočie a${i}`} fill className="object-cover" />
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>

                                                    {/* Cenník Section */}
                                                    <div id="pmu-brows-prices" className="pt-16 border-t-2 border-gold/20 mt-16 space-y-12 bg-white/30 p-8 rounded-2xl">
                                                        <h3 className="font-marcellus text-4xl text-[#1D0E22] text-center uppercase tracking-widest">Cenník - Obočie</h3>

                                                        <div className="max-w-2xl mx-auto space-y-10 font-montserrat text-[#1D0E22]">
                                                            {/* Item 1 */}
                                                            <div className="space-y-2">
                                                                <div className="flex justify-between items-end gap-4">
                                                                    <h5 className="font-marcellus text-xl uppercase tracking-wider">Konzultácia & predkreslenie</h5>
                                                                    <span className="text-[#1D0E22] font-bold text-lg whitespace-nowrap">Zdarma</span>
                                                                </div>
                                                                <p className="text-sm opacity-80 italic">20 minút</p>
                                                                <p className="text-base">Individuálna analýza tváre, návrh tvaru a výber najvhodnejšej techniky.</p>
                                                            </div>

                                                            <div className="border-b border-gold/10 w-24 mx-auto" />

                                                            {/* Item 2 */}
                                                            <div className="space-y-2">
                                                                <div className="flex justify-between items-end gap-4">
                                                                    <h5 className="font-marcellus text-xl uppercase tracking-wider">Hyperrealistické obočie – Hair Stroke</h5>
                                                                    <span className="text-[#1D0E22] font-bold text-lg whitespace-nowrap">400 €</span>
                                                                </div>
                                                                <p className="text-sm opacity-80 italic">Hlavná procedúra | 3 – 3,5 hodiny</p>
                                                                <p className="text-base">Vysoko precízna chĺpková technika najvyššej úrovne, vytvárajúca ilúziu prirodzeného rastu obočia. Výsledok pôsobí jemne, vzdušne a maximálne realisticky.</p>
                                                            </div>

                                                            <div className="border-b border-gold/10 w-24 mx-auto" />

                                                            {/* Item 3 */}
                                                            <div className="space-y-2">
                                                                <div className="flex justify-between items-end gap-4">
                                                                    <h5 className="font-marcellus text-xl uppercase tracking-wider">Púdrové obočie</h5>
                                                                    <span className="text-[#1D0E22] font-bold text-lg whitespace-nowrap">320 €</span>
                                                                </div>
                                                                <p className="text-sm opacity-80 italic">Hybridné alebo minerálne pigmenty</p>
                                                                <p className="text-sm opacity-80 italic">Hlavná procedúra | 2,5 – 3 hodiny</p>
                                                                <p className="text-base">Mäkké, vrstvené tieňovanie bez ostrých kontúr. Obočie pôsobí upravene, elegantne a nadčasovo.</p>
                                                            </div>

                                                            <div className="border-b border-gold/10 w-24 mx-auto" />

                                                            {/* Item 4 */}
                                                            <div className="space-y-4">
                                                                <h5 className="font-marcellus text-xl uppercase tracking-wider">Korekcie</h5>
                                                                <div className="space-y-6 pl-4 border-l-2 border-gold/20">
                                                                    <div className="space-y-1">
                                                                        <div className="flex justify-between items-end gap-4">
                                                                            <span className="font-bold">Prvá korekcia</span>
                                                                            <span className="text-[#1D0E22] font-bold">120 €</span>
                                                                        </div>
                                                                        <p className="text-sm opacity-70">45 minút – 2 hodiny</p>
                                                                    </div>
                                                                    <div className="space-y-1">
                                                                        <div className="flex justify-between items-end gap-4">
                                                                            <span className="font-bold">Druhá korekcia</span>
                                                                            <span className="text-[#1D0E22] font-bold">Zdarma</span>
                                                                        </div>
                                                                        <p className="text-sm opacity-70">15 – 30 minút</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Sticky Scroll Button */}
                                                    <motion.button
                                                        initial={{ opacity: 0, scale: 0.5 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={() => document.getElementById('pmu-brows-prices')?.scrollIntoView({ behavior: 'smooth' })}
                                                        className="fixed bottom-8 right-8 z-50 bg-[#1D0E22] text-gold border border-gold/30 px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 backdrop-blur-md group"
                                                    >
                                                        <span className="font-marcellus text-sm uppercase tracking-widest group-hover:text-white transition-colors">Cenník</span>
                                                        <div className="w-5 h-5 flex items-center justify-center">
                                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-gold group-hover:stroke-white transition-colors">
                                                                <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </div>
                                                    </motion.button>
                                                </div>
                                            )}

                                            {activePmu === "lips" && (
                                                <>
                                                    <h3 className="font-marcellus text-3xl text-[#1D0E22] mb-4">Permanentný make-up pier</h3>
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
                                                    <h3 className="font-marcellus text-3xl text-[#1D0E22] mb-4">Permanentný make-up očných liniek</h3>
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

                                            {activePmu === "dermopigmentation" && (
                                                <>
                                                    <h3 className="font-marcellus text-3xl text-[#1D0E22] mb-4">Dermopigmentácia</h3>
                                                    <div className="space-y-8">
                                                        <div className="space-y-3">
                                                            <h4 className="font-marcellus text-xl text-[#1D0E22] uppercase tracking-wider border-l-2 border-[#1D0E22]/20 pl-4">Rekonštrukcia prsnej bradavky</h4>
                                                            <p className="leading-relaxed text-[#1D0E22]">
                                                                Túto službu najčastejšie využívajú dámy po plastickej operácii pŕs. Prichádzajú z estetických dôvodov.
                                                                Za dve, tri procedúry dokážeme <strong>zosúladiť veľkosť prsných bradaviek, ich umiestnenie a farebne ich zjednotiť</strong>.
                                                                Procedúra trvá 60-120 min.
                                                            </p>
                                                        </div>

                                                        <div className="space-y-3">
                                                            <h4 className="font-marcellus text-xl text-[#1D0E22] uppercase tracking-wider border-l-2 border-[#1D0E22]/20 pl-4">Kamufláž jaziev</h4>
                                                            <p className="leading-relaxed text-[#1D0E22]">
                                                                Procedúra sa vykonáva na rok starých a vyzretých jazvách.
                                                                Dokážeme sa maximálne priblížiť odtieňu pokožky.
                                                                Pri procedúre hrá dôležitú úlohu ľahkosť pri nanášaní pigmentu a vrstvenie.
                                                                Je potrebných niekoľko procedúr.
                                                            </p>
                                                        </div>

                                                        <div className="space-y-3">
                                                            <h4 className="font-marcellus text-xl text-[#1D0E22] uppercase tracking-wider border-l-2 border-[#1D0E22]/20 pl-4">Kamufláž vitiliga</h4>
                                                            <div className="space-y-4">
                                                                <p className="leading-relaxed text-[#1D0E22]">
                                                                    Vitiligo je autoimunitné ochorenie, ktoré sa prejavuje stratou pigmentu.
                                                                    Pri tejto procedúre je najdôležitejšie nájsť takú <strong>farbu pigmentu, ktorá je absolútne zhodná s farbou pokožky</strong>.
                                                                </p>
                                                                <p className="leading-relaxed text-[#1D0E22] italic border-t border-[#1D0E22]/10 pt-4">
                                                                    Slnko a vitiligo. Vitiligo nikdy sa neopáli. Ak sa zvyknete opaľovať, vitiligo s kamuflážou sa nebude až tak výrazne odlišovať od vašej opálenej pokožky, <strong>stratí svoju výraznú bielobu</strong>.
                                                                    Sú potrebné 2 až 4 sedenia.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </motion.div>
                                    </div>

                                    {/* PMU Sub-Navigation (Right Side Column) - Desktop Only */}
                                    <div className="hidden xl:flex w-[200px] flex-col gap-4 flex-shrink-0">
                                        {PMU_SUBTABS.map((sub) => (
                                            <button
                                                key={sub.id}
                                                onClick={() => setActivePmu(sub.id)}
                                                className={`group relative h-16 md:h-20 overflow-hidden rounded-lg border transition-all duration-300 ${activePmu === sub.id
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

                                    <div className="space-y-6 font-montserrat font-light text-[#1D0E22] leading-relaxed text-lg max-w-4xl">
                                        <h3 className="font-marcellus text-4xl text-[#1D0E22] mb-8 uppercase">
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

            <Lightbox
                isOpen={lightbox.isOpen}
                images={lightbox.images}
                currentIndex={lightbox.index}
                onClose={() => setLightbox(prev => ({ ...prev, isOpen: false }))}
                onNext={nextImage}
                onPrev={prevImage}
            />
        </main >
    );
}

function subTabsImage(id: string) {
    if (id === 'brows') return "/permanent-obocie/m4.jpg";
    if (id === 'lips') return "/sluzby/pmu-lips.jpg";
    if (id === 'eyes') return "/sluzby/pmu-eyes.jpg";
    if (id === 'dermopigmentation') return "/sluzby/permanent.jpg";
    return "/sluzby/permanent.jpg";
}
