const { defineSupportCode } = require('cucumber');
const pages = require('../../pageObjects/pages');

defineSupportCode((cucumber) => {

    cucumber.Then(/^the '(.*)' element (is|is not) visible on the Note page$/, (item, condition) => {
        switch(item.toLowerCase()) {
            case 'map':
                return expect(pages.atNotePage().getMap().isVisible()).to.equal(condition === 'is');
            case 'content':
                return expect(pages.atNotePage().isNoteTextVisible()).to.equal(condition === 'is');
            case 'close button':
                return expect(pages.atNotePage().getCloseButton().isVisible()).to.equal(condition === 'is');
            case 'image gallery':
                return expect(pages.atNotePage().getGallery().isVisible()).to.equal(condition === 'is');
            case 'sign':
                return expect(pages.atNotePage().isSignVisible()).to.equal(condition === 'is');
        }
    });

    cucumber.When(/^I click close button on the Note$/, () => {
        return pages.atNotePage().getCloseButton().click();
    });

    cucumber.Then(/^the title of the opened note should be equal to the stored one$/, () => {
        return expect(pages.atNotePage().getTitle()).to.equal(global.stored_title);
    });

});