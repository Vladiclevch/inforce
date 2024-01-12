/// <reference types="cypress"/>

const username = Cypress.env('USERNAME');
const password = Cypress.env('PASSWORD');
const {
  ITEMS_COUNT
} = require('../support/variables.js');

describe('Product page', () => {
  beforeEach(() => {
    cy.login(username['standard'], password['valid']);
  });

  it('should provide an ability to add 1 item to the cart', () => {
    cy.addItemsToCart(ITEMS_COUNT.ONE);
  });

  it('should provide an ability to add 2 items to the cart', () => {
    cy.addItemsToCart(ITEMS_COUNT.TWO);
  });

  it('should provide an ability to add 5 items to the cart', () => {
    cy.addItemsToCart(ITEMS_COUNT.FIVE);
  });

  it('should provide an ability to add and remove all items from the cart', () => {
    cy.addItemsToCart(ITEMS_COUNT.SIX);
    cy.removeItemsFromCart(ITEMS_COUNT.SIX);
  });
});
