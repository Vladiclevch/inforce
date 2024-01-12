/// <reference types="cypress"/>

const username = Cypress.env('USERNAME');
const password = Cypress.env('PASSWORD');

const {
  loginErrorMessages,
  url,
  pageName
} = require('../support/variables.js');

describe('Login page', () => {
  beforeEach(() => {
    cy.visit(url.login);
  });
  
  it('should provide an ability to log in with existing credentials', () => {
    cy.login(username['standard'], password['valid']);
  });

  it('should not provide an ability to log in with nonexisting username', () => {
    cy.fillTheField('username', username['nonexisting']);
    cy.fillTheField('password', password['valid']);
    cy.clickOnButton('login-button');
    
    cy.assertLoginErrorMessageText(loginErrorMessages.invalidCredentials);
    cy.contains(pageName.product).should('not.exist');
  });

  it('should not provide an ability to log in with invalid password', () => {
    cy.fillTheField('username', username['standard']);
    cy.fillTheField('password', password['invalid']);
    cy.clickOnButton('login-button');

    cy.assertLoginErrorMessageText(loginErrorMessages.invalidCredentials);
    cy.contains(pageName.product).should('not.exist');
  });

  it('should not provide an ability to log in without username', () => {
    cy.fillTheField('password', password['valid']);
    cy.clickOnButton('login-button');
    
    cy.assertLoginErrorMessageText(loginErrorMessages.emptyUsername);
    cy.contains(pageName.product).should('not.exist');
  });

  it('should not provide an ability to log in without password', () => {
    cy.fillTheField('username', username['standard']);
    cy.clickOnButton('login-button');

    cy.assertLoginErrorMessageText(loginErrorMessages.emptyPassword);
    cy.contains(pageName.product).should('not.exist');
  });
});
