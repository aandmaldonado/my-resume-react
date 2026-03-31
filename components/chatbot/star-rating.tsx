"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface StarRatingProps {
    onRate: (rating: number) => void;
    currentRating?: number;
    disabled?: boolean;
    botTheme?: 'light' | 'dark';
}

export function StarRating({ onRate, currentRating = 0, disabled = false, botTheme = 'dark' }: StarRatingProps) {
    const isDark = botTheme === 'dark';
    const [hover, setHover] = useState(0);

    return (
        <div className={cn(
            "flex flex-col items-center gap-3 rounded-2xl p-6 shadow-inner transition-colors duration-300",
            isDark ? "bg-zinc-900/50" : "bg-zinc-50"
        )}>
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                {currentRating > 0 ? "¡Gracias por tu feedback!" : "¿Qué te pareció la charla?"}
            </p>
            <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                        key={star}
                        whileHover={!disabled ? { scale: 1.2 } : {}}
                        whileTap={!disabled ? { scale: 0.9 } : {}}
                        disabled={disabled}
                        type="button"
                        className="relative p-1 outline-none"
                        onClick={() => onRate(star)}
                        onMouseEnter={() => !disabled && setHover(star)}
                        onMouseLeave={() => !disabled && setHover(0)}
                    >
                        <Star
                            size={28}
                            className={cn(
                                "transition-colors duration-200",
                                (hover || currentRating) >= star
                                    ? "fill-yellow-400 text-yellow-400"
                                    : (isDark ? "text-zinc-700" : "text-zinc-300")
                            )}
                        />
                        <AnimatePresence>
                            {((hover || currentRating) === star) && (
                                <motion.div
                                    layoutId="star-glow"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    className="absolute inset-0 -z-10 rounded-full bg-yellow-400/20 blur-md"
                                />
                            )}
                        </AnimatePresence>
                    </motion.button>
                ))}
            </div>
            {currentRating > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn("mt-2 text-[10px] font-medium transition-colors", isDark ? "text-green-400" : "text-green-600")}
                >
                    Valoración enviada con éxito
                </motion.div>
            )}
        </div>
    );
}
