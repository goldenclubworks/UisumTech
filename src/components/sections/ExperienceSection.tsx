"use client";

import { motion } from "framer-motion";
import { RevealText } from "@/components/AnimatedText";
import { GlassCard } from "@/components/ui/glass-card";
import { Zap, RotateCw, Layers } from "lucide-react";

const differentiators = [
    {
        icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
        title: "Digital First",
        description: "Wir denken digital. Jeder Prozess, jeder Workflow, für die moderne Welt gestaltet.",
    },
    {
        icon: <RotateCw className="w-6 h-6 md:w-8 md:h-8" />,
        title: "Schnelle Umsetzung",
        description: "Lieferung in Tagen, nicht Monaten. Unsere Systeme ermöglichen schnelles Prototyping ohne Agentur-Zeitverzögerung.",
    },
    {
        icon: <Layers className="w-6 h-6 md:w-8 md:h-8" />,
        title: "Alles aus einer Hand",
        description: "Design, Content und Code in einem Studio. Keine Übergaben, keine Missverständnisse, keine Reibung.",
    },
];

export function ExperienceSection() {
    return (
        <section className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden bg-black">
            {/* Background accent */}
            <div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-96 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at left, oklch(0.35 0.08 250 / 20%) 0%, transparent 70%)"
                }}
            />

            <div className="relative max-w-6xl mx-auto">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">
                    {/* Left: Content */}
                    <div>
                        <motion.span
                            className="label text-uisum-blue block mb-4 tracking-[0.3em] text-xs md:text-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            WARUM UISUM?
                        </motion.span>

                        <RevealText delay={0.1}>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                                Keine Agentur.<br />
                                <span className="text-uisum-orange">Dein Partner.</span>
                            </h2>
                        </RevealText>

                        <motion.p
                            className="text-base md:text-lg text-white/50 mb-8 leading-relaxed max-w-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Traditionelle Agenturen verkaufen Stunden. Wir liefern Ergebnisse.
                            Gebaut für Gründer, die Qualität ohne Kompromisse
                            und Geschwindigkeit ohne Abstriche verlangen.
                        </motion.p>

                        <motion.div
                            className="flex items-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-uisum-orange/50 to-transparent" />
                            <span className="text-sm text-white/40">Seit 2024</span>
                        </motion.div>
                    </div>

                    {/* Right: Cards */}
                    <div className="space-y-4 w-full">
                        {differentiators.map((item, index) => (
                            <GlassCard key={item.title} delay={index * 0.1} className="flex items-start gap-4 p-4 md:p-6">
                                <div className="text-uisum-orange mt-0.5 flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-base md:text-lg font-semibold mb-2 text-white">{item.title}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
