const { defineSupportCode } = require('cucumber');
const HomePage = require('../../pageObjects/pages/homePage');
const home = new HomePage();

defineSupportCode((cucumber) => {

    cucumber.When(/^I click get started button$/, () => {
        return home.clickGetStarted();
    });

    cucumber.When(/^I click login button on the page$/, () => {
        return home.clickLogIn();
    });

    cucumber.When(/^I click sign up button$/, () => {
        return home.clickSignUp();
    });

});