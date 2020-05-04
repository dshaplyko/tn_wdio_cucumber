const {
	When,
} = require('cucumber');
const pages = require('../../po/pages');


When(/^I click '(.*)' button$/, (item) => {
	switch (item.toLowerCase()) {
		case 'get started':
			return pages.atHomePage().getStartedButton().click();
		case 'login':
			return pages.atBasePage().getHeader().getLoginButton().click();
		case 'sign up':
			return pages.atBasePage().getHeader().getSignUp().click();
	}
});