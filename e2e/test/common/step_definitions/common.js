const { defineSupportCode } = require('cucumber');
const ModalWindow = require('../../pageObjects/modals/modal');
const modal = new ModalWindow();
const provider = require('../../support/pageObjectProvider');


defineSupportCode((cucumber) => {

    cucumber.Given(/^I am on '([^"]+)' page$/, (pageName) => {
        return provider.getPageObjects(pageName).open();
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

    cucumber.Then(/^Error message should be displayed$/, () => {
        return expect(modal.isErrorVisible()).to.be.true;
    });

    cucumber.Then(/^Text of error message should be "([^"]+)"$/, (text) => {
        return expect(modal.getModalText()).to.equal(text);
    });

    cucumber.Then(/^'(.*)' on the '(login|registration)' page should be visible$/, (item, pageName) => {
        switch (item.toLowerCase()) {
            case 'first name': return expect(provider.getPageObjects(pageName).firstNameIsVisible()).to.be.true; break;
            case 'last name': return expect(provider.getPageObjects(pageName).lastNameIsVisible()).to.be.true; break;
            case 'email': return expect(provider.getPageObjects(pageName).emailIsVisible()).to.be.true; break;
            case 'username': return expect(provider.getPageObjects(pageName).usernameIsVisible()).to.be.true; break;
            case 'password': return expect(provider.getPageObjects(pageName).passwordFieldIsVisible()).to.be.true; break;
            case 'birthday': return expect(provider.getPageObjects(pageName).bithdayIsVisible()).to.be.true; break;
            case 'register button': return expect(provider.getPageObjects(pageName).registerLinkIsVisible()).to.be.true; break;
            case 'login field': return expect(provider.getPageObjects(pageName).loginFieldIsVisible()).to.be.true; break;
        }
    });
});