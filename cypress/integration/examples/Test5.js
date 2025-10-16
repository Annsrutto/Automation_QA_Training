/// <reference types="Cypress" />

describe('Handling Child Windows/Tabs', function() {
    it('Should handle Child Windows', function() {
    // Test Steps
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Execute Jquery function to remove attribute and invoke the DOM
    cy.get('#opentab').invoke('removeAttr', 'target').click()

    // Use origin method to open and run Cypress commands in secondary urls
    cy.origin("https://www.qaclickacademy.com/", () => {
        // Commands targeting the secondary url
        cy.get('#navbarSupportedContent a[href*="about"]').click();
        // Validate
        cy.get('.mt-50 h2').should('contain', 'Welcome to QAClick Academy ');
    })


    })
})
