"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { RevealText } from "@/components/AnimatedText";
import { useRef } from "react";

const projects = [
    {
        id: 1,
        title: "ZENITH FINANCE",
        category: "WEB SYSTEM / BRANDING",
        description: "ENGINEERING DIGITAL LIQUIDITY FOR THE NEXT GENERATION.",
        year: "2024",
        image: "/hero-main.png", // Reusing hero visual for demo consistency
    },
    {
        id: 2,
        title: "PULSE MEDIA",
        category: "SOCIAL ENGINE / VIDEO",
        description: "REDEFINING THE CONTENT PARADIGM THROUGH DATA.",
        year: "2024",
        image: "/parallax-layer1.png",
    },
    {
        id: 3,
        title: "AETHER LABS",
        category: "AI PRODUCT / INTERFACE",
        description: "HUMAN-CENTRIC INTERFACES FOR INTELLIGENT AGENTS.",
        year: "2023",
        image: "/hero-main.png",
    },
];

export function WorkSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section id="work" className="relative py-64 bg-black overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 mb-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="max-w-2xl">
                        <motion.span
                            className="label text-uisum-orange block mb-6 tracking-[0.5em]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            SELECTED ARTIFACTS
                        </motion.span>

                        <RevealText delay={0.1}>
                            <h2 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-white">
                                PROOF,<br />
                                <span className="text-white/20">NOT PROMISES.</span>
                            </h2>
                        </RevealText>
                    </div>

                    <div className="text-right hidden md:block">
                        <div className="text-7xl font-light text-white/5 leading-none">WORKS</div>
                        <div className="text-xs font-mono text-white/20 tracking-widest mt-2 uppercase">scrolldir:horizontal. spread</div>
                    </div>
                </div>
            </div>

            {/* Horizontal Spread Scroll */}
            <div className="flex gap-0 overflow-x-auto no-scrollbar snap-x snap-mandatory px-[20vw]">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="flex-shrink-0 w-[60vw] md:w-[40vw] mr-12 snap-center group"
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-8 bg-white/5">
                            <motion.div
                                className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000"
                                whileHover={{ scale: 1.05 }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100"
                                />
                            </motion.div>

                            {/* Overlay details */}
                            <div className="absolute top-6 left-6 text-xs font-mono text-white/40 tracking-[0.2em]">
                                {project.year} // ART-00{project.id}
                            </div>

                            <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black to-transparent">
                                <p className="text-xs text-uisum-orange mb-2 font-medium tracking-widest">VIEW CASE STUDY</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold tracking-tighter italic group-hover:text-uisum-orange transition-colors">
                                {project.title}
                            </h3>
                            <div className="flex items-center gap-4 text-[10px] label tracking-[0.3em]">
                                {project.category}
                            </div>
                            <p className="text-sm text-white/40 font-light max-w-xs lowercase">
                                {project.description}
                            </p>
                        </div>
                    </motion.div>
                ))}

                {/* End Spacer */}
                <div className="flex-shrink-0 w-[20vw]" />
            </div>

            {/* Background aesthetic line */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-white/5 -z-10" />
        </section>
    );
}
