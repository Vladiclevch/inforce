/// <reference types="cypress"/>

const username = Cypress.env('USERNAME');
const password = Cypress.env('PASSWORD');
const elements = require('../support/commands.js');

describe('Logout the user', () => {
  beforeEach(() => {
    cy.login(username['standard'], password['valid']);
  });
  
  it('should provide an ability to log out the user on the product page', () => {
    cy.logout();
  });

  it('should provide an ability to log out the user on the cart page', () => {
    cy.clickOnIcon(elements.header.cartIcon());
    cy.logout();
  });
});