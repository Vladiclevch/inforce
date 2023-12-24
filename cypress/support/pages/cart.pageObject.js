/// <reference types="cypress"/>

import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  //getters
  get itemCart() {
    return cy.get('[class="inventory_item_name"]');
  }

  get checkoutBtn() {
    return cy.getByDataCy('checkout');
  }

  get continueShoppingBtn() {
    return cy.getByDataCy('continue-shopping');
  }

  //commands for clicking on buttons
  clickCheckoutBtn() {
    this.checkoutBtn.click();
  }

  clickContinueShoppingBtn() {
    this.continueShoppingBtn.click();
  }

  //asserts
  assertItemName(itemName) {
    this.itemCart.should('contain', itemName);
  }
}

export default CartPageObject;