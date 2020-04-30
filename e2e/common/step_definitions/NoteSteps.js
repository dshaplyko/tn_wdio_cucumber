const {
	When,
	Then
} = require('cucumber');
const pages = require('../../pageObjects/pages');

Then(/^the '(.*)' element (is|is not) visible on the Note page$/, (item, condition) => {
	switch (item.toLowerCase()) {
		case 'map':
			return expect(pages.atNotePage().getMap().isDisplayed()).to.equal(condition === 'is');
		case 'content':
			return expect(pages.atNotePage().isNoteTextVisible()).to.equal(condition === 'is');
		case 'close button':
			return expect(pages.atNotePage().getCloseButton().isDisplayed()).to.equal(condition === 'is');
		case 'image gallery':
			return expect(pages.atNotePage().getGallery().isDisplayed()).to.equal(condition === 'is');
		case 'sign':
			return expect(pages.atNotePage().isSignVisible()).to.equal(condition === 'is');
	}
});

When(/^I click close button on the Note$/, () => {
	return pages.atNotePage().getCloseButton().click();
});

Then(/^the title of the opened note should be equal to the stored one$/, () => {
	return expect(pages.atNotePage().getTitle()).to.equal(global.stored_title);
});