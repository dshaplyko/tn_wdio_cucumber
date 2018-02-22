"use strict";
const Page = require('./page');
const NotesGrid = require('../webelements/structures/notesGrid');
const Checkbox = require('../webelements/checkboxes/checkbox');
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
        return this.getNotesGrid().isVisible();
    }
    
    /*
    *Initializes notes list
    * @returns {Element}
    */
    getNotesGrid() { 
        browser.element('.notes-grid').waitForVisible(GLOBAL_TIMEOUT);
        return new NotesGrid (browser.element('.notes-grid'));   
    }

    /*
    *Initializes toggle for all/my notes
    * @returns {Checkbox}
    */
    getToggle() { 
        return new Checkbox (browser.element('#onlyMyButton')); 
    }

    /*
    *Initializes filter for notes
    * @returns {Filter}
    */
    getFilter() {
        return new Filter (browser.element('.filter-item'));
    }
}

module.exports = MainPage;