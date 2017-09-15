const { defineSupportCode } = require('cucumber');
const LoginPage = require('../../pageObjects/pages/loginPage');
const login = new LoginPage();


defineSupportCode((cucumber) => {
    cucumber.Given(/^I am on login page$/, () => {
        return login.open();
    });
    
    cucumber.When(/^I enter credentials$/, () => {
        return login.login();
    });

    cucumber.When(/^I enter "([^"]+)" in username field$/, (value) => {
        return login.enterEmail(value);
    });

    cucumber.When(/^I enter "([^"]+)" in password field$/, (value) => {
        return login.enterPassword(value);
    });

    cucumber.When(/^I click login button$/, () => {
        return login.clickLogin();
    });

    cucumber.When(/^I click register link$/, () => {
        return login.clickRegisterButton();
    });
});