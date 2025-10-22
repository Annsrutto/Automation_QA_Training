// 


describe('End to End E-Commerce Testing', function() {
    it('Should Submit Order', function() {

        const productName = 'Nokia Edge';

        // Go to the website
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/#');
        // Get username and password values
        cy.get('#username').type('rahulshettyacademy');
        cy.get('#password').type('learning');
        // Login to page
        cy.contains('Sign In').click();
        // Assert that the login dashboard is visible
        cy.contains('Shop Name').should('be.visible');
        // Validate the number of cards in the dashboard
        cy.get('app-card').should('have.length', 4);
        // Dynamically Add item to cart and get yielded value
        cy.get('app-card').filter(`:contains("${productName}")`).then (($el) => {
            cy.wrap($el).should('have.length', 1)
            cy.wrap($el).contains('button', 'Add').click()

        })
        cy.get('app-card').eq(0).contains('button', 'Add').click();

        let sum = 0;
        cy.contains('a', 'Checkout').click();
        // Iterate over each element to get the total
        cy.get('tr td:nth-child(4) strong').each(($el) => {
            // Split and trim the string, convert to number
            const amount = Number($el.text().split(" ")[1].trim())
            sum = sum + amount // 65000 + 100000

        }).then(() => {
            // Assertion
            expect(sum).to.be.lessThan(200000);
        })

        // Proceed to Checkout
        cy.contains('button', 'Checkout').click()
        // Add your country name
        cy.get('#country').type('India')
        cy.wait(1000)
        cy.get('.suggestions ul li a').click()
        // click on purchase button
        cy.get('.btn-success').click()
        // Assertion
        cy.get('.alert-success').should('contain', 'Success')

    })
})