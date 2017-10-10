const { defineSupportCode } = require('cucumber');
const LoginPage = require('../../pageObjects/pages/loginPage');
const login = new LoginPage();


defineSupportCode((cucumber) => {

    cucumber.When(/^I enter credentials$/, () => {
        return login.login();
    });

    cucumber.When(/^I enter "([^"]+)" in username field$/, (value) => {
        return login.enterEmail(value);
    });

    cucumber.When(/^I enter "([^"]+)" in password field$/, (value) => {
        return login.enterPassword(value);
    });
    
    cucumber.Then(/^Text of welcome message should be "([^"]+)"$/, (text) => {
        return expect(login.getWelcomeText()).to.equal(text);
    }); 

    cucumber.Then(/^I should be on login page$/, () => {
        return expect(login.loginBodyIsVisible()).to.be.true;
    });
});