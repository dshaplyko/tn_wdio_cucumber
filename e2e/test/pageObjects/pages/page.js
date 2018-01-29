"use strict";
const Header = require('../webelements/blocks/header');
const Footer = require('../webelements/blocks/footer');

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

    header() {
        return new Header (browser.element('.header')); 
    }

    footer() {
        return new Header (browser.element('.footer')); 
    }
}
module.exports = Page;