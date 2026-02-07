"use client";

import { motion } from "framer-motion";
import { RevealText } from "@/components/AnimatedText";
import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Zenith Finance",
        category: "Web + Brand",
        description: "Complete digital presence for next-gen fintech platform.",
        gradient: "from-orange-600/20 to-blue-900/20",
    },
    {
        id: 2,
        title: "Pulse Media",
        category: "Social + Video",
        description: "Content system driving 10x engagement growth.",
        gradient: "from-purple-600/20 to-pink-900/20",
    },
    {
        id: 3,
        title: "Aether Labs",
        category: "Full Stack",
        description: "Web, brand, and content unification for AI startup.",
        gradient: "from-cyan-600/20 to-emerald-900/20",
    },
];

export function WorkSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="work" className="relative py-32 overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "linear-gradient(to bottom, transparent, oklch(0.06 0 0) 50%, transparent)"
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span
                        className="label text-uisum-orange block mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Selected Work
                    </motion.span>

                    <RevealText delay={0.1}>
                        <h2 className="heading-2">
                            Proof, Not<br />
                            <span className="text-gradient">Promises.</span>
                        </h2>
                    </RevealText>
                </div>

                {/* Project Cards */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            whileHover={{ scale: 1.02 }}
                            onHoverStart={() => setActiveIndex(index)}
                        >
                            {/* Gradient Background */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-opacity duration-500`}
                            />

                            {/* Glass overlay */}
                            <div className="absolute inset-0 glass opacity-60" />

                            {/* Grid pattern */}
                            <div
                                className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: `linear-gradient(oklch(1 0 0 / 10%) 1px, transparent 1px),
                                    linear-gradient(90deg, oklch(1 0 0 / 10%) 1px, transparent 1px)`,
                                    backgroundSize: '40px 40px'
                                }}
                            />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <motion.span
                                    className="label text-uisum-orange mb-2"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 + 0.2 }}
                                >
                                    {project.category}
                                </motion.span>

                                <motion.h3
                                    className="text-2xl font-semibold mb-3 text-foreground"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 + 0.3 }}
                                >
                                    {project.title}
                                </motion.h3>

                                <motion.p
                                    className="text-sm text-muted-foreground"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 + 0.4 }}
                                >
                                    {project.description}
                                </motion.p>

                                {/* Hover arrow */}
                                <motion.div
                                    className="absolute top-8 right-8 w-10 h-10 rounded-full glass flex items-center justify-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileHover={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Link */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <motion.a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        whileHover={{ x: 4 }}
                    >
                        View all projects
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
