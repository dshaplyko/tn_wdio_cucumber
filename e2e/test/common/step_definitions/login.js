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

    cucumber.When(/^I click login button$/, () => {
        return login.clickLogin();
    });

    cucumber.When(/^I click register link$/, () => {
        return login.clickRegisterButton();
    });
    
    cucumber.Then(/^Login field should be visible$/, () => {
        return expect(login.loginFieldIsVisible()).to.be.true;
    });

    cucumber.Then(/^Password field should be visible$/, () => {
        return expect(login.passwordFieldIsVisible()).to.be.true;
    });

    cucumber.Then(/^Registration link should be visible$/, () => {
        return expect(login.registerLinkIsVisible()).to.be.true;
    });   
    
    cucumber.Then(/^Text of welcome message should be "([^"]+)"$/, (text) => {
        return expect(login.getWelcomeText()).to.equal(text);
    }); 
});