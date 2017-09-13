"use strict";
var Page = require('./page')
var homePage = require('./homePage')

class LoginPage extends Page {
    get email()         { return browser.element("input[name='email']"); }
    get password()      { return browser.element("input[name='password']"); }
    get loginButton()   { return browser.element("button[name='login']"); }

    open() {
        super.open('login');
    }
    
    enterEmail() {
        return this.email.setValue('asdasd');
    }

    enterPassword() {
        return this.password.setValue('asdasdasd');
    }

    login() {
        this.enterEmail();
        this.enterPassword();
        this.loginButton.click();
    }
}

module.exports = LoginPage;