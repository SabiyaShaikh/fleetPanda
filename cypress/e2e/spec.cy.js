import { LoginPage } from "../support/pageObject/loginPage.po";
import { CartPage } from "../support/pageObject/cartPage.po";
import { ProductPage } from "../support/pageObject/productPage.po";

describe("Daraz Checkout Flow", () => {
  const loginPage = new LoginPage();
  const cartPage = new CartPage();
  const productPage = new ProductPage();

  beforeEach(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      // If you want to turn off this behavior, you can return false
      // Otherwise, Cypress will continue to handle uncaught exceptions
      return false;
    });
    loginPage.visit();
    loginPage.clickLoginButton();
    loginPage.fillUsername("Username");
    loginPage.fillPassword("Password");
    loginPage.submit();
  });

  it("should perform the checkout flow as specified", () => {
    // Add items to cart
    productPage.searchItem1();
    productPage.getTheItem1();
    productPage.addProductToCart();
    productPage.gotToCart();
    productPage.searchItem2();
    productPage.getTheItem2();
    productPage.addProductToCart();
    productPage.gotToCart();
    //Increment the quantity of item
    cartPage.incrementItem(1);
    //Delete item
    cartPage.deleteItem();
    cartPage.proceedToCheckout();
    //Assert the number of quantity
    cartPage.assertQuantity();
    //Assert deleted item is not present
    cartPage.assertDeletedItemNotPresent();
    //Verify the amount
    cartPage.verifySubTotalAmount();
    cartPage.verifyTotalAmountIsLessThanGiven();
    productPage.addProductToCart();
    productPage.gotToCart();
    //increment until threshold value is reached
    cartPage.incrementUntilReachedThreshold();
    cartPage.proceedToCheckout();
    cy.contains("Place Order");
  });
});