"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

export default function WebinarButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Floating Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 z-50 bg-gold text-[#1D0E22] px-8 py-4 rounded-full shadow-[0_10px_30px_rgba(182,141,87,0.4)] font-marcellus uppercase tracking-[0.2em] text-sm hover:bg-[#d4ac6e] transition-colors flex items-center gap-3 border border-white/20"
            >
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D0E22] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#1D0E22]"></span>
                </span>
                Webinár
            </motion.button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center px-6">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-4xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
                            data-lenis-prevent
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 z-10 text-[#1D0E22]/50 hover:text-[#1D0E22] transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {/* Left Side: Content */}
                            <div className="flex-1 p-10 md:p-16 flex flex-col justify-center space-y-8">
                                <div className="space-y-4">
                                    <p className="text-[#A6824D] font-marcellus uppercase tracking-[0.3em] text-xs">Exkluzívna príležitosť</p>
                                    <h2 className="text-[#1D0E22] font-marcellus text-3xl md:text-5xl uppercase leading-tight">
                                        Prihláste sa na <span className="block text-[#A6824D]">webinár</span>
                                    </h2>
                                    <p className="text-[#1D0E22]/60 font-montserrat text-base leading-relaxed max-w-sm">
                                        Získajte cenné rady priamo od Viktórie a posuňte svoju kariéru v PMU na novú úroveň.
                                    </p>
                                </div>

                                <div className="pt-4">
                                    <a
                                        href="https://wa.me/421907796562"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-montserrat font-medium hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                                    >
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.435 5.63 1.435h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        Prihlásiť sa
                                    </a>
                                </div>
                            </div>

                            {/* Right Side: Photo */}
                            <div className="hidden md:block flex-1 relative min-h-[500px]">
                                <Image
                                    src="/academia/vik1.jpg"
                                    alt="Webinár"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10" />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
