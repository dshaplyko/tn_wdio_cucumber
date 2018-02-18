"use strict";
const WebElement = require('../webelement');
const Button = require('../buttons/button');

class Modal extends WebElement  {
    constructor(el) {
        super(el)
    }

    modalIsDisplayed() {
        this.rootEl.waitForVisible(GLOBAL_TIMEOUT);
        return this.rootEl.isVisible();
    }

    /*
    *Initializes the Ok button in the modal
    * @returns {Button}
    */
    getOkButton() { 
        return new Button (browser.element("button.confirm")); 
    }

    /*
    *Gets text of the modal window
    * @returns text message
    */
    getModalText() {
        return browser.element("p[style='display: block;']").getText();
    }

    isErrorVisible() {
        let message = browser.element("p[style='display: block;']");
        message.waitForVisible(GLOBAL_TIMEOUT);
        return message.isVisible();
    }
}

module.exports = Modal;