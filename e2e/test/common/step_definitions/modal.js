const { defineSupportCode } = require('cucumber');
const pages = require('../../pageObjects/pages');

defineSupportCode((cucumber) => {

    cucumber.When(/^I click OK button in modal$/, () => {
        return pages.atBasePage().getModal().getOkButton().click();
    });

    cucumber.Then(/^Alert message should be displayed$/, () => {
        return expect(pages.atBasePage().getModal().isErrorVisible()).to.be.true;
    });

    cucumber.Then(/^Text of the alert message should be "([^"]+)"$/, (text) => {
        return expect(pages.atBasePage().getModal().getModalText()).to.equal(text);
    });

});