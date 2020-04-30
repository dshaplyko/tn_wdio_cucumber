"use strict";
const WebElement = require('../webelement')

class Checkbox extends WebElement {

    click() {
        return this.rootEl.click();
    }
}

module.exports = Checkbox;