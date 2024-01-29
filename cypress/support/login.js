const cred = require('../fixtures/cred.json')
Cypress.Commands.add('login', () => {
  //navigate to URL
  cy.visit("https://quickhands-admin-frontend.vercel.app/admin/login");
  //Entering valid data into email input field.
  cy.get(':nth-child(1) > .form-control').type(cred.Email)
  //Entering valid data into Password input field.
  cy.get(':nth-child(2) > .form-control').type(cred.Password)
  //Clicking on Submit button.
 cy.get('#m_login_signin_submit').click()
 // cy.wait(3000)
  //verifying that the user is logged in successfully.
 cy.url().should('include', '/dashboard');
})