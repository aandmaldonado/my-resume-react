import fs from 'fs';
import { describe, it, expect, vi } from 'vitest';
import { getSystemPrompt } from './chatbot-prompt';

describe('Chatbot Prompt Engine', () => {
    it('should generate a prompt containing the persona and career targets', () => {
        const readSpy = vi.spyOn(fs, 'readFileSync').mockImplementation((path: any) => {
            if (path.toString().includes('cv.yaml')) {
                return `
personal_info:
  name: "Álvaro Test"
  location: "Test City"
chat_settings:
  bot_name: "TestBot"
  owner_short_name: "Al"
professional_summary: "Product Engineer Focus"
career_target:
  target_roles: ["Tech Lead"]
  discarded_roles: ["Junior"]
  ideal_company_profile: ["Startups"]
projects:
  p1:
    name: "Project 1"
    role: "Lead"
    duration: "2024"
    key_responsibilities: ["R1", "R2"]
    achievements: ["A1"]
    technologies: ["T1"]
skills:
  - category: "C1"
    items: ["I1"]
education:
  - degree: "D1"
    institution: "U1"
    period: "P1"
philosophy_and_interests:
  - title: "Ph1"
    description: "Des1"
`;
            }
            if (path.toString().includes('guidelines.yaml')) {
                return `
writing_method:
  - name: "XYZ"
  - name: "STAR"
    formula: "S+T+A+R"
amazon_leadership_principles: ["Ownership"]
action_verbs:
  high_impact: ["Lead"]
kpi_focus:
  metrics: ["%"]
response_guidelines: ["Be concise"]
`;
            }
            return '';
        });

        const prompt = getSystemPrompt();

        expect(prompt).toContain('Eres TestBot');
        expect(prompt).toContain('Álvaro Test');
        expect(prompt).toContain('Product Engineer Focus');
        expect(prompt).toContain('Project 1');
        expect(prompt).toContain('C1');
        expect(prompt).toContain('D1');
        expect(prompt).toContain('Ph1');

        readSpy.mockRestore();
    });

    it('should handle missing data gracefully', () => {
        const readSpy = vi.spyOn(fs, 'readFileSync').mockImplementation((path: any) => {
            if (path.toString().includes('cv.yaml')) {
                return `
personal_info: { name: "Al", location: "Loc" }
chat_settings: { bot_name: "B", owner_short_name: "O" }
professional_summary: "Summary"
`;
            }
            return '';
        });
        const prompt = getSystemPrompt();
        expect(prompt).toContain('Eres B');
        readSpy.mockRestore();
    });
});
