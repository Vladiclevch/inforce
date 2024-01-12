# General information

Project Name: InForce test

Author: Vlad Levchenko

OS: Linux Mint 21.2 Cinnamon

Node.js version: v20.5.1

Additional tests for Login, Checkout: Your Information, Product pages

# Installation

1. Fork the repository

2. Clone the repository

3. Create a new branch: git checkout -b "name"

4. Run the commands:
1) npm install
2) npm install cypress --save-dev
3) npm install @faker-js/faker --save-dev

# Test executions

Command to run cypress with visual interface: npx cypress open

1. Click on E2E Testing

2. Choose the Web Browser

3. Click on the "Start E2E Testing..." button

4. Choose which test you want to run

OR

Command to run cypress with console: npx cypress run

# Changes 12.01.2024

1. All .PageObject.js have been removed and elements of pages moved to commands.js.

2. New commands have been added and old commands have been improved.

Examples:

Now to add an item, it is enough to specify the number of items: cy.addItemsToCart(3);

The amount calculation command was modified and is now executed not through the 
function but through the cypress command cy.calculateTotalAmount(priceArray, tax);

3. Added "cypress.env.json" file in which the user's private information is stored.
If it was a real project, this file must be entered in ".gitignore" in order not to 
accidentally transmit private information.

4. Added configuration to the "cypress.config.js" file to remove the test execution 
error when running the npx cypress run command. Also, if necessary, it is possible to
add another configuration(e.g. defaultCommandTimeout, pageLoadTimeout).

5. Checkout tests were combined into one test file with sub-topics.

![alt text](https://i.imgur.com/OK3wHGj.png)