import { useRef, useState, useEffect, useCallback } from "react";

interface UseInfiniteCarouselProps<T> {
  items: T[];
  cardWidth: number;
  speed?: number;
}

export function useInfiniteCarousel<T>({ items, cardWidth, speed = 1.0 }: UseInfiniteCarouselProps<T>) {
  // Duplicamos el array para el efecto infinito
  const marqueeItems = [...items, ...items];
  const totalCards = marqueeItems.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(cardWidth * totalCards);
  const [isPaused, setIsPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragStartOffset, setDragStartOffset] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setTrackWidth(cardWidth * totalCards);
  }, [cardWidth, totalCards]);

  // Animación manual con requestAnimationFrame
  useEffect(() => {
    if (dragging) return;
    if (isPaused) return;
    let frame: number;
    function step() {
      setOffset(prev => {
        let next = prev - speed;
        if (next <= -trackWidth / 2) return 0;
        return next;
      });
      frame = requestAnimationFrame(step);
    }
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [dragging, isPaused, trackWidth, speed]);

  // Drag/swipe handlers
  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    setIsPaused(true);
    setDragging(true);
    setDragStartX(e.clientX);
    setDragStartOffset(offset);
  }, [offset]);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging || dragStartX === null) return;
    const delta = e.clientX - dragStartX;
    let next = dragStartOffset + delta;
    if (next < -trackWidth / 2) next += trackWidth / 2;
    if (next > 0) next -= trackWidth / 2;
    setOffset(next);
  }, [dragging, dragStartX, dragStartOffset, trackWidth]);

  const handlePointerUp = useCallback(() => {
    setDragging(false);
    setIsPaused(false);
    setDragStartX(null);
  }, []);

  // Touch events for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    setIsPaused(true);
    setDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragStartOffset(offset);
  }, [offset]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!dragging || dragStartX === null) return;
    const delta = e.touches[0].clientX - dragStartX;
    let next = dragStartOffset + delta;
    if (next < -trackWidth / 2) next += trackWidth / 2;
    if (next > 0) next -= trackWidth / 2;
    setOffset(next);
  }, [dragging, dragStartX, dragStartOffset, trackWidth]);

  const handleTouchEnd = handlePointerUp;

  return {
    marqueeItems,
    offset,
    trackWidth,
    trackRef,
    isPaused,
    setIsPaused,
    dragging,
    handlers: {
      onMouseEnter: () => setIsPaused(true),
      onMouseLeave: () => setIsPaused(false),
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerLeave: handlePointerUp,
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
    },
  };
} 