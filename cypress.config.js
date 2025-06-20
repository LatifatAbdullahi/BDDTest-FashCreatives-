const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://staging.fashcreatives.com/home',
        viewportHeight: 960,
        viewportWidth: 1530,
       // includeShadowDom: true,
        defaultCommandTimeout: 13000,
        chromeWebSecurity: false,
        specPattern: '**/*.feature',
        supportFile: 'cypress/support/e2e.js',
        setupNodeEvents,
    }
});
    