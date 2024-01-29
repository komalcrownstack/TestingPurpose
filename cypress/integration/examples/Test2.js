/// <reference types="cypress" />
//import HomePage from "../pageobjects/HomePage"
const cred = require('../../fixtures/example.json')
const support = require('../../support/login.js')
//const homepage= new HomePage()

describe('First test case', ()=>{

  beforeEach(() => {
    cy.login();

})
    it('Open The QHL URL in goole search engine and login with valid credentials', ()=>{
        homepage.getEmployeetab().click()
      //  cy.wait(5000)
      //  cy.screenshot()
       // homepage.getClickPagination().click()
       // cy.wait(6000)
       // homepage.getSelectPaginationvalue().click()
       // cy.wait(4000)
       // homepage.getSelectvalue().click()
       // homepage.getClickonRole().click()
       // homepage.getAdmintab().click()
       // cy.wait(3000)
       // homepage.getTextVerification().should('be.visible', 'ACTIVE EMPLOYEE')


    })



})
