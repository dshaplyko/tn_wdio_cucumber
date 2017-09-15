"use strict";
var Page = require('./page')

class RegistrationPage extends Page {

    get registrationForm() { return browser.element(".login-form"); }
    
    open() {
        super.open('register');
    }

    waitUntilRegistrationFormIsDisplayed() {
        browser.waitUntil(() => {
            return this.registrationForm.isVisible() === true
          }, GLOBAL_TIMEOUT, 'login form to be visible');
    }

    registerForIsVisible() {
        return this.registrationForm.isVisible();
    }

}

module.exports = RegistrationPage;