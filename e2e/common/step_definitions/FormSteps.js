const {
	When,
	Then
} = require('cucumber');
const pages = require('../../pageObjects/pages');

Then(/^the '(.*)' (is|is not) visible on the (.*) page$/, (element, condition, page) => {
	return expect(pages.getPage(page).getForm().getElement(element).isDisplayed()).to.equal(condition === 'is');
});

When(/^I click (.*) on the (.*) page$/, (element, page) => {
	return pages.getPage(page).getForm().getElement(element).click();
});

When(/^I enter "(.*)" in (.*) on the (.*) page$/, (value, field, page) => {
	return pages.getPage(page).getForm().getElement(field).type(value);
});

Then(/^Text of welcome message on the (.*) page should be "([^"]+)"$/, (page, text) => {
	return expect(pages.getPage(page).getWelcomeText()).to.equal(text);
});

Then(/^the '(.*)' becomes (inactive|active) on the (.*) page$/, (button, condition, page) => {

	if (condition === 'inactive') {
		return expect(pages.getPage(page).getForm().getElement(button).isButtonActive()).to.equal('-1');
	}
	return expect(pages.getPage(page).getForm().getElement(button).isButtonActive()).to.equal('0');
});

When(/^I clear (.*) on the (.*) page$/, (field, page) => {
	return pages.getPage(page).getForm().getElement(field).clear();
});