const path = require('path');
const {
	When,
	Then
} = require('cucumber');
const pages = require('../../pageObjects/pages');
const utils = require('../support/utils');

Then(/^the '(.*)' button should be (inactive|active)$/, (button, condition) => {

	if (condition === 'inactive') {
		return expect(pages.atCreateNotePage().getButton(button).isButtonActive()).to.equal('-1');
	}
	return expect(pages.atCreateNotePage().getButton(button).isButtonActive()).to.equal('0');
});

When(/^I type '(.*)' into the '(.*)' field$/, (text, field) => {
	if (text === 'random string and store it') {
		let randomString = utils.generateString(6);
		global.stored_title = randomString;
		return pages.atCreateNotePage().getField(field).typeIn(randomString);
	}
	return pages.atCreateNotePage().getField(field).typeIn(text);
});

When(/^I click '(.*)' button to continue$/, (button) => {
	return pages.atCreateNotePage().getButton(button).click();
});

When(/^I upload a photo$/, () => {
	const filePath = path.join(__dirname, '../support/test.png');
	//let remoteFilePath = browser.uploadFile(filePath);
	return pages.atCreateNotePage().getDropZone().setValue(filePath);
});

When(/^I click on the map$/, () => {
	return pages.atCreateNotePage().getMap().click();
});