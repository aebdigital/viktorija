export default function ContactCTA() {
    return (
        <div className="text-center space-y-6 pt-4">
            <p className="font-montserrat text-lg font-light text-[#1D0E22] max-w-2xl mx-auto leading-snug">
                V prípade že máte ďalšie otázky nás neváhajte kontaktovať.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                    href="https://wa.me/421907796562"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-marcellus text-sm uppercase tracking-widest px-8 py-3 rounded-full bg-[#1D0E22] text-[#EEE3CE] hover:bg-[#936a82] transition-colors duration-300"
                >
                    Otázky ku kurzu
                </a>
                <a
                    href="mailto:viktorijakendra.pmu@gmail.com"
                    className="inline-block font-marcellus text-sm uppercase tracking-widest px-8 py-3 rounded-full border border-[#1D0E22] text-[#1D0E22] hover:bg-[#1D0E22] hover:text-[#EEE3CE] transition-colors duration-300"
                >
                    Otázky k financovaniu
                </a>
            </div>
        </div>
    );
}
