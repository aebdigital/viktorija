"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { supabase, TimeSlot } from "@/lib/supabase";

const MONTHS = [
    "Január", "Február", "Marec", "Apríl", "Máj", "Jún",
    "Júl", "August", "September", "Október", "November", "December"
];

const DAYS = ["Po", "Ut", "St", "Št", "Pi", "So", "Ne"];

interface CalendarPickerProps {
    selectedDate: Date | null;
    onSelectDate: (date: Date) => void;
    selectedSlot: TimeSlot | null;
    onSelectSlot: (slot: TimeSlot | null) => void;
}

export default function CalendarPicker({ selectedDate, onSelectDate, selectedSlot, onSelectSlot }: CalendarPickerProps) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [slots, setSlots] = useState<TimeSlot[]>([]);
    const [loading, setLoading] = useState(false);

    // Fetch available slots for the current month
    useEffect(() => {
        async function fetchSlots() {
            setLoading(true);
            const startDate = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-01`;
            const endDate = currentMonth === 11
                ? `${currentYear + 1}-01-01`
                : `${currentYear}-${String(currentMonth + 2).padStart(2, "0")}-01`;

            const { data } = await supabase
                .from("viktorija_time_slots")
                .select("*")
                .gte("date", startDate)
                .lt("date", endDate)
                .order("date")
                .order("time");

            setSlots(data || []);
            setLoading(false);
        }
        fetchSlots();
    }, [currentMonth, currentYear]);

    // Days that have any slots
    const daysWithSlots = new Set(
        slots.map(s => parseInt(s.date.split("-")[2], 10))
    );

    // Days that have at least one available slot
    const daysWithAvailable = new Set(
        slots.filter(s => s.is_available).map(s => parseInt(s.date.split("-")[2], 10))
    );

    // Slots for the selected day
    const slotsForDay = selectedDate
        ? slots.filter(s => {
            const d = new Date(s.date + "T00:00:00");
            return d.getDate() === selectedDate.getDate()
                && d.getMonth() === selectedDate.getMonth()
                && d.getFullYear() === selectedDate.getFullYear();
        })
        : [];

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    const prevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const nextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const isToday = (day: number) => {
        return day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
    };

    const isPast = (day: number) => {
        const date = new Date(currentYear, currentMonth, day);
        return date < today;
    };

    const isSelected = (day: number) => {
        if (!selectedDate) return false;
        return day === selectedDate.getDate() && currentMonth === selectedDate.getMonth() && currentYear === selectedDate.getFullYear();
    };

    const canGoPrev = currentYear > today.getFullYear() || (currentYear === today.getFullYear() && currentMonth > today.getMonth());

    const formatTime = (time: string) => time.slice(0, 5);

    const formatTimeRange = (time: string, durationMinutes: number) => {
        const [h, m] = time.split(":").map(Number);
        const totalMin = h * 60 + m + durationMinutes;
        const endH = String(Math.floor(totalMin / 60) % 24).padStart(2, "0");
        const endM = String(totalMin % 60).padStart(2, "0");
        return `${formatTime(time)} - ${endH}:${endM}`;
    };

    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <button
                    onClick={prevMonth}
                    disabled={!canGoPrev}
                    className="w-8 h-8 flex items-center justify-center rounded-full text-gold hover:bg-gold/20 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="font-marcellus text-gold text-base uppercase tracking-wider">
                    {MONTHS[currentMonth]} {currentYear}
                </span>
                <button
                    onClick={nextMonth}
                    className="w-8 h-8 flex items-center justify-center rounded-full text-gold hover:bg-gold/20 transition-colors"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Day names */}
            <div className="grid grid-cols-7 gap-0 mb-1">
                {DAYS.map(day => (
                    <div key={day} className="text-center text-xs font-montserrat text-white/40 py-1">
                        {day}
                    </div>
                ))}
            </div>

            {/* Day grid */}
            <div className="grid grid-cols-7 gap-0">
                {Array.from({ length: startOffset }).map((_, i) => (
                    <div key={`empty-${i}`} />
                ))}

                {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const past = isPast(day);
                    const sel = isSelected(day);
                    const tod = isToday(day);
                    const hasSlots = daysWithSlots.has(day);

                    return (
                        <button
                            key={day}
                            disabled={past}
                            onClick={() => {
                                onSelectDate(new Date(currentYear, currentMonth, day));
                                onSelectSlot(null);
                            }}
                            className={`
                                w-9 h-9 mx-auto rounded-full flex flex-col items-center justify-center text-sm transition-all relative
                                ${past ? "text-white/15 cursor-not-allowed" : ""}
                                ${sel ? "bg-gold text-[#1D0E22] font-bold" : ""}
                                ${!sel && !past ? "text-white/80 hover:bg-gold/20 hover:text-gold cursor-pointer" : ""}
                                ${tod && !sel ? "ring-1 ring-gold/50" : ""}
                            `}
                        >
                            {day}
                            {hasSlots && !past && (
                                <span className={`absolute bottom-0.5 w-1 h-1 rounded-full ${
                                    sel ? "bg-[#1D0E22]" : daysWithAvailable.has(day) ? "bg-gold" : "bg-white/20"
                                }`} />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Loading indicator */}
            {loading && (
                <div className="mt-4 text-center text-white/30 text-sm font-montserrat">
                    Načítavam...
                </div>
            )}

            {/* Time slots for selected day */}
            {selectedDate && slotsForDay.length > 0 && (
                <div className="mt-5 space-y-2">
                    <p className="text-white/50 text-xs font-montserrat uppercase tracking-wider mb-3">
                        Voľné termíny
                    </p>
                    <div className="flex flex-col gap-1.5">
                        {slotsForDay.map(slot => {
                            const booked = !slot.is_available;
                            return (
                                <button
                                    key={slot.id}
                                    onClick={() => !booked && onSelectSlot(slot)}
                                    disabled={booked}
                                    className={`
                                        flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-montserrat transition-all
                                        ${booked
                                            ? "bg-white/5 border-white/5 text-white/25 cursor-not-allowed"
                                            : selectedSlot?.id === slot.id
                                                ? "bg-gold/20 border-gold text-gold"
                                                : "bg-white/5 border-white/10 text-white/70 hover:border-gold/50 hover:text-white"
                                        }
                                    `}
                                >
                                    <Clock className={`w-3.5 h-3.5 flex-shrink-0 ${booked ? "opacity-30" : ""}`} />
                                    <span className={`font-medium ${booked ? "line-through" : ""}`}>{formatTimeRange(slot.time, slot.duration_minutes)}</span>
                                    {booked && <span className="text-[10px] opacity-50 ml-auto">obsadené</span>}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {selectedDate && slotsForDay.length === 0 && !loading && (
                <div className="mt-5 text-center text-white/30 text-sm font-montserrat">
                    Na tento deň nie sú žiadne termíny
                </div>
            )}
        </div>
    );
}
