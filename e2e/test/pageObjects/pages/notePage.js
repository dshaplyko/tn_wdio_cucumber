"use strict";
const Page = require('./page');

class NotePage extends Page {

    isPageOpened() {
        browser.element('.note-background').waitForVisible(GLOBAL_TIMEOUT);
        return browser.element('.note-background').isVisible();
    }
    
}

module.exports = NotePage;