const { defineSupportCode } = require('cucumber');
const HomePage = require('../../pageObjects/pages/homePage');
const home = new HomePage();
const Page = require('../../pageObjects/pages/page');
const page = new Page();

defineSupportCode((cucumber) => {

    cucumber.When(/^I click '(.*)' button on the home page$/, (item) => {
        switch (item.toLowerCase()) {
            case 'get started': 
                return home.getStartedButton().click();
            case 'login': 
                return page.getHeader().getLoginButton().click();
            case 'sign up': 
                return page.getHeader().getSignUp().click();
        } 
    });
    
});