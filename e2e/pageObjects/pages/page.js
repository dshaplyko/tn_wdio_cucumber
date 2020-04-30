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
		browser.reloadSession()
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
		browser.$('.sweet-alert').waitForExist(GLOBAL_TIMEOUT);
		return new Modal(browser.$('.sweet-alert'));
	}

	/*
	 *Initializes the side bar menu
	 * @returns {SideMenu}
	 */
	getSideMenu() {
		browser.$('//span[@id="newsMenuItem"]/../../..').waitForExist(GLOBAL_TIMEOUT);
		return new SideMenu(browser.$('//span[@id="newsMenuItem"]/../../..'));
	}
}

module.exports = Page;