const {
	Then
} = require('cucumber');
const pages = require('../../po/pages');

Then(/^the '(.*)' link (is|is not) visible in the footer$/, (element, condition) => {
	return expect(pages.atBasePage().getFooter().getElement(element).isDisplayed()).toEqual(condition === 'is');
});

Then(/^the Logo is visible in the footer$/, () => {
	return expect(pages.atBasePage().getFooter().getLogo().isDisplayed()).toEqual(true);
});