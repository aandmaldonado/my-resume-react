describe('Chatbot Lead Form and Flow', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should complete the lead form and start a chat', () => {
        // 1. Open chat
        cy.get('[data-testid="chat-toggle"]').click();

        // 2. Verify form is visible
        cy.contains('Antes de empezar').should('be.visible');

        // 3. Fill the form
        cy.get('[data-testid="chat-lead-name"]').type('Test User');
        cy.get('[placeholder*="linkedin.com"]').type('https://linkedin.com/in/testuser');
        cy.get('[data-testid="chat-lead-email"]').type('test@example.com');
        cy.get('[data-testid="chat-lead-company"]').type('Test Company');

        // Role selection
        cy.get('select').select('recruiter');

        // Privacy checkbox
        cy.get('#privacy').check();

        // 4. Submit
        cy.get('[data-testid="chat-lead-submit"]').click();

        // 5. Verify transition to chat
        // (Wait for enrichment/loading if needed, but here it should show welcome message)
        cy.get('[data-testid="chat-input"]', { timeout: 10000 }).should('be.visible');

        // 6. Send a message
        cy.get('[data-testid="chat-input"]').type('What is your experience with AI?{enter}');

        // 7. Verify message appears
        cy.contains('What is your experience with AI?').should('be.visible');
    });
});
