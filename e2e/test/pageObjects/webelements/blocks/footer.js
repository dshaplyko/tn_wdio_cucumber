"use strict";
const WebElement = require('../webelement');
const Button = require('../buttons/button');
const Link = require('../links/link');

class Footer extends WebElement {

    /*
    * Initializes links from the footer
    * @returns {Link}
    */
    getElement(elem) {
        switch(elem.toLowerCase()) {
            case 'main page':
                return new Link (this.rootEl.element('a[href="#/landingPage"]'));
            case 'last notes':
                return new Link (this.rootEl.element('a[href="#/main'));
            case 'skyscanner':
                return new Link (this.rootEl.element('a[href="http://www.skyscanner.net/"]'));
            case 'eightydays':
                return new Link (this.rootEl.element('a[href="eightydays.me'));
        }
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