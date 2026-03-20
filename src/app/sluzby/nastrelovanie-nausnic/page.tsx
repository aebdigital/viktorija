import type { Metadata } from "next";
import NausniceContent from "./NausniceContent";

export const metadata: Metadata = {
    title: "Nastreľovanie Náušníc | Salón Viktória",
    description: "Profesionálne nastreľovanie náušníc pre deti aj dospelých. Estetické umiestnenie, maximálna hygiena a sterilita.",
};

export default function PiercingPage() {
    return <NausniceContent />;
}
