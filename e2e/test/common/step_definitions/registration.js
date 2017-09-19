const { defineSupportCode } = require('cucumber');
const RegistrationPage = require('../../pageObjects/pages/registrationPage');
const register = new RegistrationPage();


defineSupportCode((cucumber) => {

    cucumber.When(/^I wait until registration page is loaded$/, () => {
        return register.waitUntilRegistrationFormIsDisplayed();
    });

    cucumber.Then(/^I should be on registration page$/, () => {
        return expect(register.registerFormIsVisible()).to.be.true;
    });

    cucumber.Then(/^First name field should be visible$/, () => {
        return expect(register.firstNameIsVisible()).to.be.true;
    });

    cucumber.Then(/^Last name field should be visible$/, () => {
        return expect(register.lastNameIsVisible()).to.be.true;
    });
});