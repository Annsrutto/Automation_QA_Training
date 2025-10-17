/// <reference types="cypress" />

describe('Handling Mouse Hover', function() {
    it('Should handle Mouse Hover', function() {
    // Test Steps
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Get the hover element then use jquery method show() to display hidden elements
    cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    // Check URL to confirm that the top button is succesfully displayed
    cy.url().should('include', 'top')

    // Alternative Approach: Force click on a menu without necessarily opening the menu to view invisible elements
    cy.contains('Top').click({force: true})
    cy.url().should('include', 'top')

    })
})
