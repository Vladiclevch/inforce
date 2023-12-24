/// <reference types="cypress"/>

import CheckoutOverviewPageObject from '../support/pages/checkoutOverview.pageObject.js';

const calculatePrices = require('../support/commands.js');
const checkOverview = new CheckoutOverviewPageObject();
const {
  usernames, 
  passwords,
  itemsName,
  checkoutInfoForm,
  itemsPrice,
} = require('../support/variables.js');

describe('Checkout: Overview page', () => {
  beforeEach(() => {
    cy.login(usernames.standardUser, passwords.validPassword);
  });

  it('should provide an ability to display 2 added items, item price, tex price', () => {
    const itemsTotalPrice = itemsPrice.backpack + itemsPrice.bikeLight;
    const { taxAmount, totalPrice } = calculatePrices(itemsTotalPrice);

    cy.addTwoItems();
    cy.navigateCheckoutOverview(
      checkoutInfoForm.firstName,
      checkoutInfoForm.lastName,
      checkoutInfoForm.postalCode
    );
    
    checkOverview.assertItemName(itemsName.backpack);
    checkOverview.assertItemName(itemsName.bikeLight);
    cy.assertPrice(itemsTotalPrice, taxAmount, totalPrice);
  });

  it('should provide an ability to display 3 added items, item price, tex price', () => {
    const itemsTotalPrice = itemsPrice.backpack + itemsPrice.bikeLight + itemsPrice.boltTShirt;
    const { taxAmount, totalPrice } = calculatePrices(itemsTotalPrice);

    cy.addThreeItems();
    cy.navigateCheckoutOverview(
      checkoutInfoForm.firstName,
      checkoutInfoForm.lastName,
      checkoutInfoForm.postalCode
    );

    checkOverview.assertItemName(itemsName.backpack);
    checkOverview.assertItemName(itemsName.bikeLight);
    checkOverview.assertItemName(itemsName.boltTShirt);
    cy.assertPrice(itemsTotalPrice, taxAmount, totalPrice);
  });
});
