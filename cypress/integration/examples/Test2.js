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
        cy.get(':nth-child(14) > .m-menu__link > .m-menu__link-title > .m-menu__link-wrap > .m-menu__link-text').click()
        cy.wait(5000)
        cy.screenshot()
        cy.get('[ng-reflect-id="1"] > .mat-paginator > .mat-paginator-outer-container > .mat-paginator-container > .mat-paginator-range-actions > .mat-paginator-navigation-next > .mat-button-wrapper > .mat-paginator-icon').click()
        cy.wait(6000)
        cy.get('#mat-select-16 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow').click()
        cy.wait(4000)
        cy.get('#mat-option-72 > .mat-option-text').click()
       cy.get('[ng-reflect-id="1"] > .text-uppercase').should('be.visible', 'ACTIVE EMPLOYEE')


    })



})
