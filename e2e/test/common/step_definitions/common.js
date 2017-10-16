const { defineSupportCode } = require('cucumber');
const ModalWindow = require('../../pageObjects/modals/modal');
const modal = new ModalWindow();
const provider = require('../../support/pageObjectProvider');


defineSupportCode((cucumber) => {

    cucumber.Given(/^I am on '([^"]+)' page$/, (page) => {
        return provider.getPage(page.toLowerCase()).open();
    });

    cucumber.When(/^I wait until modal appears$/, () => {
        return modal.waitModalVisible();
    });

    cucumber.When(/^I press browser's back button$/, () => {
        return browser.back();
    });
    
    cucumber.When(/^I click OK button in modal$/, () => {
        return modal.clickOk();
    });

    cucumber.When(/^I wait for ([0-9]) seconds$/, (number) => {
        return browser.pause(number * 1000)
    });

    cucumber.When(/^I click '(.*)' button on the '(.*)' page$/, (item, page) => {
        switch (item.toLowerCase()) {
            case 'sign in': return provider.getPage(page).clickSignIn(); break;
            case 'login': return provider.getPage(page).clickLogin(); break;
            case 'register': return provider.getPage(page).clickRegisterButton(); break;
        }
    });

    cucumber.Then(/^Error message should be displayed$/, () => {
        return expect(modal.isErrorVisible()).to.be.true;
    });

    cucumber.Then(/^Text of error message should be "([^"]+)"$/, (text) => {
        return expect(modal.getModalText()).to.equal(text);
    });

    cucumber.Then(/^'(.*)' on the '(login|registration)' page should be visible$/, (item, page) => {
        switch (item.toLowerCase()) {
            case 'first name': 
                return expect(provider.getPage(page).firstNameIsVisible()).to.be.true; 
            case 'last name': 
                return expect(provider.getPage(page).lastNameIsVisible()).to.be.true;
            case 'email': 
                return expect(provider.getPage(page).emailIsVisible()).to.be.true; 
            case 'username': 
                return expect(provider.getPage(page).usernameIsVisible()).to.be.true;
            case 'password': 
                return expect(provider.getPage(page).passwordFieldIsVisible()).to.be.true; 
            case 'birthday': 
                return expect(provider.getPage(page).bithdayIsVisible()).to.be.true; 
            case 'register button': 
                return expect(provider.getPage(page).registerLinkIsVisible()).to.be.true; 
            case 'login field': 
                return expect(provider.getPage(page).loginFieldIsVisible()).to.be.true; 
        }
    });

    cucumber.Then(/^'(.*)' page should be opened$/, (page) => {
        return expect(provider.getPage(page.toLowerCase()).isPageOpened()).to.be.true; 
    });

});