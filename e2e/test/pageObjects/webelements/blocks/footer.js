"use strict";
const WebElement = require('../webelement');
const Button = require('../buttons/button');
const Link = require('../links/link');

class Footer extends WebElement {

    /*
    * Initializes links from the footer
    * @returns {Link}
    */
    getElement(text) {
        return new Link (browser.element('//a[contains(text(),"' + text + '")]')); 
    }

    /*
    * Initializes the logo from the footer
    * @returns {String}
    */
    isLogoVisible() {
        return this.rootEl.element('.logoColumn').isVisible();
    }

}

module.exports = Footer;