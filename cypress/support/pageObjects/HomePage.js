import ProductPage from './ProductPage'

class HomePage {
    // Navigate to site
    goTo(url) {
        cy.visit(url)
    }
    login(username, password) {
        // Get username and password values
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        // Login to page
        cy.contains('Sign In').click();
        // Login to the dashboard
        return new ProductPage();
    }
}
export default HomePage;
