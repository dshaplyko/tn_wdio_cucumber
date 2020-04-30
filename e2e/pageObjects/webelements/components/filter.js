"use strict";
const WebElement = require('../webelement');

class Filter extends WebElement {

    getElement(elem) {
        switch(elem.toLowerCase()) {
            case 'title':
                return this.rootEl.$('#orderByTitle');
            case 'user':
                return this.rootEl.$('#orderByUsername');
            case 'date':
                return this.rootEl.$('#orderByDate');
        }
    }
}

module.exports = Filter;