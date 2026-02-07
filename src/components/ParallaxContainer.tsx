"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ParallaxLayerProps {
    children: ReactNode;
    speed: number;
    className?: string;
    scrollYProgress?: MotionValue<number>;
}

export function ParallaxLayer({
    children,
    speed,
    className,
    scrollYProgress: externalProgress
}: ParallaxLayerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress: internalProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const progress = externalProgress || internalProgress;
    const y = useTransform(progress, [0, 1], [0, speed * 100]);

    return (
        <motion.div
            ref={ref}
            className={cn("will-change-transform", className)}
            style={{ y }}
        >
            {children}
        </motion.div>
    );
}

interface ParallaxContainerProps {
    children: ReactNode;
    className?: string;
}

export function ParallaxContainer({ children, className }: ParallaxContainerProps) {
    const { scrollYProgress } = useScroll();

    return (
        <div className={cn("relative overflow-hidden", className)}>
            {children}
        </div>
    );
}

interface ParallaxImageProps {
    src: string;
    alt: string;
    speed?: number;
    className?: string;
    priority?: boolean;
}

export function ParallaxImage({
    src,
    alt,
    speed = 0.2,
    className,
    priority = false
}: ParallaxImageProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 30}%`, `${speed * 30}%`]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

    return (
        <div ref={ref} className={cn("overflow-hidden", className)}>
            <motion.img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                style={{ y, scale }}
                loading={priority ? "eager" : "lazy"}
            />
        </div>
    );
}

interface HeroParallaxLayersProps {
    className?: string;
}

export function HeroParallaxLayers({ className }: HeroParallaxLayersProps) {
    const { scrollYProgress } = useScroll();

    // Different parallax speeds for each layer
    const layer1Y = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const layer2Y = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const layer3Y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const layer4Y = useTransform(scrollYProgress, [0, 1], [0, 50]);

    // Opacity effects
    const layer1Opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
    const layer4Opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 0]);

    return (
        <div className={cn("absolute inset-0", className)}>
            {/* Layer 1: Blurred background energy */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ y: layer1Y, opacity: layer1Opacity }}
            >
                <img
                    src="/parallax-layer1.png"
                    alt=""
                    className="w-full h-full object-cover scale-110"
                    style={{ filter: "blur(30px)" }}
                />
            </motion.div>

            {/* Layer 2: Main hero image */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ y: layer2Y }}
            >
                <img
                    src="/hero-main.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Layer 3: Floating elements overlay */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ y: layer3Y }}
            >
                {/* Floating glass orbs */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full glass animate-float opacity-30" />
                <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full glass animate-float-delayed opacity-20" />
                <div className="absolute bottom-1/3 left-1/3 w-16 h-16 rounded-full glass animate-float opacity-25" />
            </motion.div>

            {/* Layer 4: Particles overlay */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ y: layer4Y, opacity: layer4Opacity }}
            >
                {/* Light particles effect via gradients */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-uisum-orange/40 animate-pulse-glow" />
                    <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-white/30 animate-pulse-glow" />
                    <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 rounded-full bg-uisum-blue/40 animate-pulse-glow" />
                    <div className="absolute bottom-1/4 right-1/3 w-1 h-1 rounded-full bg-uisum-orange/30 animate-pulse-glow" />
                    <div className="absolute top-1/2 right-1/2 w-2 h-2 rounded-full bg-white/20 animate-pulse-glow" />
                </div>
            </motion.div>

            {/* Vignette overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, transparent 0%, oklch(0.08 0 0) 70%)"
                }}
            />

            {/* Bottom fade for text readability */}
            <div
                className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
                style={{
                    background: "linear-gradient(to top, oklch(0.08 0 0) 0%, transparent 100%)"
                }}
            />
        </div>
    );
}
