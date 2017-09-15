const { defineSupportCode } = require('cucumber');
const ModalWindow = require('../../pageObjects/modals/modal');
const modal = new ModalWindow();


defineSupportCode((cucumber) => {
    cucumber.Then(/^Error message should be displayed$/, () => {
        return expect(modal.isErrorVisible()).to.be.true;
    });

    cucumber.Then(/^Text of error message should be "([^"]+)"$/, (text) => {
        return expect(modal.getModalText()).to.equal(text);
    });

    cucumber.When(/^I wait until modal appears$/, () => {
        return modal.waitModalVisible();
    });
    
    cucumber.When(/^I click OK button in modal$/, () => {
        return modal.clickOk();
    });
});