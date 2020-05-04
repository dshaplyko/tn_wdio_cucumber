const Page = require('./page');

class GalleryPage extends Page {

	open() {
		super.open('gallery');
	}

	/*
	 *Checks if a page is opened
	 * @returns {boolean}
	 */
	isPageOpened() {
		browser.$('.gallery-row').waitForExist({timeout: GLOBAL_TIMEOUT});
		return browser.$('.gallery-row').isDisplayed();
	}

}

module.exports = GalleryPage;