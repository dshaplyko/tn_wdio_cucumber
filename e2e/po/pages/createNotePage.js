const Page = require('./page');
const PageElement = require('../webelements/PageElement');
const DropZone = require('../webelements/components/dropZone');

class CreateNotePage extends Page {

	/*
	 *Checks if a page is opened
	 * @returns {boolean}
	 */
	isPageOpened() {
		browser.$('.col-xs-12').waitForExist({timeout: GLOBAL_TIMEOUT});
		return browser.$('.col-xs-12').isDisplayed();
	}

	getField(field) {

		if (field.toLowerCase() === 'content') {
			return new PageElement(browser.$('textarea[name="text"]'));
		} else {
			return new PageElement(browser.$(`input[name='${field.toLowerCase()}']`));
		}
		
	}

	getButton(button) {
		switch (button.toLowerCase()) {
			case 'next':
			case 'finish':
				return new PageElement(browser.$('#nextButton'));
			case 'back':
				return new PageElement(browser.$('#backButton'));
		}
	}

	/*
	 *Initializes a map component
	 * @returns {Map}
	 */
	getMap() {
		browser.$('.map').waitForDisplayed({timeout: GLOBAL_TIMEOUT});
		return new PageElement(browser.$('.map'));
	}

	/*
	 *Initializes a drop zone component
	 * @returns {Drop zone}
	 */
	getDropZone() {
		browser.$('.drop-zone').waitForDisplayed({timeout: GLOBAL_TIMEOUT});
		return new DropZone(browser.$('.drop-zone input'));
	}

}

module.exports = CreateNotePage;