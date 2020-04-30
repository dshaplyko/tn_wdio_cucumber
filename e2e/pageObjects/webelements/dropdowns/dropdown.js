"use strict";
const WebElement = require('../webelement')

class Dropdown extends WebElement {

    expand() {
        return this.rootEl.click();
    }

    getDefaultValue() {
        return this.rootEl.$('.filter-item div > div > div:nth-child(2)').getText();
    }
}

module.exports = Dropdown;