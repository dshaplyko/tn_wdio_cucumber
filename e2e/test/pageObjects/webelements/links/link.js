"use strict";
const WebElement = require('../webelement')

class Link extends WebElement {

    constructor(el) {
        super(el)
    }

    click() {
        return this.rootEl.click();
    }
}

module.exports = Link;