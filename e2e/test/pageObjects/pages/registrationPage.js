"use strict";
const Page = require('./page')
const Field = require('../../pageObjects/webelements/fields/field');
const Button = require('../../pageObjects/webelements/buttons/button')
const Form = require('../webelements/forms/form');
class RegistrationPage extends Page {

    open() {
        super.open('register');
    }
    
    /*
    *Checks if a page is opened
    * @returns {boolean}
    */
    isPageOpened() {
        return this.getForm().isVisible();
    }

    getForm() {
        browser.element('.login-form').waitForVisible(GLOBAL_TIMEOUT);
        return new Form (browser.element('.login-form'));
    }

    /*
    *Initializes text on the registration page 
    * @returns {String}
    */
    getWelcomeText() {
        return browser.element('.login-header').getText();
    }
    
}

module.exports = RegistrationPage;