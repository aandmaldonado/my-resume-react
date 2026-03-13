import { describe, it, expect } from 'vitest';

// Simple regex for testing that matches the one in ChatWidget
const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

describe('Email Validation Logic', () => {
    it('should validate correct emails', () => {
        expect(validateEmail('test@example.com')).toBe(true);
        expect(validateEmail('alvaro.maldonado@almapi.dev')).toBe(true);
    });

    it('should invalidate incorrect emails', () => {
        expect(validateEmail('test@example')).toBe(false);
        expect(validateEmail('testexample.com')).toBe(false);
        expect(validateEmail('test@')).toBe(false);
        expect(validateEmail('')).toBe(false);
    });
});
