"use strict";
const Page = require('./page');
const Button = require('../webelements/buttons/button');

class HomePage extends Page {

    open() {
        super.open('/');
    }

    /*
    *Checks if a page is opened
    * @returns {boolean}
    */
    isPageOpened() {
        browser.element('.map-page').waitForVisible(GLOBAL_TIMEOUT);
        return browser.element('.map-page').isVisible();
    }

    /*
    *Initializes Get Started Button on the home page
    *@returns {Button}
    */
    getStartedButton() { 
        return new Button (browser.element('#getStarted'));         
    }
}

module.exports = HomePage;