const { defineSupportCode } = require('cucumber');
const pages = require('../../pageObjects/pages');

defineSupportCode((cucumber) => {

    cucumber.Then(/^the list of notes should be displayed$/, () => {
        return expect(pages.atMainPage().getNotesGrid().isVisible()).to.equal(true);
    });

    cucumber.Then(/^the '(.*)' element (is|is not) existing on the Main page$/, (element, condition) => {
        switch(element.toLowerCase()) {
            case 'filter':
                return expect(pages.atMainPage().getFilterDropdown().isExisting()).to.equal(condition === 'is');
            case 'toggle':
                return expect(pages.atMainPage().getToggle().isExisting()).to.equal(condition === 'is');
        }      
    });

    cucumber.Then(/^each of note entry has '(.*)'$/, (item) => {
        let countTitles = pages.atMainPage().getNotesGrid().getNoteTitles().value.length;
        let countSubTitles = pages.atMainPage().getNotesGrid().getNoteSubTitles().value.length;
        let countNotes = pages.atMainPage().getNotesGrid().getNotes().value.length;
        const valueToCompare = item.toLowerCase() === 'title' ? countTitles : countSubTitles;

        return expect(countNotes).to.equal(valueToCompare);
    });

    cucumber.When(/^I click on a random note item and store its title$/, () => {
        let notes = pages.atMainPage().getNotesGrid().getNotes();
        let randomValue = Math.floor(Math.random() * (notes.value.length - 1));

        global.stored_title = pages.atMainPage().getNotesGrid().getTitle(randomValue);
        console.log('Title is: ' + global.stored_title);
        return browser.elementIdClick(notes.value[randomValue].value.ELEMENT);
    }); 

    cucumber.When(/^I click create note button$/, () => {
        return pages.atMainPage().getNotesGrid().getCreateButton().click();   
    }); 

    cucumber.When(/^I switch Only my notes toggle and count the notes$/, () => {
        let countNotes = pages.atMainPage().getNotesGrid().getNotes().value.length;
        global.stored_count = countNotes;
        return pages.atMainPage().getToggle().click();   
    });

    cucumber.When(/^the count of notes is less than before$/, () => {
        let countMyNotes = pages.atMainPage().getNotesGrid().getNotes().value.length;
        expect(countMyNotes).to.be.below(global.stored_count);
    });

    cucumber.When(/^I expand filter dropdown$/, () => {
        return pages.atMainPage().getFilterDropdown().expand();
    });

    cucumber.Then(/^the filter menu (is|is not) visible$/, (condition) => {
        return expect(pages.atMainPage().getFilter().isVisible()).to.equal(condition === 'is');
    });

    cucumber.Then(/^the text of default filtering is '(.*)'$/, (text) => {
        return expect(pages.atMainPage().getFilterDropdown().getDefaultValue()).to.equal(text)
        
    });

    cucumber.Then(/^the '(.*)' option (is|is not) visible in the filter$/, (element, condition) => {
        return expect(pages.atMainPage().getFilter().getElement(element).isVisible()).to.equal(condition === 'is');
        
    });

    cucumber.When(/^I choose '(.*)' option$/, (option) => {
        return pages.atMainPage().getFilter().getElement(option).click();
    });

    cucumber.Then(/^the notes are sorted by 'Title'$/, () => {
        let countNotes = pages.atMainPage().getNotesGrid().getNotes().value.length;
        let noteTitles = [];
        
        for (let i = 0; i < countNotes; i++) {
            noteTitles.push(pages.atMainPage().getNotesGrid().getTitle(i))
        }

        let sorted = noteTitles.slice().sort();
        return expect(noteTitles.join(',')).to.equal(sorted.join(','));   
    });
});
