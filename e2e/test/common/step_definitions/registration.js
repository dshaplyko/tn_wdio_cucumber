const { defineSupportCode } = require('cucumber');
const pages = require('../../pageObjects/pages');

defineSupportCode((cucumber) => {

    cucumber.Then(/^the '(.*)' (is|is not) visible on the registration page$/, (element, condition) => {
        switch(condition.toLowerCase()) {
            case 'register button':
                return expect(pages.atRegistrationPage().getRegisterButton().isVisible()).toBe(condition === 'is');
            case 'first name field':
                return expect(pages.atRegistrationPage().getFirstName().isVisible()).toBe(condition === 'is');  
            case 'last name field':
                return expect(pages.atRegistrationPage().getLastName().isVisible()).toBe(condition === 'is');  
            case 'email field':
                return expect(pages.atRegistrationPage().getEmail().isVisible()).toBe(condition === 'is');
            case 'user name field':
                return expect(pages.atRegistrationPage().getUserName().isVisible()).toBe(condition === 'is');
            case 'password field':
                return expect(pages.atRegistrationPage().getPassword().isVisible()).toBe(condition === 'is');
            case 'birthday field':
                return expect(pages.atRegistrationPage().getBirthday().isVisible()).toBe(condition === 'is');
        }
    });

    cucumber.When(/^I click '(.*)' button on the registration page$/, (element) => {
        switch(element.toLowerCase()) {
            case ('sign in'):
                return pages.atRegistrationPage().getSignIn().click();
            case ('register'):
                return pages.atRegistrationPage().getRegisterButton().click();
        }
    });
});