/// <reference types="cypress" />

describe('Automating Calendar', function() {
    it('Should automate date selection', function() {
    // Test Steps

    const month = '6';
    const date = '22';
    const year = '2027';
    const expectedList = [month, date, year];
    cy.visit(Cypress.env('url')+"/seleniumPractise/#/offers");

    cy.get('.react-date-picker__inputGroup').click()
    // Navigate and select the year and month
    cy.get('.react-calendar__navigation__label').click()
    cy.get('.react-calendar__navigation__label').click()
    // Get the year dynamically
    cy.contains("button", year).click()
    // Select month and convert the string to month number
    cy.get('.react-calendar__year-view__months__month').eq(Number(month-1)).click()
    // Select the date
    cy.contains("abbr", date).click()

    //Assertions
        cy.get(".react-date-picker__inputGroup__input").each(($el,index) =>
        {
            cy.wrap($el).invoke('val').should('eq',expectedList[index]);
        })



    })
})
