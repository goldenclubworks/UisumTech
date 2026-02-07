"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { RevealText } from "@/components/AnimatedText";
import { Globe, Share2, Palette, Camera } from "lucide-react";
import { useRef } from "react";

const services = [
    {
        icon: <Globe className="w-12 h-12" />,
        title: "WEBSITES",
        subtitle: "One-Pager & Webdesign",
        description: "Egal ob kleiner One-Pager für Privatpersonen oder größere Websites für klein & mittelständige Unternehmen.",
        price: "ab 150€",
        offset: "0%",
        color: "uisum-orange"
    },
    {
        icon: <Share2 className="w-12 h-12" />,
        title: "SOCIAL MEDIA",
        subtitle: "Management & Strategie",
        description: "Wir bringen Dein Social Media auf ein neues Level um Platz für Sichtbarkeit und Verbindung zu schaffen.",
        price: "ab 200€",
        offset: "15%",
        color: "uisum-blue"
    },
    {
        icon: <Palette className="w-12 h-12" />,
        title: "BRANDING",
        subtitle: "Visual Identity",
        description: "Von Logo/Moodboard-Design über Flyer, Visitenkarten bis hin zu Merchandise Artikeln sind wir dein Ansprechpartner.",
        price: "ab 20€",
        offset: "-5%",
        color: "white"
    },
    {
        icon: <Camera className="w-12 h-12" />,
        title: "FOTO/VIDEO",
        subtitle: "Content Production",
        description: "Deine Vorstellung perfekt eingefangen, ob mit Drohne, Kamera oder Content Shoots.",
        price: "ab 80€",
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
                            LEISTUNGEN BY UISUM
                        </motion.span>

                        <RevealText delay={0.1}>
                            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
                                RUNDUM<br />
                                <span className="text-white/20">LÖSUNG</span><br />
                                <span className="italic text-uisum-orange">FÜR DICH.</span>
                            </h2>
                        </RevealText>

                        <motion.p
                            className="mt-12 body-large text-white/40 max-w-sm leading-tight"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            Technik muss sich nicht wie eine Fremdsprache anfühlen.
                            Wir kümmern uns um Digitalisierung, egal ob Social Media, Websites oder Branding.
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
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="text-xs font-mono text-white/20 tracking-widest">
                                                    {service.subtitle}
                                                </div>
                                                <div className="text-uisum-orange font-bold text-lg">
                                                    {service.price}
                                                </div>
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
                                        uis/srv-0{index + 1}
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
