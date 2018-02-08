const { defineSupportCode } = require('cucumber');
const pages = require('../../pageObjects/pages');

defineSupportCode((cucumber) => {

    cucumber.When(/^I enter credentials$/, () => {
        pages.atLoginPage().getLoginForm().getElement('email field').typeIn('test@test.ru');
        pages.atLoginPage().getLoginForm().getElement('password field').typeIn('password');
        return pages.atLoginPage().getLoginForm().getElement('login button').click();
    });

    cucumber.When(/^I enter "([^"]+)" in username field$/, (value) => {
        return pages.atLoginPage().getLoginForm().getElement('email field').typeIn(value);
    });

    cucumber.When(/^I enter "([^"]+)" in password field$/, (value) => {
        return pages.atLoginPage().getLoginForm().getElement('password field').typeIn(value);
    });
    
    cucumber.Then(/^Text of welcome message should be "([^"]+)"$/, (text) => {
        return expect(pages.atLoginPage().getWelcomeText()).to.equal(text);
    });
    
});