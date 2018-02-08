const { defineSupportCode } = require('cucumber');
const pages = require('../../pageObjects/pages');
const ModalWindow = require('../../pageObjects/modals/modal');
const modal = new ModalWindow();

defineSupportCode((cucumber) => {

    cucumber.Given(/^I am on '([^"]+)' page$/, (page) => {
        return pages.getPage(page).open();
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

    cucumber.Then(/^'(.*)' page should be opened$/, (page) => {
        return expect(pages.getPage(page).isPageOpened()).to.be.true; 
    });

});