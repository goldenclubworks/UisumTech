"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { RevealText } from "@/components/AnimatedText";
import { Globe, Share2, Palette, Camera } from "lucide-react";

const services = [
    {
        icon: <Globe className="w-10 h-10 md:w-12 md:h-12" />,
        title: "WEBSITES",
        subtitle: "One-Pager & Webdesign",
        description: "Egal ob kleiner One-Pager für Privatpersonen oder größere Websites für klein & mittelständige Unternehmen.",
        price: "ab 150€",
    },
    {
        icon: <Share2 className="w-10 h-10 md:w-12 md:h-12" />,
        title: "SOCIAL MEDIA",
        subtitle: "Management & Strategie",
        description: "Wir bringen Dein Social Media auf ein neues Level um Platz für Sichtbarkeit und Verbindung zu schaffen.",
        price: "ab 200€",
    },
    {
        icon: <Palette className="w-10 h-10 md:w-12 md:h-12" />,
        title: "BRANDING",
        subtitle: "Visual Identity",
        description: "Von Logo/Moodboard-Design über Flyer, Visitenkarten bis hin zu Merchandise Artikeln sind wir dein Ansprechpartner.",
        price: "ab 20€",
    },
    {
        icon: <Camera className="w-10 h-10 md:w-12 md:h-12" />,
        title: "FOTO/VIDEO",
        subtitle: "Content Production",
        description: "Deine Vorstellung perfekt eingefangen, ob mit Drohne, Kamera oder Content Shoots.",
        price: "ab 80€",
    },
];

export function ServicesSection() {
    return (
        <section id="services" className="relative py-24 md:py-40 lg:py-64 px-4 md:px-6 bg-black overflow-hidden">
            {/* Background Micro-Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative max-w-[1400px] mx-auto">
                {/* Mobile: Stack layout, Desktop: Grid layout */}
                <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-6 lg:items-start">

                    {/* Header Section - NOT sticky on mobile */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 mb-12 lg:mb-0">
                        <motion.span
                            className="label text-uisum-orange block mb-4 md:mb-6 tracking-[0.3em] md:tracking-[0.4em] text-xs md:text-sm"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            LEISTUNGEN BY UISUM
                        </motion.span>

                        <RevealText delay={0.1}>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
                                RUNDUM<br />
                                <span className="text-white/40">LÖSUNG</span><br />
                                <span className="italic text-uisum-orange">FÜR DICH.</span>
                            </h2>
                        </RevealText>

                        <motion.p
                            className="mt-6 md:mt-12 text-base md:text-lg text-white/50 max-w-sm leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            Technik muss sich nicht wie eine Fremdsprache anfühlen.
                            Wir kümmern uns um Digitalisierung, egal ob Social Media, Websites oder Branding.
                        </motion.p>
                    </div>

                    {/* Service Cards - Clean mobile stack */}
                    <div className="lg:col-span-7 space-y-6 md:space-y-12 lg:space-y-24 lg:pt-32">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                className="relative"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <GlassCard className="group border-none bg-white/[0.03] p-6 md:p-8 lg:p-12 hover:bg-white/[0.05] transition-colors">
                                    {/* Price Badge - Top Right */}
                                    <div className="absolute top-4 right-4 md:top-6 md:right-6 text-uisum-orange font-bold text-base md:text-lg">
                                        {service.price}
                                    </div>

                                    <div className="flex flex-col gap-4 md:gap-6">
                                        {/* Icon + Subtitle */}
                                        <div className="flex items-center gap-4">
                                            <div className="text-uisum-orange opacity-60 group-hover:opacity-100 transition-opacity">
                                                {service.icon}
                                            </div>
                                            <div className="text-xs font-mono text-white/30 tracking-widest uppercase">
                                                {service.subtitle}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter italic pr-16">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm md:text-base lg:text-lg text-white/50 leading-relaxed max-w-lg">
                                            {service.description}
                                        </p>
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
