const { defineSupportCode } = require('cucumber');
const pages = require('../../pageObjects/pages');

defineSupportCode((cucumber) => {

    cucumber.When(/^I enter credentials$/, () => {
        return pages.atLoginPage().login();
    });

    cucumber.When(/^I enter "([^"]+)" in username field$/, (value) => {
        return pages.atLoginPage().getEmail().typeIn(value);
    });

    cucumber.When(/^I enter "([^"]+)" in password field$/, (value) => {
        return pages.atLoginPage().getPassword().typeIn(value);
    });
    
    cucumber.Then(/^Text of welcome message should be "([^"]+)"$/, (text) => {
        return expect(pages.atLoginPage().getWelcomeText()).to.equal(text);
    });
    
    cucumber.Then(/^the '(.*)' (is|is not) visible on the login page$/, (element, condition) => {
        switch (element.toLowerCase()) {
            case 'login field':
                return expect(pages.atLoginPage().getEmail().isVisible()).to.equal(condition === 'is');
            case 'password field':
                return expect(pages.atLoginPage().getPassword().isVisible()).to.equal(condition === 'is');
            case 'register button':
                return expect(pages.atLoginPage().getRegisterButton().isVisible()).to.equal(condition === 'is');    
        }
    });
    
    cucumber.When(/^I click '(.*)' button on the login page$/, (element) => {
        switch(element.toLowerCase()) {
            case 'register':
                return pages.atLoginPage().getRegisterButton().click();
            case 'login':
                return pages.atLoginPage().getLoginButton().click();
        }
    });
    
});