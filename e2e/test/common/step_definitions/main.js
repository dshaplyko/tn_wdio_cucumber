const { defineSupportCode } = require('cucumber');
const pages = require('../../pageObjects/pages');

defineSupportCode((cucumber) => {

    cucumber.Then(/^the list of notes should be displayed$/, () => {
        return expect(pages.atMainPage().getNotes().isVisible()).to.equal(true);
    });

    cucumber.Then(/^the '(.*)' element (is|is not) existing on the Main page$/, (element, condition) => {
        switch(element.toLowerCase()) {
            case 'filter':
                return expect(pages.atMainPage().getFilter().isExisting()).to.equal(condition === 'is');
            case 'toggle':
                return expect(pages.atMainPage().getToggle().isExisting()).to.equal(condition === 'is');
        }      
    });

    /*
    *It is needed to rewrite the step so we will check if each of note entry contains expected field
    */
    cucumber.Then(/^each of note entry has '(.*)'$/, (item) => {
        switch (item.toLowerCase()) {
            case 'title':
                return expect(pages.atMainPage().getNotes().getNoteTitle().isVisible()).to.equal(true);
            case 'subtitle':
                return expect(pages.atMainPage().getNotes().getNoteSubTitle().isVisible()).to.equal(true);
        }
    });

    cucumber.When(/^I click on the random note item$/, () => {
        let notes = pages.atMainPage().getNotes().getNote();
        return browser.elementIdClick(notes.value[Math.floor(Math.random() * (notes.value.length - 1))].ELEMENT);
    });

});
