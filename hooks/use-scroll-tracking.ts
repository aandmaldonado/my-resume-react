"use client";

import { useEffect, useRef } from "react";
import { trackSectionView, trackSectionEngagement, trackScrollDepth } from "@/lib/analytics";
import type { SiteSection } from "@/lib/analytics";

// ──────────────────────────────────────────────
// useScrollTracking
// ──────────────────────────────────────────────
// Attaches an IntersectionObserver to every HTML section with an id that
// matches a SiteSection. Fires:
//   • section_view      → when ≥40 % of the section is visible
//   • section_engagement → when the section leaves the viewport, carrying dwell time
//
// Also fires milestone scroll_depth events (25/50/75/100 %).
// ──────────────────────────────────────────────

const SECTION_IDS: SiteSection[] = [
    "hero",
    "about",
    "experience",
    "projects",
    "skills",
    "education",
    "recommendations",
    "contact",
];

export function useScrollTracking() {
    // Track which milestones have already been fired to avoid duplicates
    const firedScrollDepths = useRef<Set<number>>(new Set());
    // Remember when a section entered the viewport so we can compute dwell time
    const sectionEnterTime = useRef<Partial<Record<SiteSection, number>>>({});
    // Remember which sections have been viewed (fire section_view only once)
    const viewedSections = useRef<Set<SiteSection>>(new Set());

    // ── Section visibility observer ────────────────────────────────
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.id as SiteSection;
                    if (!SECTION_IDS.includes(id)) return;

                    if (entry.isIntersecting) {
                        // Section entered viewport
                        sectionEnterTime.current[id] = Date.now();

                        // Fire section_view only once per session
                        if (!viewedSections.current.has(id)) {
                            viewedSections.current.add(id);
                            trackSectionView(id);
                        }
                    } else {
                        // Section left viewport → compute dwell
                        const enterTime = sectionEnterTime.current[id];
                        if (enterTime) {
                            const dwellMs = Date.now() - enterTime;
                            // Only report if dwell was meaningful (>500 ms) to avoid noise
                            if (dwellMs > 500) {
                                trackSectionEngagement(id, dwellMs);
                            }
                            delete sectionEnterTime.current[id];
                        }
                    }
                });
            },
            {
                // Trigger when 40 % of the section is visible
                threshold: 0.4,
                // Small negative margin so the header doesn't interfere
                rootMargin: "-80px 0px 0px 0px",
            }
        );

        // Observe all known sections
        SECTION_IDS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // ── Scroll depth tracker ───────────────────────────────────────
    useEffect(() => {
        const MILESTONES = [25, 50, 75, 100] as const;

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            if (docHeight <= 0) return;

            const pct = Math.round((scrollTop / docHeight) * 100);

            MILESTONES.forEach((milestone) => {
                if (pct >= milestone && !firedScrollDepths.current.has(milestone)) {
                    firedScrollDepths.current.add(milestone);
                    trackScrollDepth(milestone);
                }
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
}
