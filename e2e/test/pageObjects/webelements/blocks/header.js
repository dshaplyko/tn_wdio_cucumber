"use strict";
const WebElement = require('../webelement');
const Button = require('../buttons/button');

class Header extends WebElement {

    getLoginButton() { 
        return new Button (browser.element('#loginMenuButton'));    
    }

    getSignUp() { 
        return new Button (browser.element('#registerMenuButton')); 
    }
}

module.exports = Header;