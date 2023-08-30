describe('Titulo do meu describe', function() {
  it('Titulo do meu it', function() {
    cy.visit ('./src/index.html')
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
})