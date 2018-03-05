"use strict";
const WebElement = require('../webelement');

class DropZone extends WebElement {

    uploadPhoto(image) {
        return this.rootEl.chooseFile(image);
    }

}

module.exports = DropZone;