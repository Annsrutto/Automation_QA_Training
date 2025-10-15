/// <reference types="Cypress" />

describe('My Second Test Suite', function() {
    it('My secondTest case', function() {
    // Test Step
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // How to select individual checks and validating with multiple assertions
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

    // How to uncheck
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

    // How to check all elements
    cy.get("input[type='checkbox']").check(['option2', 'option3'])

    // Handling Static Dropdown using select()
    cy.get('select').select('option2').should('have.value', 'option2')

    // Handling Dynamic Dropdowns using each()
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
        if ($el.text() === 'India') {
            cy.wrap($el).click()
        }
    })
    // validate with assertion that the value is indeed true
    cy.get('#autocomplete').should('have.value', 'India')


    })
})
