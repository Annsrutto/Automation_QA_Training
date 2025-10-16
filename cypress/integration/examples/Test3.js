/// <reference types="Cypress" />

describe('My Third Test Suite', function() {
    it('My thirdTest case', function() {
    // Test Step
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // How to select individual checks and validating with multiple assertions
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

    // How to uncheck
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

    // How to select multiple checkboxes
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

    // Handling Visible and Invisible elements using assertions
    cy.get('#displayed-text').should('be.visible')
    // check hide box
    cy.get('#hide-textbox').click()
    // check if not visible
    cy.get('#displayed-text').should('not.be.visible')
    // check show box
    cy.get('#show-textbox').click()
    // check if visible
    cy.get('#displayed-text').should('be.visible')

    // Handling Radio buttons
    cy.get('[value="radio3"]').check().should('be.checked').and('have.value', 'radio3')


    })
})
