"use client";

import { motion } from "framer-motion";
import { AnimatedText, RevealText } from "@/components/AnimatedText";
import { HeroParallaxLayers } from "@/components/ParallaxContainer";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Parallax Background Layers */}
            <HeroParallaxLayers />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
                {/* Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                >
                    <span className="label text-uisum-orange">
                        Digital Creation Studio
                    </span>
                </motion.div>

                {/* Main Headline */}
                <h1 className="heading-1 mb-6">
                    <AnimatedText
                        text="Digital Presence."
                        type="chars"
                        delay={0.4}
                        staggerChildren={0.02}
                        className="block"
                    />
                    <AnimatedText
                        text="Engineered."
                        type="chars"
                        delay={0.8}
                        staggerChildren={0.02}
                        className="block text-uisum-orange text-glow-orange"
                    />
                </h1>

                {/* Subheadline */}
                <RevealText delay={1.2} className="mb-12">
                    <p className="body-large max-w-xl mx-auto">
                        AI-native creative studio. We build what others template.
                    </p>
                </RevealText>

                {/* CTAs */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                >
                    <motion.a
                        href="#contact"
                        className="btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Start Project
                    </motion.a>

                    <motion.a
                        href="#work"
                        className="btn-secondary"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        See Work
                    </motion.a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.8 }}
                >
                    <motion.div
                        className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <div className="w-1 h-2 rounded-full bg-uisum-orange" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
