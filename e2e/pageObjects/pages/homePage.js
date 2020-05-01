const Page = require('./page');
const Button = require('../webelements/buttons/button');

class HomePage extends Page {

	open() {
		super.open('/');
	}

	/*
	 *Checks if a page is opened
	 * @returns {boolean}
	 */
	isPageOpened() {
		browser.$('.map-page').waitForExist(GLOBAL_TIMEOUT);
		return browser.$('.map-page').isDisplayed();
	}

	/*
	 *Initializes Get Started Button on the home page
	 *@returns {Button}
	 */
	getStartedButton() {
		return new Button(browser.$('#getStarted'));
	}
}

module.exports = HomePage;