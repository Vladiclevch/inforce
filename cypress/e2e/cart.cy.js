/// <reference types="cypress"/>

import CartPageObject from '../support/pages/cart.pageObject.js';
import ProductPageObject from '../support/pages/products.pageObject.js';
import CheckoutOverviewPageObject from '../support/pages/checkoutOverview.pageObject.js';
import CheckoutYourInfoPageObject from '../support/pages/checkoutYourInfo.pageObject.js';

const cart = new CartPageObject();
const product = new ProductPageObject();
const checkoutOverview = new CheckoutOverviewPageObject();
const checkoutInfo = new CheckoutYourInfoPageObject();
const {
  usernames, 
  passwords,
  itemsName,
  checkoutInfoForm
} = require('../support/variables.js');

describe('Cart page', () => {
  beforeEach(() => {
    cy.login(usernames.standardUser, passwords.validPassword);
  });

  it('should provide an ability to display 2 items', () => {
    cy.addTwoItems();
    product.clickCartIconBtn();
    cart.assertItemName(itemsName.backpack);
    cart.assertItemName(itemsName.bikeLight);
  });

  it('should provide an ability to display 3 same items on cart and checkout pages', () => {
    cy.addThreeItems();
    product.clickCartIconBtn();
    cart.assertItemName(itemsName.backpack);
    cart.assertItemName(itemsName.bikeLight);
    cart.assertItemName(itemsName.boltTShirt);
    cart.clickCheckoutBtn();
    
    cy.fillCheckoutInfoForm(
      checkoutInfoForm.firstName,
      checkoutInfoForm.lastName,
      checkoutInfoForm.postalCode
    );
    checkoutInfo.clickContinueBtn();

    checkoutOverview.assertItemName(itemsName.backpack);
    checkoutOverview.assertItemName(itemsName.bikeLight);
    checkoutOverview.assertItemName(itemsName.boltTShirt);
  });
});
