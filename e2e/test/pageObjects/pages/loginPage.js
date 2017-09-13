"use strict";
var Page = require('./page')

class LoginPage extends Page {
    get email()         { return browser.element("input[name='email']"); }
    get password()      { return browser.element("input[name='password']"); }
    get loginButton()   { return browser.element("button[name='login']"); }

    open() {
        super.open('login');
    }
    
    enterEmail() {
        return this.email.setValue('test@test.ru');
    }

    enterPassword() {
        return this.password.setValue('password');
    }

    login() {
        this.enterEmail();
        this.enterPassword();
        this.loginButton.click();
    }
}

module.exports = LoginPage;