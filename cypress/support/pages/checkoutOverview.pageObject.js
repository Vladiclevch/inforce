/// <reference types="cypress"/>

import PageObject from '../PageObject';

class CheckoutOverviewPageObject extends PageObject {
  //getters
  get itemCart() {
    return cy.get('[class="inventory_item_name"]');
  }

  get finishBtn() {
    return cy.getByDataCy('finish');
  }

  get cancelBtn() {
    return cy.getByDataCy('cancel');
  }

  get itemTotalPrice() {
    return cy.get('[class="summary_subtotal_label"]');
  }

  get taxPrice() {
    return cy.get('[class="summary_tax_label"]');
  }

  get totalPrice() {
    return cy.get('[class="summary_info_label summary_total_label"]');
  }

  //commands for clicking on buttons
  clickFinishBtn() {
    this.finishBtn.click();
  }

  clickCancelBtn() {
    this.cancelBtn.click();
  }

  //asserts
  assertItemName(itemName) {
    this.itemCart.should('contain', itemName);
  }

  assertItemTotalPrice(sum) {
    this.itemTotalPrice.should('contain', sum);
  }

  assertTaxPrice(sum) {
    this.taxPrice.should('contain', sum);
  }

  assertTotalPrice(sum) {
    this.totalPrice.should('contain', sum);
  }
}

export default CheckoutOverviewPageObject;