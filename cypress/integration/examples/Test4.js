/// <reference types="Cypress" />

describe('My Fourth Test Suite', function() {
    it('My fourthTest case', function() {
    // Test Steps
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Handling Popups - Cypress autoaccepts alerts and popups
    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()

    // Verify the text on Popup ie. get and fire events through Cypress to get access to the alert
    cy.on('window:alert', (str) => {
        // Compare the two strings
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    // Handling confirm event
    cy.on('window:confirm', (str) => {
        // Compare the two strings
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })


    })
})
