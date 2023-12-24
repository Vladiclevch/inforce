/// <reference types="cypress"/>

import PageObject from '../PageObject';

class CheckoutCompletePageObject extends PageObject {
  //getters
  get backBtn() {
    return cy.getByDataCy('back-to-products');
  }

  get successInfo() {
    return cy.get('[class="checkout_complete_container"]');
  }

  //commands for clicking on buttons
  clickBackBtn() {
    this.backBtn.click();
  }

  //asserts
  assertSuccessInfo(message) {
    this.successInfo.should('contain', message);
  }
}

export default CheckoutCompletePageObject;