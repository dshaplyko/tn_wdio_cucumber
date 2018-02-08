const { defineSupportCode } = require('cucumber');
const pages = require('../../pageObjects/pages');

defineSupportCode((cucumber) => {

    cucumber.Then(/^the '(.*)' (is|is not) visible on the (.*) page$/, (element, condition, page) => {
        return expect(pages.getPage(page).getLoginForm().getElement(element).isVisible()).to.equal(condition === 'is');
    });

    cucumber.When(/^I click (.*) on the (.*) page$/, (element, page) => {
        return pages.getPage(page).getLoginForm().getElement(element).click();
    });

});