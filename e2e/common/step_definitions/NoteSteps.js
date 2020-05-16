const {
	When,
	Then
} = require('cucumber');
const pages = require('../../po/pages');

Then(/^the '(.*)' element (is|is not) visible on the Note page$/, (item, condition) => {
	switch (item.toLowerCase()) {
		case 'map':
			return expect(pages.atNotePage().getMap().isDisplayed()).toEqual(condition === 'is');
		case 'content':
			return expect(pages.atNotePage().isNoteTextVisible()).toEqual(condition === 'is');
		case 'close button':
			return expect(pages.atNotePage().getCloseButton().isDisplayed()).toEqual(condition === 'is');
		case 'image gallery':
			return expect(pages.atNotePage().getGallery().isDisplayed()).toEqual(condition === 'is');
		case 'sign':
			return expect(pages.atNotePage().isSignVisible()).toEqual(condition === 'is');
	}
});

When(/^I click close button on the Note$/, () => {
	return pages.atNotePage().getCloseButton().click();
});

Then(/^the title of the opened note should be equal to the stored one$/, () => {
	return expect(pages.atNotePage().getTitle()).toEqual(global.stored_title);
});