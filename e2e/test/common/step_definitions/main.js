const { defineSupportCode } = require('cucumber');
const pages = require('../../pageObjects/pages');

defineSupportCode((cucumber) => {

    cucumber.Then(/^the list of notes should be displayed$/, () => {
        return expect(pages.atMainPage().getNotesGrid().isVisible()).to.equal(true);
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
        let countTitles = pages.atMainPage().getNotesGrid().getNoteTitles().value.length;
        let countSubTitles = pages.atMainPage().getNotesGrid().getNoteSubTitles().value.length;
        let countNotes = pages.atMainPage().getNotesGrid().getNotes().value.length;

        if (item.toLowerCase() === 'title') {
            return expect(countNotes).to.equal(countTitles);
        }
        return expect(countNotes).to.equal(countSubTitles);
    });

    cucumber.When(/^I click on the random note item$/, () => {
        let notes = pages.atMainPage().getNotesGrid().getNotes();
        return browser.elementIdClick(notes.value[Math.floor(Math.random() * (notes.value.length - 1))].ELEMENT);
    });

});
