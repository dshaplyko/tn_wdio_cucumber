const WebElement = require('../webelement');
const Button = require('../buttons/button');

class Modal extends WebElement {
	constructor(el) {
		super(el);
	}

	/*
	 * Checks is a modal windows is visible
	 * @returns {boolean}
	 */
	modalIsDisplayed() {
		return this.rootEl.isDisplayed();
	}

	/*
	 *Initializes the Ok button in the modal
	 * @returns {Button}
	 */
	getOkButton() {
		return new Button(this.rootEl.$('button.confirm'));
	}

	/*
	 *Gets text of the modal window
	 * @returns text message
	 */
	getModalText() {
		return this.rootEl.$("p[style='display: block;']").getText();
	}

	isErrorVisible() {
		return this.rootEl.$("p[style='display: block;']").isDisplayed();
	}
}

module.exports = Modal;