import CartPage from './CartPage'

class ProductPage {
    pageValidation () {
        // Assert that the login dashboard is visible
        cy.contains('Shop Name').should('be.visible');
    }

    getCardCount() {
        // Validate the number of cards in the dashboard
        return cy.get('app-card')
    }

    selectFirstProduct() {
        cy.get('app-card').eq(0).contains('button', 'Add').click();
    }

    goToCart() {
        cy.contains('a', 'Checkout').click();
        return new CartPage()
    }

    selectProduct(productName) {
        // Dynamically Add item to cart and get yielded value
        cy.get('app-card').filter(`:contains("${productName}")`).then (($el) => {
            cy.wrap($el).should('have.length', 1)
            cy.wrap($el).contains('button', 'Add').click()

        })
    }

}
export default ProductPage;
