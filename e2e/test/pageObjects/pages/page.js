"use strict";

class Page {
	constructor() {
        this.title = 'My Page';
    }
    get modalWindow() { 
        return browser.element('.sweet-alert'); 
    }

	open(path) {
		browser.url('/#' + path);
    }
}
module.exports = Page;