/// <reference types="cypress" />

describe('My Second Test Suite', function() {
    it('My secondTest case', function() {
    // Test Step
    cy.visit(Cypress.env('url')+"/seleniumPractise/#/");
    cy.title().should('include', 'GreenKart');

    cy.get('.search-keyword').type('ca');
    cy.wait(2000);

    // Parent-Child Chaining
    cy.get('.products').as('productLocator')

    // How to dynamically add items to cart
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {

        const vegtext=$el.find('h4.product-name').text()
        if (vegtext.includes('Cashews')) {
            cy.wrap($el).find('button').click()
        }
    })
    
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()





    })
})
