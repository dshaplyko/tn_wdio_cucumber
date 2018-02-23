"use strict";
const Page = require('./page');

class NotePage extends Page {

    /*
    *Checks if a page is opened
    * @returns {boolean}
    */
    isPageOpened() {
        browser.element('.note-background').waitForVisible(GLOBAL_TIMEOUT);
        return browser.element('.note-background').isVisible();
    }

    /*
    *Gets a title of an opened note
    * @returns {String}
    */
    getTitle() {
        return browser.element('#titleInput').getText();
    }
    
}

module.exports = NotePage;