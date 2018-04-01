"use strict";
const WebElement = require('../webelement');
const Button = require('../buttons/button');

class NotesGrid extends WebElement {

    /*
    *Gets the note
    * @returns {object}
    */
    getNotes() {
        return this.rootEl.elements('.note-grid-item:not(.add)');
    }

    /*
    *Gets the notes titles
    * @returns {object}
    */
    getNoteTitles() {
        return this.rootEl.elements('.note-grid-item .title');
    }

    /*
    *Gets the note subtitles
    * @returns {object}
    */
    getNoteSubTitles() {
        return this.rootEl.elements('.note-grid-item .subtitle');
    }

    /*
    *Gets a title of an appropriate note
    * @returns {String}
    */
    getTitle(index) {
        return this.rootEl.element(`.note-grid-item:nth-child(${++index}) .title`).getText();
    }


    /*
    *Gets a Create note Button
    * @returns {Button}
    */
    getCreateButton() {
        return new Button (this.rootEl.element('.add'));
    }

    /*
    *Gets a Delete note Button
    * @returns {Button}
    */
    getTrashButton(index) {
        return new Button (this.rootEl.element(`.note-grid-item:nth-child(${++index}) .fa-trash`));
    }
}

module.exports = NotesGrid;