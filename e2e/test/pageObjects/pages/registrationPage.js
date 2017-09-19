"use strict";
var Page = require('./page')

class RegistrationPage extends Page {

    get registrationForm() { return browser.element(".page-register-route"); }
    get firstName()        { return browser.element('#form-firstName'); }
    get lastName()         { return browser.element('#form-lastName'); }
    
    open() {
        super.open('register');
    }

    waitUntilRegistrationFormIsDisplayed() {
        browser.waitUntil(() => {
            return this.registrationForm.isVisible() === true
          }, GLOBAL_TIMEOUT, 'login form to be visible');
    }

    registerFormIsVisible() {
        return this.registrationForm.isVisible();
    }

    firstNameIsVisible() {
        return this.firstName.isVisible();
    }

    lastNameIsVisible() {
        return this.lastName.isVisible();
    }

}

module.exports = RegistrationPage;