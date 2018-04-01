const { defineSupportCode } = require('cucumber');
const pages = require('../../pageObjects/pages');

defineSupportCode((cucumber) => {

    cucumber.Then(/^the text of the header should be '(.*)'$/, (text) => {
        return expect(pages.atProfilePage().getHeaderProfile()).to.equal(text);
    });

});