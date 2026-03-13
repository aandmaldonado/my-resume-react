import { describe, it, expect, vi } from 'vitest';
import {
    trackSocialClick,
    trackSectionView,
    trackSectionEngagement,
    trackScrollDepth,
    trackNavClick,
    trackCTAClick,
    trackLanguageSwitch,
    trackProjectClick,
    trackProjectFilter
} from './analytics';

// Mock the GA lib
vi.mock('@next/third-parties/google', () => ({
    sendGAEvent: vi.fn(),
}));

describe('Analytics Utility', () => {
    it('should trigger social click events', () => {
        trackSocialClick('linkedin', 'about', 'https://linkedin.com');
    });

    it('should trigger section view and engagement events', () => {
        trackSectionView('hero');
        trackSectionEngagement('experience', 5000); // 3-10s bucket
        trackSectionEngagement('about', 2000); // <3s bucket
        trackSectionEngagement('projects', 20000); // 10-30s bucket
        trackSectionEngagement('education', 40000); // >30s bucket
    });

    it('should trigger scroll events', () => {
        trackScrollDepth(50);
    });

    it('should trigger navigation events', () => {
        trackNavClick('skills', 'header_desktop');
    });

    it('should trigger CTA events', () => {
        trackCTAClick('hero_button', '/contact');
    });

    it('should trigger language switch events', () => {
        trackLanguageSwitch('en');
    });

    it('should trigger project click and filter events', () => {
        trackProjectClick('Acuamattic', 'demo');
        trackProjectFilter('ai');
    });
});
