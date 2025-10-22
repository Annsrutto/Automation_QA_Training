import ProductPage from './ProductPage'

class HomePage {
    // Navigate to site
    goTo(url) {
        cy.visit(url)
    }
    login(username, password) {
        cy.login(username, password)
        // Login to the dashboard
        return new ProductPage();
    }
}
export default HomePage;
