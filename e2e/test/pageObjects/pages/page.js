"use strict";
const Header = require('../webelements/blocks/header');
const Footer = require('../webelements/blocks/footer');

class Page {
	constructor() {
        this.title = 'My Page';
    }

	open(path) {
        /*
        Dirty hack. Need to re-write it
        */
        browser.reload();
        browser.url('/#' + path);
    }

    getHeader() {
        return new Header (browser.element('.header')); 
    }

    getFooter() {
        return new Footer (browser.element('.footer')); 
    }
}

module.exports = Page;