"use strict";
const Page = require('./page');
const Field = require('../webelements/fields/field');
const Button = require('../webelements/buttons/button');
const Map = require('../webelements/components/map');
const DropZone = require('../webelements/components/dropZone');


class CreateNotePage extends Page {

    /*
    *Checks if a page is opened
    * @returns {boolean}
    */
    isPageOpened() {
        browser.element('.col-xs-12').waitForVisible(GLOBAL_TIMEOUT);
        return browser.element('.col-xs-12').isVisible();
    }

    getField(field) {
        switch(field.toLowerCase()) {
            case 'title':
                return new Field (browser.element('input[name="title"]'));
            case 'subtitle':
                return new Field (browser.element('input[name="subtitle"]'));
            case 'content':
                return new Field (browser.element('textarea[name="text"]'));
        }
    }

    getButton(button) {
        switch(button.toLowerCase()) {
            case 'next':
            case 'finish':
                return new Button (browser.element('#nextButton'));
            case 'back':
                return new Button (browser.element(''));
        }
    }

    /*
    *Initializes a map component
    * @returns {Map}
    */
    getMap() {
        browser.element('.map').waitForVisible(GLOBAL_TIMEOUT);
        return new Map (browser.element('.map'));
    }

    /*
    *Initializes a drop zone component
    * @returns {Drop zone}
    */
    getDropZone() {
        browser.element('.drop-zone').waitForVisible(GLOBAL_TIMEOUT);
        return new DropZone (browser.element('.drop-zone input'));
    }

}

module.exports = CreateNotePage;