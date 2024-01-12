/// <reference types="cypress"/>

const username = Cypress.env('USERNAME');
const password = Cypress.env('PASSWORD');
const {
  itemsName,
  checkoutInfoInput,
  ITEMS_COUNT
} = require('../support/variables.js');
const elements = require('../support/commands.js');

describe('Cart page', () => {
  beforeEach(() => {
    cy.login(username['standard'], password['valid']);
  });

  it('should provide an ability to display 2 items on cart page', () => {
    cy.addItemsToCart(ITEMS_COUNT.TWO);
    cy.clickOnIcon(elements.header.cartIcon());

    cy.verifyCartProducts([
      {name: itemsName.backpack },
      {name: itemsName.bikeLight },
    ]);
  });

  it('should provide an ability to display 3 same items on cart and checkout pages', () => {
    cy.addItemsToCart(ITEMS_COUNT.THREE);
    cy.clickOnIcon(elements.header.cartIcon());

    cy.verifyCartProducts([
      {name: itemsName.backpack },
      {name: itemsName.bikeLight },
      {name: itemsName.boltTShirt },
    ]);

    cy.clickOnButton('checkout');

    cy.completeCheckoutInfo(
      checkoutInfoInput.firstName,
      checkoutInfoInput.lastName,
      checkoutInfoInput.postalCode
    );

    cy.verifyCartProducts([
      {name: itemsName.backpack },
      {name: itemsName.bikeLight },
      {name: itemsName.boltTShirt },
    ]);
  });

  it('should provide an ability to display 6 same items on cart and checkout pages', () => {
    cy.addItemsToCart(ITEMS_COUNT.SIX);
    cy.clickOnIcon(elements.header.cartIcon());

    cy.verifyCartProducts([
      {name: itemsName.backpack },
      {name: itemsName.bikeLight },
      {name: itemsName.boltTShirt },
      {name: itemsName.jacket },
      {name: itemsName.onesie },
      {name: itemsName.redTShirt },
    ]);

    cy.clickOnButton('checkout');

    cy.completeCheckoutInfo(
      checkoutInfoInput.firstName,
      checkoutInfoInput.lastName,
      checkoutInfoInput.postalCode
    );

    cy.verifyCartProducts([
      {name: itemsName.backpack },
      {name: itemsName.bikeLight },
      {name: itemsName.boltTShirt },
      {name: itemsName.jacket },
      {name: itemsName.onesie },
      {name: itemsName.redTShirt },
    ]);
  });
});
