export class CartPage {
    incrementItem(number) {
      cy.get('input[type="text"]')
        .eq(number)
        .then(($element) => {
          expect($element).to.exist;
          cy.wrap($element).clear().type("2");
        });
    }
    deleteItem() {
      cy.get(".delete")
        .eq(0)
        .then(($element) => {
          expect($element).to.exist;
          cy.wrap($element).click();
          cy.contains("button", "REMOVE").click();
        });
    }
  
    proceedToCheckout() {
      cy.contains("button", "PROCEED TO CHECKOUT").then(($element) => {
        expect($element).to.exist;
        cy.wrap($element).click({ force: true });
      });
    }
    assertQuantity() {
      cy.get("div.quantity.automation-item-quantity").should(
        "have.text",
        "Qty:2"
      );
    }
    assertDeletedItemNotPresent() {
      cy.get(".shop-v2-wrapper").should(
        "not.contain",
        'Dell Vostro 3520 i5 12th Gen | 16GB RAM | 512GB SSD | 15.6" 120Hz FHD | Black'
      );
    }
    verifySubTotalAmount() {
      cy.get(".sum-title")
        .contains("Order Summary")
        .parent()
        .find(".sum-amount")
        .eq(0)
        .invoke("text")
        .then((text) => {
          const itemPrice = 550;
          const expectedSubtotal = 2 * itemPrice;
          const actualSubtotal = parseFloat(
            text.replace("Rs. ", "").replace(",", "")
          );
          expect(actualSubtotal).to.equal(expectedSubtotal);
        });
    }
  
    verifyTotalAmountIsLessThanGiven() {
      cy.get(".sum-title")
        .contains("Order Summary")
        .parent()
        .find(".sum-amount")
        .eq(2)
        .invoke("text")
        .then((text) => {
          const totalPayment = parseFloat(
            text.replace("Rs. ", "").replace(",", "")
          );
          const threshold = 5000;
          if (totalPayment < threshold) {
            cy.get('[placeholder="Search in Daraz"]').type("MeeTion MT-K841 USB Wired Ultrathin Chocolate Keyboard - Black{enter}");
            cy.get(".product-card--vHfY9").first().click(); // Add first keyboard item to cart
          }
        });
    }
    incrementUntilReachedThreshold() {
      cy.get(".checkout-order-total-fee")
        .invoke("text")
        .then((text) => {
          const totalPayment = parseFloat(
            text.replace("Rs. ", "").replace(",", "")
          );
          const threshold = 5000;
          if (totalPayment < threshold) {
            cy.get("a.next-number-picker-handler-up").eq(0).click(); // Press the button to increase quantity
            this.incrementUntilReachedThreshold(); // Recursively call the function
          }
        });
    }
  }