const { defineSupportCode } = require('cucumber');
const pages = require('../../pageObjects/pages');
const testData = require('../support/data');


defineSupportCode((cucumber) => {

    cucumber.When(/^I enter credentials$/, () => {
        let username = testData['username'];
        let password = testData['password'];

        pages.atLoginPage().getForm().getElement('email field').typeIn(username);
        pages.atLoginPage().getForm().getElement('password field').typeIn(password);
        return pages.atLoginPage().getForm().getElement('login button').click();
    });

    cucumber.When(/^I enter "([^"]+)" in username field$/, (value) => {
        return pages.atLoginPage().getForm().getElement('email field').typeIn(value);
    });

    cucumber.When(/^I enter "([^"]+)" in password field$/, (value) => {
        return pages.atLoginPage().getForm().getElement('password field').typeIn(value);
    });
    
    cucumber.Then(/^Text of welcome message should be "([^"]+)"$/, (text) => {
        return expect(pages.atLoginPage().getWelcomeText()).to.equal(text);
    });
    
});