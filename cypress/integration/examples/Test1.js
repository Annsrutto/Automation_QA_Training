// Cypress - Spec
describe('My First Test Suite', function() {
    it('My firstTest case', function() {
// Test Step
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.title().should('include', 'GreenKart');

    })
})
