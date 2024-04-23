# fleetPanda`
Task: Automating a Daraz Application By Sabiya Shaikh
Given by: FleetPanda
Overview:
This task involved automating various processes within the Daraz application. Below are the steps followed to achieve this automation, along with some important considerations.
Preparation:
Before running the tests, ensure that your cart is cleared for accurate results. This ensures that the tests start with a clean slate and produce reliable outcomes.
Changes Made:
The total amount threshold was initially set to 180,000. However, due to a shortage of products, I adjusted the threshold to 5,000 for accurate testing.
Steps Followed:
Install Cypress:
Install Cypress using npm (Node.js package manager).
Open Cypress:
Launch the Cypress Test Runner.
Create Tests:
Create a new folder in your project directory to store your Cypress tests.
Inside this folder, create test files. In this case, it is inside e2e/spec.cy.js.
Create Page Objects:
Define separate JavaScript files for each page of the application.
Each file represents a page object and contains methods to interact with elements on that page.
Example: support/pageObject contains classes like CartPage, LoginPage, and ProductPage.
All elements and some functions are written within the page object files. Import them to the spec.cy.js and use their functions.
Write Tests:
Write your tests using Cypress commands and assertions.

Test Steps:
A. Login into daraz.com.np:
Log in with your credentials.
loginPage.visit();
loginPage.clickLoginButton();
loginPage.fillUsername("Your Username");
loginPage.fillPassword("Your Password");
loginPage.submit();
B. Add Items to Cart:
Add specified items to the cart.
   productPage.searchItem1();
   productPage.getTheItem1();
   productPage.addProductToCart();
   productPage.gotToCart();
   productPage.searchItem2();
   productPage.getTheItem2();
   productPage.addProductToCart();
C. Adjust Cart Items:
Increase the quantity of the first item in the cart.
productPage.gotToCart();
cartPage.incrementItem(1);
Delete specific items from the cart.
cartPage.deleteItem();
D. Proceed to Checkout:
Navigate to the checkout page.
cartPage.proceedToCheckout();
E. Verify Checkout Elements:
Confirm specific elements on the checkout page.
cartPage.assertQuantity();
cartPage.assertDeletedItemNotPresent();
cartPage.verifySubTotalAmount();
cartPage.verifyTotalAmountIsLessThanGiven();
productPage.addProductToCart();
productPage.gotToCart();
cartPage.incrementUntilReachedThreshold();
cartPage.proceedToCheckout();
6. Run Tests:
Once you've written your tests, you can run them using the Cypress Test Runner.
7. View Test Results:
After running the tests, view the results in the Cypress Test Runner.
8. Improvements:
Consider making content dynamic in most places to enhance the flexibility and maintainability of the automation framework.
By following these steps, I successfully automated the Daraz application using Cypress.