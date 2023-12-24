// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPageObject from "../support/pages/singIn.pageObject";
import ProductPageObject from "./pages/products.pageObject";
import CheckoutYourInfoPageObject from "./pages/checkoutYourInfo.pageObject";
import CartPageObject from "./pages/cart.pageObject";
import CheckoutOverviewPageObject from "./pages/checkoutOverview.pageObject";

const login = new LoginPageObject();
const product = new ProductPageObject();
const checkoutInfo = new CheckoutYourInfoPageObject();
const cart = new CartPageObject();
const checkoutOverview = new CheckoutOverviewPageObject();
const {
  itemsPrice
} = require('../support/variables.js');

Cypress.Commands.add('getByDataCy', (selector) => {
  cy.get(`[data-test="${selector}"]`);
});

//command for login the user
Cypress.Commands.add('login', (username, password) => {
  cy.visit('');
  login.typeEmail(username);
  login.typePassword(password);
  login.clickLoginBtn();
});

//commands for adding items
Cypress.Commands.add('addOneItem', () => {
  product.clickBackpackBtn();
});

Cypress.Commands.add('addTwoItems', () => {
  product.clickBackpackBtn();
  product.clickBikeLightBtn();
});

Cypress.Commands.add('addThreeItems', () => {
  product.clickBackpackBtn();
  product.clickBikeLightBtn();
  product.clickBoltTShirtBtn();
});

Cypress.Commands.add('addAllItems', () => {
  product.clickBackpackBtn();
  product.clickBikeLightBtn();
  product.clickBoltTShirtBtn();
  product.clickJacketBtn();
  product.clickOnesieBtn();
  product.clickRedTShirtBtn();
});

Cypress.Commands.add('removeAllItems', () => {
  product.clickBackpackRemoveBtn();
  product.clickBikeLightRemoveBtn();
  product.clickBoltTShirtRemoveBtn();
  product.clickJacketRemoveBtn();
  product.clickOnesieRemoveBtn();
  product.clickRedTShirtRemoveBtn();
});

//command for filling all fields on Checkout: Your Information page
Cypress.Commands.add('fillCheckoutInfoForm', (firstName, lastName, postalCode) => {
  checkoutInfo.typeFirstName(firstName);
  checkoutInfo.typeLastName(lastName);
  checkoutInfo.typePostalCode(postalCode);
});

//command for navigating to Checkout: Complete page
Cypress.Commands.add('makePurchase', (firstName, lastName, postalCode) => {
  product.clickCartIconBtn();
  cart.clickCheckoutBtn();
  checkoutInfo.typeFirstName(firstName);
  checkoutInfo.typeLastName(lastName);
  checkoutInfo.typePostalCode(postalCode);
  checkoutInfo.clickContinueBtn();
  checkoutOverview.clickFinishBtn();
});

//command for navigating to Checkout: Overview page
Cypress.Commands.add('navigateCheckoutOverview', (firstName, lastName, postalCode) => {
  product.clickCartIconBtn();
  cart.clickCheckoutBtn();
  checkoutInfo.typeFirstName(firstName);
  checkoutInfo.typeLastName(lastName);
  checkoutInfo.typePostalCode(postalCode);
  checkoutInfo.clickContinueBtn();
});

//command for asserting prices on Checkout: Overview page
Cypress.Commands.add('assertPrice', (itemsTotalPrice, taxAmount, totalPrice) => {
  checkoutOverview.assertItemTotalPrice(itemsTotalPrice);
  checkoutOverview.assertTaxPrice(taxAmount);
  checkoutOverview.assertTotalPrice(totalPrice);
});

//command for calculate tax and total price
function calculatePrices(itemsTotalPrice) {
  const taxAmount = (itemsTotalPrice * itemsPrice.tax).toFixed(2);
  const totalPrice = itemsTotalPrice + parseFloat(taxAmount);
  return { taxAmount, totalPrice };
}

module.exports = calculatePrices;