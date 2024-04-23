export class LoginPage {
    visit() {
      cy.visit("https://www.daraz.com.np");
    }
  
    clickLoginButton() {
      cy.contains("a", "Login").click();
    }
  
    fillUsername(email) {
      cy.get('[placeholder="Please enter your Phone Number or Email"]').type(
        email
      );
    }
  
    fillPassword(password) {
      cy.get('[placeholder="Please enter your password"]').type(password);
    }
  
    submit() {
      cy.contains("button", "LOGIN").click();
    }
  }