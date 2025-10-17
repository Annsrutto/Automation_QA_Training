/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Handling iFrames', function() {
    it('Should handle iFrames', function() {
    // Test Steps
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Get iframe id then load it
    cy.frameLoaded('#courses-iframe')

    // Switch to iframe mode
    cy.iframe().find('a[href*="mentorship"]').eq(0).click()

    // Add validation
    cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)


    })
})
