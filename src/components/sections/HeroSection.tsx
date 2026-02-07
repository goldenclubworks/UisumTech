"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedText, RevealText } from "@/components/AnimatedText";
import { HeroParallaxLayers } from "@/components/ParallaxContainer";
import { GlassCard } from "@/components/ui/glass-card";

export function HeroSection() {
    const { scrollY } = useScroll();
    const yOffset = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 md:pt-20 md:pb-0 md:min-h-[110vh]">
            {/* Background Parallax */}
            <HeroParallaxLayers />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-6">
                {/* Mobile: Stack layout / Desktop: Grid */}
                <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-6 lg:items-start">

                    {/* Vertical Label - Desktop only */}
                    <div className="hidden lg:block lg:col-span-1 border-l border-white/10 pt-4">
                        <motion.div
                            className="text-vertical label text-white/30 whitespace-nowrap text-xs"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            UISUM MEDIA & MARKETING — EST. 2024
                        </motion.div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-7 pt-4 md:pt-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-4"
                        >
                            <span className="label text-uisum-orange tracking-[0.3em] md:tracking-[0.5em] text-xs md:text-sm">
                                Media & Marketing Agentur
                            </span>
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9vw] font-bold tracking-tighter leading-[0.85] mb-8 md:mb-12">
                            <AnimatedText
                                text="VISUAL"
                                type="chars"
                                delay={0.2}
                                className="block text-white"
                            />
                            <motion.span
                                className="block italic font-light text-white/50"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                ATTRACTION
                            </motion.span>
                            <AnimatedText
                                text="BY JOY."
                                type="chars"
                                delay={0.6}
                                className="block text-uisum-orange"
                            />
                        </h1>

                        <div className="max-w-md">
                            <RevealText delay={1} className="mb-8 md:mb-12">
                                <p className="text-base md:text-xl lg:text-2xl text-white/60 leading-relaxed">
                                    Deine erste Wahl für die Beratung und Umsetzung der Vision deines Unternehmens.
                                </p>
                            </RevealText>

                            <motion.div
                                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                            >
                                <motion.a
                                    href="mailto:goldenclubworks@gmail.com"
                                    className="btn-primary w-full sm:w-auto text-center"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Kontakt aufnehmen
                                </motion.a>
                                <motion.a
                                    href="#services"
                                    className="group flex items-center justify-center sm:justify-start gap-2 text-sm font-medium hover:text-uisum-orange transition-colors w-full sm:w-auto"
                                    whileHover={{ x: 5 }}
                                >
                                    Leistungen ansehen
                                    <span className="w-6 h-px bg-white/30 group-hover:bg-uisum-orange transition-colors" />
                                </motion.a>
                            </motion.div>
                        </div>
                    </div>

                    {/* Bento Cards - Desktop only */}
                    <motion.div
                        className="hidden lg:block lg:col-span-4 self-end pt-24"
                        style={{ y: yOffset }}
                    >
                        <div className="relative space-y-6">
                            <GlassCard className="translate-x-8 rotate-1" delay={0.8}>
                                <div className="h-32 w-full rounded-lg bg-gradient-to-br from-uisum-blue/20 to-transparent flex items-center justify-center">
                                    <span className="text-4xl">🎬</span>
                                </div>
                                <div className="mt-4">
                                    <div className="label text-[10px] text-white/40 mb-1">Produktion</div>
                                    <div className="text-sm font-medium">Foto & Video</div>
                                </div>
                            </GlassCard>

                            <GlassCard className="-translate-x-4 -rotate-2 border-uisum-orange/20" delay={1}>
                                <div className="flex items-start justify-between">
                                    <div>
                                        <div className="text-2xl font-bold text-uisum-orange leading-none mb-1">ab 20€</div>
                                        <div className="text-xs text-white/50">Branding Designs</div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border border-white/20 animate-pulse-glow" />
                                </div>
                            </GlassCard>

                            <div className="absolute -right-16 top-0 text-[10vw] font-bold text-white/[0.03] -z-10 pointer-events-none select-none">
                                UISUM
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle decorative elements - Desktop only */}
            <div className="hidden md:block absolute top-1/4 right-[10%] w-[1px] h-48 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </section>
    );
}
