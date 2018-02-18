"use strict";
const WebElement = require('../webelement')

class Checkbox extends WebElement {

    clickCheckbox() {
        this.rootEl.waitForVisible(GLOBAL_TIMEOUT);
        return this.rootEl.click();
    }
}

module.exports = Checkbox;