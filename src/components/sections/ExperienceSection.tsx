"use client";

import { motion } from "framer-motion";
import { RevealText } from "@/components/AnimatedText";
import { GlassCard } from "@/components/ui/glass-card";
import { Zap, RotateCw, Layers } from "lucide-react";

const differentiators = [
    {
        icon: <Zap className="w-8 h-8" />,
        title: "AI Native",
        description: "We don't use AI as a tool. We think in AI. Every process, every workflow, designed for the intelligence age.",
    },
    {
        icon: <RotateCw className="w-8 h-8" />,
        title: "Fast Iteration",
        description: "Ship in days, not months. Our systems enable rapid prototyping to production without the agency timeline bloat.",
    },
    {
        icon: <Layers className="w-8 h-8" />,
        title: "Content + Code Unified",
        description: "Design, content, and code in one studio. No handoffs, no misalignment, no friction.",
    },
];

export function ExperienceSection() {
    return (
        <section className="relative py-32 px-6 overflow-hidden">
            {/* Background accent */}
            <div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-96 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at left, oklch(0.35 0.08 250 / 15%) 0%, transparent 70%)"
                }}
            />

            <div className="relative max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div>
                        <motion.span
                            className="label text-uisum-blue block mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Why Different
                        </motion.span>

                        <RevealText delay={0.1}>
                            <h2 className="heading-2 mb-6">
                                Not an Agency.<br />
                                <span className="text-gradient">Product-Level Studio.</span>
                            </h2>
                        </RevealText>

                        <motion.p
                            className="body-large mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Traditional agencies sell hours. We deliver outcomes.
                            Built for founders who demand quality without compromise
                            and speed without sacrifice.
                        </motion.p>

                        <motion.div
                            className="flex items-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="h-px flex-1 bg-gradient-to-r from-uisum-orange/50 to-transparent" />
                            <span className="text-sm text-muted-foreground">Since 2024</span>
                        </motion.div>
                    </div>

                    {/* Right: Cards */}
                    <div className="space-y-4">
                        {differentiators.map((item, index) => (
                            <GlassCard key={item.title} delay={index * 0.15} className="flex items-start gap-4">
                                <div className="text-uisum-orange mt-1">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
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
