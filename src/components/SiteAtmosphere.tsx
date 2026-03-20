import type { CSSProperties } from "react";

const leftGlow: CSSProperties = {
    background:
        "radial-gradient(closest-side, rgba(255,255,255,0.82) 0%, rgba(246,249,252,0.5) 26%, rgba(229,236,244,0.2) 52%, rgba(214,222,232,0.05) 70%, rgba(210,217,227,0) 82%)",
};

const rightGlow: CSSProperties = {
    background:
        "radial-gradient(closest-side, rgba(255,255,255,0.56) 0%, rgba(242,246,251,0.28) 30%, rgba(226,231,239,0.1) 56%, rgba(210,216,225,0) 80%)",
};

const bottomGlow: CSSProperties = {
    background:
        "radial-gradient(closest-side, rgba(212,221,235,0.46) 0%, rgba(187,198,220,0.2) 28%, rgba(158,170,194,0.08) 54%, rgba(196,202,214,0) 76%)",
};

const centerColumn: CSSProperties = {
    backgroundImage: [
        "radial-gradient(40% 74% at 50% 22%, rgba(255,255,255,0.56) 0%, rgba(243,245,249,0.24) 30%, rgba(225,230,238,0.06) 60%, rgba(212,218,228,0) 78%)",
        "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 42%, rgba(255,255,255,0.24) 50%, rgba(255,255,255,0.1) 58%, rgba(255,255,255,0) 100%)",
    ].join(", "),
};

const sheenLayer: CSSProperties = {
    background:
        "linear-gradient(115deg, rgba(255,255,255,0) 16%, rgba(255,255,255,0.07) 32%, rgba(255,255,255,0.24) 48%, rgba(255,255,255,0.07) 64%, rgba(255,255,255,0) 80%)",
};

const topShadow: CSSProperties = {
    background:
        "radial-gradient(closest-side, rgba(72,80,95,0.82) 0%, rgba(95,104,119,0.46) 34%, rgba(142,150,164,0.16) 58%, rgba(170,176,187,0) 80%)",
};

const sideShadow: CSSProperties = {
    background:
        "radial-gradient(closest-side, rgba(78,86,101,0.74) 0%, rgba(100,109,123,0.38) 34%, rgba(147,154,168,0.14) 56%, rgba(171,177,188,0) 78%)",
};

const shadowSweep: CSSProperties = {
    backgroundImage: [
        "linear-gradient(140deg, rgba(71,80,95,0) 16%, rgba(71,80,95,0.06) 34%, rgba(71,80,95,0.22) 52%, rgba(71,80,95,0.06) 70%, rgba(71,80,95,0) 84%)",
        "radial-gradient(42% 24% at 78% 12%, rgba(84,92,108,0.28) 0%, rgba(111,118,134,0.12) 38%, rgba(163,169,180,0) 74%)",
        "radial-gradient(36% 22% at 18% 86%, rgba(84,92,108,0.22) 0%, rgba(111,118,134,0.1) 42%, rgba(163,169,180,0) 76%)",
    ].join(", "),
};

export default function SiteAtmosphere() {
    return (
        <div className="site-atmosphere" aria-hidden="true">
            <div className="site-atmosphere__base" />
            <div className="site-atmosphere__mist" />
            <div className="site-atmosphere__dotfield" />
            <div
                className="test2-dynamic-glow test2-dynamic-glow--a left-[-24vw] top-[-20vh] h-[88vw] w-[88vw] min-h-[42rem] min-w-[42rem]"
                style={leftGlow}
            />
            <div
                className="test2-dynamic-glow test2-dynamic-glow--b right-[-18vw] top-[-6vh] h-[60vw] w-[60vw] min-h-[28rem] min-w-[28rem]"
                style={rightGlow}
            />
            <div
                className="test2-dynamic-glow test2-dynamic-glow--c bottom-[-30vh] left-[20vw] h-[70vw] w-[70vw] min-h-[32rem] min-w-[32rem]"
                style={bottomGlow}
            />
            <div
                className="test2-dynamic-shadow test2-dynamic-shadow--a right-[-26vw] bottom-[-30vh] h-[90vw] w-[90vw] min-h-[42rem] min-w-[42rem]"
                style={topShadow}
            />
            <div
                className="test2-dynamic-shadow test2-dynamic-shadow--b left-[-24vw] top-[-24vh] h-[72vw] w-[72vw] min-h-[34rem] min-w-[34rem]"
                style={sideShadow}
            />
            <div className="test2-dynamic-shadow-sweep" style={shadowSweep} />
            <div className="test2-dynamic-column" style={centerColumn} />
            <div className="test2-dynamic-sheen" style={sheenLayer} />
            <div className="site-atmosphere__topline" />
        </div>
    );
}
