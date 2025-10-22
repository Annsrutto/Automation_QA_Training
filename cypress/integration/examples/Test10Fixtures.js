import ConfirmationPage from '../../support/pageObjects/ConfirmationPage'
import HomePage from '../../support/pageObjects/homePage'


describe('Loading data externally using fixtures', function() {

    before(function() {
        // Load the data externally using fixtures
        cy.fixture('example').then((data) => {
            this.data=data
            // Login to the site
            this.homePage = new HomePage()
        })
    })
 
    it('Should Submit Order', function() {

        const productName = this.data.productName;

        this.homePage.goTo('https://rahulshettyacademy.com/loginpagePractise/#')
        cy.log(this.data.username)
        const productPage = this.homePage.login(this.data.username, this.data.password)
        productPage.pageValidation()
        productPage.getCardCount().should('have.length', 4)
        productPage.selectProduct(productName)
        productPage.selectFirstProduct()
        const cartPage = productPage.goToCart()
        // Resolve the promise then add assertion
        cartPage.sumOfProducts().then((sum) => {
            expect(sum).to.be.lessThan(200000);
        })
        const confirmationPage = cartPage.checkoutItems()
        confirmationPage.submitFormDetails()
        confirmationPage.getAlertMessage().should('contain', 'Success')

    })
})