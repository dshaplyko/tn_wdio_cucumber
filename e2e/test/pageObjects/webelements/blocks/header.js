"use strict";
const WebElement = require('../webelement');
const Button = require('../buttons/button');
const Link = require('../links/link');

class Header extends WebElement {

    /*
    * Initiates Login button in the Header
    * @returns {Button}
    */
    getLoginButton() { 
        return new Button (this.rootEl.element('#loginMenuButton'));    
    }

    /*
    * Initiates Sigh Up button in the Header
    * @returns {Button}
    */
    getSignUp() { 
        return new Button (this.rootEl.element('#registerMenuButton')); 
    }

    /*
    * Initiates Logo in the Header
    * @returns {Link}
    */
    getLogo() {
        return new Link (this.rootEl.element('.logo'));
    }

    getMenuButton() {
        return new Button (this.rootEl.element(''));
    }
}

module.exports = Header;