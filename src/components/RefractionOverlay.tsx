"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function RefractionOverlay() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const sx = useSpring(mouseX, springConfig);
    const sy = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
            {/* Noise Texture */}
            <div className="noise-overlay" />

            {/* Dynamic Refraction Lens */}
            <motion.div
                className="absolute w-[40vw] h-[40vw] rounded-full"
                style={{
                    left: sx,
                    top: sy,
                    translateX: "-50%",
                    translateY: "-50%",
                    background: "radial-gradient(circle at center, oklch(1 0 0 / 5%) 0%, transparent 70%)",
                    backdropFilter: "blur(40px) saturate(150%)",
                    WebkitBackdropFilter: "blur(40px) saturate(150%)",
                    boxShadow: "inset 0 0 100px oklch(1 0 0 / 10%)",
                    pointerEvents: "none",
                }}
            />
        </div>
    );
}
