const PageComponent = require('../PageComponent');
const PageElement = require('../PageElement');

class Footer extends PageComponent {

	/*
	 * Initializes links from the footer
	 * @returns {Link}
	 */
	getElement(text) {
		return new PageElement(browser.$(`//a[contains(text(),'${text}')]`));
	}

	/*
	 * Initializes the logo from the footer
	 * @returns {String}
	 */
	isLogoVisible() {
		return this.rootEl.$('.logoColumn').isDisplayed();
	}

	getLogo() {
		return new PageElement(browser.$('.logoColumn'));
	}

}

module.exports = Footer;