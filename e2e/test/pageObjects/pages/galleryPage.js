"use strict";
const Page = require('./page');

class GalleryPage extends Page {

    open() {
        super.open('gallery');
    }

    /*
    *Checks if a page is opened
    * @returns {boolean}
    */
    isPageOpened() {
        browser.element('.gallery-row').waitForVisible(GLOBAL_TIMEOUT);
        return browser.element('.gallery-row').isVisible();
    }

}

module.exports = GalleryPage;