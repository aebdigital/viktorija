"use client";

export default function ContactForm() {
    return (
        <div className="bg-[#efe4cf] p-8 rounded-2xl space-y-6">
            <h4 className="font-marcellus text-2xl text-[#1D0E22] text-center uppercase tracking-widest">Objednať sa</h4>
            <p className="text-center text-[#1D0E22]/70 text-sm font-montserrat">Máte otázky alebo záujem o termín? Neváhajte ma kontaktovať.</p>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Vaše meno" className="w-full bg-white/50 border border-[#1D0E22]/10 rounded-lg px-4 py-3 text-[#1D0E22] placeholder-[#1D0E22]/40 focus:outline-none focus:border-gold transition-colors font-montserrat font-light" />
                <input type="tel" placeholder="Telefón" className="w-full bg-white/50 border border-[#1D0E22]/10 rounded-lg px-4 py-3 text-[#1D0E22] placeholder-[#1D0E22]/40 focus:outline-none focus:border-gold transition-colors font-montserrat font-light" />
                <textarea placeholder="Správa" rows={4} className="w-full bg-white/50 border border-[#1D0E22]/10 rounded-lg px-4 py-3 text-[#1D0E22] placeholder-[#1D0E22]/40 focus:outline-none focus:border-gold transition-colors font-montserrat font-light resize-none" />
                <button type="submit" className="w-full py-3 bg-[#1D0E22] text-gold font-marcellus uppercase tracking-widest hover:bg-[#1D0E22]/90 transition-colors rounded-lg">
                    Odoslať
                </button>
            </form>
        </div>
    );
}
