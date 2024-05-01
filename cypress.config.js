const { defineConfig } = require('cypress') 

module.exports = defineConfig ({
    numTestsKeptInMemory:1,
    e2e: {
        chromeWebSecurity: false,
        setupNodeEvents (on) {
        },

        baseUrl : 'https://www.saucedemo.com/',
        specPattern : "cypress/support/e2e",
        supportFile : false,

        pageLoadTimeout : 60000

    }
})

