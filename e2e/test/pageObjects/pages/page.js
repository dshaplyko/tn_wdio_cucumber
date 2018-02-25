"use strict";
const Header = require('../webelements/blocks/header');
const Footer = require('../webelements/blocks/footer');
const Modal = require('../webelements/blocks/modal');
const SideMenu = require('../webelements/blocks/sideMenu');

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

    /*
    *Initializes the header block
    * @returns {Header}
    */
    getHeader() {
        return new Header (browser.element('.header')); 
    }

    /*
    *Initializes the footer block
    * @returns {Footer}
    */
    getFooter() {
        return new Footer (browser.element('.footer')); 
    }

    /*
    *Initializes the modal window
    * @returns {Modal}
    */
    getModal() {
        return new Modal (browser.element('.sweet-alert'));
    }

    /*
    *Initializes the side bar menu
    * @returns {SideMenu}
    */
    getSideMenu() {
        browser.element('//span[@id="newsMenuItem"]/../../..').waitForVisible(GLOBAL_TIMEOUT);
        return new SideMenu (browser.element('//span[@id="newsMenuItem"]/../../..'));
    }
}

module.exports = Page;