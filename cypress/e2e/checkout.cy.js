/// <reference types="cypress"/>

const username = Cypress.env('USERNAME');
const password = Cypress.env('PASSWORD');

const {
  checkoutPlaceholder,
  checkoutInfoInput,
  checkoutYourInfoErrors,
  checkoutSuccessInfo,
  itemsPrice,
  ITEMS_COUNT,
} = require('../support/variables.js');
const elements = require('../support/commands.js');

describe('Checkout Process', () => {
  beforeEach(() => {
    cy.login(username['standard'], password['valid']);
  });

  context('Checkout Your Information page', () => {
    beforeEach(() => {
      cy.addItemsToCart(ITEMS_COUNT.ONE);
      cy.clickOnIcon(elements.header.cartIcon());
      cy.clickOnButton('checkout');
    });

    it('should contain placeholders for help in filling out the fields', () => {
      cy.assertCheckoutInfoPlaceholders(
        checkoutPlaceholder.firstName,
        checkoutPlaceholder.lastName,
        checkoutPlaceholder.postalCode
      );
    });

    it('should provide an ability to continue checkout with filled information fields', () => {
      cy.completeCheckoutInfo(
        checkoutInfoInput.firstName,
        checkoutInfoInput.lastName,
        checkoutInfoInput.postalCode
      );
    });

    it('should not provide an ability to continue checkout if the first name field is empty', () => {
      cy.fillTheField('lastName', checkoutInfoInput.lastName);
      cy.fillTheField('postalCode', checkoutInfoInput.postalCode);
      cy.clickOnButton('continue');
      cy.assertCheckoutInfoErrorMessageText(checkoutYourInfoErrors.emptyFirstName);
    });

    it('should not provide an ability to continue checkout if the last name field is empty', () => {
      cy.fillTheField('firstName', checkoutInfoInput.firstName);
      cy.fillTheField('postalCode', checkoutInfoInput.postalCode);
      cy.clickOnButton('continue');
      cy.assertCheckoutInfoErrorMessageText(checkoutYourInfoErrors.emptyLastName);
    });

    it('should not provide an ability to continue checkout if the postal code field is empty', () => {
      cy.fillTheField('firstName', checkoutInfoInput.firstName);
      cy.fillTheField('lastName', checkoutInfoInput.lastName);
      cy.clickOnButton('continue');
      cy.assertCheckoutInfoErrorMessageText(checkoutYourInfoErrors.emptyPostalCode);
    });
  });

  context('Checkout Overview page', () => {
    it('should provide an ability to add 2 items and calculate item price, tax price', () => {
      const priceArray = [
        itemsPrice.backpack,
        itemsPrice.bikeLight,
      ];

      cy.purchaseItemsAndMoveToCheckoutOverview(
        ITEMS_COUNT.TWO,
        checkoutInfoInput.firstName,
        checkoutInfoInput.lastName,
        checkoutInfoInput.postalCode
      );

      cy.calculateTotalAmount(priceArray, itemsPrice.tax);
    });

    it('should provide an ability to add 6 items and calculate item price, tax price', () => {
      const priceArray = [
        itemsPrice.backpack,
        itemsPrice.bikeLight,
        itemsPrice.boltTShirt,
        itemsPrice.jacket,
        itemsPrice.onesie,
        itemsPrice.redTShirt
      ];

      cy.purchaseItemsAndMoveToCheckoutOverview(
        ITEMS_COUNT.SIX,
        checkoutInfoInput.firstName,
        checkoutInfoInput.lastName,
        checkoutInfoInput.postalCode
      );

      cy.calculateTotalAmount(priceArray, itemsPrice.tax);
    });
  });

  context('Checkout Complete page', () => {
    beforeEach(() => {
      cy.purchaseItemsAndMoveToCheckoutOverview(
        ITEMS_COUNT.ONE,
        checkoutInfoInput.firstName,
        checkoutInfoInput.lastName,
        checkoutInfoInput.postalCode
      );
      cy.clickOnButton('finish');
    });

    it('should show success message page after purchase', () => {
      cy.assertCheckoutCompleteMessageText(checkoutSuccessInfo.header);
      cy.assertCheckoutCompleteMessageText(checkoutSuccessInfo.text);
    });
  });
});