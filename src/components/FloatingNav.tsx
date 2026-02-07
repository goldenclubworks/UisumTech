"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export function FloatingNav() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
        return () => unsubscribe();
    }, [scrollY]);

    const navOpacity = useTransform(scrollY, [0, 100], [0.6, 0.95]);
    const navBlur = useTransform(scrollY, [0, 100], [10, 30]);

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <motion.nav
                className="mx-auto max-w-6xl rounded-full border border-white/10 px-6 py-3"
                style={{
                    backgroundColor: `oklch(0.08 0 0 / ${isScrolled ? 0.9 : 0.5})`,
                    backdropFilter: `blur(${isScrolled ? 30 : 10}px) saturate(180%)`,
                    WebkitBackdropFilter: `blur(${isScrolled ? 30 : 10}px) saturate(180%)`,
                }}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <motion.span
                            className="text-xl font-bold tracking-tight"
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="text-foreground">UI</span>
                            <span className="text-uisum-orange">SUM</span>
                        </motion.span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {["Services", "Work", "Process", "About"].map((item) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                whileHover={{ y: -2 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.a
                        href="#contact"
                        className="btn-primary text-sm px-5 py-2.5"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Start Project
                    </motion.a>
                </div>
            </motion.nav>
        </motion.header>
    );
}
