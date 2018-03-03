"use strict";
const WebElement = require('../webelement');
const testData = require('../../../common/support/data');

class DropZone extends WebElement {

    uploadPhoto() {
        let image = testData['testImage'];
        return browser.chooseFile(this.rootEl, image);
    }

}

module.exports = DropZone;