import type { Metadata } from "next";
import DermoContent from "./DermoContent";

export const metadata: Metadata = {
    title: "Dermopigmentácia | Salón Viktória",
    description: "Estetická a medicínska mikropigmentácia pokožky.",
    alternates: { canonical: "/sluzby/permanentny-makeup/dermopigmentacia" },
};

export default function DermoPage() {
    return <DermoContent />;
}
