const Page = require('./page');
const PageElement = require('../webelements/PageElement');
const Gallery = require('../webelements/components/gallery');

class NotePage extends Page {

	/*
	 *Checks if a page is opened
	 * @returns {boolean}
	 */
	isPageOpened() {
		browser.$('.note-background').waitForExist({timeout: GLOBAL_TIMEOUT});
		return browser.$('.note-background').isDisplayed();
	}

	/*
	 *Gets a title of an opened note
	 * @returns {String}
	 */
	getTitle() {
		return browser.$('#titleInput').getText();
	}

	/*
	 *Gets a close button
	 * @returns {Button}
	 */
	getCloseButton() {
		return new PageElement(browser.$('.back-icon'));
	}

	/*
	 *Check if a map is visible on the page
	 * @returns {Map}
	 */
	getMap() {
		return new PageElement(browser.$('.map'));
	}

	isNoteTextVisible() {
		return browser.$('.note-text').isDisplayed();
	}

	getGallery() {
		return new Gallery(browser.$('.gallery-row'));
	}

	isSignVisible() {
		return browser.$('.sign').isDisplayed();
	}

}

module.exports = NotePage;