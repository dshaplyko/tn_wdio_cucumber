const {
	When,
	Then
} = require('cucumber');
const pages = require('../../pageObjects/pages');

Then(/^the Side Menu is visible$/, () => {
	return expect(pages.atBasePage().getSideMenu().isDisplayed()).to.equal(true);
});

Then(/^the '(.*)' (is|is not) visible in the Side Menu$/, (element, condition) => {
	return expect(pages.atBasePage().getSideMenu().getElement(element).isDisplayed()).to.equal(condition === 'is');
});

When(/^I click '(.*)' from the Side Menu$/, (link) => {
	return pages.atBasePage().getSideMenu().getElement(link).click();
});