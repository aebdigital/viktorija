import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Skincare Routine | Krémy a Séra | Salón Viktória",
    description: "Profesionálna pleťová kozmetika a séra odporúčané pre dlhodobý výsledok. Kurátorovaný výber Viktoriji Kendry – Germaine de Capuccini, Skeyndor a ďalšie značky.",
    alternates: { canonical: "/sluzby/kremy-sera" },
};

export default function KremySeraLayout({ children }: { children: React.ReactNode }) {
    return children;
}
