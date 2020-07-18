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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('validateSavings', (element) => {
    var save = element.Year3 > 0 ? 'savings' : 'loss';
    
    cy.get(`td[class="${save}"]:eq(0)`).should('contain', element.Monthly)
    cy.get(`td[class="${save}"]:eq(1)`).should('contain', element.Year1)
    cy.get(`td[class="${save}"]:eq(2)`).should('contain', element.Year3)
})
