"use strict";
const Page = require('./page');

class ProfilePage extends Page {

    /*
    *Checks if a page is opened
    * @returns {boolean}
    */
    isPageOpened() {
        browser.element('.header-profile').waitForVisible(GLOBAL_TIMEOUT);
        return browser.element('.header-profile').isVisible();
    }

    /*
    *Get text from the profile header
    * @returns {string}
    */
    getHeaderProfile() {
        return browser.element('.header-profile h1').getText();
    }

}

module.exports = ProfilePage;