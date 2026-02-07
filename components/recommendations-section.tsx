"use client";
import { useTranslation } from "react-i18next";
import { MessageCircle, User } from "lucide-react";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { useInfiniteCarousel } from "../hooks/use-infinite-carousel";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function RecommendationsSection() {
  const { t, i18n } = useTranslation();
  const recommendationsData = t("recommendations", { returnObjects: true }) as { counter: string; list: any[] };
  const recommendations = recommendationsData.list;
  const cardWidth = 370;
  const speed = 1.0;
  const {
    marqueeItems,
    offset,
    trackWidth,
    trackRef,
    dragging,
    handlers
  } = useInfiniteCarousel({ items: recommendations, cardWidth, speed, gap: 32 });

  return (
    <section id="recommendations" className="py-12 sm:py-16 bg-[#030712] w-full">
      <div className="w-full px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-white">
            {(() => {
              const title = recommendationsData.counter;
              const words = title.split(" ");
              if (words.length <= 1) return title;
              if (words.length === 2) return (
                <>
                  {words[0]}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    {words[1]}
                  </span>
                </>
              );
              return (
                <>
                  {words.slice(0, -2).join(" ")}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    {words.slice(-2).join(" ")}
                  </span>
                </>
              );
            })()}
          </h2>
          <div className="relative overflow-hidden w-full py-10 -my-10">
            <div
              ref={trackRef}
              className="flex gap-8 items-center select-none touch-pan-x"
              style={{
                width: `${trackWidth}px`,
                transform: `translateX(${offset}px)`,
                cursor: dragging ? 'grabbing' : 'grab',
                userSelect: 'none',
                transition: 'none',
              }}
              {...handlers}
            >
              {marqueeItems.map((rec, idx) => (
                <motion.div
                  key={idx + rec.name}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative p-[1px] rounded-xl overflow-hidden bg-gradient-to-b from-blue-500/30 to-blue-500/5 hover:shadow-glow-blue transition-all duration-300"
                  style={{ width: `${cardWidth}px` }}
                >
                  <div className="relative h-[300px] w-full bg-dark-card/90 backdrop-blur-xl rounded-[11px] p-6 flex flex-col items-center z-10">
                    {/* Foto o icono de usuario */}
                    {rec.picture ? (
                      <div className="relative w-16 h-16 rounded-full p-[2px] bg-gradient-to-b from-blue-500 to-cyan-500 mb-4 flex-shrink-0">
                        <Image
                          src={rec.picture}
                          alt={rec.name}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full rounded-full bg-dark-card"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 flex items-center justify-center bg-gray-800 rounded-full border-2 border-blue-500 mb-4 flex-shrink-0">
                        <User className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-white text-center flex items-center justify-center gap-2">
                      {rec.name}
                      {rec.linkedin && rec.linkedin.trim() !== "" && (
                        <a href={rec.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${rec.name}`}
                          className="inline-flex items-center hover:scale-110 transition-transform">
                          <Image src="/about/linkedin.svg" alt="LinkedIn" width={20} height={20} className="ml-1" />
                        </a>
                      )}
                    </h3>
                    <blockquote className="italic text-gray-300 border-l-2 border-blue-500 pl-4 mt-4 text-center text-sm leading-relaxed overflow-y-auto pr-1">
                      {rec.text}
                    </blockquote>

                    {/* Accent line at bottom match GlassCard */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out bg-blue-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 