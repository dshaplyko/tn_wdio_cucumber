const Page = require('./page');
const Form = require('../webelements/forms/form');

class LoginPage extends Page {

	open() {
		super.open('login');
	}

	/*
	 *Checks if a page is opened
	 * @returns {boolean}
	 */
	isPageOpened() {
		return this.getForm().isDisplayed();
	}

	/*
	 *Initializes Form 
	 * @returns {Form}
	 */
	getForm() {
		browser.$('.login-form').waitForExist(GLOBAL_TIMEOUT);
		return new Form(browser.$('.login-form'));
	}

	/*
	 *Initializes text on the login page 
	 * @returns {String}
	 */
	getWelcomeText() {
		return browser.$('.login-header').getText();
	}

}

module.exports = LoginPage;