const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 959,
    failOnStatusCode: false,
    baseUrl: 'https://demo.wee.bet/',
    // baseUrl: 'http://localhost:4200/',
    defaultCommandTimeout: 30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
