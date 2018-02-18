"use strict";
const Page = require('./page');
const Note = require('../webelements/structures/note');

class NotePage extends Page {

    isPageOpened() {
        browser.element('.note-background').waitForVisible(GLOBAL_TIMEOUT);
        return browser.element('.note-background').isVisible();
    }
    
}

module.exports = NotePage;