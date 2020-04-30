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
        browser.$('.note-background').waitForExist(GLOBAL_TIMEOUT);
        return browser.$('.note-background').isDisplayed();
    }

    /*
    *Gets a title of an opened note
    * @returns {String}
    */
    getTitle() {
        return browser.$('#titleInput').getText();
    }

    /*
    *Gets a close button
    * @returns {Button}
    */
    getCloseButton() {
        return new Button (browser.$('.back-icon'));
    }

    /*
    *Check if a map is visible on the page
    * @returns {Map}
    */
    getMap() {
        return new Map (browser.$('.map'));
    }

    isNoteTextVisible() {
        return browser.$('.note-text').isDisplayed();
    }

    getGallery() {
        return new Gallery (browser.$('.gallery-row'));
    }

    isSignVisible() {
        return browser.$('.sign').isDisplayed();
    }
    
}

module.exports = NotePage;