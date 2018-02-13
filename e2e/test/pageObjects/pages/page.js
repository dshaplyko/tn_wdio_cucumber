"use strict";
const Header = require('../webelements/blocks/header');
const Footer = require('../webelements/blocks/footer');
const Modal = require('../webelements/blocks/modal');

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

    getModal() {
        return new Modal (browser.element('.sweet-alert'));
    }
}

module.exports = Page;