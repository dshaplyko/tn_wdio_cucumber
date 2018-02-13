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


    getOkButton() { 
        return new Button (browser.element("button.confirm")); 
    }

    getModalText() {
        return browser.element("p[style='display: block;']").getText();
    }

    getMessage() { 
        return  
    }

    isErrorVisible() {
        let message = browser.element("p[style='display: block;']");
        message.waitForVisible(GLOBAL_TIMEOUT);
        return message.isVisible();
    }
}

module.exports = Modal;