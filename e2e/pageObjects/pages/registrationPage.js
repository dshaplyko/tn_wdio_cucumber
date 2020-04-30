const Page = require('./page');
const Form = require('../webelements/forms/form');
class RegistrationPage extends Page {

	open() {
		super.open('register');
	}

	/*
	 *Checks if a page is opened
	 * @returns {boolean}
	 */
	isPageOpened() {
		return this.getForm().isDisplayed();
	}

	getForm() {
		browser.$('.login-form').waitForExist(GLOBAL_TIMEOUT);
		return new Form(browser.$('.login-form'));
	}

	/*
	 *Initializes text on the registration page 
	 * @returns {String}
	 */
	getWelcomeText() {
		return browser.$('.login-header').getText();
	}

}

module.exports = RegistrationPage;