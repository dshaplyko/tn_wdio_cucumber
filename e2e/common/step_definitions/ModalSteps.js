const {
	When,
	Then
} = require('cucumber');
const pages = require('../../pageObjects/pages');

When(/^I click OK button in modal$/, () => {
	return pages.atBasePage().getModal().getOkButton().click();
});

Then(/^Alert message should be displayed$/, () => {
	return expect(pages.atBasePage().getModal().isErrorVisible()).to.be.true;
});

Then(/^Text of the alert message should be "([^"]+)"$/, (text) => {
	return expect(pages.atBasePage().getModal().getModalText()).to.equal(text);
});