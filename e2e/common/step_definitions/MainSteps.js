const {
	When,
	Then
} = require('cucumber');
const pages = require('../../po/pages');

Then(/^the list of notes should be displayed$/, () => {
	return expect(pages.atMainPage().getNotesGrid().isDisplayed()).toEqual(true);
});

Then(/^the '(.*)' element (is|is not) existing on the Main page$/, (element, condition) => {
	switch (element.toLowerCase()) {
		case 'filter':
			return expect(pages.atMainPage().getFilterDropdown().isExisting()).toEqual(condition === 'is');
		case 'toggle':
			return expect(pages.atMainPage().getToggle().isExisting()).toEqual(condition === 'is');
	}
});

Then(/^each of note entries has '(.*)'$/, item => {
	const countTitles = pages.atMainPage().getNotesGrid().getNotes().length;
	const countSubTitles = pages.atMainPage().getNotesGrid().getNoteSubTitles().length;
	const countNotes = pages.atMainPage().getNotesGrid().getNotes().length;
	const valueToCompare = item.toLowerCase() === 'title' ? countTitles : countSubTitles;

	return expect(countNotes).toEqual(valueToCompare);
});

When(/^I click on a random note item and store its title$/, () => {
	const notes = pages.atMainPage().getNotesGrid().getNotes();
	const randomValue = Math.floor(Math.random() * (notes.length - 1) );
	
	global.stored_title = pages.atMainPage().getNotesGrid().getTitle(randomValue);
	console.log('Title is: ' + global.stored_title);
	return notes[randomValue].click();
});

When(/^I click create note button$/, () => {
	return pages.atMainPage().getNotesGrid().getCreateButton().click();
});

When(/^I switch Only my notes toggle and count the notes$/, () => {
	const countNotes = pages.atMainPage().getNotesGrid().getNotes().length;
	global.stored_count = countNotes;
	return pages.atMainPage().getToggle().click();
});

When(/^the count of notes is less than before$/, () => {
	const countMyNotes = pages.atMainPage().getNotesGrid().getNotes().length;
	expect(countMyNotes).toBeLessThan(global.stored_count);
});

When(/^I expand filter dropdown$/, () => {
	return pages.atMainPage().getFilterDropdown().click();
});

Then(/^the filter menu (is|is not) visible$/, condition => {
	return expect(pages.atMainPage().getFilter().isDisplayed()).toEqual(condition === 'is');
});

Then(/^the text of default filtering is '(.*)'$/, text => {
	return expect(pages.atMainPage().getFilterDropdown().getText()).toEqual(text);

});

Then(/^the '(.*)' option (is|is not) visible in the filter$/, (element, condition) => {
	return expect(pages.atMainPage().getFilter().getElement(element).isDisplayed()).toEqual(condition === 'is');

});

When(/^I choose '(.*)' option$/, (option) => {
	return pages.atMainPage().getFilter().getElement(option).click();
});

Then(/^the notes are sorted by 'Title'$/, () => {
	const countNotes = pages.atMainPage().getNotesGrid().getNotes().length;
	let noteTitles = [];

	noteTitles = pages.atMainPage().getNotesGrid().map(note => note.getTitle());

	for (let i = 0; i < countNotes; i++) {
		noteTitles.push(pages.atMainPage().getNotesGrid().getTitle(i));
	}

	const sorted = noteTitles.slice().sort();
	return expect(noteTitles.join(',')).toEqual(sorted.join(','));
});