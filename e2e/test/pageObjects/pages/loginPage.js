"use strict";
const Page = require('./page');
const Field = require('../webelements/fields/field');
const Button = require('../webelements/buttons/button');

class LoginPage extends Page {

    open() {
        super.open('login');
    }

    isPageOpened() {
        this.getLoginBody().waitForVisible(GLOBAL_TIMEOUT);
        return this.getLoginBody().isVisible();
    }

    getLoginBody() { 
        return browser.element('.page-login-route');      
    }

    getEmail() { 
        return new Field (browser.element("input[name='email']"));    
    }
    getPassword() { 
        return new Field (browser.element("input[name='password']")); 
    }

    getLoginButton() { 
        return new Button (browser.element("button[name='login']"));   
    }
    getRegisterButton() { 
        return new Button (browser.element(".login-footer a"));        
    }

    login() {
        this.getEmail().typeIn('test@test.ru');
        this.getPassword().typeIn('password');
        this.getLoginButton().click();
    }

    getWelcomeText() {
        return browser.element('.login-header').getText();
    }

}

module.exports = LoginPage;