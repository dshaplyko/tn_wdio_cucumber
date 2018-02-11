"use strict";
const WebElement = require('../webelements/webelement');
const Button = require('../webelements/buttons/button');

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