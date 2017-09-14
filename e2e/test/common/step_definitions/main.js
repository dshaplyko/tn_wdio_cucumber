const { defineSupportCode } = require('cucumber');
const MainPage = require('../../pageObjects/pages/mainPage');
const main = new MainPage();

defineSupportCode((cucumber) => {
    cucumber.When(/^I wait until main page is loaded$/, () => {
        return main.waitUntilNotesAreVisible();
    });

    cucumber.Then(/^I should be on main page$/, () => {
        return expect(main.toggleAppears()).to.be.true;
    });
});

