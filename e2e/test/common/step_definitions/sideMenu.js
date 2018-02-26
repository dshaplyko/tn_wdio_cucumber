const { defineSupportCode } = require('cucumber');
const pages = require('../../pageObjects/pages');

defineSupportCode((cucumber) => {

    cucumber.Then(/^the Side Menu is visible$/, () => {
        return expect(pages.atBasePage().getSideMenu().isVisible()).to.equal(true);
    });

    cucumber.Then(/^the '(.*)' (is|is not) visible in the Side Menu$/, (element, condition) => {
        return expect(pages.atBasePage().getSideMenu().getElement(element).isVisible()).to.equal(condition === 'is');
    });

    cucumber.When(/^I click '(.*)' from the Side Menu$/, (link) => {
        return pages.atBasePage().getSideMenu().getElement(link).click();
    });

});