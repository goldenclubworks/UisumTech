"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedText, RevealText } from "@/components/AnimatedText";
import { HeroParallaxLayers } from "@/components/ParallaxContainer";
import { GlassCard } from "@/components/ui/glass-card";

export function HeroSection() {
    const { scrollY } = useScroll();
    const yOffset = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section className="relative min-h-[110vh] flex items-center overflow-hidden pt-20">
            {/* Background Parallax */}
            <HeroParallaxLayers />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 grid grid-cols-12 gap-6 items-start">

                {/* Left: Vertical Label */}
                <div className="hidden lg:block col-span-1 border-l border-white/10 pt-4 h-full">
                    <motion.div
                        className="text-vertical label text-white/20 whitespace-nowrap"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        UISUM MEDIA & MARKETING — EST. 2024
                    </motion.div>
                </div>

                {/* Center: Massive Editorial Headline */}
                <div className="col-span-12 lg:col-span-7 pt-12">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-4"
                    >
                        <span className="label text-uisum-orange tracking-[0.5em]">
                            Media & Marketing Agentur
                        </span>
                    </motion.div>

                    <h1 className="text-7xl md:text-8xl lg:text-[10vw] font-bold tracking-tighter leading-[0.85] mb-12">
                        <AnimatedText
                            text="VISUAL"
                            type="chars"
                            delay={0.2}
                            className="block"
                        />
                        <motion.span
                            className="block italic font-light text-white/40"
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
                            className="block text-uisum-orange text-glow-orange strikethrough-reveal"
                        />
                    </h1>

                    <div className="max-w-md">
                        <RevealText delay={1} className="mb-12">
                            <p className="body-large text-white/60 lowercase tracking-tight leading-none text-2xl">
                                Deine erste Wahl für die Beratung und Umsetzung der Vision deines Unternehmens.
                            </p>
                        </RevealText>

                        <motion.div
                            className="flex items-center gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            <motion.a
                                href="mailto:goldenclubworks@gmail.com"
                                className="btn-primary"
                                whileHover={{ scale: 1.05 }}
                            >
                                Kontakt
                            </motion.a>
                            <motion.a
                                href="#services"
                                className="group flex items-center gap-2 text-sm font-medium hover:text-uisum-orange transition-colors"
                                whileHover={{ x: 5 }}
                            >
                                Leistungen
                                <span className="w-8 h-px bg-white/20 group-hover:bg-uisum-orange transition-colors" />
                            </motion.a>
                        </motion.div>
                    </div>
                </div>

                {/* Right: Asymmetrical Bento Elements */}
                <motion.div
                    className="hidden lg:block col-span-4 self-end pt-24"
                    style={{ y: yOffset }}
                >
                    <div className="relative space-y-6">
                        <GlassCard className="translate-x-12 rotate-2" delay={0.8}>
                            <div className="h-40 w-full rounded-lg bg-gradient-to-br from-uisum-blue/20 to-transparent flex items-center justify-center">
                                <span className="text-4xl">🎬</span>
                            </div>
                            <div className="mt-4">
                                <div className="label text-[10px] mb-1">Produktion</div>
                                <div className="text-sm font-medium">Foto & Video</div>
                            </div>
                        </GlassCard>

                        <GlassCard className="-translate-x-6 -rotate-3 border-uisum-orange/20" delay={1}>
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="text-3xl font-bold text-uisum-orange leading-none mb-2">20€+</div>
                                    <div className="text-xs text-white/40">Branding Designs</div>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-white/10 animate-pulse-glow" />
                            </div>
                        </GlassCard>

                        <div className="absolute -right-20 top-0 text-[12vw] font-bold text-white/[0.02] -z-10 pointer-events-none select-none">
                            UISUM
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Aesthetic Micro-details */}
            <div className="absolute top-1/4 right-[10%] w-[1px] h-64 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-1/4 left-[5%] text-[10px] leading-none text-white/10 rotate-90 origin-left uppercase tracking-widest">
                +49 173 3555663
            </div>

        </section>
    );
}
