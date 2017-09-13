const { defineSupportCode } = require('cucumber');
const LoginPage = require('../../pageObjects/pages/loginPage');
const login = new LoginPage();
const MainPage = require('../../pageObjects/pages/mainPage');
const main = new MainPage();
const { expect } = require('chai');

defineSupportCode((cucumber) => {
    cucumber.Given(/^I am on login page$/, () => {
        return login.open();
    });
    
    cucumber.When(/^I enter credentials$/, () => {
        return login.login();
    });

});

