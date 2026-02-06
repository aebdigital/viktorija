"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ChevronDown, ChevronUp } from "lucide-react";

export default function CookieConsent() {
    const [show, setShow] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true,
        analytics: true,
    });

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        // Open logic: if no consent found, show bar. 
        // Also listen for a custom event 'openCookieSettings' to re-open from footer.
        if (!consent) {
            setShow(true);
        }

        const handleOpenSettings = () => {
            setShow(true);
            setShowSettings(true);
        };

        window.addEventListener('openCookieSettings', handleOpenSettings);
        return () => window.removeEventListener('openCookieSettings', handleOpenSettings);
    }, []);

    const handleAcceptAll = () => {
        setPreferences({ necessary: true, analytics: true });
        saveConsent({ necessary: true, analytics: true });
    };

    const handleSaveSettings = () => {
        saveConsent(preferences);
    };

    const saveConsent = (prefs: typeof preferences) => {
        localStorage.setItem("cookie_consent", JSON.stringify(prefs));
        localStorage.setItem("cookie_consent_date", new Date().toISOString());
        setShow(false);
        setShowSettings(false);
        // Here you would trigger actual analytics scripts based on 'prefs.analytics'
    };

    // If neither show (main bar) nor showSettings (overlay) is open, render nothing.
    if (!show && !showSettings) return null;

    return (
        <>
            {/* Main Bar - Visible when show is true AND settings are NOT open. */}
            {show && (
                <div className={`fixed bottom-0 left-0 w-full z-[100] bg-[#1D0E22] border-t border-gold/30 text-white shadow-2xl animate-fade-in-up transition-opacity duration-300 ${showSettings ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <div className="container mx-auto px-6 py-6 max-w-6xl">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="space-y-2 flex-1">
                                <h3 className="text-gold font-marcellus text-lg">Súbory cookies</h3>
                                <p className="font-montserrat text-sm font-light text-white/80 leading-relaxed">
                                    Používame súbory cookies na zabezpečenie funkčnosti webu a s vaším súhlasom aj na analytické účely.
                                    Viac informácií nájdete v <Link href="/osobne-udaje" className="text-gold underline hover:text-white transition-colors">Zásadách ochrany osobných údajov</Link>.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
                                <button
                                    onClick={handleAcceptAll}
                                    className="px-6 py-3 bg-gold text-[#1D0E22] font-bold font-marcellus uppercase tracking-wider hover:bg-white transition-colors text-sm"
                                >
                                    Prijať všetky
                                </button>
                                <button
                                    onClick={() => setShowSettings(true)}
                                    className="px-6 py-3 border border-white/20 text-white font-marcellus uppercase tracking-wider hover:border-gold hover:text-gold transition-colors text-sm flex items-center justify-center gap-2"
                                >
                                    Nastavenia
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Settings Modal Overlay */}
            {showSettings && (
                <div className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
                    <div className="bg-[#1D0E22] border border-gold/30 w-full max-w-xl rounded-xl shadow-2xl overflow-hidden animate-scale-in">

                        {/* Modal Header */}
                        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/20">
                            <h3 className="font-marcellus text-xl text-gold">Nastavenia súborov cookies</h3>
                            <button onClick={() => setShowSettings(false)} className="text-white/50 hover:text-white transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-8 space-y-6">
                            <p className="font-montserrat font-light text-white/80 text-sm">
                                Tu si môžete upraviť nastavenia súborov cookies. Preferencie môžete kedykoľvek zmeniť v pätičke stránky.
                            </p>

                            {/* Necessity */}
                            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                                <div className="mt-1">
                                    <input type="checkbox" checked disabled className="accent-gold w-5 h-5 cursor-not-allowed opacity-50" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="font-marcellus text-white text-base">Nevyhnutné cookies</h4>
                                        <span className="text-[10px] uppercase tracking-widest text-gold bg-gold/10 px-2 py-0.5 rounded">Vždy zapnuté</span>
                                    </div>
                                    <p className="text-xs text-white/60 font-montserrat font-light leading-relaxed">
                                        Tieto cookies sú potrebné pre fungovanie webovej stránky a nie je možné ich vypnúť.
                                    </p>
                                </div>
                            </div>

                            {/* Analytics */}
                            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-gold/30 transition-colors">
                                <div className="mt-1">
                                    <input
                                        type="checkbox"
                                        checked={preferences.analytics}
                                        onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                                        className="accent-gold w-5 h-5 cursor-pointer"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-marcellus text-white text-base mb-1">Štatistické cookies</h4>
                                    <p className="text-xs text-white/60 font-montserrat font-light leading-relaxed">
                                        Pomáhajú nám pochopiť, ako návštevníci používajú stránku. Údaje sú zbierané anonymne.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 border-t border-white/10 bg-black/20 flex justify-end gap-3">
                            <button
                                onClick={handleSaveSettings}
                                className="px-5 py-2.5 border border-white/20 text-white font-marcellus uppercase tracking-wider hover:bg-white hover:text-black hover:border-white transition-colors text-xs"
                            >
                                Uložiť výber
                            </button>
                            <button
                                onClick={() => {
                                    handleAcceptAll();
                                    setShowSettings(false);
                                }}
                                className="px-5 py-2.5 bg-gold text-main-bg font-bold font-marcellus uppercase tracking-wider hover:bg-white transition-colors text-xs"
                            >
                                Prijať všetky
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}
