"use strict";
const Page = require('./page');
const Field = require('../webelements/fields/field');
const Button = require('../webelements/buttons/button');
const LoginForm = require('../webelements/forms/loginForm');

class LoginPage extends Page {

    open() {
        super.open('login');
    }

    isPageOpened() {
        this.getLoginBody().waitForVisible(GLOBAL_TIMEOUT);
        return this.getLoginBody().isVisible();
    }

    getLoginForm() {
        return new LoginForm (browser.element('.login-form'));
    }

    getLoginBody() { 
        return browser.element('.page-login-route');      
    }

    getWelcomeText() {
        return browser.element('.login-header').getText();
    }

}

module.exports = LoginPage;