const { defineSupportCode } = require('cucumber');
const MainPage = require('../../pageObjects/pages/mainPage');
const main = new MainPage();

defineSupportCode((cucumber) => {
    cucumber.Then(/^I should be on main page$/, () => {
        browser.pause(5000);
        return expect(main.notesShouldBeVisible()).to.be.true;
    });
});

