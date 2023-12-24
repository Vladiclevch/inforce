/// <reference types="cypress"/>

import CheckoutCompletePageObject from '../support/pages/CheckoutComplete.pageObject.js';

const checkoutComplete = new CheckoutCompletePageObject();
const {
  usernames, 
  passwords,
  checkoutInfoForm,
  checkoutSuccessInfo
} = require('../support/variables.js');

describe('Checkout: Complete page', () => {
  beforeEach(() => {
    cy.login(usernames.standardUser, passwords.validPassword);
    cy.addOneItem();
    cy.makePurchase(
      checkoutInfoForm.firstName,
      checkoutInfoForm.lastName,
      checkoutInfoForm.postalCode
    );
  });
  
  it('should show success message page after purchase', () => {
    checkoutComplete.assertSuccessInfo(checkoutSuccessInfo.header);
    checkoutComplete.assertSuccessInfo(checkoutSuccessInfo.text);
  });
});