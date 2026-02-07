"use client";

import { motion } from "framer-motion";
import { RevealText } from "@/components/AnimatedText";

const steps = [
    {
        number: "01",
        title: "See",
        description: "We understand your vision, market, and goals. Deep research before any design begins.",
    },
    {
        number: "02",
        title: "Build",
        description: "Rapid iteration with live previews. You see progress daily, not monthly.",
    },
    {
        number: "03",
        title: "Scale",
        description: "Launch, measure, optimize. We stay with you as your digital presence grows.",
    },
];

export function ProcessSection() {
    return (
        <section id="process" className="relative py-32 px-6">
            {/* Background accent */}
            <div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at right, oklch(0.72 0.19 35 / 8%) 0%, transparent 60%)"
                }}
            />

            <div className="relative max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.span
                        className="label text-uisum-orange block mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        How We Work
                    </motion.span>

                    <RevealText delay={0.1}>
                        <h2 className="heading-2">
                            Three Steps to<br />
                            <span className="text-gradient">Digital Velocity</span>
                        </h2>
                    </RevealText>
                </div>

                {/* Process Steps */}
                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            className="relative text-center md:text-left"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            {/* Step Number */}
                            <motion.div
                                className="relative inline-flex items-center justify-center w-12 h-12 mb-6 mx-auto md:mx-0"
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className="absolute inset-0 rounded-full glass-card" />
                                <span className="relative text-sm font-mono text-uisum-orange">
                                    {step.number}
                                </span>
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-2xl font-semibold mb-4 text-foreground">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {step.description}
                            </p>

                            {/* Arrow (not on last) */}
                            {index < steps.length - 1 && (
                                <motion.div
                                    className="hidden md:block absolute -right-4 top-16 text-white/20"
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                >
                                    →
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
