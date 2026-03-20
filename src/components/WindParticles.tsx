"use client";

import { useEffect, useRef } from "react";

export default function WindParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width: number;
        let height: number;

        const clouds: FogCloud[] = [];
        const cloudCount = 50;



        class FogCloud {
            x!: number;
            y!: number;
            radiusX!: number;
            radiusY!: number;
            speed!: number;
            opacity!: number;
            wobble!: number;
            wobbleSpeed!: number;

            constructor() {
                this.reset(true);
            }

            reset(initial = false) {
                this.x = initial ? Math.random() * (width + 1200) - 600 : -1000;
                this.y = Math.random() * height;
                this.radiusX = Math.random() * 700 + 500; // Even larger clouds
                this.radiusY = Math.random() * 400 + 300;
                this.speed = Math.random() * 0.8 + 0.4;
                this.opacity = Math.random() * 0.12 + 0.04; // Very subtle
                this.wobble = Math.random() * Math.PI * 2;
                this.wobbleSpeed = Math.random() * 0.008;
            }

            update() {
                this.x += this.speed;
                this.wobble += this.wobbleSpeed;
                if (this.x > width + 1000) this.reset();
            }

            draw() {
                if (!ctx) return;
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radiusX);
                // Multi-stop gradient for a natural fog fade without using filters
                gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
                gradient.addColorStop(0.3, `rgba(255, 255, 255, ${this.opacity * 0.8})`);
                gradient.addColorStop(0.6, `rgba(255, 255, 255, ${this.opacity * 0.3})`);
                gradient.addColorStop(1, "transparent");

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.ellipse(this.x, this.y, this.radiusX, this.radiusY, 0, 0, Math.PI * 2);
                ctx.fill();
            }
        }



        const resize = () => {
            const container = canvas.parentElement;
            if (!container) return;
            width = container.clientWidth;
            height = container.clientHeight;
            canvas.width = width;
            canvas.height = height;

            clouds.length = 0;
            for (let i = 0; i < cloudCount; i++) clouds.push(new FogCloud());
        };

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw all layers - gradients are much faster than blur filters
            clouds.forEach(c => { c.update(); c.draw(); });

            animationFrameId = requestAnimationFrame(render);
        };

        window.addEventListener("resize", resize);
        resize();
        render();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-[-1]"
        />
    );
}
