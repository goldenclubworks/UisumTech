"use client";

import { motion } from "framer-motion";
import { RevealText } from "@/components/AnimatedText";

const steps = [
    {
        number: "01",
        title: "Kennenlernen",
        description: "Wir verstehen deine Vision, dein Markt und deine Ziele. Gründliche Analyse bevor wir starten.",
    },
    {
        number: "02",
        title: "Umsetzen",
        description: "Schnelle Iteration mit Live-Vorschauen. Du siehst Fortschritte täglich, nicht monatlich.",
    },
    {
        number: "03",
        title: "Wachsen",
        description: "Launch, messen, optimieren. Wir bleiben an deiner Seite während deine digitale Präsenz wächst.",
    },
];

export function ProcessSection() {
    return (
        <section id="process" className="relative py-20 md:py-32 px-4 md:px-6 bg-black">
            {/* Background accent */}
            <div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 md:w-1/3 h-full pointer-events-none opacity-50"
                style={{
                    background: "radial-gradient(ellipse at right, oklch(0.72 0.19 35 / 12%) 0%, transparent 60%)"
                }}
            />

            <div className="relative max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-20">
                    <motion.span
                        className="label text-uisum-orange block mb-4 tracking-[0.3em] text-xs md:text-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        UNSER PROZESS
                    </motion.span>

                    <RevealText delay={0.1}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                            Drei Schritte zum<br />
                            <span className="text-uisum-orange">digitalen Erfolg</span>
                        </h2>
                    </RevealText>
                </div>

                {/* Process Steps */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
                    {/* Connecting Line - Desktop only */}
                    <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            className="relative text-center"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                        >
                            {/* Step Number */}
                            <motion.div
                                className="relative inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 mb-6 mx-auto"
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className="absolute inset-0 rounded-full bg-white/5 border border-white/10" />
                                <span className="relative text-base md:text-lg font-mono text-uisum-orange font-bold">
                                    {step.number}
                                </span>
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm md:text-base text-white/50 leading-relaxed max-w-xs mx-auto">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
