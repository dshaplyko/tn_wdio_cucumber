const { defineSupportCode } = require('cucumber');
const pages = require('../../pageObjects/pages');
const modals = require('../../pageObjects/modals/');

defineSupportCode((cucumber) => {


    cucumber.When(/^I click OK button in modal$/, () => {
        return modals.atModal().getOkButton().click();
    });

    cucumber.Then(/^Error message should be displayed$/, () => {
        return expect(modals.atModal().isErrorVisible()).to.be.true;
    });

    cucumber.Then(/^Text of error message should be "([^"]+)"$/, (text) => {
        return expect(modals.atModal().getModalText()).to.equal(text);
    });

});