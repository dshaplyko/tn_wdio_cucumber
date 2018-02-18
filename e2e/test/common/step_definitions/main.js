const { defineSupportCode } = require('cucumber');
const pages = require('../../pageObjects/pages');

defineSupportCode((cucumber) => {

    cucumber.Then(/^the list of notes should be displayed$/, () => {
        return expect(pages.atMainPage().getNotes().isVisible()).to.equal(true);
    });

    cucumber.Then(/^each of note entry has '(.*)'$/, (item) => {
        switch (item.toLowerCase()) {
            case 'title':
                return expect(pages.atMainPage().getNotes().getNoteTitle().isVisible()).to.equal(true);
            case 'subtitle':
                return expect(pages.atMainPage().getNotes().getNoteSubTitle().isVisible()).to.equal(true);
        }
    });

});