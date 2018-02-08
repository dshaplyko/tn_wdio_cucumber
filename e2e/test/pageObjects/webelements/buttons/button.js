"use strict";
const WebElement = require('../webelement')

class Button extends WebElement {

    constructor(el) {
        super(el)
    }

    click() {
        return this.rootEl.click();
    }
}

module.exports = Button;