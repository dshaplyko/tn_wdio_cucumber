"use strict";
const Page = require('./page')
const Field = require('../../pageObjects/webelements/fields/field');
const Button = require('../../pageObjects/webelements/buttons/button')
const Form = require('../webelements/forms/form');
class RegistrationPage extends Page {

    open() {
        super.open('register');
    }
    
    isPageOpened() {
        this.getRegistrationForm().waitForVisible(GLOBAL_TIMEOUT);
        return this.getRegistrationForm().isVisible();
    }

    getForm() {
        return new Form (browser.element('.login-form'));
    }

    getRegistrationForm() { 
        return browser.element(".page-register-route");    
    }

    getSignIn() { 
        return new Button (browser.element('.logout-footer a'));        
    }
    
}

module.exports = RegistrationPage;