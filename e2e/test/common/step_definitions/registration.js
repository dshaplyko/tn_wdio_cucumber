const { defineSupportCode } = require('cucumber');
const RegistrationPage = require('../../pageObjects/pages/registrationPage');
const register = new RegistrationPage();


defineSupportCode((cucumber) => {

    cucumber.When(/^I wait until registration page is loaded$/, () => {
        return register.waitUntilRegistrationFormIsDisplayed();
    });

    cucumber.When(/^I click sign in button$/, () => {
        return register.clickSignIn();
    });

    cucumber.Then(/^I should be on registration page$/, () => {
        return expect(register.registerFormIsVisible()).to.be.true;
    });

    cucumber.Then(/^First name field on the registration should be visible$/, () => {
        return expect(register.firstNameIsVisible()).to.be.true;
    });

    cucumber.Then(/^Last name field on the registration should be visible$/, () => {
        return expect(register.lastNameIsVisible()).to.be.true;
    });

    cucumber.Then(/^Email field on the registration should be visible$/, () => {
        return expect(register.emailIsVisible()).to.be.true;
    });

    cucumber.Then(/^Username field on the registration should be visible$/, () => {
        return expect(register.usernameIsVisible()).to.be.true;
    });

    cucumber.Then(/^Password field on the registration should be visible$/, () => {
        return expect(register.passwordIsVisible()).to.be.true;
    });

    cucumber.Then(/^Birthday field on the registration should be visible$/, () => {
        return expect(register.bithdayIsVisible()).to.be.true;
    });

    cucumber.Then(/^Register button on the registration should be visible$/, () => {
        return expect(register.registerButtonIsVisible()).to.be.true;
    });
});