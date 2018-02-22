"use strict";
const WebElement = require('../webelement')

class NotesGrid extends WebElement {

    /*
    *Gets the note
    * @returns {elements}
    */
    getNotes() {
        return this.rootEl.elements('.note-grid-item:not(.add)');
    }

    /*
    *Gets the note's title
    * @returns {text}
    */
    getNoteTitles() {
        return this.rootEl.elements('.note-grid-item .title');
    }

    /*
    *Gets the note's subtitle
    * @returns {text}
    */
    getNoteSubTitles() {
        return this.rootEl.elements('.note-grid-item .subtitle');
    }

}

module.exports = NotesGrid;