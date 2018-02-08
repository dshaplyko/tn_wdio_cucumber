"use strict";

class WebElement {
    
	constructor(el) {
        this.rootEl = el;
    }

    isVisible() {
        return this.rootEl.isVisible();
    };

}
module.exports = WebElement;