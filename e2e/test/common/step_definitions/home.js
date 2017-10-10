const { defineSupportCode } = require('cucumber');
const HomePage = require('../../pageObjects/pages/homePage');
const home = new HomePage();

defineSupportCode((cucumber) => {

    cucumber.When(/^I click '(.*)' button on the home page$/, (item) => {
        switch (item.toLowerCase()) {
            case 'get started': return home.clickGetStarted(); break;
            case 'login': return home.clickLogIn(); break;
            case 'sign up': return home.clickSignUp(); break;
        } 
    });
    
});