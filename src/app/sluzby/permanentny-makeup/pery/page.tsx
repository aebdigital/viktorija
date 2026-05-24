import type { Metadata } from "next";
import LipsContent from "./LipsContent";

export const metadata: Metadata = {
    title: "Permanentný Make-up Pier | Salón Viktória",
    description: "Permanentný make-up pier – Viktorija Lips, kórejské pery, obnova kontúry pier. Prémiové Swiss Color Lip Pigments.",
    alternates: { canonical: "/sluzby/permanentny-makeup/pery" },
};

export default function LipsPage() {
    return <LipsContent />;
}
