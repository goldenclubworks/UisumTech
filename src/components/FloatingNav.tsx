"use client";

import { motion, useScroll, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { label: "Leistungen", href: "#services" },
    { label: "Projekte", href: "#work" },
    { label: "Prozess", href: "#process" },
];

export function FloatingNav() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
        return () => unsubscribe();
    }, [scrollY]);

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 z-50 px-3 md:px-4 pt-3 md:pt-4"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <motion.nav
                    className="mx-auto max-w-6xl rounded-full border border-white/10 px-4 md:px-6 py-2.5 md:py-3"
                    style={{
                        backgroundColor: `oklch(0.08 0 0 / ${isScrolled ? 0.95 : 0.7})`,
                        backdropFilter: `blur(${isScrolled ? 30 : 15}px) saturate(180%)`,
                        WebkitBackdropFilter: `blur(${isScrolled ? 30 : 15}px) saturate(180%)`,
                    }}
                >
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <motion.span
                                className="text-lg md:text-xl font-bold tracking-tight"
                                whileHover={{ scale: 1.02 }}
                            >
                                <span className="text-white">UI</span>
                                <span className="text-uisum-orange">SUM</span>
                            </motion.span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-6 lg:gap-8">
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    className="text-sm text-white/60 hover:text-white transition-colors"
                                    whileHover={{ y: -2 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </div>

                        {/* CTA Button - Desktop */}
                        <motion.a
                            href="#contact"
                            className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Kontakt
                        </motion.a>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </motion.nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    className="text-2xl font-medium text-white/80 hover:text-uisum-orange transition-colors"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                className="btn-primary text-lg px-8 py-3 mt-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Kontakt aufnehmen
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
