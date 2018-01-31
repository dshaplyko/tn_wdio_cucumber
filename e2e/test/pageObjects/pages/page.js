"use strict";
const Header = require('../webelements/blocks/header');
const Footer = require('../webelements/blocks/footer');
const ModalWindow = require('../../pageObjects/modals/modal');

class Page {
	constructor() {
        this.title = 'My Page';
    }

    /*
    It is needed to refactor it
    */

    getModal() { 
        return new ModalWindow (browser.element('.sweet-alert')); 
    }

	open(path) {
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