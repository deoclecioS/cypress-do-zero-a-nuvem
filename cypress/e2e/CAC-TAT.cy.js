describe('Suíte de Testes', () => {


  beforeEach(() => {
    cy.visit('src/index.html')    // runs before every test block
  })

  it('Verificar o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })

  Cypress._.times(3, () => {//loadash para repetir teste
    it('Preencher campos do Formulario', () => {
      cy.clock()

      cy.get('#firstName')
        .should('be.visible')
        .type('Clarêncio')
      cy.get('#firstName').should('have.value', 'Clarêncio')

      cy.get('#lastName')
        .should('be.visible')
        .type('Testador')
      cy.get('#lastName').should('have.value', 'Testador')

      cy.get('#email')
        .should('be.visible')
        .type('email@email.com.br')
      cy.get('#email').should('have.value', 'email@email.com.br')

      cy.get('#phone')
        .should('be.visible')
        .type('999999999')
      cy.get('#phone').should('have.value', '999999999')

      cy.get('#open-text-area')
        .should('be.visible')
        .type('Com o Cypress, você pode facilmente criar testes para suas aplicações web modernas.')
      cy.get('#open-text-area').should('have.value', 'Com o Cypress, você pode facilmente criar testes para suas aplicações web modernas.')

      cy.contains('button[type="submit"]', 'Enviar').click()

      cy.contains('.success', 'Mensagem enviada com sucesso.')

      cy.tick(3000)

      cy.get('.success').should('not.be.visible')
    });
  });

  Cypress._.times(5, () => {
    it('Exibir mensagem de erro ao submeter o formulário com email inválido', () => {
      cy.clock()
      const textolongo = Cypress._.repeat('Com o Cypress, você pode facilmente criar testes para suas aplicações web modernas.', 3)

      cy.get('#firstName')
        .should('be.visible')
        .type('Clarêncio')
      cy.get('#firstName').should('have.value', 'Clarêncio')

      cy.get('#lastName')
        .should('be.visible')
        .type('Testador')
      cy.get('#lastName').should('have.value', 'Testador')

      cy.get('#email')
        .should('be.visible')
        .type('teste#email.com.br')
      cy.get('#email').should('have.value', 'teste#email.com.br')

      cy.get('#phone')
        .should('be.visible')
        .type('999999999')
      cy.get('#phone').should('have.value', '999999999')

      cy.get('#open-text-area')
        .should('be.visible')
        .type(textolongo, { delay: 0 })

      cy.contains('button[type="submit"]', 'Enviar').click()

      cy.contains('span[class="error"]', 'Valide os campos obrigatórios!')

      cy.tick(3000)

      cy.get('span[class="error"]').should('not.be.visible')

    });
  });

  it('Verificar que campo telefone só aceita numeros', () => {

    cy.get('#phone')
      .should('be.visible')
      .type('diferente')

    cy.get('#phone').should('not.have.value', 'diferente')

  });

  it('Verificar campo obrigatório para telefone', () => {
    cy.clock()
    cy.get('#firstName').type('Clarêncio')
    cy.get('#lastName').type('Testador')
    cy.get('#email').type('teste@email.com.br')
    cy.get('#open-text-area').type('texto para o campo area')
    cy.get('#phone-checkbox').check().should('be.checked')

    cy.contains('button[type="submit"]', 'Enviar').click()

    cy.contains('span[class="error"]', 'Valide os campos obrigatórios!')
    cy.tick(3000)
    cy.get('span[class="error"]').should('not.be.visible')
  });

  it('Preencher e limpar campos', () => {

    cy.get('#firstName')
      .type('Clarêncio')
      .should('have.value', 'Clarêncio')
      .clear()
      .should('not.have.value')

    cy.get('#lastName')
      .type('Testador')
      .should('have.value', 'Testador')
      .clear()
      .should('not.have.value')

    cy.get('#email')
      .type('teste@email.com.br')
      .should('have.value', 'teste@email.com.br')
      .clear()
      .should('not.have.value')

    cy.get('#phone')
      .type('999999999')
      .should('have.value', '999999999')
      .clear()
      .should('not.have.value')

    cy.get('#open-text-area')
      .type('Com o Cypress, você pode facilmente criar testes para suas aplicações web modernas.', { delay: 0 })
      .should('have.value', 'Com o Cypress, você pode facilmente criar testes para suas aplicações web modernas.')
      .clear()
      .should('not.have.value')
  });


  Cypress._.times(5, () => {
    it('Exibir alerta de campos obrigatórios', () => {
      cy.clock()

      cy.contains('button[type="submit"]', 'Enviar').click()

      cy.contains('span[class="error"]', 'Valide os campos obrigatórios!')
      cy.tick(3000)
      cy.get('span[class="error"]').should('not.be.visible')
    });
  });

  it('Enviar formulario com comando Customizado 1', () => {
    cy.clock()
    cy.preencherFormularioEnviar_UM()

    cy.contains('.success', 'Mensagem enviada com sucesso.')
    cy.tick(3000)
    cy.get('.success').should('not.be.visible')
  });
  it('Enviar formulario com comando Customizado 2', () => {
    cy.clock()
    const dados = {
      primeiroNome: 'Socrates',
      sobreNome: 'filósofo',
      email: 'socrates@greciaantiga.com.br',
      telefone: 99999999,
      texto: 'Só sei que nada sei'
    }
    cy.preencherFormularioEnviar_DOIS(dados)

    cy.contains('.success', 'Mensagem enviada com sucesso.')
    cy.tick(3000)
    cy.get('.success').should('not.be.visible')
  });

  it('Enviar formulario com comando Customizado 3', () => {
    cy.clock()
    cy.preencherFormularioEnviar_TRES()

    cy.contains('.success', 'Mensagem enviada com sucesso.')
    cy.tick(3000)
    cy.get('.success').should('not.be.visible')
  });

  it('Selecionar o produto (YouTube) pelo texto', () => {


    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')

  });

  it('Selecionar o produto Mentoria pelo tag value', () => {

    cy.get('#product')
      .select('mentoria')
      .should('have.value', 'mentoria')
  });

  it('Seleciona produto (Blog) por seu índice', () => {

    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')

  });

  it('Marcar tipo de atendimento igual a Feedback', () => {

    cy.get('input[value="feedback"]')
      .check()
      .should('be.checked')
  });

  it('Marcar todos os tipo de atendimento', () => {

    cy.get('input[type="radio"]')
      .each(tipoAtendimento => {
        cy.wrap(tipoAtendimento)
          .check()
          .should('be.checked')
      })
  });

  it('Marcar os checkboxes, depois desmarcar o último', () => {

    cy.get('#email-checkbox').check().should('be.checked')

    cy.get('#phone-checkbox').check().should('be.checked')

    cy.get('#email-checkbox')
      .uncheck()
      .should('not.be.checked')
    cy.get('#phone-checkbox').should('be.checked')

  });

  it('Marcar os checkboxes, depois desmarcar o último - Curso', () => {

    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')

    cy.get('input[type="checkbox"]')
      .last()
      .uncheck()
      .should('not.be.checked')


  });

  it('Selecionar arquivo da pasta fixtures', () => {

    cy.get('#file-upload')
      .selectFile('./cypress/fixtures/arquivoTesteCurso.txt')
      .should(arquivo => {

        //console.log(arquivo[0].files[0].name)
        expect(arquivo[0].files[0].name).to.equal('arquivoTesteCurso.txt')
      })
  });

  it('Seleciona um arquivo simulando um drag-and-drop(clicar e arrastar)', () => {

    cy.get('#file-upload')
      .selectFile('./cypress/fixtures/arquivoTesteCurso.txt', { action: 'drag-drop' })
      .should(arquivo => {

        //console.log(arquivo[0].files[0].name)
        expect(arquivo[0].files[0].name).to.equal('arquivoTesteCurso.txt')
      })
  });

  it('Selecionar o arquivo utilizando uma fixture para a qual foi dada um alias(apelido)', () => {

    cy.fixture('arquivoTesteCurso.txt').as('exemploArquivo')
    cy.get('#file-upload')
      .selectFile('@exemploArquivo')
      .should(arquivo => {
        expect(arquivo[0].files[0].name).to.equal('arquivoTesteCurso.txt')
      })

  });

  it('Verificar que o link política de privacidade abre em outra aba sem a necessidade de um clique', () => {

    cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'href', 'privacy.html')
      .and('have.attr', 'target', '_blank')//atributo padrão para nova aba

  });

  it('Acessar a página de política de privacidade removendo o <target> e então clicando no link', () => {

    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click()

    cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')

  });

  it('Exibir e ocultar as mensagens de sucesso e erro usando .invoke()', () => {
    cy.get('.success')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Mensagem enviada com sucesso.')
      .invoke('hide')
      .should('not.be.visible')
    cy.get('.error')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
      .invoke('hide')
      .should('not.be.visible')
  })

  it('Preencher o campo da área de texto usando o comando invoke', () => {

    const textoRepetido = Cypress._.repeat('Olá Cypress, ', 10)

    cy.get('#open-text-area').invoke('val', textoRepetido)
      .should('have.value', textoRepetido)
  });

  it('Exibir o gato escondido', () => {
    cy.get('#cat')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', '🐈')
      .invoke('hide')
      .should('not.be.visible')
  });

  it('Chamar texto diferente com o invoke método', () => {
    cy.get('#title')
      .invoke('text', 'CAT TAT')
      .should('be.visible')

      cy.get('#subtitle')
      .invoke('text', 'Encerrando o Curso Cypress do Zero até a Nuvem!!')
      .should('be.visible')
  });

})