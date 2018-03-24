"use strict";
const Page = require('./page');
const Button = require('../webelements/buttons/button');
const Gallery = require('../webelements/components/gallery');
const Map = require('../webelements/components/map');

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

    /*
    *Gets a close button
    * @returns {Button}
    */
    getCloseButton() {
        return new Button (browser.element('.back-icon'));
    }

    /*
    *Check if a map is visible on the page
    * @returns {Map}
    */
    getMap() {
        return new Map (browser.element('.map'));
    }

    isNoteTextVisible() {
        return browser.element('.note-text').isVisible();
    }

    getGallery() {
        return new Gallery (browser.element('.gallery-row'));
    }

    isSignVisible() {
        return browser.element('.sign').isVisible();
    }
    
}

module.exports = NotePage;