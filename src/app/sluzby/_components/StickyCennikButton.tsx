"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import BookingModal from "./BookingModal";

export default function StickyCennikButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 z-50 bg-[#1D0E22] text-gold border border-gold/30 px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 backdrop-blur-md group"
            >
                <span className="font-marcellus text-sm uppercase tracking-widest group-hover:text-white transition-colors">Objednať sa ONLINE</span>
                <CalendarDays className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
            </motion.button>

            <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
