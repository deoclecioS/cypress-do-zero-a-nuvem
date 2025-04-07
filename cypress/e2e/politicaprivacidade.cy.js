describe('Suite teste - Politica de Privacidade', () => {

    beforeEach(() => {
        cy.visit('src/privacy.html')    // runs before every test block
      })
    it('Verificar título e texto', () => {
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT - Política de Privacidade')
        cy.contains('p', 'Talking About Testing').should('be.visible')
    });
});