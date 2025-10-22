/// <reference types="cypress" />

describe('My First Test Suite', function() {
    it('My firstTest case', function() {
    // Test Step
    cy.visit(Cypress.env('url')+"/seleniumPractise/#/");
    cy.title().should('include', 'GreenKart');

    cy.get('.search-keyword').type('ca');
    cy.wait(2000);

    // Handling invivible items
    cy.get('.product:visible').should('have.length', 4);

    // Parent-Child Chaining
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length', 4);

    // How to select an item and add to cart
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click();

    // How to dynamically add items to cart
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {

        const vegtext=$el.find('h4.product-name').text()
        if (vegtext.includes('Cashews')) {
            cy.wrap($el).find('button').click()
        }
    })

    // Assert if logo is correctly displayed
    cy.get('.brand').should('have.text', 'GREENKART')

    // Manually resolving storing a variable in Cypress and Print in logs
    cy.get('.brand').then((logoelement) =>{
        cy.log(logoelement.text())
    })
    })
})
