"use strict";
const WebElement = require('../webelement');
const Button = require('../buttons/button');

class Modal extends WebElement  {
    constructor(el) {
        super(el)
    }

    /*
    * Checks is a modal windows is visible
    * @returns {boolean}
    */
    modalIsDisplayed() {
        return this.rootEl.isVisible();
    }

    /*
    *Initializes the Ok button in the modal
    * @returns {Button}
    */
    getOkButton() { 
        return new Button (this.rootEl.element('button.confirm')); 
    }

    /*
    *Gets text of the modal window
    * @returns text message
    */
    getModalText() {
        return this.rootEl.element("p[style='display: block;']").getText();
    }

    isErrorVisible() {
        return this.rootEl.element("p[style='display: block;']").isVisible();
    }
}

module.exports = Modal;