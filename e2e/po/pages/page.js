const Header = require('../webelements/components/header');
const Footer = require('../webelements/components/footer');
const Modal = require('../webelements/components/modal');
const SideMenu = require('../webelements/components/sideMenu');

class Page {
	constructor() {
		this.title = 'My Page';
	}

	open(path) {
		browser.url('/#' + path);
	}

	/*
	 *Initializes the header block
	 * @returns {Header}
	 */
	getHeader() {
		return new Header(browser.$('.header'));
	}

	/*
	 *Initializes the footer block
	 * @returns {Footer}
	 */
	getFooter() {
		return new Footer(browser.$('.footer'));
	}

	/*
	 *Initializes the modal window
	 * @returns {Modal}
	 */
	getModal() {
		browser.pause(2000);
		return new Modal(browser.$('.sweet-alert'));
	}

	/*
	 *Initializes the side bar menu
	 * @returns {SideMenu}
	 */
	getSideMenu() {
		browser.$('//span[@id="newsMenuItem"]/../../..').waitForExist({
			timeout: GLOBAL_TIMEOUT
		});
		return new SideMenu(browser.$('//span[@id="newsMenuItem"]/../../..'));
	}
}

module.exports = Page;