"use strict";
const WebElement = require('../webelement');

class Map extends WebElement {

    click() {
        return this.rootEl.click();
    }

}

module.exports = Map;