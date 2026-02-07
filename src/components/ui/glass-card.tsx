"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    delay?: number;
}

export function GlassCard({
    children,
    className,
    hover = true,
    delay = 0
}: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                "glass-card rounded-2xl p-6 transition-all duration-500",
                className
            )}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={hover ? {
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
            } : undefined}
        >
            {children}
        </motion.div>
    );
}

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    delay?: number;
}

export function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
    return (
        <GlassCard delay={delay} className="group cursor-pointer">
            {/* Icon */}
            <motion.div
                className="mb-6 text-uisum-orange"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
            >
                {icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-gradient transition-all">
                {title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
            </p>

            {/* Hover indicator */}
            <motion.div
                className="mt-6 h-0.5 bg-gradient-to-r from-uisum-orange to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.3, duration: 0.6 }}
                style={{ transformOrigin: "left" }}
            />
        </GlassCard>
    );
}
