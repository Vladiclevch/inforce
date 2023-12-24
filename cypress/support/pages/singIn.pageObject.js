/// <reference types="cypress"/>

import PageObject from '../PageObject';

class LoginPageObject extends PageObject {
  //getters
  get emailField() {
    return cy.getByDataCy('username');
  }

  get passwordField() {
    return cy.getByDataCy('password');
  }

  get loginBtn() {
    return cy.getByDataCy('login-button');
  }

  get errorMessage() {
    return cy.getByDataCy('error');
  }

  //commands for filling fields
  typeEmail(email) {
    this.emailField.type(email);
  }

  typePassword(password) {
    this.passwordField.type(password);
  }

  //commands for clicking on buttons
  clickLoginBtn() {
    this.loginBtn.click();
  }

  //asserts
  assertErrorMessage(message) {
    this.errorMessage.should('contain', message);
  }

  assertLoginBtn() {
    this.loginBtn.should('be.visible');
  }
}

export default LoginPageObject;