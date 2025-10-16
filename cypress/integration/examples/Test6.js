/// <reference types="Cypress" />

describe('Handling Web Tables', function() {
    it('Should handle Web Tables', function() {
    // Test Steps
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Get all the column data in a table
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
        // Create a variable to store the text you want to get
        const text = $el.text()
        if (text.includes("Python")) {
            // Finds the immediate next sibling using next() method then resolve promise
            cy.get('tr td:nth-child(2)').eq(index).next(). then(function(price) {
                const priceText = price.text()
                // Compare the results
                expect(priceText).to.equal('25')
            })
        }
    })

    })
})
