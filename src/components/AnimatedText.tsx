"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
    staggerChildren?: number;
    type?: "chars" | "words" | "lines";
}

export function AnimatedText({
    text,
    className,
    delay = 0,
    staggerChildren = 0.03,
    type = "chars"
}: AnimatedTextProps) {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: delay,
                staggerChildren,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: -90,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    const splitText = () => {
        switch (type) {
            case "words":
                return text.split(" ");
            case "lines":
                return text.split("\n");
            case "chars":
            default:
                return text.split("");
        }
    };

    const items = splitText();

    return (
        <motion.span
            className={cn("inline-flex flex-wrap", className)}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            style={{ perspective: 1000 }}
        >
            {items.map((item, index) => (
                <motion.span
                    key={index}
                    variants={itemVariants}
                    className="inline-block"
                    style={{
                        marginRight: type === "words" ? "0.25em" : undefined,
                        whiteSpace: "pre"
                    }}
                >
                    {item === " " ? "\u00A0" : item}
                </motion.span>
            ))}
        </motion.span>
    );
}

interface RevealTextProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function RevealText({ children, className, delay = 0 }: RevealTextProps) {
    return (
        <motion.div
            className={cn("overflow-hidden", className)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}
