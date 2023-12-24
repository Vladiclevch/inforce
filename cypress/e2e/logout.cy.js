/// <reference types="cypress"/>

import CheckoutCompletePageObject from '../support/pages/CheckoutComplete.pageObject.js';
import ProductPageObject from '../support/pages/products.pageObject.js';
import LoginPageObject from '../support/pages/singIn.pageObject.js';

const product = new ProductPageObject();
const checkoutComplete = new CheckoutCompletePageObject();
const login = new LoginPageObject();
const {
  usernames, 
  passwords,
  checkoutInfoForm
} = require('../support/variables.js');

describe('Logout the user', () => {
  beforeEach(() => {
    cy.login(usernames.standardUser, passwords.validPassword);
    cy.addOneItem();
    cy.makePurchase(
      checkoutInfoForm.firstName,
      checkoutInfoForm.lastName,
      checkoutInfoForm.postalCode
    );
    checkoutComplete.clickBackBtn();
  });
  
  it('should provide an ability to log out the user', () => {
    product.clickBurgerMenuBtn();
    product.clickLogoutLink();
    login.assertLoginBtn();
  });
});