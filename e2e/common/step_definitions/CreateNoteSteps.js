const path = require('path');
const {
	When,
	Then
} = require('cucumber');
const pages = require('../../po/pages');
const utils = require('../support/utils');
const testData = require('../support/data.json');

Then(/^the '(.*)' button should be (inactive|active)$/, (button, condition) => {

	if (condition === 'inactive') {
		return expect(pages.atCreateNotePage().getButton(button).isButtonActive()).toEqual('-1');
	}
	return expect(pages.atCreateNotePage().getButton(button).isButtonActive()).toEqual('0');
});

When(/^I type '(.*)' into the '(.*)' field$/, (text, field) => {
	if (text === 'random string and store it') {
		let randomString = utils.generateString(6);
		global.stored_title = randomString;
		return pages.atCreateNotePage().getField(field).type(randomString);
	}
	return pages.atCreateNotePage().getField(field).type(text);
});

When(/^I click '(.*)' button to continue$/, (button) => {
	return pages.atCreateNotePage().getButton(button).click();
});

When(/^I upload a photo$/, () => {
	const filePath = path.join(__dirname, testData.testImage);
	return pages.atCreateNotePage().getDropZone().uploadPhoto(filePath);
});

When(/^I click on the map$/, () => {
	return pages.atCreateNotePage().getMap().click();
});