import type { Metadata } from "next";
import KozmetikaContent from "./KozmetikaContent";

export const metadata: Metadata = {
    title: "Rituály tváre | Salón Viktória",
    description: "Komplexné kozmetické ošetrenia pre zdravie a krásu pleti. Mezoboost, exozómy, peelingy, luxusné rituály a ošetrenia pre citlivú pleť.",
};

export default function CosmeticsPage() {
    return <KozmetikaContent />;
}
