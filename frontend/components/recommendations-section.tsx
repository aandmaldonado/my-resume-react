"use client";
import { useTranslation } from "react-i18next";
import { MessageCircle, User } from "lucide-react";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { useInfiniteCarousel } from "../hooks/use-infinite-carousel";

export default function RecommendationsSection() {
  const { t, i18n } = useTranslation();
  const recommendations = t("recommendations", { returnObjects: true }) as any[];
  const cardWidth = 370;
  const speed = 1.0;
  const {
    marqueeItems,
    offset,
    trackWidth,
    trackRef,
    dragging,
    handlers
  } = useInfiniteCarousel({ items: recommendations, cardWidth, speed });

  return (
    <section id="recommendations" className="py-20 bg-white dark:bg-gray-900 w-full">
      <div className="w-full px-2 sm:px-4">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white flex items-center justify-center gap-3">
            <MessageCircle className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            {i18n.language === "es" ? "Recomendaciones" : "Recommendations"}
          </h2>
          <div className="relative overflow-hidden w-full">
            <div
              ref={trackRef}
              className="flex gap-8 items-center select-none touch-pan-x"
              style={{
                width: `${trackWidth}px`,
                transform: `translateX(${offset}px)`,
                cursor: dragging ? 'grabbing' : 'grab',
                userSelect: 'none',
                transition: dragging ? 'none' : 'transform 0.1s linear',
              }}
              {...handlers}
            >
              {marqueeItems.map((rec, idx) => (
                <div
                  key={idx + rec.name}
                  className="border border-blue-200 dark:border-blue-800 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm flex flex-col items-center"
                  style={{ width: `${cardWidth}px`, maxHeight: 'fit-content' }}
                >
                  {/* Foto o icono de usuario */}
                  {rec.picture ? (
                    <Image
                      src={rec.picture}
                      alt={rec.name}
                      width={64}
                      height={64}
                      className="object-cover w-16 h-16 rounded-full border-4 border-blue-600 dark:border-blue-400 mb-4"
                    />
                  ) : (
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full border-4 border-blue-600 dark:border-blue-400 mb-4">
                      <User className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center flex items-center justify-center gap-2">
                    {rec.name}
                    {rec.linkedin && rec.linkedin.trim() !== "" && (
                      <a href={rec.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${rec.name}`}
                        className="inline-flex items-center">
                        <Image src="/about/linkedin.svg" alt="LinkedIn" width={20} height={20} className="ml-1" />
                      </a>
                    )}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-center">{rec.position}</p>
                  <p className="text-gray-600 dark:text-gray-400 font-medium text-center">{rec.company}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-2">{rec.relation}</p>
                  <blockquote className="italic text-gray-700 dark:text-gray-300 border-l-4 border-blue-600 dark:border-blue-400 pl-4 mt-2 text-center">
                    {rec.text}
                  </blockquote>
                  <span className="text-sm text-gray-400 dark:text-gray-500 mt-4">{rec.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 