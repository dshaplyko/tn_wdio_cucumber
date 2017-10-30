"use strict";

class Webelement {
	constructor(el) {
        this.rootEl = el;
    }

    isVisible() {
        return this.rootEl.isVisible();
    };

}
module.exports = Webelement;