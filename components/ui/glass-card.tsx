"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
    children: ReactNode
    className?: string
    accentColor?: "blue" | "cyan"
}

export default function GlassCard({ children, className, accentColor = "blue" }: GlassCardProps) {
    const glowClass = accentColor === "blue" ? "hover:shadow-glow-blue" : "hover:shadow-glow-cyan"
    const borderGradient = accentColor === "blue"
        ? "bg-gradient-to-b from-blue-500/30 to-blue-500/5"
        : "bg-gradient-to-b from-cyan-500/30 to-cyan-500/5"
    const accentLineColor = accentColor === "blue" ? "bg-blue-500" : "bg-cyan-500"

    return (
        <motion.div
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
                "group relative p-[1px] rounded-xl overflow-hidden transition-all duration-300",
                borderGradient,
                glowClass,
                className
            )}
        >
            <div className="relative h-full w-full bg-dark-card/80 backdrop-blur-xl rounded-[11px] p-6 z-10">
                {children}

                {/* Accent line at bottom */}
                <div className={cn(
                    "absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out",
                    accentLineColor
                )} />
            </div>
        </motion.div>
    )
}
