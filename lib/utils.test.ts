import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('Utility cn (Tailwind Merge)', () => {
    it('should merge classes correctly', () => {
        expect(cn('mb-4', 'mt-2')).toContain('mb-4 mt-2');
        expect(cn('p-4', 'p-8')).toContain('p-8');
    });

    it('should handle conditional classes', () => {
        expect(cn('p-4', true && 'mt-2')).toContain('p-4 mt-2');
        expect(cn('p-4', false && 'mt-2')).toBe('p-4');
    });
});
