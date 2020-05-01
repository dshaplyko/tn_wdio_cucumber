const WebElement = require('../webelement');

class Field extends WebElement {

	typeIn(text) {
		return this.rootEl.setValue(text);
	}

	clear() {
		return this.rootEl.clearElement();
	}
}

module.exports = Field;