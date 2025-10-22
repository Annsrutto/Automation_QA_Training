import ConfirmationPage from "./ConfirmationPage";

class CartPage {

    checkoutItems() {
        cy.contains('button', 'Checkout').click()
        return new ConfirmationPage()
    }

    sumOfProducts() {
        let sum = 0;

        // Iterate over each item to get the total
        return cy.get('tr td:nth-child(4) strong').each(($el) => {
            // Split and trim the string, convert to number
            const amount = Number($el.text().split(" ")[1].trim())
            sum = sum + amount // 65000 + 100000
        }).then(() => {
            // Assertion
            return sum
        })
    }
}
export default CartPage;
