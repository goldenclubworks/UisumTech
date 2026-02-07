"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ui/glass-card";
import { RevealText } from "@/components/AnimatedText";
import { Globe, Share2, Palette, Camera } from "lucide-react";

const services = [
    {
        icon: <Globe className="w-10 h-10" />,
        title: "Web",
        description: "Product-grade websites and applications. From concept to production with pixel-perfect execution.",
    },
    {
        icon: <Share2 className="w-10 h-10" />,
        title: "Social",
        description: "Strategic content systems that build presence, not just posts. Growth engineered from day one.",
    },
    {
        icon: <Palette className="w-10 h-10" />,
        title: "Brand",
        description: "Visual identity systems that scale. From logo to complete design language architecture.",
    },
    {
        icon: <Camera className="w-10 h-10" />,
        title: "Photo + Video",
        description: "Cinematic production for the digital age. Motion content that converts and captivates.",
    },
];

export function ServicesSection() {
    return (
        <section id="services" className="relative py-32 px-6">
            {/* Background gradient */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at top, oklch(0.12 0.02 35 / 20%) 0%, transparent 50%)"
                }}
            />

            <div className="relative max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.span
                        className="label text-uisum-orange block mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        What We Build
                    </motion.span>

                    <RevealText delay={0.2}>
                        <h2 className="heading-2">
                            Four Pillars of<br />
                            <span className="text-uisum-orange">Digital Excellence</span>
                        </h2>
                    </RevealText>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
