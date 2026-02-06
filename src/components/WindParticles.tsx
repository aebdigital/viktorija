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

        const streaks: Streak[] = [];
        const particles: DustParticle[] = [];
        const clouds: FogCloud[] = [];
        const streakCount = 40;
        const dustCount = 60;
        const cloudCount = 50;

        class Streak {
            x!: number;
            y!: number;
            length!: number;
            thickness!: number;
            speed!: number;
            opacity!: number;
            amplitude!: number;
            frequency!: number;
            phase!: number;

            constructor() {
                this.reset(true);
            }

            reset(initial = false) {
                this.x = initial ? Math.random() * width : -600;
                this.y = Math.random() * height;
                this.length = Math.random() * 800 + 400;
                this.thickness = Math.random() * 8 + 3; // Wider streaks
                this.speed = Math.random() * 1.8 + 1;
                this.opacity = Math.random() * 0.15 + 0.05; // Slightly more visible
                this.amplitude = Math.random() * 60 + 30;
                this.frequency = Math.random() * 0.001 + 0.0005;
                this.phase = Math.random() * Math.PI * 2;
            }

            update() {
                this.x += this.speed;
                this.phase += 0.01;
                if (this.x > width + 400) this.reset();
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.lineWidth = this.thickness;

                // Using a gradient with multiple stops to simulate blur
                const gradient = ctx.createLinearGradient(this.x - this.length, this.y, this.x, this.y);
                gradient.addColorStop(0, "transparent");
                gradient.addColorStop(0.2, `rgba(255, 255, 255, ${this.opacity * 0.4})`);
                gradient.addColorStop(0.5, `rgba(255, 255, 255, ${this.opacity})`);
                gradient.addColorStop(0.8, `rgba(255, 255, 255, ${this.opacity * 0.4})`);
                gradient.addColorStop(1, "transparent");

                ctx.strokeStyle = gradient;
                for (let i = 0; i < this.length; i += 40) {
                    const px = this.x - i;
                    const py = this.y + Math.sin(px * this.frequency + this.phase) * this.amplitude;
                    if (i === 0) ctx.moveTo(px, py);
                    else ctx.lineTo(px, py);
                }
                ctx.stroke();
            }
        }

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
                this.opacity = Math.random() * 0.12 + 0.04; // More visible
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

        class DustParticle {
            x!: number;
            y!: number;
            size!: number;
            speed!: number;
            opacity!: number;
            vx!: number;

            constructor() {
                this.reset(true);
            }

            reset(initial = false) {
                this.x = initial ? Math.random() * width : -20;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 0.5;
                this.speed = Math.random() * 1.5 + 0.8;
                this.opacity = Math.random() * 0.2 + 0.1;
                this.vx = this.speed + 1.2;
            }

            update() {
                this.x += this.vx;
                if (this.x > width + 20) this.reset();
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
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

            streaks.length = 0;
            particles.length = 0;
            clouds.length = 0;
            for (let i = 0; i < streakCount; i++) streaks.push(new Streak());
            for (let i = 0; i < dustCount; i++) particles.push(new DustParticle());
            for (let i = 0; i < cloudCount; i++) clouds.push(new FogCloud());
        };

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw all layers - gradients are much faster than blur filters
            clouds.forEach(c => { c.update(); c.draw(); });
            streaks.forEach(s => { s.update(); s.draw(); });
            particles.forEach(p => { p.update(); p.draw(); });

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
