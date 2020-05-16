const {
	When,
	Then
} = require('cucumber');
const pages = require('../../po/pages');

Then(/^the Side Menu is visible$/, () => {
	return expect(pages.atBasePage().getSideMenu().isDisplayed()).toEqual(true);
});

Then(/^the '(.*)' (is|is not) visible in the Side Menu$/, (element, condition) => {
	return expect(pages.atBasePage().getSideMenu().getElement(element).isDisplayed()).toEqual(condition === 'is');
});

When(/^I click '(.*)' from the Side Menu$/, (link) => {
	return pages.atBasePage().getSideMenu().getElement(link).click();
});