const { defineSupportCode } = require('cucumber');
const RegistrationPage = require('../../pageObjects/pages/registrationPage');
const register = new RegistrationPage();

defineSupportCode((cucumber) => {

    cucumber.Then(/^the '(.*)' (is|is not) visible on the registration page$/, (element, condition) => {
        switch(condition.toLowerCase()) {
            case 'register button':
                return expect(register.getRegisterButton().isVisible()).toBe(condition === 'is');
            case 'first name field':
                return expect(register.getFirstName().isVisible()).toBe(condition === 'is');  
            case 'last name field':
                return expect(register.getLastName().isVisible()).toBe(condition === 'is');  
            case 'email field':
                return expect(register.getEmail().isVisible()).toBe(condition === 'is');
            case 'user name field':
                return expect(register.getUserName().isVisible()).toBe(condition === 'is');
            case 'password field':
                return expect(register.getPassword().isVisible()).toBe(condition === 'is');
            case 'birthday field':
                return expect(register.getBirthday().isVisible()).toBe(condition === 'is');
        }
    });

    cucumber.When(/^I click '(.*)' button on the registration page$/, (element) => {
        switch(element.toLowerCase()) {
            case ('sign in'):
                return register.getSignIn().click();
            case ('register'):
                return register.getRegisterButton().click();
        }
    });
});