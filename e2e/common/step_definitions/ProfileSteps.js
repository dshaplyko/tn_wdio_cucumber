const {
	Given,
	When,
	Then
} = require('cucumber');
const pages = require('../../pageObjects/pages');

Then(/^the text of the header should be '(.*)'$/, (text) => {
	return expect(pages.atProfilePage().getHeaderProfile()).to.equal(text);
});