// comando customizados

Cypress.Commands.add('preencherFormularioEnviar_UM', () => {

    cy.get('#firstName')
        .type('Clarêncio')

    cy.get('#lastName')
        .type('Testador')

    cy.get('#email')
        .type('email@email.com.br')

    cy.get('#phone')
        .type('999999999')

    cy.get('#open-text-area')
        .type('Comando customizado')

    cy.get('button[type="submit"]')
        .click()
})

Cypress.Commands.add('preencherFormularioEnviar_DOIS', (dados) => {

    cy.get('#firstName')
        .type(dados.primeiroNome)

    cy.get('#lastName')
        .type(dados.sobreNome)

    cy.get('#email')
        .type(dados.email)

    cy.get('#phone')
        .type(dados.telefone)

    cy.get('#open-text-area')
        .type(dados.texto)

    cy.get('button[type="submit"]')
        .click()
})

Cypress.Commands.add('preencherFormularioEnviar_TRES', (dados ={
    primeiroNome: 'José',
    sobreNome: 'Bonifácio',
    email: 'brasildeantigamente@govbr.com',
    telefone: 707070,
    texto: 'Das antigas do Brasil'
}) => {

    cy.get('#firstName')
        .type(dados.primeiroNome)

    cy.get('#lastName')
        .type(dados.sobreNome)

    cy.get('#email')
        .type(dados.email)

    cy.get('#phone')
        .type(dados.telefone)

    cy.get('#open-text-area')
        .type(dados.texto)

    cy.get('button[type="submit"]')
        .click()
})