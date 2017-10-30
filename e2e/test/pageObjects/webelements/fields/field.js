"use strict";
var Webelement = require('../webelement')

class Field extends Webelement {

    typeIn(text) {
        return this.rootEl.setValue(text);
    }


}

module.exports = Field;