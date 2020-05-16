const Page = require('./page');
const NotesGrid = require('../webelements/components/notesGrid');
const PageElement = require('../webelements/PageElement');
const Filter = require('../webelements/components/filter');

class MainPage extends Page {

	open() {
		super.open('main');
	}

	/*
	 *Checks if a page is opened
	 * @returns {boolean}
	 */
	isPageOpened() {
		return this.getNotesGrid().isExisting();
	}

	/*
	 *Initializes notes list
	 * @returns {Element}
	 */
	getNotesGrid() {
		browser.$('.notes-grid').waitForExist({timeout: GLOBAL_TIMEOUT});
		return new NotesGrid(browser.$('.notes-grid'));
	}

	/*
	 *Initializes toggle for all/my notes
	 * @returns {PageElement}
	 */
	getToggle() {
		return new PageElement(browser.$('#onlyMyButton'));
	}

	/*
	 *Initializes filter for notes
	 * @returns {Filter}
	 */
	getFilter() {
		browser.$('[style="padding: 16px 0px; display: table-cell; user-select: none; width: 256px;"]').waitForExist({timeout: GLOBAL_TIMEOUT});
		return new Filter(browser.$('[style="padding: 16px 0px; display: table-cell; user-select: none; width: 256px;"]'));
	}

	/*
	 *Initializes dropdown for nfilter
	 * @returns {Dropdown}
	 */
	getFilterDropdown() {
		browser.$('.filter-item').waitForExist({timeout: GLOBAL_TIMEOUT});
		return new PageElement(browser.$('.filter-item'));
	}
}

module.exports = MainPage;