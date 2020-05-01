const WebElement = require('../webelement');
const Link = require('../links/link');

class Footer extends WebElement {

	/*
	 * Initializes links from the footer
	 * @returns {Link}
	 */
	getElement(text) {
		return new Link(browser.$(`//a[contains(text(),'${text}')]`));
	}

	/*
	 * Initializes the logo from the footer
	 * @returns {String}
	 */
	isLogoVisible() {
		return this.rootEl.$('.logoColumn').isDisplayed();
	}

}

module.exports = Footer;