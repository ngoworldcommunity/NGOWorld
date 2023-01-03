/* eslint-disable no-undef */
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173/',
    specPattern: "**/*.spec.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
