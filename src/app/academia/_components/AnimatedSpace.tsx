"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

const container: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] },
    },
};

export default function AnimatedSpace({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className={className}
        >
            {React.Children.map(children, (child) =>
                child == null || child === false ? null : (
                    <motion.div variants={item}>{child}</motion.div>
                )
            )}
        </motion.div>
    );
}
