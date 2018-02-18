"use strict";
const WebElement = require('../webelement')

class Note extends WebElement {

    /*
    *Gets the note
    * @returns {elements}
    */
    getNote() {
        return this.rootEl.elements('.note-grid-item');
    }

    /*
    *Gets the note's title
    * @returns {text}
    */
    getNoteTitle() {
        return this.rootEl.element('.note-grid-item .title');
    }

    /*
    *Gets the note's subtitle
    * @returns {text}
    */
    getNoteSubTitle() {
        return this.rootEl.element('.note-grid-item .subtitle');
    }

}

module.exports = Note;