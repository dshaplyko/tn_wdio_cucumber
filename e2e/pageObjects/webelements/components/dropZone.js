const WebElement = require('../webelement');

class DropZone extends WebElement {

	uploadPhoto(image) {
		return this.rootEl.uploadFile(image);
	}

	setValue(value) {
		
		browser.execute(
			el => el.style.display = 'block',
			this.rootEl
		);
		this.rootEl.waitForDisplayed();
		return this.rootEl.setValue(value);
	}

}

module.exports = DropZone;