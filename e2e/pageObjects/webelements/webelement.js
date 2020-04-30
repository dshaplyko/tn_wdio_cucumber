"use strict";

class WebElement {
    
	constructor(el) {
        this.rootEl = el;
    }

    isDisplayed() {
        return this.rootEl.isDisplayed();
    }

    isExisting() {
        return this.rootEl.isExisting();
    }

}
module.exports = WebElement;