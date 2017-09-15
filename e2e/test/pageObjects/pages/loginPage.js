"use strict";
var Page = require('./page')

class LoginPage extends Page {
    get email()           { return browser.element("input[name='email']"); }
    get password()        { return browser.element("input[name='password']"); }
    get loginButton()     { return browser.element("button[name='login']"); }
    get registerButton()  { return browser.element(".login-footer a"); }

    open() {
        super.open('login');
    }
    
    enterEmail(email) {
        return this.email.setValue(email);
    }

    enterPassword(password) {
        return this.password.setValue(password);
    }

    clickLogin() {
        this.loginButton.click();
    }

    login() {
        this.enterEmail("test@test.ru");
        this.enterPassword("password");
        this.clickLogin();
    }

    clickRegisterButton() {
        return this.registerButton.click();
    }
}

module.exports = LoginPage;