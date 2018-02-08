"use strict";
const Page = require('./page')
const Field = require('../../pageObjects/webelements/fields/field');
const Button = require('../../pageObjects/webelements/buttons/button')
const LoginForm = require('../webelements/forms/loginForm');
class RegistrationPage extends Page {

    open() {
        super.open('register');
    }
    
    isPageOpened() {
        this.getRegistrationForm().waitForVisible(GLOBAL_TIMEOUT);
        return this.getRegistrationForm().isVisible();
    }

    getLoginForm() {
        return new LoginForm (browser.element('.login-form'));
    }

    getRegistrationForm() { 
        return browser.element(".page-register-route");    
    }

    getSignIn() { 
        return new Button (browser.element('.logout-footer a'));        
    }
    
}

module.exports = RegistrationPage;