"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

const COURSES = [
    { name: "The Art of PMU", term: "2. 10. – 13. 11. 2026" },
    { name: "Tri Techniky Obočia", term: "19. 10. – 27. 11. 2026" },
    { name: "Hyperrealistické Obočie", term: "5. 10. – 20. 11. 2026" },
    { name: "Master Class: PMU Očných Liniek", term: "28. 9. – 6. 11. 2026" },
    { name: "Master Class: PMU Pier", term: "14. 9. – 23. 10. 2026" },
];

interface CourseApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    courseName: string;
}

export default function CourseApplicationModal({ isOpen, onClose, courseName: initialCourseName }: CourseApplicationModalProps) {
    const [selectedCourse, setSelectedCourse] = useState(COURSES.find(c => c.name === initialCourseName) || COURSES[0]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [instagram, setInstagram] = useState("");
    const [facebook, setFacebook] = useState("");
    const [experienceLevel, setExperienceLevel] = useState<"beginner" | "intermediate" | "advanced" | null>(null);
    const [practiceScope, setPracticeScope] = useState("");
    const [worksInBeauty, setWorksInBeauty] = useState<boolean | null>(null);
    const [beautyField, setBeautyField] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    // Update selected course when prop changes (e.g. user opens modal from different page)
    useEffect(() => {
        if (isOpen) {
            const course = COURSES.find(c => c.name === initialCourseName);
            if (course) setSelectedCourse(course);
        }
    }, [initialCourseName, isOpen]);

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMsg("");

        try {
            const { error } = await supabase
                .from("viktorija_course_applications")
                .insert({
                    course_name: selectedCourse.name,
                    client_name: name,
                    client_email: email,
                    client_phone: phone,
                    instagram: instagram || null,
                    facebook: facebook || null,
                    experience_level: experienceLevel,
                    practice_scope: practiceScope || null,
                    works_in_beauty: worksInBeauty,
                    beauty_field: beautyField || null,
                    selected_term: selectedCourse.term,
                });

            if (error) throw error;

            setStatus("success");
        } catch (err: any) {
            console.error("Error submitting application:", err);
            setStatus("error");
            setErrorMsg("Niečo sa pokazilo. Skúste to znova neskôr.");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="bg-[#1D0E22] border border-gold/30 w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header Area */}
                        <div className="p-6 border-b border-gold/20 flex justify-between items-center bg-black/20">
                            <h3 className="font-marcellus text-gold text-xl uppercase tracking-widest">Prihláška na kurz PMU</h3>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 overflow-y-auto p-8 md:p-12" data-lenis-prevent>
                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="h-full flex flex-col items-center justify-center space-y-6 text-center py-12"
                                >
                                    <CheckCircle className="w-20 h-20 text-gold" />
                                    <div className="space-y-2">
                                        <h3 className="font-marcellus text-gold text-3xl uppercase tracking-widest">Prihláška odoslaná</h3>
                                        <p className="font-montserrat text-white/70 max-w-md">
                                            Ďakujeme za váš záujem o kurz {selectedCourse.name}. Čoskoro vás budeme kontaktovať s ďalšími informáciami.
                                        </p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="px-12 py-4 bg-gold text-[#1D0E22] font-marcellus uppercase tracking-widest rounded-full hover:bg-white transition-colors"
                                    >
                                        Zavrieť
                                    </button>
                                </motion.div>
                            ) : (
                                <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-12">
                                    {/* Left Side: Course Selector */}
                                    <div className="space-y-8">
                                        <div>
                                            <p className="font-montserrat text-xs uppercase tracking-[0.3em] text-gold/60 mb-2">Výber kurzu</p>
                                            <h2 className="font-marcellus text-2xl text-white uppercase tracking-widest">Program vzdelávania</h2>
                                            <div className="h-px w-16 bg-gold/40 mt-4" />
                                        </div>

                                        <div className="space-y-3">
                                            {COURSES.map((course) => (
                                                <button
                                                    key={course.name}
                                                    onClick={() => setSelectedCourse(course)}
                                                    className={`w-full text-left p-5 rounded-xl border transition-all duration-300 group ${
                                                        selectedCourse.name === course.name
                                                            ? "border-gold bg-gold/10 text-white shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                                                            : "border-white/10 bg-white/5 text-white/40 hover:border-white/30"
                                                    }`}
                                                >
                                                    <div className="flex flex-col gap-1">
                                                        <span className={`font-marcellus text-sm uppercase tracking-widest transition-colors ${selectedCourse.name === course.name ? "text-gold" : "group-hover:text-white/70"}`}>
                                                            {course.name}
                                                        </span>
                                                        <span className="font-montserrat text-[11px] opacity-60">
                                                            Termín: {course.term}
                                                        </span>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right Side: Detailed Form */}
                                    <form onSubmit={handleSubmit} className="space-y-10">
                                        {/* Section: Personal Info */}
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-4">
                                                <div className="h-px flex-1 bg-white/10" />
                                                <h4 className="font-marcellus text-[10px] uppercase tracking-[0.3em] text-gold/80">Osobné údaje</h4>
                                                <div className="h-px flex-1 bg-white/10" />
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <div className="space-y-1 md:col-span-2">
                                                    <label className="font-montserrat text-[10px] uppercase tracking-widest text-white/40 ml-1">Meno a priezvisko</label>
                                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-montserrat text-sm focus:border-gold outline-none transition-all" />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="font-montserrat text-[10px] uppercase tracking-widest text-white/40 ml-1">Mobil</label>
                                                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-montserrat text-sm focus:border-gold outline-none transition-all" />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="font-montserrat text-[10px] uppercase tracking-widest text-white/40 ml-1">E-mail</label>
                                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-montserrat text-sm focus:border-gold outline-none transition-all" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Section: Social Media */}
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-4">
                                                <div className="h-px flex-1 bg-white/10" />
                                                <h4 className="font-marcellus text-[10px] uppercase tracking-[0.3em] text-gold/80">Sociálne siete</h4>
                                                <div className="h-px flex-1 bg-white/10" />
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <div className="space-y-1">
                                                    <label className="font-montserrat text-[10px] uppercase tracking-widest text-white/40 ml-1">Instagram</label>
                                                    <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-montserrat text-sm focus:border-gold outline-none transition-all" placeholder="@vas_profil" />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="font-montserrat text-[10px] uppercase tracking-widest text-white/40 ml-1">Facebook</label>
                                                    <input type="text" value={facebook} onChange={(e) => setFacebook(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-montserrat text-sm focus:border-gold outline-none transition-all" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Section: Professional Experience */}
                                        <div className="space-y-8">
                                            <div className="flex items-center gap-4">
                                                <div className="h-px flex-1 bg-white/10" />
                                                <h4 className="font-marcellus text-[10px] uppercase tracking-[0.3em] text-gold/80">Odborné skúsenosti</h4>
                                                <div className="h-px flex-1 bg-white/10" />
                                            </div>

                                            <div className="space-y-6">
                                                <div className="space-y-3">
                                                    <p className="font-montserrat text-[11px] uppercase tracking-widest text-white/60">Aká je Vaša úroveň zručnosti s permanentným makeupom?</p>
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                                        {[
                                                            { id: "beginner", label: "Som začiatočník" },
                                                            { id: "intermediate", label: "Som mierne pokročilá" },
                                                            { id: "advanced", label: "Som pokročilá" }
                                                        ].map((level) => (
                                                            <button
                                                                key={level.id}
                                                                type="button"
                                                                onClick={() => setExperienceLevel(level.id as any)}
                                                                className={`py-3 px-4 rounded-xl border transition-all text-[10px] font-montserrat uppercase tracking-widest ${
                                                                    experienceLevel === level.id ? "bg-gold text-[#1D0E22] border-gold" : "bg-white/5 border-white/10 text-white/40 hover:border-white/20"
                                                                }`}
                                                            >
                                                                {level.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                                {(experienceLevel === "intermediate" || experienceLevel === "advanced") && (
                                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-1">
                                                        <label className="font-montserrat text-[10px] uppercase tracking-widest text-white/40 ml-1">Uveďte prosím rozsah vašej praxe (počet klientiek ročne)</label>
                                                        <input type="text" value={practiceScope} onChange={(e) => setPracticeScope(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-montserrat text-sm focus:border-gold outline-none transition-all" />
                                                    </motion.div>
                                                )}

                                                <div className="space-y-3 pt-2">
                                                    <p className="font-montserrat text-[11px] uppercase tracking-widest text-white/60">Pracujete v skrášľujúcich službách?</p>
                                                    <div className="flex gap-4">
                                                        {[true, false].map((val) => (
                                                            <button
                                                                key={val ? "ano-beauty" : "nie-beauty"}
                                                                type="button"
                                                                onClick={() => setWorksInBeauty(val)}
                                                                className={`flex-1 py-3 px-6 rounded-xl border transition-all text-xs font-montserrat uppercase tracking-widest ${
                                                                    worksInBeauty === val ? "bg-gold text-[#1D0E22] border-gold" : "bg-white/5 border-white/10 text-white/40 hover:border-white/20"
                                                                }`}
                                                            >
                                                                {val ? "Áno" : "Nie"}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                {worksInBeauty === true && (
                                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-1">
                                                        <label className="font-montserrat text-[10px] uppercase tracking-widest text-white/40 ml-1">V akej oblasti</label>
                                                        <input type="text" value={beautyField} onChange={(e) => setBeautyField(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-montserrat text-sm focus:border-gold outline-none transition-all" placeholder="napr. Kozmetika, Nechty..." />
                                                    </motion.div>
                                                )}
                                            </div>
                                        </div>

                                        {status === "error" && (
                                            <div className="flex items-center gap-2 text-red-400 text-xs font-montserrat bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                                                <AlertCircle className="w-4 h-4" />
                                                {errorMsg}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === "submitting"}
                                            className="w-full py-5 bg-gold text-[#1D0E22] font-marcellus uppercase tracking-[0.2em] rounded-xl hover:bg-white transition-all shadow-xl hover:shadow-gold/20 flex items-center justify-center gap-3 disabled:opacity-50"
                                        >
                                            {status === "submitting" ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Odosielam...
                                                </>
                                            ) : (
                                                "Odoslať prihlášku"
                                            )}
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

