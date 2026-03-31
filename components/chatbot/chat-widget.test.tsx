import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ChatWidget } from './chat-widget';

// Mock inclusion
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
        i18n: { changeLanguage: vi.fn() }
    })
}));

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
    motion: {
        div: (props: any) => <div {...props}>{props.children}</div>,
        button: (props: any) => <button {...props}>{props.children}</button>,
    },
    AnimatePresence: (props: any) => <div>{props.children}</div>,
}));

// Mock global fetch
global.fetch = vi.fn().mockImplementation(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ ownerName: 'Al', ownerShortName: 'Al' })
    })
);

describe('ChatWidget Component', () => {
    it('should initially show the toggle button and tooltip', () => {
        render(<ChatWidget />);

        // Ensure toggle button is present
        const toggleBtn = screen.getByTestId('chat-toggle');
        expect(toggleBtn).toBeInTheDocument();

        // Check for tooltip (might be in it due to mocks, but let's check)
        expect(screen.getByText('chatbot.tooltip')).toBeInTheDocument();
    });

    it('should open the form when clicking the toggle', async () => {
        render(<ChatWidget />);
        const toggleBtn = screen.getByTestId('chat-toggle');

        fireEvent.click(toggleBtn);

        // Form should be visible
        expect(screen.getByTestId('chat-lead-name')).toBeInTheDocument();
    });

    it('should allow filling the lead form', () => {
        render(<ChatWidget />);
        fireEvent.click(screen.getByTestId('chat-toggle'));

        const nameInput = screen.getByTestId('chat-lead-name');
        const emailInput = screen.getByTestId('chat-lead-email');
        const companyInput = screen.getByTestId('chat-lead-company');
        const submitBtn = screen.getByTestId('chat-lead-submit');

        fireEvent.change(nameInput, { target: { value: 'Test User' } });
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(companyInput, { target: { value: 'Test Co' } });

        expect(nameInput).toHaveValue('Test User');
        expect(emailInput).toHaveValue('test@example.com');
        expect(companyInput).toHaveValue('Test Co');
    });

    it('should show error on invalid email submit', async () => {
        render(<ChatWidget />);
        fireEvent.click(screen.getByTestId('chat-toggle'));

        // Fill ALL required fields to reach the submit logic
        fireEvent.change(screen.getByTestId('chat-lead-name'), { target: { value: 'Test' } });
        fireEvent.change(screen.getByPlaceholderText(/linkedin.com/i), { target: { value: 'https://linkedin.com' } });
        fireEvent.change(screen.getByTestId('chat-lead-company'), { target: { value: 'TestCo' } });

        const emailInput = screen.getByTestId('chat-lead-email');
        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

        fireEvent.click(screen.getByTestId('chat-lead-submit'));

        // Now it should hit the validateEmail(leadInfo.email) and set the error
        expect(await screen.findByText('chatbot.error_email')).toBeInTheDocument();
    });
});
