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

const {
  url,
  pageName,
} = require('../support/variables.js');

const elements = {
  loginPage: {
    usernameField: () => cy.getByDataCy('username'),
    passwordField: () => cy.getByDataCy('password'),
    loginBtn: () => cy.getByDataCy('login-button'),
    errorMessage: () => cy.getByDataCy('error'),
  },

  header: {
    cartIcon: () => cy.get('[class="shopping_cart_link"]'),
    cartBadge: () => cy.get('[class="shopping_cart_badge"]'),
    burgerMenuIcon: () => cy.get('[class="bm-burger-button"]'),
    burgerMenu: {
      logoutLink: () => cy.get('[id="logout_sidebar_link"]'),
    },
  },

  productPage: {
    // Buttons to add items
    addToCartBtn: () => cy.get('[class="btn btn_primary btn_small btn_inventory "]'),
    backpackBtn: () => cy.getByDataCy('add-to-cart-sauce-labs-backpack'),
    bikeLightBtn: () => cy.getByDataCy('add-to-cart-sauce-labs-bike-light'),
    boltTShirtBtn: () => cy.getByDataCy('add-to-cart-sauce-labs-bolt-t-shirt'),
    jacketBtn: () => cy.getByDataCy('add-to-cart-sauce-labs-fleece-jacket'),
    onesieBtn: () => cy.getByDataCy('add-to-cart-sauce-labs-onesie'),
    redTShirtBtn: () => cy.getByDataCy('add-to-cart-test.allthethings()-t-shirt-(red)'),
    // Buttons to remove items
    removeBtn: () => cy.get('[class="btn btn_secondary btn_small btn_inventory "]'),
    backpackRemoveBtn: () => cy.getByDataCy('remove-sauce-labs-backpack'),
    bikeLightRemoveBtn: () => cy.getByDataCy('remove-sauce-labs-bike-light'),
    boltTShirtRemoveBtn: () => cy.getByDataCy('remove-sauce-labs-bolt-t-shirt'),
    jacketRemoveBtn: () => cy.getByDataCy('remove-sauce-labs-fleece-jacket'),
    onesieRemoveBtn: () => cy.getByDataCy('remove-sauce-labs-onesie'),
    redTShirtRemoveBtn: () => cy.getByDataCy('remove-test.allthethings()-t-shirt-(red)'),
  },

  cartPage: {
    itemCart: () => cy.get('[class="inventory_item_name"]'),
    checkoutBtn: () => cy.getByDataCy('checkout'),
    continueShoppingBtn: () => cy.getByDataCy('continue-shopping'),
  },

  checkoutInfoPage: {
    firstNameField: () => cy.getByDataCy('firstName'),
    lastNameField: () => cy.getByDataCy('lastName'),
    postalCodeField: () => cy.getByDataCy('postalCode'),
    continueBtn: () => cy.getByDataCy('continue'),
    cancelBtn: () => cy.getByDataCy('cancel'),
    errorMessage: () => cy.getByDataCy('error'),
  },

  checkoutOverviewPage: {
    itemCart: () => cy.get('[class="inventory_item_name"]'),
    finishBtn: () => cy.getByDataCy('finish'),
    cancelBtn: () => cy.getByDataCy('cancel'),
    itemTotalPrice: () => cy.get('[class="summary_subtotal_label"]'),
    taxPrice: () => cy.get('[class="summary_tax_label"]'),
    totalPrice: () => cy.get('[class="summary_info_label summary_total_label"]'),
  },

  checkoutCompletePage: {
    backBtn: () => cy.getByDataCy('back-to-products'),
    successInfo: () => cy.get('[class="checkout_complete_container"]'),
  },
};

// Custom command to locate an element by data-test attribute
Cypress.Commands.add('getByDataCy', (selector) => {
  cy.get(`[data-test="${selector}"]`);
});

// Custom command to validate the visibility of an element
Cypress.Commands.add('validateVisibility', (element) => {
  element.should('be.visible');
});

// Custom command to fill a field
Cypress.Commands.add('fillTheField', (element, input) => {
  cy.getByDataCy(element).type(input);
});

// Custom command to click a button identified by dataCy
Cypress.Commands.add('clickOnButton', (element) => {
  cy.getByDataCy(element).click();
});

// Custom command to click an icon
Cypress.Commands.add('clickOnIcon', (element) => {
  element.click();
});

/*********************************************
*           Commands for login page          *
*********************************************/

// Custom command to assert the visibility and content of a login error message
Cypress.Commands.add('assertLoginErrorMessageText', (message) => {
  cy.validateVisibility(elements.loginPage.errorMessage());
  elements.loginPage.errorMessage().should('contain', message);
});

// Custom command for login
Cypress.Commands.add('login', (username, password) => {
  cy.visit(url.login);
  elements.loginPage.usernameField().type(username);
  elements.loginPage.passwordField().type(password);
  elements.loginPage.loginBtn().click();

  cy.contains(pageName.product).should('exist');
});

/*********************************************
*           Commands for header              *
*********************************************/

// Custom command for logout
Cypress.Commands.add('logout', () => {
  elements.header.burgerMenuIcon().click();
  elements.header.burgerMenu.logoutLink().click();
  cy.validateVisibility(elements.loginPage.loginBtn());
});

/*********************************************
*           Commands for product page        *
*********************************************/

// Custom command to add a specified number of items to the cart
Cypress.Commands.add('addItemsToCart', (count) => {
  elements.productPage.addToCartBtn().each((button, index) => {
    if (index < count) {
      cy.wrap(button).click();
    }
  });

  elements.header.cartBadge().should('have.text', count);
});

// Custom command to remove a specified number of items from the cart
Cypress.Commands.add('removeItemsFromCart', (count) => {
  elements.productPage.removeBtn().each((button, index) => {
    if (index < count) {
      cy.wrap(button).click();
    }
  });

  elements.header.cartBadge().should('not.exist');
});

/*********************************************
*           Commands for cart page           *
*********************************************/

// Custom command to verify the presence of specified products in the cart
Cypress.Commands.add('verifyCartProducts', (products) => {
  products.forEach(product => {
    cy.contains(product.name).should('exist');
  });
});

/*********************************************
*        Checkout Your Information page      *
*********************************************/

// Custom command to complete checkout information page with provided inputs
Cypress.Commands.add('completeCheckoutInfo', (firstName, lastName, postalCode) => {
  elements.checkoutInfoPage.firstNameField().type(firstName);
  elements.checkoutInfoPage.lastNameField().type(lastName);
  elements.checkoutInfoPage.postalCodeField().type(postalCode);

  cy.clickOnButton('continue');

  cy.contains(pageName.checkoutOverview).should('exist');
});

// Custom command to assert the placeholders of checkout information fields
Cypress.Commands.add('assertCheckoutInfoPlaceholders', (firstName, lastName, postalCode) => {
  elements.checkoutInfoPage.firstNameField().should('have.attr', 'placeholder', firstName);
  elements.checkoutInfoPage.lastNameField().should('have.attr', 'placeholder', lastName);
  elements.checkoutInfoPage.postalCodeField().should('have.attr', 'placeholder', postalCode);
});

// Custom command to assert the visibility and content of the checkout information error message
Cypress.Commands.add('assertCheckoutInfoErrorMessageText', (message) => {
  cy.validateVisibility(elements.checkoutInfoPage.errorMessage());
  elements.checkoutInfoPage.errorMessage().should('contain', message);
});

/*********************************************
*           Checkout Overview page           *
*********************************************/

// Custom command to purchase items, move to checkout, and complete checkout information page
Cypress.Commands.add('purchaseItemsAndMoveToCheckoutOverview', (index, firstName, lastName, postalCode) => {
  cy.addItemsToCart(index);
  cy.clickOnIcon(elements.header.cartIcon());
  cy.clickOnButton('checkout');
  cy.completeCheckoutInfo(firstName, lastName, postalCode);
});

// Custom command to calculate the Item price, tax and total price
Cypress.Commands.add('calculateTotalAmount', (priceArray, tax) => {
  const itemsTotalPrice = priceArray.reduce((total, item) => total + item, 0);
  const taxAmount = (itemsTotalPrice * tax).toFixed(2);
  const totalPrice = itemsTotalPrice + parseFloat(taxAmount);
  cy.assertAllAmountCheckoutOverview(itemsTotalPrice, taxAmount, totalPrice);
});

// Custom command to assert prices on the Checkout Overview page
Cypress.Commands.add('assertAllAmountCheckoutOverview', (itemsTotalPrice, taxAmount, totalPrice) => {
  elements.checkoutOverviewPage.itemTotalPrice().should('contain', itemsTotalPrice);
  elements.checkoutOverviewPage.taxPrice().should('contain', taxAmount);
  elements.checkoutOverviewPage.totalPrice().should('contain', totalPrice);
});

/*********************************************
*           Checkout Complete page           *
*********************************************/

// Custom command to assert the visibility and content of the checkout complete success message
Cypress.Commands.add('assertCheckoutCompleteMessageText', (message) => {
  cy.validateVisibility(elements.checkoutCompletePage.successInfo());
  elements.checkoutCompletePage.successInfo().should('contain', message);
});

module.exports = elements;
