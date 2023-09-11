// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => { 
    cy.get('#firstName').type('Maria')
    cy.get('#lastName').type('teste')
    cy.get('#email').type('mariateste@.com')
    cy.get('#open-text-area').type('Gostaria de uma ajuda para conseguir resolver meu impedimento')
    cy.get('button').click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })