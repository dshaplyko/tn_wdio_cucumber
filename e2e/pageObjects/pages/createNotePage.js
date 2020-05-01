const Page = require('./page');
const Field = require('../webelements/fields/field');
const Button = require('../webelements/buttons/button');
const Map = require('../webelements/components/map');
const DropZone = require('../webelements/components/dropZone');

class CreateNotePage extends Page {

	/*
	 *Checks if a page is opened
	 * @returns {boolean}
	 */
	isPageOpened() {
		browser.$('.col-xs-12').waitForExist(GLOBAL_TIMEOUT);
		return browser.$('.col-xs-12').isDisplayed();
	}

	getField(field) {
		switch (field.toLowerCase()) {
			case 'title':
				return new Field(browser.$('input[name="title"]'));
			case 'subtitle':
				return new Field(browser.$('input[name="subtitle"]'));
			case 'content':
				return new Field(browser.$('textarea[name="text"]'));
		}
	}

	getButton(button) {
		switch (button.toLowerCase()) {
			case 'next':
			case 'finish':
				return new Button(browser.$('#nextButton'));
			case 'back':
				return new Button(browser.$('#backButton'));
		}
	}

	/*
	 *Initializes a map component
	 * @returns {Map}
	 */
	getMap() {
		browser.$('.map').waitForExist(GLOBAL_TIMEOUT);
		return new Map(browser.$('.map'));
	}

	/*
	 *Initializes a drop zone component
	 * @returns {Drop zone}
	 */
	getDropZone() {
		browser.$('.drop-zone').waitForExist(GLOBAL_TIMEOUT);
		return new DropZone(browser.$('.drop-zone'));
	}

}

module.exports = CreateNotePage;