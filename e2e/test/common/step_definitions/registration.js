const { defineSupportCode } = require('cucumber');
const RegistrationPage = require('../../pageObjects/pages/registrationPage');
const register = new RegistrationPage();


defineSupportCode((cucumber) => {
    cucumber.When(/^I wait until registration page is loaded$/, () => {
        return register.waitUntilRegistrationFormIsDisplayed();
    });

    cucumber.Then(/^I should be on registration page$/, () => {
        return expect(register.registerForIsVisible()).to.be.true;
    });

});