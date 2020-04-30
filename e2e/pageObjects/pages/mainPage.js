"use strict";
const Page = require('./page');
const NotesGrid = require('../webelements/structures/notesGrid');
const Checkbox = require('../webelements/checkboxes/checkbox');
const Dropdown = require('../webelements/dropdowns/dropdown');
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
        browser.$('.notes-grid').waitForExist(GLOBAL_TIMEOUT);
        return new NotesGrid (browser.$('.notes-grid'));   
    }

    /*
    *Initializes toggle for all/my notes
    * @returns {Checkbox}
    */
    getToggle() { 
        return new Checkbox (browser.$('#onlyMyButton')); 
    }

    /*
    *Initializes filter for notes
    * @returns {Filter}
    */
    getFilter() {
        browser.$('[style="padding: 16px 0px; display: table-cell; user-select: none; width: 256px;"]').waitForExist(GLOBAL_TIMEOUT);
        return new Filter (browser.$('[style="padding: 16px 0px; display: table-cell; user-select: none; width: 256px;"]'));
    }

    /*
    *Initializes dropdown for nfilter
    * @returns {Dropdown}
    */
    getFilterDropdown() {
        browser.$('.filter-item').waitForExist(GLOBAL_TIMEOUT);
        return new Dropdown (browser.$('.filter-item'));
    }
}

module.exports = MainPage;