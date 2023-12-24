const { faker } = require('@faker-js/faker');

//variables for the login page
const usernames = {
  standardUser: 'standard_user',
  lockedOutUser: 'locked_out_user',
  problemUser: 'problem_user',
  performanceGlitchUser: 'performance_glitch_user',
  errorUser: 'error_user',
  visualUser: 'visual_user',
  nonexistingUser: 'nonexisting_user'
};

const passwords = {
  validPassword: 'secret_sauce',
  invalidPassword: 'Pass#45Word'
};

const loginErrorMessages = {
  invalidCredentials: 'Epic sadface: Username and password do not match any user in this service',
  emptyPassword: 'Epic sadface: Password is required',
  emptyUsername: 'Epic sadface: Username is required'
};

//variables for the product page
const CART_BUDGE_NUMBER = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6
};

//variables for product, cart, checkout pages
const itemsName = {
  backpack: 'Sauce Labs Backpack',
  bikeLight: 'Sauce Labs Bike Light',
  boltTShirt: 'Sauce Labs Bolt T-Shirt',
  jacket: 'Sauce Labs Fleece Jacket',
  onesie: 'Sauce Labs Onesie',
  redTShirt: 'Test.allTheThings() T-Shirt (Red)'
};

const itemsPrice = {
  backpack: 29.99,
  bikeLight: 9.99,
  boltTShirt: 15.99,
  jacket: 49.99,
  onesie: 7.99,
  redTShirt: 15.99,
  tax: 0.08
}

//variables for checkout pages
const checkoutInfoForm = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  postalCode: faker.location.zipCode()
};

const checkoutPlaceholder = {
  firstName: 'First Name',
  lastName: 'Last Name',
  postalCode: 'Zip/Postal Code'
};

const checkoutYourInfoErrors = {
  emptyFirstName: 'Error: First Name is required',
  emptyLastName: 'Error: Last Name is required',
  emptyPostalCode: 'Error: Postal Code is required'
};

//variables for the checkout complete page
const checkoutSuccessInfo = {
  header: 'Thank you for your order!',
  text: 'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
};

export {
  usernames,
  passwords,
  loginErrorMessages,
  CART_BUDGE_NUMBER,
  itemsName,
  checkoutInfoForm,
  checkoutSuccessInfo,
  checkoutPlaceholder,
  itemsPrice,
  checkoutYourInfoErrors
};
