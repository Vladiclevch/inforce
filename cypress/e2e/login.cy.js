/// <reference types="cypress"/>

import LoginPageObject from "../support/pages/singIn.pageObject";

const login = new LoginPageObject();
const {
  usernames, 
  passwords,
  loginErrorMessages
} = require('../support/variables.js');

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('');
  });
  
  it('should provide an ability to log in with existing credentials', () => {
    login.typeEmail(usernames.standardUser);
    login.typePassword(passwords.validPassword);
    login.clickLoginBtn();
  });

  it('should not provide an ability to log in with nonexisting username', () => {
    login.typeEmail(usernames.nonexistingUser);
    login.typePassword(passwords.validPassword);
    login.clickLoginBtn();
    login.assertErrorMessage(loginErrorMessages.invalidCredentials);
  });

  it('should not provide an ability to log in with invalid password', () => {
    login.typeEmail(usernames.standardUser);
    login.typePassword(passwords.invalidPassword);
    login.clickLoginBtn();
    login.assertErrorMessage(loginErrorMessages.invalidCredentials);
  });

  it('should not provide an ability to log in without username', () => {
    login.typePassword(passwords.validPassword);
    login.clickLoginBtn();
    login.assertErrorMessage(loginErrorMessages.emptyUsername);
  });

  it('should not provide an ability to log in without password', () => {
    login.typeEmail(usernames.standardUser);
    login.clickLoginBtn();
    login.assertErrorMessage(loginErrorMessages.emptyPassword);
  });
});
