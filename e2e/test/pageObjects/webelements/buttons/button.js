"use strict";
const WebElement = require('../webelement')

class Button extends WebElement {

    click() {
        return this.rootEl.click();
    }
}

module.exports = Button;