const PageComponent = require('../PageComponent');
const PageElement = require('../PageElement');

class NotesGrid extends PageComponent {

	/*
	 *Gets the note
	 * @returns {object}
	 */
	getNotes() {
		return this.rootEl.$$('.note-grid-item:not(.add)');
	}

	/*
	 *Gets the notes titles
	 * @returns {object}
	 */
	getNoteTitles() {
		return this.rootEl.$('.note-grid-item .title');
	}

	/*
	 *Gets the note subtitles
	 * @returns {object}
	 */
	getNoteSubTitles() {
		return this.rootEl.$('.note-grid-item .subtitle');
	}

	/*
	 *Gets a title of an appropriate note
	 * @returns {String}
	 */
	getTitle(index) {
		return this.rootEl.$(`.note-grid-item:nth-child(${++index}) .title`).getText();
	}


	/*
	 *Gets a Create note Button
	 * @returns {Button}
	 */
	getCreateButton() {
		return new PageElement(this.rootEl.$('.add'));
	}

	/*
	 *Gets a Delete note Button
	 * @returns {Button}
	 */
	getTrashButton(index) {
		return new PageElement(this.rootEl.$(`.note-grid-item:nth-child(${++index}) .fa-trash`));
	}
}

module.exports = NotesGrid;