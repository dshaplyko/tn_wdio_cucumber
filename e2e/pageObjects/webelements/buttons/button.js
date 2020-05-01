const WebElement = require('../webelement');

class Button extends WebElement {

	constructor(el) {
		super(el);
	}

	click() {
		return this.rootEl.click();
	}

	isButtonActive() {
		return this.rootEl.getAttribute('tabIndex');
	}
}

module.exports = Button;