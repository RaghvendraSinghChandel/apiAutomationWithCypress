const { defineConfig } = require("cypress");

const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            allureWriter(on, config);
            return config;
        },
        env: {
          allureReuseAfterSpec: true
      },
      baseUrl:"http://simple-grocery-store-api.online"
    }
});