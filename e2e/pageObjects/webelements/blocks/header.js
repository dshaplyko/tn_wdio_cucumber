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
        return new Button (this.rootEl.$('#loginMenuButton'));    
    }

    /*
    * Initiates Sigh Up button in the Header
    * @returns {Button}
    */
    getSignUp() { 
        return new Button (this.rootEl.$('#registerMenuButton')); 
    }

    /*
    * Initiates Logo in the Header
    * @returns {Link}
    */
    getLogo() {
        return new Link (this.rootEl.$('.logo'));
    }

    /*
    * Initiates Menu Button in the Header
    * @returns {Button}
    */
    getMenuButton() {
        return new Button (this.rootEl.$('span.menu-button'));
    }
}

module.exports = Header;