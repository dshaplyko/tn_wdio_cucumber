const { defineSupportCode } = require('cucumber');
const pages = require('../../pageObjects/pages');

defineSupportCode((cucumber) => {

    cucumber.Then(/^the '(.*)' button (is|is not) visible in the header$/, (element, condition) => {
        switch(element.toLowerCase()) {
            case 'login':
                return expect(pages.atBasePage().getHeader().getLoginButton().isVisible()).to.equal(condition === 'is');
            case 'sign up':
                return expect(pages.atBasePage().getHeader().getSignUp().isVisible()).to.equal(condition === 'is');
        }
    });

    cucumber.Then(/^the Logo is visible in the header$/, () => {
        return expect(pages.atBasePage().getHeader().getLogo().isVisible()).to.equal(true);
    });

    cucumber.Then(/^I click on on the Logo$/, () => {
        return pages.atBasePage().getHeader().getLogo().click();
    });

});