const { defineSupportCode } = require('cucumber');
const HomePage = require('../../pageObjects/pages/homePage');
const home = new HomePage();

defineSupportCode((cucumber) => {

    cucumber.When(/^I click '(.*)' button on the home page$/, (item) => {
        switch (item.toLowerCase()) {
            case 'get started': 
                return home.getStartedButton().click();
            case 'login': 
                return home.getLoginButton().click();
            case 'sign up': 
                return home.getSignUp().click();
        } 
    });
    
});