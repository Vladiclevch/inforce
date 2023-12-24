/// <reference types="cypress"/>

import PageObject from '../PageObject';

class CheckoutYourInfoPageObject extends PageObject {
  //getters
  get firstNameField() {
    return cy.getByDataCy('firstName');
  }

  get lastNameField() {
    return cy.getByDataCy('lastName');
  }

  get postalCodeField() {
    return cy.getByDataCy('postalCode');
  }

  get continueBtn() {
    return cy.getByDataCy('continue');
  }

  get cancelBtn() {
    return cy.getByDataCy('cancel');
  }

  get errorMessage() {
    return cy.getByDataCy('error');
  }

  //commands for clicking on buttons
  clickContinueBtn() {
    this.continueBtn.click();
  }

  clickCancelBtn() {
    this.cancelBtn.click();
  }

  //commands for filling fields
  typeFirstName(firstName) {
    this.firstNameField.type(firstName);
  }

  typeLastName(lastName) {
    this.lastNameField.type(lastName);
  }

  typePostalCode(postalCode) {
    this.postalCodeField.type(postalCode);
  }

  //asserts
  assertFistNamePlaceholder(firstName) {
    this.firstNameField.should('have.attr', 'placeholder', firstName);
  }

  assertLastNamePlaceholder(lastName) {
    this.lastNameField.should('have.attr', 'placeholder', lastName);
  }

  assertPostalCodePlaceholder(postalCode) {
    this.postalCodeField.should('have.attr', 'placeholder', postalCode);
  }

  assertContainFistName(firstName) {
    this.firstNameField.should('have.value', firstName);
  }

  assertContainLastName(lastName) {
    this.lastNameField.should('have.value', lastName);
  }

  assertContainPostalCode(postalCode) {
    this.postalCodeField.should('have.value', postalCode);
  }

  assertErrorMessage(message) {
    this.errorMessage.should('contain', message);
  }
}

export default CheckoutYourInfoPageObject;