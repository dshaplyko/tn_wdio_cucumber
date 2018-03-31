"use strict";
const WebElement = require('../webelement')

class Link extends WebElement {

    click() {
        return this.rootEl.click();
    }
}

module.exports = Link;