const Page = require('./page');
class ProfilePage extends Page {

	/*
	 *Checks if a page is opened
	 * @returns {boolean}
	 */
	isPageOpened() {
		browser.$('.header-profile').waitForExist({timeout: GLOBAL_TIMEOUT});
		return browser.$('.header-profile').isDisplayed();
	}

	/*
	 *Get text from the profile header
	 * @returns {string}
	 */
	getHeaderProfile() {
		return browser.$('.header-profile h1').getText();
	}

}

module.exports = ProfilePage;