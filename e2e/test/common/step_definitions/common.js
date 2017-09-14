const { defineSupportCode } = require('cucumber');

defineSupportCode((cucumber) => {
    cucumber.Given(/^I wait until page is reloaded$/, () => {
        browser.pause(5000);
    });
    
});

