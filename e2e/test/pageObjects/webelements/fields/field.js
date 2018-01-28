"use strict";
var WebElement = require('../webelement')

class Field extends WebElement {

    typeIn(text) {
        return this.rootEl.setValue(text);
    }


}

module.exports = Field;