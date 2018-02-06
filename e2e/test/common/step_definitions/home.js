const { defineSupportCode } = require('cucumber');
const pages = require('../../pageObjects/pages');

defineSupportCode((cucumber) => {

    cucumber.When(/^I click '(.*)' button on the home page$/, (item) => {
        switch (item.toLowerCase()) {
            case 'get started': 
                return pages.getPage('home').getStartedButton().click();
            case 'login': 
                return pages.atBasePage().getHeader().getLoginButton().click();
            case 'sign up': 
                return pages.atBasePage().getHeader().getSignUp().click();
        } 
    });
    
});