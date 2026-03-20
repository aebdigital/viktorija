import type { Metadata } from "next";
import PmuOverviewContent from "./PmuOverviewContent";

export const metadata: Metadata = {
    title: "Permanentný Make-up | Salón Viktória",
    description: "Profesionálny permanentný make-up obočia, pier a očných liniek. Priebeh procedúry, korekcia a kontrolná návšteva.",
};

export default function PmuOverviewPage() {
    return <PmuOverviewContent />;
}
