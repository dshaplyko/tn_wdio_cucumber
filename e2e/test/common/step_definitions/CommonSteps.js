const { defineSupportCode } = require('cucumber');
const pages = require('../../pageObjects/pages');

defineSupportCode((cucumber) => {

    cucumber.Given(/^I am on '(.*)' page$/, (page) => {
        return pages.getPage(page).open();
    });

    cucumber.When(/^I press browser's (back|forward) button$/, (button) => {
        button.toLowerCase() === 'back' ? browser.back() : browser.forward();
    });
    
    cucumber.When(/^I wait for ([0-9]) seconds$/, (number) => {
        return browser.pause(number * 1000)
    });

    cucumber.Then(/^'(.*)' page should be opened$/, (page) => {
        return expect(pages.getPage(page).isPageOpened()).to.be.true; 
    });
});