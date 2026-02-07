"use client";

import { motion } from "framer-motion";
import { RevealText } from "@/components/AnimatedText";

const projects = [
    {
        id: 1,
        title: "WEBDESIGN",
        category: "ONE-PAGER / WEBSITE",
        description: "Egal ob One-Pager für Privatpersonen oder größere Websites für klein & mittelständige Unternehmen.",
        year: "2024",
        image: "/hero-main.png",
    },
    {
        id: 2,
        title: "SOCIAL MEDIA",
        category: "INSTAGRAM / TIKTOK / CONTENT",
        description: "Wir bringen Dein Social Media auf ein neues Level mit strategischem Content und Account-Management.",
        year: "2024",
        image: "/parallax-layer1.png",
    },
    {
        id: 3,
        title: "BRANDING",
        category: "LOGO / FLYER / MERCHANDISE",
        description: "Von Logo-Design über Visitenkarten bis hin zu Merchandise Artikeln sind wir dein Ansprechpartner.",
        year: "2024",
        image: "/hero-main.png",
    },
];

export function WorkSection() {
    return (
        <section id="work" className="relative py-24 md:py-40 lg:py-64 bg-black overflow-hidden">
            {/* Header */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-6 mb-12 md:mb-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
                    <div className="max-w-2xl">
                        <motion.span
                            className="label text-uisum-orange block mb-4 md:mb-6 tracking-[0.3em] md:tracking-[0.5em] text-xs md:text-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            PROJEKTE
                        </motion.span>

                        <RevealText delay={0.1}>
                            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
                                BEWEISE,<br />
                                <span className="text-white/40">KEINE</span><br className="md:hidden" />
                                <span className="text-white/40"> VERSPRECHEN.</span>
                            </h2>
                        </RevealText>
                    </div>

                    <div className="text-right hidden lg:block">
                        <div className="text-6xl font-light text-white/10 leading-none">WORKS</div>
                        <div className="text-xs font-mono text-white/30 tracking-widest mt-2 uppercase">scroll → horizontal</div>
                    </div>
                </div>
            </div>

            {/* Mobile: Vertical Cards / Desktop: Horizontal Scroll */}
            <div className="md:hidden px-4 space-y-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="group"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-white/5">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-70"
                            />
                            <div className="absolute top-4 left-4 text-xs font-mono text-white/50 tracking-wide">
                                {project.year}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold tracking-tight mb-2">
                            {project.title}
                        </h3>
                        <div className="text-[10px] label text-uisum-orange tracking-[0.2em] mb-2">
                            {project.category}
                        </div>
                        <p className="text-sm text-white/50 leading-relaxed">
                            {project.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: Horizontal Spread Scroll */}
            <div className="hidden md:flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory px-[10vw] lg:px-[15vw]">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="flex-shrink-0 w-[50vw] lg:w-[35vw] snap-center group"
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                    >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-6 bg-white/5">
                            <motion.div
                                className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                                whileHover={{ scale: 1.03 }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                />
                            </motion.div>

                            <div className="absolute top-4 left-4 md:top-6 md:left-6 text-xs font-mono text-white/50 tracking-[0.15em]">
                                {project.year} {/* PRJ-0{project.id} */}
                            </div>

                            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/90 to-transparent">
                                <p className="text-xs text-uisum-orange font-medium tracking-widest">MEHR ERFAHREN →</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-2xl lg:text-3xl font-bold tracking-tighter italic group-hover:text-uisum-orange transition-colors">
                                {project.title}
                            </h3>
                            <div className="text-[10px] label text-white/40 tracking-[0.25em]">
                                {project.category}
                            </div>
                            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
                                {project.description}
                            </p>
                        </div>
                    </motion.div>
                ))}

                <div className="flex-shrink-0 w-[10vw]" />
            </div>

            {/* Background line */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-white/5 -z-10 hidden md:block" />
        </section>
    );
}
