"use strict";
const WebElement = require('../webelement');

class Filter extends WebElement {

    getElement(elem) {
        switch(elem.toLowerCase()) {
            case 'title':
                return this.rootEl.element('#orderByTitle');
            case 'user':
                return this.rootEl.element('#orderByUsername');
            case 'date':
                return this.rootEl.element('#orderByDate');
        }
    }
}

module.exports = Filter;