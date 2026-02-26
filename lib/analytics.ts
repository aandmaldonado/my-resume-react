import { sendGAEvent } from "@next/third-parties/google";

// ──────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────

export type SocialPlatform =
  | "linkedin"
  | "github"
  | "email"
  | "twitter"
  | "instagram";

export type SiteSection =
  | "hero"
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "education"
  | "recommendations"
  | "contact";

export type NavLocation = "header_desktop" | "header_mobile";

// ──────────────────────────────────────────────
// Social / Outbound Link Clicks
// ──────────────────────────────────────────────

/**
 * Track clicks on social / external links.
 * @param platform  e.g. "linkedin", "github"
 * @param location  where the link lives: "contact_card" | "footer" | "header" | "about" | "projects"
 * @param destination  full URL (optional, for debugging)
 */
export function trackSocialClick(
  platform: string,
  location: string,
  destination?: string
) {
  sendGAEvent("event", "social_click", {
    platform,
    location,
    destination: destination ?? platform,
  });
}

// ──────────────────────────────────────────────
// Section Visibility / Engagement
// ──────────────────────────────────────────────

/**
 * Fired when a section enters the viewport (intersection observer).
 * Use to see which sections are actually seen.
 */
export function trackSectionView(section: SiteSection) {
  sendGAEvent("event", "section_view", {
    section_name: section,
  });
}

/**
 * Fired when a user leaves a section (intersection observer exit).
 * Pair with `trackSectionView` to compute dwell time in GA4 BigQuery or
 * measure via custom metrics.
 * @param section   section identifier
 * @param dwellMs   milliseconds spent with section in viewport
 */
export function trackSectionEngagement(section: SiteSection, dwellMs: number) {
  // bucket dwell time for easier GA4 segmentation
  const bucket =
    dwellMs < 3_000
      ? "<3s"
      : dwellMs < 10_000
      ? "3-10s"
      : dwellMs < 30_000
      ? "10-30s"
      : ">30s";

  sendGAEvent("event", "section_engagement", {
    section_name: section,
    dwell_ms: Math.round(dwellMs),
    dwell_bucket: bucket,
  });
}

// ──────────────────────────────────────────────
// Scroll Depth
// ──────────────────────────────────────────────

/**
 * Track how far the user scrolls (25 / 50 / 75 / 100 %).
 * Call this once per milestone to avoid duplicate events.
 */
export function trackScrollDepth(percent: 25 | 50 | 75 | 100) {
  sendGAEvent("event", "scroll_depth", {
    scroll_percent: percent,
  });
}

// ──────────────────────────────────────────────
// Navigation
// ──────────────────────────────────────────────

/**
 * Track clicks on the main navigation bar.
 */
export function trackNavClick(section: SiteSection, location: NavLocation) {
  sendGAEvent("event", "nav_click", {
    section_name: section,
    nav_location: location,
  });
}

// ──────────────────────────────────────────────
// CTA / Hero Buttons
// ──────────────────────────────────────────────

/**
 * Track hero CTA button clicks.
 */
export function trackCTAClick(label: string, destination: string) {
  sendGAEvent("event", "cta_click", {
    button_label: label,
    destination,
  });
}

// ──────────────────────────────────────────────
// Language switch
// ──────────────────────────────────────────────

/**
 * Track when a user switches the site language.
 */
export function trackLanguageSwitch(to: "en" | "es") {
  sendGAEvent("event", "language_switch", {
    language: to,
  });
}

// ──────────────────────────────────────────────
// Projects
// ──────────────────────────────────────────────

/**
 * Track clicks on project links (demo, repo, info flip).
 */
export function trackProjectClick(
  projectTitle: string,
  linkType: "demo" | "repo" | "flip_info" | "flip_back"
) {
  sendGAEvent("event", "project_click", {
    project_title: projectTitle,
    link_type: linkType,
  });
}

/**
 * Track which project category filter is applied.
 */
export function trackProjectFilter(filterId: string) {
  sendGAEvent("event", "project_filter", {
    filter_id: filterId,
  });
}
