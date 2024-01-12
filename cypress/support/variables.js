const { faker } = require('@faker-js/faker');

//variables for the login page
const loginErrorMessages = {
  invalidCredentials: 'Epic sadface: Username and password do not match any user in this service',
  emptyPassword: 'Epic sadface: Password is required',
  emptyUsername: 'Epic sadface: Username is required'
};

//variables for the product page
const ITEMS_COUNT = {
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
const checkoutInfoInput = {
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

const url = {
  login: '',
};

const pageName = {
  product: 'Products',
  checkoutOverview: 'Checkout: Overview',
};

export {
  loginErrorMessages,
  ITEMS_COUNT,
  itemsName,
  checkoutInfoInput,
  checkoutSuccessInfo,
  checkoutPlaceholder,
  itemsPrice,
  checkoutYourInfoErrors,
  url,
  pageName
};
