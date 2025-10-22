Feature: End to End e-Commerce Validation


Scenario: Ecommerce products delivery
Given I am in an Ecommerce page
When I login to the application
And I add items to cart and checkout
And validate the total price limit
Then select the country submit and verify Thank you
