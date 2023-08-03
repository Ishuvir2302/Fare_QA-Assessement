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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
// Custom command to Navigate to fareharbor
Cypress.Commands.add("LaunchFareharbor", () => {
   cy.visit(Cypress.env('url'))
})

Cypress.Commands.add('invokeText', (locator) => {
    return cy.get(locator).invoke('text');
});

Cypress.Commands.add('dropdownSelect', (dataTestId, value) => {
    return cy.get(dataTestId).select(value);
});


// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })