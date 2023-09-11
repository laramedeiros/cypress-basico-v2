describe('Central de Atendimento ao Cliente TAT', function() {

  beforeEach(() => {
    cy.visit ('./src/index.html')
  })

  it('Verifica o titulo da aplicação', function() {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('Preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName').type('Roque')
    cy.get('#lastName').type('Uorak')
    cy.get('#email').type('roque3953@uorak.com')
    cy.get('#open-text-area').type('Gostaria de uma ajuda para conseguir resolver meu impedimento', {delay:0})
    cy.contains('button', 'Enviar').click()

    cy.get('.success').should('be.visible')
  })

  it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('Maria')
    cy.get('#lastName').type('teste')
    cy.get('#email').type('mariateste@,com')
    cy.get('#open-text-area').type('Gostaria de uma ajuda para conseguir resolver meu impedimento')
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')

  })

  it('Campo telefone continua vazio quando preenchido com um valor não-númerico', () => {
    cy.get('#phone')
      .type('abcdefghij')
      .should('have.value', '')
  })

  it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').type('Maria')
    cy.get('#lastName').type('teste')
    cy.get('#email').type('mariateste@.com')
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').type('Gostaria de uma ajuda para conseguir resolver meu impedimento')
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })

  it('Preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
    .type('Maria')
    .should('have.value', 'Maria')
    .clear()

    cy.get('#lastName')
    .type('teste')
    .should('have.value', 'teste')
    .clear()

    cy.get('#email')
    .type('mariateste@.com')
    .should('have.value', 'mariateste@.com')
    .clear()

    cy.get('#phone')
    .type('68999852556')
    .should('have.value', '68999852556')
    .clear()
  })

  it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios.', () => {
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })

  it('Selecione o produto (YouTube) por seu texto', () => {
    cy.get('#product')
    .select('YouTube')
    .should('have.value', 'youtube')
  })

  it('Seleciona um produto (Blog) por seu índice', () => {
    cy.get('#product')
    .select(1)
    .should('have.value', "blog")
    
  })

  it('Seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('#product')
    .select('mentoria')
    .should('have.value', 'mentoria')
  })


  it('Marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[type="radio"][value="feedback"]').check()
  })

  it('Marca cada tipo de atendimento', () => {
    cy.get('input[type="radio"][value="ajuda"]').check()
      .should('be.checked')

    cy.get('input[type="radio"][value="elogio"]').check()
      .should('be.checked')

    cy.get('input[type="radio"][value="feedback"]').check()
      .should('be.checked')
  })
  
  it('Marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')

  })

  it.only('Envia o formuário com sucesso usando um comando customizado', () => {
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
    
  })
})