/// <reference types="cypress" />

describe('Handling Child Windows', function() {
    it('Should handle Child Windows', function() {
    // Test Steps
    cy.visit(Cypress.env('url')+"/AutomationPractice/");

    // Get the element and resolve Jquery function
    cy.get('#opentab').then(function(el) {
        // Use prop() method to get the value of the property and store in a variable
        const url = el.prop('href')
        // Navigate to the link without deleting target attribute
        cy.visit(url)
        cy.origin(url, () => {
            // Navigate to the about page
            cy.get('div.sub-menu-bar a[href*="about"]').click()
        })
    

    })

    })
})
