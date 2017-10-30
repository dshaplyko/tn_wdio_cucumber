"use strict";
var Webelement = require('../webelement')

class Button extends Webelement {

    click() {
        return this.rootEl.click();
    }
}

module.exports = Button;