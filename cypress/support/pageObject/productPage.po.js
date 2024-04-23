export class ProductPage {
    searchItem1() {
      return cy.get('[placeholder="Search in Daraz"]').then(($element) => {
        expect($element).to.exist;
        cy.wrap($element).type(
          "Dual Rechargeable Bluetooth and 2.4G Wireless Mouse 2 in 1 Mouse{enter}"
        );
      });
    }
    searchItem2() {
      return cy.get('[placeholder="Search in Daraz"]').then(($element) => {
        expect($element).to.exist;
        cy.wrap($element).type(
          'Dell Vostro 3520 i5 12th Gen | 16GB RAM | 512GB SSD | 15.6" 120Hz FHD | Black{enter}'
        );
      });
    }
    getTheItem1() {
      return cy
        .get(
          'a.product-card--vHfY9[href*="dual-rechargeable-bluetooth-and-24g-wireless-mouse-2-in-1-mouse"]'
        )
        .eq(1)
        .then(($element) => {
          expect($element).to.exist;
          cy.wrap($element).click(); // Clicking on the second element
        });
    }
    getTheItem2() {
      return cy
        .get(".product-card--vHfY9")
        .eq(1)
        .then(($element) => {
          expect($element).to.exist;
          cy.wrap($element).click(); // Clicking on the second element
        });
    }
    addProductToCart() {
      return cy.get(".pdp-button_theme_orange").then(($element) => {
        expect($element).to.exist;
        cy.wrap($element).click();
      });
    }
  
    gotToCart() {
      return cy.get(".checkout-order-total-button").then(($element) => {
        expect($element).to.exist;
        cy.wrap($element).click();
      });
    }
  }