const Page = require('./page');
const PageElement = require('../webelements/PageElement');

class HomePage extends Page {

	open() {
		super.open('/');
	}

	/*
	 *Checks if a page is opened
	 * @returns {boolean}
	 */
	isPageOpened() {
		browser.$('.map-page').waitForExist({timeout: GLOBAL_TIMEOUT});
		return browser.$('.map-page').isDisplayed();
	}

	/*
	 *Initializes Get Started Button on the home page
	 *@returns {Button}
	 */
	getStartedButton() {
		return new PageElement(browser.$('#getStarted'));
	}
}

module.exports = HomePage;