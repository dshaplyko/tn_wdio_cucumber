const { defineSupportCode } = require('cucumber');
const pages = require('../../pageObjects/pages');

defineSupportCode((cucumber) => {

    cucumber.Then(/^the '(.*)' link (is|is not) visible in the footer$/, (element, condition) => {
        return expect(pages.atBasePage().getFooter().getElement(element).isVisible()).to.equal(condition === 'is');
    });

    cucumber.Then(/^the Logo is visible in the footer$/, () => {
        return expect(pages.atBasePage().getFooter().isLogoVisible()).to.equal(true);
    });

});