"use strict";
var Page = require('./page')

class HomePage extends Page {

    get getStarted()  { return browser.element('#getStarted');         }
    get loginButton() { return browser.element('#loginMenuButton');    }
    get signUp()      { return browser.element('#registerMenuButton'); }

    open() {
        super.open('/');
    }
    
    clickGetStarted() {
        return this.getStarted.click();
    }

    clickLogIn() {
        return this.loginButton.click();
    }

    clickSignUp() {
        return this.signUp.click();
    }
    
}

module.exports = HomePage;