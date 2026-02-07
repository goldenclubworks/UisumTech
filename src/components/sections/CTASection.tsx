"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";

export function CTASection() {
    return (
        <section id="contact" className="relative py-32 px-6 overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, oklch(0.72 0.19 35 / 10%) 0%, transparent 50%)"
                }}
            />

            <div className="relative max-w-4xl mx-auto text-center">
                {/* Label */}
                <motion.span
                    className="label text-uisum-orange block mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Ready to Start?
                </motion.span>

                {/* Headline */}
                <h2 className="heading-2 mb-8">
                    <AnimatedText
                        text="Let's Build"
                        type="words"
                        delay={0.1}
                        staggerChildren={0.1}
                        className="block"
                    />
                    <AnimatedText
                        text="Something."
                        type="words"
                        delay={0.4}
                        staggerChildren={0.1}
                        className="block text-uisum-orange text-glow-orange"
                    />
                </h2>

                {/* Subtext */}
                <motion.p
                    className="body-large mb-12 max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    No pitch decks. No discovery calls that could've been emails.
                    Just tell us what you're building.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <motion.a
                        href="mailto:hello@uisum.com"
                        className="btn-primary inline-flex items-center gap-3 text-lg px-10 py-5"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Start a Conversation
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.a>
                </motion.div>

                {/* Quick Info */}
                <motion.div
                    className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    <span>Usually respond within 24h</span>
                    <span className="hidden sm:block">•</span>
                    <span>Based in Germany</span>
                    <span className="hidden sm:block">•</span>
                    <span>Working globally</span>
                </motion.div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="border-t border-white/5 py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <div className="text-xl font-bold tracking-tight">
                        <span className="text-foreground">UI</span>
                        <span className="text-uisum-orange">SUM</span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-8 text-sm text-muted-foreground">
                        <a href="#services" className="hover:text-foreground transition-colors">Services</a>
                        <a href="#work" className="hover:text-foreground transition-colors">Work</a>
                        <a href="#process" className="hover:text-foreground transition-colors">Process</a>
                        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
                    </div>

                    {/* Copyright */}
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} UISUM. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
