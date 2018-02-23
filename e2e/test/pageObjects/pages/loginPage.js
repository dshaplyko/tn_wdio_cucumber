"use strict";
const Page = require('./page');
const Field = require('../webelements/fields/field');
const Button = require('../webelements/buttons/button');
const Form = require('../webelements/forms/form');

class LoginPage extends Page {

    open() {
        super.open('login');
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

    getLoginBody() { 
        return browser.element('.page-login-route');      
    }

    getWelcomeText() {
        return browser.element('.login-header').getText();
    }

}

module.exports = LoginPage;