"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import Image from "next/image";
import CalendarPicker from "./CalendarPicker";
import { supabase, TimeSlot } from "@/lib/supabase";

const MONTHS_SK = [
    "januára", "februára", "marca", "apríla", "mája", "júna",
    "júla", "augusta", "septembra", "októbra", "novembra", "decembra"
];

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
    const [wantCustomDate, setWantCustomDate] = useState(false);
    const [customDate, setCustomDate] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    // Reset form when modal closes
    useEffect(() => {
        if (!isOpen) {
            setSelectedDate(null);
            setSelectedSlot(null);
            setWantCustomDate(false);
            setCustomDate("");
            setName("");
            setPhone("");
            setMessage("");
            setStatus("idle");
            setErrorMsg("");
        }
    }, [isOpen]);

    const formatDate = (date: Date) => {
        return `${date.getDate()}. ${MONTHS_SK[date.getMonth()]} ${date.getFullYear()}`;
    };

    const formatTime = (time: string) => time.slice(0, 5);

    const formatTimeRange = (time: string, durationMinutes: number) => {
        const [h, m] = time.split(":").map(Number);
        const totalMin = h * 60 + m + durationMinutes;
        const endH = String(Math.floor(totalMin / 60) % 24).padStart(2, "0");
        const endM = String(totalMin % 60).padStart(2, "0");
        return `${formatTime(time)} - ${endH}:${endM}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMsg("");

        try {
            // Insert booking
            const bookingData: Record<string, unknown> = {
                client_name: name,
                client_phone: phone,
                message: message || null,
                time_slot_id: selectedSlot?.id || null,
            };

            const { data: booking, error: bookingError } = await supabase
                .from("viktorija_bookings")
                .insert(bookingData)
                .select()
                .single();

            if (bookingError) throw bookingError;

            // Mark slot as unavailable if a slot was selected
            if (selectedSlot) {
                await supabase
                    .from("viktorija_time_slots")
                    .update({ is_available: false })
                    .eq("id", selectedSlot.id);
            }

            // Create notification
            await supabase
                .from("viktorija_notifications")
                .insert({
                    booking_id: booking.id,
                    type: "new_booking",
                });

            setStatus("success");
        } catch {
            setStatus("error");
            setErrorMsg("Niečo sa pokazilo. Skúste to znova alebo zavolajte.");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="bg-[#1D0E22] border border-gold/30 w-full max-w-4xl rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex justify-between items-center">
                            <h3 className="font-marcellus text-gold text-xl uppercase tracking-widest">
                                Objednať sa
                            </h3>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6">
                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex flex-col items-center justify-center py-12 space-y-4 text-center"
                                >
                                    <CheckCircle className="w-16 h-16 text-green-400" />
                                    <h4 className="font-marcellus text-gold text-xl uppercase tracking-wider">
                                        Ďakujeme!
                                    </h4>
                                    <p className="font-montserrat text-white/70 text-sm max-w-sm">
                                        Vaša rezervácia bola odoslaná. Ozvem sa Vám čo najskôr na potvrdenie termínu.
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className="mt-4 px-8 py-3 bg-gold text-[#1D0E22] font-marcellus uppercase tracking-widest rounded-lg hover:bg-gold/90 transition-colors text-sm"
                                    >
                                        Zavrieť
                                    </button>
                                </motion.div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
                                    {/* Left: Calendar only */}
                                    <div>
                                        <CalendarPicker
                                            selectedDate={selectedDate}
                                            onSelectDate={setSelectedDate}
                                            selectedSlot={selectedSlot}
                                            onSelectSlot={setSelectedSlot}
                                        />
                                    </div>

                                    {/* Right: Contact + Form */}
                                    <div className="flex flex-col space-y-5 md:border-l md:border-white/10 md:pl-8">
                                        <div className="flex flex-col items-center text-center space-y-4">
                                            <p className="font-montserrat text-white/70 text-sm leading-relaxed">
                                                V prípade že voľné termíny Vám nevyhovujú ma kľudne kontaktujte telefonicky
                                            </p>
                                            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gold/40 shadow-lg">
                                                <Image
                                                    src="/permanent-obocie/rezervacia.jpg"
                                                    alt="Viktória"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <a
                                                href="tel:+421907796562"
                                                className="flex items-center gap-2 text-gold/80 hover:text-gold transition-colors font-montserrat text-base"
                                            >
                                                <Phone className="w-5 h-5" />
                                                <span>Zavolať</span>
                                            </a>
                                        </div>

                                        <div className="border-t border-white/10" />

                                        {/* Form */}
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            {/* Selected slot + custom date checkbox on right */}
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1 bg-white/5 border border-gold/30 rounded-lg px-4 py-3 font-montserrat text-sm">
                                                    {wantCustomDate ? (
                                                        <input
                                                            type="text"
                                                            placeholder="Napíšte preferovaný termín"
                                                            value={customDate}
                                                            onChange={(e) => setCustomDate(e.target.value)}
                                                            className="w-full bg-transparent text-white placeholder-white/30 font-light text-sm focus:outline-none"
                                                            autoFocus
                                                        />
                                                    ) : (
                                                        <span className="text-gold">
                                                            {selectedSlot ? (
                                                                <>
                                                                    <span className="font-bold">{formatDate(selectedDate!)}</span>
                                                                    {" o "}
                                                                    <span className="font-bold">{formatTimeRange(selectedSlot.time, selectedSlot.duration_minutes)}</span>
                                                                </>
                                                            ) : (
                                                                <span className="text-white/30">Vyberte termín</span>
                                                            )}
                                                        </span>
                                                    )}
                                                </div>
                                                <label className="flex items-center gap-1.5 cursor-pointer group shrink-0">
                                                    <input
                                                        type="checkbox"
                                                        checked={wantCustomDate}
                                                        onChange={(e) => {
                                                            setWantCustomDate(e.target.checked);
                                                            if (e.target.checked) setSelectedSlot(null);
                                                        }}
                                                        className="w-3.5 h-3.5 rounded border-white/20 bg-white/5 text-gold accent-[#EEE3CE] cursor-pointer"
                                                    />
                                                    <span className="font-montserrat text-white/50 text-xs group-hover:text-white/70 transition-colors whitespace-nowrap">
                                                        Iný termín
                                                    </span>
                                                </label>
                                            </div>

                                            <input
                                                type="text"
                                                placeholder="Vaše meno"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 font-montserrat font-light text-sm focus:border-gold focus:outline-none transition-colors"
                                            />
                                            <input
                                                type="tel"
                                                placeholder="Telefón"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 font-montserrat font-light text-sm focus:border-gold focus:outline-none transition-colors"
                                            />
                                            <textarea
                                                placeholder="Správa (voliteľné)"
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                rows={2}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 font-montserrat font-light text-sm focus:border-gold focus:outline-none transition-colors resize-none"
                                            />

                                            {status === "error" && (
                                                <div className="flex items-center gap-2 text-red-400 text-sm font-montserrat">
                                                    <AlertCircle className="w-4 h-4" />
                                                    {errorMsg}
                                                </div>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={status === "submitting" || (!wantCustomDate && !selectedSlot)}
                                                className="w-full bg-gold text-[#1D0E22] font-marcellus uppercase tracking-widest py-3 rounded-lg hover:bg-gold/90 transition-colors text-sm disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                            >
                                                {status === "submitting" ? (
                                                    <>
                                                        <Loader2 className="w-4 h-4 animate-spin" />
                                                        Odosielam...
                                                    </>
                                                ) : (
                                                    "Odoslať"
                                                )}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
