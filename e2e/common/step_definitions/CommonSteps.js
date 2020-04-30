const {
	Given,
	When,
	Then
} = require('cucumber');
const pages = require('../../pageObjects/pages');

Given(/^I am on '(.*)' page$/, page => {
	return pages.getPage(page).open();
});

When(/^I press browser's (back|forward) button$/, button => {
	if (button.toLowerCase() === 'back') {
		browser.back();
	} else {
		browser.forward();
	}
});

When(/^I wait for ([0-9]) seconds$/, number => {
	return browser.pause(number * 1000);
});

Then(/^'(.*)' page should be opened$/, page => {
	return expect(pages.getPage(page).isPageOpened()).to.be.true;
});