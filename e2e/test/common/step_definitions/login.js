const { defineSupportCode } = require('cucumber');
const LoginPage = require('../../pageObjects/pages/loginPage');
const login = new LoginPage();


defineSupportCode((cucumber) => {

    cucumber.When(/^I enter credentials$/, () => {
        return login.login();
    });

    cucumber.When(/^I enter "([^"]+)" in username field$/, (value) => {
        return login.getEmail().typeIn(value);
    });

    cucumber.When(/^I enter "([^"]+)" in password field$/, (value) => {
        return login.getPassword().typeIn(value);
    });
    
    cucumber.Then(/^Text of welcome message should be "([^"]+)"$/, (text) => {
        return expect(login.getWelcomeText()).to.equal(text);
    });
    
    cucumber.Then(/^the '(.*)' (is|is not) visible on the login page$/, (element, condition) => {
        switch (element.toLowerCase()) {
            case 'login field':
                return expect(login.getEmail().isVisible()).to.equal(condition === 'is');
            case 'password field':
                return expect(login.getPassword().isVisible()).to.equal(condition === 'is');
            case 'register button':
                return expect(login.getRegisterButton().isVisible()).to.equal(condition === 'is');    
        }
    });
    
    cucumber.When(/^I click '(.*)' button on the login page$/, (element) => {
        switch(element.toLowerCase()) {
            case 'register':
                return login.getRegisterButton().click();
            case 'login':
                return login.getLoginButton().click();
        }
    });
    
});