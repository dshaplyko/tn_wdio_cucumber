"use strict";

class WebElement {
    
	constructor(el) {
        this.rootEl = el;
    }

    isVisible() {
        return this.rootEl.isVisible();
    }

    isExisting() {
        return this.rootEl.isExisting();
    }

}
module.exports = WebElement;