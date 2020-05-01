const WebElement = require('../webelement');

class DropZone extends WebElement {

	uploadPhoto(image) {
		return this.rootEl.uploadFile(image);
	}

	setValue(value) {
		browser.pause(3000);
		return this.rootEl.setValue(value);
	}

}

module.exports = DropZone;