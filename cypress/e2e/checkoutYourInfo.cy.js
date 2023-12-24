/// <reference types="cypress"/>

import ProductPageObject from '../support/pages/products.pageObject.js';
import CartPageObject from '../support/pages/cart.pageObject.js';
import CheckoutYourInfoPageObject from '../support/pages/checkoutYourInfo.pageObject.js';
import CheckoutOverviewPageObject from '../support/pages/checkoutOverview.pageObject.js';

const product = new ProductPageObject();
const cart = new CartPageObject();
const checkoutInfo = new CheckoutYourInfoPageObject();
const checkoutOverview =new CheckoutOverviewPageObject();
const {
  usernames, 
  passwords,
  checkoutPlaceholder,
  checkoutInfoForm,
  itemsName,
  checkoutYourInfoErrors
} = require('../support/variables.js');

describe('Checkout: Your Information page', () => {
  beforeEach(() => {
    cy.login(usernames.standardUser, passwords.validPassword);
    cy.addOneItem();
    product.clickCartIconBtn();
    cart.clickCheckoutBtn();
  });

  it('should contain placeholders for help in filling out the fields', () => {
    checkoutInfo.assertFistNamePlaceholder(checkoutPlaceholder.firstName);
    checkoutInfo.assertLastNamePlaceholder(checkoutPlaceholder.lastName);
    checkoutInfo.assertPostalCodePlaceholder(checkoutPlaceholder.postalCode);
  });

  it('should provide an ability to continue checkout with filled information fields', () => {
    cy.fillCheckoutInfoForm(
      checkoutInfoForm.firstName,
      checkoutInfoForm.lastName,
      checkoutInfoForm.postalCode
    );

    checkoutInfo.assertContainFistName(checkoutInfoForm.firstName);
    checkoutInfo.assertContainLastName(checkoutInfoForm.lastName);
    checkoutInfo.assertContainPostalCode(checkoutInfoForm.postalCode);
    checkoutInfo.clickContinueBtn();
    checkoutOverview.assertItemName(itemsName.backpack);
  });

  it('should not provide an ability to continue checkout if the first name field is empty', () => {
    product.clickCartIconBtn();
    cart.clickCheckoutBtn();

    checkoutInfo.typeLastName(checkoutInfoForm.lastName);
    checkoutInfo.typePostalCode(checkoutInfoForm.postalCode);

    checkoutInfo.clickContinueBtn();
    checkoutInfo.assertErrorMessage(checkoutYourInfoErrors.emptyFirstName);
  });

  it('should not provide an ability to continue checkout if the last name field is empty', () => {
    product.clickCartIconBtn();
    cart.clickCheckoutBtn();

    checkoutInfo.typeFirstName(checkoutInfoForm.firstName);
    checkoutInfo.typePostalCode(checkoutInfoForm.postalCode);

    checkoutInfo.clickContinueBtn();
    checkoutInfo.assertErrorMessage(checkoutYourInfoErrors.emptyLastName);
  });

  it('should not provide an ability to continue checkout if the postal code field is empty', () => {
    product.clickCartIconBtn();
    cart.clickCheckoutBtn();

    checkoutInfo.typeFirstName(checkoutInfoForm.firstName);
    checkoutInfo.typeLastName(checkoutInfoForm.lastName);

    checkoutInfo.clickContinueBtn();
    checkoutInfo.assertErrorMessage(checkoutYourInfoErrors.emptyPostalCode);
  });
});
