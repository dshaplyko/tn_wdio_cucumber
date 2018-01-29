"use strict";
const WebElement = require('../webelements/webelement')

class ModalWindow extends WebElement  {
    constructor(el) {
        super(el)
    }

    get body() { 
        return browser.element('.sweet-alert'); 
    
    }
    get message() { 
        return browser.element("p[style='display: block;']"); 
    }

    get okButton() { 
        return browser.element("button.confirm"); 
    }

    modalIsDisplayed() {
        this.body().waitForVisible(GLOBAL_TIMEOUT);
        return this.body.isVisible();
    }

    // waitModalVisible() {
    //     browser.waitUntil(() => {
    //         return this.modalIsDisplayed() === true
    //       }, GLOBAL_TIMEOUT, 'expected modal to be visible');
    // }

    isErrorVisible() {
        this.message.waitForVisible(GLOBAL_TIMEOUT);
        return this.message.isVisible();
    }

    getModalText() {
        return this.message.getText();
    }

    clickOk() {
        return this.okButton.click();
    }

}

module.exports = ModalWindow;