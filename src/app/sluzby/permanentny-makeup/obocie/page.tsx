import type { Metadata } from "next";
import BrowsContent from "./BrowsContent";

export const metadata: Metadata = {
    title: "Permanentný Make-up Obočia | Salón Viktória",
    description: "Hyperrealistické chĺpkové obočie a púdrové tieňovanie. 3D technika, korekcia formy a hustoty obočia v Bratislave.",
    alternates: { canonical: "/sluzby/permanentny-makeup/obocie" },
};

export default function BrowsPage() {
    return <BrowsContent />;
}
