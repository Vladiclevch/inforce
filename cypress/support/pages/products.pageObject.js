import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  //getters
  get backpackBtn() {
    return cy.getByDataCy('add-to-cart-sauce-labs-backpack');
  }

  get bikeLightBtn() {
    return cy.getByDataCy('add-to-cart-sauce-labs-bike-light');
  }

  get boltTShirtBtn() {
    return cy.getByDataCy('add-to-cart-sauce-labs-bolt-t-shirt');
  }

  get jacketBtn() {
    return cy.getByDataCy('add-to-cart-sauce-labs-fleece-jacket');
  }

  get onesieBtn() {
    return cy.getByDataCy('add-to-cart-sauce-labs-onesie');
  }

  get redTShirtBtn() {
    return cy.getByDataCy('add-to-cart-test.allthethings()-t-shirt-(red)');
  }

  get backpackRemoveBtn() {
    return cy.getByDataCy('remove-sauce-labs-backpack');
  }

  get bikeLightRemoveBtn() {
    return cy.getByDataCy('remove-sauce-labs-bike-light');
  }

  get boltTShirtRemoveBtn() {
    return cy.getByDataCy('remove-sauce-labs-bolt-t-shirt');
  }

  get jacketRemoveBtn() {
    return cy.getByDataCy('remove-sauce-labs-fleece-jacket');
  }

  get onesieRemoveBtn() {
    return cy.getByDataCy('remove-sauce-labs-onesie');
  }

  get redTShirtRemoveBtn() {
    return cy.getByDataCy('remove-test.allthethings()-t-shirt-(red)');
  }

  get cartIcon() {
    return cy.get('[class="shopping_cart_link"]');
  }

  get cartBadge() {
    return cy.get('[class="shopping_cart_badge"]');
  }

  get burgerMenu() {
    return cy.get('[class="bm-burger-button"]');
  }

  get logoutLink() {
    return cy.get('[id="logout_sidebar_link"]');
  }

  //commands for clicking on buttons
  //click to add items
  clickBackpackBtn() {
    this.backpackBtn.click();
  }

  clickBikeLightBtn() {
    this.bikeLightBtn.click();
  }

  clickBoltTShirtBtn() {
    this.boltTShirtBtn.click();
  }

  clickJacketBtn() {
    this.jacketBtn.click();
  }

  clickOnesieBtn() {
    this.onesieBtn.click();
  }

  clickRedTShirtBtn() {
    this.redTShirtBtn.click();
  }

  //click to remove items
  clickBackpackRemoveBtn() {
    this.backpackRemoveBtn.click();
  }

  clickBikeLightRemoveBtn() {
    this.bikeLightRemoveBtn.click();
  }

  clickBoltTShirtRemoveBtn() {
    this.boltTShirtRemoveBtn.click();
  }

  clickJacketRemoveBtn() {
    this.jacketRemoveBtn.click();
  }

  clickOnesieRemoveBtn() {
    this.onesieRemoveBtn.click();
  }

  clickRedTShirtRemoveBtn() {
    this.redTShirtRemoveBtn.click();
  }

  //other clicks
  clickCartIconBtn() {
    this.cartIcon.click();
  }

  clickBurgerMenuBtn() {
    this.burgerMenu.click();
  }

  clickLogoutLink() {
    this.logoutLink.click();
  }

  //asserts
  assertContainCartIcon() {
    this.cartIcon.should('be.visible');
  }

  assertCartBudgeNumber(number) {
    this.cartBadge.should('contain', number);
  }

  assertCartIsEmpty() {
    this.cartIcon.should('not.contain', this.cartBadge);
  }
}

export default ProductPageObject;