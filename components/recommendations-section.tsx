"use client";
import { useTranslation } from "react-i18next";
import { MessageCircle, User } from "lucide-react";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

export default function RecommendationsSection() {
  const { t, i18n } = useTranslation();
  const recommendations = t("recommendations", { returnObjects: true }) as any[];
  // Duplicamos el array para el efecto infinito
  const marqueeRecs = [...recommendations, ...recommendations];

  const cardWidth = 370; // px, igual que el ejemplo
  const totalCards = marqueeRecs.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(cardWidth * totalCards);
  const [isPaused, setIsPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragStartOffset, setDragStartOffset] = useState(0);
  const [offset, setOffset] = useState(0); // offset actual del carrusel
  const speed = 0.5; // px por frame (ajusta para velocidad)

  useEffect(() => {
    setTrackWidth(cardWidth * totalCards);
  }, [cardWidth, totalCards]);

  // Animación manual con requestAnimationFrame
  useEffect(() => {
    if (dragging) return; // no auto-scroll mientras drag
    if (isPaused) return;
    let frame: number;
    function step() {
      setOffset(prev => {
        let next = prev - speed;
        // Loop infinito
        if (next <= -trackWidth / 2) return 0;
        return next;
      });
      frame = requestAnimationFrame(step);
    }
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [dragging, isPaused, trackWidth]);

  // Drag/swipe handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsPaused(true);
    setDragging(true);
    setDragStartX(e.clientX);
    setDragStartOffset(offset);
  };
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging || dragStartX === null) return;
    const delta = e.clientX - dragStartX;
    let next = dragStartOffset + delta;
    // Loop infinito
    if (next < -trackWidth / 2) next += trackWidth / 2;
    if (next > 0) next -= trackWidth / 2;
    setOffset(next);
  };
  const handlePointerUp = () => {
    setDragging(false);
    setIsPaused(false);
    setDragStartX(null);
  };
  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsPaused(true);
    setDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragStartOffset(offset);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!dragging || dragStartX === null) return;
    const delta = e.touches[0].clientX - dragStartX;
    let next = dragStartOffset + delta;
    if (next < -trackWidth / 2) next += trackWidth / 2;
    if (next > 0) next -= trackWidth / 2;
    setOffset(next);
  };
  const handleTouchEnd = handlePointerUp;

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
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                width: `${trackWidth}px`,
                transform: `translateX(${offset}px)`,
                cursor: dragging ? 'grabbing' : 'grab',
                userSelect: 'none',
                transition: dragging ? 'none' : 'transform 0.1s linear',
              }}
            >
              {marqueeRecs.map((rec, idx) => (
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