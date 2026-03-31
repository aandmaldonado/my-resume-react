import { describe, it, expect } from 'vitest';
import { chatbotTranslations } from './i18n';

describe('Chatbot Translations (i18n)', () => {
    it('should have all required languages', () => {
        expect(chatbotTranslations).toHaveProperty('en');
        expect(chatbotTranslations).toHaveProperty('es');
    });

    it('should have basic keys in both languages', () => {
        expect(chatbotTranslations.en.header).toBeDefined();
        expect(chatbotTranslations.es.header).toBeDefined();
    });
});
