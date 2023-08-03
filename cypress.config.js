const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1880,
  viewportHeight: 1080,
  //added commandTimeout to 10sec
  defaultCommandTimeout: 10000, 
  reporter: "mochawesome",
  reporterOptions: {
    "reportDir": "cypress/reports/mochawesome-report",
    "overwrite": true,
    "html": false,
    "json": true
  },

  env: {
    url: "https://demo.fareharbor.com/embeds/book/bigappletours/items/?full-items=yes",
  },
  //added retry count on test failure
  retries: {
    runMode: 1,
    openMode: 1,
  },
  e2e: {
   
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

});
