"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
    gradientBackgroundStart = "rgb(215, 220, 228)",
    gradientBackgroundEnd = "rgb(122, 130, 146)",
    firstColor = "255, 255, 255",
    secondColor = "231, 236, 243",
    thirdColor = "188, 196, 208",
    fourthColor = "96, 108, 130",
    fifthColor = "150, 158, 173",
    pointerColor = "248, 250, 252",
    size = "88%",
    blendingValue = "soft-light",
    children,
    className,
    interactive = true,
    containerClassName,
}: {
    gradientBackgroundStart?: string;
    gradientBackgroundEnd?: string;
    firstColor?: string;
    secondColor?: string;
    thirdColor?: string;
    fourthColor?: string;
    fifthColor?: string;
    pointerColor?: string;
    size?: string;
    blendingValue?: string;
    children?: React.ReactNode;
    className?: string;
    interactive?: boolean;
    containerClassName?: string;
}) => {
    const interactiveRef = useRef<HTMLDivElement>(null);
    const currentXRef = useRef(0);
    const currentYRef = useRef(0);
    const targetXRef = useRef(0);
    const targetYRef = useRef(0);

    useEffect(() => {
        document.body.style.setProperty(
            "--gradient-background-start",
            gradientBackgroundStart
        );
        document.body.style.setProperty(
            "--gradient-background-end",
            gradientBackgroundEnd
        );
        document.body.style.setProperty("--first-color", firstColor);
        document.body.style.setProperty("--second-color", secondColor);
        document.body.style.setProperty("--third-color", thirdColor);
        document.body.style.setProperty("--fourth-color", fourthColor);
        document.body.style.setProperty("--fifth-color", fifthColor);
        document.body.style.setProperty("--pointer-color", pointerColor);
        document.body.style.setProperty("--size", size);
        document.body.style.setProperty("--blending-value", blendingValue);
    }, [
        blendingValue,
        fifthColor,
        firstColor,
        fourthColor,
        gradientBackgroundEnd,
        gradientBackgroundStart,
        pointerColor,
        secondColor,
        size,
        thirdColor,
    ]);

    useEffect(() => {
        let frameId = 0;

        const move = () => {
            if (interactiveRef.current) {
                currentXRef.current += (targetXRef.current - currentXRef.current) / 20;
                currentYRef.current += (targetYRef.current - currentYRef.current) / 20;

                interactiveRef.current.style.transform = `translate(${Math.round(
                    currentXRef.current
                )}px, ${Math.round(currentYRef.current)}px)`;
            }

            frameId = window.requestAnimationFrame(move);
        };

        frameId = window.requestAnimationFrame(move);

        return () => window.cancelAnimationFrame(frameId);
    }, []);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (interactiveRef.current) {
            const rect = interactiveRef.current.getBoundingClientRect();
            targetXRef.current = event.clientX - rect.left;
            targetYRef.current = event.clientY - rect.top;
        }
    };

    const [isSafari] = useState(
        () =>
            typeof navigator !== "undefined" &&
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    );

    return (
        <div
            className={cn(
                "relative left-0 top-0 h-screen w-screen overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
                containerClassName
            )}
        >
            <svg className="hidden">
                <defs>
                    <filter id="blurMe">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="10"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
            <div className={cn("", className)}>{children}</div>
            <div
                className={cn(
                    "gradients-container h-full w-full blur-lg",
                    isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
                )}
            >
                <div
                    className={cn(
                        "absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]",
                        "[mix-blend-mode:var(--blending-value)] left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)]",
                        "[transform-origin:center_center]",
                        "animate-first",
                        "opacity-100"
                    )}
                />
                <div
                    className={cn(
                        "absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]",
                        "[mix-blend-mode:var(--blending-value)] left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)]",
                        "[transform-origin:calc(50%-400px)]",
                        "animate-second",
                        "opacity-100"
                    )}
                />
                <div
                    className={cn(
                        "absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]",
                        "[mix-blend-mode:var(--blending-value)] left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)]",
                        "[transform-origin:calc(50%+400px)]",
                        "animate-third",
                        "opacity-100"
                    )}
                />
                <div
                    className={cn(
                        "absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]",
                        "[mix-blend-mode:var(--blending-value)] left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)]",
                        "[transform-origin:calc(50%-200px)]",
                        "animate-fourth",
                        "opacity-70"
                    )}
                />
                <div
                    className={cn(
                        "absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]",
                        "[mix-blend-mode:var(--blending-value)] left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)]",
                        "[transform-origin:calc(50%-800px)_calc(50%+800px)]",
                        "animate-fifth",
                        "opacity-100"
                    )}
                />

                {interactive && (
                    <div
                        ref={interactiveRef}
                        onMouseMove={handleMouseMove}
                        className={cn(
                            "absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]",
                            "[mix-blend-mode:var(--blending-value)] -left-1/2 -top-1/2 h-full w-full",
                            "opacity-70"
                        )}
                    />
                )}
            </div>
        </div>
    );
};
