/// <reference types="cypress"/>

import ProductPageObject from "../support/pages/products.pageObject";

const product = new ProductPageObject();
const {
  usernames, 
  passwords,
  CART_BUDGE_NUMBER
} = require('../support/variables.js');

describe('Product page', () => {
  beforeEach(() => {
    cy.login(usernames.standardUser, passwords.validPassword);
    product.assertContainCartIcon();
    product.assertCartIsEmpty();
  });

  it('should provide an ability to add one item to the cart', () => {
    cy.addOneItem();
    product.assertCartBudgeNumber(CART_BUDGE_NUMBER.ONE);
  });

  it('should provide an ability to add two items to the cart', () => {
    cy.addTwoItems();
    product.assertCartBudgeNumber(CART_BUDGE_NUMBER.TWO);
  });

  it('should provide an ability to add three items to the cart', () => {
    cy.addThreeItems();
    product.assertCartBudgeNumber(CART_BUDGE_NUMBER.THREE);
  });

  it('should provide an ability to add and remove all items to the cart', () => {
    cy.addAllItems();
    product.assertCartBudgeNumber(CART_BUDGE_NUMBER.SIX);
    cy.removeAllItems();
    product.assertCartIsEmpty();
  });
});
