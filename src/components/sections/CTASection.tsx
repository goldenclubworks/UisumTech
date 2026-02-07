"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";

export function CTASection() {
    return (
        <section id="contact" className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden bg-black">
            {/* Background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, oklch(0.72 0.19 35 / 15%) 0%, transparent 50%)"
                }}
            />

            <div className="relative max-w-4xl mx-auto text-center">
                {/* Label */}
                <motion.span
                    className="label text-uisum-orange block mb-4 md:mb-6 tracking-[0.3em] text-xs md:text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    BEREIT ZU STARTEN?
                </motion.span>

                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8 text-white">
                    <AnimatedText
                        text="Lass uns"
                        type="words"
                        delay={0.1}
                        staggerChildren={0.1}
                        className="block"
                    />
                    <AnimatedText
                        text="zusammenarbeiten."
                        type="words"
                        delay={0.4}
                        staggerChildren={0.1}
                        className="block text-uisum-orange"
                    />
                </h2>

                {/* Subtext */}
                <motion.p
                    className="text-base md:text-lg text-white/50 mb-8 md:mb-12 max-w-xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    Keine langen Pitches. Kein unnötiger Aufwand.
                    Erzähl uns einfach, was du aufbauen möchtest.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <motion.a
                        href="mailto:goldenclubworks@gmail.com"
                        className="btn-primary inline-flex items-center gap-3 text-base md:text-lg px-8 md:px-10 py-4 md:py-5"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Gespräch starten
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.a>
                </motion.div>

                {/* Quick Info */}
                <motion.div
                    className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-white/40"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    <span>Antwort innerhalb 24h</span>
                    <span className="hidden sm:block text-white/20">•</span>
                    <span>Standort Deutschland</span>
                    <span className="hidden sm:block text-white/20">•</span>
                    <span>Weltweit tätig</span>
                </motion.div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="border-t border-white/10 py-8 md:py-12 px-4 md:px-6 bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
                    {/* Logo */}
                    <div className="text-xl font-bold tracking-tight">
                        <span className="text-white">UI</span>
                        <span className="text-uisum-orange">SUM</span>
                    </div>

                    {/* Links - Stack on mobile */}
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-white/50">
                        <a href="#services" className="hover:text-white transition-colors">Leistungen</a>
                        <a href="#work" className="hover:text-white transition-colors">Projekte</a>
                        <a href="#process" className="hover:text-white transition-colors">Prozess</a>
                        <a href="#contact" className="hover:text-white transition-colors">Kontakt</a>
                    </div>

                    {/* Copyright */}
                    <p className="text-xs text-white/30" suppressHydrationWarning>
                        © {new Date().getFullYear()} UISUM. Alle Rechte vorbehalten.
                    </p>
                </div>
            </div>
        </footer>
    );
}
