"use strict";
const WebElement = require('../webelement');
const Button = require('../buttons/button');

class Header extends WebElement {

    /*
    * Initiates Login button in the Header
    * @returns {Button}
    */
    getLoginButton() { 
        return new Button (browser.element('#loginMenuButton'));    
    }

    /*
    * Initiates Sigh Up button in the Header
    * @returns {Button}
    */
    getSignUp() { 
        return new Button (browser.element('#registerMenuButton')); 
    }
}

module.exports = Header;