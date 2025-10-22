class ConfirmationPage {

    submitFormDetails(){
        // Proceed to Checkout
        cy.submitFormDetails()
    }

    getAlertMessage(){
        // click on purchase button
        return cy.get('.alert-success')
    }
}
export default ConfirmationPage;
