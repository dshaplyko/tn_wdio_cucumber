const {
	When,
	Then
} = require('cucumber');
const pages = require('../../po/pages');

Then(/^the '(.*)' button (is|is not) visible in the header$/, (element, condition) => {
	switch (element.toLowerCase()) {
		case 'login':
			return expect(pages.atBasePage().getHeader().getLoginButton().isDisplayed()).toEqual(condition === 'is');
		case 'sign up':
			return expect(pages.atBasePage().getHeader().getSignUp().isDisplayed()).toEqual(condition === 'is');
	}
});

Then(/^the Logo is visible in the header$/, () => {
	return expect(pages.atBasePage().getHeader().getLogo().isDisplayed()).toEqual(true);
});

When(/^I click on the Logo$/, () => {
	return pages.atBasePage().getHeader().getLogo().click();
});

When(/^I click on the menu button$/, () => {
	return pages.atBasePage().getHeader().getMenuButton().click();
});