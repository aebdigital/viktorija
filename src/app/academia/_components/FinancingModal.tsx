"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CreditCard, Landmark, ChevronRight } from "lucide-react";

export default function FinancingModal({ variant = "link" }: { variant?: "link" | "button" }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {variant === "link" ? (
                <button
                    onClick={() => setIsOpen(true)}
                    className="inline-flex items-center gap-2 text-[#1D0E22]/60 hover:text-gold transition-colors font-montserrat text-[11px] uppercase tracking-widest mt-2"
                >
                    <CreditCard size={14} className="opacity-50" />
                    Možnosť financovania
                </button>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-full sm:w-auto px-12 py-4 border-2 border-[#1D0E22]/10 text-[#1D0E22] font-marcellus uppercase tracking-[0.2em] rounded-full hover:border-gold hover:text-gold transition-all duration-500 text-sm cursor-pointer"
                >
                    Možnosť financovania
                </button>
            )}

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-2xl bg-[#1D0E22] border border-gold/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col p-8 md:p-12"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="space-y-8 overflow-y-auto max-h-[70vh] pr-2" data-lenis-prevent>
                                <div className="space-y-2 text-center">
                                    <h2 className="text-gold font-marcellus text-2xl md:text-3xl uppercase tracking-widest leading-tight">
                                        Možnosti úhrady
                                    </h2>
                                    <div className="h-px w-16 bg-gold/40 mx-auto mt-4" />
                                </div>

                                <div className="space-y-6 text-center text-white/80 font-montserrat text-sm md:text-base leading-relaxed">
                                    <p>
                                        Rozumieme, že investícia do vzdelania je rozhodnutie.<br />
                                        Preto ponúkame flexibilné formy úhrady:
                                    </p>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    {/* Internal Installments */}
                                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-4">
                                        <div className="flex items-center gap-3 text-gold">
                                            <CreditCard size={20} />
                                            <h3 className="font-marcellus uppercase tracking-widest text-sm">Interné splátky</h3>
                                        </div>
                                        <p className="text-xs text-white/60 font-light leading-relaxed">
                                            Platbu kurzu si môžete rozdeliť na tri časti:
                                        </p>
                                        <ul className="space-y-2 text-[11px] text-white/80 font-light">
                                            <li className="flex gap-2">
                                                <span className="text-gold shrink-0">•</span>
                                                <span>záloha 200 € – rezervácia miesta, splatná pred začiatkom kurzu</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-gold shrink-0">•</span>
                                                <span>1. splátka – pri prvom osobnom stretnutí</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-gold shrink-0">•</span>
                                                <span>2. splátka – pred korekciou</span>
                                            </li>
                                        </ul>
                                        <p className="text-[10px] text-gold/60 italic pt-2">Jednoduché riešenie bez administratívy.</p>
                                    </div>

                                    {/* Tatra Banka */}
                                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-4 flex flex-col justify-between">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 text-gold">
                                                <Landmark size={20} />
                                                <h3 className="font-marcellus uppercase tracking-widest text-sm">Cez Tatra banku</h3>
                                            </div>
                                            <p className="text-xs text-white/60 font-light leading-relaxed">
                                                Pre komfortnejšie nastavenie platieb je možné využiť aj externé financovanie.
                                            </p>
                                            <p className="text-[11px] text-white/80 font-light">
                                                Splátky si nastavíte individuálne podľa svojich možností priamo cez Tatra banku.
                                            </p>
                                        </div>

                                        <div className="pt-4">
                                            <a
                                                href="https://www.tatrabanka.sk/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full inline-flex items-center justify-center gap-2 py-3 border border-gold/40 text-gold rounded-full text-[10px] uppercase tracking-widest hover:bg-gold hover:text-[#1D0E22] transition-all"
                                            >
                                                Požiadať o financovanie
                                                <ChevronRight size={14} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
