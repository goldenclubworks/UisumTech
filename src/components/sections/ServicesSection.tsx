"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { RevealText } from "@/components/AnimatedText";
import { Globe, Share2, Palette, Camera } from "lucide-react";
import { useRef } from "react";

const services = [
    {
        icon: <Globe className="w-12 h-12" />,
        title: "WEB SYSTEM",
        description: "Architecting high-performance digital ecosystems. Not just websites, but scalable software products designed for the future.",
        offset: "0%",
        color: "uisum-orange"
    },
    {
        icon: <Share2 className="w-12 h-12" />,
        title: "SOCIAL DYNAMICS",
        description: "Strategic content engine that builds authority. We engineer virality through data-driven visual storytelling.",
        offset: "15%",
        color: "uisum-blue"
    },
    {
        icon: <Palette className="w-12 h-12" />,
        title: "BRAND IDENTITY",
        description: "Visual languages that command respect. We create identity systems that work seamlessly across code and physical space.",
        offset: "-5%",
        color: "white"
    },
    {
        icon: <Camera className="w-12 h-12" />,
        title: "CINEMATIC VISUALS",
        description: "High-end photography and motion production. We capture the essence of your product with clinical precision.",
        offset: "10%",
        color: "uisum-orange"
    },
];

export function ServicesSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section id="services" className="relative py-64 px-6 bg-black" ref={containerRef}>
            {/* Background Micro-Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative max-w-[1400px] mx-auto">
                <div className="grid grid-cols-12 gap-6 items-start">

                    {/* Left: Sticky Header */}
                    <div className="col-span-12 lg:col-span-5 sticky top-32 mb-24 lg:mb-0">
                        <motion.span
                            className="label text-uisum-orange block mb-6 tracking-[0.4em]"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            CORE CAPABILITIES
                        </motion.span>

                        <RevealText delay={0.1}>
                            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
                                THE<br />
                                <span className="text-white/20">FOUR</span><br />
                                <span className="italic text-uisum-orange">PILLARS.</span>
                            </h2>
                        </RevealText>

                        <motion.p
                            className="mt-12 body-large text-white/40 max-w-sm lowercase leading-tight"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            uisum represents the intersection of logic and aesthetic.
                            our services are unified, not siloed.
                        </motion.p>
                    </div>

                    {/* Right: Floating Asymmetrical Stack */}
                    <div className="col-span-12 lg:col-span-7 space-y-32 lg:pt-32">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                className="relative"
                                style={{ marginLeft: service.offset }}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <GlassCard className="group border-none bg-white/[0.02] p-12 hover:bg-white/[0.04] transition-colors">
                                    <div className="flex flex-col md:flex-row gap-12 items-start">
                                        <div className={`text-${service.color} opacity-40 group-hover:opacity-100 transition-opacity`}>
                                            {service.icon}
                                        </div>
                                        <div>
                                            <div className="text-xs font-mono text-white/20 mb-4 tracking-widest">
                                                SERVICE_MODULE // 0{index + 1}
                                            </div>
                                            <h3 className="text-4xl font-bold mb-6 tracking-tighter italic">
                                                {service.title}
                                            </h3>
                                            <p className="text-lg text-white/40 leading-relaxed max-w-lg">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Decorative corner */}
                                    <div className="absolute bottom-4 right-4 text-[8px] font-mono text-white/5 uppercase">
                                        uis/lib-cap-0{index + 1}
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
