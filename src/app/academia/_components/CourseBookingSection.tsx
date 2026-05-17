"use client";

import { useState } from "react";
import CourseApplicationModal from "./CourseApplicationModal";

interface CourseBookingSectionProps {
    courseName: string;
}

export default function CourseBookingSection({ courseName }: CourseBookingSectionProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="pt-12 border-t border-[#1D0E22]/10 mt-16 text-center space-y-6">
            <div className="space-y-2">
                <h3 className="font-marcellus text-2xl uppercase tracking-widest text-[#1D0E22]">Máte záujem o tento kurz?</h3>
                <p className="font-montserrat text-lg text-[#1D0E22] leading-snug">Zarezervujte si svoje miesto ešte dnes.</p>
            </div>
            
            <button
                onClick={() => setIsModalOpen(true)}
                className="px-12 py-4 bg-gold text-[#1D0E22] font-marcellus uppercase tracking-[0.2em] rounded-full hover:bg-[#1D0E22] hover:text-white transition-all duration-500 shadow-xl hover:shadow-2xl text-sm cursor-pointer"
            >
                Prihláška
            </button>

            <CourseApplicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                courseName={courseName}
            />
        </div>
    );
}
