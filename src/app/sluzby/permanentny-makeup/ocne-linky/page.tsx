import type { Metadata } from "next";
import EyesContent from "./EyesContent";

export const metadata: Metadata = {
    title: "Očné Linky – Permanentný Make-up | Salón Viktória",
    description: "Tieňované očné linky a očné linky medzi riasy. Jemné vrstvenie pigmentu pre hĺbku a výraz pohľadu.",
};

export default function EyesPage() {
    return <EyesContent />;
}
