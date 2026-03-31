import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ChatMessage } from './chat-message';

describe('ChatMessage Component', () => {
    it('should render user message correctly', () => {
        render(<ChatMessage role="user" content="Hello" />);
        expect(screen.getByText('Hello')).toBeInTheDocument();
    });

    it('should render assistant message with full markdown support', () => {
        const content = `
# Header 1
## Header 2
**Bold** [Link](https://google.com)
- List item 1
- List item 2
1. Ordered item 1
\`code snippet\`
Paragraph text.
        `;
        render(<ChatMessage role="assistant" content={content} />);

        expect(screen.getByText('Header 1')).toBeInTheDocument();
        expect(screen.getByText('Header 2')).toBeInTheDocument();
        expect(screen.getByText('Bold')).toBeInTheDocument();
        expect(screen.getByRole('link')).toHaveAttribute('href', 'https://google.com');
        expect(screen.getByText('List item 1')).toBeInTheDocument();
        expect(screen.getByText('Ordered item 1')).toBeInTheDocument();
        expect(screen.getByText('code snippet')).toBeInTheDocument();
        expect(screen.getByText('Paragraph text.')).toBeInTheDocument();
    });
});
